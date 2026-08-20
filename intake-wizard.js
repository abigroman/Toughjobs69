// intake-wizard.js — Toughjobs guided business intake wizard (vanilla JS, no React).
// One question per screen · progress + autosave · summary + book-a-call · owner console.
(function () {
  "use strict";
  const { CATEGORIES, QUESTIONS, TRADES } = window.INTAKE;
  const STORE_KEY = "tj-intake-v1";
  const root = document.getElementById("root");
  const catById = (id) => CATEGORIES.find((c) => c.id === id);

  // ── Persistence ─────────────────────────────────────────────
  function loadState() {
    try { const raw = localStorage.getItem(STORE_KEY); return raw ? JSON.parse(raw) : null; }
    catch (e) { return null; }
  }
  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify({ step: S.step, contact: S.contact, answers: S.answers })); } catch (e) {}
  }

  const saved = loadState();
  const S = {
    step: saved ? saved.step || 0 : 0,
    contact: (saved && saved.contact) || { name: "", company: "", trade: "", email: "", phone: "" },
    answers: (saved && saved.answers) || {},
    submitted: false,
    hadProgress: !!(saved && (saved.step || 0) > 0),
  };

  const TOTAL = QUESTIONS.length;
  const CONTACT_STEP = 1;
  const FIRST_Q = 2;
  const SUMMARY_STEP = FIRST_Q + TOTAL;

  // ── Helpers ─────────────────────────────────────────────────
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  function isAnswered(q, a) {
    if (q.kind === "single") return !!a;
    if (q.kind === "multi") return a && a.selected && a.selected.length > 0;
    if (q.kind === "dual") return a && q.fields.every((f) => a[f.id]);
    return true; // text optional
  }

  function summarize(q, a) {
    if (!a && q.kind !== "text") return "—";
    if (q.kind === "single") { const o = q.options.find((x) => x.value === a); return o ? o.label : "—"; }
    if (q.kind === "multi") {
      const labels = ((a && a.selected) || []).map((v) => { const o = q.options.find((x) => x.value === v); return o ? o.label : v; });
      if (a && a.other) labels.push(a.other);
      return labels.length ? labels.join(" · ") : "—";
    }
    if (q.kind === "dual") return q.fields.map((f) => f.label + ": " + ((a && a[f.id]) || "—")).join("   |   ");
    if (q.kind === "text") return a && a.trim() ? a : "(skipped)";
    return "—";
  }

  function goTo(step) {
    S.submitted = false;
    S.step = step;
    saveState();
    render();
    const top = root.offsetTop;
    window.scrollTo({ top: Math.max(0, top - 80), behavior: "smooth" });
  }

  function resetAll() {
    if (!window.confirm("Clear all your answers and start over?")) return;
    try { localStorage.removeItem(STORE_KEY); } catch (e) {}
    S.contact = { name: "", company: "", trade: "", email: "", phone: "" };
    S.answers = {};
    S.submitted = false;
    S.hadProgress = false;
    goTo(0);
  }

  // ── Shared chrome ──────────────────────────────────────────
  const CHECK_SVG = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2.5 7.5 6 11 11.5 4" fill="none" stroke="var(--accent)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

  function marks(color) {
    const m = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><line x1="20" y1="0" x2="20" y2="14" stroke="' + color + '" stroke-width="1"></line><line x1="20" y1="26" x2="20" y2="40" stroke="' + color + '" stroke-width="1"></line><line x1="0" y1="20" x2="14" y2="20" stroke="' + color + '" stroke-width="1"></line><line x1="26" y1="20" x2="40" y2="20" stroke="' + color + '" stroke-width="1"></line><circle cx="20" cy="20" r="6" stroke="' + color + '" stroke-width="1" fill="none"></circle></svg>';
    return '<div style="position:absolute;z-index:1;pointer-events:none;top:28px;left:28px">' + m + '</div>' +
      '<div style="position:absolute;z-index:1;pointer-events:none;top:28px;right:28px">' + m + '</div>' +
      '<div style="position:absolute;z-index:1;pointer-events:none;bottom:28px;left:28px">' + m + '</div>' +
      '<div style="position:absolute;z-index:1;pointer-events:none;bottom:28px;right:28px">' + m + '</div>';
  }

  function stamp(no, title, color) {
    return '<div style="position:absolute;z-index:1;pointer-events:none;top:28px;right:88px;border:1px solid ' + color + ';padding:8px 14px;font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.12em;color:' + color + ';text-transform:uppercase">' +
      '<div style="font-weight:700">' + esc(no) + '</div><div>' + esc(title) + ' · 1:1</div></div>';
  }

  function progressBar(index) {
    const pct = Math.round(((index + 1) / TOTAL) * 100);
    return '<div style="position:sticky;top:0;z-index:5;background:rgba(10,15,28,.85);backdrop-filter:blur(8px);border-bottom:1px solid rgba(255,255,255,.08)">' +
      '<div class="wiz-bar-track"><div class="wiz-bar-fill" style="width:' + pct + '%"></div></div></div>';
  }

  function stepFrame(opts) {
    const cat = opts.catId ? catById(opts.catId) : null;
    return '<section class="bg-blueprint-dark" style="position:relative;color:var(--white);min-height:calc(100vh - 120px);display:flex;flex-direction:column;padding-block:0">' +
      (opts.progress || "") +
      marks("rgba(140,170,220,.28)") +
      '<div class="container step-in" style="position:relative;z-index:2;flex:1;display:flex;flex-direction:column;justify-content:center;padding-block:56px;max-width:920px">' +
      '<div style="display:flex;gap:14px;align-items:center;margin-bottom:14px">' +
      (cat ? '<span class="eyebrow" style="color:var(--accent)">' + cat.no + ' · ' + esc(cat.label) + '</span>' : "") +
      (opts.counter ? '<span style="font-family:ui-monospace,Menlo,monospace;font-size:12px;color:rgba(255,255,255,.45);letter-spacing:.1em">' + esc(opts.counter) + '</span>' : "") +
      '</div>' +
      '<h2 class="display" style="font-size:clamp(30px, 4.4vw, 56px);margin:0 0 14px;color:var(--white);max-width:880px">' + opts.title + '</h2>' +
      (opts.help ? '<p style="font-size:16.5px;line-height:1.55;color:rgba(255,255,255,.62);margin:0 0 32px;max-width:620px">' + esc(opts.help) + '</p>' : "") +
      '<div style="margin-bottom:40px">' + opts.body + '</div>' +
      '<div style="display:flex;gap:12px;align-items:center">' +
      '<button class="btn btn-ghost" data-act="back">← Back</button>' +
      '<button class="btn" data-act="next"' + (opts.nextDisabled ? " disabled" : "") + '>' + (opts.nextLabel || "Next →") + '</button>' +
      (opts.nextDisabled ? '<span style="font-size:13px;color:rgba(255,255,255,.4);margin-left:4px">Pick an option to continue</span>' : "") +
      '</div></div></section>';
  }

  // ── Screens ────────────────────────────────────────────────
  function renderIntro() {
    const cats = CATEGORIES.map((c) =>
      '<div style="display:flex;flex-direction:column;gap:4px">' +
      '<span class="display" style="font-size:22px;color:var(--accent)">' + c.no + '</span>' +
      '<span style="font-family:\'Archivo\',sans-serif;font-weight:700;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.75)">' + esc(c.label) + '</span></div>'
    ).join("");
    const buttons = S.hadProgress
      ? '<button class="btn" data-act="resume">Resume where I left off →</button><button class="btn btn-ghost" data-act="fresh">Start over</button>'
      : '<button class="btn" data-act="start">Start the intake →</button>';
    return '<section class="bg-blueprint-dark" style="position:relative;color:var(--white);min-height:calc(100vh - 120px);display:flex;align-items:center;padding-block:80px">' +
      marks("rgba(140,170,220,.28)") + stamp("TJ-INTAKE", "DISCOVERY", "rgba(140,170,220,.45)") +
      '<div class="container step-in" style="position:relative;z-index:2;max-width:980px">' +
      '<span class="eyebrow" style="color:var(--accent)">Business discovery · 16 questions · ~4 minutes</span>' +
      '<h1 class="display split" style="font-size:clamp(48px, 7vw, 104px);margin:20px 0 28px"><span class="a">Before we pitch you anything,</span> <span class="b">tell us how your business really works.</span></h1>' +
      '<p style="max-width:660px;font-size:18px;line-height:1.6;color:rgba(255,255,255,.78);margin:0 0 36px">No fluff, no obligation. Answer straight and we\'ll come back with a clear read on where the fastest wins are — and whether we\'re even the right fit. Most answers are pick-a-box, and you can leave and come back anytime.</p>' +
      '<div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center">' + buttons + '</div>' +
      '<div style="display:flex;gap:32px;margin-top:56px;flex-wrap:wrap">' + cats + '</div>' +
      '</div></section>';
  }

  function renderContact() {
    const c = S.contact;
    const tradeOpts = ['<option value="">Select your trade…</option>']
      .concat(TRADES.map((t) => '<option value="' + esc(t) + '"' + (c.trade === t ? " selected" : "") + '>' + esc(t) + '</option>')).join("");
    const body =
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;max-width:720px" class="wiz-dual">' +
      '<div><label class="wiz-field-lbl">Your name *</label><input class="wiz-input" data-contact="name" value="' + esc(c.name) + '" /></div>' +
      '<div><label class="wiz-field-lbl">Company *</label><input class="wiz-input" data-contact="company" value="' + esc(c.company) + '" /></div>' +
      '<div style="grid-column:1 / -1"><label class="wiz-field-lbl">Trade *</label><select class="wiz-select" data-contact="trade">' + tradeOpts + '</select></div>' +
      '<div><label class="wiz-field-lbl">Email</label><input class="wiz-input" type="email" data-contact="email" value="' + esc(c.email) + '" placeholder="you@company.com" /></div>' +
      '<div><label class="wiz-field-lbl">Phone</label><input class="wiz-input" type="tel" data-contact="phone" value="' + esc(c.phone) + '" placeholder="(309) 555-1234" /></div>' +
      '</div><p style="font-size:13px;color:rgba(255,255,255,.4);margin-top:16px">* Name, company, trade, and at least one way to reach you.</p>';
    return stepFrame({
      title: '<span>First — </span><span style="color:var(--accent)">who are we talking to?</span>',
      help: "So we know whose business we're digging into and how to reach you with the rundown.",
      body: body,
      nextDisabled: !contactValid(),
    });
  }

  function contactValid() {
    const c = S.contact;
    return !!(c.name.trim() && c.company.trim() && c.trade && (c.email.trim() || c.phone.trim()));
  }

  function tile(label, sub, on, box, attrs) {
    return '<button type="button" class="wiz-opt' + (box ? " box" : "") + '" data-on="' + (on ? "1" : "0") + '" ' + attrs + '>' +
      '<span class="tick">' + CHECK_SVG + '</span>' +
      '<span class="wiz-opt-lbl">' + esc(label) + '</span>' +
      (sub ? '<span class="wiz-opt-sub">' + esc(sub) + '</span>' : "") + '</button>';
  }

  function renderQuestion(index) {
    const q = QUESTIONS[index];
    const a = S.answers[q.id];
    let body = "";

    if (q.kind === "single") {
      body = '<div style="display:flex;flex-direction:column;gap:16px"><div class="wiz-grid">' +
        q.options.map((o) => tile(o.label, o.sub, a === o.value, false, 'data-single="' + esc(o.value) + '"')).join("") + '</div>' +
        (q.note ? '<div><label class="wiz-field-lbl">' + esc(q.note) + '</label><input class="wiz-input" data-qnote="1" value="' + esc(S.answers[q.id + "__note"] || "") + '" placeholder="Type a short note…" /></div>' : "") + '</div>';
    } else if (q.kind === "multi") {
      const sel = (a && a.selected) || [];
      body = '<div style="display:flex;flex-direction:column;gap:16px"><div class="wiz-grid">' +
        q.options.map((o) => tile(o.label, o.sub, sel.includes(o.value), true, 'data-multi="' + esc(o.value) + '"')).join("") + '</div>' +
        (q.other ? '<div><label class="wiz-field-lbl">Something else?</label><input class="wiz-input" data-other="1" value="' + esc((a && a.other) || "") + '" placeholder="Add your own…" /></div>' : "") +
        (q.note ? '<div><label class="wiz-field-lbl">' + esc(q.note) + '</label><textarea class="wiz-textarea" style="min-height:110px" data-mnote="1" placeholder="Type a short note…">' + esc((a && a.note) || "") + '</textarea></div>' : "") + '</div>';
    } else if (q.kind === "dual") {
      const v = a || {};
      body = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px" class="wiz-dual">' +
        q.fields.map((f) =>
          '<div><label class="wiz-field-lbl">' + esc(f.label) + '</label>' +
          '<select class="wiz-select" data-dual="' + esc(f.id) + '"><option value="">Select…</option>' +
          f.options.map((o) => '<option value="' + esc(o) + '"' + (v[f.id] === o ? " selected" : "") + '>' + esc(o) + '</option>').join("") +
          '</select></div>').join("") + '</div>';
    } else {
      body = '<textarea class="wiz-textarea" data-text="1" placeholder="' + esc(q.placeholder || "") + '">' + esc(a || "") + '</textarea>';
    }

    return stepFrame({
      catId: q.cat,
      counter: "Q" + String(index + 1).padStart(2, "0") + " / " + TOTAL,
      title: esc(q.q),
      help: q.help,
      body: body,
      nextLabel: index === TOTAL - 1 ? "Review answers →" : "Next →",
      nextDisabled: !isAnswered(q, a),
      progress: progressBar(index),
    });
  }

  function renderSummary() {
    const c = S.contact;
    let rows =
      '<div class="wiz-sumrow" style="border-top:1px solid rgba(255,255,255,.12)"><div class="wiz-sum-q">' +
      '<div style="font-family:\'Archivo\',sans-serif;font-weight:800;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);margin-bottom:6px">Contact</div>' +
      '<div style="font-size:16px;color:rgba(255,255,255,.9);line-height:1.5">' + esc(c.name) + ' · ' + esc(c.company) + ' · ' + esc(c.trade) +
      '<br />' + esc([c.email, c.phone].filter(Boolean).join(" · ")) + '</div></div>' +
      '<button class="wiz-edit" data-editcontact="1">Edit</button></div>';

    CATEGORIES.forEach((cat) => {
      const qs = QUESTIONS.filter((q) => q.cat === cat.id);
      rows += '<div style="margin-top:36px"><div class="display" style="font-size:20px;color:var(--white);margin-bottom:4px"><span style="color:var(--accent)">' + cat.no + '</span> ' + esc(cat.title) + '</div>';
      qs.forEach((q) => {
        const qIndex = QUESTIONS.indexOf(q);
        const note = S.answers[q.id + "__note"];
        rows += '<div class="wiz-sumrow"><div class="wiz-sum-q">' +
          '<div style="font-size:14px;color:rgba(255,255,255,.55);margin-bottom:5px">' + esc(q.q) + '</div>' +
          '<div style="font-size:16px;color:rgba(255,255,255,.95);line-height:1.5;font-weight:500">' + esc(summarize(q, S.answers[q.id])) + '</div>' +
          (note ? '<div style="font-size:14px;color:rgba(255,255,255,.6);margin-top:4px;font-style:italic">“' + esc(note) + '”</div>' : "") +
          '</div><button class="wiz-edit" data-editq="' + qIndex + '">Edit</button></div>';
      });
      rows += '</div>';
    });

    return '<section class="bg-blueprint-dark" style="position:relative;color:var(--white);padding-block:80px;min-height:calc(100vh - 120px)">' +
      marks("rgba(140,170,220,.28)") + stamp("TJ-SUM", "REVIEW", "rgba(140,170,220,.45)") +
      '<div class="container step-in" style="position:relative;z-index:2;max-width:920px">' +
      '<span class="eyebrow" style="color:var(--accent)">Almost done · Review</span>' +
      '<h2 class="display split" style="font-size:clamp(36px, 5vw, 72px);margin:16px 0 12px"><span class="a">Here\'s what </span><span class="b">we heard.</span></h2>' +
      '<p style="font-size:17px;line-height:1.6;color:rgba(255,255,255,.7);margin:0 0 16px;max-width:620px">Give it a once-over. Edit anything that\'s off, then send it across and grab a time to talk it through.</p>' +
      rows +
      '<div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:44px">' +
      '<button class="btn" data-act="submit">Send &amp; book my call →</button>' +
      '<button class="btn btn-ghost" data-editq="0">Back to questions</button>' +
      '</div></div></section>';
  }

  function renderSubmitted() {
    const first = S.contact.name ? ", " + esc(S.contact.name.split(" ")[0]) : "";
    return '<section class="bg-blueprint-red" style="position:relative;color:var(--white);min-height:calc(100vh - 120px);display:flex;align-items:center;padding-block:80px;box-shadow:inset 0 4px 12px rgba(0,0,0,.25);background-color:var(--red-2)">' +
      marks("rgba(0,0,0,.35)") + stamp("TJ-08", "NEXT STEP", "rgba(0,0,0,.45)") +
      '<div class="container step-in" style="position:relative;z-index:2;max-width:900px;text-align:center;margin:0 auto">' +
      '<span class="eyebrow" style="color:var(--white);opacity:.85">Got it' + first + '</span>' +
      '<h2 class="display" style="font-size:clamp(44px, 6.5vw, 96px);margin:16px 0 24px"><span style="color:var(--white)">Now let\'s </span><span style="color:var(--ink)">talk it through.</span></h2>' +
      '<p style="font-size:18px;line-height:1.6;color:rgba(255,255,255,.92);margin:0 auto 40px;max-width:600px">Your answers are in. Book a 30-minute strategy call and we\'ll walk you through where the fastest wins are — no pitch deck, no pressure.</p>' +
      '<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">' +
      '<a class="btn btn-dark" href="contact.html">Book my strategy call →</a>' +
      '<a class="btn" href="tel:+13093061140" style="background:rgba(0,0,0,.25);border:2px solid rgba(255,255,255,.5)">⚡ (309) 306-1140</a>' +
      '</div>' +
      '<p style="font-size:13px;color:rgba(255,255,255,.7);margin-top:28px">We\'ll review everything before the call. Your responses stay saved on this device.</p>' +
      '</div></section>';
  }

  // ── Render + event delegation ──────────────────────────────
  function render() {
    let html;
    if (S.step === 0) html = renderIntro();
    else if (S.step === CONTACT_STEP) html = renderContact();
    else if (S.step >= FIRST_Q && S.step < SUMMARY_STEP) html = renderQuestion(S.step - FIRST_Q);
    else if (S.submitted) html = renderSubmitted();
    else html = renderSummary();
    root.innerHTML = html;
  }

  root.addEventListener("click", (e) => {
    const btn = e.target.closest("button, a[data-act]");
    if (!btn) return;
    const qIndex = S.step - FIRST_Q;
    const q = qIndex >= 0 && qIndex < TOTAL ? QUESTIONS[qIndex] : null;

    if (btn.dataset.act === "start" || btn.dataset.act === "fresh") return goTo(CONTACT_STEP);
    if (btn.dataset.act === "resume") return goTo(Math.max(CONTACT_STEP, S.step));
    if (btn.dataset.act === "back") return goTo(S.step - 1);
    if (btn.dataset.act === "next") {
      if (S.step === CONTACT_STEP) return contactValid() ? goTo(FIRST_Q) : undefined;
      return goTo(S.step + 1);
    }
    if (btn.dataset.act === "submit") {
      S.submitted = true; render(); window.scrollTo({ top: 0, behavior: "smooth" }); return;
    }
    if (btn.dataset.editcontact) return goTo(CONTACT_STEP);
    if (btn.dataset.editq != null && btn.dataset.editq !== "") return goTo(FIRST_Q + parseInt(btn.dataset.editq, 10));

    if (q && btn.dataset.single != null) {
      S.answers[q.id] = btn.dataset.single; saveState(); render(); return;
    }
    if (q && btn.dataset.multi != null) {
      const cur = S.answers[q.id] || {};
      const sel = cur.selected || [];
      cur.selected = sel.includes(btn.dataset.multi) ? sel.filter((x) => x !== btn.dataset.multi) : sel.concat(btn.dataset.multi);
      S.answers[q.id] = cur; saveState(); render(); return;
    }
  });

  root.addEventListener("input", (e) => {
    const el = e.target;
    const qIndex = S.step - FIRST_Q;
    const q = qIndex >= 0 && qIndex < TOTAL ? QUESTIONS[qIndex] : null;

    if (el.dataset.contact) {
      S.contact[el.dataset.contact] = el.value; saveState();
      // refresh Next disabled state without full re-render (keeps focus)
      const next = root.querySelector('button[data-act="next"]');
      if (next) next.disabled = !contactValid();
      return;
    }
    if (!q) return;
    if (el.dataset.text) { S.answers[q.id] = el.value; saveState(); return; }
    if (el.dataset.qnote) { S.answers[q.id + "__note"] = el.value; saveState(); return; }
    if (el.dataset.other) { const cur = S.answers[q.id] || {}; cur.other = el.value; S.answers[q.id] = cur; saveState(); return; }
    if (el.dataset.mnote) { const cur = S.answers[q.id] || {}; cur.note = el.value; S.answers[q.id] = cur; saveState(); return; }
    if (el.dataset.dual) {
      const cur = S.answers[q.id] || {}; cur[el.dataset.dual] = el.value; S.answers[q.id] = cur; saveState();
      const next = root.querySelector('button[data-act="next"]');
      if (next) next.disabled = !isAnswered(q, S.answers[q.id]);
      return;
    }
  });

  render();

  // ── Owner console (hidden; #owner hash or Ctrl/Cmd+Shift+O or TJ button) ──
  function buildAnalysisPrompt() {
    const lines = [];
    CATEGORIES.forEach((cat) => {
      lines.push("\n[" + cat.title + "]");
      QUESTIONS.filter((q) => q.cat === cat.id).forEach((q) => {
        const ans = summarize(q, S.answers[q.id]);
        const note = S.answers[q.id + "__note"];
        lines.push("Q: " + q.q + "\nA: " + ans + (note ? "\nNote: " + note : ""));
      });
    });
    const c = S.contact;
    return 'You are a senior strategist at Toughjobs, a marketing + AI-automation agency for blue-collar trades (HVAC, plumbing, electrical, roofing, etc). A prospect just completed our intake. Analyze their answers and produce an INTERNAL diagnosis for our team — blunt, specific, no fluff. Explain your reasoning so we understand WHY you recommend what you do.\n\nPROSPECT\nName: ' + (c.name || "—") + '\nCompany: ' + (c.company || "—") + '\nTrade: ' + (c.trade || "—") + '\nContact: ' + ([c.email, c.phone].filter(Boolean).join(" / ") || "—") + '\n\nINTAKE ANSWERS' + lines.join("\n") + '\n\nRespond with ONLY valid JSON (no markdown fences) in exactly this shape:\n{\n  "fit": "strong" | "moderate" | "weak",\n  "fitWhy": "1-2 sentences on whether they\'re a good fit for us and why",\n  "headline": "one punchy sentence summarizing their core problem",\n  "priorities": [\n    { "title": "short priority name", "service": "Websites|SEO|Paid|Branding|AI Automation", "why": "the reasoning, tied to their specific answers", "firstMove": "the concrete first action we\'d take" }\n  ],\n  "talkingPoints": ["point to raise on the strategy call", "..."],\n  "watchOuts": ["risk, gap, or red flag to keep in mind"]\n}\nGive 2-4 priorities, ordered by impact. Keep every field tight.';
  }

  const FIT_MAP = {
    strong: { bg: "#1F8A5B", label: "Strong fit" },
    moderate: { bg: "#C8262A", label: "Moderate fit" },
    weak: { bg: "#5B6471", label: "Weak fit" },
  };

  let ocEl = null;

  function ocBody(html) {
    const b = ocEl && ocEl.querySelector(".oc-body");
    if (b) b.innerHTML = html;
  }

  function openOwner() {
    if (ocEl) return;
    ocEl = document.createElement("div");
    ocEl.className = "oc-overlay";
    ocEl.innerHTML =
      '<div class="oc-panel"><div class="oc-head"><div>' +
      '<div class="oc-lbl">Internal · Owner only</div>' +
      '<div style="font-family:\'Archivo Black\',sans-serif;font-size:22px;color:#fff;text-transform:uppercase;letter-spacing:-.01em;margin-top:2px">Claude Read</div>' +
      '</div><button class="oc-x" data-oc="close">×</button></div>' +
      '<div class="oc-body"></div></div>';
    document.body.appendChild(ocEl);

    ocEl.addEventListener("click", (e) => {
      if (e.target === ocEl || e.target.dataset.oc === "close") return closeOwner();
      if (e.target.dataset.oc === "run") return runAnalysis();
    });

    const hasData = QUESTIONS.some((q) => S.answers[q.id] != null) || S.contact.name;
    const who = '<div style="margin-bottom:18px;color:rgba(255,255,255,.85)"><span style="font-family:\'Archivo\',sans-serif;font-weight:700;font-size:15px">' +
      esc(S.contact.company || "Unnamed company") + '</span><span style="color:rgba(255,255,255,.45);font-size:14px"> · ' +
      esc(S.contact.trade || "—") + ' · ' + esc(S.contact.name || "—") + '</span></div>';
    ocBody(who + (!hasData
      ? '<p style="color:rgba(255,255,255,.6);font-size:15px;line-height:1.6">No submission to analyze yet. Have someone complete the intake (or fill it yourself), then reopen this panel.</p>'
      : '<p style="color:rgba(255,255,255,.7);font-size:15px;line-height:1.6;margin-top:0">Send this prospect\'s answers to Claude for an internal diagnosis — top priorities, recommended service mix, and the reasoning behind each call.</p><button class="btn" data-oc="run">Analyze with Claude →</button>'));
  }

  function closeOwner() { if (ocEl) { ocEl.remove(); ocEl = null; } }

  async function runAnalysis() {
    ocBody('<div style="display:flex;align-items:center;gap:14px;color:rgba(255,255,255,.7);padding-top:10px"><div class="oc-spin"></div> Reading the intake…</div>');
    try {
      const text = await window.claude.complete(buildAnalysisPrompt());
      let parsed;
      try { parsed = JSON.parse(text); }
      catch (e) {
        const m = text.match(/\{[\s\S]*\}/);
        if (!m) throw new Error("Could not parse the analysis.");
        parsed = JSON.parse(m[0]);
      }
      const fit = FIT_MAP[parsed.fit] || FIT_MAP.moderate;
      let html = '<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px"><span class="oc-fit" style="background:' + fit.bg + ';color:#fff">' + fit.label + '</span></div>';
      if (parsed.headline) html += '<p style="font-family:\'Archivo\',sans-serif;font-weight:700;font-size:19px;line-height:1.35;color:#fff;margin:0 0 6px">' + esc(parsed.headline) + '</p>';
      if (parsed.fitWhy) html += '<p style="font-size:14.5px;line-height:1.6;color:rgba(255,255,255,.65);margin:0 0 22px">' + esc(parsed.fitWhy) + '</p>';
      html += '<div class="oc-lbl" style="margin-bottom:10px">Priorities &amp; reasoning</div>';
      (parsed.priorities || []).forEach((p, i) => {
        html += '<div class="oc-card"><div style="display:flex;align-items:baseline;gap:10px;margin-bottom:8px">' +
          '<span class="oc-num">' + String(i + 1).padStart(2, "0") + '</span>' +
          '<span style="font-family:\'Archivo\',sans-serif;font-weight:800;font-size:16px;color:#fff;flex:1">' + esc(p.title) + '</span>' +
          (p.service ? '<span style="font-family:\'Archivo\',sans-serif;font-weight:700;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--accent);border:1px solid var(--accent);padding:3px 8px;white-space:nowrap">' + esc(p.service) + '</span>' : "") +
          '</div>' +
          (p.why ? '<div style="font-size:14.5px;line-height:1.55;color:rgba(255,255,255,.78);margin-bottom:8px"><span style="color:rgba(255,255,255,.4)">Why → </span>' + esc(p.why) + '</div>' : "") +
          (p.firstMove ? '<div style="font-size:14px;line-height:1.5;color:rgba(255,255,255,.6)"><span style="color:var(--accent);font-weight:700">First move → </span>' + esc(p.firstMove) + '</div>' : "") +
          '</div>';
      });
      if (parsed.talkingPoints && parsed.talkingPoints.length) {
        html += '<div style="margin-top:18px"><div class="oc-lbl" style="margin-bottom:8px">Talking points for the call</div><ul style="margin:0;padding-left:18px;color:rgba(255,255,255,.78);font-size:14.5px;line-height:1.7">' +
          parsed.talkingPoints.map((t) => '<li>' + esc(t) + '</li>').join("") + '</ul></div>';
      }
      if (parsed.watchOuts && parsed.watchOuts.length) {
        html += '<div style="margin-top:18px"><div class="oc-lbl" style="margin-bottom:8px;color:#E5A100">Watch-outs</div><ul style="margin:0;padding-left:18px;color:rgba(255,255,255,.7);font-size:14.5px;line-height:1.7">' +
          parsed.watchOuts.map((t) => '<li>' + esc(t) + '</li>').join("") + '</ul></div>';
      }
      html += '<div style="display:flex;gap:10px;margin-top:24px"><button class="btn btn-ghost" data-oc="run">Re-run</button></div>' +
        '<p style="font-size:12px;color:rgba(255,255,255,.35);margin-top:18px;line-height:1.5">AI-generated for internal use. Sanity-check before acting on it.</p>';
      ocBody(html);
    } catch (err) {
      ocBody('<p style="color:#ff8a8a;font-size:14px;line-height:1.6">Couldn\'t generate the analysis: ' + esc(err.message || String(err)) + '</p><button class="btn" data-oc="run" style="margin-top:12px">Retry</button>');
    }
  }

  // Owner triggers
  const tj = document.createElement("button");
  tj.textContent = "TJ";
  tj.title = "Internal analysis (owner only)";
  tj.style.cssText = "position:fixed;left:14px;bottom:14px;z-index:60;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);color:rgba(255,255,255,.4);font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:ui-monospace,monospace;font-weight:700";
  tj.addEventListener("click", openOwner);
  document.body.appendChild(tj);

  if (window.location.hash.toLowerCase() === "#owner") openOwner();
  window.addEventListener("hashchange", () => { if (window.location.hash.toLowerCase() === "#owner") openOwner(); });
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "O" || e.key === "o")) {
      e.preventDefault(); ocEl ? closeOwner() : openOwner();
    }
  });
})();
