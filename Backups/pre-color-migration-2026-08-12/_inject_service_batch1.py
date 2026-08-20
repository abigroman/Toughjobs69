import os

TRADE_DIR = r"C:\Users\abigr\ToughJobs"

CSS_BLOCK = """<style>
  .td-analysis{background:#f5f6f8;padding:80px 22px;color:#0A0F1C}
  .td-analysis-inner{max-width:920px;margin:0 auto}
  .td-analysis h1,.td-analysis h2{font-family:'Archivo Black',sans-serif;text-transform:uppercase;font-size:clamp(22px,3vw,36px);line-height:1.08;margin:0 0 18px;color:#0A0F1C}
  .td-analysis h1:not(:first-child),.td-analysis h2:not(:first-child){margin-top:52px}
  .td-analysis h3{font-family:'Archivo Black',sans-serif;text-transform:uppercase;font-size:18px;line-height:1.15;margin:28px 0 8px;color:#0A0F1C}
  .td-analysis p,.td-analysis li{font-size:16px;line-height:1.68;color:#0A0F1C;margin:0 0 16px}
  .td-answer{font-size:18px!important;line-height:1.62!important;margin:0 0 26px!important;font-weight:500}
  .td-note-list{display:grid;grid-template-columns:1fr 1fr;gap:10px 28px;margin:0 0 20px;padding-left:22px}
  .td-note-list li{padding-left:4px;font-size:15px;line-height:1.5}
  .td-soft-cta{margin:28px 0;padding:20px 0;border-top:1px solid rgba(10,15,28,.15);border-bottom:1px solid rgba(10,15,28,.15)}
  .td-soft-cta p{margin:0}
  .td-analysis a{color:#4a5568;font-weight:inherit;text-decoration:none;text-shadow:none}
  .td-analysis a:hover{color:#0A0F1C;text-decoration:none}
  .td-analysis li,.td-analysis span,.td-analysis td,.td-analysis th{text-shadow:none}
  .td-faq-list{margin-top:12px}
  .td-faq-item{padding:22px 0;border-top:1px solid rgba(10,15,28,.16)}
  .td-faq-item:last-child{border-bottom:1px solid rgba(10,15,28,.16)}
  .td-faq-item h3{margin:0 0 8px}
  .td-faq-item p{margin:0}
  .td-cost-table{width:100%;border-collapse:collapse;margin:20px 0 24px;font-size:15px}
  .td-cost-table th{font-family:'Archivo Black',sans-serif;text-transform:uppercase;font-size:11px;letter-spacing:.08em;background:#0A0F1C;color:#fff;padding:12px 16px;text-align:left}
  .td-cost-table td{padding:12px 16px;border-bottom:1px solid rgba(10,15,28,.12)}
  .td-cost-table tr:nth-child(even) td{background:#fff}
  @media(max-width:720px){.td-note-list{grid-template-columns:1fr}}
</style>"""

PAGES = {}

