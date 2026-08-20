// Shared quiz data: marketing profile gate, probing questions, generic bank,
// and the assembler that builds a full 20-question quiz for any trade.
window.QUIZ_CONFIG = {
  // Seconds allowed per trivia question (timed so players can't look answers up).
  timePerQuestion: 15,
  // Trivia questions total per quiz.
  totalTrivia: 20,
  // Points: base for a correct answer + speed bonus (remaining seconds * multiplier).
  basePoints: 100,
  speedMultiplier: 10
};

// The 6-question marketing profile shown after question 10. Multiple choice.
// These are lead-qualification questions, not scored.
window.MARKETING_PROFILE = {
  intro: "Quick gut check on your marketing. No wrong answers — this just helps us help you.",
  questions: [
    { id:"website", q:"Do you have a website right now?", choices:["Yes, and I like it","Yes, but it's outdated","No website yet","Not sure who runs it"] },
    { id:"ppc", q:"Are you running paid ads (Google / Facebook PPC)?", choices:["Yes, actively","Tried it, stopped","Never have","What's PPC?"] },
    { id:"reviews", q:"Are you coaching yourself or your crew to earn more 5-star reviews?", choices:["Yes, it's a system","Sometimes","No, but I want to","No idea how"] },
    { id:"branding", q:"Are you doing serious branding (logo, wraps, consistent look)?", choices:["Yes, dialed in","Bits and pieces","Not really","Just starting out"] },
    { id:"startup", q:"Where are you in your business journey?", choices:["Established & growing","A few years in","Brand new","Don't own one yet — looking into it"] },
    { id:"gbp", q:"Do you spend about an hour a week on your Google Business Profile?", choices:["Yes, every week","Now and then","Never touch it","Don't have one"] }
  ]
};

// Probing questions about their business, inserted after each block of 5.
// Open-ended (short text) or choice. Used to warm the lead. Not scored.
window.PROBES = [
  { id:"p_years", type:"choice", q:"How long have you been in the trade?", choices:["Under 2 years","2–5 years","5–15 years","15+ years"] },
  { id:"p_crew", type:"choice", q:"How big is your crew right now?", choices:["Just me","2–4","5–10","10+"] },
  { id:"p_goal", type:"choice", q:"What's your #1 goal for the next year?", choices:["More leads / calls","Bigger jobs","Hire & grow the crew","Work less, earn more"] },
  { id:"p_challenge", type:"text", q:"What's the biggest thing holding your business back right now?", placeholder:"Type a few words…" }
];

// Final ask before results: permission to call.
window.FINAL_ASK = {
  headline: "One last thing.",
  body: "We'd love to show you exactly what Toughjobs can do for your business — real websites, real rankings, real calls. Mind if we give you a quick call to talk through your marketing goals? No pressure, no hard sell.",
  yes: "Yes — call me, let's talk",
  no: "Not right now, just show my score",
  phoneLabel: "Best number to reach you",
  timeLabel: "Best time to call"
};

