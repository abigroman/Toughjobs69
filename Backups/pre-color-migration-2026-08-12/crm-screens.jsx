// Screens: Clients Pipeline + Client Detail
const { useState: useStateS1 } = React;
const DS1 = window.CRM_DATA;

function ClientCard(props) {
  const c = props.client;
  const done = c.checklist.filter(Boolean).length;
  return (
    <button className="client-card" onClick={function () { props.onOpen(c.id); }}>
      <div className="cc-top">
        <span className="cc-name">{c.name}</span>
        <Avatar id={c.manager} />
      </div>
      <div className="cc-tags">
        <TradeTag trade={c.trade} />
        <span className="cc-stack">{c.stack}</span>
      </div>
      <div className="cc-meta">
        <span>{fmtMoney(c.retainer)}<em>/mo</em></span>
        {c.status === "Onboarding" ? <span className="cc-chk">{done}/10 steps</span> : null}
        {c.status === "Active Management" ? <span className="cc-chk">{c.leads} leads</span> : null}
      </div>
    </button>
  );
}

function PipelineKanban(props) {
  return (
    <div className="kanban">
      {DS1.STATUSES.map(function (s) {
        const cards = props.clients.filter(function (c) { return c.status === s; });
        return (
          <div className="kanban-col" key={s}>
            <div className="kanban-head">
              <StatusPill value={s} />
              <span className="kanban-count">{cards.length}</span>
            </div>
            <div className="kanban-cards">
              {cards.map(function (c) { return <ClientCard key={c.id} client={c} onOpen={props.onOpen} />; })}
              {cards.length === 0 ? <div className="kanban-empty">No accounts</div> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PipelineTable(props) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr><th>Client</th><th>Status</th><th>Trade</th><th>Stack</th><th>Retainer</th><th>Ad Spend</th><th>Leads</th><th>Jobs</th><th>AM</th></tr>
        </thead>
        <tbody>
          {props.clients.map(function (c) {
            return (
              <tr key={c.id} onClick={function () { props.onOpen(c.id); }}>
                <td className="td-name">{c.name}</td>
                <td><StatusPill value={c.status} /></td>
                <td><TradeTag trade={c.trade} /></td>
                <td>{c.stack}</td>
                <td>{fmtMoney(c.retainer)}</td>
                <td>{fmtMoney(c.adSpend)}</td>
                <td>{c.leads || "—"}</td>
                <td>{c.jobs || "—"}</td>
                <td><Avatar id={c.manager} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function ClientsScreen(props) {
  const mrr = props.clients.reduce(function (a, c) { return a + c.retainer; }, 0);
  return (
    <div>
      <div className="screen-head">
        <div>
          <SectionTitle>Clients &amp; Accounts</SectionTitle>
          <p className="screen-sub">{props.clients.length} accounts · {fmtMoney(mrr)} MRR under management</p>
        </div>
        <div className="view-switch" role="tablist">
          <button className={props.view === "kanban" ? "on" : ""} onClick={function () { props.setView("kanban"); }}>Pipeline</button>
          <button className={props.view === "table" ? "on" : ""} onClick={function () { props.setView("table"); }}>Table</button>
        </div>
      </div>
      {props.view === "kanban"
        ? <PipelineKanban clients={props.clients} onOpen={props.onOpen} />
        : <PipelineTable clients={props.clients} onOpen={props.onOpen} />}
    </div>
  );
}

function FieldRow(props) {
  return (
    <div className="field-row">
      <span className="field-label">{props.label}</span>
      <span className="field-value">{props.children}</span>
    </div>
  );
}

function ClientDetail(props) {
  const c = props.client;
  const done = c.checklist.filter(Boolean).length;
  const tasks = props.tasks.filter(function (t) { return t.client === c.id; });
  const mgr = teamById(c.manager);
  return (
    <div>
      <button className="back-link" onClick={props.onBack}>← All clients</button>
      <div className="detail-head">
        <div>
          <h2 className="detail-name">{c.name}</h2>
          <div className="cc-tags" style={{ marginTop: 8 }}>
            <StatusPill value={c.status} />
            <TradeTag trade={c.trade} />
          </div>
        </div>
        <div className="detail-stats">
          <StatBlock value={fmtMoney(c.retainer)} label="Retainer / mo" />
          <StatBlock value={fmtMoney(c.adSpend)} label="Target ad spend" />
          <StatBlock value={c.leads || "—"} label="Leads generated" />
          <StatBlock value={c.jobs || "—"} label="Est. jobs booked" />
        </div>
      </div>

      <div className="detail-grid">
        <div className="panel">
          <h3 className="panel-title">Account record</h3>
          <FieldRow label="Primary contact">{c.contact}</FieldRow>
          <FieldRow label="Territory / dispatch hub">{c.territory}</FieldRow>
          <FieldRow label="Dispatch tech stack">{c.stack}</FieldRow>
          <FieldRow label="Account manager">{mgr.name} · {mgr.role}</FieldRow>
          <FieldRow label="AI deployments">
            {c.ai.length ? (
              <span className="ai-chips">{c.ai.map(function (a) { return <span className="ai-chip" key={a}>{a}</span>; })}</span>
            ) : "None yet"}
          </FieldRow>
        </div>

        <div className="panel">
          <div className="panel-title-row">
            <h3 className="panel-title">Onboarding checklist</h3>
            <span className="panel-count">{done}/10</span>
          </div>
          <ProgressBar pct={done / 10} />
          <ul className="checklist">
            {DS1.CHECKLIST.map(function (step, i) {
              const on = !!c.checklist[i];
              return (
                <li key={i}>
                  <label className={"chk" + (on ? " done" : "")}>
                    <input type="checkbox" checked={on} onChange={function () { props.onToggleStep(c.id, i); }} />
                    <span className="chk-box">{on ? "✓" : ""}</span>
                    <span>{step}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="panel panel-wide">
          <h3 className="panel-title">Linked tasks ({tasks.length})</h3>
          {tasks.length === 0 ? <p className="muted">No fulfillment tasks linked yet.</p> : (
            <table className="data-table slim">
              <tbody>
                {tasks.map(function (t) {
                  return (
                    <tr key={t.id}>
                      <td className="td-name">{t.name}</td>
                      <td><StatusPill value={t.status} map={TASK_COLORS} /></td>
                      <td><Avatar id={t.assignee} /></td>
                      <td className="mono">{t.hours ? t.hours.toFixed(1) + "h" : "—"}</td>
                      <td className="mono">{t.due}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ClientsScreen, ClientDetail });
