// Screen: Leads — real inbound capture from the public site.
// Reads LeadsStore (Business Assessment + email gate) and QuizStore (trade
// quiz). Both stores fall back to this-device localStorage when no Firebase
// project is configured, so this screen works with zero setup and lights up
// cross-device the moment a database URL is pasted into leads-store.js /
// quiz-store.js.
//
// Sibling babel scripts share one script scope, so `useState` (crm-ui) and
// `useStateS1` / `useStateApp` (crm-screens / crm-app) are already taken —
// alias again here, same as those files do.
const { useState: useStateLeads, useEffect: useEffectLeads } = React;

const SOURCE_COLORS = {
  "Assessment": "#2E6FB7",
  "Quiz": "#B78B2E",
  "Email gate": "#7A5AE0",
};

const LEAD_FILTERS = ["All", "Assessment", "Quiz", "Email gate"];

// ── Value helpers ───────────────────────────────────────────────────────────
function leadTs(ts) {
  if (ts == null) { return 0; }
  const n = typeof ts === "number" ? ts : Date.parse(ts);
  return isNaN(n) ? 0 : n;
}

function fmtWhen(ts) {
  const n = leadTs(ts);
  if (!n) { return "—"; }
  const d = new Date(n);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" }) +
    " · " + d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function plainValue(v) {
  if (v == null) { return ""; }
  if (Array.isArray(v)) { return v.join(" · "); }
  if (typeof v === "object") {
    return Object.keys(v).map(function (k) { return plainValue(v[k]); }).filter(Boolean).join(" · ");
  }
  return String(v);
}

function humanKey(k) {
  return String(k).replace(/[_-]+/g, " ");
}

// ── Assessment answers ──────────────────────────────────────────────────────
// intake-questions.js is loaded alongside this screen, so answers can be shown
// with their real question text and option labels. Everything degrades to the
// raw ids if that file ever stops being loaded.
function intakeQuestion(qid) {
  const set = window.INTAKE;
  if (!set || !set.QUESTIONS) { return null; }
  return set.QUESTIONS.find(function (q) { return q.id === qid; }) || null;
}

function optionLabel(q, value) {
  if (!q || !q.options) { return plainValue(value); }
  const o = q.options.find(function (x) { return x.value === value; });
  return o ? o.label : plainValue(value);
}

function answerText(q, a) {
  if (a == null || a === "") { return ""; }
  if (typeof a === "string") { return optionLabel(q, a); }
  if (q && q.kind === "dual" && q.fields) {
    return q.fields
      .map(function (f) { return a[f.id] ? f.label + ": " + a[f.id] : ""; })
      .filter(Boolean).join("   |   ");
  }
  if (a && Array.isArray(a.selected)) {
    const parts = a.selected.map(function (v) { return optionLabel(q, v); });
    if (a.other) { parts.push(a.other); }
    if (a.note) { parts.push(a.note); }
    return parts.join(" · ");
  }
  return plainValue(a);
}

function answerRows(answers) {
  if (!answers) { return []; }
  return Object.keys(answers)
    .filter(function (k) { return k.indexOf("__note") === -1; })
    .map(function (k) {
      const q = intakeQuestion(k);
      const text = answerText(q, answers[k]);
      const note = answers[k + "__note"];
      return {
        label: q ? q.q : humanKey(k),
        value: note ? text + " — " + note : text,
      };
    })
    .filter(function (r) { return !!r.value; });
}

function quizRows(l) {
  const rows = [];
  if (l.tradeName || l.trade) { rows.push({ label: "Trade", value: l.tradeName || l.trade }); }
  if (l.city) { rows.push({ label: "City", value: l.city }); }
  if (l.score != null) { rows.push({ label: "Quiz score", value: l.score + " pts · " + (l.correct || 0) + " correct" }); }
  rows.push({ label: "Asked for a call", value: l.callOptIn ? "Yes" + (l.callTime ? " — " + l.callTime : "") : "No" });
  Object.keys(l.profile || {}).forEach(function (k) {
    rows.push({ label: humanKey(k), value: plainValue(l.profile[k]) });
  });
  Object.keys(l.probes || {}).forEach(function (k) {
    rows.push({ label: humanKey(k), value: plainValue(l.probes[k]) });
  });
  if (l.stage) { rows.push({ label: "Furthest stage", value: humanKey(l.stage) }); }
  return rows.filter(function (r) { return !!r.value; });
}

// ── Normalizers ─────────────────────────────────────────────────────────────
function normalizeAssessmentLead(l, i) {
  const isGate = l.source === "email-gate";
  const rows = isGate ? [] : answerRows(l.answers);
  const preview = rows.length ? rows.length + " answered · " + rows[0].value : "No answers recorded";
  return {
    key: "a" + i + "-" + (l.email || l.name || "anon") + "-" + leadTs(l.ts),
    source: isGate ? "Email gate" : "Assessment",
    name: l.name || (isGate ? "Email only" : "Unnamed"),
    org: l.company || l.city || "",
    email: l.email || "",
    phone: l.phone || "",
    summary: isGate ? "Opened the free tools hub" : preview,
    rows: rows,
    ts: l.ts,
  };
}

// The quiz writes one lead row per stage (started → profile → probe → call-optin
// → finished) and each row carries everything gathered so far, so collapse to
// the newest row per person rather than showing the same person five times.
function normalizeQuizLeads(list) {
  const byPerson = {};
  list.forEach(function (l, i) {
    const id = String(l.email || l.name || ("anon" + i)).toLowerCase();
    const prev = byPerson[id];
    if (!prev || leadTs(l.ts) >= leadTs(prev.ts)) { byPerson[id] = l; }
  });
  return Object.keys(byPerson).map(function (id) {
    const l = byPerson[id];
    return {
      key: "q-" + id + "-" + leadTs(l.ts),
      source: "Quiz",
      name: l.name || "Anonymous",
      org: l.tradeName || l.trade || "",
      email: l.email || "",
      phone: l.phone || "",
      summary: (l.score != null ? l.score + " pts on the " + (l.tradeName || "trade") + " quiz" : "Quiz in progress") +
        (l.callOptIn ? " · asked for a call" : ""),
      rows: quizRows(l),
      ts: l.ts,
    };
  });
}

// ── Screen ──────────────────────────────────────────────────────────────────
function LeadsScreen() {
  const [leads, setLeads] = useStateLeads([]);
  const [loading, setLoading] = useStateLeads(true);
  const [filter, setFilter] = useStateLeads("All");
  const [open, setOpen] = useStateLeads(null);

  useEffectLeads(function () {
    let cancelled = false;
    const jobs = [
      window.LeadsStore ? window.LeadsStore.getLeads() : Promise.resolve([]),
      window.QuizStore && window.QuizStore.getLeads ? window.QuizStore.getLeads() : Promise.resolve([]),
    ];
    Promise.all(jobs).then(function (res) {
      if (cancelled) { return; }
      const merged = (res[0] || []).map(normalizeAssessmentLead)
        .concat(normalizeQuizLeads(res[1] || []));
      merged.sort(function (a, b) { return leadTs(b.ts) - leadTs(a.ts); });
      setLeads(merged);
      setLoading(false);
    }).catch(function () {
      if (cancelled) { return; }
      setLeads([]);
      setLoading(false);
    });
    return function () { cancelled = true; };
  }, []);

  const countBy = function (src) {
    return leads.filter(function (l) { return l.source === src; }).length;
  };
  const rows = filter === "All" ? leads : leads.filter(function (l) { return l.source === filter; });

  const live = (window.LeadsStore && window.LeadsStore.live) || (window.QuizStore && window.QuizStore.live);
  const sub = loading
    ? "Loading…"
    : leads.length + " lead" + (leads.length === 1 ? "" : "s") + " · " +
      (live ? "live database" : "saved on this device (connect Firebase to sync everywhere)");

  return (
    <div>
      <div className="screen-head">
        <div>
          <SectionTitle>Inbound Leads</SectionTitle>
          <p className="screen-sub">{sub}</p>
        </div>
        <div className="view-switch" role="tablist">
          {LEAD_FILTERS.map(function (f) {
            return (
              <button key={f} className={filter === f ? "on" : ""} onClick={function () { setFilter(f); }}>
                {f}
              </button>
            );
          })}
        </div>
      </div>

      <div className="stat-grid">
        <div className="panel stat-panel"><StatBlock value={leads.length} label="Total leads captured" /></div>
        <div className="panel stat-panel"><StatBlock value={countBy("Assessment")} label="Business assessments" /></div>
        <div className="panel stat-panel"><StatBlock value={countBy("Quiz")} label="Trade quiz entries" /></div>
        <div className="panel stat-panel"><StatBlock value={countBy("Email gate")} label="Free-tools unlocks" /></div>
      </div>

      {loading ? (
        <p className="muted" style={{ marginTop: 20 }}>Reading the lead stores…</p>
      ) : rows.length === 0 ? (
        <div className="panel" style={{ marginTop: 20 }}>
          <h3 className="panel-title">No leads yet</h3>
          <p className="muted">
            Assessment submissions, free-tools unlocks and quiz entries land here automatically.
            Complete the intake at <code>intake.html</code> or the quiz at <code>quiz.html</code> and
            reload this screen to see them.
          </p>
        </div>
      ) : (
        <div className="table-wrap" style={{ marginTop: 20 }}>
          <table className="data-table slim">
            <thead>
              <tr><th>Source</th><th>Name</th><th>Contact</th><th>Submitted</th><th>Received</th><th></th></tr>
            </thead>
            <tbody>
              {rows.map(function (l) {
                const isOpen = open === l.key;
                return (
                  <React.Fragment key={l.key}>
                    <tr>
                      <td><StatusPill value={l.source} map={SOURCE_COLORS} /></td>
                      <td>
                        <div className="td-name">{l.name}</div>
                        {l.org ? <div className="cc-stack">{l.org}</div> : null}
                      </td>
                      <td>
                        {l.email ? <div><a href={"mailto:" + l.email}>{l.email}</a></div> : null}
                        {l.phone ? <div className="mono">{l.phone}</div> : null}
                        {!l.email && !l.phone ? <span className="muted">—</span> : null}
                      </td>
                      <td><span className="lead-sum">{l.summary}</span></td>
                      <td className="mono">{fmtWhen(l.ts)}</td>
                      <td>
                        {l.rows.length ? (
                          <button className="lead-expand" onClick={function () { setOpen(isOpen ? null : l.key); }}>
                            {isOpen ? "Hide ▴" : "View ▾"}
                          </button>
                        ) : null}
                      </td>
                    </tr>
                    {isOpen ? (
                      <tr className="lead-detail">
                        <td colSpan={6}>
                          <div className="lead-detail-inner">
                            {l.rows.map(function (r, i) {
                              return (
                                <div className="field-row" key={i}>
                                  <span className="field-label">{r.label}</span>
                                  <span className="field-value">{r.value}</span>
                                </div>
                              );
                            })}
                          </div>
                        </td>
                      </tr>
                    ) : null}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { LeadsScreen, SOURCE_COLORS });
