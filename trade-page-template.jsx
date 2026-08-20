// trade-page-template.jsx — Shared template for all trade service pages
// Reads window.TRADE_SLUG and window.TRADE_DATA to render

function TradePage() {
  const slug = window.TRADE_SLUG;
  const data = window.TRADE_DATA[slug];
  
  if (!data) {
    return <div style={{ padding: 80, textAlign: "center" }}>Trade not found: {slug}</div>;
  }
  
  return (
    <React.Fragment>
      <Nav />
      <main>
        <TradeHero data={data} />
        <ServiceChips />
        <TradeMarketingMix data={data} />
        <TradeExplainer data={data} />
        <TradeCTA data={data} />
        <TradeFAQs data={data} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────
// Slugs that have a transparent worker hero PNG in assets/
const TRADE_HERO_IMAGES = new Set([
  "appliance-repair", "auto-repair", "auto-detailing", "carpet-cleaning", "concrete-paving",
  "framing-drywall", "electricians", "excavation", "fencing", "general-contractors", "handyman", "hvac", "janitorial", "junk-removal",
  "landscaping", "locksmiths", "masonry", "painters", "pest-control", "plumbing", "pools",
  "pressure-washing", "restoration", "roofing", "solar", "towing", "tree-service"
]);

function TradeHero({ data }) {
  const hasImage = TRADE_HERO_IMAGES.has(data.slug);
  return (
    <section data-screen-label="Hero" className="bg-blueprint-dark" style={{
      position: "relative", color: "var(--white)", overflow: "hidden", minHeight: "auto"
    }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no={"TRD-" + data.slug.substring(0, 3).toUpperCase()} title={data.category.toUpperCase()} scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />

      {hasImage && (
        <img
          src={"assets/trade-hero-" + data.slug + ".png"}
          alt={data.name + " worker"}
          style={{
            position: "absolute",
            right: "196px",
            top: "140px",
            height: "calc((57.6% + 100px) * 1.2)",
            width: "auto",
            maxWidth: "100%",
            objectFit: "contain",
            objectPosition: "top right",
            zIndex: 1,
            pointerEvents: "none"
          }}
        />
      )}

      <div className="container" style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "flex-start", paddingTop: -20, minHeight: "calc(100vh - 400px)" }}>
        <div style={{ maxWidth: 600, textAlign: "left", margin: 0 }}>
          <span className="eyebrow" style={{ color: "var(--accent)" }}>{data.category}</span>
          <h1 className="display split" style={{ fontSize: "clamp(56px, 8vw, 116px)", margin: "20px 0 28px", maxWidth: 1100, lineHeight: 0.95 }}>
            <span style={{ color: "var(--white)" }}>{data.h1}</span>
          </h1>
          <h2 style={{ 
            fontFamily: '"Archivo Black", sans-serif',
            fontSize: "clamp(28px, 4vw, 48px)", 
            color: "var(--accent)", 
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.7)",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            margin: "0 0 40px",
            maxWidth: 900,
            lineHeight: 1.0
          }}>
            {data.benefit}
          </h2>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="btn" href="contact.html" style={{ background: "var(--accent)" }}>Get a fair quote</a>
            <a className="btn" href="tel:3093061140" style={{ background: "#000000", color: "var(--white)" }}>
              <Voltage size={16} /> (309) 306-1140
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Service Chips Row ─────────────────────────────────────────────
const SERVICES = [
  { name: "Websites", href: "websites.html" },
  { name: "SEO", href: "seo.html" },
  { name: "Local SEO", href: "local-seo.html" },
  { name: "Social Media", href: "social-media.html" },
  { name: "Paid Ads", href: "paid-ads.html" },
  { name: "Branding", href: "branding.html" },
  { name: "AI Automations", href: "ai-automations.html" },
  { name: "Coaching", href: "coaching.html" },
  { name: "Database Reactivation", href: "database-reactivation.html" },
  { name: "Software", href: "software.html" }
];

function ServiceChips() {
  return (
    <section style={{ background: "var(--ink)", padding: "32px 0", borderTop: "1px solid rgba(255,255,255,.12)" }}>
      <div className="container" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        {SERVICES.map((s, i) => (
          <a
            key={i}
            href={s.href}
            style={{
              padding: "10px 18px",
              background: "rgba(255,255,255,.08)",
              border: "1px solid rgba(255,255,255,.18)",
              borderRadius: "4px",
              color: "rgba(255,255,255,.85)",
              fontSize: "13px",
              fontWeight: 600,
              fontFamily: '"Archivo", sans-serif',
              textDecoration: "none",
              transition: "all 200ms ease",
              textTransform: "uppercase",
              letterSpacing: "0.02em"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--accent)";
              e.target.style.color = "var(--white)";
              e.target.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255,255,255,.08)";
              e.target.style.color = "rgba(255,255,255,.85)";
              e.target.style.borderColor = "rgba(255,255,255,.18)";
            }}
          >
            {s.name}
          </a>
        ))}
      </div>
    </section>
  );
}

