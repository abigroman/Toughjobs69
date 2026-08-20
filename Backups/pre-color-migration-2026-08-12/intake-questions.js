// intake-questions.js — Toughjobs business intake question set.
// Sensitive figures use ranges / multiple choice instead of open text.

const CATEGORIES = [
  { id: "found",  label: "Foundations",  no: "01", title: "Business & financial foundations" },
  { id: "value",  label: "Value",        no: "02", title: "Your value proposition" },
  { id: "aud",    label: "Audience",     no: "03", title: "Audience realities" },
  { id: "comp",   label: "Competition",  no: "04", title: "Competitive position" },
  { id: "res",    label: "Resources",    no: "05", title: "History & resources" },
];

// kind: 'dual' (two selects), 'single', 'multi', 'text'
// multi/single options: {value,label,sub?}. multi can set other:true for a write-in.
const QUESTIONS = [
  // ── Category 1 — Foundations ──────────────────────────────────────────
  {
    id: "unit_econ", cat: "found", kind: "dual",
    q: "Do you know what a customer is worth?",
    help: "Ballpark is fine — pick the closest band. This anchors everything else.",
    fields: [
      { id: "ltv", label: "Avg. customer lifetime value", options: [
        "Under $500", "$500 – $2K", "$2K – $5K", "$5K – $15K", "$15K – $50K", "$50K+", "Not sure"
      ]},
      { id: "cac", label: "Cost to land a new customer", options: [
        "Under $50", "$50 – $150", "$150 – $400", "$400 – $1K", "$1K+", "Not sure"
      ]},
    ],
  },
  {
    id: "rev_growth", cat: "found", kind: "dual",
    q: "Where are you now — and where do you want to be?",
    help: "Your current run-rate and the growth you're targeting over the next 12 months.",
    fields: [
      { id: "revenue", label: "Current annual revenue", options: [
        "Under $250K", "$250K – $500K", "$500K – $1M", "$1M – $3M", "$3M – $10M", "$10M+", "Prefer not to say"
      ]},
      { id: "growth", label: "12-month growth target", options: [
        "Hold steady", "Up to +25%", "+25% – +50%", "+50% – +100%", "More than double", "Not sure yet"
      ]},
    ],
  },
  {
    id: "margin", cat: "found", kind: "multi",
    q: "Where are your fattest margins?",
    help: "The work you'd happily do more of. Pick all that apply.",
    options: [
      { value: "install", label: "New installs / big-ticket jobs" },
      { value: "service", label: "Service & repair calls" },
      { value: "maint", label: "Maintenance plans / recurring" },
      { value: "emergency", label: "Emergency / after-hours work" },
      { value: "commercial", label: "Commercial contracts" },
      { value: "addons", label: "Add-ons & upgrades" },
    ],
    other: true,
  },

  // ── Category 2 — Value ────────────────────────────────────────────────
  {
    id: "problem", cat: "value", kind: "text",
    q: "What specific, painful problem does your product or service solve for your buyer?",
    help: "In the customer's words — what's broken, urgent, or stressful when they call you.",
    placeholder: "e.g. \"No heat in January and the last guy never showed up...\"",
  },
  {
    id: "why_chosen", cat: "value", kind: "multi",
    q: "Why do customers pick you over the other guys?",
    help: "Pick the reasons you hear most often.",
    options: [
      { value: "speed", label: "We show up fast" },
      { value: "quality", label: "Better workmanship" },
      { value: "trust", label: "Reputation / referrals" },
      { value: "price", label: "Fair, honest pricing" },
      { value: "warranty", label: "Strong warranty / guarantee" },
      { value: "communication", label: "We actually communicate" },
      { value: "availability", label: "We answer the phone" },
    ],
    other: true,
  },
  {
    id: "bottleneck", cat: "value", kind: "single",
    q: "Where does your sales funnel clog up?",
    help: "The single biggest thing holding back more booked jobs.",
    options: [
      { value: "volume", label: "Not enough leads", sub: "The phone just doesn't ring enough" },
      { value: "quality", label: "Leads are low quality", sub: "Tire-kickers and price shoppers" },
      { value: "speed", label: "Too slow to follow up", sub: "Leads go cold before we call back" },
      { value: "closing", label: "We can't close them", sub: "Quotes go out, jobs don't come back" },
      { value: "capacity", label: "We're booked solid", sub: "Can't take on more even if we wanted" },
      { value: "untracked", label: "Honestly, we don't track it", sub: "No idea where leads come from" },
    ],
  },

  // ── Category 3 — Audience ─────────────────────────────────────────────
  {
    id: "best_customer", cat: "aud", kind: "single",
    q: "Who's your best, lowest-hassle customer?",
    help: "The segment that pays well and doesn't fight you on every invoice.",
    options: [
      { value: "homeowners", label: "Homeowners" },
      { value: "property", label: "Property managers / landlords" },
      { value: "commercial", label: "Commercial / business owners" },
      { value: "builders", label: "GCs & builders" },
      { value: "gov", label: "Government / municipal" },
      { value: "mix", label: "A mix — no clear winner" },
    ],
    note: "Anything that makes them ideal? (optional)",
  },
  {
    id: "objections", cat: "aud", kind: "multi",
    q: "What makes a prospect hesitate right before buying?",
    help: "The objections you have to talk through to win the job.",
    options: [
      { value: "price", label: "\"That's more than I expected\"" },
      { value: "trust", label: "\"How do I know you're any good?\"" },
      { value: "timing", label: "\"Let me think about it\"" },
      { value: "approval", label: "\"I need to ask my spouse / partner\"" },
      { value: "quotes", label: "\"I'm getting other quotes\"" },
      { value: "doubt", label: "\"Will this actually fix it?\"" },
    ],
    other: true,
  },
  {
    id: "sales_cycle", cat: "aud", kind: "single",
    q: "How long from first contact to closed deal?",
    help: "Your typical timeline, not the outliers.",
    options: [
      { value: "sameday", label: "Same day", sub: "They call, we book, done" },
      { value: "days", label: "A few days" },
      { value: "weeks", label: "1 – 4 weeks" },
      { value: "months", label: "1 – 3 months" },
      { value: "long", label: "3+ months", sub: "Big projects, long consideration" },
    ],
  },

  // ── Category 4 — Competition ──────────────────────────────────────────
  {
    id: "competitors", cat: "comp", kind: "text",
    q: "Who are you up against?",
    help: "Name your top 2–3 direct competitors — and anyone indirect stealing the work (DIY, big-box, national chains).",
    placeholder: "e.g. \"Acme Heating & Air, Bob's Plumbing, and honestly YouTube DIY...\"",
  },
  {
    id: "losing_to", cat: "comp", kind: "multi",
    q: "Where are competitors beating you?",
    help: "What they do in marketing that you're losing ground to.",
    options: [
      { value: "website", label: "Slicker website" },
      { value: "google", label: "Ranks higher on Google" },
      { value: "reviews", label: "More / better reviews" },
      { value: "ads", label: "Runs ads everywhere" },
      { value: "brand", label: "Better branding & trucks" },
      { value: "social", label: "Active on social media" },
      { value: "unsure", label: "Not sure — can't tell" },
    ],
    other: true,
  },
  {
    id: "line", cat: "comp", kind: "text",
    q: "What will your business never do?",
    help: "Your line in the sand — the corner you refuse to cut, even for the sale.",
    placeholder: "e.g. \"We never use scare tactics or upsell repairs people don't need.\"",
  },

  // ── Category 5 — Resources ────────────────────────────────────────────
  {
    id: "channels", cat: "res", kind: "multi",
    q: "What marketing have you already tried?",
    help: "Everything you've run — we'll dig into what worked next.",
    options: [
      { value: "google_ads", label: "Google Ads" },
      { value: "meta_ads", label: "Facebook / Instagram ads" },
      { value: "seo", label: "SEO" },
      { value: "referral", label: "Referrals / word of mouth" },
      { value: "mail", label: "Direct mail / flyers" },
      { value: "radio", label: "Radio / TV" },
      { value: "wraps", label: "Truck / fleet wraps" },
      { value: "none", label: "Basically nothing yet" },
    ],
    note: "What worked, and what flopped? (optional)",
  },
  {
    id: "assets", cat: "res", kind: "multi",
    q: "What do you already have to work with?",
    help: "Assets we can build on instead of starting from zero.",
    options: [
      { value: "email", label: "Email / customer list" },
      { value: "website", label: "A live website" },
      { value: "content", label: "Blog / content that ranks" },
      { value: "reviews", label: "A pile of good reviews" },
      { value: "media", label: "Real photos / video of jobs" },
      { value: "cases", label: "Case studies / testimonials" },
      { value: "crm", label: "A CRM / lead system" },
      { value: "none", label: "None of the above" },
    ],
  },
  {
    id: "lead_owner", cat: "res", kind: "single",
    q: "Who handles the leads we'd send you?",
    help: "Whoever picks up the phone and chases the quote.",
    options: [
      { value: "owner", label: "Me, the owner", sub: "I do it all" },
      { value: "office", label: "Office manager / admin" },
      { value: "sales", label: "A dedicated salesperson" },
      { value: "crew", label: "Whoever's free on the crew" },
      { value: "noone", label: "Nobody yet", sub: "That's part of the problem" },
    ],
  },
  {
    id: "budget", cat: "res", kind: "dual",
    q: "What's your monthly marketing budget?",
    help: "Roughly — split between ad spend and what you'd pay an agency to run it.",
    fields: [
      { id: "ad_spend", label: "Monthly ad spend", options: [
        "Under $500", "$500 – $1.5K", "$1.5K – $3K", "$3K – $7K", "$7K – $15K", "$15K+", "Not sure"
      ]},
      { id: "agency_fee", label: "Monthly agency budget", options: [
        "Under $1K", "$1K – $2.5K", "$2.5K – $5K", "$5K – $10K", "$10K+", "Not sure"
      ]},
    ],
  },
];

const TRADES = [
  "HVAC", "Plumbing", "Electrical", "Roofing", "General Contractor",
  "Landscaping", "Masonry / Concrete", "Painting", "Restoration",
  "Pest Control", "Carpet / Cleaning", "Other",
];

window.INTAKE = { CATEGORIES, QUESTIONS, TRADES };
