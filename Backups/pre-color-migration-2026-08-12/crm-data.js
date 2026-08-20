// Toughjobs CRM & Ops Studio — sample data
window.CRM_DATA = (function () {
  const TEAM = [
    { id: "marcus", name: "Marcus Reed", role: "Agency Owner", initials: "MR" },
    { id: "dana", name: "Dana Ortiz", role: "Technical Lead", initials: "DO" },
    { id: "jamal", name: "Jamal Carter", role: "Media Buyer", initials: "JC" },
  ];

  const STATUSES = ["Discovery", "Proposal Pitched", "Onboarding", "Active Management", "Paused / Seasonal"];
  const TASK_STATUSES = ["Backlog", "In Progress", "AI Testing / QA", "Blocked", "Completed"];
  const TRADES = ["HVAC", "Plumbing", "Roofing", "Electrician", "Pest Control", "Multi-Trade"];
  const STACKS = ["ServiceTitan", "Housecall Pro", "Jobber", "Other", "None"];
  const AI_TOOLS = ["Voice AI Booker", "SMS Speed-to-Lead Bot", "Webform Auto-Responder", "Review Gaining Engine"];

  const CHECKLIST = [
    "Kickoff & Asset Intake (Brand Guide, logos, hex colors)",
    "GMB/GBP Access (Request manager access to Google Profile)",
    "Ad Account Access (Secure Google/Meta Ads permissions)",
    "FSM Integration (Connect API webhook to ServiceTitan/Jobber)",
    "Twilio Provisioning (Buy local tracking numbers for Voice/SMS)",
    "Knowledge Base Ingestion (Feed pricing, service menus, FAQs to AI)",
    "Speed-to-Lead Logic Test (Simulate webform to test <60s SMS reply)",
    "Voice Agent QA (Execute 3 live test calls to check booking logic)",
    "Dashboard Setup (Connect client-facing performance portal)",
    "Go-Live Approval (15-min handoff call with owner and launch)",
  ];

  const CLIENTS = [
    {
      id: "apex", name: "Apex Plumbing & HVAC", status: "Active Management", trade: "Multi-Trade",
      territory: "2140 River Dr, Moline, IL 61265", stack: "ServiceTitan",
      retainer: 3500, adSpend: 6000, ai: ["Voice AI Booker", "SMS Speed-to-Lead Bot", "Review Gaining Engine"],
      manager: "marcus", leads: 148, jobs: 62, contact: "Ray Delgado",
      checklist: [1,1,1,1,1,1,1,1,1,1],
    },
    {
      id: "ironclad", name: "Ironclad Roofing Co.", status: "Onboarding", trade: "Roofing",
      territory: "877 Elm St, Davenport, IA 52803", stack: "Jobber",
      retainer: 2800, adSpend: 4500, ai: ["SMS Speed-to-Lead Bot", "Webform Auto-Responder"],
      manager: "dana", leads: 0, jobs: 0, contact: "Tessa Boyd",
      checklist: [1,1,1,1,0,0,0,0,0,0],
    },
    {
      id: "voltvine", name: "Volt & Vine Electrical", status: "Active Management", trade: "Electrician",
      territory: "412 4th Ave, Rock Island, IL 61201", stack: "Housecall Pro",
      retainer: 2200, adSpend: 3000, ai: ["Voice AI Booker", "Webform Auto-Responder"],
      manager: "jamal", leads: 96, jobs: 41, contact: "Priya Nair",
      checklist: [1,1,1,1,1,1,1,1,1,1],
    },
    {
      id: "rivercity", name: "River City Pest Solutions", status: "Proposal Pitched", trade: "Pest Control",
      territory: "95 Kimberly Rd, Bettendorf, IA 52722", stack: "None",
      retainer: 1800, adSpend: 2000, ai: [],
      manager: "marcus", leads: 0, jobs: 0, contact: "Hank Wills",
      checklist: [0,0,0,0,0,0,0,0,0,0],
    },
    {
      id: "summit", name: "Summit Heating & Air", status: "Paused / Seasonal", trade: "HVAC",
      territory: "3301 Ave of the Cities, East Moline, IL 61244", stack: "ServiceTitan",
      retainer: 3000, adSpend: 5000, ai: ["Voice AI Booker", "SMS Speed-to-Lead Bot"],
      manager: "dana", leads: 210, jobs: 88, contact: "Gwen Park",
      checklist: [1,1,1,1,1,1,1,1,1,1],
    },
    {
      id: "blueanchor", name: "Blue Anchor Plumbing", status: "Discovery", trade: "Plumbing",
      territory: "1508 Brady St, Davenport, IA 52803", stack: "Other",
      retainer: 0, adSpend: 0, ai: [],
      manager: "marcus", leads: 0, jobs: 0, contact: "Sam Okafor",
      checklist: [0,0,0,0,0,0,0,0,0,0],
    },
  ];

  const TASKS = [
    { id: 1, name: "Configure Twilio webhook for Apex Plumbing", client: "apex", assignee: "dana", status: "Completed", hours: 3.5, due: "2026-06-12" },
    { id: 2, name: "Q3 LSA budget rebalance — Apex", client: "apex", assignee: "jamal", status: "In Progress", hours: 1.2, due: "2026-07-10" },
    { id: 3, name: "Jobber API webhook — Ironclad", client: "ironclad", assignee: "dana", status: "In Progress", hours: 4.0, due: "2026-07-09" },
    { id: 4, name: "Voice agent booking-logic QA (3 test calls)", client: "ironclad", assignee: "dana", status: "AI Testing / QA", hours: 0.8, due: "2026-07-14" },
    { id: 5, name: "Knowledge base ingestion — Ironclad pricing menu", client: "ironclad", assignee: "dana", status: "Backlog", hours: 0, due: "2026-07-16" },
    { id: 6, name: "Meta retargeting creative refresh — Volt & Vine", client: "voltvine", assignee: "jamal", status: "In Progress", hours: 2.1, due: "2026-07-11" },
    { id: 7, name: "Review engine SMS copy A/B test", client: "voltvine", assignee: "jamal", status: "AI Testing / QA", hours: 1.5, due: "2026-07-13" },
    { id: 8, name: "Proposal deck + ROI model — River City Pest", client: "rivercity", assignee: "marcus", status: "In Progress", hours: 2.0, due: "2026-07-08" },
    { id: 9, name: "Database reactivation strategy — Summit", client: "summit", assignee: "marcus", status: "Blocked", hours: 0.5, due: "2026-07-07" },
    { id: 10, name: "Discovery call prep — Blue Anchor", client: "blueanchor", assignee: "marcus", status: "Backlog", hours: 0, due: "2026-07-15" },
    { id: 11, name: "GA4 → client dashboard connector — Summit", client: "summit", assignee: "dana", status: "Blocked", hours: 1.0, due: "2026-07-09" },
    { id: 12, name: "Google Ads negative keyword sweep — Apex", client: "apex", assignee: "jamal", status: "Completed", hours: 0.7, due: "2026-06-30" },
  ];

  return { TEAM, STATUSES, TASK_STATUSES, TRADES, STACKS, AI_TOOLS, CHECKLIST, CLIENTS, TASKS };
})();