// ── Marketing Mix ─────────────────────────────────────────────
const MARKETING_SERVICES = {
  online: [
    { code: "A1", name: "Websites & Content", what: "Your home base. Turns clicks into calls.",
      grows: ["Real photos. Real reviews. Trust fast.","Loads under 2 seconds. Mobile-ready.","Captures leads 24/7. Even at 2 AM."],
      price: "From $1,000. $200\u2013500/mo upkeep.", roi: "Pays back in 1\u20133 jobs." },
    { code: "A2", name: "Search Engine Optimization", what: "Get found on Google when somebody needs you.",
      grows: ["Top 3 spots get 75% of clicks.","Steady leads. No paying per click.","Compounds over time. An asset."],
      price: "$1,500\u20133,500/mo for 70K+ towns.", roi: "5\u201310x return inside 12 months." },
    { code: "A3", name: "Social Media Marketing", what: "Show off the work. Build a following.",
      grows: ["Real job photos. Real crew. Real trust.","Stay top-of-mind with past customers.","Referrals come from social. Period."],
      price: "$800\u20132,200/mo organic management.", roi: "Recurring referrals + warm leads." },
    { code: "A4", name: "Email Marketing", what: "Stay in touch. Get repeat work.",
      grows: ["5x cheaper than getting a new lead.","Re-books seasonal jobs.","Sends review requests on autopilot."],
      price: "$400\u20131,200/mo for a full list.", roi: "Avg $36 back for every $1." },
    { code: "A5", name: "Local Search Engine Optimization", what: "Own \"near me\" searches. Win your zip code.",
      grows: ["Top of Google Maps. Real local calls.","Google Business Profile dialed in tight.","Beat the franchises in your service area."],
      price: "$800\u20132,500/mo per market.", roi: "5\u201315x return. Pays back in 2\u20134 jobs." }
  ],
  paid: [
    { code: "B1", name: "Search PPC (Google Ads)", what: "Pay to be at the top of Google. Instant calls.",
      grows: ["Calls in 7 days. Not 90.","You only pay when someone clicks.","Best for emergencies."],
      price: "$1,500\u20134,000/mo + ad spend.", roi: "3\u20138x return when dialed in." },
    { code: "B2", name: "Social Media PPC", what: "Paid ads on Facebook, Instagram, TikTok.",
      grows: ["Target by zip, income, homeowner.","Visual ads beat text ads.","Cheaper than Google for visual trades."],
      price: "$1,000\u20133,000/mo + ad spend.", roi: "Strong for decks, pools, landscaping." }
  ],
  offline: [
    { code: "C1", name: "Print Advertising", what: "Local papers, magazines, community books.",
      grows: ["Reaches older homeowners with money.","Builds brand authority in your town.","Works best paired with digital."],
      price: "$500\u20133,000 per campaign.", roi: "Slow burn. Brand-building play." },
    { code: "C2", name: "Direct Mail", what: "Postcards to homes in your service area.",
      grows: ["Hit the right neighborhoods only.","Great for seasonal pushes.","4.4% response vs. 0.12% email."],
      price: "$0.55\u20131.20 per piece sent.", roi: "$2\u20136 back for every $1." },
    { code: "C3", name: "Vehicle Wraps", what: "Your truck is a rolling billboard.",
      grows: ["40,000+ impressions a day.","$0.005 per view. Cheapest there is.","Works while you work."],
      price: "$2,500\u20135,500 one-time per truck.", roi: "Pays back in 1\u20132 jobs. Lasts 5+ years." },
    { code: "C4", name: "Graphic Design", what: "Logos, signs, yard signs, business cards.",
      grows: ["Look bigger than you are.","Consistent brand = repeat customers.","Yard signs = free neighborhood ads."],
      price: "$75\u2013150/hr or $500\u20132,500/project.", roi: "Foundation for every channel." }
  ]
};

