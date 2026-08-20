// Screens: Tasks board, Role dashboards, Automations
const DS2 = window.CRM_DATA;

function TaskCard(props) {
  const t = props.task;
  const c = clientById(t.client);
  return (
    <div className="task-card">
      <div className="tc-name">{t.name}</div>
      <button className="tc-client" onClick={function () { props.onOpenClient(t.client); }}>{c.name}</button>
      <div className="tc-foot">
        <Avatar id={t.assignee} />
        <span className="mono tc-hours">{t.hours ? t.hours.toFixed(1) + "h" : "0h"}</span>
        <span className="mono tc-due">{t.due.slice(5)}</span>
      </div>
      <select
        className="tc-status"
        value={t.status}
        onChange={function (e) { props.onSetStatus(t.id, e.target.value); }}
      >
        {DS2.TASK_STATUSES.map(function (s) { return <option key={s} value={s}>{s}</option>; })}
      </select>
    </div>
  );
}

function TasksScreen(props) {
  const blocked = props.tasks.filter(function (t) { return t.status === "Blocked"; }).length;
  return (
    <div>
      <div className="screen-head">
        <div>
          <SectionTitle>Tasks &amp; Fulfillment</SectionTitle>
          <p className="screen-sub">{props.tasks.length} tasks · {blocked} blocked</p>
        </div>
      </div>
      <div className="kanban tasks-kanban">
        {DS2.TASK_STATUSES.map(function (s) {
          const cards = props.tasks.filter(function (t) { return t.status === s; });
          return (
            <div className="kanban-col" key={s}>
              <div className="kanban-head">
                <StatusPill value={s} map={TASK_COLORS} />
                <span className="kanban-count">{cards.length}</span>
              </div>
              <div className="kanban-cards">
                {cards.map(function (t) {
                  return <TaskCard key={t.id} task={t} onSetStatus={props.onSetStatus} onOpenClient={props.onOpenClient} />;
                })}
                {cards.length === 0 ? <div className="kanban-empty">Empty</div> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---- Role dashboards ----
const PERSONAS = [
  { id: "marcus", title: "Agency Owner", sub: "Strategist / Closer — pipeline & financial oversight" },
  { id: "dana", title: "Technical Lead", sub: "AI prompt engineering, webhooks & QA logs" },
  { id: "jamal", title: "Media Buyer", sub: "Google PPC, LSA, Meta ads & lead delivery" },
];

function DashboardScreen(props) {
  const persona = props.persona;
  const clients = props.clients;
  const tasks = props.tasks;
  const p = PERSONAS.find(function (x) { return x.id === persona; });

  let statCards = [];
  let focusClients = [];
  let focusTasks = [];

  if (persona === "marcus") {
    const mrr = clients.reduce(function (a, c) { return a + c.retainer; }, 0);
    const pipeline = clients.filter(function (c) { return c.status === "Discovery" || c.status === "Proposal Pitched"; });
    statCards = [
      { v: fmtMoney(mrr), l: "Monthly recurring revenue" },
      { v: clients.filter(function (c) { return c.status === "Active Management"; }).length, l: "Active accounts" },
      { v: pipeline.length, l: "In sales pipeline" },
      { v: clients.filter(function (c) { return c.status === "Paused / Seasonal"; }).length, l: "Paused / at risk" },
    ];
    focusClients = pipeline.concat(clients.filter(function (c) { return c.status === "Paused / Seasonal"; }));
    focusTasks = tasks.filter(function (t) { return t.assignee === "marcus" && t.status !== "Completed"; });
  } else if (persona === "dana") {
    const qa = tasks.filter(function (t) { return t.status === "AI Testing / QA"; });
    const blocked = tasks.filter(function (t) { return t.status === "Blocked"; });
    statCards = [
      { v: clients.filter(function (c) { return c.status === "Onboarding"; }).length, l: "Accounts in onboarding" },
      { v: qa.length, l: "In AI testing / QA" },
      { v: blocked.length, l: "Blocked integrations" },
      { v: tasks.filter(function (t) { return t.assignee === "dana"; }).reduce(function (a, t) { return a + t.hours; }, 0).toFixed(1) + "h", l: "Hours logged" },
    ];
    focusClients = clients.filter(function (c) { return c.status === "Onboarding"; });
    focusTasks = tasks.filter(function (t) { return t.assignee === "dana" && t.status !== "Completed"; });
  } else {
    const active = clients.filter(function (c) { return c.status === "Active Management"; });
    const spend = active.reduce(function (a, c) { return a + c.adSpend; }, 0);
    const leads = active.reduce(function (a, c) { return a + c.leads; }, 0);
    statCards = [
      { v: fmtMoney(spend), l: "Managed ad spend / mo" },
      { v: leads, l: "Leads (30 days)" },
      { v: "$" + Math.round(spend / Math.max(leads, 1)), l: "Blended cost per lead" },
      { v: active.reduce(function (a, c) { return a + c.jobs; }, 0), l: "Est. jobs booked" },
    ];
    focusClients = active;
    focusTasks = tasks.filter(function (t) { return t.assignee === "jamal" && t.status !== "Completed"; });
  }

  return (
    <div>
      <div className="screen-head">
        <div>
          <SectionTitle>Role Dashboard</SectionTitle>
          <p className="screen-sub">{p.sub}</p>
        </div>
        <div className="view-switch">
          {PERSONAS.map(function (x) {
            return (
              <button key={x.id} className={persona === x.id ? "on" : ""} onClick={function () { props.setPersona(x.id); }}>
                {x.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="stat-grid">
        {statCards.map(function (s, i) { return <div className="panel stat-panel" key={i}><StatBlock value={s.v} label={s.l} /></div>; })}
      </div>

      <div className="detail-grid" style={{ marginTop: 20 }}>
        <div className="panel">
          <h3 className="panel-title">{persona === "jamal" ? "Active accounts" : persona === "dana" ? "Onboarding queue" : "Pipeline & at-risk"}</h3>
          {focusClients.length === 0 ? <p className="muted">Nothing here right now.</p> : focusClients.map(function (c) {
            return (
              <button className="dash-row" key={c.id} onClick={function () { props.onOpenClient(c.id); }}>
                <span className="td-name">{c.name}</span>
                <StatusPill value={c.status} />
              </button>
            );
          })}
        </div>
        <div className="panel">
          <h3 className="panel-title">My open tasks</h3>
          {focusTasks.length === 0 ? <p className="muted">All clear.</p> : focusTasks.map(function (t) {
            return (
              <div className="dash-row" key={t.id}>
                <span>{t.name}</span>
                <StatusPill value={t.status} map={TASK_COLORS} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ---- Automations ----
function AutomationsScreen(props) {
  const flagged = props.clients.filter(function (c) {
    return c.status === "Paused / Seasonal" || props.tasks.some(function (t) { return t.client === c.id && t.status === "Blocked"; });
  });
  const sample = props.clients.find(function (c) { return c.status === "Active Management"; });
  const mgr = sample ? teamById(sample.manager) : null;
  const cpl = sample && sample.leads ? "$" + Math.round(sample.adSpend / sample.leads) : "$—";

  return (
    <div>
      <div className="screen-head">
        <div>
          <SectionTitle>Automation Blueprints</SectionTitle>
          <p className="screen-sub">Two agentic workflows, with live merge-field previews from your data</p>
        </div>
      </div>

      <div className="detail-grid">
        <div className="panel">
          <div className="panel-title-row">
            <h3 className="panel-title">1 · Internal Emergency Notification</h3>
            <span className="auto-badge">Slack / Email</span>
          </div>
          <p className="auto-trigger"><strong>Trigger:</strong> Account Status → "Paused / Seasonal" <em>or</em> any linked task hits "Blocked"</p>
          <p className="muted" style={{ margin: "10px 0 6px" }}>Currently firing for {flagged.length} account{flagged.length === 1 ? "" : "s"}:</p>
          {flagged.map(function (c) {
            const m = teamById(c.manager);
            return (
              <div className="alert-msg" key={c.id}>
                <div className="alert-head">🚨 Emergency Account Alert: Action Required</div>
                <div className="alert-body">
                  <div><strong>Client:</strong> {c.name}</div>
                  <div><strong>Assigned Team Member:</strong> {m.name}</div>
                  <div><strong>Core Trade:</strong> {c.trade}</div>
                  <p>CRITICAL ISSUE DETECTED: This account has been flagged due to a Fulfillment Block or a Seasonal Drop/Pause. Action Plan: 1. Tech check on AI bots/Twilio logs within 24 hours. 2. Contact client to present a Database Reactivation Strategy. 3. Review linked tasks to identify technical blockers.</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="panel">
          <div className="panel-title-row">
            <h3 className="panel-title">2 · AI Monthly ROI Client SMS Report</h3>
            <span className="auto-badge">SMS via API</span>
          </div>
          <p className="auto-trigger"><strong>Trigger:</strong> Monthly, 1st of month · sent to client's phone</p>
          {sample ? (
            <div className="sms-bubble">
              Hey {sample.contact}, it's {teamById("marcus").name} from the automation team! Quick update on your marketing and AI systems for {sample.name} over the last 30 days. We generated <strong>{sample.leads}</strong> new inbound inquiries for your {sample.trade} team. Your active AI bots ({sample.ai.join(", ")}) successfully auto-responded to 100% of web traffic, helping to lock in an estimated <strong>{sample.jobs}</strong> booked jobs straight into your dispatch system. Your average cost per inbound lead sat at <strong>{cpl}</strong>, keeping us perfectly on budget. Everything is running smoothly for your {sample.territory.split(",").slice(-2).join(",")} territory. Let me know if you are looking to increase capacity next month!
            </div>
          ) : null}
          <p className="muted" style={{ marginTop: 10 }}>Merge fields: [Primary Contact], [Agency Owner Name], [Client Name], [Total Leads Generated], [Core Trade], [AI Deployments], [Estimated Jobs Booked], [Target CPL], [Territory / Service Radius]</p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TasksScreen, DashboardScreen, AutomationsScreen, PERSONAS });
