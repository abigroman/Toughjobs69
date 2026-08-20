// Toughjobs Chatbot Knowledge Base — Batch 1, Part B
// Services: Social Media, Software, AI Automations, Re-marketing, Coaching
// Field keys: id, mainCat, serviceCat, tradeCat, trade, q, alts[], shortA, fullA,
//   intent, emotion, cta, relatedService, followUp, leadValue, escalate, escalateReason, tags[], notes

window.QA_BATCH1_B = [

/* ═══════════════ SOCIAL MEDIA ═══════════════ */
{
  id:"SOC-001", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"Do you manage social media for trade businesses?",
  alts:["Can you run my Facebook page?","Do you do social media management?","Handle my Instagram?"],
  shortA:"Yes — we run Facebook, Instagram, and TikTok for trades, turning your job photos into leads.",
  fullA:"Yes, social media management is one of our services. We run your Facebook, Instagram, and TikTok — posting your best job photos and video, keeping the pages active, and building the kind of following that sends you referrals and calls. For trades, showing real work builds trust fast. Which platforms are you on now, if any?",
  intent:"Problem-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"Which platforms do you use now?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["social media","facebook","instagram","management"], notes:"Core service intro. Capture current platforms."
},
{
  id:"SOC-002", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"Does social media actually get trades jobs?",
  alts:["Is social media worth it for trades?","Do I get leads from Facebook?","Does social bring work?"],
  shortA:"For visual trades, yes — before/after posts and video build trust and bring in referrals and direct leads.",
  fullA:"For visual trades, absolutely. A jaw-dropping before-and-after of a pressure wash, a deck build, or a detail job spreads fast and brings in calls and referrals. Even for less flashy trades, an active page reassures people you're real and legit before they hire you. It works best paired with reviews and a solid website. Does your work look good in photos and video?",
  intent:"Unaware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"Does your work photograph well?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["worth it","leads","roi","referrals"], notes:"Educational. Qualify on how visual their work is."
},
{
  id:"SOC-003", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"How much does social media management cost?",
  alts:["Social media pricing?","Cost to manage my socials?","What do you charge for social?"],
  shortA:"It's a monthly service; price depends on how many platforms and posts. We quote it fair up front.",
  fullA:"Social media is an ongoing monthly service. Cost depends on how many platforms you want covered and how often we post. It's often bundled with your other marketing so everything works together and costs less than piecemeal. We quote it straight, no hidden fees. Which platforms matter most to you?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"Which platforms do you care about most?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["pricing","cost","monthly","budget"], notes:"Pricing. Capture platform priorities."
},
{
  id:"SOC-004", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"Do I have to post myself or do you handle it?",
  alts:["Who does the posting?","Do you create the content?","Is posting done for me?"],
  shortA:"We handle it — content, captions, and posting. You just send job photos from your phone.",
  fullA:"We handle the whole thing — creating posts, writing captions, and scheduling them so your pages stay active without you thinking about it. All we need from you is the raw material: quick photos or clips from your jobs, snapped on your phone. You stay on the tools; we make you look great online. Do you already take photos on jobs?",
  intent:"Vendor-Aware", emotion:"Relieved", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"Do you snap photos on the job already?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["done for you","posting","content creation","effort"], notes:"Address effort concern."
},
{
  id:"SOC-005", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"Which social platform is best for my trade?",
  alts:["Facebook or Instagram for me?","Should I be on TikTok?","Best platform for trades?"],
  shortA:"Depends on your trade — Facebook for local/older customers, Instagram and TikTok for visual, viral work.",
  fullA:"It depends on your trade and who your customers are. Facebook still rules for local home-service work and reaching older homeowners. Instagram and TikTok are gold for visual trades like pressure washing, decks, landscaping, and detailing, where before-and-afters go viral. We'll focus your effort where your customers actually are instead of spreading thin. What trade are you in?",
  intent:"Solution-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"What trade are you in?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["platforms","facebook","tiktok","strategy"], notes:"Capture trade to recommend platform."
},
{
  id:"SOC-006", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"Can you help my videos go viral?",
  alts:["How do I go viral?","Viral content for my business?","Get my reels seen?"],
  shortA:"We can't promise viral, but for visual trades we know the formats and hooks that spread and pull leads.",
  fullA:"Nobody can promise viral — anyone who does is selling smoke. What we can do is use the formats, hooks, and timing that give your content the best shot, especially for visual trades where satisfying before-and-afters do numbers. And here's the thing: even without going viral, steady, good content brings in real local leads. What kind of work do you do that looks impressive on video?",
  intent:"Solution-Aware", emotion:"Hopeful", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"What's your most visually impressive work?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["viral","video","reels","content"], notes:"Honest expectation-setting. Redirect to steady results."
},
{
  id:"SOC-007", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"What's the difference between social media management and social ads?",
  alts:["Organic social vs paid social?","Posting vs ads?","Do I need both?"],
  shortA:"Management = regular posts that build trust over time. Social ads = paid reach for fast leads. They work best together.",
  fullA:"Good question. Social media management is the steady posting that builds your reputation and following over time — it's the free, long-game side. Social ads are paid campaigns that put your work in front of thousands of local people fast to drive leads now. Management makes your page look legit so the ads convert better. Most owners who go all-in do both. Are you after fast leads, long-term presence, or both?",
  intent:"Solution-Aware", emotion:"Confused", cta:"Request a Quote", relatedService:"Paid Ads",
  followUp:"Fast leads, long-term presence, or both?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["organic vs paid","social ads","comparison","strategy"], notes:"Cross-link Paid Ads."
},
{
  id:"SOC-008", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"Can you respond to comments and messages for me?",
  alts:["Do you handle DMs?","Who answers my social messages?","Manage my inbox?"],
  shortA:"We can manage comments and route real leads to you fast so no message goes cold.",
  fullA:"We can help manage comments and messages so nothing sits ignored — a missed DM is a missed job. We handle the general engagement and flag hot leads straight to you so you can close them personally, since you know your pricing and schedule. Fast replies win jobs on social. How quickly do you usually get back to people now?",
  intent:"Solution-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"How fast do you reply to messages today?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["engagement","dms","comments","inbox"], notes:"May tie to AI Automations for auto-responses."
},
{
  id:"SOC-009", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"I don't have time to take photos on the job. Can this still work?",
  alts:["I'm too busy for content","No time for photos","Can social work if I'm slammed?"],
  shortA:"Yes — we make it dead simple: snap a few quick phone pics and we handle everything else.",
  fullA:"Totally get it — you're running jobs, not a content studio. We make it as easy as possible: a few quick phone snaps or a 10-second clip while you're already there is enough for us to build a week of posts. We can also plan a photo shoot to stock up in one go. You don't need to become a creator; just point and shoot. Would a batch photo day help you?",
  intent:"Vendor-Aware", emotion:"Overwhelmed", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"Would a one-time photo day make this easier?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["no time","busy","photos","effort"], notes:"Address overwhelm. Offer photo-day solution."
},
{
  id:"SOC-010", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"How often will you post?",
  alts:["How many posts per week?","Posting frequency?","How much do you post?"],
  shortA:"Usually a few posts a week per platform — enough to stay active and top of mind without spamming.",
  fullA:"Typically a few posts a week per platform — enough to keep you active, visible, and top of mind without spamming people's feeds. Consistency matters more than volume; a steady rhythm of quality posts beats a burst then silence. We'll set a cadence that fits your goals and how much content we can pull from your jobs. Do you want a heavier push or steady and consistent?",
  intent:"Vendor-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"Heavy push or steady rhythm?",
  leadValue:"Low", escalate:false, escalateReason:"",
  tags:["frequency","how often","posting","cadence"], notes:"Detail question. Low intent alone."
},
{
  id:"SOC-011", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"Can you grow my followers?",
  alts:["Will I get more followers?","How do I grow my page?","Increase my audience?"],
  shortA:"Yes — with consistent quality content and local targeting we grow a real, local following that turns into jobs.",
  fullA:"We can grow your following, but the goal is real local followers who might actually hire you — not fake numbers from bots or giveaways. Steady quality content, engaging with your community, and smart use of hashtags and local tags builds an audience that turns into calls and referrals. A thousand local homeowners beat ten thousand random accounts. Is growth your main goal, or leads?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"Are you after followers or actual leads?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["followers","growth","audience","reach"], notes:"Reframe vanity followers toward real leads."
},
{
  id:"SOC-012", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"Do you handle Google Business posts and social together?",
  alts:["Is Google posting part of social?","Do socials include my Google profile?","One place for all posting?"],
  shortA:"We can coordinate social and Google Business posts so your whole online presence stays consistent and active.",
  fullA:"We can tie it all together. Your Google Business posts fall under Local SEO, but we coordinate them with your social so your whole presence looks active and consistent — same great job photos working everywhere. Bundling it means less hassle for you and a stronger overall footprint. Are you trying to cover all your bases in one plan?",
  intent:"Solution-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"Local SEO",
  followUp:"Do you want everything managed in one plan?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["google business","integration","bundle","consistency"], notes:"Cross-sell bundle opportunity."
},
{
  id:"SOC-013", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"My page is dead. Can you bring it back to life?",
  alts:["My social is inactive","Revive my Facebook page","My page has no activity"],
  shortA:"Yes — we can revive a dormant page with fresh content and get engagement moving again.",
  fullA:"Definitely. A dead page can actually hurt you — people check it, see the last post was two years ago, and wonder if you're still in business. We revive it with fresh, consistent content, clean up the profile, and get engagement moving again. It's easier than starting from zero since you likely have some followers already. When was the last time you posted?",
  intent:"Problem-Aware", emotion:"Frustrated", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"How long since your last post?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["dead page","revive","inactive","dormant"], notes:"Clear pain. Reassure it's fixable."
},
{
  id:"SOC-014", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"Will you run contests or promotions on social?",
  alts:["Can you do giveaways?","Social promotions?","Run a contest for me?"],
  shortA:"Yes — seasonal promos and smart giveaways can drive engagement and leads when done right.",
  fullA:"We can. Done right, a seasonal promo or a well-structured giveaway can boost engagement and pull in local leads — like a spring tune-up special or a 'tag a neighbor' contest. The key is targeting real local prospects, not just anyone chasing a free prize. We'll tie any promo back to actual bookings. Is there a season or service you'd want to push?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"Any season or service you want to promote?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["contests","giveaways","promotions","seasonal"], notes:"Capture seasonal focus."
},
{
  id:"SOC-015", mainCat:"Services", serviceCat:"Social Media", tradeCat:"All Trades", trade:"All",
  q:"Do you require a contract for social media?",
  alts:["Am I locked into social management?","Can I cancel social anytime?","Social media commitment?"],
  shortA:"No long lock-in. We ask for about 6 months since social builds momentum over time.",
  fullA:"No long-term trap. Like our other services, we ask for around 6 months, because social media builds momentum — followers, engagement, and trust compound over time, and quitting after a month means you never see the payoff. After that, we keep earning it. Does a 6-month runway work for you?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Social Media",
  followUp:"Does a 6-month runway work for you?",
  leadValue:"Low", escalate:false, escalateReason:"",
  tags:["contract","commitment","cancel","6 months"], notes:"Standard brand line."
},

/* ═══════════════ SOFTWARE ═══════════════ */
{
  id:"SFT-001", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"What software or tools does Toughjobs offer?",
  alts:["Do you have a CRM?","What's your software?","Do you offer business tools?"],
  shortA:"We offer software to manage leads, follow-ups, booking, reviews, and messages all in one place.",
  fullA:"We offer software that pulls your business together in one place — a lead and customer tracker (CRM), online booking, automatic review requests, and a single inbox for texts, emails, and social messages. Instead of leads slipping through the cracks across five apps, it's one dashboard. What's your biggest headache right now — losing leads, chasing follow-ups, or juggling tools?",
  intent:"Problem-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Software",
  followUp:"What's your biggest day-to-day headache?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["software","crm","tools","platform"], notes:"Core service intro. Capture pain point."
},
{
  id:"SFT-002", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"Do you have a CRM to track my leads?",
  alts:["Can I track my customers?","Lead management software?","Do you offer a CRM?"],
  shortA:"Yes — our CRM tracks every lead from first contact to closed job so nothing falls through the cracks.",
  fullA:"Yes. Our CRM tracks every lead from the first call or form fill all the way to a closed job, so you always know who to follow up with and nothing slips. It shows where each lead came from too, so you can see which marketing is actually working. For a busy crew, that alone can mean thousands in jobs you'd otherwise forget to chase. How do you track leads now — paper, phone, memory?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Software",
  followUp:"How do you track leads today?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["crm","leads","tracking","pipeline"], notes:"High value. Capture current process."
},
{
  id:"SFT-003", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"How much does the software cost?",
  alts:["Software pricing?","What's the monthly fee?","Cost of your tools?"],
  shortA:"It's a monthly subscription; price depends on features. We quote it fair and often bundle it with marketing.",
  fullA:"The software is a monthly subscription, and the price depends on which features you need — just a CRM versus the full suite with booking, reviews, and automations. It often bundles with your marketing plan so everything connects. We quote it straight, no hidden fees. Do you want just lead tracking or the whole toolkit?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Software",
  followUp:"Just lead tracking or the full toolkit?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["pricing","cost","subscription","budget"], notes:"Capture feature scope."
},
{
  id:"SFT-004", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"Can customers book appointments through the software?",
  alts:["Does it have online booking?","Can people schedule online?","Appointment scheduling tool?"],
  shortA:"Yes — customers can book online and it syncs to your calendar, cutting down phone tag.",
  fullA:"Yes. Customers can book right from your website or a link, and it syncs to your calendar so you're not playing phone tag. For scheduled trades like landscaping, detailing, or pest control, this fills your calendar while you're on a job. It can even send reminders so people don't no-show. Do most of your jobs get scheduled ahead or are they emergencies?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Software",
  followUp:"Scheduled jobs or mostly emergencies?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["booking","scheduling","calendar","appointments"], notes:"Better fit for scheduled trades."
},
{
  id:"SFT-005", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"Does it automatically ask customers for reviews?",
  alts:["Auto review requests?","Does it get me reviews?","Review automation?"],
  shortA:"Yes — it automatically texts or emails happy customers after a job to ask for a review.",
  fullA:"Yes, and it's one of the most popular features. Right after a job wraps, it can automatically text or email the customer a quick link to leave a review, when they're happiest and most likely to do it. More reviews mean better ranking and more trust, and you don't have to remember to ask. How many reviews do you have now?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Software",
  followUp:"Roughly how many reviews do you have?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["reviews","automation","review requests","reputation"], notes:"Ties to Local SEO reputation goals."
},
{
  id:"SFT-006", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"Can I see all my messages in one place?",
  alts:["Unified inbox?","One inbox for texts and emails?","Manage all messages together?"],
  shortA:"Yes — texts, emails, and social messages land in one inbox so no lead gets missed.",
  fullA:"Yes. Texts, emails, Facebook and Instagram messages, and web chats all land in one inbox, so you're not checking five apps and missing leads. Everything's in one spot on your phone or computer, and you can reply from there. For a busy owner, this is how you stop leaving money on the table from missed messages. How many places do you check for messages now?",
  intent:"Solution-Aware", emotion:"Relieved", cta:"Request a Quote", relatedService:"Software",
  followUp:"How many apps do you check for messages today?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["inbox","messages","unified","communication"], notes:"Pain relief angle."
},
{
  id:"SFT-007", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"Is the software hard to learn?",
  alts:["Is it complicated?","Will I be able to use it?","Is there a learning curve?"],
  shortA:"It's built to be simple, and we set it up and train you so you're not figuring it out alone.",
  fullA:"It's built to be simple — made for busy trade owners, not tech experts. And you're not on your own: we set it up for you, connect your accounts, and walk you through it so it actually gets used. Software that sits unused helps nobody, so we make sure it fits how you work. Are you comfortable with apps, or want us to keep it dead simple?",
  intent:"Vendor-Aware", emotion:"Anxious", cta:"Request a Quote", relatedService:"Software",
  followUp:"Comfortable with apps or want it kept simple?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["ease of use","learning curve","training","setup"], notes:"Address tech anxiety."
},
{
  id:"SFT-008", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"Does it work on my phone?",
  alts:["Is there a mobile app?","Can I use it on the job?","Phone access?"],
  shortA:"Yes — there's a mobile app so you can manage leads, messages, and bookings from the job site.",
  fullA:"Yes, there's a mobile app so you can run it right from the truck or the job site — check new leads, reply to messages, see your schedule, all from your phone. For a trade owner who's rarely at a desk, that's the whole point. You stay on top of your business without stopping work. Are you mostly in the field?",
  intent:"Solution-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"Software",
  followUp:"Are you mostly out in the field?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["mobile app","phone","field","access"], notes:"Reassurance. Standard feature."
},
{
  id:"SFT-009", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"Can it send invoices or take payments?",
  alts:["Does it do invoicing?","Can customers pay through it?","Payment features?"],
  shortA:"Depending on the plan, it can send invoices and collect payments so you get paid faster.",
  fullA:"Depending on your plan, yes — you can send invoices and collect payments right through it, which means you get paid faster and stop chasing checks. Everything ties to the customer record, so you see the full history from lead to paid. Are you having trouble getting paid on time now, or is it more about tracking leads?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Software",
  followUp:"Is getting paid on time a pain point?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["invoicing","payments","billing","get paid"], notes:"Feature clarity. Capture pain."
},
{
  id:"SFT-010", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"Will it replace the tools I already use?",
  alts:["Can it replace my other apps?","Do I still need my current software?","All-in-one?"],
  shortA:"For most trades it replaces several separate apps with one system — less cost, less juggling.",
  fullA:"For a lot of owners it replaces a pile of separate apps — one for scheduling, one for reviews, one for texting — with a single connected system. That usually saves money and a ton of headache. If there's a tool you love, we'll see if it connects rather than force you to drop it. What are you using right now?",
  intent:"Solution-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"Software",
  followUp:"What tools are you using now?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["all-in-one","replace","consolidate","integrations"], notes:"Capture current stack."
},
{
  id:"SFT-011", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"Can I import my existing customer list?",
  alts:["Move my contacts over?","Import my customers?","Transfer my data?"],
  shortA:"Yes — we help you bring your existing customer list in so you start with your data, not from scratch.",
  fullA:"Yes. We help you import your existing customer list during setup, so you're not starting from zero — your past customers are right there, ready for follow-ups, review requests, and repeat-business campaigns. Those past customers are often your easiest next jobs. Roughly how many customers are on your list now?",
  intent:"Solution-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"Software",
  followUp:"How big is your current customer list?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["import","migration","customer list","data"], notes:"List size hints at re-marketing opportunity."
},
{
  id:"SFT-012", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"Is my customer data safe in your software?",
  alts:["Is my data secure?","Where is my data stored?","Data privacy in the software?"],
  shortA:"Yes — your data is stored securely and it's your data. We don't sell it or share it.",
  fullA:"Your data is stored securely, and it stays yours — we don't sell it or hand it off to anyone. Keeping your customer info safe is basic respect, and it matters for your reputation too. If you ever leave, you can take your data with you. Is there a specific concern you've got about data?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Contact Us", relatedService:"Software",
  followUp:"Any specific data concern I can address?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["security","data privacy","safe","ownership"], notes:"Trust/security question. Reassure on ownership."
},
{
  id:"SFT-013", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"Do you set it up for me or do I do it myself?",
  alts:["Who sets up the software?","Is setup included?","Do I configure it myself?"],
  shortA:"We set it up for you — accounts connected, list imported, automations ready. You just start using it.",
  fullA:"We handle the setup — connecting your accounts, importing your customers, building your booking and review automations, and getting it working the way your business runs. You don't have to be technical or spend a weekend configuring it. Then we train you so it actually gets used. Want to hear what a done-for-you setup would look like for your shop?",
  intent:"Vendor-Aware", emotion:"Relieved", cta:"Request a Quote", relatedService:"Software",
  followUp:"Want to see what setup would look like for you?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["setup","done for you","onboarding","configuration"], notes:"Address effort concern."
},
{
  id:"SFT-014", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"How is your software different from something like Jobber or Housecall Pro?",
  alts:["Why not use Jobber?","You vs Housecall Pro?","How's this better than other CRMs?"],
  shortA:"Ours ties directly into the marketing we run for you, so leads flow straight in — one team, one system.",
  fullA:"Those are solid tools. The difference with ours is it's connected to the marketing we run for you — your website, ads, and social feed leads straight into it, and one team handles all of it. So instead of software over here and marketing over there, it's one system working together, with us on the hook for results. If you already love another tool, we'll be honest about fit. What are you using now, if anything?",
  intent:"Vendor-Aware", emotion:"Evaluating", cta:"Contact Us", relatedService:"Software",
  followUp:"Are you comparing us to a tool you already use?",
  leadValue:"High", escalate:true, escalateReason:"Comparison-shopping at evaluating stage — a human can dig into their needs and current tool to win the deal.",
  tags:["competitors","jobber","housecall pro","comparison"], notes:"Evaluating vs competitors. Escalate."
},
{
  id:"SFT-015", mainCat:"Services", serviceCat:"Software", tradeCat:"All Trades", trade:"All",
  q:"Can I get just the software without the marketing?",
  alts:["Software only?","Do I have to buy marketing too?","Just the CRM by itself?"],
  shortA:"Often yes — you can start with the software alone, though it works best paired with our marketing.",
  fullA:"In most cases yes, you can start with just the software. It stands on its own for managing leads, booking, and reviews. That said, it really shines when it's fed by the marketing we run — that's when leads pour in and the system does its magic. Plenty of owners start with software and add marketing later. What's pulling you toward software first?",
  intent:"Vendor-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"Software",
  followUp:"What's drawing you to the software first?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["software only","standalone","a la carte","flexibility"], notes:"Flexible entry point. Note upsell path."
},

/* ═══════════════ AI AUTOMATIONS ═══════════════ */
{
  id:"AI-001", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"What are AI automations for my business?",
  alts:["What does AI automation do?","How can AI help my trade?","Explain AI automations"],
  shortA:"AI handles repeat tasks — instantly answering leads, texting missed calls back, booking, and follow-ups — so you don't lose jobs.",
  fullA:"AI automations handle the repetitive stuff that eats your day and loses you jobs. Think instantly replying to a new lead at midnight, texting back a missed call before they call a competitor, booking appointments, and following up automatically. It's like having a virtual assistant that never sleeps. For a busy trade owner, the biggest win is never letting a lead go cold. What's slipping through the cracks for you now?",
  intent:"Problem-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"What tasks eat up most of your time?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["ai","automation","virtual assistant","efficiency"], notes:"Core service intro. Capture time-wasters."
},
{
  id:"AI-002", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"Can AI answer my leads when I'm on a job?",
  alts:["Auto-reply to leads?","Respond to customers while I work?","Instant lead response?"],
  shortA:"Yes — AI replies to new leads instantly, even mid-job, so they don't move on to a competitor.",
  fullA:"Yes, and this is the killer feature. When a lead comes in while you're up a ladder, AI replies instantly — answering basic questions, capturing their info, even booking them. Most jobs go to whoever responds first, so instant replies win work you'd otherwise miss. It hands off the hot ones to you to close. How often do you miss calls or messages during the day?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"How often do you miss leads while working?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["instant reply","lead response","speed to lead","auto-reply"], notes:"Strong value. Capture missed-lead frequency."
},
{
  id:"AI-003", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"Does it text back missed calls automatically?",
  alts:["Missed call text back?","Auto text when I miss a call?","Recover missed calls?"],
  shortA:"Yes — missed-call text-back instantly texts anyone you couldn't answer, so you don't lose the job.",
  fullA:"Yes — it's one of the most valuable automations for trades. When you can't answer, it instantly texts the caller something like 'Sorry we missed you, how can we help?' That keeps them from immediately dialing the next company. A missed call is often a missed job; this catches them. How many calls do you figure you miss in a week?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"Roughly how many calls do you miss a week?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["missed call","text back","recovery","calls"], notes:"High-value feature. Quantify missed calls."
},
{
  id:"AI-004", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"How much do AI automations cost?",
  alts:["AI automation pricing?","Cost of automations?","What do you charge for AI?"],
  shortA:"It's a monthly service, often bundled with the software. We quote fair based on which automations you want.",
  fullA:"AI automations are a monthly service and usually run alongside our software, since they work through it. Cost depends on how many automations you set up — just missed-call text-back is one thing, a full lead-response and follow-up system is another. We quote it straight. If it books you even one extra job a month, it usually pays for itself. Which automation sounds most useful to you?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"Which automation would help you most?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["pricing","cost","monthly","budget"], notes:"Capture priority automation."
},
{
  id:"AI-005", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"Will the AI sound like a robot to my customers?",
  alts:["Does it sound fake?","Will customers know it's AI?","Is it awkward for customers?"],
  shortA:"We set it up to sound natural and on-brand, and hand off to you for anything real. It helps, not annoys.",
  fullA:"Fair concern — a clunky bot can turn people off. We set it up to sound natural, match your voice, and keep it short and helpful, like a sharp office assistant. It handles the quick stuff — answering, capturing info, booking — and hands the real conversations to you. Done right, customers just feel like they got a fast reply. Want to hear how we'd tune it for your trade?",
  intent:"Vendor-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"What tone fits your business — casual or buttoned-up?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["robotic","natural","tone","customer experience"], notes:"Address quality concern."
},
{
  id:"AI-006", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"Can AI follow up with old leads and past customers?",
  alts:["Automatic follow-ups?","Re-engage old leads?","Nurture past customers with AI?"],
  shortA:"Yes — automated follow-up sequences keep working leads and past customers warm without you lifting a finger.",
  fullA:"Yes, and most owners are sitting on gold here. AI can automatically follow up with leads who didn't book and past customers who might need you again — a repipe reminder, a seasonal tune-up, a 'still need that quote?' text. Follow-up is where most jobs are won or lost, and doing it by hand never happens when you're busy. How big is your list of past customers and old quotes?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"How many past customers and old leads do you have?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["follow-up","nurture","re-engage","automation"], notes:"Cross-link Re-marketing. Capture list size."
},
{
  id:"AI-007", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"Can I add an AI chatbot to my website?",
  alts:["Website chatbot?","AI chat on my site?","Chat widget for my website?"],
  shortA:"Yes — an AI chat on your site answers visitors 24/7, captures their info, and books jobs.",
  fullA:"Yes. We can add an AI chat to your website that answers common questions any hour, captures visitor info so you get the lead even after hours, and can book appointments. It turns your website from a brochure into a 24/7 salesperson. Anything it can't handle, it routes to you. Do you get website visitors after hours who probably leave without calling?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"Do after-hours visitors leave without contacting you?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["chatbot","website chat","24/7","widget"], notes:"Meta: this is literally what the bot itself is."
},
{
  id:"AI-008", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"Is AI going to be complicated to manage?",
  alts:["Is AI hard to run?","Will I have to babysit it?","Too complex for me?"],
  shortA:"No — we build and manage it for you. It runs in the background; you just get the leads and bookings.",
  fullA:"No — we build it, set it up, and manage it for you. It runs quietly in the background; your job is just to show up to the appointments it books and close the leads it hands you. You don't need to understand the tech any more than you need to understand how your phone works to answer it. Want us to handle the whole thing so you don't have to think about it?",
  intent:"Vendor-Aware", emotion:"Anxious", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"Want it fully managed so you don't touch it?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["complexity","managed","hands-off","ease"], notes:"Address tech anxiety."
},
{
  id:"AI-009", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"Will AI take over talking to my customers completely?",
  alts:["Does AI replace me?","Will customers only talk to a bot?","Do I lose the personal touch?"],
  shortA:"No — AI handles the quick, repetitive stuff and hands real conversations to you. You keep the relationship.",
  fullA:"No, and you wouldn't want it to. AI handles the fast, repetitive stuff — instant replies, capturing info, booking, reminders — so nothing gets missed. But the real conversations, quotes, and relationships stay with you, because that personal touch is what wins and keeps customers. Think of it as an assistant, not a replacement. What would you want to keep handling yourself?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"What do you want to keep handling personally?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["personal touch","replace","human","balance"], notes:"Reassure on human balance."
},
{
  id:"AI-010", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"Can AI qualify leads before they reach me?",
  alts:["Does it screen leads?","Filter out tire-kickers?","Pre-qualify customers?"],
  shortA:"Yes — AI asks the right questions up front so you only spend time on real, ready-to-buy leads.",
  fullA:"Yes, and it's a big time-saver. AI can ask the qualifying questions up front — what service, where they're located, timeline, budget — so tire-kickers and out-of-area folks get filtered and you only get on the phone with real prospects. Your time is worth too much to spend it on people who were never going to book. What questions do you wish you could ask before every call?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"What do you most need to know before a call?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["qualify","screening","filter","tire-kickers"], notes:"Ties directly to lead-scoring strategy."
},
{
  id:"AI-011", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"Does the AI work with my phone number and texting?",
  alts:["Can it text from my number?","Works with my phone?","SMS automation?"],
  shortA:"Yes — it can text through a business line so replies look like they're coming from you, not a random number.",
  fullA:"Yes. It works through a business texting line so your automated replies and follow-ups look like they come from your business, keeping it consistent and professional. Customers get fast texts, you keep your personal cell private, and everything's logged in one place. Do you text with customers now, or mostly call?",
  intent:"Solution-Aware", emotion:"Practical", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"Do you text customers now or mostly call?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["texting","sms","phone number","business line"], notes:"Practical setup question."
},
{
  id:"AI-012", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"Is AI automation only for big companies?",
  alts:["Is this just for large businesses?","Too advanced for a small crew?","Can a one-man shop use AI?"],
  shortA:"No — solo operators and small crews benefit most, since AI covers what you can't when you're on the tools.",
  fullA:"Actually the opposite — small crews and solo operators get the most out of it. When it's just you or a couple guys, you can't answer every call and follow up on every lead while you're working. AI covers exactly that gap, so a one-man shop can respond like a company with a full office. You don't need to be big; you need to stop missing leads. Is it mostly you running things?",
  intent:"Solution-Aware", emotion:"Uncertain", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"Is it mostly just you running the business?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["small business","solo","one-man","accessible"], notes:"Reframe for small operators."
},
{
  id:"AI-013", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"How fast can you get automations set up?",
  alts:["Automation setup time?","How soon can it run?","When will automations be live?"],
  shortA:"Basic automations like missed-call text-back can be live within days; fuller systems take a bit longer.",
  fullA:"Simple, high-impact ones like missed-call text-back can often be live within a few days. A fuller system with lead qualification, booking, and follow-up sequences takes a bit longer to build and tune to your business, but we can start with the biggest wins and expand. Want to start with the quick wins or build the whole system?",
  intent:"Vendor-Aware", emotion:"Impatient", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"Start with quick wins or the full system?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["setup time","timeline","fast","launch"], notes:"Offer phased start."
},
{
  id:"AI-014", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"What if the AI gives a customer wrong information?",
  alts:["Can AI make mistakes?","What if it says something wrong?","Is AI reliable?"],
  shortA:"We build it on your real info and set guardrails so it sticks to facts and hands off anything tricky to you.",
  fullA:"Good thing to ask. We build it on your actual business info — your services, pricing rules, and areas — and set guardrails so it stays on script and doesn't guess. For anything complex or unusual, it's set to hand off to you rather than wing it. We tune it before it goes live and keep an eye on it. Are there topics you'd want it to always pass straight to you?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"Any topics it should always route to you?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["accuracy","reliability","guardrails","mistakes"], notes:"Address reliability concern."
},
{
  id:"AI-015", mainCat:"Services", serviceCat:"AI Automations", tradeCat:"All Trades", trade:"All",
  q:"Can automations remind customers about appointments?",
  alts:["Appointment reminders?","Reduce no-shows?","Auto reminders for jobs?"],
  shortA:"Yes — automatic text and email reminders cut no-shows so you're not driving out to empty driveways.",
  fullA:"Yes. It sends automatic text and email reminders before appointments, which cuts no-shows big time — no more driving across town to an empty driveway. It can also confirm or let them reschedule with a tap. For scheduled trades that's real money saved in wasted trips. Do no-shows cost you much now?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"AI Automations",
  followUp:"Do no-shows cost you time and money now?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["reminders","no-shows","appointments","confirmation"], notes:"Practical value. Better for scheduled trades."
},

/* ═══════════════ RE-MARKETING ═══════════════ */
{
  id:"REM-001", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"What is re-marketing?",
  alts:["What does remarketing mean?","Explain retargeting","What is retargeting?"],
  shortA:"Re-marketing follows up with people who already visited your site or contacted you, so you don't lose them.",
  fullA:"Re-marketing (or retargeting) is following up with people who already showed interest — visited your website, clicked an ad, or reached out — but didn't book yet. You've seen it: you look at something online and then see ads for it everywhere. We do that for your trade, plus follow-up emails and texts to old leads. It's cheaper than finding new leads because these folks already know you. Are you losing people who almost booked?",
  intent:"Unaware", emotion:"Curious", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"Do people reach out but not book?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["remarketing","retargeting","follow-up","basics"], notes:"Core service intro. Educational."
},
{
  id:"REM-002", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"Can you win back leads that didn't book?",
  alts:["Recover lost leads?","Follow up with old quotes?","Re-engage people who didn't hire me?"],
  shortA:"Yes — that's the core of re-marketing: reminding warm leads who didn't book to come back and hire you.",
  fullA:"That's exactly what re-marketing does. A lot of people get a quote, get busy, and forget — they didn't say no, they just drifted. We follow up with ads, emails, and texts that bring them back when they're ready. These are some of the cheapest jobs to win because they already talked to you. How many old quotes or leads are just sitting there?",
  intent:"Problem-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"How many old leads haven't booked yet?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["win back","lost leads","old quotes","recover"], notes:"High value. Capture backlog size."
},
{
  id:"REM-003", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"How much does re-marketing cost?",
  alts:["Retargeting pricing?","Cost of remarketing?","What do you charge to re-engage leads?"],
  shortA:"Usually part of a monthly plan, and it's one of the cheapest lead sources since these people already know you.",
  fullA:"Re-marketing is usually part of a monthly marketing plan, and dollar for dollar it's one of the best-value things we do — you're spending a little to re-engage people who already know you rather than paying full price to find brand-new leads. We quote it fair with your other services. Do you have a customer list or old leads we could start with?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"Do you have a list of past leads or customers?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["pricing","cost","value","budget"], notes:"Capture list availability."
},
{
  id:"REM-004", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"Can you bring back past customers for repeat business?",
  alts:["Get repeat customers?","Re-engage old customers?","More repeat jobs?"],
  shortA:"Yes — we run campaigns to past customers for repeat work, seasonal service, and referrals.",
  fullA:"Absolutely, and this is money most trades leave on the table. Your past customers already trust you, so we run campaigns that bring them back — seasonal tune-up reminders, 'time for your next service' texts, and referral asks. It's far cheaper than chasing strangers and it builds a base of loyal repeat work. How big is your past-customer list?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"How many past customers could we reach out to?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["repeat business","past customers","loyalty","referrals"], notes:"Capture list size — key qualifier."
},
{
  id:"REM-005", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"Why should I retarget instead of just finding new leads?",
  alts:["Isn't finding new leads better?","Why bother with old leads?","New vs old leads?"],
  shortA:"Because warm leads convert far more cheaply — they already know you. Do both, but don't ignore the warm ones.",
  fullA:"Because warm leads are the cheapest jobs you'll ever win. Someone who already visited your site or got a quote is way more likely to hire you than a total stranger, and it costs a fraction to reach them. Finding new leads matters too, but ignoring the warm ones is like letting fish off the hook. The smart play is both, with re-marketing squeezing more out of every dollar you already spent. Are you spending to get leads but not following up?",
  intent:"Solution-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"Are you following up on the leads you already paid for?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["why retarget","warm leads","value","strategy"], notes:"Educational reframe."
},
{
  id:"REM-006", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"Where will my re-marketing ads show up?",
  alts:["Where do retargeting ads appear?","What sites show my ads?","Retargeting placements?"],
  shortA:"Across Google's network, Facebook, Instagram, and YouTube — wherever your past visitors browse.",
  fullA:"They follow your past visitors around the web — across Google's display network, Facebook, Instagram, YouTube, and news and weather sites they browse. It keeps your name in front of them so when they're ready, you're the one they call. Paired with follow-up emails and texts, it's hard to forget you. Do most of your customers hang out on Facebook, or are they more search-driven?",
  intent:"Solution-Aware", emotion:"Curious", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"Where do your customers spend time online?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["placements","where ads show","display network","channels"], notes:"Detail question."
},
{
  id:"REM-007", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"Will re-marketing annoy my customers?",
  alts:["Is retargeting creepy?","Won't ads following people be annoying?","Too aggressive?"],
  shortA:"Not when it's done right — we cap how often ads show and keep the message helpful, not pushy.",
  fullA:"It can if it's done badly — everyone's seen an ad chase them for months. We do it right: we cap how often your ads appear, stop showing them after someone books, and keep the message helpful, like a friendly reminder or a seasonal offer. Done well, it just keeps you top of mind. We'd rather be remembered than annoying. Sound reasonable?",
  intent:"Vendor-Aware", emotion:"Skeptical", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"Want to see how we keep it tasteful?",
  leadValue:"Low", escalate:false, escalateReason:"",
  tags:["annoying","frequency cap","creepy","tasteful"], notes:"Address concern about overexposure."
},
{
  id:"REM-008", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"Can you email or text my old leads for me?",
  alts:["Email campaigns to old leads?","Text past customers?","Follow-up campaigns?"],
  shortA:"Yes — we run email and text campaigns to re-engage old leads and past customers, often automated.",
  fullA:"Yes. We run email and text campaigns that reconnect with old leads and past customers — a seasonal offer, a 'still need that fixed?' nudge, or a check-in. It can be automated through our software so it runs itself once it's set up. This is one of the fastest ways to get jobs from money you've already spent. Do you have their emails and phone numbers on a list somewhere?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"Do you have contact info for past leads?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["email","text","campaigns","database"], notes:"Cross-link Software/AI. Capture list."
},
{
  id:"REM-009", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"How soon does re-marketing start working?",
  alts:["Retargeting timeline?","When do I see results?","How fast is remarketing?"],
  shortA:"Fairly fast — if you have web traffic or an old lead list, campaigns can bring jobs back within weeks.",
  fullA:"Re-marketing tends to work fairly quickly, because you're reaching people who already know you. If you've got existing website traffic or a list of old leads, we can often start bringing jobs back within a few weeks. The bigger your pool of past visitors and leads, the faster it ramps. Do you have decent website traffic or a solid old-lead list already?",
  intent:"Solution-Aware", emotion:"Impatient", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"Do you have web traffic or an old lead list to start with?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["timeline","fast","results","speed"], notes:"Capture existing traffic/list."
},
{
  id:"REM-010", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"Do I need a lot of website traffic for re-marketing to work?",
  alts:["Does retargeting need traffic?","Too small an audience?","Not enough visitors?"],
  shortA:"Some helps, but we can also re-market to your customer list — so even low-traffic businesses benefit.",
  fullA:"Web traffic helps, but it's not the only fuel. If your site traffic is light, we can re-market to your customer and old-lead lists through email, text, and matched audiences on social. So even a business without a ton of website visitors can win back jobs. If traffic is thin, that's also a sign SEO or ads could help feed the top of the funnel. Where are you getting most of your leads now?",
  intent:"Solution-Aware", emotion:"Uncertain", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"Where do most of your leads come from now?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["traffic","audience size","small business","lists"], notes:"May cross-sell SEO/Ads if funnel is thin."
},
{
  id:"REM-011", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"Can re-marketing promote seasonal services?",
  alts:["Seasonal reminders?","Push seasonal offers?","Remind customers for seasonal work?"],
  shortA:"Yes — perfect for it. Remind past customers about tune-ups, seasonal prep, and recurring service at the right time.",
  fullA:"It's perfect for that. We time campaigns to your seasons — AC tune-ups before summer, furnace checks before winter, gutter cleaning in fall, spring landscaping — reminding past customers exactly when they need you. It turns one-time jobs into a predictable seasonal rhythm of repeat work. What seasonal services do you offer?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"What seasonal or recurring services do you offer?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["seasonal","reminders","recurring","timing"], notes:"Great fit for HVAC, landscaping, pest, etc."
},
{
  id:"REM-012", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"Does re-marketing work with my other marketing?",
  alts:["Does retargeting fit with SEO and ads?","How does it combine?","Part of the whole plan?"],
  shortA:"Yes — it's the closer. SEO and ads bring people in; re-marketing catches the ones who didn't book.",
  fullA:"It's the closer of the whole system. Your website, SEO, and ads bring people in, but not everyone books the first time. Re-marketing catches those who slipped away and brings them back, so more of the traffic you already paid for turns into jobs. It makes every other service work harder. Are you running any marketing now that's bringing visitors who don't convert?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"Is traffic coming in but not converting?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["integration","funnel","closer","strategy"], notes:"Position within full-funnel bundle."
},
{
  id:"REM-013", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"Is re-marketing worth it for a small trade business?",
  alts:["Worth it for a small crew?","Too small for retargeting?","Small business remarketing?"],
  shortA:"Yes — small businesses can't afford to waste leads, and re-marketing squeezes jobs from ones you already have.",
  fullA:"Especially for a small business. When every job matters, you can't afford to let a warm lead slip away. Re-marketing gets more out of the leads and customers you already have without a big new-ad budget, which is exactly what a small crew needs — maximum return on limited spend. It's efficient, not expensive. Are you feeling like leads are slipping through the cracks?",
  intent:"Solution-Aware", emotion:"Uncertain", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"Do leads feel like they're slipping away?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["small business","worth it","efficient","roi"], notes:"Reframe for small operators."
},
{
  id:"REM-014", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"How do you track if re-marketing brought in a job?",
  alts:["Can you prove retargeting works?","How do you measure remarketing?","Attribution for follow-up?"],
  shortA:"We track which returning leads book, so you see the jobs and revenue re-marketing brings back.",
  fullA:"We track it through call tracking, conversion tracking, and your CRM, so we can see when a lead who'd gone quiet comes back and books after seeing an ad or getting a follow-up. You get reporting on the jobs and revenue re-marketing recovers, not just guesses. If it's not bringing jobs, we adjust. Would a simple monthly recap of recovered jobs work for you?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Request a Quote", relatedService:"Re-marketing",
  followUp:"Want a monthly recap of recovered jobs?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["tracking","attribution","results","reporting"], notes:"Reporting reassurance."
},
{
  id:"REM-015", mainCat:"Services", serviceCat:"Re-marketing", tradeCat:"All Trades", trade:"All",
  q:"I have a big list of old customers doing nothing. Can you help?",
  alts:["My customer list is just sitting there","Thousands of old contacts unused","Dead customer list"],
  shortA:"Absolutely — that list is gold. We can wake it up with re-marketing and turn it into repeat jobs fast.",
  fullA:"That list is money sitting on the shelf. Those people already know and trust you, so it's one of the fastest wins in marketing. We can wake it up with a re-marketing campaign — a strong offer, a check-in, a seasonal reminder — and turn dormant contacts back into paying jobs. This is worth talking through directly. Want me to connect you with our team to map it out?",
  intent:"Ready to Buy", emotion:"Motivated", cta:"Contact Us", relatedService:"Re-marketing",
  followUp:"About how many contacts are on that list?",
  leadValue:"High", escalate:true, escalateReason:"Motivated owner with an existing list and clear intent — a hot, ready-to-buy lead; route to a human to close.",
  tags:["big list","dormant","opportunity","hot lead"], notes:"Hot lead. Escalate to human."
},

/* ═══════════════ COACHING ═══════════════ */
{
  id:"COA-001", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"Do you offer business coaching for trades?",
  alts:["Do you coach trade owners?","Is there coaching?","Can you coach my business?"],
  shortA:"Yes — we coach trade owners on marketing, sales, pricing, and growth, tailored to the trades.",
  fullA:"Yes, coaching is one of our services. We work one-on-one with trade owners on the business side — marketing, sales, pricing, hiring, and growth — with advice built for the trades, not generic corporate stuff. A lot of great tradespeople are stuck because nobody taught them the business game. Are you looking to grow, or feeling stuck on something specific?",
  intent:"Problem-Aware", emotion:"Curious", cta:"Contact Us", relatedService:"Coaching",
  followUp:"Are you trying to grow or fix something specific?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["coaching","business coaching","growth","mentoring"], notes:"Core service intro. Capture goal."
},
{
  id:"COA-002", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"What does the coaching cover?",
  alts:["What do you coach on?","Coaching topics?","What's included in coaching?"],
  shortA:"Marketing, sales, pricing, hiring, systems, and scaling — the business skills that grow a trade company.",
  fullA:"We cover the business skills that most tradespeople never got taught: marketing that brings leads, sales and closing quotes, pricing so you actually make money, hiring and keeping good crew, and building systems so the business runs without you doing everything. It's practical and tailored to where you are. What part of the business feels like the biggest bottleneck right now?",
  intent:"Solution-Aware", emotion:"Interested", cta:"Contact Us", relatedService:"Coaching",
  followUp:"What's your biggest business bottleneck?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["topics","scope","pricing","sales","hiring"], notes:"Capture bottleneck."
},
{
  id:"COA-003", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"How much does coaching cost?",
  alts:["Coaching pricing?","What do you charge for coaching?","Cost of business coaching?"],
  shortA:"Depends on the format and how often we meet. We'll match it to your goals and budget — reach out for a quote.",
  fullA:"It depends on the format — one-on-one versus group, and how often we meet. We'll match it to your goals and what makes sense for your budget. Think of it as investing in the skills that pay you back for years, not a monthly bill. Best next step is a quick chat about where you're at. Want me to connect you with our team?",
  intent:"Vendor-Aware", emotion:"Cautious", cta:"Contact Us", relatedService:"Coaching",
  followUp:"Are you looking for one-on-one or group coaching?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["pricing","cost","investment","budget"], notes:"Coaching pricing is consultative — lean to human."
},
{
  id:"COA-004", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"Is coaching one-on-one or in a group?",
  alts:["Group or individual coaching?","Do I get personal coaching?","Solo or group?"],
  shortA:"We offer both — one-on-one for personalized help, group for shared learning and a lower price point.",
  fullA:"We can do both. One-on-one is personalized to your exact business and moves fastest. Group coaching costs less and adds the bonus of learning alongside other trade owners facing the same stuff, which a lot of guys find motivating. We'll help you pick based on your goals and budget. Do you prefer focused one-on-one time or learning with peers?",
  intent:"Solution-Aware", emotion:"Curious", cta:"Contact Us", relatedService:"Coaching",
  followUp:"One-on-one or learning alongside peers?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["one-on-one","group","format","individual"], notes:"Capture format preference."
},
{
  id:"COA-005", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"Can coaching help me if I'm not good at marketing?",
  alts:["Help me learn marketing?","I don't get marketing, can you teach me?","Marketing coaching?"],
  shortA:"Yes — we teach marketing in plain language so you understand what works, whether you DIY or hire it out.",
  fullA:"Definitely. Most trade owners weren't taught marketing, and that's fine — we break it down in plain language so you actually get what drives leads. Whether you want to do more yourself or just understand what you're paying for, coaching gives you that clarity so you stop wasting money on stuff that doesn't work. Have you been burned by marketing you didn't understand before?",
  intent:"Problem-Aware", emotion:"Uncertain", cta:"Contact Us", relatedService:"Coaching",
  followUp:"Have you wasted money on marketing before?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["marketing help","learn","clarity","beginner"], notes:"May cross-sell done-for-you services too."
},
{
  id:"COA-006", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"I'm working nonstop but not making money. Can coaching fix that?",
  alts:["Busy but broke","Working hard, no profit","Lots of jobs, no money"],
  shortA:"Yes — that's a pricing and systems problem, and it's exactly what coaching tackles first.",
  fullA:"That's one of the most common traps in the trades, and yes, it's fixable. Usually it's underpricing, chasing the wrong jobs, or doing everything yourself with no systems. Coaching digs into your numbers, fixes your pricing, and builds systems so you make real money instead of just staying busy. Working harder isn't the answer; working smarter is. What does a typical week look like for you right now?",
  intent:"Problem-Aware", emotion:"Frustrated", cta:"Contact Us", relatedService:"Coaching",
  followUp:"Is it more a pricing problem or a too-much-to-do problem?",
  leadValue:"High", escalate:true, escalateReason:"Owner is frustrated and describing a serious business-health problem — a coach/human can have the honest, in-depth conversation this needs.",
  tags:["busy but broke","pricing","profit","systems"], notes:"Emotional + high-value. Escalate to human coach."
},
{
  id:"COA-007", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"Can you help me hire and keep good workers?",
  alts:["Help with hiring?","How do I keep crew?","Staffing coaching?"],
  shortA:"Yes — hiring and retention is a core coaching topic, from finding good people to keeping them.",
  fullA:"Yes, that's a big one we coach on. Finding, hiring, and keeping good crew is one of the hardest parts of running a trade business, and it's what caps a lot of guys from growing. We help you build a hiring process, pay and culture that keep people, and systems so you're not doing everyone's job. Are you struggling to find people, keep them, or both?",
  intent:"Problem-Aware", emotion:"Frustrated", cta:"Contact Us", relatedService:"Coaching",
  followUp:"Is finding people or keeping them the bigger issue?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["hiring","retention","staffing","crew"], notes:"Common growth blocker. Capture specifics."
},
{
  id:"COA-008", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"Do you help with pricing my jobs right?",
  alts:["How should I price?","Am I charging enough?","Pricing help?"],
  shortA:"Yes — pricing is where most trades lose money, and it's one of the first things we fix in coaching.",
  fullA:"Yes, and honestly it's where we start with a lot of owners, because underpricing is the silent killer in the trades. We help you know your real costs, price for profit instead of guessing, and quote with confidence so you stop leaving money on the table or winning jobs that lose you money. Do you feel like you might be undercharging?",
  intent:"Problem-Aware", emotion:"Uncertain", cta:"Contact Us", relatedService:"Coaching",
  followUp:"Do you suspect you're undercharging?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["pricing","profit","quoting","margins"], notes:"High-value coaching topic."
},
{
  id:"COA-009", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"How is coaching different from just hiring you to do the marketing?",
  alts:["Coaching vs done-for-you?","Why coach instead of hire you?","DIY coaching or full service?"],
  shortA:"Coaching teaches you to run it; done-for-you means we handle it. Some owners want both.",
  fullA:"Good question. With our done-for-you services, we run the marketing and you focus on the work. With coaching, we teach you how it all works so you can steer the ship, make smart calls, and grow with confidence. Some owners want us to just handle it, some want to learn, and plenty want both — we run the marketing while coaching sharpens the business. Which fits where you're at?",
  intent:"Solution-Aware", emotion:"Curious", cta:"Contact Us", relatedService:"Coaching",
  followUp:"Do you want to learn it, hand it off, or both?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["coaching vs done-for-you","difference","comparison","hybrid"], notes:"Clarify positioning. Bundle opportunity."
},
{
  id:"COA-010", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"Will coaching work for my specific trade?",
  alts:["Do you coach my type of business?","Coaching for roofers/plumbers/etc?","Is it relevant to my trade?"],
  shortA:"Yes — we only work with trades, so the coaching is built around how home-service businesses actually run.",
  fullA:"Yes. We only work with trade and home-service businesses, so the coaching is grounded in how your world actually works — seasons, emergency calls, quoting, crews, and local competition — not generic business-school theory. The core principles apply across trades, and we tailor it to yours. What trade are you in?",
  intent:"Solution-Aware", emotion:"Curious", cta:"Contact Us", relatedService:"Coaching",
  followUp:"What trade are you in?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["trade specific","relevant","niche","fit"], notes:"Capture trade."
},
{
  id:"COA-011", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"I want to grow but I'm scared to scale. Can you guide me?",
  alts:["How do I scale safely?","Afraid to grow my business","Guide me through growth?"],
  shortA:"Yes — we help you scale on purpose, with systems and cash flow in place so growth doesn't break you.",
  fullA:"That fear is smart, actually — plenty of trades grow too fast and blow up. We help you scale on purpose: build systems, get your pricing and cash flow right, and add crew or trucks at the right time so growth strengthens the business instead of breaking it. Steady, controlled growth beats a risky leap. What does 'grown' look like for you — more crews, more revenue, more freedom?",
  intent:"Problem-Aware", emotion:"Anxious", cta:"Contact Us", relatedService:"Coaching",
  followUp:"What does success look like for you in a year?",
  leadValue:"High", escalate:true, escalateReason:"Owner is anxious and thinking about a major growth decision — a real coach/human conversation serves this far better than the bot.",
  tags:["scaling","growth","fear","guidance"], notes:"Emotional + high-value. Escalate to human."
},
{
  id:"COA-012", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"How often would we meet for coaching?",
  alts:["Coaching schedule?","How many sessions?","Meeting frequency for coaching?"],
  shortA:"Depends on the plan — usually regular sessions (weekly or monthly) with support in between.",
  fullA:"It depends on the plan you choose. Many owners do a regular rhythm — weekly or every couple weeks when actively fixing things, easing to monthly once systems are running — with support between sessions. We set a cadence that fits your schedule, since you've got jobs to run. Would frequent hands-on sessions or a lighter check-in suit you better?",
  intent:"Vendor-Aware", emotion:"Practical", cta:"Contact Us", relatedService:"Coaching",
  followUp:"Do you want frequent sessions or lighter check-ins?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["frequency","schedule","sessions","cadence"], notes:"Detail question."
},
{
  id:"COA-013", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"I don't have time for coaching. Is it worth it?",
  alts:["Too busy for coaching?","No time to be coached","Is coaching worth the time?"],
  shortA:"The busyness is often the problem coaching fixes — a few hours a month to build systems that free up your week.",
  fullA:"Here's the thing — being slammed with no time is usually the exact problem coaching solves. It's a few hours a month invested in building systems and smarter pricing that give you back whole days down the road. Staying too busy to work on the business is how owners stay stuck for years. What's eating most of your time right now?",
  intent:"Problem-Aware", emotion:"Overwhelmed", cta:"Contact Us", relatedService:"Coaching",
  followUp:"What's eating up most of your time?",
  leadValue:"Medium", escalate:false, escalateReason:"",
  tags:["no time","busy","worth it","objection"], notes:"Reframe busyness as the problem coaching solves."
},
{
  id:"COA-014", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"Who actually does the coaching?",
  alts:["Who's the coach?","Do you have experience with trades?","Are your coaches legit?"],
  shortA:"Coaches who know the trades and marketing — I can connect you to learn about their background and fit.",
  fullA:"Our coaching is done by people who understand both marketing and how trade businesses actually run — no ivory-tower theory. The best way to judge fit is a quick conversation to hear their approach and see if you click, since coaching is personal. Want me to set up a call so you can feel it out? What's your name and the best way to reach you?",
  intent:"Vendor-Aware", emotion:"Evaluating", cta:"Contact Us", relatedService:"Coaching",
  followUp:"Can I grab your name and number to set up a call?",
  leadValue:"High", escalate:true, escalateReason:"Evaluating the coach personally — fit is best judged human-to-human; route to schedule a call.",
  tags:["who coaches","experience","credentials","fit"], notes:"Escalate to human for the personal fit conversation."
},
{
  id:"COA-015", mainCat:"Services", serviceCat:"Coaching", tradeCat:"All Trades", trade:"All",
  q:"Can coaching help me eventually step back from the day-to-day?",
  alts:["Build a business that runs without me?","Work less in my business?","Owner freedom?"],
  shortA:"Yes — that's a top coaching goal: build systems and a team so the business runs without you doing everything.",
  fullA:"That's the dream we help a lot of owners chase. By building systems, training crew, and getting the right people and processes in place, you go from being the business to owning the business — able to take a day off without everything falling apart. It takes work to get there, but it's absolutely doable with a plan. Do you want more freedom, more income, or to eventually sell one day?",
  intent:"Solution-Aware", emotion:"Hopeful", cta:"Contact Us", relatedService:"Coaching",
  followUp:"Are you after more freedom, more income, or an exit?",
  leadValue:"High", escalate:false, escalateReason:"",
  tags:["freedom","exit","systems","step back"], notes:"Aspirational. Capture long-term goal."
}

];