function MixCard({ s, accent }) {
  return (
    <div style={{ background: "var(--ink)", padding: "24px 22px", color: "var(--white)",
      borderTop: `4px solid ${accent}`, display: "flex", flexDirection: "column", gap: 12, minHeight: 360 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 12, letterSpacing: ".08em", color: accent }}>{s.code}</div>
        <div style={{ fontSize: 10, opacity: 0.5, fontFamily: "monospace", letterSpacing: ".05em" }}>SERVICE</div>
      </div>
      <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 19, lineHeight: 1.15,
        textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--white)" }}>{s.name}</div>
      <div style={{ fontSize: 14, lineHeight: 1.45, color: "rgba(255,255,255,.78)", fontWeight: 500 }}>{s.what}</div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
        {s.grows.map((g, i) => (
          <li key={i} style={{ fontSize: 13, lineHeight: 1.4, color: "rgba(255,255,255,.92)", paddingLeft: 16, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, top: 4, width: 8, height: 2, background: accent }} />{g}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px dashed rgba(255,255,255,.18)" }}>
        <div style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: ".06em", color: "rgba(255,255,255,.45)", marginBottom: 4 }}>MARKET RATE (70K+ TOWNS)</div>
        <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 14, color: accent,
          textShadow: "0 1px 4px rgba(0,0,0,.6)", lineHeight: 1.25, marginBottom: 6 }}>{s.price}</div>
        <div style={{ fontSize: 11, opacity: 0.7, fontWeight: 600 }}>&rarr; {s.roi}</div>
      </div>
    </div>
  );
}

function GroupHeader({ letter, title, subtitle, accent }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 24,
      paddingBottom: 12, borderBottom: `2px solid ${accent}` }}>
      <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 56, lineHeight: 0.9,
        color: accent, textShadow: "0 2px 8px rgba(0,0,0,.6)" }}>{letter}</div>
      <div>
        <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 28, lineHeight: 1,
          textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--white)", marginBottom: 6 }}>{title}</div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,.7)", fontWeight: 600, fontStyle: "italic" }}>{subtitle}</div>
      </div>
    </div>
  );
}

