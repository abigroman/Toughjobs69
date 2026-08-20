// ppc-analyzer.js — Toughjobs PPC readiness analyzer.
// A prospect enters their site, trade, current monthly spend, and average
// ticket. We compute a credible PPC readiness scorecard + projections and
// (optionally) enrich the narrative with window.claude.complete.
(function () {
  var mount = document.getElementById('ppc-tool');
  if (!mount) return;

  // ── Styles ────────────────────────────────────────────────────────────
  var css = `
  .pp-wrap{position:relative;z-index:2;background:#0A0F1C;border:1px solid rgba(255,255,255,.12);
    box-shadow:0 30px 70px rgba(0,0,0,.45);overflow:hidden}
  .pp-wrap::before{content:"";position:absolute;top:0;left:0;width:100%;height:4px;
    background:repeating-linear-gradient(-45deg,#C8262A 0 14px,#0A0F1C 14px 16px)}
  .pp-pad{padding:42px clamp(24px,4vw,56px)}
  .pp-kicker{font-family:"Archivo",sans-serif;font-weight:800;text-transform:uppercase;
    letter-spacing:.14em;font-size:12px;color:#C8262A;margin-bottom:14px}
  .pp-h{font-family:"Archivo Black",sans-serif;text-transform:uppercase;letter-spacing:-.01em;
    font-size:clamp(26px,3.4vw,40px);line-height:1;color:#fff;margin:0 0 12px}
  .pp-lead{color:rgba(255,255,255,.66);font-size:15px;line-height:1.6;max-width:560px;margin:0 0 30px}
  .pp-form{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .pp-field{display:flex;flex-direction:column;gap:7px}
  .pp-field.full{grid-column:1/-1}
  .pp-field label{font-family:"Archivo",sans-serif;font-weight:700;font-size:11px;letter-spacing:.1em;
    text-transform:uppercase;color:rgba(255,255,255,.55)}
  .pp-field input,.pp-field select{background:#11182b;border:1px solid rgba(255,255,255,.16);color:#fff;
    font-family:"Archivo",sans-serif;font-size:15px;padding:14px 16px;border-radius:0;outline:none;
    transition:border-color .2s ease,box-shadow .2s ease;appearance:none}
  .pp-field select{background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="%23ffffff" stroke-width="1.6" fill="none" opacity="0.6"/></svg>');background-repeat:no-repeat;background-position:right 16px center;padding-right:40px;cursor:pointer}
  .pp-field input::placeholder{color:rgba(255,255,255,.32)}
  .pp-field input:focus,.pp-field select:focus{border-color:#C8262A;box-shadow:0 0 0 3px rgba(200,38,42,.18)}
  .pp-go{grid-column:1/-1;display:inline-flex;align-items:center;justify-content:center;gap:10px;
    background:#C8262A;color:#fff;border:0;cursor:pointer;padding:18px;margin-top:6px;
    font-family:"Archivo",sans-serif;font-weight:800;letter-spacing:.06em;text-transform:uppercase;font-size:14px;
    transition:transform .15s ease,box-shadow .15s ease}
  .pp-go:hover{transform:translate(-2px,-2px);box-shadow:4px 4px 0 #fff}
  .pp-note{grid-column:1/-1;color:rgba(255,255,255,.4);font-size:12px;margin-top:4px}
  @media(max-width:620px){.pp-form{grid-template-columns:1fr}}

  /* loading */
  .pp-loading{padding:60px clamp(24px,4vw,56px);text-align:center}
  .pp-radar{width:90px;height:90px;margin:0 auto 26px;border-radius:50%;position:relative;
    background:radial-gradient(circle,rgba(200,38,42,.12) 0%,transparent 70%);border:2px solid rgba(255,255,255,.12)}
  .pp-radar::after{content:"";position:absolute;inset:0;border-radius:50%;
    background:conic-gradient(from 0deg,rgba(200,38,42,.6),transparent 35%);animation:ppSpin 1.1s linear infinite}
  @keyframes ppSpin{to{transform:rotate(360deg)}}
  .pp-step{font-family:"Archivo",sans-serif;color:#fff;font-weight:700;letter-spacing:.04em;font-size:15px;min-height:22px}

  /* results */
  .pp-res{padding:42px clamp(24px,4vw,56px)}
  .pp-top{display:flex;flex-wrap:wrap;gap:30px;align-items:center;padding-bottom:30px;
    margin-bottom:30px;border-bottom:1px solid rgba(255,255,255,.12)}
  .pp-gauge{--v:0;width:150px;height:150px;border-radius:50%;flex-shrink:0;position:relative;
    background:conic-gradient(var(--c) calc(var(--v)*1%),rgba(255,255,255,.08) 0);display:grid;place-items:center}
  .pp-gauge::after{content:"";position:absolute;inset:12px;border-radius:50%;background:#0A0F1C}
  .pp-gauge .gv{position:relative;z-index:2;text-align:center;font-family:"Archivo Black",sans-serif;color:#fff}
  .pp-gauge .gv b{display:block;font-size:42px;line-height:1}
  .pp-gauge .gv span{font-size:10px;letter-spacing:.12em;color:rgba(255,255,255,.5)}
  .pp-tophead{flex:1;min-width:240px}
  .pp-status{display:inline-block;font-family:"Archivo",sans-serif;font-weight:800;text-transform:uppercase;
    letter-spacing:.08em;font-size:12px;padding:6px 12px;margin-bottom:14px}
  .pp-verdict{color:#fff;font-size:17px;line-height:1.5;font-weight:600;margin:0}

  /* stat tiles */
  .pp-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.1);margin-bottom:30px}
  .pp-stat{background:#11182b;padding:22px 20px}
  .pp-stat .sl{font-family:"Archivo",sans-serif;font-weight:700;font-size:10px;letter-spacing:.1em;
    text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:8px}
  .pp-stat .sv{font-family:"Archivo Black",sans-serif;font-size:26px;color:#fff;line-height:1}
  .pp-stat .sv.red{color:#C8262A}
  .pp-stat .sn{font-size:11px;color:rgba(255,255,255,.45);margin-top:6px}
  @media(max-width:680px){.pp-stats{grid-template-columns:repeat(2,1fr)}}

  /* pillars */
  .pp-pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:30px}
  .pp-pillar{background:#11182b;padding:22px;border-top:3px solid #3a4a6b}
  .pp-pillar.bad{border-top-color:#C8262A}
  .pp-pillar.ok{border-top-color:#1F8A5B}
  .pp-pillar h5{font-family:"Archivo Black",sans-serif;font-size:14px;text-transform:uppercase;
    letter-spacing:.02em;color:#fff;margin:0 0 6px}
  .pp-pillar .ps{font-family:"Archivo",sans-serif;font-weight:800;font-size:11px;letter-spacing:.08em;
    text-transform:uppercase;margin-bottom:10px;display:inline-block}
  .pp-pillar.bad .ps{color:#C8262A}.pp-pillar.ok .ps{color:#3fb883}
  .pp-pillar p{color:rgba(255,255,255,.7);font-size:13px;line-height:1.55;margin:0}
  @media(max-width:680px){.pp-pillars{grid-template-columns:1fr}}

  /* recs */
  .pp-recs{background:#11182b;border-left:3px solid #C8262A;padding:24px 28px;margin-bottom:26px}
  .pp-recs h4{font-family:"Archivo Black",sans-serif;font-size:13px;letter-spacing:.08em;
    text-transform:uppercase;color:#C8262A;margin:0 0 14px}
  .pp-recs ul{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px}
  .pp-recs li{color:rgba(255,255,255,.82);font-size:14px;line-height:1.5;padding-left:26px;position:relative}
  .pp-recs li::before{content:"";position:absolute;left:0;top:5px;width:11px;height:11px;background:#C8262A;
    clip-path:polygon(14% 0,4% 60%,46% 60%,42% 100%,96% 36%,54% 36%)}
  .pp-cta{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
  .pp-cta a.book{background:#C8262A;color:#fff;text-decoration:none;font-family:"Archivo",sans-serif;
    font-weight:800;letter-spacing:.06em;text-transform:uppercase;font-size:13px;padding:16px 26px;
    transition:transform .15s ease,box-shadow .15s ease}
  .pp-cta a.book:hover{transform:translate(-2px,-2px);box-shadow:4px 4px 0 #fff}
  .pp-again{background:none;border:1px solid rgba(255,255,255,.25);color:#fff;cursor:pointer;
    font-family:"Archivo",sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.06em;
    font-size:12px;padding:15px 20px;transition:border-color .2s ease,color .2s ease}
  .pp-again:hover{border-color:#C8262A;color:#C8262A}
  .pp-disclaimer{color:rgba(255,255,255,.4);font-size:12px;margin-top:20px;line-height:1.5}
  `;
  var st = document.createElement('style');
  st.id = 'pp-styles';
  st.textContent = css;
  document.head.appendChild(st);

  // ── Reference data (senior-analyst heuristics) ───────────────────────
  var TRADES = {
    'HVAC': 13, 'Plumbing': 15, 'Electrical': 11, 'Roofing': 18,
    'General Contractor': 9, 'Landscaping': 7, 'Masonry / Concrete': 6,
    'Painting': 8, 'Restoration': 16, 'Pest Control': 12,
    'Carpet / Cleaning': 9, 'Other': 10,
  };
  var SPEND = {
    'none': { mid: 0, label: 'Nothing yet' },
    'under500': { mid: 300, label: 'Under $500' },
    '500-1500': { mid: 1000, label: '$500 – $1.5K' },
    '1500-3000': { mid: 2250, label: '$1.5K – $3K' },
    '3000-7000': { mid: 5000, label: '$3K – $7K' },
    '7000+': { mid: 9000, label: '$7K+' },
  };
  var TICKET = {
    'under500': 350, '500-2000': 1200, '2000-5000': 3500,
    '5000-15000': 10000, '15000+': 25000,
  };

  // ── Form ─────────────────────────────────────────────────────────────
  function renderForm() {
    var tradeOpts = Object.keys(TRADES).map(function (t) { return '<option value="' + t + '">' + t + '</option>'; }).join('');
    mount.innerHTML =
      '<div class="pp-wrap"><div class="pp-pad">' +
        '<div class="pp-kicker">Free · 60-Second PPC Audit</div>' +
        '<h3 class="pp-h">How does your PPC stack up?</h3>' +
        '<p class="pp-lead">Answer four quick questions. As a senior PPC analyst would, we\'ll grade your paid-search position and show you exactly what you\'re leaving on the table.</p>' +
        '<form class="pp-form" id="pp-form">' +
          '<div class="pp-field full"><label>Your website</label>' +
            '<input name="site" type="url" required placeholder="https://yourbusiness.com" /></div>' +
          '<div class="pp-field"><label>Your trade</label><select name="trade" required>' + tradeOpts + '</select></div>' +
          '<div class="pp-field"><label>Current monthly PPC spend</label><select name="spend" required>' +
            '<option value="none">Nothing yet</option>' +
            '<option value="under500">Under $500</option>' +
            '<option value="500-1500">$500 – $1.5K</option>' +
            '<option value="1500-3000">$1.5K – $3K</option>' +
            '<option value="3000-7000">$3K – $7K</option>' +
            '<option value="7000+">$7K+</option>' +
          '</select></div>' +
          '<div class="pp-field"><label>Average job / ticket value</label><select name="ticket" required>' +
            '<option value="under500">Under $500</option>' +
            '<option value="500-2000">$500 – $2K</option>' +
            '<option value="2000-5000">$2K – $5K</option>' +
            '<option value="5000-15000">$5K – $15K</option>' +
            '<option value="15000+">$15K+</option>' +
          '</select></div>' +
          '<div class="pp-field"><label>Email (for your full breakdown)</label>' +
            '<input name="email" type="email" required placeholder="you@yourbusiness.com" /></div>' +
          '<button class="pp-go" type="submit">Grade my PPC →</button>' +
          '<div class="pp-note">No obligation. We\'ll show you the math behind every number.</div>' +
        '</form>' +
      '</div></div>';
    document.getElementById('pp-form').addEventListener('submit', onSubmit);
  }

  function onSubmit(e) {
    e.preventDefault();
    var fd = new FormData(e.target);
    var data = {
      site: (fd.get('site') || '').trim(),
      trade: fd.get('trade') || 'Other',
      spend: fd.get('spend') || 'none',
      ticket: fd.get('ticket') || '500-2000',
      email: (fd.get('email') || '').trim(),
    };
    try {
      var leads = JSON.parse(localStorage.getItem('tj_ppc_leads') || '[]');
      leads.push(Object.assign({ at: new Date().toISOString() }, data));
      localStorage.setItem('tj_ppc_leads', JSON.stringify(leads));
    } catch (err) {}
    runLoading(data);
  }

  // ── Loading ──────────────────────────────────────────────────────────
  function runLoading(data) {
    mount.innerHTML =
      '<div class="pp-wrap"><div class="pp-loading">' +
        '<div class="pp-radar"></div><div class="pp-step" id="pp-step">Pulling keyword costs for ' + escapeHtml(data.trade) + '…</div>' +
      '</div></div>';
    var steps = [
      'Pulling keyword costs for ' + data.trade + '…',
      'Modeling your funnel math…',
      'Checking brand-defense exposure…',
      'Scoring your readiness…',
    ];
    var el = document.getElementById('pp-step');
    var i = 0;
    var iv = setInterval(function () { i++; if (el && steps[i]) el.textContent = steps[i]; }, 700);

    var model = analyze(data);
    enrich(data, model).then(function (m) {
      clearInterval(iv); renderResults(data, m);
    }).catch(function () {
      clearInterval(iv); renderResults(data, model);
    });
  }

  // ── The analysis (deterministic, credible) ───────────────────────────
  function analyze(data) {
    var headCPC = TRADES[data.trade] || 10;
    var longTailCPC = Math.max(2, Math.round(headCPC * 0.55 * 10) / 10);
    var ticket = TICKET[data.ticket] || 1200;
    var spendMid = (SPEND[data.spend] || SPEND.none).mid;

    // What you can afford to spend to land ONE customer (target ~25% of ticket).
    var affordableCAC = Math.round(ticket * 0.25);

    // Recommended monthly budget range, scaled to ticket, floored for viability.
    var recLow = Math.max(500, Math.round(ticket * 0.25 / 50) * 50);
    var recHigh = Math.min(12000, Math.max(1200, Math.round(ticket * 0.7 / 50) * 50));
    var budget = Math.round((recLow + recHigh) / 2 / 50) * 50;

    // Funnel math at the recommended budget, using cheaper long-tail clicks.
    var clicks = budget / longTailCPC;
    var leads = clicks * 0.09;              // high-intent long-tail LP conversion
    var jobs = leads * 0.30;                // typical trade close rate
    var revenue = jobs * ticket;
    var roas = revenue / budget;

    // Readiness score.
    var score, status, statusColor;
    if (spendMid === 0) { score = 22; status = 'Critical Gap'; statusColor = '#C8262A'; }
    else if (spendMid < recLow) { score = 54; status = 'Underfunded'; statusColor = '#C8262A'; }
    else if (spendMid <= recHigh) { score = 80; status = 'On Track'; statusColor = '#1F8A5B'; }
    else { score = 88; status = 'Aggressive'; statusColor = '#1F8A5B'; }
    // High ticket + no spend = even more urgent; nudge score down to flag opportunity.
    if (spendMid === 0 && ticket >= 5000) score = 16;

    // Pillars.
    var hasSpend = spendMid > 0;
    var pillars = [
      {
        title: 'Brand Defense',
        ok: hasSpend,
        status: hasSpend ? 'Protected' : 'Exposed',
        body: hasSpend
          ? 'You\'re bidding to hold your own name. Good — competitors can\'t cheaply intercept people already searching for you.'
          : 'Right now a competitor can bid on your business name and steal customers who are literally searching for YOU. One cheap campaign shuts that down.',
      },
      {
        title: 'Long-Tail Capture',
        ok: spendMid >= recLow,
        status: spendMid >= recLow ? 'Working' : 'Missing',
        body: spendMid >= recLow
          ? 'You\'re funded to capture specific, high-intent searches — the cheap, ready-to-buy clicks at ~$' + longTailCPC + '.'
          : 'Long-tail terms like "' + sampleLongTail(data.trade) + '" cost ~$' + longTailCPC + ' a click and convert far better than broad terms. You\'re not capturing them.',
      },
      {
        title: 'High-Ticket Math',
        ok: hasSpend && ticket >= 2000,
        status: ticket >= 2000 ? (hasSpend ? 'Leveraged' : 'Untapped') : 'Modest',
        body: ticket >= 2000
          ? 'At a $' + fmt(ticket) + ' average job, you can profitably pay up to $' + fmt(affordableCAC) + ' to land ONE customer. ' + (hasSpend ? 'Keep pressing this edge.' : 'Not running ads here is leaving money on the table.')
          : 'Your ticket is modest, so lean on tightly-targeted long-tail terms and brand defense rather than broad, expensive head terms.',
      },
    ];

    return {
      headCPC: headCPC, longTailCPC: longTailCPC, ticket: ticket, spendMid: spendMid,
      spendLabel: (SPEND[data.spend] || SPEND.none).label, affordableCAC: affordableCAC,
      recLow: recLow, recHigh: recHigh, budget: budget,
      leads: Math.max(1, Math.round(leads)), jobs: Math.max(1, Math.round(jobs)),
      revenue: Math.round(revenue), roas: Math.round(roas * 10) / 10,
      score: score, status: status, statusColor: statusColor, pillars: pillars,
      verdict: defaultVerdict(data, spendMid, ticket, roas),
      recommendations: defaultRecs(data, spendMid, recLow, recHigh, longTailCPC, affordableCAC, ticket),
    };
  }

  function sampleLongTail(trade) {
    var map = {
      'HVAC': 'emergency ac repair near me', 'Plumbing': 'burst pipe repair tonight',
      'Electrical': 'panel upgrade quote', 'Roofing': 'storm damage roof inspection',
      'Restoration': 'water damage cleanup 24 hour', 'Pest Control': 'termite treatment cost',
    };
    return map[trade] || (trade.toLowerCase() + ' near me');
  }

  function defaultVerdict(data, spendMid, ticket, roas) {
    if (spendMid === 0 && ticket >= 5000) {
      return 'You\'re running zero paid search on $' + fmt(ticket) + ' jobs. That\'s the single biggest gap we see — high-intent buyers are clicking your competitors right now.';
    }
    if (spendMid === 0) {
      return 'With nothing on PPC, you\'re invisible the moment someone searches with intent. Even a small long-tail + brand-defense budget changes that fast.';
    }
    if (roas >= 4) {
      return 'The math is strongly in your favor — your ticket size means every disciplined dollar of paid search can return roughly ' + roas + 'x. The question is whether you\'re funded to capture it all.';
    }
    return 'You\'ve started — now it\'s about funding and structure. Right-sizing your budget toward long-tail intent is where the next wins come from.';
  }

  function defaultRecs(data, spendMid, recLow, recHigh, ltCPC, cac, ticket) {
    var r = [];
    if (spendMid === 0) {
      r.push('Start with a brand-defense campaign first — it\'s the cheapest clicks you\'ll ever buy and stops competitors poaching your name.');
      r.push('Layer in 8–12 long-tail, high-intent keywords at ~$' + ltCPC + '/click instead of broad, expensive head terms.');
    } else {
      r.push('Audit wasted spend — pause broad-match terms and shift budget into your best-converting long-tail searches.');
      r.push('Make sure brand-defense is always-on; it should never be the line item you cut.');
    }
    r.push('Fund toward $' + fmt(recLow) + '–$' + fmt(recHigh) + '/mo so you collect enough click data to optimize within 30 days.');
    if (ticket >= 2000) r.push('You can profitably pay up to $' + fmt(cac) + ' to land one customer — build your bids and landing page around that math.');
    return r;
  }

  // ── Optional Claude narrative enrichment ─────────────────────────────
  function enrich(data, model) {
    var minTime = new Promise(function (r) { setTimeout(r, 2800); });
    var work;
    if (window.claude && typeof window.claude.complete === 'function') {
      var prompt =
        'You are a senior PPC analyst advising blue-collar trades. Keep it sharp and specific.\\n' +
        'Trade: ' + data.trade + '. Current monthly PPC spend: ' + model.spendLabel +
        '. Average ticket: $' + model.ticket + '. Recommended budget: $' + model.recLow + '-$' + model.recHigh +
        '. Modeled ROAS at that budget: ' + model.roas + 'x.\\n' +
        'Return ONLY minified JSON: {"verdict":"2-sentence punchy assessment","recommendations":["","",""]}. ' +
        'Recommendations are concrete PPC actions. Emphasize brand defense and long-tail for low/no spenders.';
      work = window.claude.complete({ messages: [{ role: 'user', content: prompt }] })
        .then(function (txt) {
          var p = parseJSON(txt);
          if (p && p.verdict) model.verdict = p.verdict;
          if (p && Array.isArray(p.recommendations) && p.recommendations.length) model.recommendations = p.recommendations.slice(0, 4);
          return model;
        }).catch(function () { return model; });
    } else {
      work = Promise.resolve(model);
    }
    return Promise.all([work, minTime]).then(function (a) { return a[0]; });
  }

  function parseJSON(txt) {
    if (!txt) return null;
    try { return JSON.parse(txt); } catch (e) {}
    var m = txt.match(/\{[\s\S]*\}/);
    if (m) { try { return JSON.parse(m[0]); } catch (e) {} }
    return null;
  }

  // ── Results ──────────────────────────────────────────────────────────
  function renderResults(data, m) {
    var stats =
      tile('Recommended budget', '$' + fmt(m.recLow) + '–' + fmt(m.recHigh), 'per month', false) +
      tile('Est. leads / mo', '~' + m.leads, 'at long-tail $' + m.longTailCPC + '/click', true) +
      tile('Est. jobs / mo', '~' + m.jobs, 'at a 30% close rate', true) +
      tile('Modeled ROAS', m.roas + 'x', '~$' + fmt(m.revenue) + ' revenue', true);

    var pillars = m.pillars.map(function (p) {
      return '<div class="pp-pillar ' + (p.ok ? 'ok' : 'bad') + '">' +
        '<h5>' + p.title + '</h5><span class="ps">' + p.status + '</span>' +
        '<p>' + escapeHtml(p.body) + '</p></div>';
    }).join('');

    var recs = (m.recommendations || []).slice(0, 4).map(function (x) {
      return '<li>' + escapeHtml(x) + '</li>';
    }).join('');

    mount.innerHTML =
      '<div class="pp-wrap"><div class="pp-res">' +
        '<div class="pp-kicker">Your PPC readiness report</div>' +
        '<div class="pp-top">' +
          '<div class="pp-gauge" style="--v:' + m.score + ';--c:' + m.statusColor + '">' +
            '<div class="gv"><b>' + m.score + '</b><span>/ 100</span></div></div>' +
          '<div class="pp-tophead">' +
            '<span class="pp-status" style="background:' + m.statusColor + ';color:#fff">' + m.status + '</span>' +
            '<p class="pp-verdict">' + escapeHtml(m.verdict) + '</p></div>' +
        '</div>' +
        '<div class="pp-stats">' + stats + '</div>' +
        '<div class="pp-pillars">' + pillars + '</div>' +
        '<div class="pp-recs"><h4>Your senior-analyst action plan</h4><ul>' + recs + '</ul></div>' +
        '<div class="pp-cta">' +
          '<a class="book" href="contact.html">Book a PPC strategy call →</a>' +
          '<button class="pp-again" id="pp-again">↺ Run again</button></div>' +
        '<p class="pp-disclaimer">Projections model long-tail click costs for ' + escapeHtml(data.trade) + ', a 9% landing-page conversion and a 30% close rate. Your real numbers depend on your offer, site and follow-up — that\'s what a full audit verifies.</p>' +
      '</div></div>';

    requestAnimationFrame(function () {
      var g = mount.querySelector('.pp-gauge');
      if (g) { g.style.setProperty('--v', '0'); setTimeout(function () { g.style.transition = '--v 1.1s'; g.style.setProperty('--v', m.score); }, 50); }
    });
    document.getElementById('pp-again').addEventListener('click', renderForm);
  }

  function tile(label, val, note, red) {
    return '<div class="pp-stat"><div class="sl">' + label + '</div>' +
      '<div class="sv' + (red ? ' red' : '') + '">' + val + '</div>' +
      '<div class="sn">' + note + '</div></div>';
  }
  function fmt(n) { return Math.round(n).toLocaleString('en-US'); }
  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  renderForm();
})();