// Generic blue-collar / small-business trivia used to top every trade up to 20.
window.GENERIC_BANK = [
  { q:"What's the fastest way to lose a customer's trust?", choices:["Not showing up on time","Wearing a uniform","Sending a quote","Answering the phone"], answer:0, fact:"Being late or a no-show is the #1 trust killer in the trades." },
  { q:"What review score do most customers filter for on Google?", choices:["4 stars and up","2 stars","1 star","Any"], answer:0, fact:"Most searchers ignore businesses under 4 stars — reviews are money." },
  { q:"What's the best time to ask a happy customer for a review?", choices:["Right after the job","A month later","Never","At tax time"], answer:0, fact:"Ask while the good feeling is fresh — same-day requests convert best." },
  { q:"What does 'NAP consistency' mean in local marketing?", choices:["Name, Address, Phone match everywhere","Nap schedule","New ad plan","None"], answer:0, fact:"Matching Name/Address/Phone across the web boosts local search trust." },
  { q:"What's the most valuable page on a service business website?", choices:["The one that gets the call","The About page","The blog","The footer"], answer:0, fact:"If a page doesn't drive calls or forms, it's decoration." },
  { q:"What percentage of local searches happen on a phone?", choices:["Most of them","About 10%","Almost none","Half at most"], answer:0, fact:"The majority of 'near me' searches are on mobile — your site must be fast on phones." },
  { q:"What's the smartest response time to a new lead?", choices:["Within 5 minutes","Next day","Within a week","Whenever"], answer:0, fact:"Leads contacted within 5 minutes convert far more than hour-later callbacks." },
  { q:"What builds the most trust on a home-services website?", choices:["Real photos of your crew","Stock photos","Clip art","No photos"], answer:0, fact:"Real job-site and crew photos beat stock images every time." },
  { q:"What's a 'lead magnet'?", choices:["A free offer that gets contact info","A tow hook","A magnet sign","A GPS"], answer:0, fact:"A free quote, guide, or checklist that earns you the customer's contact info." },
  { q:"Why does a Google Business Profile matter so much?", choices:["It powers the map pack","It's just decoration","Only for big firms","It doesn't"], answer:0, fact:"The GBP feeds the Google map pack — where most local calls come from." },
  { q:"What's the danger of the cheapest bid?", choices:["It can signal low quality","It always wins","It builds trust","It's illegal"], answer:0, fact:"Racing to the bottom on price attracts the worst customers and thin margins." },
  { q:"What's 'word of mouth' in the digital age?", choices:["Online reviews & referrals","Radio ads","Billboards","Flyers"], answer:0, fact:"Reviews and shared recommendations online are today's word of mouth." },
  { q:"What's the point of a truck wrap?", choices:["Rolling billboard","Faster driving","Better mileage","Legal requirement"], answer:0, fact:"A wrapped truck earns thousands of local impressions a day for a one-time cost." },
  { q:"What should every job-site sign include?", choices:["Company name and number","A joke","Nothing","Just a logo"], answer:0, fact:"Name plus phone turns every job into free neighborhood advertising." },
  { q:"What's the best way to beat a bigger competitor locally?", choices:["Own your niche and reviews","Undercut price","Copy them","Give up"], answer:0, fact:"Deep local reviews and a clear niche beat a franchise's ad budget." },
  { q:"What's 'remarketing'?", choices:["Ads shown to past visitors","New logos","Cold calls","Radio spots"], answer:0, fact:"Remarketing follows up with people who already visited your site — cheap, high-converting." },
  { q:"What number should be easy to find on every page?", choices:["Your phone number","Your license","Your address only","Your email only"], answer:0, fact:"A visible, tappable phone number is the simplest conversion booster there is." },
  { q:"What's the value of answering the phone live?", choices:["You win the job","Wastes time","Annoys callers","No effect"], answer:0, fact:"Most customers hire the first business that answers — voicemail loses jobs." }
];

// Assemble a full quiz for a trade slug: all trade-specific questions first,
// topped up from the generic bank, then lightly shuffled, capped at total.
window.buildQuiz = function(slug){
  var banks = window.TRADE_BANKS || {};
  var trade = (banks[slug] || []).slice();
  var generic = (window.GENERIC_BANK || []).slice();
  // shuffle helper
  function shuffle(a){ for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t; } return a; }
  shuffle(trade); shuffle(generic);
  var total = (window.QUIZ_CONFIG.totalTrivia)||20;
  var out = trade.slice(0, total);
  for (var i=0; out.length<total && i<generic.length; i++){ out.push(generic[i]); }
  // Randomize answer position per question so the correct index isn't predictable
  return out.slice(0, total).map(function(q){
    var pairs = q.choices.map(function(c,idx){ return {c:c, correct: idx===q.answer}; });
    shuffle(pairs);
    return { q:q.q, choices:pairs.map(function(p){return p.c;}), answer:pairs.findIndex(function(p){return p.correct;}), fact:q.fact };
  });
};