function FunnelDiagram() {
  return (
    <svg viewBox="0 0 400 200" style={{ width: "100%", height: "auto", maxHeight: 200 }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="funnelGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7DA8FF" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#F0A030" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#C8262A" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <polygon points="20,40 380,40 280,160 120,160" fill="url(#funnelGrad)" opacity="0.85" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="140" y1="40" x2="160" y2="160" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="260" y1="40" x2="240" y2="160" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3,3" />
      <text x="80" y="105" fill="white" fontFamily="'Archivo Black', sans-serif" fontSize="11" textAnchor="middle" letterSpacing="0.05em">SEE</text>
      <text x="80" y="122" fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontSize="8" textAnchor="middle">10,000</text>
      <text x="200" y="105" fill="white" fontFamily="'Archivo Black', sans-serif" fontSize="11" textAnchor="middle" letterSpacing="0.05em">CLICK</text>
      <text x="200" y="122" fill="rgba(255,255,255,0.85)" fontFamily="monospace" fontSize="8" textAnchor="middle">800</text>
      <text x="320" y="105" fill="white" fontFamily="'Archivo Black', sans-serif" fontSize="11" textAnchor="middle" letterSpacing="0.05em">CALL</text>
      <text x="320" y="122" fill="white" fontFamily="monospace" fontSize="8" textAnchor="middle" fontWeight="bold">40&ndash;80</text>
      <text x="200" y="30" fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontSize="9" textAnchor="middle" letterSpacing="0.1em">&rarr; FUNNEL FLOW &rarr;</text>
      <text x="200" y="180" fill="rgba(255,255,255,0.55)" fontFamily="monospace" fontSize="8" textAnchor="middle">EVERY CHANNEL FEEDS THE NEXT</text>
    </svg>
  );
}

function MarketingEcosystem() {
  const stages = [
    { tag: "STAGE 1", name: "They See You", num: "10,000", unit: "people see your name", channels: "Wraps · Print · Social", color: "#7DA8FF" },
    { tag: "STAGE 2", name: "They Check You Out", num: "800", unit: "visit & compare you", channels: "Reviews · Website · Email", color: "#F0A030" },
    { tag: "STAGE 3", name: "They Book You", num: "40–80", unit: "call and convert", channels: "PPC · SEO · Website", color: "var(--accent)" },
  ];
  return (
    <div style={{ background: "rgba(10,15,28,0.9)", border: "1px solid rgba(255,255,255,.12)", padding: "44px 36px", position: "relative" }}>
      <div style={{ position: "absolute", top: 14, right: 18, fontSize: 10, fontFamily: "monospace", letterSpacing: ".08em", color: "rgba(255,255,255,.4)" }}>
        FIG. 01 &mdash; THE CUSTOMER JOURNEY
      </div>
      <div style={{ maxWidth: 640, marginBottom: 36 }}>
        <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 26, color: "var(--white)", textTransform: "uppercase", lineHeight: 1.05, marginBottom: 10 }}>
          Every channel feeds the next.
        </div>
        <div style={{ fontSize: 15, color: "rgba(255,255,255,.75)", lineHeight: 1.55, fontWeight: 500 }}>
          No single tactic wins the job. Together they walk a stranger from &ldquo;never heard of you&rdquo; to &ldquo;on the phone booking work&rdquo; &mdash; and the numbers narrow at every step.
        </div>
      </div>

      {/* Journey: 3 stages with connectors */}
      <div style={{ display: "flex", alignItems: "stretch", gap: 0, flexWrap: "wrap" }}>
        {stages.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ flex: "1 1 200px", minWidth: 200, background: "rgba(255,255,255,.03)", borderTop: `4px solid ${s.color}`, padding: "26px 22px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: '"Archivo", sans-serif', fontWeight: 800, fontSize: 11, letterSpacing: ".12em", color: s.color, marginBottom: 14 }}>{s.tag}</div>
              <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 44, lineHeight: 0.9, color: "var(--white)", marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,.6)", fontWeight: 600, marginBottom: 18 }}>{s.unit}</div>
              <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 17, textTransform: "uppercase", letterSpacing: "-.01em", color: "var(--white)", lineHeight: 1.1, marginBottom: 12, marginTop: "auto" }}>{s.name}</div>
              <div style={{ fontSize: 12, color: s.color, fontWeight: 700, letterSpacing: ".02em", borderTop: "1px solid rgba(255,255,255,.12)", paddingTop: 12 }}>{s.channels}</div>
            </div>
            {i < stages.length - 1 && (
              <div aria-hidden="true" style={{ flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 10px", fontSize: 26, color: "rgba(255,255,255,.4)", fontWeight: 700 }}>&rarr;</div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ROI payoff */}
      <div style={{ marginTop: 32, background: "var(--accent)", padding: "22px 26px", display: "flex", flexWrap: "wrap", gap: "16px 22px", alignItems: "center", justifyContent: "center", textAlign: "center", color: "var(--white)" }}>
        <div style={{ fontFamily: '"Archivo", sans-serif', fontWeight: 800, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", opacity: .92, width: "100%", marginBottom: 4 }}>What that mix returns</div>
        <div>
          <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 30, lineHeight: 1 }}>$5&ndash;$10</div>
          <div style={{ fontSize: 11, opacity: 0.92, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", marginTop: 4 }}>back per $1 of SEO</div>
        </div>
        <div style={{ fontSize: 22, opacity: .8 }}>+</div>
        <div>
          <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 30, lineHeight: 1 }}>3&ndash;8x</div>
          <div style={{ fontSize: 11, opacity: 0.92, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", marginTop: 4 }}>return on PPC</div>
        </div>
        <div style={{ fontSize: 22, opacity: .8 }}>=</div>
        <div>
          <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: 30, lineHeight: 1 }}>A full schedule</div>
          <div style={{ fontSize: 11, opacity: 0.92, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", marginTop: 4 }}>without chasing leads</div>
        </div>
      </div>
    </div>
  );
}

function TradeMarketingMix({ data }) {
  const tradeShort = data.name.replace(/Contractors|Services|Installers|Technicians/g, "").trim() || data.name;
  return (
    <section data-screen-label="Marketing Mix" className="bg-blueprint-light" style={{ position: "relative", paddingBlock: 120, color: "var(--white)", marginTop: -60 }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="MIX-01" title="MARKETING MIX" scale="1:10" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <span className="eyebrow" style={{ color: "var(--accent)" }}>Every lever we pull</span>
        <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 76px)", margin: "16px 0 20px", color: "var(--white)", maxWidth: 1000 }}>
          <span style={{ color: "var(--white)" }}>Eleven ways</span>{" "}
          <span style={{ color: "var(--accent)", textShadow: "0 2px 8px rgba(0,0,0,.8), 0 4px 16px rgba(0,0,0,.7)" }}>we grow {tradeShort.toLowerCase()}.</span>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.85)", maxWidth: 760, margin: "0 0 56px", fontWeight: 500 }}>
          Online. Paid. Offline. Pricing below is what other agencies charge in towns of 70,000+. We quote fair every time.
        </p>
        <GroupHeader letter="A" title="Online Marketing" subtitle="The foundation. Always on." accent="var(--accent)" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginBottom: 56 }}>
          {MARKETING_SERVICES.online.map((s, i) => <MixCard key={i} s={s} accent="var(--accent)" />)}
        </div>
        <GroupHeader letter="B" title="Advertising (Pay-Per-Click)" subtitle="Fastest path to leads. Pay only when it works." accent="#F0A030" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 56 }}>
          {MARKETING_SERVICES.paid.map((s, i) => <MixCard key={i} s={s} accent="#F0A030" />)}
        </div>
        <GroupHeader letter="C" title="Offline Marketing" subtitle="Real-world presence. Tactile trust." accent="#7DA8FF" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 72 }}>
          {MARKETING_SERVICES.offline.map((s, i) => <MixCard key={i} s={s} accent="#7DA8FF" />)}
        </div>
        <MarketingEcosystem />
      </div>
    </section>
  );
}

