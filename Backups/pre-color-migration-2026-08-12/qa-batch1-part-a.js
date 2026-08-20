// Toughjobs Chatbot Knowledge Base — Batch 1, Part A
// Services: Websites, SEO, Local SEO, Paid Ads, Branding
// Field keys: id, mainCat, serviceCat, tradeCat, trade, q, alts[], shortA, fullA,
//   intent, emotion, cta, relatedService, followUp, leadValue, escalate, escalateReason, tags[], notes

window.QA_BATCH1_A = [

/* ═══════════════ WEBSITES ═══════════════ */
{
  id:"WEB-001", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"Do you build websites for trade businesses?",
  alts:["Can you make me a website?","I need a website for my business","Do you do web design?"],
  shortA:"Yep. We build fast, mobile-first websites made to turn visitors into calls and quote requests.",
  fullA:"That's one of our four main services. We build websites specifically for trade and home-service businesses — fast loading, mobile-first, and built to get you calls and form fills, not just look pretty. Real photos of your crew and your work, clear pricing signals, and click-to-call everywhere. Want a quick look at what that'd cost for your trade?",
  intent:"Problem-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"Websites",
  followUp:"What trade are you in, and do you have a site now?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["website","web design","new site","build"], notes:"Core service intro. Capture trade + current site status to score."
},
{
  id:"WEB-002", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"How much does a website cost?",
  alts:["What's the price for a website?","How much for web design?","Website pricing?"],
  shortA:"Most trade websites run a fair one-time build fee or roll into a monthly plan. We quote up front, no hidden fees.",
  fullA:"Cost depends on how many pages and features you need, but we always quote it straight up front — no surprise fees. Some owners want a one-time build; most bundle the site into a monthly marketing plan that includes SEO and ads. The best way to get a real number is a quick quote for your trade and market. Want me to set that up?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Websites",
  followUp:"What trade are you in and how many locations do you serve?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["pricing","cost","website price","budget"], notes:"Pricing question = buying signal. Push to quote, capture budget."
},
{
  id:"WEB-003", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"How long does it take to build a website?",
  alts:["How fast can I get a website?","Website turnaround time?","When will my site be done?"],
  shortA:"Most trade sites go live in 3–5 weeks once we have your photos and info.",
  fullA:"Most of our trade websites go live in about 3 to 5 weeks. The biggest thing that speeds it up or slows it down is how fast we get your photos, service list, and business details. If you're in a rush, we can prioritize a lean launch version and add pages after. What's driving the timeline on your end?",
  intent:"Vendor-Aware", emotion:"Impatient", cta:"Request a Quote", relatedService:"Websites",
  followUp:"Do you already have photos of your work and crew?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["timeline","how long","turnaround","launch"], notes:"Timeline question often signals readiness. Ask about assets."
},
{
  id:"WEB-004", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"My current website is old and slow. Can you fix it?",
  alts:["My site is outdated","Can you redesign my website?","My website loads slow"],
  shortA:"Yes — we rebuild slow, dated sites into fast, mobile-first ones that actually get calls.",
  fullA:"That's one of the most common reasons trade owners call us. A slow, dated site quietly costs you jobs — people bounce before it even loads, especially on phones. We rebuild it fast, mobile-first, and set up to convert. We can also keep the parts that already work and improve the rest. Want a free look at what's holding your current site back?",
  intent:"Problem-Aware", emotion:"Frustrated", cta:"Start Assessment", relatedService:"Websites",
  followUp:"What's your current website address?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["redesign","slow site","outdated","rebuild"], notes:"Frustration + clear pain = strong lead. Offer assessment, get URL."
},
{
  id:"WEB-005", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"Will my website work on phones?",
  alts:["Is the site mobile friendly?","Does it work on mobile?","Mobile responsive?"],
  shortA:"Every site we build is mobile-first — most of your leads are on a phone, so we design for that first.",
  fullA:"Absolutely — we build mobile-first, meaning we design for the phone before the desktop. Most people searching for a plumber or roofer are on their phone, often in an emergency, so the site has to load fast and make calling you dead simple with big click-to-call buttons. What device do most of your customers find you on?",
  intent:"Solution-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"Websites",
  followUp:"Do you get more emergency calls or planned jobs?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["mobile","responsive","phone","mobile-first"], notes:"Reassurance question. Standard feature — confirm and pivot."
},
{
  id:"WEB-006", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"Do you write the content and take the photos?",
  alts:["Do I have to write my own website?","Who writes the copy?","Can you take pictures of my work?"],
  shortA:"We write the copy for you, and we can arrange photo shoots so you're not stuck using stock images.",
  fullA:"You don't have to be a writer — we handle the copy and set it up to sell your services in plain, no-BS language. For photos, real pictures of your crew and jobs beat stock every time, so we can arrange a shoot or coach you on what to send. What we need from you is the basics about your business; we do the heavy lifting. Want to talk through what your site would say?",
  intent:"Vendor-Aware", emotion:"Relieved", cta:"Request a Quote", relatedService:"Websites",
  followUp:"Do you have your own job photos or should we plan a shoot?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["content","copywriting","photos","photography"], notes:"Address effort concern. Photos add-on can raise deal value."
},
{
  id:"WEB-007", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"Will people actually find my website on Google?",
  alts:["Does the website come with SEO?","Will my site rank?","Does building a site help me on Google?"],
  shortA:"A great site is step one; ranking comes from our SEO service, which we build the site to support.",
  fullA:"Great question — a website alone won't magically rank. We build every site on a solid SEO foundation (fast, structured, mobile-first), and then our SEO and Local SEO services do the work of getting you to the top of 'near me' searches. Think of the site as the engine and SEO as the fuel. Most owners run both together. Are you mainly worried about showing up on Google right now?",
  intent:"Problem-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"SEO",
  followUp:"Are you showing up when you search your trade plus your city?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["seo","ranking","google","found"], notes:"Cross-sell to SEO. Encourage bundling site + SEO."
},
{
  id:"WEB-008", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"Do I own my website when it's done?",
  alts:["Who owns the website?","Do I keep my site if I leave?","Is the domain mine?"],
  shortA:"You own your domain and content. We keep it honest — no holding your site hostage.",
  fullA:"You own your domain and your content, full stop. We don't play games or hold your website hostage. If we host and maintain it as part of a plan, we'll always be clear about what that includes. Our whole model is earning your business every month, not locking you in. Anything specific you're worried about there?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Contact Us", relatedService:"Websites",
  followUp:"Have you been burned by an agency before?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["ownership","domain","contract","lock-in"], notes:"Trust question, often from someone burned before. Be reassuring."
},
{
  id:"WEB-009", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"Can you add online booking or quote forms?",
  alts:["Can customers book online?","Do you add contact forms?","Can I take appointments on my site?"],
  shortA:"Yes — booking tools, quote forms, and click-to-call are core to how we build sites that convert.",
  fullA:"Definitely. Depending on your trade we can add online booking, fast quote-request forms, and always click-to-call. For emergency trades like plumbing or towing, we lean on click-to-call; for scheduled work like landscaping or detailing, online booking works great. We build it around how your customers actually reach out. How do most of your jobs get booked today?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Websites",
  followUp:"Do you prefer calls or online bookings?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["booking","forms","scheduling","conversion"], notes:"Feature interest. Tie to their trade type."
},
{
  id:"WEB-010", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"I don't have a website at all. Where do I start?",
  alts:["I've never had a website","Starting from scratch","No website yet, help"],
  shortA:"Perfect place to start. We handle everything — domain, design, copy, launch. You just run your business.",
  fullA:"No website at all is actually a clean slate — nothing to untangle. We handle the whole thing: domain, design, copy, photos, and launch. You focus on the jobs; we build the tool that brings you more of them. First step is a quick chat about your trade and service area so we can scope it. Want to get that going?",
  intent:"Problem-Aware", emotion:"Overwhelmed", cta:"Start Assessment", relatedService:"Websites",
  followUp:"What trade are you in and what city are you based in?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["no website","new","start","first site"], notes:"Beginner — reassure, keep it simple, capture trade + city."
},
{
  id:"WEB-011", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"Why not just use Wix or a template myself?",
  alts:["Can't I build my own site?","Why pay when Wix is cheap?","DIY website vs you"],
  shortA:"You can — but a DIY site rarely ranks or converts. We build to actually get you jobs, not just exist.",
  fullA:"You totally can, and for some folks a DIY site is fine to start. The difference is a template site usually just sits there — it doesn't rank on Google or turn visitors into calls. We build for results: speed, local SEO, conversion, and real photos. If your site isn't bringing jobs, the cheap option got expensive. Are you leaning DIY to save money, or short on time?",
  intent:"Solution-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"Websites",
  followUp:"What's your main goal — save money or save time?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["diy","wix","template","objection"], notes:"Objection handling. Don't bash DIY hard; reframe on results."
},
{
  id:"WEB-012", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"Can you update or maintain my site after launch?",
  alts:["Do you offer maintenance?","Who handles updates?","Ongoing website support?"],
  shortA:"Yes — we offer ongoing maintenance so your site stays fast, secure, and current.",
  fullA:"Yep. A website isn't 'set it and forget it' — it needs updates, security, and fresh content to keep performing. We offer maintenance plans that keep it fast and secure and let you add new photos, services, or promos anytime. Most owners bundle this with their marketing plan. Do you want to be hands-off or make edits yourself sometimes?",
  intent:"Vendor-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"Websites",
  followUp:"Would you rather we handle updates or do them yourself?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["maintenance","updates","support","hosting"], notes:"Recurring revenue angle. Confirm hands-on vs hands-off."
},
{
  id:"WEB-013", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"Can you match my brand colors and logo?",
  alts:["Will the site use my branding?","Can you use my logo?","Match my truck wrap colors?"],
  shortA:"Absolutely — the site matches your brand, and if your branding's weak we can sharpen it too.",
  fullA:"Of course — your website should look like your business, matching your logo, colors, and the look on your trucks. If your branding is inconsistent or dated, that's actually our Branding service, and we can tighten it up so everything from your site to your wraps matches. Do you have a logo and brand colors already, or is that something you need help with?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Branding",
  followUp:"Do you have a logo and set brand colors already?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["branding","logo","colors","design"], notes:"Cross-sell to Branding if brand is weak."
},
{
  id:"WEB-014", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"Do you build websites for my specific trade?",
  alts:["Do you work with roofers?","Have you built sites for HVAC?","Do you do plumbing websites?"],
  shortA:"Almost certainly — we serve 27 trades, from roofing and HVAC to towing and tree service.",
  fullA:"Very likely yes. We focus only on trade and home-service businesses — 27 trades across building, mechanical, finishing, outdoor, and automotive work. That means we already know what searches book jobs in your line and what wins trust. Tell me your trade and I'll point you at exactly how we'd approach it.",
  intent:"Solution-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"Websites",
  followUp:"Which trade are you in?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["trade specific","industry","niche","which trades"], notes:"Capture trade — key scoring field."
},
{
  id:"WEB-015", mainCat:"Services", serviceCat:"Websites", tradeCat:"All Trades", trade:"All",
  q:"Can I see examples of websites you've built?",
  alts:["Do you have a portfolio?","Show me your work","Any case studies?"],
  shortA:"Yes — I can connect you with a Toughjobs rep who'll walk you through examples in your trade.",
  fullA:"Absolutely. The best way to see relevant work is to have one of our team show you sites we've built in your specific trade, since roofing looks different from detailing. I can set up a quick call or send examples your way. What trade are you in so we show you the right ones?",
  intent:"Vendor-Aware", emotion:"Evaluating", cta:"Contact Us", relatedService:"Websites",
  followUp:"What trade should we show examples from?",
  leadValue:"High", escalate:true, escalateReason:"Portfolio/case-study requests are strong buying signals; route to a rep who can share real examples and close.",
  tags:["portfolio","examples","case study","proof"], notes:"Evaluating stage — escalate to human with examples."
},

/* ═══════════════ SEO ═══════════════ */
{
  id:"SEO-001", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"What is SEO and do I need it?",
  alts:["What does SEO mean?","Explain SEO","Is SEO worth it for my business?"],
  shortA:"SEO gets you found on Google without paying per click. If customers search for your trade, you need it.",
  fullA:"SEO stands for search engine optimization — it's how you show up on Google when someone searches your trade, without paying for every click like ads. For trades, that means ranking for things like 'roof repair near me.' It's a slower build than ads but the leads keep coming without paying per click. If people search for what you do, yes, you need it. Are you showing up now when you search your trade plus your city?",
  intent:"Unaware", emotion:"Curious", cta:"Start Assessment", relatedService:"SEO",
  followUp:"Have you searched your trade plus your city to see where you land?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["seo basics","what is seo","organic","google"], notes:"Educational. Move them to check their own ranking."
},
{
  id:"SEO-002", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"How long does SEO take to work?",
  alts:["When will I see SEO results?","How fast does SEO rank me?","SEO timeline?"],
  shortA:"Most trades see real traction in about 90 days, with steady gains after that. It's a build, not a switch.",
  fullA:"SEO is a build, not a switch. Most trades start seeing real movement around 90 days, with steady gains after that as trust builds with Google. It's the opposite of ads — slower to start, but the leads don't stop when you stop paying. A lot of owners run ads for fast leads while SEO ramps in the background. Do you need leads right now, or are you building for the long haul?",
  intent:"Solution-Aware", emotion:"Impatient", cta:"Request a Quote", relatedService:"SEO",
  followUp:"Do you need leads immediately or can you build over a few months?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["timeline","how long","results","90 days"], notes:"Set expectations honestly. If urgent, cross-sell Paid Ads."
},
{
  id:"SEO-003", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"Can you guarantee I'll rank number one on Google?",
  alts:["Will I be #1 on Google?","Do you guarantee rankings?","Can you promise first page?"],
  shortA:"Nobody honest can guarantee #1 — Google decides. We can promise real work and steady progress.",
  fullA:"I'll be straight with you: anyone promising guaranteed #1 is blowing smoke — Google controls the rankings, not any agency. What we do guarantee is real, consistent work and steady progress toward the top for the searches that actually book jobs. We track it by keyword and zip so you see it move. We just ask for about 6 months to get you the results you want. Sound fair?",
  intent:"Vendor-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"SEO",
  followUp:"What would 'success' look like for you in 6 months?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["guarantee","ranking","number one","honesty"], notes:"Honesty builds trust. Never promise #1. Reinforce 6-month framing."
},
{
  id:"SEO-004", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"How much does SEO cost per month?",
  alts:["SEO pricing?","Monthly cost for SEO?","What do you charge for SEO?"],
  shortA:"SEO is usually part of a monthly plan; total spend runs roughly $800–$5,500/mo depending on trade and market.",
  fullA:"SEO is an ongoing service, so it's monthly. Across our trades, full marketing plans run roughly $800 to $5,500 a month depending on your trade, your competition, and how big a market you're chasing — higher-ticket work like restoration or solar sits at the top end. We quote it fair and up front. What trade and what area are you targeting?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"SEO",
  followUp:"What trade are you in and how big is your service area?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["pricing","cost","monthly","budget"], notes:"Pricing = buying signal. Capture trade + market to quote."
},
{
  id:"SEO-005", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"What's the difference between SEO and paid ads?",
  alts:["SEO vs Google Ads?","Should I do SEO or ads?","Ads or organic, what's better?"],
  shortA:"Ads = fast leads you pay per click. SEO = slower to build but keeps working without paying per click. Best together.",
  fullA:"Simple version: paid ads are a faucet — turn them on, leads come in fast, turn them off and they stop. SEO is a well you dig — takes a few months, but then it produces leads without paying for every click. Most owners run ads for immediate calls while SEO ramps up, then lean more on SEO over time. Are you trying to fill the schedule now, or build something lasting?",
  intent:"Solution-Aware", emotion:"Confused", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"Is your bigger need speed or long-term cost savings?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["seo vs ads","comparison","paid vs organic","strategy"], notes:"Educational. Position bundle. Cross-sell Paid Ads."
},
{
  id:"SEO-006", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"My competitors outrank me on Google. Can you fix that?",
  alts:["Competitors beat me on Google","How do I outrank other companies?","I'm below my competition"],
  shortA:"Yes — outranking local competitors is exactly what our SEO service is built to do.",
  fullA:"That's a fixable problem and one of the main reasons trades hire us. We look at what your competitors are doing to rank, then build a plan to beat them where it matters — the 'near me' searches that book jobs in your zip codes. It takes consistent work over a few months, but it's very doable. Want a free look at where you stand against your competition right now?",
  intent:"Problem-Aware", emotion:"Frustrated", cta:"Start Assessment", relatedService:"SEO",
  followUp:"Who are your top one or two competitors?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["competitors","outrank","competition","fix"], notes:"Frustration + clear goal = strong lead. Offer assessment."
},
{
  id:"SEO-007", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"What keywords will you target for my business?",
  alts:["What search terms do you go after?","Which keywords matter for me?","How do you pick keywords?"],
  shortA:"The ones that book jobs — high-intent 'near me' and service searches for your trade and area.",
  fullA:"We go after the searches that actually turn into paying jobs — high-intent ones like '[your trade] near me,' specific services (say 'water heater replacement'), and your key zip codes. We skip vanity terms that get traffic but no calls. Since we focus on trades, we already know which searches pay in your line of work. What are the two or three services you most want more of?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"SEO",
  followUp:"Which services are your most profitable jobs?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["keywords","search terms","targeting","strategy"], notes:"Capture their profitable services — useful for the sales team."
},
{
  id:"SEO-008", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"Do you do the SEO work or outsource it overseas?",
  alts:["Is your SEO done in-house?","Who actually does the work?","Do you use overseas contractors?"],
  shortA:"Our team handles your SEO — no shady outsourced link farms. Real work, tracked, reported to you.",
  fullA:"Your SEO is handled by our team who understand the trades, not farmed out to some overseas link factory that can get you penalized. We do real, honest work — content, local optimization, Google Business Profile, and clean backlinks — and we report on it so you see what's happening. That transparency is a big reason owners stick with us. Have you been burned by an SEO company before?",
  intent:"Vendor-Aware", emotion:"Skeptical", cta:"Contact Us", relatedService:"SEO",
  followUp:"Did a past company leave you with a bad taste?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["in-house","outsourcing","quality","trust"], notes:"Trust question from a burned prospect. Reassure, invite story."
},
{
  id:"SEO-009", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"How do I know the SEO is actually working?",
  alts:["How do you report results?","Will I see proof SEO works?","How do you measure SEO?"],
  shortA:"You get clear reports — rankings by keyword and zip, traffic, and most importantly, leads and calls.",
  fullA:"Fair question — you should never just take our word for it. You'll get regular reports showing where you rank by keyword and zip code, how much traffic you're pulling, and the number that matters most: calls and leads coming in. We tie it back to real jobs, not vanity numbers. Would you want a simple monthly report or a deeper dashboard?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"SEO",
  followUp:"How hands-on do you want to be with the numbers?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["reporting","results","tracking","roi"], notes:"Reporting reassurance. Ties to weekly insight report."
},
{
  id:"SEO-010", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"Will SEO help me get bigger, higher-paying jobs?",
  alts:["Can SEO bring better clients?","Does SEO get high-ticket jobs?","Will I get bigger tickets?"],
  shortA:"Yes — we can target high-ticket searches like repipes, panel upgrades, or full roof replacements.",
  fullA:"It can, and that's often the smartest play. Instead of chasing every cheap job, we target the high-ticket searches — think repipes, electrical panel upgrades, full roof replacements, or big remodels. Those searchers are ready to spend, and there's usually less competition than for tiny jobs. What are the highest-value jobs you want more of?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"SEO",
  followUp:"What's your most profitable type of job?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["high-ticket","bigger jobs","premium","targeting"], notes:"High-value intent. Capture their premium service."
},
{
  id:"SEO-011", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"Do I need to sign a long contract for SEO?",
  alts:["Am I locked into a contract?","How long do I have to commit?","Can I cancel SEO anytime?"],
  shortA:"No long lock-in. We just ask for about 6 months, since that's what SEO needs to show real results.",
  fullA:"We don't trap you in a long contract. What we do ask is around 6 months — not because of fine print, but because that's honestly how long SEO takes to produce solid results. Cancel before it's had time to work and you'd be leaving money on the table. We earn your business month to month after that. Does a 6-month runway work for you?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"SEO",
  followUp:"Is there a reason you're worried about commitment?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["contract","commitment","lock-in","cancel"], notes:"Standard brand line: 'Nope, we just need 6 months.'"
},
{
  id:"SEO-012", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"I tried SEO before and it didn't work. Why is this different?",
  alts:["SEO failed for me before","Last SEO company wasted my money","Why trust SEO again?"],
  shortA:"Usually past SEO failed from vanity metrics or overseas shortcuts. We focus on job-booking searches, tracked honestly.",
  fullA:"I hear that a lot, and usually it's because the last company chased vanity traffic, used overseas shortcuts, or never tied the work to real leads. We only do trades, we go after searches that book jobs, and we report on calls — not just rankings. If it didn't produce jobs, it wasn't working, period. Want to tell me what went wrong last time so I can be straight about whether we're a fit?",
  intent:"Vendor-Aware", emotion:"Skeptical", cta:"Contact Us", relatedService:"SEO",
  followUp:"What did the last company promise versus deliver?",
  leadValue:"High", escalate:true, escalateReason:"Previously-burned prospect with real objections — a human can hear their story and rebuild trust better than the bot.",
  tags:["past failure","objection","trust","skeptical"], notes:"Deep objection. Escalate to human after acknowledging pain."
},
{
  id:"SEO-013", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"Does SEO cover content and blog writing?",
  alts:["Do you write blogs?","Is content part of SEO?","Do you create articles?"],
  shortA:"Yes — helpful content is part of SEO. We write it for you, aimed at searches that bring in jobs.",
  fullA:"Yes. Google rewards helpful, relevant content, so writing is part of good SEO — service pages, location pages, and useful articles that answer what your customers search. We write it for you in plain language, focused on terms that book jobs, not fluff to fill space. You won't be stuck writing blog posts at 9pm. Is there a type of job you'd most want content to attract?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"SEO",
  followUp:"What service would you most want new content to promote?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["content","blog","writing","articles"], notes:"Feature clarity. Reassure on effort."
},
{
  id:"SEO-014", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"Will SEO work in a small town or rural area?",
  alts:["Does SEO work in small markets?","I'm in a rural area, will it help?","SEO for small towns?"],
  shortA:"Often it works even better — less competition means it's easier and cheaper to own your local searches.",
  fullA:"Honestly, small towns and rural areas can be some of the best markets for SEO — there's usually far less competition, so it's cheaper and faster to own the top spots for your trade. The trick is targeting the right nearby towns and zip codes so you capture the whole service radius. What area do you cover?",
  intent:"Solution-Aware", emotion:"Hopeful", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"Which towns or zip codes do you serve?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["small town","rural","local","market size"], notes:"Positive framing. Cross-link to Local SEO."
},
{
  id:"SEO-015", mainCat:"Services", serviceCat:"SEO", tradeCat:"All Trades", trade:"All",
  q:"Can you do SEO if my website is somewhere else?",
  alts:["Do I need your website for SEO?","Can you optimize my existing site?","SEO on a site you didn't build?"],
  shortA:"Usually yes — we can do SEO on most existing sites, though a fast, well-built one gets better results.",
  fullA:"In most cases yes — we can run SEO on a site we didn't build. The one caveat is that if the site is slow, dated, or hard to work with, it'll limit how far SEO can take you, so sometimes a rebuild pays for itself. We'll be honest about whether your current site can carry it. What's your website address so we can take a look?",
  intent:"Vendor-Aware", emotion:"Practical", cta:"Start Assessment", relatedService:"SEO",
  followUp:"What's your website address?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["existing site","website","compatibility","audit"], notes:"Capture URL. May cross-sell Websites if site is weak."
},

/* ═══════════════ LOCAL SEO ═══════════════ */
{
  id:"LSEO-001", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"What is Local SEO and how is it different from regular SEO?",
  alts:["Local SEO vs SEO?","What does local SEO do?","Explain local SEO"],
  shortA:"Local SEO gets you into the Google Map pack and 'near me' results for your service area specifically.",
  fullA:"Local SEO is SEO aimed at your service area. It's what gets you into the Google Map pack — those top three map results with the pin — and 'near me' searches. It covers your Google Business Profile, reviews, local listings, and location pages. For trades, this is often where the fastest, best leads come from because people searching 'plumber near me' are ready to call. Are you showing up in the map results now?",
  intent:"Unaware", emotion:"Curious", cta:"Start Assessment", relatedService:"Local SEO",
  followUp:"Do you appear in Google's map results for your trade?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["local seo","map pack","near me","google business"], notes:"Educational. Prompt them to check their map presence."
},
{
  id:"LSEO-002", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"Can you manage my Google Business Profile?",
  alts:["Do you handle Google Business?","Can you fix my Google listing?","Manage my Google Maps listing?"],
  shortA:"Yes — your Google Business Profile is core to Local SEO. We optimize it, post to it, and manage reviews.",
  fullA:"Absolutely — your Google Business Profile is one of the most powerful free tools you have, and it's central to Local SEO. We optimize it fully, keep it posted with photos and updates, manage your reviews, and make sure your info is dead accurate everywhere. A well-run profile can outrank your website for local searches. Is your profile claimed and set up right now, or is it a mess?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"Have you claimed your Google Business Profile yet?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["google business profile","gbp","google maps","listing"], notes:"High-value. Confirm profile status."
},
{
  id:"LSEO-003", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"How do I get more Google reviews?",
  alts:["Can you help with reviews?","I need more reviews","How to get 5-star reviews?"],
  shortA:"We set up simple systems to ask happy customers at the right moment and steadily grow real reviews.",
  fullA:"Reviews are huge for local ranking and for trust — most people won't call a trade with few or bad reviews. We set up simple, automatic ways to ask happy customers right after a job, when they're most likely to leave one, plus help you respond to reviews the right way. We never fake them; it's about making it easy for real customers. How many reviews do you have now?",
  intent:"Problem-Aware", emotion:"Motivated", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"Roughly how many Google reviews do you have today?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["reviews","reputation","google reviews","5 star"], notes:"Reputation angle. Tie to review-generation add-on."
},
{
  id:"LSEO-004", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"How do I rank in the Google Map pack?",
  alts:["How do I get in the top 3 map results?","Get me on Google Maps","Map pack ranking?"],
  shortA:"Map pack ranking comes from an optimized profile, strong reviews, accurate listings, and local relevance — our Local SEO does all four.",
  fullA:"The map pack — those top three pinned results — is driven by a fully optimized Google Business Profile, steady real reviews, accurate listings across the web, and local relevance signals. Our Local SEO service works all of those together. It's some of the highest-value real estate on Google for a trade because those searchers are ready to call. Want us to check where you currently show on the map for your trade?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Start Assessment", relatedService:"Local SEO",
  followUp:"What city do you most want to rank in?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["map pack","top 3","ranking","google maps"], notes:"High intent. Capture target city."
},
{
  id:"LSEO-005", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"Can you help me rank in multiple towns or cities?",
  alts:["I serve several towns, can you help?","Rank me in more than one city?","Multi-location SEO?"],
  shortA:"Yes — we build location pages and local signals so you rank across your whole service area.",
  fullA:"Yes. If you serve several towns, we build dedicated location pages and local signals for each one so you show up across your whole service radius, not just where your shop sits. This is huge for trades that drive to jobs. The key is being honest about where you actually work so Google trusts it. Which towns make up your service area?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"Which towns do you cover?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["multi-location","service area","towns","cities"], notes:"Capture service area — scoring + fit signal."
},
{
  id:"LSEO-006", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"My business isn't showing up on Google Maps. Why?",
  alts:["Why can't I find my business on Maps?","I'm invisible on Google Maps","My listing disappeared"],
  shortA:"Usually an unclaimed or unoptimized profile, inconsistent info, or weak local signals. All fixable.",
  fullA:"Usually it comes down to a few fixable things: your Google Business Profile isn't claimed or fully set up, your business info is inconsistent across the web, you're low on reviews, or the profile isn't optimized for what you do. Sometimes it's a suspension issue we can help sort out. We can run a quick check and tell you exactly what's holding you back. Want that free look?",
  intent:"Problem-Aware", emotion:"Frustrated", cta:"Start Assessment", relatedService:"Local SEO",
  followUp:"Is your Google Business Profile claimed and verified?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["not showing","invisible","map problem","fix"], notes:"Clear pain. Offer free assessment."
},
{
  id:"LSEO-007", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"Do you fix wrong business info across the web?",
  alts:["My address is wrong online","Fix my listings","Citations cleanup?"],
  shortA:"Yes — we clean up your name, address, and phone across directories so Google trusts your listing.",
  fullA:"Yep, that's part of Local SEO. When your name, address, and phone number don't match across directories, Google gets confused and it hurts your ranking. We audit and clean up those listings so everything's consistent and accurate everywhere it counts. It's boring but it moves the needle. Have you changed your phone number or address recently?",
  intent:"Solution-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"Has your business info changed recently?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["citations","napconsistency","listings","directories"], notes:"Technical fix. Confirm recent changes."
},
{
  id:"LSEO-008", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"How much does Local SEO cost?",
  alts:["Local SEO pricing?","What do you charge for local SEO?","Cost of Google Maps ranking?"],
  shortA:"Local SEO is usually part of a monthly plan. We quote fair based on your trade and how many areas you target.",
  fullA:"Local SEO is an ongoing monthly service, often bundled with your website and broader SEO. Price depends mostly on how many towns you're targeting and how competitive your trade is locally. We quote it straight up front — no hidden fees. What trade are you in and how many areas do you want to rank in?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"How many towns do you want to target?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["pricing","cost","local seo price","budget"], notes:"Pricing = buying signal. Capture trade + area count."
},
{
  id:"LSEO-009", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"How fast will Local SEO get me leads?",
  alts:["When do local SEO results show?","How quick is local SEO?","Local SEO timeline?"],
  shortA:"Often faster than regular SEO — a well-optimized profile can start pulling calls in weeks, not months.",
  fullA:"Local SEO usually moves faster than broad SEO. If your Google Business Profile has been neglected, optimizing it and getting reviews rolling can start pulling calls within a few weeks, though owning the map pack fully takes a couple months. It's one of the best fast-ish plays for a trade. Do you need calls urgently, or building steadily?",
  intent:"Solution-Aware", emotion:"Impatient", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"How soon do you need the phone ringing?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["timeline","speed","results","fast"], notes:"If very urgent, cross-sell Paid Ads / LSAs."
},
{
  id:"LSEO-010", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"What are Google Local Services Ads?",
  alts:["What are LSAs?","Google guaranteed ads?","Pay per call Google ads?"],
  shortA:"LSAs are Google's pay-per-lead ads at the very top of local searches, with the 'Google Guaranteed' badge.",
  fullA:"Local Services Ads sit at the very top of local searches, above regular ads, with that green 'Google Guaranteed' checkmark. Best part: you pay per lead, not per click — so you're paying for actual calls, not window shoppers. They're gold for emergency trades like plumbing, HVAC, and locksmiths. Setting them up and passing Google's screening is where we come in. Is your trade eligible? Let's check — what do you do?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"What trade are you in?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["lsa","local services ads","google guaranteed","pay per lead"], notes:"Overlaps Paid Ads. High value for emergency trades."
},
{
  id:"LSEO-011", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"Does Local SEO work for emergency trades like plumbing?",
  alts:["Local SEO for emergency services?","Will it help my 24/7 business?","Best for urgent calls?"],
  shortA:"It's ideal — emergency searchers use 'near me' and the map pack, exactly what Local SEO wins.",
  fullA:"Emergency trades are practically made for Local SEO. When someone's got a burst pipe or is locked out at 2am, they search 'near me,' tap the map, and call the first solid option. Getting you into that map pack with strong reviews and click-to-call is exactly what wins those jobs. We often pair it with Local Services Ads for full coverage. What emergency services do you offer?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"Do you offer 24/7 or after-hours service?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["emergency","plumbing","24/7","urgent"], notes:"Strong fit for plumbing/HVAC/locksmith/towing/restoration."
},
{
  id:"LSEO-012", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"Can you help if my Google listing got suspended?",
  alts:["My Google Business got suspended","Google removed my listing","How to reinstate my profile?"],
  shortA:"Yes — we can help work through a suspension and get your profile reinstated the right way.",
  fullA:"Sorry, that's a stressful one — a suspended profile can dry up your best leads overnight. We can help work through Google's reinstatement process and fix whatever triggered it, whether it's a policy issue, duplicate listing, or verification problem. The sooner we look, the better. This is worth talking to someone directly — want me to connect you with our team?",
  intent:"Ready to Buy", emotion:"Anxious", cta:"Contact Us", relatedService:"Local SEO",
  followUp:"When did the suspension happen?",
  leadValue:"High", escalate:true, escalateReason:"Suspension is urgent and revenue-threatening; the owner is anxious and ready to act — route to a human fast.",
  tags:["suspension","reinstatement","google penalty","urgent"], notes:"Anxious + urgent. Escalate to human."
},
{
  id:"LSEO-013", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"Do you post updates and photos to my Google profile?",
  alts:["Do you manage Google posts?","Will you add photos to my listing?","Google Business posting?"],
  shortA:"Yes — regular posts and fresh job photos keep your profile active and help you rank.",
  fullA:"We do. Google rewards active profiles, so we keep yours fresh with regular posts — offers, updates, and new photos of real jobs. Fresh, real photos of your crew and work build trust and give you an edge over competitors with a stale listing. You just send us job pics from your phone and we handle the rest. Do you snap photos on jobs already?",
  intent:"Solution-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"Do you take photos on the job?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["google posts","photos","profile management","content"], notes:"Low effort ask from owner. Reassure."
},
{
  id:"LSEO-014", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"Do you serve my area for Local SEO?",
  alts:["What areas do you cover?","Do you work in my city?","Are you local to me?"],
  shortA:"We're based in the Quad Cities and serve Illinois, Iowa, Missouri, Wisconsin, and Indiana.",
  fullA:"We're headquartered in the Quad Cities and serve trades across Illinois, Iowa, Missouri, Wisconsin, and Indiana. Local SEO is our home turf — we know these markets. Even if you're a bit outside that footprint, tell us where you are and we'll be straight about whether we're the right fit. What city are you in?",
  intent:"Solution-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"What city and state are you in?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["service area","coverage","location","local"], notes:"Capture location — key scoring field (in-area yes/no)."
},
{
  id:"LSEO-015", mainCat:"Services", serviceCat:"Local SEO", tradeCat:"All Trades", trade:"All",
  q:"Isn't my Google listing enough on its own?",
  alts:["Do I really need local SEO?","Can't I just do Google myself?","Why pay for local SEO?"],
  shortA:"A basic listing helps, but competitors optimizing theirs will outrank you. Local SEO keeps you on top.",
  fullA:"A claimed listing is a start, but on its own it usually won't win — your competitors are actively optimizing theirs, gathering reviews, and posting regularly. Without keeping up, you slide down the map. Local SEO is the ongoing work that keeps you in the top spots where the calls are. If you've got time to work it yourself, great; most owners would rather be on the tools. Where do you rank right now?",
  intent:"Solution-Aware", emotion:"Skeptical", cta:"Start Assessment", relatedService:"Local SEO",
  followUp:"Have you checked where you rank versus competitors?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["objection","diy","enough","competition"], notes:"Objection handling. Offer assessment to reveal gap."
},

/* ═══════════════ PAID ADS ═══════════════ */
{
  id:"ADS-001", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"Do you run Google Ads for trade businesses?",
  alts:["Can you manage my Google Ads?","Do you do PPC?","Run ads for me?"],
  shortA:"Yes — Google Ads, Local Services Ads, and social ads are one of our four core services.",
  fullA:"Yes, paid advertising is one of our four main services. We run Google Ads, Google Local Services Ads (pay-per-call), and social ads on Meta and TikTok, all built specifically for trades. Ads are the fastest way to get the phone ringing — usually calls within about a week. What's your main goal, more calls fast or filling slow-season gaps?",
  intent:"Problem-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"How soon do you need more calls?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["google ads","ppc","paid ads","advertising"], notes:"Core service intro. Capture urgency."
},
{
  id:"ADS-002", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"How fast will I get leads from ads?",
  alts:["When do ads start working?","How quick are ad results?","Ads timeline?"],
  shortA:"Usually calls within about 7 days of launch — ads are the fastest lever we have.",
  fullA:"Ads are the fast lane. Most trades start getting calls within about a week of launching. The first couple weeks we're tuning — dialing in keywords, times, and areas — and it gets more efficient from there. If you need the phone ringing now, this is the move, often while SEO builds in the background. When do you need calls coming in?",
  intent:"Ready to Buy", emotion:"Impatient", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"Are you slow right now or planning ahead?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["speed","fast","timeline","leads"], notes:"Urgency = high intent. Push toward quote quickly."
},
{
  id:"ADS-003", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"How much should I spend on ads?",
  alts:["What's a good ad budget?","How much for Google Ads?","Minimum ad spend?"],
  shortA:"Depends on your trade and market — many trades start around $1,000–$3,000/mo in ad spend plus management.",
  fullA:"It depends on your trade, your area, and how many jobs you can handle. Many trades start somewhere around $1,000 to $3,000 a month in actual ad spend, plus our management fee. Higher-ticket trades like restoration or solar go higher because each job is worth more. We'll recommend a budget that fits your goals, not just max it out. How many extra jobs a month would make this worth it for you?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"How many more jobs a month could you handle?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["budget","ad spend","cost","how much"], notes:"Budget question. Capture capacity for scoring."
},
{
  id:"ADS-004", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"What are Local Services Ads and are they better?",
  alts:["LSA vs Google Ads?","Pay per call ads?","Google Guaranteed ads worth it?"],
  shortA:"LSAs are pay-per-lead ads at the top of search with the Google Guaranteed badge — great for service calls.",
  fullA:"Local Services Ads sit above regular ads with the green 'Google Guaranteed' badge, and you pay per lead instead of per click — so you're paying for real calls, not clicks that go nowhere. For a lot of trades they're the best value going, especially emergency work. Regular Google Ads still matter for broader reach and specific services. We often run both. What's your trade? Some are eligible for LSAs and some aren't.",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"What trade are you in?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["lsa","local services ads","pay per call","google guaranteed"], notes:"Confirm trade eligibility."
},
{
  id:"ADS-005", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"Can I turn ads on and off when I'm busy or slow?",
  alts:["Can I pause ads when busy?","Turn ads off in busy season?","Flexible ad spending?"],
  shortA:"Yes — that flexibility is a big perk of ads. We scale up when you're slow, dial back when you're slammed.",
  fullA:"That's one of the best things about ads — they're a faucet. When you're slow, we open it up to fill the schedule; when you're slammed, we dial it back so you're not paying for calls you can't take. We'll help you plan around your busy and slow seasons. When's your slow stretch, so we can plan for it?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"When's your slow season?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["flexibility","pause","seasonal","control"], notes:"Capture seasonality. Good qualifier."
},
{
  id:"ADS-006", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"How do I know I'm not wasting money on bad clicks?",
  alts:["Won't ads waste my money?","How do you stop junk clicks?","Are ads a money pit?"],
  shortA:"We geo-target your service area, add negative keywords, and track calls — so you pay for real prospects, not tire-kickers.",
  fullA:"Fair worry — badly run ads do burn money. We prevent that by tightly geo-targeting only your service area, adding negative keywords to block junk searches, running ads at the right times, and tracking which clicks actually become calls and jobs. You get reporting on real results, not vanity clicks. Bad agencies skip this; we live in it. Have you run ads before that felt like a money pit?",
  intent:"Vendor-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"Have you run ads before and been burned?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["wasted spend","junk clicks","roi","waste"], notes:"Objection handling. Reassure on targeting + tracking."
},
{
  id:"ADS-007", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"Do you run Facebook and Instagram ads too?",
  alts:["Social media ads?","Meta ads?","Facebook advertising?"],
  shortA:"Yes — for visual trades especially, Facebook, Instagram, and TikTok ads work great alongside Google.",
  fullA:"We do. For visual trades — decks, landscaping, pressure washing, remodels, detailing — social ads on Facebook, Instagram, and TikTok are powerful because your work sells itself in before-and-after photos and video. Google catches people actively searching; social catches people scrolling who didn't know they needed you yet. Is your work the kind that looks great in photos?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"Does your work photograph well?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["facebook","instagram","social ads","meta"], notes:"Cross-link Social Media. Good for visual trades."
},
{
  id:"ADS-008", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"Who writes the ads and makes the images?",
  alts:["Do you create the ad content?","Who designs the ads?","Do I have to make the ads?"],
  shortA:"We do — copy, images, and setup are all handled. You don't have to make anything.",
  fullA:"That's all on us. We write the ad copy, build the images and video, set up the targeting, and manage it all. You don't have to be a marketer or a designer. The one thing that helps is real photos and video from your jobs — those beat stock every time — but even that we can guide you on or arrange. Do you have job photos and video already?",
  intent:"Vendor-Aware", emotion:"Relieved", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"Do you have photos or video from your jobs?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["ad creative","copywriting","images","done for you"], notes:"Address effort concern."
},
{
  id:"ADS-009", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"Where does my ad money go — to you or to Google?",
  alts:["How does ad billing work?","Do you take a cut of ad spend?","Ad spend vs your fee?"],
  shortA:"Your ad spend goes to Google/Meta; we charge a separate management fee. We're clear about both up front.",
  fullA:"Good, honest question. Your ad budget goes directly to Google, Meta, or whatever platform runs the ads — that's what buys the clicks and calls. Our management fee is separate and covers building, running, and optimizing everything. We keep the two clearly separated so you always know where every dollar goes. No games. Want a quote that breaks both out?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"What monthly budget were you thinking?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["billing","transparency","management fee","ad spend"], notes:"Transparency question. Capture budget."
},
{
  id:"ADS-010", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"Can ads target only my service area?",
  alts:["Can you limit ads to my zip codes?","Geo-targeting ads?","Only show ads locally?"],
  shortA:"Yes — we tightly geo-target so you only pay for clicks inside the areas you actually serve.",
  fullA:"Absolutely, and we insist on it. There's no point paying for a click from three states away. We target the exact zip codes and radius you serve, so your budget only chases jobs you can actually do. For trades this is critical — it's the difference between a profitable campaign and a leaky bucket. What's your service radius?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"How far out do you travel for jobs?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["geo-targeting","service area","local","zip codes"], notes:"Capture service radius."
},
{
  id:"ADS-011", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"Do ads work for high-ticket jobs?",
  alts:["Ads for big jobs?","Can ads get me expensive jobs?","High-value leads from ads?"],
  shortA:"Yes — ads are great for high-ticket work like repipes, roof replacements, solar, and restoration.",
  fullA:"Definitely. Ads shine for high-ticket work because even a pricier lead pays off when the job is worth thousands — think roof replacements, repipes, solar installs, or restoration. We target the specific searches those buyers use and send them to a page built to convert. One good job can cover a month of ad spend. What's your most valuable type of job?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"What's your highest-value job worth?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["high-ticket","big jobs","roi","premium"], notes:"High-value intent. Capture job value."
},
{
  id:"ADS-012", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"What happens to my leads when I stop paying for ads?",
  alts:["Do leads stop when ads stop?","Are ads a treadmill?","What if I pause ads?"],
  shortA:"Ad leads stop when ads stop — that's why we pair ads with SEO, which keeps working after.",
  fullA:"Straight answer: ad leads stop when the ads stop — it's a faucet, not a well. That's exactly why we usually pair ads with SEO and Local SEO. Ads bring calls now while SEO builds a lasting stream that keeps producing without paying per click. That combo gives you fast results and a long-term foundation. Are you looking for a quick boost, something lasting, or both?",
  intent:"Solution-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"SEO",
  followUp:"Quick boost, long-term, or both?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["ongoing","stop ads","seo combo","strategy"], notes:"Honest. Cross-sell SEO bundle."
},
{
  id:"ADS-013", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"I ran ads myself and lost money. What would you do different?",
  alts:["My own ads failed","Why would your ads work?","DIY ads didn't work"],
  shortA:"Usually DIY ads leak on targeting, keywords, and landing pages. We fix all three and track real calls.",
  fullA:"Most DIY ad accounts leak money in the same spots: too-broad targeting, missing negative keywords, weak landing pages, and no call tracking — so you can't tell what's working. We tighten all of that and send clicks to a page built to convert, then track which turn into jobs. The platform makes it easy to spend and hard to profit; that gap is our job. What went wrong when you ran them?",
  intent:"Vendor-Aware", emotion:"Frustrated", cta:"Contact Us", relatedService:"Paid Ads",
  followUp:"What platform did you run them on?",
  leadValue:"High", escalate:true, escalateReason:"Frustrated prospect with a real past failure and clear intent — a human can diagnose their old account and win trust.",
  tags:["diy failed","objection","wasted money","past experience"], notes:"Deep objection. Escalate after acknowledging."
},
{
  id:"ADS-014", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"Will you track which ads actually bring calls?",
  alts:["Do you use call tracking?","How do you measure ad results?","Can you tell which ads work?"],
  shortA:"Yes — call tracking and conversion tracking show exactly which ads produce calls and jobs.",
  fullA:"Yes, and this is what separates real management from just spending your money. We set up call tracking and conversion tracking so we know exactly which keywords and ads produce calls, then shift budget toward what works and cut what doesn't. You get reports on real results, not just clicks. Would you want a simple monthly summary or a live dashboard?",
  intent:"Vendor-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"How closely do you want to watch the numbers?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["call tracking","conversion","reporting","measurement"], notes:"Reporting reassurance."
},
{
  id:"ADS-015", mainCat:"Services", serviceCat:"Paid Ads", tradeCat:"All Trades", trade:"All",
  q:"Do you require a contract for ads?",
  alts:["Am I locked into an ad contract?","Can I cancel ads anytime?","Ad management commitment?"],
  shortA:"No long lock-in. We ask for about 6 months so campaigns can be properly optimized and prove out.",
  fullA:"No long-term trap. We do ask for around 6 months, because ads need a few months of optimization to really hit their stride — pull the plug too early and you don't see the payoff. After that we keep earning it month to month. That fair to you?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"Does a 6-month runway work for you?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["contract","commitment","cancel","6 months"], notes:"Standard brand line on commitment."
},

/* ═══════════════ BRANDING ═══════════════ */
{
  id:"BRD-001", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"Do you do branding and logo design?",
  alts:["Can you design a logo?","Do you make brand identities?","I need a new logo"],
  shortA:"Yes — logo, colors, and a full brand identity that makes your trade business look established and trustworthy.",
  fullA:"Yep, branding is one of our four core services. We build logos, color schemes, and a full identity that makes your business look established and trustworthy — the kind of look that lets you charge what you're worth. For trades, looking legit matters; a sharp brand beats a homemade logo every time. Do you have a logo now, or starting fresh?",
  intent:"Problem-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Branding",
  followUp:"Do you have a logo already or starting from scratch?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["branding","logo","identity","design"], notes:"Core service intro. Confirm current brand status."
},
{
  id:"BRD-002", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"Do you do vehicle and fleet wraps?",
  alts:["Can you wrap my truck?","Fleet wrap design?","Truck wrap for my business?"],
  shortA:"Yes — we design vehicle and fleet wraps. Your truck is the biggest billboard you'll never pay rent on.",
  fullA:"Absolutely — vehicle wraps are one of our favorite things. Your truck or fleet is a rolling billboard seen thousands of times a day, and it's advertising you already own. We design wraps that match your brand and actually get people to remember your number. One well-wrapped truck can pay for itself in jobs. How many vehicles are we talking?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Branding",
  followUp:"How many vehicles do you have?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["wraps","vehicle wrap","fleet","truck"], notes:"Signature offering. Capture fleet size."
},
{
  id:"BRD-003", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"How much does branding cost?",
  alts:["Logo design price?","Branding cost?","How much for a brand package?"],
  shortA:"Depends on scope — a logo alone versus a full identity with wraps. We quote it fair and up front.",
  fullA:"It depends on what you need — just a logo is one thing, a full identity with brand guidelines, and vehicle wraps is another. We quote it straight up front with no hidden fees, and we can start with the essentials and build out. A lot of owners do branding alongside a new website so everything matches. What are you after — a logo, wraps, or the whole package?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Branding",
  followUp:"Logo, wraps, or the full brand package?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["pricing","cost","logo price","budget"], notes:"Capture scope."
},
{
  id:"BRD-004", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"Why does branding matter for a trade business?",
  alts:["Does branding even help trades?","Is a logo worth it?","Why bother with branding?"],
  shortA:"A strong brand makes you look established, builds trust fast, and lets you charge more than the cheap guys.",
  fullA:"Because looking legit wins jobs. When a homeowner sees a sharp truck, a clean logo, and a matching website, they trust you before you say a word — and they'll pay more than they would the guy with a magnet sign and a Gmail address. Branding isn't vanity; it's what lets you compete on quality instead of being the cheapest. Are you losing jobs to companies that just look bigger?",
  intent:"Unaware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"Branding",
  followUp:"Do competitors look more established than you?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["why branding","value","trust","perception"], notes:"Educational. Reframe branding as revenue, not vanity."
},
{
  id:"BRD-005", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"Can you refresh my existing brand instead of starting over?",
  alts:["Can you update my current logo?","Rebrand vs refresh?","Modernize my brand?"],
  shortA:"Yes — if your brand has equity, we can modernize it without throwing away what customers already recognize.",
  fullA:"Definitely. If people already know your look, we don't toss that recognition — we sharpen it: cleaner logo, better colors, consistent use across your site, wraps, and shirts. Sometimes a refresh is smarter than a full rebrand. We'll give you an honest take on which makes sense. What don't you like about your current brand?",
  intent:"Solution-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"Branding",
  followUp:"What bugs you most about your current look?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["refresh","rebrand","modernize","update"], notes:"Capture their pain point with current brand."
},
{
  id:"BRD-006", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"Will my branding match across my website, wraps, and shirts?",
  alts:["Consistent branding everywhere?","Same look on everything?","Brand consistency?"],
  shortA:"Yes — consistency is the whole point. One look across site, wraps, shirts, cards, and ads.",
  fullA:"That consistency is exactly the goal. We build your brand so the same look carries across your website, truck wraps, shirts, business cards, and ads. When everything matches, you look bigger and more professional, and people remember you. Mismatched branding quietly makes you look small. What items do you need branded right now?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Branding",
  followUp:"What all needs your branding on it?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["consistency","brand guidelines","matching","cohesive"], notes:"Capture scope of branded items."
},
{
  id:"BRD-007", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"How long does a wrap design take?",
  alts:["Wrap design timeline?","How fast can you design my wrap?","When will my wrap be ready?"],
  shortA:"Design usually takes a couple weeks; then it goes to a wrap installer to print and apply.",
  fullA:"The design side usually takes a couple of weeks to get right — mockups, revisions, and final files ready for print. From there it goes to a wrap installer to print and apply, which is a separate step and timeline. We can coordinate or hand off clean files, whatever's easiest. Do you already have a wrap shop, or need a recommendation?",
  intent:"Vendor-Aware", emotion:"Impatient", cta:"Request a Quote", relatedService:"Branding",
  followUp:"Do you have a wrap installer lined up?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["wrap timeline","how long","design time","turnaround"], notes:"Clarify design vs install are separate steps."
},
{
  id:"BRD-008", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"Do you actually install the wraps too?",
  alts:["Do you print and apply wraps?","Is install included?","Who puts the wrap on?"],
  shortA:"We design the wrap and provide print-ready files; a wrap installer handles printing and applying it.",
  fullA:"We're the design side — we create the wrap and hand off print-ready files. The actual printing and installation is done by a wrap/vinyl shop, which is a specialty job. We can point you to good installers or coordinate with yours so the design comes out exactly right on the vehicle. Want us to handle the design and connect you with an installer?",
  intent:"Vendor-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"Branding",
  followUp:"Do you have a wrap shop you already use?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["wrap install","printing","design only","installer"], notes:"Set clear expectation: design not install."
},
{
  id:"BRD-009", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"Can I see examples of wraps or logos you've designed?",
  alts:["Branding portfolio?","Show me your wrap designs","Any logo examples?"],
  shortA:"Yes — I can have our team share wrap and logo examples relevant to your trade.",
  fullA:"For sure. The best way is to have our team send you real examples — like the wraps we've done for trades similar to yours — so you can picture your own. I can set that up quick. What trade are you in, and are you more interested in wraps, a logo, or both?",
  intent:"Vendor-Aware", emotion:"Evaluating", cta:"Contact Us", relatedService:"Branding",
  followUp:"Wraps, logo, or both — and what trade?",
  leadValue:"High", escalate:true, escalateReason:"Portfolio request at evaluating stage — route to a rep who can share real examples and move toward a quote.",
  tags:["portfolio","examples","proof","wrap gallery"], notes:"Evaluating. Escalate with relevant examples."
},
{
  id:"BRD-010", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"Do I own the logo and files when it's done?",
  alts:["Do I get the logo files?","Who owns my logo?","Will I get source files?"],
  shortA:"Yes — you own your logo and get the final files to use however you want.",
  fullA:"Yes, it's yours. When we finish, you own your logo and get the final files in the formats you need — for print, web, wraps, shirts, whatever. No holding your own brand hostage. You should be able to use it anywhere without asking permission. Anything specific you need the files for?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Branding",
  followUp:"Where do you plan to use the logo first?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["ownership","files","logo files","source files"], notes:"Trust/ownership reassurance."
},
{
  id:"BRD-011", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"Should I do branding before or after my website?",
  alts:["Branding or website first?","What comes first, brand or site?","Order of branding and web?"],
  shortA:"Branding usually comes first so your website is built around a consistent look — but we can do both together.",
  fullA:"Usually branding comes first so your website, wraps, and everything else are built around one consistent look. That said, plenty of owners do both together in one package so it all launches matching and it's more efficient. If your brand is fine as-is, we can jump straight to the website. Where's your brand at right now — solid, or needs work?",
  intent:"Solution-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"Websites",
  followUp:"Is your current brand solid or does it need work?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["sequence","branding first","website","bundle"], notes:"Cross-sell bundle (Branding + Websites)."
},
{
  id:"BRD-012", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"My branding looks unprofessional. Can you help me look bigger?",
  alts:["I look small and homemade","Make my business look established","My brand looks cheap"],
  shortA:"Absolutely — that's exactly what branding does: make a small crew look like an established, trustworthy company.",
  fullA:"That's one of the best reasons to invest in branding. A sharp logo, consistent colors, a clean website, and a wrapped truck can make a two-person crew look like an established company — and customers pay more for that confidence. You do great work; your look should say so before you even show up. Want to talk through what a professional brand would cost for you?",
  intent:"Problem-Aware", emotion:"Frustrated", cta:"Request a Quote", relatedService:"Branding",
  followUp:"What parts of your brand feel the weakest?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["look bigger","professional","unprofessional","trust"], notes:"Clear pain + emotion. Strong lead."
},
{
  id:"BRD-013", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"Can you help me pick a business name or tagline?",
  alts:["Do you do naming?","Help with a business name?","Can you write a slogan?"],
  shortA:"Yes — we can help with naming and a tagline that's memorable and fits your trade.",
  fullA:"We can help with that. A good name and tagline are memorable, easy to say, and tell people what you do — and they matter for word of mouth and search. Whether you're starting fresh or your current name isn't landing, we'll work it through with you. Are you naming a new business or rethinking an existing one?",
  intent:"Solution-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"Branding",
  followUp:"New business or renaming an existing one?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["naming","tagline","slogan","business name"], notes:"New-business signal often = full package opportunity."
},
{
  id:"BRD-014", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"I'm just starting out. Do I need full branding yet?",
  alts:["New business, is branding worth it?","Startup branding?","Too early for branding?"],
  shortA:"Starting with a solid logo and consistent look pays off — it's cheaper than rebranding later.",
  fullA:"When you're starting out, you don't need everything at once, but getting a solid logo and a consistent look early is smart — it's cheaper than rebranding after you've printed shirts, wrapped a truck, and built a following on a weak brand. We can start lean with the essentials and grow it as you do. What's the first thing you need branded — truck, site, or shirts?",
  intent:"Problem-Aware", emotion:"Uncertain", cta:"Request a Quote", relatedService:"Branding",
  followUp:"What do you need branded first?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["startup","new business","essentials","early"], notes:"New business. Offer lean start."
},
{
  id:"BRD-015", mainCat:"Services", serviceCat:"Branding", tradeCat:"All Trades", trade:"All",
  q:"Can't I just get a cheap logo online for $50?",
  alts:["Why not use Fiverr for a logo?","Cheap logo vs you?","$5 logo objection"],
  shortA:"You can — but cheap logos are often generic or stolen. We build a real brand that's yours and works everywhere.",
  fullA:"You can, and for a hobby maybe that's fine. The catch with $50 logos is they're often generic templates sold to a hundred other businesses, don't come with proper files, and fall apart when you try to put them on a wrap or sign. We build something that's actually yours, works at every size, and ties into your whole look. If budget's tight, we can start small and do it right. What's your budget range?",
  intent:"Solution-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"Branding",
  followUp:"What budget were you hoping to stay within?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["cheap logo","objection","fiverr","diy"], notes:"Objection. Don't shame; offer a right-sized start."
}

];
