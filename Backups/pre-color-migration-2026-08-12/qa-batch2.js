// Toughjobs Chatbot Knowledge Base — Batch 2
// Themes: Pricing, Trust & Guarantees, Objections & Comparisons, Getting Started,
//         Small Budgets, Sunday Startup (community program)
// Field keys: id, mainCat, serviceCat, tradeCat, trade, q, alts[], shortA, fullA,
//   intent, emotion, cta, relatedService, followUp, leadValue, escalate, escalateReason, tags[], notes

window.QA_BATCH2 = [

/* ═══════════════ PRICING ═══════════════ */
{
  id:"PRC-001", mainCat:"Pricing", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"How much does a website cost?",
  alts:["What's the price for a website?","Website pricing?","How much to build my site?"],
  shortA:"Depends on scope, but we always quote fair and up front — no hidden fees, ever.",
  fullA:"It really depends on how many pages, features, and how much content you need — a simple site and a full booking-and-portfolio site aren't the same price. What we promise is that we quote it straight, up front, before you commit to anything. Most owners bundle it into a monthly plan with SEO or ads rather than paying a big number all at once. What trade are you in and do you have a site now?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Websites",
  followUp:"What trade are you in, and do you have a website now?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["website cost","pricing","how much","quote"], notes:"Foundational pricing question. Capture trade + status to quote."
},
{
  id:"PRC-002", mainCat:"Pricing", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"What's your average monthly price for marketing?",
  alts:["How much do most clients pay?","What's a typical package cost?","Average marketing budget?"],
  shortA:"Most trades run $800–$5,500/mo depending on trade, market, and services bundled.",
  fullA:"Across the trades we serve, most owners land somewhere between $800 and $5,500 a month, depending on your trade, how competitive your market is, and which services you bundle — website, SEO, ads, branding. Emergency and high-ticket trades like restoration or solar sit toward the top; smaller local services often start lower. We'll give you a real number once we know your trade and goals. What are you hoping marketing does for you first?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"General",
  followUp:"What trade are you in and what's your top marketing goal?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["average price","monthly cost","budget range","typical"], notes:"Range-setting. Capture trade + goal."
},
{
  id:"PRC-003", mainCat:"Pricing", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Are there any hidden fees I should know about?",
  alts:["Any surprise costs?","Is the quote the final price?","Extra charges later?"],
  shortA:"No hidden fees. What we quote is what you pay — if scope changes, we tell you before, not after.",
  fullA:"No hidden fees, period. What we quote you up front is what you pay. If your needs grow — say you want more ad spend or extra pages — we'll always talk it through with you before charging anything, never surprise you on an invoice. That kind of trust is worth more to us than squeezing an extra fee out of you. Has a past vendor surprised you with fees before?",
  intent:"Vendor-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"General",
  followUp:"Have you been surprised by hidden fees before?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["hidden fees","transparency","surprise costs","honesty"], notes:"Trust-building. Often from a burned prospect."
},
{
  id:"PRC-004", mainCat:"Pricing", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Do you charge setup fees?",
  alts:["Is there an onboarding fee?","Setup cost?","One-time fee to start?"],
  shortA:"Sometimes, for heavier builds like a full website or software setup — always disclosed up front in your quote.",
  fullA:"Some services carry a one-time setup cost — building a full website or configuring the software, for example — because there's real work up front before the monthly plan kicks in. Whatever applies to you, it's spelled out clearly in your quote before you sign anything. Nothing sneaks in later. Want a quote that breaks down one-time versus monthly costs?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"General",
  followUp:"Want a quote broken into one-time vs. monthly costs?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["setup fee","onboarding cost","one-time","upfront"], notes:"Clarify one-time vs recurring."
},
{
  id:"PRC-005", mainCat:"Pricing", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Can I get a custom package instead of a set plan?",
  alts:["Can you mix and match services?","Build me a custom plan?","À la carte pricing?"],
  shortA:"Yes — we build packages around your goals and budget, not a rigid one-size-fits-all menu.",
  fullA:"Yes, that's actually how we prefer to work. Every trade and every owner's situation is different, so we build your package around what you actually need — maybe just a website and Local SEO to start, maybe the full stack. You're not forced into a rigid bundle you don't need. What services feel most important to you right now?",
  intent:"Vendor-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"General",
  followUp:"Which services matter most to you right now?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["custom package","a la carte","flexible","mix and match"], notes:"Capture priority services for quote."
},
{
  id:"PRC-006", mainCat:"Pricing", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Do prices go up over time?",
  alts:["Will my monthly cost increase?","Are prices locked in?","Rate increases later?"],
  shortA:"We lock in your rate for the term we quote; changes only happen if you add services, and we'll always tell you first.",
  fullA:"We lock in the rate we quote you for the plan you're on. If your business grows and you want to add services — more ad spend, another platform, extra pages — we'll talk through any change with you first, never just raise your bill quietly. Straightforward pricing is part of how we earn trust long-term. Anything about pricing stability you're specifically worried about?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"General",
  followUp:"Anything specific about pricing stability worrying you?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["price increase","locked rate","stability","long-term"], notes:"Reassurance on rate stability."
},
{
  id:"PRC-007", mainCat:"Pricing", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"What's included in the base marketing package?",
  alts:["What comes with the starter plan?","Base package details?","What do I get for the price?"],
  shortA:"Depends on the plan, but most starter packages include a website foundation plus Local SEO — the two biggest wins first.",
  fullA:"It depends on which plan fits you, but most owners starting out get a solid website foundation and Local SEO — those two together usually deliver the biggest, fastest impact for the money. From there we add SEO, paid ads, branding, or software as it makes sense for your goals and budget. Want a specific breakdown for your trade?",
  intent:"Vendor-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"General",
  followUp:"What trade are you in so I can outline a starting package?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["package details","starter plan","included","basics"], notes:"Capture trade for tailored breakdown."
},
{
  id:"PRC-008", mainCat:"Pricing", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Do you offer discounts for paying annually?",
  alts:["Annual discount?","Save money paying upfront?","Yearly plan pricing?"],
  shortA:"Sometimes, depending on the service — ask your rep for the specifics when you get your quote.",
  fullA:"In some cases, yes — paying annually instead of monthly can come with a discount depending on the service and plan. It's best to ask directly when you get your quote so we can lay out the exact numbers both ways and you can pick what works for your cash flow. Would you rather pay monthly for flexibility or save by committing longer?",
  intent:"Vendor-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"General",
  followUp:"Monthly flexibility or annual savings — which matters more?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["annual discount","prepay","savings","billing"], notes:"Route detailed discount specifics to human/quote."
},

/* ═══════════════ TRUST & GUARANTEES ═══════════════ */
{
  id:"TRU-001", mainCat:"Trust", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Can you guarantee Google rankings?",
  alts:["Will you guarantee I rank #1?","Do you promise results?","Guaranteed SEO?"],
  shortA:"No one honest can guarantee a Google ranking — Google controls that, not any agency. We guarantee real work and steady progress.",
  fullA:"I'll be straight with you — nobody can honestly guarantee a specific Google ranking. Google's algorithm isn't for sale, and any company promising #1 is either lying or about to do something that gets you penalized. What we do guarantee: real, consistent work aimed at the searches that book jobs, and we track your progress so you see it move. We ask for about 6 months, because that's genuinely how long it takes to see it through. Does that honesty work for you?",
  intent:"Vendor-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"SEO",
  followUp:"Does an honest, no-guarantees approach work better for you than a big promise?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["guarantee","ranking","promise","honesty"], notes:"Never promise #1. This is a trust-defining answer."
},
{
  id:"TRU-002", mainCat:"Trust", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"How do I know this will actually work for my business?",
  alts:["What if it doesn't work?","How can you be sure?","What's my guarantee of success?"],
  shortA:"No agency can promise outcomes with 100% certainty, but we track everything and adjust — you're never in the dark.",
  fullA:"Honest answer: no agency can promise 100% certain results — anyone who does is selling you a story. What we can promise is that we do real work built for your trade, we track it closely, and if something isn't performing we adjust it instead of just collecting a check. You'll see reports on what's actually happening, not vague reassurances. We ask for about 6 months because that's genuinely what marketing needs to prove out. What's made you hesitant to trust marketing before?",
  intent:"Vendor-Aware", emotion:"Anxious", cta:"Start Assessment", relatedService:"General",
  followUp:"What's made you hesitant about marketing before?",
  leadValue:"High", escalate:true, escalateReason:"Deep trust concern from an anxious prospect — a human conversation builds confidence better than a bot answer alone.",
  tags:["will it work","risk","confidence","proof"], notes:"Anxious tone. Escalate to reassure personally."
},
{
  id:"TRU-003", mainCat:"Trust", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"What happens if I'm not happy with the results?",
  alts:["What if I want to quit?","Can I leave if it's not working?","Refund policy?"],
  shortA:"We talk it through and adjust the plan first. If it's still not right, you're not locked into forever — we earn your business monthly.",
  fullA:"First, we'd sit down and figure out what's not working and adjust — sometimes it's a targeting fix, sometimes a strategy shift. We want to earn the result, not just collect a fee. Beyond the initial 6-month period we ask for to let the work prove out, you're not locked into a long contract — we keep your business by continuing to deliver, month to month. What outcome would tell you this was working?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Contact Us", relatedService:"General",
  followUp:"What result would tell you this is working?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["not happy","dissatisfied","cancel","refund"], notes:"Reassure without over-promising refunds."
},
{
  id:"TRU-004", mainCat:"Trust", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Why should I choose Toughjobs over another agency?",
  alts:["What makes you different?","Why you and not someone else?","What sets you apart?"],
  shortA:"We only work with trades — we know what actually books jobs in your industry, and we talk straight, no jargon.",
  fullA:"Because we only work with trade and home-service businesses — roofers, plumbers, electricians, landscapers, and 20-plus others — so we're not guessing what works, we already know which searches and ads book real jobs in your line of work. We talk plain, no confusing tech jargon or empty promises, and we back it with real reporting. A lot of agencies serve everybody; we serve you. What's the biggest thing you're looking for in a marketing partner?",
  intent:"Vendor-Aware", emotion:"Evaluating", cta:"Contact Us", relatedService:"General",
  followUp:"What matters most to you in choosing a marketing partner?",
  leadValue:"High", escalate:true, escalateReason:"Direct comparison/decision question at evaluating stage — route to a rep to close the sale.",
  tags:["why us","differentiator","choose us","competitive"], notes:"Core pitch. Escalate — this is a closing moment."
},
{
  id:"TRU-005", mainCat:"Trust", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Are you a real local company or some overseas call center?",
  alts:["Are you actually local?","Is this a legit company?","Who am I really talking to?"],
  shortA:"We're a real company based in the Quad Cities, serving trades across IL, IA, MO, WI, and IN.",
  fullA:"We're real, and we're local — headquartered in the Quad Cities, serving trade businesses across Illinois, Iowa, Missouri, Wisconsin, and Indiana. You'll talk to actual people who understand these markets, not an anonymous call center reading a script. If it'd help, I can connect you directly with a real person on our team right now. Want me to set that up?",
  intent:"Vendor-Aware", emotion:"Skeptical", cta:"Contact Us", relatedService:"General",
  followUp:"Want me to connect you with a real person on the team?",
  leadValue:"Medium", escalate:true, escalateReason:"Visitor is questioning legitimacy — a live human connection resolves this trust concern directly.",
  tags:["legitimacy","local","real company","trust"], notes:"Trust concern. Offer direct human connection."
},
{
  id:"TRU-006", mainCat:"Trust", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Can you show me proof this has worked for other trades like mine?",
  alts:["Do you have case studies?","Proof of results?","Show me results for my trade"],
  shortA:"Yes — I can connect you with our team to walk through real results for businesses like yours.",
  fullA:"Absolutely, and that's the best way to build confidence — seeing real numbers and examples from a business like yours beats anything I can say here. I can set up a quick call where our team walks you through relevant results and examples. What's your trade, so we pull the right proof?",
  intent:"Vendor-Aware", emotion:"Evaluating", cta:"Contact Us", relatedService:"General",
  followUp:"What trade should we pull proof from?",
  leadValue:"High", escalate:true, escalateReason:"Proof/case-study request at evaluating stage — strong buying signal, route to a rep with real examples.",
  tags:["proof","case study","results","evidence"], notes:"Escalate — strong buying signal."
},
{
  id:"TRU-007", mainCat:"Trust", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"I've been burned by a marketing company before. How is this different?",
  alts:["A past agency scammed me","I don't trust marketing companies anymore","Last agency wasted my money"],
  shortA:"That happens a lot, sadly. We're upfront, we report honestly, and we don't lock you into anything shady. Tell us what happened.",
  fullA:"I'm sorry that happened — it's way too common in this industry, and it's exactly why we built our reputation on being straight with people. We quote honestly, report on real results (not vanity numbers), and don't trap you in a contract you can't get out of. Understanding what went wrong before helps us be honest about whether we're the right fit for you. What happened with the last one?",
  intent:"Vendor-Aware", emotion:"Frustrated", cta:"Contact Us", relatedService:"General",
  followUp:"What happened with the last company?",
  leadValue:"High", escalate:true, escalateReason:"Prospect has real trauma from a past bad experience — needs a human to hear the story and rebuild trust personally.",
  tags:["burned before","bad experience","scam","trust rebuild"], notes:"Empathy first. Escalate to human."
},
{
  id:"TRU-008", mainCat:"Trust", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Who will I actually be working with day to day?",
  alts:["Do I get a dedicated contact?","Will I have one point of contact?","Who manages my account?"],
  shortA:"You'll have a real point of contact on our team who knows your account, not a rotating cast of strangers.",
  fullA:"You'll have a dedicated point of contact who knows your business, your trade, and what we're working on — not a different stranger every time you call. That relationship matters, especially when you're trusting someone with your marketing budget. Want me to get you connected with your future contact to start things off?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Contact Us", relatedService:"General",
  followUp:"Want to get connected with your point of contact?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["dedicated contact","account manager","relationship","point of contact"], notes:"Reassurance on continuity."
},

/* ═══════════════ OBJECTIONS & COMPARISONS ═══════════════ */
{
  id:"OBJ-001", mainCat:"Objections", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Why not just use Wix, GoDaddy, or Squarespace myself?",
  alts:["Why pay you instead of Wix?","DIY website builder vs you?","Can't I just use Squarespace?"],
  shortA:"You can, and it's fine for a hobby site — but those builders rarely rank on Google or convert visitors into calls.",
  fullA:"You absolutely can, and for some businesses a DIY builder is a fine starting point. The catch: those platforms are built for ease, not for ranking on Google or converting visitors into calls — most DIY trade sites just sit there quietly not doing much. We build specifically to win local search and turn traffic into booked jobs, with the trade-specific know-how baked in. If your goal is 'have a site,' DIY works. If your goal is 'get more jobs,' that's where we come in. What's your website's job supposed to be?",
  intent:"Solution-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"Websites",
  followUp:"Is the goal just to have a site, or to get more jobs from it?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["wix","godaddy","squarespace","diy builder"], notes:"Don't disparage DIY; reframe around results, not tools."
},
{
  id:"OBJ-002", mainCat:"Objections", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Why not just hire a cheap freelancer instead of an agency?",
  alts:["Freelancer vs agency?","Why not Fiverr or Upwork?","A guy on Craigslist is cheaper"],
  shortA:"A freelancer can be great for a one-off, but you lose the ongoing strategy, accountability, and team behind it.",
  fullA:"A freelancer can do solid work for a one-time project, and if that's all you need, go for it. The tradeoff is you usually don't get an ongoing strategy, someone watching performance week to week, or a team to lean on if they go quiet or move on — and that happens more than people expect. We're a team that stays accountable to your results over time, with people covering website, SEO, ads, and branding together. Are you after a one-time project or ongoing growth?",
  intent:"Solution-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"General",
  followUp:"One-time project or ongoing growth?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["freelancer","fiverr","upwork","cheap alternative"], notes:"Don't bash freelancers; highlight continuity/accountability."
},
{
  id:"OBJ-003", mainCat:"Objections", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"What if I already have a website?",
  alts:["I have a site already, do I need you?","Can you work with my existing site?","I don't need a new website"],
  shortA:"That's fine — we can audit it, improve it, or run SEO and ads on top of what you have.",
  fullA:"That's totally fine — you don't have to start over. We can take a look at your current site and tell you honestly whether it's a strong foundation to build on with SEO and ads, or whether a rebuild would actually save you money long-term. A lot of owners keep their site and just add the marketing that gets it found. What's your website address? I can point you toward what to check first.",
  intent:"Vendor-Aware", emotion:"Practical", cta:"Start Assessment", relatedService:"SEO",
  followUp:"What's your website address?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["existing website","already have a site","audit","keep current site"], notes:"Capture URL for assessment."
},
{
  id:"OBJ-004", mainCat:"Objections", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Why not just do my own marketing to save money?",
  alts:["Can't I market myself?","Why hire you instead of DIY?","I'll just do it myself"],
  shortA:"You can, if you have the time — but most owners find every hour on marketing is an hour off the tools making money.",
  fullA:"You can, and plenty of owners start that way. The real cost isn't the marketing itself — it's the hours you spend learning it, second-guessing it, and not swinging a hammer or running a truck. Most owners find their time is worth more on the job than fumbling through ad platforms at night. If you'd rather learn it yourself and just want guidance, that's actually what our coaching is for. Do you have the time to learn this properly, or would you rather it be handled?",
  intent:"Solution-Aware", emotion:"Uncertain", cta:"Request a Quote", relatedService:"Coaching",
  followUp:"Do you have time to learn it, or want it handled?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["diy marketing","save money","time cost","self-service"], notes:"Cross-sell Coaching if they want to learn."
},
{
  id:"OBJ-005", mainCat:"Objections", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"How are you different from other marketing agencies that work with any business?",
  alts:["What makes a trade-specific agency better?","Generalist vs specialist agency?","Do you only do trades?"],
  shortA:"We only work with trades — we're not learning your industry on your dime like a generalist agency would.",
  fullA:"A generalist agency that markets restaurants, lawyers, and trades all at once has to relearn your world every time — which searches book jobs, how customers decide, what builds trust in your trade. We only do trades, so we already know that. It means faster results and fewer expensive mistakes made at your expense. What trade are you in?",
  intent:"Solution-Aware", emotion:"Evaluating", cta:"Request a Quote", relatedService:"General",
  followUp:"What trade are you in?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["specialist","generalist","niche agency","trade focus"], notes:"Core positioning. Capture trade."
},
{
  id:"OBJ-006", mainCat:"Objections", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"This all sounds expensive. Is it really worth it?",
  alts:["Is marketing worth the cost?","Seems pricey, is it worth it?","ROI on marketing spend?"],
  shortA:"One extra job a month often covers the cost — most trades charge more per job than a month of marketing costs.",
  fullA:"Think of it against what one job is worth to you. Most trades charge more for a single decent job than a month of marketing costs, so if it brings you even one or two extra jobs, it's already paid for itself — and then everything after that is profit. The real question isn't the cost, it's whether you're currently missing jobs you could be winning. What's an average job worth to you?",
  intent:"Vendor-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"General",
  followUp:"What's an average job worth to you?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["worth it","expensive","roi","value"], notes:"Reframe cost as investment vs job value."
},
{
  id:"OBJ-007", mainCat:"Objections", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"I've heard SEO is a scam. Is that true?",
  alts:["Is SEO a scam?","SEO doesn't work, right?","People say SEO is fake"],
  shortA:"Bad SEO companies exist and give it a bad name — but real SEO, done honestly, absolutely works.",
  fullA:"There are definitely shady SEO companies out there — overseas link farms, fake reports, empty promises — and that's given the whole industry a bad name. Real SEO, done honestly with actual strategy and tracked against real leads, absolutely works; it's just slower than people want and takes real effort. We won't pretend it's magic, and we'll show you exactly what we're doing and why. Did a bad experience make you skeptical?",
  intent:"Vendor-Aware", emotion:"Skeptical", cta:"Contact Us", relatedService:"SEO",
  followUp:"Did a past experience make you skeptical of SEO?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["seo scam","skeptical","industry reputation","doubt"], notes:"Validate skepticism, then differentiate."
},
{
  id:"OBJ-008", mainCat:"Objections", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Can't my nephew or a friend just build me a website for free?",
  alts:["My cousin knows web design","A friend offered to build my site","Free website from someone I know"],
  shortA:"They might build something, but 'free' rarely comes with ongoing support, SEO, or real marketing know-how behind it.",
  fullA:"They might! And if it's genuinely free and you're happy with it, great. What usually happens is that free site is a favor with no ongoing support — if it breaks, needs updates, or just doesn't bring in jobs, there's no one accountable to fix it or improve it. We build with your trade and search rankings in mind and stick around to keep it working. If you've already got a site from someone you know, we're happy to look it over and tell you honestly if it's solid or needs help.",
  intent:"Vendor-Aware", emotion:"Practical", cta:"Start Assessment", relatedService:"Websites",
  followUp:"Do you already have a site from a friend or family member?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["free website","friend build","favor","accountability"], notes:"Non-judgmental. Offer to assess existing DIY/favor site."
},
{
  id:"OBJ-009", mainCat:"Objections", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"How do I know you won't just disappear after I pay?",
  alts:["Will you ghost me?","What if you stop responding?","Are you reliable long-term?"],
  shortA:"We're an established local company with a track record — you'll have a real point of contact, not a vanishing act.",
  fullA:"That's a totally fair worry given how the industry can be. We're an established company based in the Quad Cities with a real track record and a real office, not a fly-by-night operation. You'll have a dedicated contact and regular reporting, so you always know what's happening and can reach a real person. If it'd help ease your mind, I can connect you with our team directly right now.",
  intent:"Vendor-Aware", emotion:"Skeptical", cta:"Contact Us", relatedService:"General",
  followUp:"Want me to connect you with a real person right now?",
  leadValue:"Medium", escalate:true, escalateReason:"Deep trust concern about reliability — a live human connection is the strongest reassurance.",
  tags:["disappear","ghosting","reliability","accountability"], notes:"Escalate to human to prove reliability."
},

/* ═══════════════ GETTING STARTED ═══════════════ */
{
  id:"GET-001", mainCat:"Getting Started", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Do you work with brand-new businesses?",
  alts:["I just started my business","Can you help someone new?","Do you take on startups?"],
  shortA:"Yes — brand-new trade businesses are exactly who we love working with. We help you build the right foundation from day one.",
  fullA:"Yes, and honestly, brand-new businesses are some of our favorite clients — there's no old mess to untangle, just a clean slate to build right the first time. We'll help you figure out what you actually need now versus what can wait, so you're not overspending before you've got your footing. What trade are you in and how long have you been in business?",
  intent:"Unaware", emotion:"Hopeful", cta:"Start Assessment", relatedService:"General",
  followUp:"What trade are you in and how new is the business?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["new business","startup","brand new","just started"], notes:"Warm welcome. Capture trade + age of business."
},
{
  id:"GET-002", mainCat:"Getting Started", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"I just started my business and have no online presence. Where do I even begin?",
  alts:["No website, no socials, help","Starting completely from zero","I have nothing online yet"],
  shortA:"Start with the essentials: a simple website and your Google Business Profile. Everything else builds from there.",
  fullA:"Start simple. The two most important things for a brand-new trade business are a clean, fast website and a fully set-up Google Business Profile — those two alone let people find you and trust you enough to call. Once that's live, we layer in SEO, reviews, and ads as you're ready. No need to do everything week one. What's your trade, and do you have a logo or business name locked in yet?",
  intent:"Problem-Aware", emotion:"Overwhelmed", cta:"Start Assessment", relatedService:"Websites",
  followUp:"Do you have a business name and logo locked in yet?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["no presence","where to start","zero online","beginner"], notes:"Reassure with a simple 2-step starting plan."
},
{
  id:"GET-003", mainCat:"Getting Started", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"What should I set up first when starting a trade business?",
  alts:["What's the first marketing step?","Priority order for a new business?","Where to start first?"],
  shortA:"Google Business Profile first (it's free and fast), then a simple website, then reviews and SEO.",
  fullA:"If we had to rank it: first, claim and fill out your Google Business Profile — it's free and can start bringing calls within days. Second, get a simple, fast website up so people trust you when they check you out. Third, start collecting reviews from your very first jobs. Everything else — paid ads, branding, full SEO — builds on that foundation as you grow. Want help getting the first two done?",
  intent:"Unaware", emotion:"Curious", cta:"Start Assessment", relatedService:"Local SEO",
  followUp:"Want help getting your Google profile and site set up?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["first steps","priority","new business checklist","order of operations"], notes:"Clear actionable priority list — very shareable answer."
},
{
  id:"GET-004", mainCat:"Getting Started", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"How soon after starting my business should I invest in marketing?",
  alts:["When should I start marketing?","Too early to market a new business?","When to invest in ads?"],
  shortA:"As soon as you're ready to take on customers — waiting just means fewer jobs while you wait.",
  fullA:"As soon as you're ready to actually take on work. A lot of new owners wait until they 'feel ready,' but every month without marketing is a month of jobs you're not getting that a competitor is. You don't need to start big — even a basic website and Google Business Profile from day one puts you ahead of trades who wait years to get online. Are you actively taking jobs now, or still setting up?",
  intent:"Unaware", emotion:"Curious", cta:"Start Assessment", relatedService:"General",
  followUp:"Are you taking jobs now or still getting set up?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["timing","when to start","new business timing","early"], notes:"Encourage early action without being pushy."
},
{
  id:"GET-005", mainCat:"Getting Started", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Do I need an LLC or business license before I talk to you?",
  alts:["Do I need to be official first?","Should I incorporate before marketing?","Legal setup first?"],
  shortA:"Not to talk to us, but you'll want your business properly set up (LLC, license, insurance) before marketing hard.",
  fullA:"You don't need anything official just to talk and ask questions — that's what we're here for. That said, before you start marketing seriously, it's smart to have your business properly set up: LLC or the right entity, any required licenses, and insurance. It protects you and builds trust with customers who ask. We're not lawyers or accountants, so for the legal side we'd point you to a professional, but happy to talk through the marketing side whenever you're ready.",
  intent:"Unaware", emotion:"Uncertain", cta:"Contact Us", relatedService:"General",
  followUp:"Is your business officially set up yet, or still in progress?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["llc","business license","legal","setup"], notes:"Be clear we're not legal/accounting advisors."
},
{
  id:"GET-006", mainCat:"Getting Started", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"I don't have any customers yet. Can marketing still help me?",
  alts:["No customers yet, can you help?","Zero clients so far","Just starting, no reviews or jobs"],
  shortA:"Yes — that's exactly the gap marketing fills. It's how you go from zero customers to your first ones.",
  fullA:"Yes, that's literally the point — marketing is how you go from zero customers to your first ones. No reviews yet is normal at the start; we help you get set up so your first few jobs turn into your first reviews, which then help you land the next round. Everyone starts at zero. What's your trade and what area do you serve?",
  intent:"Problem-Aware", emotion:"Anxious", cta:"Start Assessment", relatedService:"General",
  followUp:"What's your trade and service area?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["no customers","zero clients","first customers","new"], notes:"Reassuring — normalize starting from zero."
},
{
  id:"GET-007", mainCat:"Getting Started", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"What's realistic to expect in my first 90 days of marketing?",
  alts:["What happens in the first 3 months?","First 90 days expectations?","Early timeline for a new business?"],
  shortA:"Website and profile live, early reviews rolling in, and if you run ads, your first calls — SEO momentum builds after that.",
  fullA:"In the first 90 days for a new business, you'd typically have your website and Google Business Profile fully live, your first reviews starting to come in, and if you're running ads or Local Services Ads, your first calls should already be happening. SEO is the slower piece — it's just getting its legs under it around day 90, with real momentum building after. We'll walk you through what's realistic for your specific trade and budget. What are you hoping to see by month three?",
  intent:"Solution-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"General",
  followUp:"What would you want to see by month three?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["90 days","early timeline","expectations","new business"], notes:"Sets realistic early-stage expectations."
},
{
  id:"GET-008", mainCat:"Getting Started", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Can you help me get my first 5-star reviews as a new business?",
  alts:["How do I get my first reviews?","First reviews for a new company?","No reviews yet, help?"],
  shortA:"Yes — we set up simple systems to ask every early customer, since those first reviews matter most.",
  fullA:"Yes, and your first handful of reviews matter a ton — they're what convince the next stranger to trust a business with no track record yet. We set up simple, automatic ways to ask every early customer right after the job, when they're happiest. A few genuine 5-star reviews early on can be the difference between getting picked and getting scrolled past. How many jobs have you completed so far?",
  intent:"Problem-Aware", emotion:"Hopeful", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"How many jobs have you done so far?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["first reviews","new business reviews","reputation","early trust"], notes:"Ties to Local SEO reputation service."
},

/* ═══════════════ SMALL BUDGETS ═══════════════ */
{
  id:"BUD-001", mainCat:"Small Budget", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"What if my budget is small?",
  alts:["I don't have much money for marketing","Small budget, can you still help?","Not much to spend right now"],
  shortA:"We work with what you've got — start with the highest-impact basics and grow as the business grows.",
  fullA:"That's more common than you'd think, and it's fine — we'd rather start you with the one or two things that give you the most bang for your buck than sell you everything at once. For most tight budgets, that means a simple website and your Google Business Profile first, since those bring the fastest return. We grow the plan with you as jobs come in. What's your budget range right now?",
  intent:"Problem-Aware", emotion:"Anxious", cta:"Start Assessment", relatedService:"General",
  followUp:"What budget range are you working with right now?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["small budget","tight money","limited funds","affordable"], notes:"No judgment. Capture actual number if offered."
},
{
  id:"BUD-002", mainCat:"Small Budget", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Can you help people starting out without much cash?",
  alts:["I'm broke but starting a business","No money yet, can you still work with me?","Bootstrapping a trade business"],
  shortA:"Yes — and that's exactly what our free Sunday Startup sessions are built for, no cost, no pressure.",
  fullA:"Yes. If cash is tight right now, our Sunday Startup sessions are made exactly for you — free, no-pressure time we set aside every Sunday to help people building a trade business from scratch figure out smart first steps, no bill involved. When you're ready to invest in paid services, we'll be here too, and we'll help you spend that first dollar where it counts most. Want to know more about Sunday Startup?",
  intent:"Problem-Aware", emotion:"Anxious", cta:"Contact Us", relatedService:"Sunday Startup",
  followUp:"Want to hear more about Sunday Startup?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["no cash","bootstrapping","broke","free help"], notes:"Bridge to Sunday Startup program."
},
{
  id:"BUD-003", mainCat:"Small Budget", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"What can I get done with just a couple hundred dollars a month?",
  alts:["$200/month budget, what's possible?","Cheapest plan available?","Bare minimum package?"],
  shortA:"At that range, we'd focus everything on your Google Business Profile and a lean starter site or SEO push.",
  fullA:"At a couple hundred dollars a month, we'd concentrate everything on the highest-leverage move: fully optimizing your Google Business Profile and reviews, which is largely free traffic once it's dialed in, plus maybe a lean starter website. We wouldn't spread that thin across five services — better to nail one or two things than half-do everything. What trade are you in so I can be specific about what that'd look like?",
  intent:"Vendor-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"What trade are you in?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["low budget","couple hundred","minimum plan","lean start"], notes:"Recommend Local SEO/GBP as highest ROI at low spend."
},
{
  id:"BUD-004", mainCat:"Small Budget", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Should I save up before starting marketing, or start small now?",
  alts:["Wait and save, or start now?","Is starting small worth it?","Save first or begin small?"],
  shortA:"Starting small now usually beats waiting — small, consistent effort compounds, and competitors aren't waiting.",
  fullA:"Generally, starting small now beats waiting to save up a big budget. Marketing compounds — reviews build, rankings build, trust builds — and every month you wait is a month your competitors are gaining ground instead of you. A modest, steady start almost always outperforms a big burst six months from now. That said, if you're truly strapped, our free Sunday Startup sessions can help you plan without spending a dime yet. What's holding you back from starting small today?",
  intent:"Problem-Aware", emotion:"Uncertain", cta:"Start Assessment", relatedService:"General",
  followUp:"What's holding you back from starting small today?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["save first","wait vs start","timing","small start"], notes:"Encourage momentum over waiting. Bridge to Sunday Startup."
},
{
  id:"BUD-005", mainCat:"Small Budget", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Is it a waste of money to advertise if I can only afford a little?",
  alts:["Is a small ad budget pointless?","Won't a tiny budget just waste money?","Too little to advertise?"],
  shortA:"Not if it's targeted tightly — a small, focused budget on your exact service area can still bring real calls.",
  fullA:"It's not a waste if it's spent smart. A small, tightly geo-targeted budget aimed only at your service area and your highest-value searches can still bring real calls — the mistake is spreading a small budget too wide and getting nothing everywhere. We'd rather run a focused $500 campaign that produces jobs than a scattered one that produces clicks and nothing else. What's the ad budget you're considering?",
  intent:"Vendor-Aware", emotion:"Uncertain", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"What ad budget are you considering?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["small ad budget","waste of money","tight targeting","efficient"], notes:"Emphasize precision targeting for small spend."
},
{
  id:"BUD-006", mainCat:"Small Budget", serviceCat:"General", tradeCat:"All Trades", trade:"All",
  q:"Can I start with just one service and add more later?",
  alts:["Can I add services over time?","Start small, grow later?","One service to begin with?"],
  shortA:"Yes — most owners start with one or two core services and layer on more as revenue grows.",
  fullA:"Yes, that's how most of our clients actually start. Pick the one or two things that matter most right now — usually a website and Local SEO, or ads if you need calls fast — and add branding, social, or software later as the business grows and can support it. There's no requirement to buy everything on day one. What feels like the most urgent gap for you right now?",
  intent:"Vendor-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"General",
  followUp:"What's the most urgent gap for your business right now?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["start small","add later","phased approach","grow into it"], notes:"Capture the most urgent gap for quote scoping."
},

/* ═══════════════ SUNDAY STARTUP ═══════════════ */
{
  id:"SUN-001", mainCat:"Sunday Startup", serviceCat:"Sunday Startup", tradeCat:"All Trades", trade:"All",
  q:"What are your Sunday community help sessions?",
  alts:["What is Sunday Startup?","Tell me about your free Sunday help","What's the Sunday program?"],
  shortA:"Sunday Startup is free, no-pressure time we set aside every Sunday to help people building a trade business from scratch.",
  fullA:"Every Sunday, we set our own work aside to help people trying to build a business from the ground up — folks with a good idea and real work ethic, but not much budget yet. No sales pitch, no confusing tech talk, just honest answers about where you're at and what your smartest first steps are. You leave with a plan, not a bill. Want to set up a time to come by?",
  intent:"Unaware", emotion:"Hopeful", cta:"Contact Us", relatedService:"Sunday Startup",
  followUp:"Want to set up a time to come by?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["sunday startup","community help","free sessions","giving back"], notes:"Community/goodwill program, not a paid service. Do not hard-sell."
},
{
  id:"SUN-002", mainCat:"Sunday Startup", serviceCat:"Sunday Startup", tradeCat:"All Trades", trade:"All",
  q:"Is Sunday Startup really free? What's the catch?",
  alts:["No cost at all?","Is there a hidden sales pitch?","Do I have to buy something after?"],
  shortA:"Really free, no catch. No pressure to buy anything — it's honest guidance for people just starting out.",
  fullA:"Really free — no catch, no required purchase, no hard pitch at the end. We do this because we believe in the people chasing the dream with more grit than budget, and we were all there once ourselves. If down the road you want to hire us for something, great, but that's never the point of showing up on a Sunday. It's just honest help.",
  intent:"Unaware", emotion:"Skeptical", cta:"Contact Us", relatedService:"Sunday Startup",
  followUp:"Want to grab a time to come by this Sunday?",
  leadValue:"Low", escalate:false, escalateReason:"",
  tags:["free program","no catch","no sales pitch","genuine"], notes:"Reinforce authenticity — this is a trust/goodwill builder, not a lead funnel."
},
{
  id:"SUN-003", mainCat:"Sunday Startup", serviceCat:"Sunday Startup", tradeCat:"All Trades", trade:"All",
  q:"Who is Sunday Startup for?",
  alts:["Am I a fit for Sunday Startup?","Who should come to Sunday sessions?","Is this for me?"],
  shortA:"Anyone starting a trade or service business with more grit than budget, wanting honest advice and a plan.",
  fullA:"It's built for people just getting off the ground — starting a trade or service business and not sure where to begin online, working with a small or no marketing budget, and wanting straight answers instead of a sales pitch. If you've got a good idea and the work ethic to back it up but not much cash yet, this is exactly who we built it for. Does that sound like where you're at?",
  intent:"Unaware", emotion:"Curious", cta:"Contact Us", relatedService:"Sunday Startup",
  followUp:"Does that sound like where you're at right now?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["who it's for","eligibility","fit","target audience"], notes:"Qualify gently; still low-pressure, no hard sales push."
},
{
  id:"SUN-004", mainCat:"Sunday Startup", serviceCat:"Sunday Startup", tradeCat:"All Trades", trade:"All",
  q:"What happens during a Sunday Startup session?",
  alts:["What do we actually do on a Sunday?","How does the session work?","What can I expect?"],
  shortA:"You bring your questions, we walk through your options, and you leave with clear, practical first steps.",
  fullA:"You bring whatever's got you stuck — pricing, getting found online, landing your first customers — and we give you straight answers. We break down what actually matters for a business your size and what you can safely put off for later. You walk away with clear next steps you can act on that same week, not a bill or a pitch.",
  intent:"Unaware", emotion:"Curious", cta:"Contact Us", relatedService:"Sunday Startup",
  followUp:"What's the biggest thing you're stuck on right now?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["how it works","session format","what to expect","process"], notes:"Set expectations clearly per the page's 3-step structure."
},
{
  id:"SUN-005", mainCat:"Sunday Startup", serviceCat:"Sunday Startup", tradeCat:"All Trades", trade:"All",
  q:"How do I sign up for Sunday Startup?",
  alts:["How do I book a Sunday session?","Where do I sign up?","How do I attend?"],
  shortA:"Just reach out and let us know you're interested — we'll set up a time, no strings attached.",
  fullA:"Easy — just reach out through our contact page and mention Sunday Startup, and we'll set up a time to sit down with you, no strings attached. Want me to grab your name and best contact so we can get that started right now?",
  intent:"Ready to Buy", emotion:"Motivated", cta:"Contact Us", relatedService:"Sunday Startup",
  followUp:"Can I grab your name and best way to reach you?",
  leadValue:"Medium", escalate:true, escalateReason:"Ready to book a session — capture contact and route to schedule a Sunday Startup time.",
  tags:["sign up","book a session","schedule","attend"], notes:"Ready-to-act moment. Capture contact info, escalate to schedule."
},
{
  id:"SUN-006", mainCat:"Sunday Startup", serviceCat:"Sunday Startup", tradeCat:"All Trades", trade:"All",
  q:"Do I need to already have a business to come to Sunday Startup?",
  alts:["Can I come if I haven't started yet?","Just an idea, is that okay?","Pre-business, still welcome?"],
  shortA:"No — having just an idea and the drive to start is plenty. That's exactly who this is for.",
  fullA:"No, you don't need to already be up and running. If you've got a good idea, a strong work ethic, and you're trying to figure out your first steps, that's exactly who we built Sunday Startup for. Whether you're pre-launch or a few months in, come with your questions.",
  intent:"Unaware", emotion:"Hopeful", cta:"Contact Us", relatedService:"Sunday Startup",
  followUp:"Where are you at right now — just an idea, or already taking jobs?",
  leadValue:"Low", escalate:false, escalateReason:"",
  tags:["idea stage","pre-launch","not started yet","eligibility"], notes:"Very welcoming tone — no barrier to entry."
},
{
  id:"SUN-007", mainCat:"Sunday Startup", serviceCat:"Sunday Startup", tradeCat:"All Trades", trade:"All",
  q:"Will you try to sell me something at Sunday Startup?",
  alts:["Is it a sales trap?","Will there be a pitch?","No pressure to buy?"],
  shortA:"No pitch. It's honest advice and a plan — if you ever want paid help later, that's a separate conversation.",
  fullA:"No pitch, no pressure. Sunday Startup exists because we believe in people building something from scratch, not as a funnel to sell services. You'll get honest answers and a practical plan for that week. If down the road you decide you want paid help with a website, ads, or anything else, that's a totally separate conversation you can start whenever you're ready — not something we push on you there.",
  intent:"Unaware", emotion:"Skeptical", cta:"Contact Us", relatedService:"Sunday Startup",
  followUp:"Anything else about Sunday Startup I can clear up?",
  leadValue:"Low", escalate:false, escalateReason:"",
  tags:["no pitch","no pressure","genuine help","sales-free"], notes:"Repeat reassurance — critical for program's credibility."
},
{
  id:"SUN-008", mainCat:"Sunday Startup", serviceCat:"Sunday Startup", tradeCat:"All Trades", trade:"All",
  q:"Where is Sunday Startup held and how long does it last?",
  alts:["What time and where?","How long is a session?","Location and schedule?"],
  shortA:"Reach out and we'll set up a time and place that works for you — sessions run as long as you need to get unstuck.",
  fullA:"Best way to get the exact time and place is to reach out and let us know you're interested — we'll set up a time that works for your schedule. Sessions aren't rushed; we spend the time it takes to actually get your questions answered and leave you with a real plan, not a rushed five minutes. Want me to help get that set up?",
  intent:"Vendor-Aware", emotion:"Curious", cta:"Contact Us", relatedService:"Sunday Startup",
  followUp:"Want help getting a time set up?",
  leadValue:"Medium", escalate:true, escalateReason:"Logistics question signals real intent to attend — route to scheduling with a human.",
  tags:["location","schedule","logistics","when and where"], notes:"Escalate to confirm actual logistics (bot may not know exact address/hours)."
}

];
