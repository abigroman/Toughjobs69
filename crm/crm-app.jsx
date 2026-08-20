// Toughjobs CRM — app shell
const { useState: useStateApp, useEffect: useEffectApp } = React;
const DA = window.CRM_DATA;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#C8262A",
  "density": "regular",
  "clientsView": "kanban"
}/*EDITMODE-END*/;

const NAV = [
  { id: "clients", label: "Clients", icon: "◆" },
  { id: "tasks", label: "Tasks", icon: "▣" },
  { id: "dashboard", label: "Dashboards", icon: "◎" },
  { id: "automations", label: "Automations", icon: "⚡" },
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [screen, setScreen] = useStateApp("clients");
  const [openClient, setOpenClient] = useStateApp(null);
  const [persona, setPersona] = useStateApp("marcus");
  const [view, setView] = useStateApp(TWEAK_DEFAULTS.clientsView);
  const [clients, setClients] = useStateApp(DA.CLIENTS);
  const [tasks, setTasks] = useStateApp(DA.TASKS);

  useEffectApp(function () { setView(t.clientsView); }, [t.clientsView]);

  function toggleStep(cid, i) {
    setClients(function (prev) {
      return prev.map(function (c) {
        if (c.id !== cid) { return c; }
        const chk = c.checklist.slice();
        chk[i] = chk[i] ? 0 : 1;
        return Object.assign({}, c, { checklist: chk });
      });
    });
  }
  function setTaskStatus(tid, status) {
    setTasks(function (prev) {
      return prev.map(function (x) { return x.id === tid ? Object.assign({}, x, { status: status }) : x; });
    });
  }
  function goClient(id) { setScreen("clients"); setOpenClient(id); }

  const current = openClient ? clients.find(function (c) { return c.id === openClient; }) : null;
  const blockedCount = tasks.filter(function (x) { return x.status === "Blocked"; }).length;

  return (
    <div className={"app density-" + t.density} style={{ "--accent": t.accent }}>
      <aside className="sidebar">
        <div className="side-brand">
          <img src="../assets/toughjobs-monogram-logo.png" alt="Toughjobs" width="96" height="64" />
          <div className="side-brand-text">CRM &amp; OPS<br />STUDIO</div>
        </div>
        <nav className="side-nav">
          {NAV.map(function (n) {
            return (
              <button
                key={n.id}
                className={"side-link" + (screen === n.id ? " on" : "")}
                onClick={function () { setScreen(n.id); setOpenClient(null); }}
              >
                <span className="side-icon">{n.icon}</span>
                {n.label}
                {n.id === "automations" && blockedCount > 0 ? <span className="side-badge">{blockedCount + 1}</span> : null}
              </button>
            );
          })}
        </nav>
        <div className="side-foot">
          <div className="side-foot-label">Home Services Agency</div>
          <div className="side-foot-sub">Quad Cities · (309) 233-9004</div>
        </div>
      </aside>

      <main className="main" data-screen-label={screen}>
        {screen === "clients" && current
          ? <ClientDetail client={current} tasks={tasks} onBack={function () { setOpenClient(null); }} onToggleStep={toggleStep} />
          : null}
        {screen === "clients" && !current
          ? <ClientsScreen clients={clients} view={view} setView={setView} onOpen={setOpenClient} />
          : null}
        {screen === "tasks"
          ? <TasksScreen tasks={tasks} onSetStatus={setTaskStatus} onOpenClient={goClient} />
          : null}
        {screen === "dashboard"
          ? <DashboardScreen clients={clients} tasks={tasks} persona={persona} setPersona={setPersona} onOpenClient={goClient} />
          : null}
        {screen === "automations"
          ? <AutomationsScreen clients={clients} tasks={tasks} />
          : null}
      </main>

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakColor label="Accent" value={t.accent} options={["#C8262A", "#002768", "#2E8B57", "#B78B2E"]} onChange={function (v) { setTweak("accent", v); }} />
        <TweakSection label="Layout" />
        <TweakRadio label="Density" value={t.density} options={["compact", "regular"]} onChange={function (v) { setTweak("density", v); }} />
        <TweakRadio label="Clients view" value={t.clientsView} options={["kanban", "table"]} onChange={function (v) { setTweak("clientsView", v); }} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
