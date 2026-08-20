/* ==========================================================================
   Toughjobs — FAQ & Schema Generator
   Template-based 20-question SEO FAQ engine (no backend required).
   To use live AI later, wire generateWithAI() to your provider — see bottom.
   ========================================================================== */
(function () {
  "use strict";

  // ── Helpers ──────────────────────────────────────────────────────────
  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
  function titleCase(s) {
    return (s || "").replace(/\w\S*/g, function (t) {
      return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
    });
  }
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function pick(arr, n) {
    // deterministic-ish shuffle with a light random seed per generate call
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return n ? a.slice(0, n) : a;
  }

  // ── Tone closers ─────────────────────────────────────────────────────
  var TONE = {
    professional: [
      "Contact us to schedule a consultation.",
      "Reach out and we'll assess your specific situation.",
      "Get in touch for a detailed, written estimate."
    ],
    friendly: [
      "Give us a call — we're always happy to help.",
      "Have a question? We'd love to hear from you.",
      "Reach out anytime and we'll point you the right way."
    ],
    trust: [
      "We'll walk you through every step so you know exactly what to expect.",
      "No surprises — we explain the work before we start.",
      "We treat your home and budget with the respect they deserve."
    ],
    sales: [
      "Call today for a fast, no-obligation quote.",
      "Book now and get your project moving this week.",
      "Reach out today and we'll get you scheduled fast."
    ],
    educational: [
      "Knowing this upfront helps you make a confident decision.",
      "Understanding the details now saves you money later.",
      "The more you know going in, the smoother the project goes."
    ]
  };

  // ── Question/answer template bank ────────────────────────────────────
  // Each entry: {cat, q(ctx), a(ctx)}  — ctx has trade, tradeC, kw, kwC, city, biz, here, prov, closer
  var BANK = [
    // COST
    { cat: "cost", q: function (c) { return "How much does " + c.kw + " typically cost?"; },
      a: function (c) { return "Pricing for " + c.kw + " depends on the size of the job, the materials involved, and the condition of what we're working with" + c.here + ". Most " + c.trade + " work falls into a clear range once we've seen the details. The best way to get an accurate number is a quick assessment — that way you get a real figure instead of a guess. " + c.closer; } },
    { cat: "cost", q: function (c) { return "Do you offer free estimates for " + c.trade + " work?"; },
      a: function (c) { return "Yes. " + c.prov + " provide upfront estimates so you know the cost before any work begins. We look at the scope, explain what's included, and give you a written figure with no pressure. That way you can compare options and budget with confidence. " + c.closer; } },
    { cat: "cost", q: function (c) { return "What affects the price of " + c.trade + " services?"; },
      a: function (c) { return "The main factors are the size and complexity of the job, the materials you choose, how accessible the work area is, and whether there are any hidden problems to fix first. Emergency or after-hours work can also cost more. We break all of this down in your estimate so nothing is a surprise. " + c.closer; } },

    // EMERGENCY / TIMING
    { cat: "timing", q: function (c) { return "How fast can you respond for " + c.kw + "?"; },
      a: function (c) { return "Response time matters, especially for urgent " + c.trade + " problems" + c.here + ". We aim to reach you the same day for emergencies and to schedule non-urgent jobs within a few days. When you call, tell us what's happening and we'll give you a realistic arrival window. " + c.closer; } },
    { cat: "timing", q: function (c) { return "Do you offer emergency or after-hours " + c.trade + " service?"; },
      a: function (c) { return "Yes — some problems can't wait for business hours. If you have an urgent " + c.trade + " issue" + c.here + ", call us and we'll let you know how quickly we can get to you. Acting fast often prevents a small problem from turning into an expensive one. " + c.closer; } },
    { cat: "timing", q: function (c) { return "How long does a typical " + c.trade + " job take?"; },
      a: function (c) { return "Most standard jobs are finished in a single visit, while larger projects may take a few days. Timing depends on the scope, materials, and any prep work needed. We give you a clear timeline with your estimate and keep you updated if anything changes along the way. " + c.closer; } },

    // TRUST
    { cat: "trust", q: function (c) { return "Are you licensed and insured?"; },
      a: function (c) { return "Yes. " + c.prov + " are properly licensed and carry insurance, which protects both you and your property during the job. Hiring a licensed " + c.trade + " means the work meets local codes and is done to a professional standard. Always ask any contractor for proof — we're glad to provide ours. " + c.closer; } },
    { cat: "trust", q: function (c) { return "Why should I hire a professional " + c.trade + " instead of doing it myself?"; },
      a: function (c) { return "A professional brings the right tools, training, and experience to do the job safely and correctly the first time. DIY mistakes often cost more to fix than hiring a pro would have in the first place. For " + c.kw + ", the peace of mind and lasting results are worth it. " + c.closer; } },
    { cat: "trust", q: function (c) { return "Can I see reviews or references before hiring?"; },
      a: function (c) { return "Absolutely. Good work speaks for itself, and " + c.prov + " are happy to share reviews and references from past customers" + c.here + ". Reading about other people's experiences is one of the best ways to feel confident before you hire. " + c.closer; } },

    // LOCAL SEO / NEAR ME
    { cat: "local", q: function (c) { return "Do you serve " + (c.city || "my area") + "?"; },
      a: function (c) { return (c.city ? "Yes, we proudly serve " + c.city + " and the surrounding communities." : "We serve a wide local service area.") + " Working with a local " + c.trade + " means faster response times and someone who knows the area's homes, weather, and common issues. " + c.closer; } },
    { cat: "local", q: function (c) { return "How do I find a reliable \"" + c.trade + " near me\"?"; },
      a: function (c) { return "Start by checking that they're licensed, insured, and well reviewed" + c.here + ". Look for clear pricing, honest communication, and real local references. A trustworthy " + c.trade + " will answer your questions before asking for a commitment. " + c.closer; } },
    { cat: "local", q: function (c) { return "What areas do you cover for " + c.trade + " work?"; },
      a: function (c) { return (c.city ? "We're based near " + c.city + " and cover the surrounding towns and neighborhoods." : "We cover a broad local region.") + " If you're not sure whether you're in our service area, just reach out with your location and we'll let you know right away. " + c.closer; } },

    // PROCESS
    { cat: "process", q: function (c) { return "What happens during a " + c.trade + " service call?"; },
      a: function (c) { return "First we listen to what's going on and inspect the situation" + c.here + ". Then we explain what we found, walk you through your options, and give you a clear price before any work starts. Once you approve, we complete the job cleanly and make sure you're satisfied before we leave. " + c.closer; } },
    { cat: "process", q: function (c) { return "How should I prepare before you arrive?"; },
      a: function (c) { return "A little prep helps the job go faster. Clear the work area if you can, keep pets secured, and make a note of any specific concerns. For " + c.kw + ", it also helps to know when the problem started. Don't worry if you're not sure — we'll handle the rest when we get there. " + c.closer; } },
    { cat: "process", q: function (c) { return "Do I need to be home during the " + c.trade + " work?"; },
      a: function (c) { return "For most jobs it helps to have you there at the start so we can confirm the plan and answer questions. Depending on the work, you may not need to stay for the whole visit. We'll agree on the details when we schedule so everything runs smoothly. " + c.closer; } },

    // WARRANTY / GUARANTEE
    { cat: "warranty", q: function (c) { return "Do you guarantee your " + c.trade + " work?"; },
      a: function (c) { return "We stand behind the work we do. Quality " + c.trade + " service should last, and we want you to be confident in the results. Ask us about the specific workmanship and material coverage that applies to your job so you know exactly what's protected. " + c.closer; } },
    { cat: "warranty", q: function (c) { return "What if something goes wrong after the job is done?"; },
      a: function (c) { return "If an issue comes up that's related to our work, we'll make it right. Good " + c.trade + " companies don't disappear after the invoice is paid" + c.here + ". Keep your paperwork, give us a call, and we'll take care of you. " + c.closer; } },

    // COMPARISON
    { cat: "compare", q: function (c) { return "Should I repair or replace it?"; },
      a: function (c) { return "It depends on the age, condition, and cost of the item versus a replacement. Sometimes a repair buys you years; other times replacing is the smarter long-term move. A professional " + c.trade + " can look at your situation and give you an honest recommendation instead of just selling you the bigger job. " + c.closer; } },
    { cat: "compare", q: function (c) { return "What's the difference between a cheap quote and a quality " + c.trade + " job?"; },
      a: function (c) { return "The lowest bid often skips important steps, uses cheaper materials, or leaves out details that matter later. A fair quote reflects proper materials, licensed labor, and work that lasts. For " + c.kw + ", paying a little more for it done right usually costs less over time. " + c.closer; } },

    // SERVICE / PROFESSION-SPECIFIC
    { cat: "service", q: function (c) { return "What " + c.trade + " services do you offer?"; },
      a: function (c) { return (c.biz ? c.biz + " handles" : "We handle") + " a full range of " + c.trade + " work" + c.here + ", from routine service to larger projects. If you're searching for " + c.kw + ", there's a good chance it's something we do every day. Tell us what you need and we'll confirm we can help. " + c.closer; } },
    { cat: "service", q: function (c) { return "How do I know if I need " + c.trade + " service?"; },
      a: function (c) { return "Common signs include problems that keep coming back, unexpected costs, or something that just isn't working the way it should. When in doubt, it's better to ask early — catching an issue sooner usually means a smaller, cheaper fix. " + c.closer; } },
    { cat: "service", q: function (c) { return "How often should I schedule " + c.trade + " maintenance?"; },
      a: function (c) { return "Regular maintenance depends on how much use it gets and its age, but a yearly check is a smart baseline for most homes. Staying ahead of problems keeps things running longer and helps you avoid emergency calls down the road. " + c.closer; } },
    { cat: "service", q: function (c) { return "Can you handle both small repairs and large " + c.trade + " projects?"; },
      a: function (c) { return "Yes. Whether it's a quick fix or a full project, we scale the work to what you actually need" + c.here + ". No job is too small, and larger projects get the planning and care they require. " + c.closer; } }
  ];

  // ── Core generation ──────────────────────────────────────────────────
  var state = { items: [], ctx: null };

  function buildContext() {
    var trade = (document.getElementById("f-trade").value || "").trim().toLowerCase() || "contractor";
    var kw = (document.getElementById("f-keyword").value || "").trim() || trade + " services";
    var city = (document.getElementById("f-city").value || "").trim();
    var biz = (document.getElementById("f-biz").value || "").trim();
    var tone = document.getElementById("f-tone").value || "professional";
    var closers = TONE[tone] || TONE.professional;
    return {
      trade: trade,
      tradeC: titleCase(trade),
      kw: kw,
      kwC: titleCase(kw),
      city: city,
      biz: biz,
      tone: tone,
      here: city ? " in " + city : "",
      prov: biz ? biz + " and our team" : "we",
      closerPool: closers
    };
  }

  function generate() {
    var ctx = buildContext();
    state.ctx = ctx;

    // ensure category spread: take at least one from each category, then fill
    var byCat = {};
    BANK.forEach(function (t) { (byCat[t.cat] = byCat[t.cat] || []).push(t); });
    var chosen = [];
    Object.keys(byCat).forEach(function (k) {
      var shuffled = pick(byCat[k]);
      chosen.push(shuffled[0]);
    });
    // fill remaining slots up to 20 from the rest
    var used = new Set(chosen);
    var rest = pick(BANK.filter(function (t) { return !used.has(t); }));
    var i = 0;
    while (chosen.length < 20 && i < rest.length) { chosen.push(rest[i++]); }
    // if bank < 20, cycle with fresh closers
    while (chosen.length < 20) { chosen.push(BANK[chosen.length % BANK.length]); }
    chosen = pick(chosen); // final order shuffle

    state.items = chosen.slice(0, 20).map(function (t, idx) {
      var c = Object.assign({}, ctx, {
        closer: ctx.closerPool[idx % ctx.closerPool.length]
      });
      return { q: t.q(c), a: t.a(c) };
    });

    renderAll();
    document.getElementById("btn-regen").disabled = false;
    document.getElementById("btn-regen").style.opacity = "1";
  }

  // ── Renderers ────────────────────────────────────────────────────────
  function headText() {
    return "Common Questions About " + (state.ctx.kwC || "Our Services");
  }

  function renderPreview() {
    var host = document.getElementById("faq-render");
    var html = '<h2 class="faq-head">' + esc(headText()) + "</h2>";
    state.items.forEach(function (it, i) {
      html += '<div class="faq-item' + (i === 0 ? " open" : "") + '">' +
        '<button class="faq-q" type="button">' + esc(it.q) +
        '<span class="chev">+</span></button>' +
        '<div class="faq-a"><p>' + esc(it.a) + "</p></div></div>";
    });
    host.innerHTML = html;
    host.querySelectorAll(".faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.parentElement.classList.toggle("open");
      });
    });
    document.getElementById("empty-state").style.display = "none";
    document.getElementById("preview-content").style.display = "block";
  }

  // Front-end HTML string (clean, semantic, self-contained styles)
  function buildFrontEndHTML() {
    var lines = [];
    lines.push('<section class="seo-faq-section">');
    lines.push("  <h2>" + esc(headText()) + "</h2>");
    state.items.forEach(function (it) {
      lines.push('  <div class="faq-item">');
      lines.push("    <h3>" + esc(it.q) + "</h3>");
      lines.push("    <p>" + esc(it.a) + "</p>");
      lines.push("  </div>");
    });
    lines.push("</section>");
    return lines.join("\n");
  }

  // A full downloadable page with styling baked in
  function buildFullPage(credit) {
    var css =
"    .seo-faq-section{max-width:820px;margin:40px auto;padding:0 20px;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#1a2230}\n" +
"    .seo-faq-section h2{font-size:28px;line-height:1.2;margin:0 0 22px;color:#0A0F1C}\n" +
"    .seo-faq-section .faq-item{border:1px solid #e3e7ee;border-radius:10px;padding:18px 20px;margin-bottom:12px;background:#fff}\n" +
"    .seo-faq-section .faq-item h3{font-size:17px;margin:0 0 8px;color:#0A0F1C}\n" +
"    .seo-faq-section .faq-item p{font-size:15px;line-height:1.6;margin:0;color:#333b49}\n" +
"    @media(max-width:600px){.seo-faq-section h2{font-size:23px}}";
    var schema = buildSchema(credit);
    var head = credit ? "<!-- Created with Toughjobs Digital Marketing — https://www.toughjobs.org -->\n" : "";
    return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n" + head +
      "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
      "<title>" + esc(headText()) + "</title>\n<style>\n" + css + "\n</style>\n</head>\n<body>\n" +
      buildFrontEndHTML() + "\n\n<!-- FAQPage schema — safe to move into <head> -->\n" +
      '<script type="application/ld+json">\n' + schema + "\n<\/script>\n" +
      (credit ? "\n<!-- Created with Toughjobs Digital Marketing · www.toughjobs.org -->\n" : "") +
      "</body>\n</html>";
  }

  function buildSchema(credit) {
    var obj = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": state.items.map(function (it) {
        return {
          "@type": "Question",
          "name": it.q,
          "acceptedAnswer": { "@type": "Answer", "text": it.a }
        };
      })
    };
    // Credit only added to schema if user explicitly opted in — kept valid.
    if (credit) {
      obj.publisher = {
        "@type": "Organization",
        "name": "Toughjobs Digital Marketing",
        "url": "https://www.toughjobs.org"
      };
    }
    return JSON.stringify(obj, null, 2);
  }

  // naive syntax highlight for the HTML pre block
  function highlightHTML(s) {
    return esc(s)
      .replace(/(&lt;\/?)([a-z0-9]+)/gi, '$1<span class="tag">$2</span>')
      .replace(/(class|type)=(&quot;.*?&quot;)/g, '<span class="attr">$1</span>=<span class="str">$2</span>');
  }
  function highlightJSON(s) {
    return esc(s)
      .replace(/(&quot;.*?&quot;)(\s*:)/g, '<span class="key">$1</span>$2')
      .replace(/:\s*(&quot;.*?&quot;)/g, ': <span class="str">$1</span>');
  }

  function renderAll() {
    var credit = document.getElementById("f-credit").checked;
    renderPreview();
    document.getElementById("out-html").innerHTML = highlightHTML(buildFrontEndHTML());
    document.getElementById("out-schema").innerHTML = highlightJSON(buildSchema(credit));
  }

  // ── Clipboard + download ─────────────────────────────────────────────
  function toast(msg) {
    var t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }
  function copy(text, label) {
    navigator.clipboard.writeText(text).then(function () {
      toast((label || "Copied") + " to clipboard");
    }).catch(function () {
      // fallback
      var ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); toast((label || "Copied") + " to clipboard"); }
      finally { document.body.removeChild(ta); }
    });
  }
  function download(filename, text, mime) {
    var blob = new Blob([text], { type: mime || "text/plain" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 500);
  }
  function slug() {
    return ((state.ctx && state.ctx.trade) || "faq").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  }
  function creditFooter() {
    return "\n\n———\nCreated with Toughjobs Digital Marketing\nwww.toughjobs.org\nHelping home service businesses build stronger websites, SEO, and digital marketing systems.\n";
  }

  function guard() {
    if (!state.items.length) { toast("Generate your FAQ first"); return false; }
    return true;
  }

  // ── Wire up UI ───────────────────────────────────────────────────────
  function initTabs() {
    document.querySelectorAll(".tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        document.querySelectorAll(".tab").forEach(function (t) { t.classList.remove("active"); });
        document.querySelectorAll(".panel").forEach(function (p) { p.classList.remove("active"); });
        tab.classList.add("active");
        document.querySelector('.panel[data-panel="' + tab.dataset.tab + '"]').classList.add("active");
      });
    });
  }

  function init() {
    initTabs();

    document.getElementById("btn-generate").addEventListener("click", function () {
      var trade = document.getElementById("f-trade").value.trim();
      var kw = document.getElementById("f-keyword").value.trim();
      if (!trade || !kw) { toast("Enter a trade and target keyword"); return; }
      generate();
    });
    document.getElementById("btn-regen").addEventListener("click", generate);

    // re-render code panels if credit toggled after generating
    document.getElementById("f-credit").addEventListener("change", function () {
      if (state.items.length) renderAll();
    });

    document.getElementById("copy-html").addEventListener("click", function () {
      if (!guard()) return; copy(buildFrontEndHTML(), "HTML");
    });
    document.getElementById("copy-schema").addEventListener("click", function () {
      if (!guard()) return;
      copy('<script type="application/ld+json">\n' + buildSchema(document.getElementById("f-credit").checked) + "\n<\/script>", "Schema");
    });

    function dlHtml() {
      if (!guard()) return;
      var credit = document.getElementById("f-credit").checked;
      download(slug() + "-faq.html", buildFullPage(credit), "text/html");
      if (credit) download("created-by.txt", ("Created with Toughjobs Digital Marketing\nwww.toughjobs.org" + creditFooter()).trim() + "\n", "text/plain");
    }
    document.getElementById("dl-html").addEventListener("click", dlHtml);
    document.getElementById("dl-html2").addEventListener("click", dlHtml);

    document.getElementById("dl-schema").addEventListener("click", function () {
      if (!guard()) return;
      var credit = document.getElementById("f-credit").checked;
      var json = buildSchema(credit);
      download(slug() + "-faq-schema.json", json, "application/json");
    });

    // Enter key submits
    ["f-trade", "f-keyword", "f-city", "f-biz"].forEach(function (id) {
      document.getElementById(id).addEventListener("keydown", function (e) {
        if (e.key === "Enter") document.getElementById("btn-generate").click();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }

  /* ==========================================================================
     OPTIONAL: Live AI generation hook
     --------------------------------------------------------------------------
     This tool ships with a template engine so it works with zero setup.
     To generate answers with a live AI model instead, a developer can
     implement this function and call it from generate() in place of the
     template loop. Keep the returned shape identical: an array of 20
     { q: "question", a: "answer" } objects.

     async function generateWithAI(ctx) {
       const prompt = `Write 20 SEO FAQ Q&As for a ${ctx.trade} targeting the
         keyword "${ctx.kw}"${ctx.city ? ' in ' + ctx.city : ''}. Tone: ${ctx.tone}.
         Each answer 40-80 words, 8th-grade reading level, no keyword stuffing.
         Return JSON: [{"q":"...","a":"..."}]`;
       const res = await fetch("https://YOUR-AI-ENDPOINT/generate", {
         method: "POST",
         headers: { "Content-Type": "application/json", "Authorization": "Bearer YOUR_KEY" },
         body: JSON.stringify({ prompt })
       });
       const data = await res.json();
       return data.items; // [{q,a}, ...] length 20
     }
     ========================================================================== */
})();
