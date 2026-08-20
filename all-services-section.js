/* all-services-section.js — injects a shared "everything we do" services grid
   at the very bottom of every service page (just above the footer).
   Single source of truth: edit the SERVICES array below to update every page. */
(function () {
  "use strict";

  if (document.getElementById("all-services-section")) return;

  var SERVICES = [
    { n: "01", k: "Convert",      tone: "blue", t: "Websites",             href: "websites.html",              d: "Fast, mobile-first sites you own — built to convert visitors into booked jobs." },
    { n: "02", k: "Get found",    tone: "blue", t: "SEO",                  href: "seo.html",                   d: "Rank for the high-intent searches that fill your calendar, not vanity keywords." },
    { n: "03", k: "Win nearby",   tone: "blue", t: "Local SEO",            href: "local-seo.html",             d: "Own the map pack in your zip code and beat the franchises in your backyard." },
    { n: "04", k: "Buy demand",   tone: "red",  t: "Paid Ads",             href: "paid-ads.html",              d: "Google, Bing & Meta campaigns tuned weekly to respect your cost per lead." },
    { n: "05", k: "Stay visible", tone: "blue", t: "Social Media",         href: "social-media.html",          d: "Consistent, authentic content that builds community and keeps you top of mind." },
    { n: "06", k: "Look ready",   tone: "red",  t: "Branding",             href: "branding.html",              d: "Logo, palette, wraps, print — one look across every touchpoint you own." },
    { n: "07", k: "Never miss",   tone: "blue", t: "AI Automations",       href: "ai-automations.html",        d: "Let automations answer, book, and follow up while you're on the tools." },
    { n: "08", k: "Run tighter",  tone: "ink",  t: "Software",             href: "software.html",              d: "Get set up on the field-service platform that fits how your shop runs." },
    { n: "09", k: "Reactivate",   tone: "red",  t: "Re-Marketing",         href: "database-reactivation.html", d: "Turn your old customer list into booked jobs with email & SMS campaigns." },
    { n: "10", k: "Build trust",  tone: "red",  t: "Reviews & Reputation", href: "reviews.html",               d: "Automated Google review requests that keep 5-star reviews coming in." },
    { n: "11", k: "Stay in hand", tone: "red",  t: "Print & Collateral",   href: "print-collateral.html",      d: "Brochures, mailers, door hangers & signs — branded print that gets kept." },
    { n: "12", k: "Lead better",  tone: "blue", t: "Coaching",             href: "coaching.html",              d: "Hands-on guidance to run marketing like an owner, not a guessing game." },
    { n: "13", k: "Get official", tone: "ink",  t: "LLC Filing",           href: "llc-filing.html",            d: "Business formation help — we file your LLC in Illinois or Iowa. Not a law firm." }
  ];

  // current page filename, e.g. "seo.html"
  var here = (location.pathname.split("/").pop() || "").toLowerCase();

  var css = ''
    + '#all-services-section{background:#FFFFFF;color:#0A0F1C;padding:72px 0;position:relative;overflow:hidden;border-top:4px solid #C8262A;'
    +   "background-image:url('assets/white-engineering-background.webp');background-size:cover;background-position:center;background-attachment:fixed}"
    + '#all-services-section .as-wrap{max-width:1240px;margin:0 auto;padding:0 24px;position:relative;z-index:2}'
    + '#all-services-section .as-head{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);align-items:end;gap:48px;margin:0 0 32px}'
    + '#all-services-section .as-eyebrow{font-family:"Archivo",sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:12px;color:#C8262A;margin:0 0 12px}'
    + '#all-services-section .as-h2{font-family:"Archivo Black","Archivo",sans-serif;font-weight:900;text-transform:uppercase;letter-spacing:-.01em;line-height:1;font-size:clamp(40px,5vw,72px);margin:0}'
    + '#all-services-section .as-h2 .r{color:#C8262A}'
    + '#all-services-section .as-h2{color:#0A0F1C}'
    + '#all-services-section .as-sub{max-width:52ch;font-size:16px;line-height:1.6;color:#5B6471;margin:0 0 4px}'
    + '#all-services-section .as-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}'
    + '#all-services-section .as-card{--as-tone:#002768;position:relative;display:grid;grid-template-columns:48px minmax(0,1fr) 42px;min-height:142px;'
    +   'background:#fff;color:#0A0F1C;text-decoration:none;overflow:hidden;box-shadow:0 0 2px 0 rgba(10,15,28,.35);transition:transform .18s cubic-bezier(.22,.9,.3,1),box-shadow .18s ease,background-color .18s ease}'
    + '#all-services-section .as-card.as-tone-red{--as-tone:#C8262A}'
    + '#all-services-section .as-card.as-tone-ink{--as-tone:#001A4A}'
    + '#all-services-section .as-card .as-n{display:flex;align-items:flex-start;justify-content:center;padding-top:20px;background:var(--as-tone);color:#fff;'
    +   'font-family:"Archivo Black",sans-serif;font-size:18px;line-height:1}'
    + '#all-services-section .as-card .as-copy{display:flex;flex-direction:column;min-width:0;padding:18px 14px 16px 16px}'
    + '#all-services-section .as-card .as-k{font-family:"Archivo",sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:12px;color:var(--as-tone);margin:0 0 8px}'
    + '#all-services-section .as-card .as-t{font-family:"Archivo",sans-serif;font-weight:900;text-transform:uppercase;letter-spacing:0;font-size:18px;line-height:1.1;margin:0 0 8px}'
    + '#all-services-section .as-card .as-d{font-size:12px;line-height:1.45;color:#5B6471;margin:0}'
    + '#all-services-section .as-card .as-go,#all-services-section .as-card .as-here{display:flex;align-items:center;justify-content:center;background:#C8262A;color:#fff;'
    +   'font-family:"Archivo Black",sans-serif;font-size:20px;transition:background-color .18s ease,transform .18s cubic-bezier(.22,.9,.3,1)}'
    + '#all-services-section .as-card:hover{transform:translateY(-3px);background:#fff;box-shadow:0 14px 28px rgba(0,0,0,.35)}'
    + '#all-services-section .as-card:hover .as-go{background:#A90100}'
    + '#all-services-section .as-card .as-go span{transition:transform .18s cubic-bezier(.22,.9,.3,1)}'
    + '#all-services-section .as-card:hover .as-go span{transform:translateX(3px)}'
    + '#all-services-section .as-card:focus-visible{outline:3px solid #fff;outline-offset:3px}'
    + '#all-services-section .as-card.as-current{background:#002768;color:#fff;pointer-events:none}'
    + '#all-services-section .as-card.as-current .as-n{background:#C8262A}'
    + '#all-services-section .as-card.as-current .as-k{color:#fff}'
    + '#all-services-section .as-card.as-current .as-d{color:#C7CBD2}'
    + '#all-services-section .as-card.as-current .as-here{background:#fff;color:#C8262A;font-family:"Archivo",sans-serif;font-size:12px;font-weight:900;line-height:1;'
    +   'text-transform:uppercase;letter-spacing:.08em;writing-mode:vertical-rl;transform:rotate(180deg)}'
    + '@media(max-width:1080px){#all-services-section .as-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}'
    + '@media(max-width:820px){#all-services-section{padding:72px 0}#all-services-section .as-head{grid-template-columns:1fr;gap:16px}#all-services-section .as-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}'
    + '@media(max-width:540px){#all-services-section .as-wrap{padding:0 20px}#all-services-section .as-grid{grid-template-columns:1fr}#all-services-section .as-card{min-height:116px;grid-template-columns:48px minmax(0,1fr) 42px}#all-services-section .as-card .as-d{display:none}}'
    + '@media(prefers-reduced-motion:reduce){#all-services-section .as-card,#all-services-section .as-card .as-go,#all-services-section .as-card .as-go span{transition:none}}';

  var style = document.createElement("style");
  style.id = "all-services-section-style";
  style.textContent = css;
  document.head.appendChild(style);

  var cards = SERVICES.map(function (s) {
    var current = s.href.toLowerCase() === here;
    if (current) {
      return '<div class="as-card as-current as-tone-' + s.tone + '" aria-current="page">'
        + '<div class="as-n">' + s.n + '</div>'
        + '<div class="as-copy">'
        + '<div class="as-k">' + s.k + '</div>'
        + '<h3 class="as-t">' + s.t + '</h3>'
        + '<p class="as-d">' + s.d + '</p>'
        + '</div>'
        + '<div class="as-here">Current</div>'
        + '</div>';
    }
    return '<a class="as-card as-tone-' + s.tone + '" href="' + s.href + '">'
      + '<div class="as-n">' + s.n + '</div>'
      + '<div class="as-copy">'
      + '<div class="as-k">' + s.k + '</div>'
      + '<h3 class="as-t">' + s.t + '</h3>'
      + '<p class="as-d">' + s.d + '</p>'
      + '</div>'
      + '<div class="as-go" aria-hidden="true"><span>&rarr;</span></div>'
      + '</a>';
  }).join("");

  var section = document.createElement("section");
  section.id = "all-services-section";
  section.setAttribute("data-screen-label", "All Services");
  section.innerHTML = ''
    + '<div class="as-wrap">'
    + '  <div class="as-head">'
    + '    <div class="as-title">'
    + '      <p class="as-eyebrow">Everything we run</p>'
    + '      <h2 class="as-h2">Every cylinder we pull <span class="r">for the trades.</span></h2>'
    + '    </div>'
    + '    <p class="as-sub">Most agencies sell one service and call it a day. Toughjobs runs the whole system — pick the lever you need next, or stack them all.</p>'
    + '  </div>'
    + '  <div class="as-grid">' + cards + '</div>'
    + '</div>';

  function inject() {
    var footer = document.querySelector("body > footer") || document.querySelector("footer");
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(section, footer);
    } else {
      document.body.appendChild(section);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
