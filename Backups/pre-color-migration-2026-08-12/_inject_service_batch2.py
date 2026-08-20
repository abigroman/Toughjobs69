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

PAGES['branding.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>BRANDING FOR CONTRACTORS</h2>
    <p class="td-answer">Branding for contractors is the visual and verbal system that makes your company look like the obvious professional choice before a customer ever talks to you. For trades, that means a logo that reads clearly on a truck at 40 mph, a color system that stays consistent from your invoice to your uniform to your website, and standards that keep every job site, van, and social post looking like one company instead of five.</p>

    <h2>WHY BRAND MATTERS FOR TRADES</h2>
    <p>Homeowners decide whether to open the door in about three seconds. What they see in that window &mdash; the truck in the driveway, the logo on the shirt, the paperwork in the tech's hand &mdash; is your brand doing its job or failing it. A sharp, consistent look tells a stranger you have systems, insurance, and a business worth trusting with a $12,000 roof or a $30,000 HVAC replacement. A faded magnet on a personal pickup tells them the opposite.</p>
    <p>Beyond the front door, your fleet is a rolling billboard that never stops working. A properly wrapped service truck generates thousands of impressions a week in your service area &mdash; but only if the design is legible, on-brand, and repeated across every vehicle. Inconsistent branding (three logo versions, four color shades, mismatched fonts on estimates and yard signs) quietly tells the market you're small and disorganized, and it makes every marketing dollar you spend work half as hard.</p>

    <h2>WHAT BRANDING ACTUALLY INVOLVES</h2>
    <h3>Logo and mark system</h3>
    <p>A contractor logo needs to work at postage-stamp size on a business card and at ten feet across on a box truck. That means a primary lockup, a simplified monogram or icon for tight spaces, horizontal and stacked layouts, and clean single-color versions for embroidery, vinyl, and print. Anything less and your sign guy, shirt vendor, and web developer end up guessing.</p>
    <h3>Color, typography, and brand standards</h3>
    <p>A locked-down palette (usually two primary colors and one or two accents with exact hex, CMYK, Pantone, and vinyl match codes), a typography pair for headlines and body copy, and a written standards document that spells out how everything gets used. This is the file you hand to a wrap shop, a printer, or a new marketing hire so nobody has to reinvent the wheel &mdash; or worse, guess and get it wrong.</p>
    <h3>Applied brand: vehicles, uniforms, print, web</h3>
    <p>Standards only matter when they show up in the real world. That means vehicle wrap designs built around your logo and colors, uniform and hat specs, yard signs, door hangers, invoice and estimate templates, and a website that matches the truck in the driveway. When every touchpoint looks like it came from the same company, you stop looking like a handyman and start looking like the local outfit worth calling first.</p>

    <h2>WHAT DOES BRANDING COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Service / Tier</th><th>Typical Investment</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>Logo Design (standalone)</td><td>$1,500 &ndash; $3,500</td><td>Primary logo, secondary mark, horizontal &amp; stacked lockups, single-color versions, source files</td></tr>
        <tr><td>Brand Identity Package</td><td>$4,500 &ndash; $9,000</td><td>Full logo system, color palette, typography, basic stationery (business card, letterhead, invoice template)</td></tr>
        <tr><td>Vehicle Wrap Design</td><td>$800 &ndash; $2,500 per vehicle</td><td>Print-ready wrap design for van, truck, or trailer; production coordination with local wrap shop</td></tr>
        <tr><td>Brand Guidelines Document</td><td>$1,500 &ndash; $3,500</td><td>Written standards PDF covering logo usage, color specs, typography, vehicle &amp; uniform application rules</td></tr>
        <tr><td>Full Rebrand (established company)</td><td>$12,000 &ndash; $25,000+</td><td>Everything above plus web refresh, uniform &amp; signage rollout plan, fleet rewrap phasing</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN A BRANDING PROVIDER</h2>
    <p>Most graphic designers have never stood in a homeowner's driveway or watched a wrap installer squint at a low-contrast logo. Trade branding has real-world constraints &mdash; vinyl, embroidery thread counts, sun-faded colors, one-color yard signs &mdash; and the people who understand those constraints will save you thousands in reprints and rewraps.</p>
    <ul class="td-note-list">
      <li>Portfolio with actual trade or service business work &mdash; not just tech startups and coffee shops</li>
      <li>Deliverables include vector source files (AI, EPS, SVG) plus PNG and JPG exports, not just flattened images</li>
      <li>Written brand guidelines document, not just "here are your files, good luck"</li>
      <li>Understanding of wrap production, embroidery, and one-color print constraints</li>
      <li>Willing to coordinate with your wrap shop, printer, and sign vendor instead of throwing files over the wall</li>
      <li>Clear revision process and timeline in the contract &mdash; no open-ended "we'll get to it"</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds branding programs for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; BRANDING</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>Do I really need a brand if I get most of my work from referrals?</h3><p>Referrals still Google you before they call. A weak or inconsistent brand makes a referred lead second-guess the recommendation, and it caps how much you can charge. Strong branding is what lets you raise prices without losing the referral pipeline.</p></div>
      <div class="td-faq-item"><h3>Can't I just have someone on Fiverr make a logo?</h3><p>You can, and a lot of contractors do &mdash; then they spend the next three years paying wrap shops and printers to fix files that don't work at scale or don't come with the source formats they need. Cheap logos are expensive by year two.</p></div>
      <div class="td-faq-item"><h3>How long does a full brand identity project take?</h3><p>Four to eight weeks for a standard identity package, longer if vehicle wraps and a website rebuild are in scope. The bottleneck is usually decision-making on your end, not design time.</p></div>
      <div class="td-faq-item"><h3>Should every truck in my fleet look identical?</h3><p>Yes. Fleet consistency is how you multiply impressions &mdash; a homeowner who sees three of your trucks around town this week assumes you're the biggest outfit in the region, even if you only run five vehicles.</p></div>
      <div class="td-faq-item"><h3>What if I already have a logo but everything else is a mess?</h3><p>That's the most common situation. We can build the color system, typography, standards doc, and applied templates around your existing mark &mdash; or clean up the logo first if it's holding the rest back. We'll tell you straight which one you need.</p></div>
    </div>
  </div>
</section>"""

PAGES['ai-automations.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>AI &amp; AUTOMATIONS FOR CONTRACTORS</h2>
    <p class="td-answer">AI and automation for trade contractors is the set of systems that handle the follow-up, reminders, and communication your office is too busy or too tired to do consistently. That means missed calls get texted back in 30 seconds, new leads get worked within 5 minutes, appointments get confirmed automatically, and past customers get asked for reviews without anyone having to remember. Done right, it turns a two-person office into a five-person office without hiring.</p>

    <h2>WHY MANUAL FOLLOW-UP KILLS CONTRACTOR REVENUE</h2>
    <p>The data on lead response is brutal: contact a lead within 5 minutes and you're roughly 20x more likely to qualify them than if you wait 30 minutes. Most contractors call back the next morning &mdash; if at all. Every missed call that doesn't get a text-back within a minute is a homeowner already dialing your competitor. Every quote that doesn't get a follow-up on day 2, 5, and 10 is money left on the table, because the average customer needs three to five touches before they book.</p>
    <p>Your techs are in attics and crawlspaces. Your dispatcher is juggling six calls. Nobody has time to manually text every "on my way" update, every appointment reminder, every post-job review request, every "hey it's been six months since your service" note. Automation doesn't replace your people &mdash; it handles the repeatable stuff so your people can spend their brainpower on the calls, quotes, and jobs that actually require a human.</p>

    <h2>WHAT AI &amp; AUTOMATION ACTUALLY INVOLVES</h2>
    <h3>Missed-call text-back and instant lead response</h3>
    <p>The single highest-ROI automation for any trade business. Every missed call triggers an automatic text within 30 seconds: "Hey, this is [Company] &mdash; we missed your call, what can we help with?" New form fills and Google LSA leads get an immediate text and email plus an alert to your phone. This one system typically recovers 15&ndash;30% of leads that would otherwise be lost, and it pays for itself in the first month.</p>
    <h3>Appointment reminders, confirmations, and review requests</h3>
    <p>Automated SMS and email sequences that confirm the appointment when it's booked, remind the customer the day before, notify them when the tech is en route, and &mdash; the day after the job &mdash; request a Google review with a direct link. This alone can double your monthly review flow and cut no-shows by half, without your office lifting a finger.</p>
    <h3>CRM automation, pipeline nurture, and AI dispatching</h3>
    <p>Quote follow-up sequences that keep working leads warm for 30, 60, 90 days. Seasonal reminders (tune-ups, gutter cleaning, filter changes) that go out on their own. AI-powered dispatching that reads incoming call transcripts, tags urgency, and routes to the right tech. Integration with your CRM (ServiceTitan, Jobber, Housecall Pro, HubSpot) so nothing has to be entered twice and no lead falls through the cracks.</p>

    <h2>WHAT DOES AI &amp; AUTOMATION COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Service / Tier</th><th>Typical Investment</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>Starter Automation</td><td>$500 &ndash; $1,500 setup + $150&ndash;$300/mo</td><td>Missed-call text-back, new lead auto-response, basic review request sequence</td></tr>
        <tr><td>Standard Automation Stack</td><td>$2,500 &ndash; $5,000 setup + $400&ndash;$700/mo</td><td>All of the above plus appointment reminders, quote follow-up sequences, CRM integration, reporting dashboard</td></tr>
        <tr><td>Full Ops Automation</td><td>$6,000 &ndash; $12,000 setup + $800&ndash;$1,500/mo</td><td>Complete pipeline automation, seasonal campaigns, AI call routing, custom workflows, dedicated build support</td></tr>
        <tr><td>AI Voice / Chat Agent</td><td>$3,500 &ndash; $8,000 setup + $500&ndash;$1,200/mo</td><td>24/7 AI answering service that books appointments, qualifies leads, and hands off to humans when needed</td></tr>
        <tr><td>Custom Integrations (per system)</td><td>$1,000 &ndash; $4,000 one-time</td><td>Bespoke connections to field service software, accounting, phone systems, or legacy tools</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN AN AI &amp; AUTOMATION PROVIDER</h2>
    <p>The automation space is full of one-size-fits-all agencies selling the same generic GoHighLevel setup to every contractor in every trade. Trade businesses have specific workflows &mdash; dispatch, on-my-way texts, warranty reminders, seasonal cycles &mdash; and generic templates leave 80% of the value on the table.</p>
    <ul class="td-note-list">
      <li>Proven experience with your specific field service software (ServiceTitan, Jobber, Housecall Pro, etc.), not just generic CRMs</li>
      <li>You own your data, phone numbers, and workflows &mdash; not locked into their proprietary platform forever</li>
      <li>Transparent monthly costs including SMS, email, and AI usage fees &mdash; no surprise overages</li>
      <li>Real reporting on what the automation is doing (leads captured, reviews generated, appointments confirmed)</li>
      <li>Willingness to customize workflows to your trade, not just drop in a template</li>
      <li>Ongoing support and iteration, not "set it and forget it and never hear from us again"</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds AI &amp; automation programs for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; AI &amp; AUTOMATIONS</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>Will customers know they're talking to a bot?</h3><p>The best setups don't try to hide it, and they don't need to. A friendly automated text that says "we missed your call, can we help?" reads like good service, not a robot. AI voice agents introduce themselves as an assistant and hand off to a human for anything complex.</p></div>
      <div class="td-faq-item"><h3>How fast do we see results from missed-call text-back?</h3><p>Immediately. The day it's live, you start recovering calls you would have lost. Most contractors book at least one additional job in the first week &mdash; often more than enough to cover the entire monthly cost.</p></div>
      <div class="td-faq-item"><h3>Does this replace our office staff?</h3><p>No. It removes the repetitive work &mdash; reminders, confirmations, review chasing, first-touch responses &mdash; so your office can focus on the calls and quotes that actually need a human. Most contractors use automation to grow without adding headcount, not to cut staff.</p></div>
      <div class="td-faq-item"><h3>What if we already use ServiceTitan / Jobber / Housecall Pro?</h3><p>Good &mdash; we build on top of what you already have instead of replacing it. Automation layers connect to your existing CRM so your team doesn't have to learn a new system or double-enter data.</p></div>
      <div class="td-faq-item"><h3>What's the difference between automation and AI?</h3><p>Automation runs pre-built workflows on triggers (missed call &rarr; send text). AI adds judgment &mdash; reading a message, understanding intent, generating a personalized response, or booking an appointment in a real conversation. Most contractors need both, and the right stack blends them.</p></div>
    </div>
  </div>
</section>"""

PAGES['coaching.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>COACHING FOR CONTRACTORS</h2>
    <p class="td-answer">Business coaching for trade contractors is structured, one-on-one or group guidance focused on the parts of your business that have nothing to do with swinging a hammer &mdash; pricing, sales, hiring, systems, and growth planning. It exists because the skills that make a great tradesman are almost never the same skills that make a great business owner. A good coach shortens the learning curve by years and keeps you from making the same expensive mistakes every other contractor makes.</p>

    <h2>WHY WORKING ON THE BUSINESS BEATS WORKING IN IT</h2>
    <p>Most trade owners started as the best tech in the shop. That's how you got here &mdash; you were faster, cleaner, and more reliable than the guy signing your checks, so you went out on your own. The problem is that the business now needs someone thinking about pricing models, hiring pipelines, marketing spend, and job costing &mdash; and if that person is still you at 9pm after a full day on the tools, none of it actually gets done.</p>
    <p>Coaching forces the time and the structure to think strategically. It's the difference between a contractor doing $800K a year and burning out, and the same contractor doing $3M with a foreman running production. The trades are full of talented owners stuck at the same revenue for five years because nobody ever taught them how to price a job for real margin, how to hire a second crew without going broke, or how to build the SOPs that let them take a vacation. That's what coaching fixes.</p>

    <h2>WHAT COACHING ACTUALLY INVOLVES</h2>
    <h3>Sales, pricing, and margin</h3>
    <p>Most contractors underprice by 15&ndash;30% and don't know it. Coaching walks through real job costing &mdash; labor burden, overhead allocation, materials markup, warranty reserve &mdash; and builds a pricing model that generates actual profit instead of just revenue. Sales training covers the in-home consultation, handling objections, presenting options, and closing without discounting. This one area alone usually pays back the entire coaching investment inside a quarter.</p>
    <h3>Hiring, HR, and team building</h3>
    <p>Recruiting pipelines that don't rely on Craigslist and prayer. Compensation structures that reward the right behavior. Onboarding SOPs so a new hire is productive in week two instead of month three. Performance reviews, career paths, and the hard conversations most owners avoid. This is what turns a solo operator into a company with a bench.</p>
    <h3>Operations, SOPs, and growth planning</h3>
    <p>Written processes for how a job gets sold, scheduled, produced, invoiced, and followed up on &mdash; so it happens the same way every time, whether you're on the truck or on a beach. Annual and quarterly planning, KPI dashboards you actually look at, and a clear roadmap for the next $500K, $1M, or $5M of revenue. Growth without systems is chaos; systems without growth is a plateau. Coaching builds both together.</p>

    <h2>WHAT DOES COACHING COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Service / Tier</th><th>Typical Investment</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>Group Coaching Program</td><td>$500 &ndash; $1,200/mo</td><td>Monthly group calls, peer accountability, curriculum on sales/pricing/ops, community access</td></tr>
        <tr><td>1:1 Coaching (monthly)</td><td>$1,500 &ndash; $3,500/mo</td><td>Twice-monthly private sessions, direct text/email access, custom action plan, quarterly deep-dive</td></tr>
        <tr><td>1:1 Coaching (executive)</td><td>$4,000 &ndash; $8,000/mo</td><td>Weekly sessions, on-site visits, KPI dashboard, hiring &amp; org design support, financial review</td></tr>
        <tr><td>Intensive / Bootcamp (2&ndash;3 day)</td><td>$3,500 &ndash; $12,000 flat</td><td>Focused deep-work on one area (pricing rebuild, hiring system, SOP buildout) with deliverables</td></tr>
        <tr><td>Annual Coaching Retainer</td><td>$25,000 &ndash; $75,000/yr</td><td>Full-year strategic partnership, all of the above plus quarterly planning offsites and unlimited support</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN A COACHING PROVIDER</h2>
    <p>The coaching industry is flooded with people who have never run a trade business, selling frameworks they learned in an MBA program or from another coach. Trade coaching only works when the person on the other end of the call has actually built, run, or scaled a contracting company &mdash; or has coached enough of them to know the difference between a plumber's cash flow cycle and a general contractor's.</p>
    <ul class="td-note-list">
      <li>Direct experience owning or operating in the trades &mdash; not just "business coaching" credentials</li>
      <li>Verifiable client results with revenue and margin numbers, not just testimonials about "mindset"</li>
      <li>Clear curriculum or framework, not made-up-as-we-go conversations</li>
      <li>Willingness to look at your actual P&amp;L, job costing, and KPIs &mdash; not just talk in generalities</li>
      <li>References from current clients in your trade or a similar one you can actually call</li>
      <li>Defined program length and exit criteria &mdash; a good coach makes you not need them</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds coaching programs for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; COACHING</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>I'm too busy to add coaching calls to my week &mdash; is this really the right time?</h3><p>The reason you're too busy is exactly why you need it. Coaching creates the two hours a month that build the systems that give you back ten hours a week. If you wait until you're "less busy," you'll be having this same conversation in three years.</p></div>
      <div class="td-faq-item"><h3>Group coaching or 1:1 &mdash; which should I start with?</h3><p>Group works well if you're under $1M in revenue and want structured curriculum plus peer accountability. 1:1 makes more sense above $1M when your problems become specific to your company and you need custom answers, not general frameworks.</p></div>
      <div class="td-faq-item"><h3>How long until I see ROI?</h3><p>Pricing and sales work usually pays back inside 60&ndash;90 days. Hiring and systems work is a longer arc &mdash; six to twelve months to see the full compounding effect. If a coach promises overnight results, they're selling something else.</p></div>
      <div class="td-faq-item"><h3>Do I have to change my software or vendors to work with a coach?</h3><p>No. A good coach works with what you have. If your systems genuinely need to change, they'll tell you why and let you decide &mdash; they won't sell you their own preferred platform as a condition of coaching.</p></div>
      <div class="td-faq-item"><h3>What if I've already been in business 20 years?</h3><p>Some of the best coaching results happen with veteran owners who never formalized their systems because everything's always been in their head. A coach helps you document, delegate, and eventually exit &mdash; whether "exit" means sale, succession, or just finally taking a real vacation.</p></div>
    </div>
  </div>
</section>"""

PAGES['database-reactivation.html'] = """<section class="td-analysis">
  <div class="td-analysis-inner">
    <h2>DATABASE REACTIVATION FOR CONTRACTORS</h2>
    <p class="td-answer">Database reactivation is the process of turning your existing customer list &mdash; every past client, quoted lead, and dormant contact sitting in your CRM &mdash; back into paying jobs through targeted email and SMS campaigns. For contractors, it's the single cheapest source of revenue you have, because you've already paid to acquire these people once. A well-run reactivation campaign can generate $20K&ndash;$100K in booked work within 30 days, at a fraction of what new-lead advertising costs.</p>

    <h2>WHY PAST CUSTOMERS ARE THE CHEAPEST LEADS</h2>
    <p>A new lead from Google Ads or LSA costs most contractors somewhere between $75 and $400 depending on trade and market. A past customer costs pennies to reach by text or email. They already know you, they already trust you (assuming you didn't screw up the first job), and they already know what you charge. The friction that kills a cold lead &mdash; do I trust this company, do I like the pricing, do they show up when they say they will &mdash; is already resolved.</p>
    <p>And yet almost every contractor has a database of 500, 2,000, even 10,000 past customers and dormant quotes that they never touch. That list is sitting on repeat business, seasonal service revenue, referral opportunities, and warranty-cycle replacements &mdash; all of it going to whoever contacts them first when the AC dies or the roof leaks. Reactivation campaigns get you in front of them before your competitor does, and they do it for a rounding-error cost compared to acquiring new customers.</p>

    <h2>WHAT DATABASE REACTIVATION ACTUALLY INVOLVES</h2>
    <h3>List cleanup, segmentation, and compliance</h3>
    <p>Before anything sends, the list has to be cleaned &mdash; deduped, bad numbers scrubbed, opt-outs honored, unengaged contacts flagged. Then segmentation: past customers by service type, by last job date, by ticket size; quoted-but-never-booked leads; warranty-cycle customers due for a check. TCPA and CAN-SPAM compliance is non-negotiable &mdash; one bad campaign to a non-consenting list can cost more in fines than the reactivation earns.</p>
    <h3>Campaign design: win-back, seasonal, and referral</h3>
    <p>Win-back sequences target customers you haven't seen in 12&ndash;36 months with a specific offer or check-in. Seasonal campaigns hit the right lists at the right time &mdash; AC tune-ups in April, gutter cleaning in October, plumbing inspections before Thanksgiving. Referral activation asks happy past customers for names, often with an incentive. Each campaign is written for the trade, the season, and the segment &mdash; generic blasts get ignored and burn the list.</p>
    <h3>SMS, email, and multi-touch orchestration</h3>
    <p>The best-performing campaigns combine short, personal-feeling SMS with follow-up email and, for high-value segments, a dispatcher phone call. Multi-touch sequences run over 5&ndash;14 days: initial offer, reminder, last-chance, then a rest period. Everything is tracked &mdash; opens, clicks, replies, booked jobs &mdash; so you know exactly what the campaign earned and can iterate on what worked.</p>

    <h2>WHAT DOES DATABASE REACTIVATION COST?</h2>
    <table class="td-cost-table">
      <thead><tr><th>Service / Tier</th><th>Typical Investment</th><th>What You Get</th></tr></thead>
      <tbody>
        <tr><td>Single Reactivation Campaign</td><td>$1,500 &ndash; $4,000 flat</td><td>One campaign to one segment: list cleanup, copy, send, reporting. Good first test.</td></tr>
        <tr><td>Seasonal Campaign Program (quarterly)</td><td>$1,200 &ndash; $2,500/mo</td><td>Four campaigns a year timed to your seasonal cycle, ongoing list hygiene, monthly reporting</td></tr>
        <tr><td>Full Reactivation Retainer</td><td>$2,500 &ndash; $5,000/mo</td><td>Monthly campaigns across multiple segments, win-back + referral + seasonal, dedicated strategist</td></tr>
        <tr><td>Performance-Based Reactivation</td><td>10&ndash;20% of booked revenue</td><td>Little or no upfront fee, agency takes a cut of jobs directly attributed to reactivation. Best for large lists.</td></tr>
        <tr><td>One-Time List Audit &amp; Strategy</td><td>$750 &ndash; $2,000 flat</td><td>Full audit of your database, segmentation plan, 12-month campaign calendar &mdash; you or your team run it</td></tr>
      </tbody>
    </table>

    <h2>WHAT TO LOOK FOR IN A DATABASE REACTIVATION PROVIDER</h2>
    <p>The upside is huge but so is the downside &mdash; a sloppy provider can burn a database you spent a decade building, generate TCPA complaints, or blow your sender reputation so future emails go straight to spam. This is a place where cheap and fast are the wrong priorities.</p>
    <ul class="td-note-list">
      <li>Documented TCPA, CAN-SPAM, and SMS compliance process &mdash; not just "we'll be careful"</li>
      <li>Experience with your CRM or field service software (ServiceTitan, Jobber, Housecall Pro, HubSpot, etc.)</li>
      <li>Real reporting tied to booked revenue, not just opens and clicks</li>
      <li>Copy written specifically for your trade and market, not recycled templates</li>
      <li>Clear list hygiene process &mdash; bounces, opt-outs, and inactives are handled every campaign</li>
      <li>You retain full ownership of your list, sender domains, and phone numbers</li>
    </ul>

    <div class="td-soft-cta">
      <p>Toughjobs builds database reactivation programs for trade contractors across the Midwest. <a href="contact.html">Talk to us about your market</a> &mdash; no pitch, just a straight read on what would actually move the needle for your business.</p>
    </div>

    <h2>FREQUENTLY ASKED QUESTIONS &mdash; DATABASE REACTIVATION</h2>
    <div class="td-faq-list">
      <div class="td-faq-item"><h3>How big does my list need to be for reactivation to make sense?</h3><p>500 contacts is a workable floor. 2,000+ is where campaigns start reliably producing five-figure returns. Under 500 and you're better off focusing on lead generation and building the list first.</p></div>
      <div class="td-faq-item"><h3>Will reactivation campaigns annoy my past customers?</h3><p>Not if they're written like a helpful check-in instead of a sales blast. "Hey, it's been 18 months since we serviced your AC &mdash; want us to swing by for a tune-up before summer?" reads as service, not spam. Frequency and tone are what separate a welcomed message from an unsubscribe.</p></div>
      <div class="td-faq-item"><h3>How fast do we see revenue from a reactivation campaign?</h3><p>Bookings start coming in within 24&ndash;72 hours of the first send. Most campaigns generate the bulk of their booked revenue in the first 14 days, with a long tail of jobs booking over the following 30&ndash;60 days.</p></div>
      <div class="td-faq-item"><h3>What if my database is a mess &mdash; spreadsheets, old CRM exports, handwritten notes?</h3><p>That's normal. Part of the engagement is consolidating, cleaning, and segmenting whatever you have. A messy 3,000-contact database is still a goldmine once it's organized.</p></div>
      <div class="td-faq-item"><h3>Is SMS or email better for reactivation?</h3><p>SMS wins for open rates and speed to booking, email wins for cost and detail. The best programs use both &mdash; SMS for time-sensitive offers and quick check-ins, email for longer content, seasonal reminders, and anyone who hasn't opted in to texts.</p></div>
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