PAGES['websites.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>CONTRACTOR WEBSITE DESIGN THAT ACTUALLY BOOKS JOBS</h2>
    <p class="td-answer">A contractor website's only job is to turn a stranger on a phone into a scheduled call, a quote request, or a rung phone line. If it isn't doing that within a second and a half of loading, it's costing you work — no matter how nice it looks in the mockup.</p>

    <h2>WHY MOST TRADE CONTRACTOR WEBSITES FAIL</h2>
    <p>Nine out of ten contractor sites we audit have the same problem: they were built by a graphic designer, a nephew, or a template mill that has never once sat with a homeowner deciding between three quotes at 8 p.m. on a Tuesday. They load slow. They bury the phone number. They lead with a stock photo of a stranger in a hard hat instead of the actual crew, the actual trucks, the actual jobs. They read like a brochure when they should read like a decision.</p>
    <p>The second failure is structural. A contractor site with one "Services" page and a contact form cannot rank, cannot convert, and cannot compete with the shop down the road that has fourteen individual service pages, each one written for the exact search a homeowner types when their water heater is leaking into the basement. Google reads pages. Homeowners buy from pages. If you don't have the pages, you don't exist in either conversation.</p>

    <h2>WHAT A CONVERTING TRADE WEBSITE MUST HAVE</h2>
    <h3>Sub-2-second load time on cellular</h3>
    <p>Most of your traffic is on a phone, on LTE, standing in a driveway or a basement. If the site takes four seconds to paint, half those people are gone before the hero image renders. We build on lean stacks — compressed images, deferred scripts, no bloated page builders — and we test on throttled connections, not on the fiber line in a design studio.</p>
    <h3>Click-to-call above the fold, on every page</h3>
    <p>The phone number is not a footer element. It's the primary conversion. It needs to be tappable, visible on scroll, and wired to call tracking so you know which pages, which ads, and which keywords are driving the ring. If a visitor has to hunt for the number, they'll hunt for a competitor instead.</p>
    <h3>A page for every service, every city</h3>
    <p>One "Plumbing" page won't rank for "water heater replacement Bettendorf." You need the service page, the city page, and — when it makes sense — the service-in-city page. This is the unglamorous part of contractor web work, and it's the part that separates sites that get traffic from sites that get compliments.</p>
    <h3>Trust signals a homeowner actually reads</h3>
    <p>Real crew photos. Real job photos with dates and towns. License and insurance numbers displayed, not hidden. Google reviews pulled live, not screenshotted from 2021. Guarantees written in plain English. BBB, manufacturer certifications, and any local affiliations — because a homeowner writing a $12,000 check wants to know you'll still be answering the phone in three years.</p>

    <h2>WHAT DOES A CONTRACTOR WEBSITE COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Tier</th><th>Typical Investment</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>Template Refresh</td><td>$1,500 &ndash; $3,500</td><td>Existing site cleaned up, mobile-fixed, speed-tuned, CTAs added. Good stopgap, not a growth tool.</td></tr>
        <tr><td>Standard Custom Build</td><td>$5,500 &ndash; $9,000</td><td>10&ndash;15 pages, service pages, one city hub, on-page SEO, call tracking, forms wired to CRM.</td></tr>
        <tr><td>Multi-Service Build</td><td>$9,000 &ndash; $15,000</td><td>25&ndash;40 pages, full service + city matrix, project galleries, review integration, blog engine.</td></tr>
        <tr><td>Franchise / Multi-Location</td><td>$15,000 &ndash; $30,000+</td><td>Location manager, per-branch schema, local landing systems, staff training, ongoing dev retainer.</td></tr>
        <tr><td>Care &amp; Growth Retainer</td><td>$400 &ndash; $1,200/mo</td><td>Hosting, security, monthly content, conversion tuning, page adds as the business grows.</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN A CONTRACTOR WEBSITE AGENCY</h2>
    <p>You are not hiring a designer. You are hiring a team that understands how a homeowner or facility manager makes a hiring decision on a phone in under ninety seconds. The portfolio should be full of contractors, not restaurants and dentists. The conversation should start with your service area and your call volume, not your color preferences.</p>
    <ul class="td-note-list">
      <li>Portfolio has at least 10 live trade contractor sites you can visit today</li>
      <li>Owns the SEO strategy &mdash; doesn't hand you off to a separate vendor after launch</li>
      <li>Bakes call tracking, form tracking, and analytics in on day one, not as an upsell</li>
      <li>Writes the copy in-house or with a trade-specialist writer &mdash; not AI dropped into a template</li>
      <li>You own the domain, the hosting login, and the site files &mdash; no hostage situations</li>
      <li>Publishes real load-time and Core Web Vitals numbers, not vague "fast and responsive" claims</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds contractor websites for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; CONTRACTOR WEBSITES</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>How long does a contractor website take to build?</h3><p>A standard custom build runs 6&ndash;10 weeks from kickoff to launch, assuming we get photos, licensing info, and content approvals back inside a week. Larger multi-service builds run 10&ndash;16 weeks. Rush jobs are possible but usually mean cutting service or city pages we'd otherwise recommend.</p></div>
      <div class="td-faq-item"><h3>Do I need a new site if mine is only a few years old?</h3><p>Not always. If the foundation is clean &mdash; modern framework, decent speed, editable pages &mdash; we can often refresh copy, add service pages, and rebuild the mobile experience for a fraction of a full rebuild. If it's a page-builder site on an old theme with 30 plugins, replacement is usually cheaper than triage.</p></div>
      <div class="td-faq-item"><h3>Will you write the copy or do I have to?</h3><p>We write it. You'll answer a 30-minute intake call about your service area, your typical job, your differentiators, and your best customer, and our writers turn that into pages built to rank and convert. You approve every page before launch.</p></div>
      <div class="td-faq-item"><h3>Can I edit the site myself after launch?</h3><p>Yes. We build on WordPress or a headless equivalent with a clean editor, and we give you a 20-minute walkthrough of how to update photos, add a testimonial, or spin up a new blog post. Bigger structural changes usually flow through us on retainer.</p></div>
      <div class="td-faq-item"><h3>Will the site rank in Google once it launches?</h3><p>The site will be built to rank &mdash; clean code, proper schema, service and city pages, fast load times. Ranking itself is a function of ongoing SEO, backlinks, reviews, and content. A great site is the foundation; SEO is the fuel. Most contractors see meaningful movement within 90&ndash;180 days of launch when both are in place.</p></div>
    </div>
  </div>
</section>"""

PAGES['seo.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>SEO FOR CONTRACTORS AND TRADE BUSINESSES</h2>
    <p class="td-answer">Contractor SEO isn't about ranking for a national keyword. It's about owning the ten to forty searches homeowners and property managers actually type when they need your trade in your service area &mdash; and being the first name they see, call, and hire.</p>

    <h2>WHY CONTRACTOR SEO IS ITS OWN DISCIPLINE</h2>
    <p>SEO for a SaaS company is a long game of thought leadership and backlinks. SEO for a contractor is a knife fight over ten square miles. The intent is different &mdash; nobody is casually researching "emergency drain cleaning" on a Sunday morning. They have a problem, they have a phone, and they have thirty seconds of patience. Your job in that thirty seconds is to be the first result, look like a real business, and get the call.</p>
    <p>Seasonality makes it harder. HVAC leads spike in July and January. Roofers get slammed after every storm. Plumbers ride steady with emergency peaks. A contractor SEO strategy that doesn't understand your booking calendar is going to spend the wrong money at the wrong time. Real campaigns are built around your capacity, your margin services, and the searches that put both to work.</p>

    <h2>WHAT A REAL SEO CAMPAIGN COVERS</h2>
    <h3>Technical SEO &mdash; the foundation</h3>
    <p>Before we write a word, we make sure Google can crawl the site, render it fast, and understand it. That means fixing broken pages, cleaning up redirects, tightening Core Web Vitals, and implementing proper LocalBusiness and Service schema. If the plumbing is wrong, no amount of content will drain the sink.</p>
    <h3>On-page SEO &mdash; the pages that rank</h3>
    <p>Every service you offer gets its own page, written for the exact phrase a customer types. Every city or neighborhood you serve gets its own page, with real local context &mdash; not swapped-out city names on the same template. Titles, headers, internal links, and image alt text are all built to match how Google reads a trade site.</p>
    <h3>Content &mdash; the reason to rank</h3>
    <p>Blog content for contractors isn't fluff. It's "How much does a new AC unit cost in Peoria?" and "What to do when your basement floods." These are the questions your customers Google before they call, and answering them well pulls them into your funnel weeks before they ever type your name. We build a 12-month editorial calendar tied to seasonal demand.</p>
    <h3>Links and authority &mdash; the trust layer</h3>
    <p>Google trusts sites other reputable sites vouch for. For contractors, that means local news mentions, supplier and manufacturer partner pages, chamber and BBB listings, trade association profiles, and earned coverage from community sponsorships. We build these deliberately &mdash; no spammy directories, no PBNs, nothing that could get you penalized.</p>

    <h2>WHAT DOES CONTRACTOR SEO COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Tier</th><th>Typical Investment</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>Local Starter</td><td>$800 &ndash; $1,500/mo</td><td>GBP optimization, 5&ndash;8 core service/city pages, basic technical fixes, monthly reporting. Best for single-service, single-city shops.</td></tr>
        <tr><td>Standard Campaign</td><td>$1,800 &ndash; $3,500/mo</td><td>Full service/city page matrix, 2 blog posts/mo, ongoing link acquisition, review strategy, call tracking analysis.</td></tr>
        <tr><td>Aggressive Growth</td><td>$3,500 &ndash; $6,500/mo</td><td>Multi-city domination, 4+ pieces of content/mo, heavier link building, conversion rate optimization, quarterly strategy resets.</td></tr>
        <tr><td>Multi-Location / Franchise</td><td>$6,500 &ndash; $15,000+/mo</td><td>Per-location optimization, brand + local strategy split, dedicated strategist, custom dashboards.</td></tr>
        <tr><td>One-Time SEO Audit</td><td>$1,500 &ndash; $3,500</td><td>Full technical, content, and competitive audit with a prioritized 90-day action plan.</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN AN SEO PROVIDER</h2>
    <p>The SEO industry is full of monthly-report factories that produce beautiful PDFs and zero leads. Real SEO is measured in ringing phones, filled forms, and booked jobs &mdash; not in vanity ranking screenshots for keywords no one searches. If a provider won't talk about leads and revenue, they're the wrong provider.</p>
    <ul class="td-note-list">
      <li>Reports on leads and booked revenue, not just rankings and traffic</li>
      <li>Shows you actual case studies from trade contractors with before/after numbers</li>
      <li>Owns technical, on-page, content, and link work under one roof &mdash; no finger-pointing</li>
      <li>Sets 6-month and 12-month milestone expectations, not "results in 30 days" promises</li>
      <li>Uses white-hat link building only &mdash; will explain every link before it goes live</li>
      <li>Gives you month-to-month or short-term contracts after an initial ramp period</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds SEO programs for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; CONTRACTOR SEO</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>How long until SEO actually produces leads?</h3><p>For local trade searches, expect early movement in 60&ndash;90 days, meaningful lead volume by month 4&ndash;6, and full campaign maturity around month 9&ndash;12. Anyone promising page one in 30 days is selling paid ads, black-hat tactics, or a fantasy.</p></div>
      <div class="td-faq-item"><h3>Is SEO better than Google Ads?</h3><p>They're different tools. Ads produce leads today at a per-lead cost. SEO produces leads for years at a declining cost per lead. Most contractors we work with run both &mdash; ads for immediate cash flow, SEO for long-term margin. Cutting SEO because ads work is like paying rent forever instead of buying the shop.</p></div>
      <div class="td-faq-item"><h3>What if my competitors have been doing SEO for years?</h3><p>You can still win. Most established local competitors got to page one and stopped working. We audit their gaps &mdash; thin service pages, weak local content, aging backlink profiles &mdash; and build a plan to outflank them on the specific searches that drive the most valuable jobs.</p></div>
      <div class="td-faq-item"><h3>Do I need to write blog posts every week?</h3><p>No. Trade SEO wins on service and city pages plus a steady drip of high-intent content &mdash; 2 to 4 pieces a month targeting real customer questions. Publishing daily fluff is a waste of your budget.</p></div>
      <div class="td-faq-item"><h3>Do I own the SEO work if I leave?</h3><p>With us, yes. You own your site, your content, your Google Business Profile, and your analytics accounts. Some agencies build content on their own domains or use rented assets &mdash; always ask this before you sign, because it decides who owns your leads five years from now.</p></div>
    </div>
  </div>
</section>"""

PAGES['local-seo.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>LOCAL SEO FOR CONTRACTORS</h2>
    <p class="td-answer">Local SEO is the difference between showing up in the Google map pack when someone searches "electrician near me" and being invisible three towns over from where you actually work. For a trade contractor, it's the single highest-ROI marketing channel in existence &mdash; and most competitors are doing it wrong.</p>

    <h2>WHY THE MAP PACK OWNS TRADE SEARCHES</h2>
    <p>When a homeowner searches "furnace repair Davenport," Google shows three things above the fold: paid ads, the map pack (three local businesses on a map), and organic results. On a phone &mdash; which is where 70% of trade searches happen &mdash; the map pack often takes the entire screen. If you're not in those three pins, you're competing for the scraps at the bottom.</p>
    <p>The map pack is also where the highest-intent buyers are. A person searching from their kitchen at 6 p.m. with a leaking pipe is not comparison shopping &mdash; they're tapping the first two listings, calling both, and hiring whoever answers professionally with an ETA. Local SEO is what puts your name in those first two taps, and it's what keeps you there.</p>

    <h2>WHAT LOCAL SEO ACTUALLY INVOLVES</h2>
    <h3>Google Business Profile optimization</h3>
    <p>Your GBP is your storefront in the map pack. That means the right primary and secondary categories, full service list with descriptions, service area boundaries drawn correctly, real business hours, weekly photo posts, Q&amp;A monitoring, and product/service listings loaded with the exact phrases customers search. Half the GBPs we audit are missing 40% of the fields Google uses to rank them.</p>
    <h3>Local citations and NAP consistency</h3>
    <p>Your business name, address, and phone number need to match &mdash; exactly &mdash; across Google, Bing, Apple Maps, Yelp, Angi, HomeAdvisor, BBB, chamber sites, and the fifty other directories Google cross-references. One inconsistent suite number or an old phone number on a decade-old listing can cost you map pack visibility. We audit and clean the whole footprint.</p>
    <h3>Location and service-area pages</h3>
    <p>If you serve twelve towns, you need twelve real pages &mdash; not one page listing twelve cities. Each page should have local landmarks, real project photos from that area, driving directions from a recognizable point, and testimonials from customers in that zip code. This is what tells Google you actually work there, not just that you claim to.</p>
    <h3>Review generation and response</h3>
    <p>Google reads your review volume, your review recency, your star rating, and &mdash; increasingly &mdash; the exact words customers use in reviews. A campaign that systematically asks every completed job for a review, with a system for handling the occasional negative one, is worth more than any backlink. We build the automation and the response playbook.</p>

    <h2>WHAT DOES LOCAL SEO COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Tier</th><th>Typical Investment</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>GBP Tune-Up</td><td>$750 &ndash; $1,500 one-time</td><td>Full GBP optimization, citation audit + top 25 fixes, review system setup. No ongoing management.</td></tr>
        <tr><td>Single-City Local</td><td>$600 &ndash; $1,200/mo</td><td>Ongoing GBP posting, citation maintenance, review generation, 1 location page optimization.</td></tr>
        <tr><td>Multi-City Local</td><td>$1,500 &ndash; $3,000/mo</td><td>3&ndash;8 city pages, weekly GBP posts, aggressive review campaign, monthly ranking + call reports.</td></tr>
        <tr><td>Regional Domination</td><td>$3,000 &ndash; $6,000/mo</td><td>10+ city pages, geo-grid tracking, competitor displacement strategy, ongoing content adds.</td></tr>
        <tr><td>Multi-Location Business</td><td>$400 &ndash; $800/mo per location</td><td>Per-location GBP management, centralized reporting, brand + local balance.</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN A LOCAL SEO PROVIDER</h2>
    <p>Local SEO is where the most snake oil in the marketing industry lives, because it's easy to show a map pack screenshot and hard for a contractor to know if the ranking is real, cherry-picked, or from a search location the customer would never use. A real provider tracks rankings across a geo-grid &mdash; not just from their office IP.</p>
    <ul class="td-note-list">
      <li>Uses geo-grid ranking tools (Local Falcon, PlacesScout) &mdash; not just single-location tracking</li>
      <li>Has managed GBPs through Google suspension appeals &mdash; not everyone can navigate that process</li>
      <li>Tracks calls generated directly from GBP, not just impressions or "views"</li>
      <li>Builds real location pages with unique local content, not city-swapped templates</li>
      <li>Has a documented review generation system with proof of monthly review counts</li>
      <li>Knows the current GBP guidelines cold &mdash; this stuff changes every quarter</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds local SEO programs for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; LOCAL SEO</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>What is the "map pack" and why does everyone talk about it?</h3><p>The map pack (also called the "local 3-pack") is the block of three local business listings Google shows on a map for local-intent searches. For trades, it typically captures 40&ndash;60% of all clicks on the search results page. If you're not in it, you're fighting for the remainder.</p></div>
      <div class="td-faq-item"><h3>Can I do local SEO myself?</h3><p>You can do the basics &mdash; claim your GBP, keep hours current, ask for reviews. But the ongoing work &mdash; citation cleanup, geo-grid ranking analysis, competitive displacement, schema, location page strategy &mdash; usually costs more in owner-hours than an agency retainer.</p></div>
      <div class="td-faq-item"><h3>How is local SEO different from regular SEO?</h3><p>Regular SEO focuses on organic blue-link rankings &mdash; often nationally. Local SEO focuses on the map pack and geo-modified searches ("plumber Bettendorf"). They overlap, but the tactics, tools, and ranking factors are different. Most contractors need both, weighted heavily toward local.</p></div>
      <div class="td-faq-item"><h3>What if I don't have a storefront customers visit?</h3><p>You use a service-area business (SAB) profile instead of a storefront listing. You hide your address, list your service radius, and optimize the same way. Google explicitly supports contractors who operate this way &mdash; it just requires a different setup.</p></div>
      <div class="td-faq-item"><h3>Do reviews really move rankings that much?</h3><p>Yes. Review count, star rating, review recency, and review keywords are all confirmed local ranking factors. Beyond that, a listing with 187 reviews at 4.8 stars gets clicked 3&ndash;5x more than one with 12 reviews at 4.4 &mdash; so even if rankings tied, the review-strong business wins the customer.</p></div>
    </div>
  </div>
</section>"""

PAGES['paid-ads.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>GOOGLE ADS FOR CONTRACTORS</h2>
    <p class="td-answer">Paid ads for contractors are the fastest way to turn a marketing budget into a booked calendar &mdash; and the fastest way to torch a marketing budget when they're run wrong. The difference between a $60 cost per lead and a $400 cost per lead is almost always in the setup, not the spend.</p>

    <h2>WHY CONTRACTOR PPC IS DIFFERENT FROM ECOMMERCE PPC</h2>
    <p>Ecommerce ads optimize for a shopping cart. Contractor ads optimize for a phone ringing, and the entire strategy is different. You're bidding against emergency-intent searches at 2 a.m., competing with home service aggregators (Angi, HomeAdvisor, Thumbtack) with unlimited budgets, and trying to squeeze margin out of clicks that can cost $25 to $80 apiece in trades like HVAC, plumbing, and roofing.</p>
    <p>The other wrinkle is that Google's own products for contractors have fractured. You now have Search Ads, Performance Max, Local Services Ads (LSAs), and Display all competing for the same budget &mdash; with different bidding models, different reporting, and wildly different lead quality. Running "Google Ads" without a specific strategy for which product does what is how contractors lose $8,000 a month and blame the platform.</p>

    <h2>WHAT MAKES CONTRACTOR PAID CAMPAIGNS WORK</h2>
    <h3>Local Services Ads (LSAs) &mdash; the top of the page</h3>
    <p>LSAs are Google's pay-per-lead product for contractors. They sit above regular ads, show your Google Guaranteed badge, and only charge when a real customer contacts you. For most trades &mdash; plumbing, HVAC, electrical, roofing &mdash; LSAs should be the first channel. We handle the licensing verification, the profile buildout, lead dispute management, and the ongoing optimization to keep cost-per-lead low.</p>
    <h3>Search Ads with tight geo and negative keywords</h3>
    <p>Traditional Search Ads still matter &mdash; especially for services LSAs don't cover, or when you want to control exactly which keyword drives which landing page. The unglamorous work here is the negative keyword list: "DIY," "how to," "salary," "training," "cheap," "free," and the hundreds of other terms that will drain your budget on tire-kickers if left unblocked.</p>
    <h3>Landing pages that match the ad</h3>
    <p>Sending ad traffic to your homepage is arson. Every ad group needs a dedicated landing page that mirrors the ad copy, loads in under two seconds, has one clear call-to-action (call or short form), and answers the three questions every panicked homeowner has: can you come today, how much, and are you licensed. Landing page conversion rate usually accounts for a bigger swing in ROI than bidding does.</p>
    <h3>Call tracking, form tracking, and lead scoring</h3>
    <p>If you can't tell which keyword produced which booked job, you're bidding blind. We install call tracking (dynamic number insertion), record calls for lead-quality scoring, tag every form submission with source data, and &mdash; where possible &mdash; push booked-revenue data back into Google so its algorithm learns to chase your best jobs, not just your cheapest clicks.</p>

    <h2>WHAT DO CONTRACTOR GOOGLE ADS COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Tier</th><th>Typical Monthly Spend + Mgmt</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>LSA-Only Starter</td><td>$500 &ndash; $2,000 ad spend + $400 mgmt</td><td>Local Services Ads setup, verification, lead disputing, weekly optimization.</td></tr>
        <tr><td>Search Ads Starter</td><td>$1,500 &ndash; $3,000 ad spend + $600 mgmt</td><td>2&ndash;4 campaigns, 3&ndash;6 landing pages, call tracking, monthly reporting.</td></tr>
        <tr><td>Standard PPC Program</td><td>$3,500 &ndash; $8,000 ad spend + $1,000 mgmt</td><td>LSAs + Search + Performance Max, dedicated landing page bank, weekly optimization, call scoring.</td></tr>
        <tr><td>Aggressive Multi-Service</td><td>$8,000 &ndash; $20,000 ad spend + $1,800 mgmt</td><td>Full multi-channel program, dayparting, competitor conquest, custom dashboards, quarterly strategy resets.</td></tr>
        <tr><td>Multi-Location</td><td>$15,000+ ad spend + $2,500+ mgmt</td><td>Per-location campaigns, franchise-compliant creative, unified reporting.</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN A PPC PROVIDER</h2>
    <p>PPC is the easiest marketing service to fake. An agency can spend your $10,000, show you a report full of clicks and impressions, and never once tell you how many booked jobs came out of it. Real PPC providers report on cost-per-booked-job and revenue per ad dollar, and they'll walk you through every campaign in the account without hiding behind "proprietary" bidding.</p>
    <ul class="td-note-list">
      <li>Reports cost-per-lead AND cost-per-booked-job &mdash; not just clicks and CTR</li>
      <li>You own the Google Ads account and can log in and see everything at any time</li>
      <li>Manages LSA disputes and knows how to get bad leads refunded (this is a specific skill)</li>
      <li>Builds dedicated landing pages &mdash; doesn't just push traffic to your homepage</li>
      <li>Uses call tracking with recording, and reviews calls for lead quality</li>
      <li>Willing to reduce your spend if the data says the money is being wasted</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds Google Ads programs for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; GOOGLE ADS</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>Should I run LSAs or Search Ads?</h3><p>Both, in most cases. LSAs get you the top of the page with pay-per-lead pricing and the Google Guaranteed badge. Search Ads give you control over keyword targeting, landing pages, and services LSAs don't cover well (renovations, installations, commercial work). Starting LSA-only is fine if budget is tight.</p></div>
      <div class="td-faq-item"><h3>What's a good cost per lead for a contractor?</h3><p>It varies enormously by trade and market. HVAC and plumbing leads in competitive metros often run $60&ndash;$150 through LSAs and $80&ndash;$250 through Search Ads. Roofing, remediation, and legal-adjacent trades run higher. What matters more is cost per booked job and average job value &mdash; a $200 lead that books a $12,000 install is a bargain.</p></div>
      <div class="td-faq-item"><h3>How fast do paid ads produce leads?</h3><p>LSAs can produce leads within 48 hours of activation. Search Ads typically start producing within a week and hit stable performance within 30 days as Google's bidding algorithm learns your account. Full optimization usually takes 60&ndash;90 days.</p></div>
      <div class="td-faq-item"><h3>My last agency spent my budget on junk clicks. How do you prevent that?</h3><p>Aggressive negative keyword lists from day one, geographic targeting drawn to actual service areas (not entire metro DMAs), dayparting to only run when your phones are answered, and weekly review of search term reports to catch waste before it accumulates. Most junk-click accounts we take over have zero negatives and no geo-restrictions.</p></div>
      <div class="td-faq-item"><h3>Can I run Google Ads without a great website?</h3><p>You can run LSAs without a website &mdash; Google will use your GBP. For Search Ads, you need at least dedicated landing pages, even if the rest of the site is dated. Sending paid traffic to a slow, unconvincing site burns money regardless of how well the ads are targeted.</p></div>
    </div>
  </div>
</section>"""

PAGES['social-media.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>SOCIAL MEDIA FOR CONTRACTORS</h2>
    <p class="td-answer">Social media for a trade contractor isn't about going viral. It's about showing every homeowner in your service area &mdash; over and over &mdash; that you're the crew that shows up, does the work right, and cleans up when they leave. Done consistently, that becomes referrals, reviews, and a phone that rings without a marketing spend behind every call.</p>

    <h2>WHY SOCIAL MEDIA MATTERS FOR TRADES</h2>
    <p>The homeowner deciding between three quotes is going to look you up. They're going to check Google, they're going to check reviews, and &mdash; increasingly &mdash; they're going to check Facebook and Instagram. What they find there tells them whether you're a real, active business with actual crews on actual jobs, or a logo and a phone number that could vanish tomorrow. An empty or three-years-stale social presence quietly kills more quotes than most contractors realize.</p>
    <p>Social also does what SEO and ads can't: it builds a following of past customers, neighbors, and referral sources who see your work regularly. When their sister needs a plumber, they don't Google &mdash; they tag you in a Facebook comment. That's earned pipeline, and it compounds over the years.</p>

    <h2>WHICH PLATFORMS ACTUALLY MOVE THE NEEDLE</h2>
    <h3>Facebook &mdash; still the workhorse</h3>
    <p>For most trades in Midwestern markets, Facebook remains the highest-ROI social platform. The homeowner demographic (35&ndash;65+) lives there. Local community groups, Marketplace, and neighborhood pages create word-of-mouth loops that no other platform matches. Facebook is also where paid social for contractors performs best &mdash; cheap CPMs, precise geo-targeting, strong performance for lead-form ads.</p>
    <h3>Instagram &mdash; the portfolio</h3>
    <p>Instagram is where your work looks like work worth paying for. Before/afters, drone shots of finished roofs, tile-work close-ups, wrapped trucks &mdash; the platform rewards visual quality and hurts visual laziness. It's also where younger homeowners (30&ndash;45) do their vetting, so ignoring it costs you the next decade of customers.</p>
    <h3>Nextdoor &mdash; the hyper-local referral engine</h3>
    <p>Nextdoor is criminally underused by contractors. Every "who's a good electrician?" post is a warm lead in your service area, and a claimed business profile with a handful of responses can drive more calls per month than a full Facebook posting schedule. It's not glamorous, but the intent is unmatched.</p>
    <h3>TikTok and YouTube Shorts &mdash; the emerging channel</h3>
    <p>For contractors willing to be on camera, short-form video is producing outsized reach right now. A 30-second clip of a plumber snaking a nightmare drain or a roofer walking a hail damage inspection can pull thousands of local views for zero ad spend. Not every contractor should chase this &mdash; but the ones who do are building brands their competitors can't touch.</p>

    <h2>WHAT DOES SOCIAL MEDIA MANAGEMENT COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Tier</th><th>Typical Investment</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>Basic Presence</td><td>$400 &ndash; $800/mo</td><td>2 platforms, 8&ndash;12 posts/mo from photos you send, basic comment monitoring, monthly report.</td></tr>
        <tr><td>Standard Management</td><td>$900 &ndash; $1,800/mo</td><td>2&ndash;3 platforms, 16&ndash;20 posts/mo, story/reel production, review response, community engagement.</td></tr>
        <tr><td>Content + Video Program</td><td>$2,000 &ndash; $4,000/mo</td><td>Monthly on-site video shoot, edited reels/shorts, full posting calendar, DM/lead handling.</td></tr>
        <tr><td>Paid Social Layer</td><td>$500 &ndash; $3,000/mo ad spend + $500 mgmt</td><td>Facebook/Instagram lead ads, retargeting, seasonal promotions, weekly optimization.</td></tr>
        <tr><td>Full Social Program</td><td>$3,500 &ndash; $7,000/mo all-in</td><td>Content shoot + organic management + paid social + community management across all active platforms.</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN A SOCIAL MEDIA PROVIDER</h2>
    <p>Social for contractors is uniquely bad territory for agencies that don't understand the trades. Stock photos of "professional handshake" won't fool your audience for a second. The provider needs to be comfortable in the field, on job sites, and coaching your crews to send in photos and clips that actually show the work.</p>
    <ul class="td-note-list">
      <li>Has a system for collecting job-site photos and video from your crews &mdash; doesn't expect you to send it all</li>
      <li>Writes captions in your voice, not corporate marketing-speak</li>
      <li>Manages review responses and inbound DMs &mdash; not just outbound posting</li>
      <li>Understands paid social lead-form ads and can produce landing content that converts</li>
      <li>Reports engagement, follower growth AND leads generated &mdash; not just "reach"</li>
      <li>Willing to come on-site periodically to capture original photo/video content</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds social media programs for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; SOCIAL MEDIA</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>Do I really need to be on TikTok?</h3><p>No. Most contractors get 90% of their social ROI from Facebook and Instagram, with Nextdoor as the sleeper. TikTok and Shorts are worth it if you (or a crew member) are naturally comfortable on camera &mdash; otherwise the effort-to-return ratio doesn't pencil out for a busy contractor.</p></div>
      <div class="td-faq-item"><h3>Does social media help SEO?</h3><p>Indirectly, and significantly. Social drives branded searches (people Googling your name after seeing your post), referral traffic to your site, and &mdash; for Google Business Profile &mdash; signals of an active, real business. It also fuels reviews, which are a direct local ranking factor. Social isn't an SEO tactic, but it feeds the machine.</p></div>
      <div class="td-faq-item"><h3>How often should I post?</h3><p>3&ndash;5 times per week per platform is the sweet spot. Below 2/week and the algorithm stops showing you to your own followers. Above 7/week is usually a waste unless you're running a heavy content operation. Consistency matters more than volume &mdash; a steady 3/week beats a burst of 15 followed by silence.</p></div>
      <div class="td-faq-item"><h3>Should I boost posts or run real ads?</h3><p>Real ads, through Meta Business Manager, almost every time. Boost buttons are Meta's way of taking your money for lower-quality placements and worse targeting. A properly built lead-form campaign will outperform boosted posts by 3&ndash;5x on cost per lead.</p></div>
      <div class="td-faq-item"><h3>What do I do about negative comments or reviews?</h3><p>Respond publicly, quickly, and professionally &mdash; always. Acknowledge, apologize where warranted, offer to take it offline. How you handle criticism in public is one of the most-read signals of your business's character, and a well-handled negative review often converts better than five glowing ones.</p></div>
    </div>
  </div>
</section>"""

PAGES['software.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>FIELD SERVICE SOFTWARE SETUP FOR CONTRACTORS</h2>
    <p class="td-answer">Field service software runs your dispatch board, your invoices, your customer history, and your reporting from one place. Most contractors either pick the wrong platform for their trade or buy the right one and use maybe 20% of it. Toughjobs helps you choose the right system, configure it correctly, and wire it into your marketing so every lead, job, and follow-up flows through one source of truth.</p>

    <h2>WHY MOST CONTRACTORS OUTGROW THEIR SOFTWARE &mdash; OR NEVER FULLY USE IT</h2>
    <p>We see the same pattern on almost every audit. A three-truck plumbing shop signs up for a $400-a-month enterprise platform because a sales rep pushed it hard, then uses it as a glorified calendar. Or the opposite &mdash; a company doing $2M in revenue is still running the office out of a shared Google Sheet and a paper invoice book, losing hours every week to double entry and losing jobs to techs who forgot to follow up. Software isn't the problem in either case. The setup is.</p>
    <p>Good field service software should shrink your admin overhead, tighten your close rate, and give you clean numbers to make decisions with. If it doesn't, either the platform is wrong for your trade, the workflow was never actually configured, or nobody on your team was trained past the basics. We fix all three.</p>

    <h2>WHAT GOOD FIELD SERVICE SOFTWARE ACTUALLY DOES</h2>
    <h3>Scheduling &amp; Dispatch</h3>
    <p>The dispatch board is the heart of the system. Done right, it shows every tech's day, drive time between jobs, skill match to the ticket, and open capacity for same-day add-ons. Done wrong, it's a wall of colored blocks nobody trusts, so the dispatcher keeps a paper backup. We configure job types, capacity rules, and drive-time buffers so the board becomes the source of truth &mdash; not decoration.</p>
    <h3>Invoicing &amp; Payments</h3>
    <p>Techs should be able to build an estimate, get a signature, take payment, and email a receipt before they pull out of the driveway. That means good option sheets, correct tax rules, integrated payment processing, and financing options built into the flow. Same-day invoicing alone typically pulls average days-to-pay from 30+ down under 10.</p>
    <h3>Customer History &amp; Communication</h3>
    <p>Every truck roll, every quote, every note, every photo &mdash; attached to the property, not the person. That's what lets a tech walk into a house they've never been to and know the water heater was replaced in 2023, the homeowner declined the surge protector last spring, and the dog bites. Automated appointment confirmations, on-the-way texts, and post-job follow-ups all live here too.</p>
    <h3>Reporting &amp; KPIs</h3>
    <p>Close rate by tech, average ticket by job type, revenue per truck per day, membership conversion, lead source ROI. If you can't pull these numbers in under a minute, your software is holding you back. We build the dashboards so you're looking at your business every Monday morning instead of guessing.</p>

    <h2>WHAT DOES FIELD SERVICE SOFTWARE COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Service / Tier</th><th>Typical Investment</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>Entry platforms (Jobber, Housecall Pro)</td><td>$50 &ndash; $200 / user / month</td><td>Scheduling, invoicing, basic CRM &mdash; good fit for 1&ndash;5 truck shops</td></tr>
        <tr><td>Mid-market (ServiceTitan, FieldEdge, Service Fusion)</td><td>$200 &ndash; $400 / user / month</td><td>Full dispatch, price book, memberships, robust reporting &mdash; 5&ndash;30 trucks</td></tr>
        <tr><td>Enterprise &amp; custom (ServiceTitan Enterprise, custom builds)</td><td>$400+ / user / month</td><td>Multi-location, call recording, advanced analytics, custom integrations</td></tr>
        <tr><td>Toughjobs setup &amp; configuration</td><td>$3,500 &ndash; $12,000 one-time</td><td>Platform selection, workflow build, price book, team training, marketing integration</td></tr>
        <tr><td>Ongoing optimization &amp; training</td><td>$500 &ndash; $1,500 / month</td><td>Monthly tune-ups, new-hire training, reporting reviews, integration maintenance</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN A FIELD SERVICE SOFTWARE PARTNER</h2>
    <p>Anyone can resell software. What you need is someone who's actually run trade operations, understands how your techs really work, and won't disappear the day the platform goes live. Setup is 30% of the work &mdash; the other 70% is adoption.</p>
    <ul class="td-note-list">
      <li>Trade-specific experience &mdash; HVAC, plumbing, and electrical workflows are not interchangeable</li>
      <li>A written implementation plan with milestones, not a sales pitch and a login</li>
      <li>Hands-on training for dispatchers, techs, and office staff &mdash; not a Loom video and a wave goodbye</li>
      <li>Integration with your marketing stack so every lead source is tracked back to revenue</li>
      <li>Price book and option sheet build-out, not just a blank template</li>
      <li>Ongoing support after go-live &mdash; the first 90 days is when adoption is won or lost</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds field service software programs for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; FIELD SERVICE SOFTWARE</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>Which platform is best for my trade?</h3><p>Depends on size and complexity. Jobber and Housecall Pro are strong under 5 trucks. ServiceTitan dominates HVAC and plumbing above 5 trucks but is overkill for a solo operator. FieldEdge is a solid middle ground. We match the platform to your team size, revenue, and how much reporting you actually need &mdash; not to whoever's paying the biggest referral fee.</p></div>
      <div class="td-faq-item"><h3>How long does implementation take?</h3><p>A clean setup for a small shop takes 3&ndash;4 weeks. Mid-market platforms with full price book, memberships, and integrations run 6&ndash;10 weeks. Enterprise builds can be 3&ndash;6 months. Rushing this is how you end up abandoning the software six months later.</p></div>
      <div class="td-faq-item"><h3>Can we switch platforms without losing customer data?</h3><p>Yes, in almost every case. We handle data mapping and migration of customers, equipment history, open jobs, and accounting records. There's always some cleanup, but you don't lose your book of business.</p></div>
      <div class="td-faq-item"><h3>Do we really need to integrate software with marketing?</h3><p>If you want to know which ads, keywords, and campaigns actually produce revenue &mdash; yes. Otherwise you're spending marketing dollars blind. Call tracking, form tracking, and lead-source tagging inside the CRM turn marketing from a cost center into a measurable investment.</p></div>
      <div class="td-faq-item"><h3>What's the biggest mistake contractors make?</h3><p>Buying the biggest platform they can afford and assuming it'll fix operational problems on its own. Software amplifies whatever process you already have. If your process is a mess, expensive software just makes an expensive mess. Fix the workflow first, then automate it.</p></div>
    </div>
  </div>
</section>"""

PAGES['reviews.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>REVIEW MANAGEMENT FOR CONTRACTORS</h2>
    <p class="td-answer">Reviews are the single biggest conversion lever in the trades &mdash; more than your website, your ads, or your price. Homeowners choose contractors based on star rating, review count, and how recent the last review is, and Google uses those same signals to decide who ranks in the local map pack. Toughjobs builds automated review systems that consistently pull 5-star feedback from happy customers and handle the occasional negative one the right way.</p>

    <h2>WHY REVIEWS ARE THE #1 CONVERSION FACTOR FOR TRADES</h2>
    <p>When a homeowner has a leaking water heater at 8pm, they're not reading your About page. They're pulling up Google Maps, scanning three contractors, and calling the one with the most recent reviews and the highest star rating. That's it. Website design, tagline, years in business &mdash; none of it matters if the shop next to you has 400 reviews and you have 22.</p>
    <p>The math is brutal and consistent. A move from a 3.9 to a 4.6 star rating roughly doubles call volume. A move from 40 reviews to 200+ often doubles it again. And Google feeds the same signal into local rankings &mdash; high review velocity, keyword-rich review text, and owner responses all push you up the map pack. Reviews aren't a nice-to-have. They're the foundation.</p>

    <h2>WHAT A REAL REVIEW GENERATION SYSTEM LOOKS LIKE</h2>
    <h3>Automated Post-Job SMS</h3>
    <p>The moment a tech marks a job complete, an SMS goes to the customer with a direct link to your Google review page &mdash; not a landing page, not a survey, one tap to write. Timing matters. Text arrives while the customer is still standing in the fixed-mess kitchen thinking "wow, that was fast." Twenty-four hours later the moment is gone.</p>
    <h3>QR Codes on Trucks, Invoices, and Business Cards</h3>
    <p>Every truck door, every invoice, every card the tech hands over &mdash; a QR code that drops the customer straight into a review flow. It's a free multiplier on top of the SMS system and catches the customers who didn't get texted or missed the message.</p>
    <h3>Email Backup for Non-Texters</h3>
    <p>Older homeowners often don't act on SMS. A polite follow-up email 48 hours after the job closes captures another slice of reviews you'd otherwise miss. Same one-tap link, same short ask.</p>
    <h3>Response Management</h3>
    <p>Every review &mdash; 5-star, 1-star, or anywhere in between &mdash; gets a response within 24 hours. Google reads response rate as a ranking signal, and prospects read your responses as a preview of how you'd treat them. We draft responses or handle them entirely, in your voice.</p>

    <h2>WHAT DOES REVIEW MANAGEMENT COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Service / Tier</th><th>Typical Investment</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>DIY tools (Podium, Birdeye, NiceJob)</td><td>$100 &ndash; $400 / month</td><td>Software only &mdash; you run the campaigns, write responses, handle escalations</td></tr>
        <tr><td>Toughjobs Starter Review Program</td><td>$450 / month</td><td>SMS + email system, QR assets, monthly reporting, response templates</td></tr>
        <tr><td>Toughjobs Managed Reviews</td><td>$850 / month</td><td>Full automation, done-for-you responses, reputation monitoring across Google, Facebook, Yelp, BBB</td></tr>
        <tr><td>Reputation recovery (existing negative reviews)</td><td>$1,500 &ndash; $4,000 one-time</td><td>Response strategy, review dispute filings, review-flood campaign to bury old bad ones</td></tr>
        <tr><td>Setup &amp; platform integration</td><td>$500 &ndash; $1,200 one-time</td><td>Connects your CRM/dispatch software to the review system so it's fully automated</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN A REVIEW MANAGEMENT PROVIDER</h2>
    <p>The industry has a bad reputation for a reason &mdash; there are agencies selling fake reviews from overseas farms that will get your Google Business Profile suspended overnight. A real provider generates real reviews from real customers, faster than you'd get them on your own, and never touches your login without a strategy for what to do with it.</p>
    <ul class="td-note-list">
      <li>Only generates reviews from actual completed jobs &mdash; no gift cards, no incentives, no purchased reviews</li>
      <li>Integrates directly with your dispatch/CRM software so requests fire automatically</li>
      <li>Handles response management within 24 hours across every platform, not just Google</li>
      <li>Reports on review velocity, star rating trend, and keyword frequency &mdash; not vanity metrics</li>
      <li>Has a documented process for handling and disputing fake negative reviews</li>
      <li>Understands Google's review policies cold &mdash; one wrong ask can get your listing flagged</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds review management programs for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; REVIEW MANAGEMENT</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>Is buying reviews ever okay?</h3><p>Never. Google's algorithms and manual review team are extremely good at spotting bought reviews, and the penalty is removal from the map pack &mdash; sometimes permanently. Every review we generate comes from a verified customer who actually paid you for work.</p></div>
      <div class="td-faq-item"><h3>How fast should we see results?</h3><p>New reviews start rolling in within the first week of launching. A shop doing 100 jobs a month usually adds 25&ndash;40 new reviews per month once the system is live &mdash; versus the 2&ndash;4 they were getting on their own.</p></div>
      <div class="td-faq-item"><h3>What do we do about a bad review?</h3><p>Respond publicly within 24 hours &mdash; calm, professional, offer to make it right offline. Never argue in the response thread. If the review violates Google's policy (competitor, non-customer, profanity) we file for removal. And the best defense is volume &mdash; twenty new 5-stars in the following month push it off the front page.</p></div>
      <div class="td-faq-item"><h3>Can we offer a discount for a review?</h3><p>No. Every major platform prohibits incentivized reviews, and getting caught will tank your rating and potentially your entire listing. The only ethical ask is "if you were happy with the work, would you take 30 seconds to leave us a review?" That's enough &mdash; because if the work was actually good, they'll do it.</p></div>
      <div class="td-faq-item"><h3>Which platforms matter most?</h3><p>Google is 80% of the game. Facebook is a distant second, mostly for social proof. Yelp matters in some markets more than others. BBB still carries weight with older homeowners. We prioritize Google review velocity first, then layer the others in.</p></div>
    </div>
  </div>
</section>"""

PAGES['print-collateral.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>PRINT COLLATERAL &amp; DIRECT MAIL FOR CONTRACTORS</h2>
    <p class="td-answer">Print isn't dead &mdash; for trade contractors, it's one of the highest-ROI channels left, precisely because everyone else has abandoned it. Door hangers, yard signs, and direct mail postcards let you dominate a neighborhood after a job, land in mailboxes that never get a competing flyer, and convert the 40% of homeowners over 55 who still trust paper more than a Google ad. Toughjobs designs, prints, and deploys print programs that look professional and actually generate calls.</p>

    <h2>WHY PRINT STILL WORKS &mdash; AND WORKS BETTER FOR TRADES</h2>
    <p>Digital saturation has flipped the economics. A homeowner sees 4,000+ ads a day online, tunes out 99% of them, and blocks another chunk with ad blockers. Meanwhile, they get maybe 3&ndash;5 pieces of mail per day &mdash; and every one of them gets touched, if only to get thrown out. For a well-designed direct mail piece, that's a guaranteed impression a Facebook ad can't buy at any price.</p>
    <p>Trades also have a unique advantage: geographic concentration. When your plumbing crew replaces a main line on Elm Street, you should own Elm Street for the next 30 days. Door hangers on the 20 neighboring houses, a yard sign in the customer's yard, a postcard mailed to the surrounding block &mdash; you become the visible plumber in that neighborhood, and the next leak call goes to you.</p>

    <h2>WHICH PRINT PIECES ACTUALLY DRIVE ROI</h2>
    <h3>Door Hangers</h3>
    <p>The highest-ROI print piece for trades, period. After completing a job, techs hang branded door hangers on 15&ndash;25 neighboring homes. Response rates commonly run 1&ndash;3%, which means every job creates 1&ndash;2 additional leads for essentially the cost of paper. "We just fixed your neighbor's [X] &mdash; here's what we found in the neighborhood" is a proven angle.</p>
    <h3>Yard Signs</h3>
    <p>The cheapest billboard you'll ever run. A crisp branded sign in every completed roof, driveway, HVAC install, or landscape job puts you in front of every neighbor, delivery driver, and passerby for the length of the project. Simple design, big logo, big phone number, one clear service.</p>
    <h3>Direct Mail Postcards</h3>
    <p>EDDM (Every Door Direct Mail) through USPS lets you saturate specific carrier routes for around 20 cents a piece. Best use cases: seasonal service reminders (spring AC tune-ups, fall furnace checks), post-storm follow-ups, and neighborhood-specific offers tied to recent completed jobs.</p>
    <h3>Business Cards, Flyers, and Brochures</h3>
    <p>Still essential &mdash; but as support pieces, not lead generators on their own. A well-designed card handed to a homeowner during an estimate, a leave-behind brochure explaining a maintenance plan, a flyer at the parts counter of the local supply house. They reinforce trust and give people something physical to remember you by.</p>

    <h2>WHAT DOES PRINT COLLATERAL COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Service / Tier</th><th>Typical Investment</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>Business card design + print (500)</td><td>$250 &ndash; $500</td><td>Custom design, premium stock, matte or spot-UV finish</td></tr>
        <tr><td>Door hangers (design + 1,000 prints)</td><td>$450 &ndash; $800</td><td>Custom design, heavy card stock, die-cut hanger</td></tr>
        <tr><td>Yard signs (design + 25 signs w/ stakes)</td><td>$400 &ndash; $700</td><td>Double-sided corrugated plastic, H-stakes, weatherproof</td></tr>
        <tr><td>EDDM postcard campaign (5,000 pieces)</td><td>$1,800 &ndash; $2,800</td><td>Design, print, USPS postage, route selection, tracking phone number</td></tr>
        <tr><td>Full print brand package</td><td>$3,500 &ndash; $6,500</td><td>Cards, hangers, signs, postcards, brochure, folder &mdash; coordinated design system</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN A PRINT COLLATERAL PROVIDER</h2>
    <p>Cheap online printers can produce anything you upload &mdash; but they won't design it, they won't strategize the campaign, and they won't tell you when the piece you approved is going to look amateur. A real print partner treats the design and the distribution plan as one project, not two.</p>
    <ul class="td-note-list">
      <li>Trade-experienced designers who know what actually converts homeowners &mdash; not generic graphic templates</li>
      <li>Coordinated brand system across every piece &mdash; cards, hangers, signs, and trucks all match</li>
      <li>Understands EDDM, route selection, and USPS mail specs so nothing gets rejected at the post office</li>
      <li>Uses tracking numbers or QR codes on every piece so ROI is measurable</li>
      <li>Print production quality on par with national brands &mdash; heavy stock, sharp color, no faded prints</li>
      <li>Fast turnaround on reorders so you're never handing out a photocopied card at an estimate</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds print collateral programs for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; PRINT COLLATERAL</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>Does direct mail still work in 2026?</h3><p>Yes, and better than it did five years ago because so few businesses use it anymore. Response rates on well-targeted trade postcards typically run 0.5&ndash;2%, which crushes most digital channels on a per-lead-cost basis. The key is targeting &mdash; blanket mailing entire zip codes is wasteful. Saturating carrier routes around completed jobs is not.</p></div>
      <div class="td-faq-item"><h3>How do I make print not look cheap?</h3><p>Three things. Heavy stock (16pt minimum for cards, 14pt for hangers), full-bleed professional design instead of a Word document, and consistent branding across every piece. Cheap print screams cheap contractor, and that impression sticks.</p></div>
      <div class="td-faq-item"><h3>What's the best neighborhood strategy after a big job?</h3><p>We call it the "circle strategy." Yard sign in the customer's yard for two weeks. Door hangers on 20 neighbors the day the job wraps. EDDM postcard hits the surrounding two carrier routes 10 days later. Every touchpoint references the completed work. That's how one job becomes five.</p></div>
      <div class="td-faq-item"><h3>How do I track if print is actually working?</h3><p>Use a dedicated tracking phone number on each print campaign (not your main line). QR codes with UTM parameters if you're driving to a landing page. Ask every incoming caller "how'd you hear about us?" and log it in the CRM. Within 90 days you'll know exactly what's producing.</p></div>
      <div class="td-faq-item"><h3>What's the biggest print mistake contractors make?</h3><p>Cluttered design. Trying to list every service, every certification, every discount on one card. The best-performing pieces have one message, one call to action, one phone number, and a lot of white space. Say less, sell more.</p></div>
    </div>
  </div>
</section>"""

PAGES['clothing-apparel.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>CUSTOM BRANDED APPAREL &amp; WORKWEAR FOR CONTRACTORS</h2>
    <p class="td-answer">Branded workwear is one of the highest-return marketing investments a contractor can make &mdash; it builds instant trust at the door, turns every tech into a walking billboard, and reinforces every other piece of your brand. Homeowners hire uniformed crews at measurably higher rates than crews in random t-shirts. Toughjobs builds full apparel programs &mdash; polos, hoodies, hats, hi-vis, jackets &mdash; designed, sourced, and delivered so your team always looks like the professional operation you actually are.</p>

    <h2>WHY UNIFORMED CREWS WIN MORE JOBS</h2>
    <p>The homeowner's decision to trust your tech happens in the first five seconds at the door. A clean, embroidered polo with a company logo and the tech's name tells the customer three things immediately: this is a real company, this person is accountable, and they take pride in the work. A generic t-shirt tells them the opposite &mdash; and in a world where every homeowner has heard a horror story about a contractor scam, that first impression closes or loses the job.</p>
    <p>Beyond the door, uniformed crews are moving billboards. A tech in a branded jacket at the parts counter, the gas station, the sandwich shop &mdash; every one of those is a low-cost impression, and impressions in your service area compound. Combine it with wrapped trucks and consistent yard signs, and you become the visible brand in your market. The company homeowners see everywhere becomes the company they call first.</p>

    <h2>WHAT A REAL BRANDED APPAREL PROGRAM INCLUDES</h2>
    <h3>Everyday Uniform Pieces</h3>
    <p>Embroidered polos and short-sleeve work shirts for daily wear, with company logo on the left chest and tech name opposite. Two shirts per day of the work week, per tech, minimum &mdash; nobody should be washing uniforms every night. This is the foundation of the program.</p>
    <h3>Outerwear &amp; Seasonal Layers</h3>
    <p>Branded hoodies, softshells, insulated jackets, and beanies for the shoulder seasons and winter. Midwest weather means half the year your techs are in a jacket &mdash; if the jacket isn't branded, you lose half the year of visibility.</p>
    <h3>Safety &amp; Job-Site Gear</h3>
    <p>Branded hi-vis vests and shirts for anyone working near roads, on rough-in, or on commercial job sites. Branded hard hats where required. This doubles as compliance and marketing.</p>
    <h3>Print Method Matched to Application</h3>
    <p>Embroidery for polos, jackets, and hats &mdash; premium look, durable, ideal for logos. Screen printing for high-volume t-shirts and hoodies &mdash; sharp color, cost-effective at scale. DTF (direct-to-film) transfers for smaller runs, complex color, and hi-vis where embroidery would compromise reflectivity. We pick the right method per garment, not the cheapest one across the board.</p>

    <h2>WHAT DOES BRANDED APPAREL COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Service / Tier</th><th>Typical Investment</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>Embroidered polos (min 12)</td><td>$28 &ndash; $45 / shirt</td><td>Mid-weight performance polo, left chest logo, name option</td></tr>
        <tr><td>Screen-printed t-shirts (min 24)</td><td>$14 &ndash; $22 / shirt</td><td>Cotton or blend tee, front + back print, up to 4 colors</td></tr>
        <tr><td>Embroidered hoodies &amp; jackets</td><td>$45 &ndash; $110 / piece</td><td>Heavyweight hoodie, softshell, or insulated jacket with embroidered logo</td></tr>
        <tr><td>Hi-vis workwear program</td><td>$28 &ndash; $65 / piece</td><td>ANSI-rated vests, tees, or long-sleeves with reflective-compatible branding</td></tr>
        <tr><td>Full crew launch (10 techs, head-to-toe)</td><td>$4,500 &ndash; $9,000 one-time</td><td>Polos, tees, hoodies, hats, hi-vis, jackets &mdash; logo digitized, all sizes stocked</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN A BRANDED APPAREL PROVIDER</h2>
    <p>Anyone with a heat press in their garage will quote you cheaper than a real apparel partner. What they won't do is match the right print method to the right garment, stock your logo file for reorders, or hit deadlines when you hire three new techs next Monday. Apparel is an ongoing operational need &mdash; not a one-time order.</p>
    <ul class="td-note-list">
      <li>Digitizes your logo once, professionally, and stores the file for every future run</li>
      <li>Advises on garment brand and weight &mdash; cheap shirts fade and pill after 5 washes</li>
      <li>Uses the right decoration method per piece &mdash; no embroidery on hi-vis, no cheap transfers on polos</li>
      <li>Fast reorder turnaround (2&ndash;3 weeks) for new hires and replacements</li>
      <li>Coordinated brand system &mdash; apparel logos match trucks, yard signs, and print collateral</li>
      <li>Reasonable minimums &mdash; no forcing 100-piece orders on a 6-person shop</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds branded apparel programs for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; BRANDED APPAREL</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>How many uniforms per tech do I need?</h3><p>Rule of thumb: one shirt per workday of the week, plus one spare. So 6 polos per tech for a 5-day operation. Two hoodies and one jacket for cold months. Anything less and techs end up washing uniforms nightly, which kills the garments and kills morale.</p></div>
      <div class="td-faq-item"><h3>Embroidery, screen print, or DTF &mdash; which is best?</h3><p>Embroidery for polos, hats, jackets, and anything a customer will see up close. Screen print for t-shirts and hoodies in higher volume. DTF transfers for smaller runs, complex color logos, and anywhere embroidery would compromise fit or safety (like hi-vis vests). Never let a vendor use the same method for every garment &mdash; that's a sign they only own one machine.</p></div>
      <div class="td-faq-item"><h3>What's the minimum order to start a program?</h3><p>We can start a functional apparel program at 12 pieces &mdash; enough for a small crew's initial polos. Larger runs (50+) unlock better per-piece pricing, especially on screen print. There's no reason to over-order upfront; we stock your artwork and re-run as needed.</p></div>
      <div class="td-faq-item"><h3>How fast can we get uniforms?</h3><p>Standard turnaround is 2&ndash;3 weeks from artwork approval. Rush orders (7&ndash;10 days) are usually possible with a surcharge. For ongoing programs we recommend keeping a small reserve of common sizes on hand so new hires can be outfitted same-day.</p></div>
      <div class="td-faq-item"><h3>Should apparel match our trucks and signs?</h3><p>Absolutely &mdash; that's the whole point. A homeowner should see your truck pull up, your tech step out, and your yard sign go in &mdash; and recognize all three as the same company instantly. Brand consistency is what turns individual impressions into a memorable local brand. If your apparel, trucks, and print pieces don't share the same colors, logo, and typography, you're spending money to look like three different companies.</p></div>
    </div>
  </div>
</section>"""

for filename, html_content in PAGES.items():
    filepath = os.path.join(TRADE_DIR, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        src = f.read()
    if '<!-- SEO-TRADE-CONTENT:START -->' in src:
        print(f'Already injected: {filename}')
        continue
    if '</main>' not in src:
        print(f'ERROR: no </main> in {filename}')
        continue
    injection = '<!-- SEO-TRADE-CONTENT:START -->\n' + CSS_BLOCK + '\n' + html_content + '\n<!-- SEO-TRADE-CONTENT:END -->\n'
    new_src = src.replace('</main>', injection + '</main>', 1)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_src)
    print(f'OK: {filename}')
