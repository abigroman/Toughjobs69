// Toughjobs CRM — shared UI primitives
const { useState, useMemo } = React;
const D = window.CRM_DATA;

const STATUS_COLORS = {
  "Discovery": "#8892A8",
  "Proposal Pitched": "#B78B2E",
  "Onboarding": "#2E6FB7",
  "Active Management": "#2E8B57",
  "Paused / Seasonal": "#C8262A",
};
const TASK_COLORS = {
  "Backlog": "#8892A8",
  "In Progress": "#2E6FB7",
  "AI Testing / QA": "#7A5AE0",
  "Blocked": "#C8262A",
  "Completed": "#2E8B57",
};

function fmtMoney(n) {
  return n ? "$" + n.toLocaleString() : "—";
}
function teamById(id) {
  return D.TEAM.find(function (t) { return t.id === id; });
}
function clientById(id) {
  return D.CLIENTS.find(function (c) { return c.id === id; });
}

function StatusPill(props) {
  const color = (props.map || STATUS_COLORS)[props.value] || "#8892A8";
  return (
    <span className="pill" style={{ color: color, borderColor: color + "55", background: color + "14" }}>
      <span className="pill-dot" style={{ background: color }}></span>
      {props.value}
    </span>
  );
}

function Avatar(props) {
  const t = teamById(props.id);
  if (!t) { return null; }
  return (
    <span className="avatar" title={t.name + " — " + t.role}>{t.initials}</span>
  );
}

function TradeTag(props) {
  return <span className="trade-tag">{props.trade}</span>;
}

function ProgressBar(props) {
  return (
    <div className="progress-track">
      <div className="progress-fill" style={{ width: (props.pct * 100) + "%" }}></div>
    </div>
  );
}

function StatBlock(props) {
  return (
    <div className="stat-block">
      <div className="stat-num">{props.value}</div>
      <div className="stat-label">{props.label}</div>
    </div>
  );
}

function SectionTitle(props) {
  return <h2 className="section-title">{props.children}</h2>;
}

Object.assign(window, { StatusPill, Avatar, TradeTag, ProgressBar, StatBlock, SectionTitle, STATUS_COLORS, TASK_COLORS, fmtMoney, teamById, clientById });