// ── Value Props (3 bullets) — kept for compatibility ──────────────
function TradeValueProps({ data }) {
  return (
    <section data-screen-label="Value Props" className="bg-blueprint-light" style={{ position: "relative", paddingBlock: 100 }}>
      <BlueprintMarks color="rgba(0,39,104,.32)" />
      <DrawingStamp no="VAL-01" title="WHY CHOOSE US" scale="1:1" color="rgba(0,39,104,.55)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <span className="eyebrow" style={{ color: "var(--accent)" }}>Why Toughjobs</span>
        <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", margin: "16px 0 48px", color: "var(--white)", maxWidth: 900 }}>
          <span style={{ color: "var(--white)" }}>Three reasons</span>{" "}
          <span style={{ color: "var(--accent)", textShadow: "0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.7)" }}>we win.</span>
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {data.bullets.map((bullet, i) => (
            <div key={i} style={{ 
              background: "var(--ink)", 
              padding: "32px 28px", 
              color: "var(--white)",
              borderTop: "4px solid var(--accent)",
              minHeight: 220,
              display: "flex",
              flexDirection: "column"
            }}>
              <div style={{ 
                fontFamily: '"Archivo Black", sans-serif', 
                fontSize: 48, 
                color: "var(--accent)", 
                lineHeight: 1, 
                marginBottom: 20
              }}>
                0{i + 1}
              </div>
              <div style={{ 
                fontFamily: '"Archivo Black", sans-serif',
                fontSize: 22, 
                lineHeight: 1.25, 
                color: "var(--white)",
                textTransform: "uppercase",
                letterSpacing: "-0.01em"
              }}>
                {bullet}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Explainer (2 sentences) ─────────────────────────────────────────────
function TradeExplainer({ data }) {
  return (
    <section data-screen-label="What We Do" className="bg-blueprint-dark" style={{ position: "relative", color: "var(--white)", paddingBlock: 100 }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="EXP-01" title="WHAT WE DO" scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>What we do</span>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "16px 0 0", color: "var(--white)" }}>
              <span style={{ color: "var(--white)" }}>The work.</span><br />
              <span style={{ color: "var(--accent)", textShadow: "0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.7)" }}>Straight up.</span>
            </h2>
          </div>
          
          <div style={{ borderLeft: "4px solid var(--accent)", paddingLeft: 32 }}>
            <p style={{ 
              fontSize: 22, 
              lineHeight: 1.55, 
              color: "var(--white)",
              fontWeight: 500,
              margin: 0,
              textWrap: "pretty"
            }}>
              {data.explainer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA ──────────────────────────────────────────────────────────────────
function TradeCTA({ data }) {
  return (
    <section data-screen-label="CTA-1" className="bg-blueprint-red" style={{ 
      position: "relative", 
      color: "var(--white)", 
      paddingBlock: 100,
      background: "linear-gradient(180deg, rgba(168, 1, 0, 0.45) 0%, rgba(200, 38, 42, 0.35) 100%)"
    }}>
      <BlueprintMarks color="rgba(0,0,0,.35)" />
      <DrawingStamp no="CTA-01" title="CALL NOW" scale="1:1" color="rgba(0,0,0,.45)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: 40, alignItems: "center", position: "relative", zIndex: 2 }}>
        {/* Left column - 3/4 width */}
        <div>
          <h2 className="display" style={{ fontSize: "clamp(48px, 7vw, 96px)", margin: "0 0 32px", color: "var(--white)", textShadow: "0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.7)" }}>
            Ready to build<br />your own operation?
          </h2>
          <p style={{ 
            fontSize: 18,
            color: "rgba(255,255,255,0.9)",
            margin: "0 0 40px",
            lineHeight: 1.6
          }}>
            Let's talk about how Toughjobs can set you up for success. One truck. Your knowledge. Our infrastructure.
          </p>
          <a href="intake.html" className="btn" style={{ background: "var(--white)", color: "var(--accent)", fontWeight: 700, padding: "16px 48px", textDecoration: "none", display: "inline-block", borderRadius: 4 }}>
            Start Your Partnership
          </a>
        </div>
        
        {/* Right column - 1/4 width with spinning logo */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .team-logo-spinner {
              animation: spin 14s linear infinite;
            }
            .team-logo-ring {
              position: relative;
              width: clamp(140px, 15vw, 240px);
              aspect-ratio: 1;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}</style>
          <div className="team-logo-ring">
            <svg className="team-logo-spinner" viewBox="0 0 200 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2 }}>
              <defs>
                <path id="circlePath" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" fill="none" />
              </defs>
              <text style={{ fontSize: 15, fontWeight: 700, fill: "rgba(255,255,255,0.95)", fontFamily: "'Archivo Black', sans-serif", textTransform: "uppercase" }}>
                <textPath href="#circlePath" startOffset="0%" textLength="534" lengthAdjust="spacingAndGlyphs">
                  TEAM TOUGHJOBS • TEAM TOUGHJOBS •
                </textPath>
              </text>
            </svg>
            <img src="assets/toughjobs-monogram-logo.png" alt="Toughjobs" style={{ width: "58%", height: "auto", position: "relative", zIndex: 3 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQs ─────────────────────────────────────────────────────────────────
function TradeFAQs({ data }) {
  return (
    <section data-screen-label="FAQs" className="bg-blueprint-light" style={{ position: "relative", paddingBlock: 100 }}>
      <BlueprintMarks color="rgba(0,39,104,.32)" />
      <DrawingStamp no="FAQ-01" title="FAQ" scale="1:1" color="rgba(0,39,104,.55)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>FAQs</span>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "16px 0 24px", color: "var(--white)" }}>
              <span style={{ color: "var(--white)" }}>Straight</span><br />
              <span style={{ color: "var(--accent)", textShadow: "0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.7)" }}>answers.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.82)", margin: 0 }}>
              Got more questions? Call us. We pick up.
            </p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {data.faqs.map((faq, i) => (
              <div key={i} style={{ 
                background: "var(--ink)", 
                padding: "28px 32px",
                borderLeft: "4px solid var(--accent)"
              }}>
                <div style={{
                  fontFamily: '"Archivo Black", sans-serif',
                  fontSize: 20,
                  color: "var(--white)",
                  marginBottom: 12,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em"
                }}>
                  Q: {faq.q}
                </div>
                <div style={{
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,.88)",
                  fontWeight: 500
                }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



ReactDOM.createRoot(document.getElementById("root")).render(<TradePage />);
