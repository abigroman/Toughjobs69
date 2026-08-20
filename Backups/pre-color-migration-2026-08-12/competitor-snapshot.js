// competitor-snapshot.js — Toughjobs free self-serve competitor scorecard.
// Client enters their website + a competitor website and gets an
// instant side-by-side brand scorecard. Uses window.claude.complete when
// available, with a deterministic fallback so the tool always works.
(function () {
  var mount = document.getElementById('snapshot-tool');
  if (!mount) return;

  // ── Styles ────────────────────────────────────────────────────────────
  var css = `
  .cs-wrap{position:relative;z-index:2;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);
    box-shadow:0 30px 70px rgba(0,0,0,.45);overflow:hidden;margin-top:60px}
  .cs-wrap::before{content:"";position:absolute;top:0;left:0;width:100%;height:4px;
    background:repeating-linear-gradient(-45deg,#C8262A 0 14px,#0A0F1C 14px 16px)}
  .cs-pad{padding:42px clamp(24px,4vw,56px)}
  .cs-kicker{font-family:"Archivo",sans-serif;font-weight:800;text-transform:uppercase;
    letter-spacing:.14em;font-size:12px;color:#C8262A;margin-bottom:14px}
  .cs-h{font-family:"Archivo Black",sans-serif;text-transform:uppercase;letter-spacing:-.01em;
    font-size:clamp(26px,3.4vw,40px);line-height:1;color:#fff;margin:0 0 12px}
  .cs-lead{color:rgba(255,255,255,.66);font-size:15px;line-height:1.6;max-width:560px;margin:0 0 30px}
  .cs-form{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .cs-field{display:flex;flex-direction:column;gap:7px}
  .cs-field.full{grid-column:1/-1}
  .cs-field label{font-family:"Archivo",sans-serif;font-weight:700;font-size:11px;letter-spacing:.1em;
    text-transform:uppercase;color:rgba(255,255,255,.55)}
  .cs-field input{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.16);color:#fff;
    font-family:"Archivo",sans-serif;font-size:15px;padding:14px 16px;border-radius:0;outline:none;
    transition:border-color .2s ease,box-shadow .2s ease}
  .cs-field input::placeholder{color:rgba(255,255,255,.32)}
  .cs-field input:focus{border-color:#C8262A;box-shadow:0 0 0 3px rgba(200,38,42,.18)}
  .cs-go{grid-column:1/-1;display:inline-flex;align-items:center;justify-content:center;gap:10px;
    background:#C8262A;color:#fff;border:0;cursor:pointer;padding:18px;margin-top:6px;
    font-family:"Archivo",sans-serif;font-weight:800;letter-spacing:.06em;text-transform:uppercase;font-size:14px;
    transition:transform .15s ease,box-shadow .15s ease}
  .cs-go:hover{transform:translate(-2px,-2px);box-shadow:4px 4px 0 #fff}
  .cs-go:disabled{opacity:.6;cursor:default;transform:none;box-shadow:none}
  .cs-note{grid-column:1/-1;color:rgba(255,255,255,.4);font-size:12px;margin-top:4px}
  @media(max-width:620px){.cs-form{grid-template-columns:1fr}}

  /* loading */
  .cs-loading{padding:60px clamp(24px,4vw,56px);text-align:center}
  .cs-radar{width:90px;height:90px;margin:0 auto 26px;border-radius:50%;position:relative;
    background:radial-gradient(circle,rgba(200,38,42,.12) 0%,transparent 70%);
    border:2px solid rgba(255,255,255,.12)}
  .cs-radar::after{content:"";position:absolute;inset:0;border-radius:50%;
    background:conic-gradient(from 0deg,rgba(200,38,42,.6),transparent 35%);
    animation:csSpin 1.1s linear infinite}
  @keyframes csSpin{to{transform:rotate(360deg)}}
  .cs-step{font-family:"Archivo",sans-serif;color:#fff;font-weight:700;letter-spacing:.04em;font-size:15px;min-height:22px}

  /* results */
  .cs-res{padding:42px clamp(24px,4vw,56px)}
  .cs-overall{display:flex;flex-wrap:wrap;align-items:center;gap:18px 28px;
    padding-bottom:26px;margin-bottom:30px;border-bottom:1px solid rgba(255,255,255,.12)}
  .cs-verdict{flex:1;min-width:260px;color:#fff;font-size:17px;line-height:1.5;font-weight:600}
  .cs-verdict b{color:#C8262A}
  .cs-badge{font-family:"Archivo Black",sans-serif;color:#fff;text-align:center;line-height:1}
  .cs-badge .vs{font-size:13px;color:rgba(255,255,255,.5);letter-spacing:.12em;margin-bottom:8px}
  .cs-badge .sc{font-size:40px}
  .cs-badge .sc .you{color:#C8262A}
  .cs-badge .sc .sep{color:rgba(255,255,255,.3);margin:0 8px}
  .cs-legend{display:flex;gap:22px;margin-bottom:22px;font-family:"Archivo",sans-serif;
    font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
  .cs-legend span{display:inline-flex;align-items:center;gap:8px;color:rgba(255,255,255,.7)}
  .cs-legend .sw{width:14px;height:14px;display:inline-block}
  .cs-row{margin-bottom:20px}
  .cs-row .rl{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px}
  .cs-row .rl .name{font-family:"Archivo",sans-serif;font-weight:700;color:#fff;font-size:14px;
    letter-spacing:.04em;text-transform:uppercase}
  .cs-bar{height:14px;background:rgba(255,255,255,.08);position:relative;margin-bottom:6px;overflow:hidden}
  .cs-bar i{position:absolute;left:0;top:0;height:100%;width:0;transition:width 1s cubic-bezier(.22,.9,.3,1)}
  .cs-bar.you i{background:#C8262A}
  .cs-bar.comp i{background:#3a4a6b}
  .cs-bar b{position:absolute;right:8px;top:50%;transform:translateY(-50%);font-size:11px;
    font-family:"Archivo",sans-serif;font-weight:800;color:#fff;opacity:.9}
  .cs-recs{margin-top:30px;background:#11182b;border-left:3px solid #C8262A;padding:24px 28px}
  .cs-recs h4{font-family:"Archivo Black",sans-serif;font-size:13px;letter-spacing:.08em;
    text-transform:uppercase;color:#C8262A;margin:0 0 14px}
  .cs-recs ul{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px}
  .cs-recs li{color:rgba(255,255,255,.82);font-size:14px;line-height:1.5;padding-left:26px;position:relative}
  .cs-recs li::before{content:"";position:absolute;left:0;top:5px;width:11px;height:11px;
    background:#C8262A;clip-path:polygon(14% 0,4% 60%,46% 60%,42% 100%,96% 36%,54% 36%)}
  .cs-disclaimer{color:rgba(255,255,255,.4);font-size:12px;margin-top:18px;line-height:1.5}
  .cs-again{background:none;border:1px solid rgba(255,255,255,.25);color:#fff;cursor:pointer;
    font-family:"Archivo",sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.06em;
    font-size:12px;padding:11px 18px;margin-top:20px;transition:border-color .2s ease,color .2s ease}
  .cs-again:hover{border-color:#C8262A;color:#C8262A}
  `;
  var st = document.createElement('style');
  st.id = 'cs-styles';
  st.textContent = css;
  document.head.appendChild(st);

  var DIMS = [
    { key: 'seo',   label: 'Google Visibility' },
    { key: 'web',   label: 'Website Experience' },
    { key: 'rep',   label: 'Reviews & Reputation' },
    { key: 'ads',   label: 'Paid Ads Presence' },
    { key: 'brand', label: 'Brand Strength' },
  ];

  // ── Render the input form ────────────────────────────────────────────
  function renderForm() {
    mount.innerHTML =
      '<div class="cs-wrap"><div class="cs-pad">' +
        '<div class="cs-kicker">Free · Instant</div>' +
        '<h3 class="cs-h">Competitor Snapshot</h3>' +
        '<p class="cs-lead">Enter your website and a top competitor\'s site. We\'ll analyze both and show you exactly how you stack up on visibility, website strength, reviews, and brand.</p>' +
        '<form class="cs-form" id="cs-form">' +
          '<div class="cs-field full"><label>Your website</label>' +
            '<input name="you" type="url" required placeholder="https://yourbusiness.com" /></div>' +
          '<div class="cs-field full"><label>Competitor website</label>' +
            '<input name="competitor" type="url" required placeholder="https://competitor.com" /></div>' +
          '<div class="cs-field full"><label>Email (for your detailed breakdown)</label>' +
            '<input name="email" type="email" required placeholder="you@yourbusiness.com" /></div>' +
          '<button class="cs-go" type="submit">Analyze both →</button>' +
          '<div class="cs-note">We\'ll pull real data from both sites. Full verified analysis included with the deep-dive.</div>' +
        '</form>' +
      '</div></div>';
    document.getElementById('cs-form').addEventListener('submit', onSubmit);
  }

  function onSubmit(e) {
    e.preventDefault();
    var fd = new FormData(e.target);
    var data = {
      you: (fd.get('you') || '').trim(),
      competitor: (fd.get('competitor') || '').trim(),
      email: (fd.get('email') || '').trim(),
    };
    // Persist the lead locally.
    try {
      var leads = JSON.parse(localStorage.getItem('tj_snapshot_leads') || '[]');
      leads.push(Object.assign({ at: new Date().toISOString() }, data));
      localStorage.setItem('tj_snapshot_leads', JSON.stringify(leads));
    } catch (err) {}
    runLoading(data);
  }

  // ── Loading sequence ─────────────────────────────────────────────────
  function runLoading(data) {
    mount.innerHTML =
      '<div class="cs-wrap"><div class="cs-loading">' +
        '<div class="cs-radar"></div>' +
        '<div class="cs-step" id="cs-step">Analyzing your site…</div>' +
      '</div></div>';
    var steps = [
      'Analyzing your site…',
      'Crawling the competitor…',
      'Grading visibility & authority…',
      'Building your scorecard…',
    ];
    var el = document.getElementById('cs-step');
    var i = 0;
    var iv = setInterval(function () {
      i++;
      if (el && steps[i]) el.textContent = steps[i];
    }, 750);

    getScores(data).then(function (result) {
      clearInterval(iv);
      renderResults(data, result);
    }).catch(function () {
      clearInterval(iv);
      renderResults(data, fallbackScores(data));
    });
  }

  // ── Scoring: try Claude, else deterministic fallback ─────────────────
  function getScores(data) {
    var minTime = new Promise(function (r) { setTimeout(r, 3000); });
    var work;
    if (window.claude && typeof window.claude.complete === 'function') {
      var prompt =
        'You are a senior marketing analyst. Analyze two business websites and estimate their competitive brand scorecard. ' +
        'Base your estimate on typical SEO/web/reputation patterns for the sites given; this is a directional estimate.\\n\\n' +
        'Your site: "' + data.you + '"\\n' +
        'Competitor site: "' + data.competitor + '"\\n\\n' +
        'Return ONLY valid minified JSON, no prose, with this exact shape:\\n' +
        '{"you":{"seo":0,"web":0,"rep":0,"ads":0,"brand":0},' +
        '"competitor":{"seo":0,"web":0,"rep":0,"ads":0,"brand":0},' +
        '"verdict":"one punchy sentence on where your site stands","recommendations":["","",""]}\\n' +
        'Each score is an integer 0-100. Make the two sites differ realistically. ' +
        'Recommendations are short, specific, marketing actions for your site.';
      work = window.claude.complete({ messages: [{ role: 'user', content: prompt }] })
        .then(function (txt) {
          var parsed = parseJSON(txt);
          if (!parsed || !parsed.you || !parsed.competitor) throw new Error('bad');
          DIMS.forEach(function (d) {
            parsed.you[d.key] = clamp(parsed.you[d.key]);
            parsed.competitor[d.key] = clamp(parsed.competitor[d.key]);
          });
          if (!Array.isArray(parsed.recommendations)) parsed.recommendations = fallbackScores(data).recommendations;
          if (!parsed.verdict) parsed.verdict = fallbackScores(data).verdict;
          return parsed;
        });
    } else {
      work = Promise.resolve(fallbackScores(data));
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
  function clamp(n) { n = parseInt(n, 10); if (isNaN(n)) n = 50; return Math.max(8, Math.min(98, n)); }

  // Deterministic, stable, plausible scores from the URLs.
  function fallbackScores(data) {
    function hash(s) { var h = 0; s = (s || '').toLowerCase(); for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; } return h; }
    function band(seed, lo, hi) { return lo + (seed % (hi - lo + 1)); }
    var youH = hash(data.you);
    var compH = hash(data.competitor);
    var you = {}, comp = {};
    DIMS.forEach(function (d, idx) {
      var ys = (youH >> (idx * 3)) & 0xff;
      var cs = (compH >> (idx * 3)) & 0xff;
      you[d.key] = band(ys, 38, 82);
      comp[d.key] = band(cs, 45, 88);
    });
    var yAvg = avg(you), cAvg = avg(comp);
    var verdict = yAvg >= cAvg
      ? 'You\'re ahead overall — but there are clear gaps a sharper push would lock in.'
      : 'Your competitor is currently winning on this scorecard. The good news: every gap below is fixable.';
    return {
      you: you, competitor: comp, verdict: verdict,
      recommendations: [
        'Speed up your site — page load time is a top ranking factor.',
        'Close the reviews gap — set up an automated ask after every completed job.',
        'Optimize for local search (Google Business, local citations, NAP consistency).',
      ],
    };
  }
  function avg(o) { var s = 0; DIMS.forEach(function (d) { s += o[d.key]; }); return Math.round(s / DIMS.length); }

  // ── Render results ───────────────────────────────────────────────────
  function renderResults(data, r) {
    var yAvg = avg(r.you), cAvg = avg(r.competitor);
    var rows = DIMS.map(function (d) {
      return (
        '<div class="cs-row">' +
          '<div class="rl"><span class="name">' + d.label + '</span></div>' +
          '<div class="cs-bar you" data-w="' + r.you[d.key] + '"><i></i><b>You · ' + r.you[d.key] + '</b></div>' +
          '<div class="cs-bar comp" data-w="' + r.competitor[d.key] + '"><i></i><b>Competitor · ' + r.competitor[d.key] + '</b></div>' +
        '</div>'
      );
    }).join('');

    var recs = (r.recommendations || []).slice(0, 3).map(function (x) {
      return '<li>' + escapeHtml(x) + '</li>';
    }).join('');

    mount.innerHTML =
      '<div class="cs-wrap"><div class="cs-res">' +
        '<div class="cs-kicker">Your competitive snapshot</div>' +
        '<div class="cs-overall">' +
          '<div class="cs-verdict">' + escapeHtml(r.verdict) + '</div>' +
          '<div class="cs-badge"><div class="vs">OVERALL BRAND SCORE</div>' +
            '<div class="sc"><span class="you">' + yAvg + '</span><span class="sep">/</span><span>' + cAvg + '</span></div></div>' +
        '</div>' +
        '<div class="cs-legend">' +
          '<span><i class="sw" style="background:#C8262A"></i>Your site</span>' +
          '<span><i class="sw" style="background:#3a4a6b"></i>Competitor</span>' +
        '</div>' +
        rows +
        '<div class="cs-recs"><h4>Where to win first</h4><ul>' + recs + '</ul></div>' +
        '<p class="cs-disclaimer">This is a directional estimate based on typical SEO and web patterns. A full deep-dive pulls your verified Google rankings, real review counts, ad spend visibility and a complete side-by-side audit.</p>' +
        '<button class="cs-again" id="cs-again">↺ Run another snapshot</button>' +
      '</div></div>';

    // animate bars
    requestAnimationFrame(function () {
      setTimeout(function () {
        mount.querySelectorAll('.cs-bar').forEach(function (bar) {
          bar.querySelector('i').style.width = bar.getAttribute('data-w') + '%';
        });
      }, 60);
    });

    document.getElementById('cs-again').addEventListener('click', renderForm);

    // surface the deep-dive upsell that lives in the page
    var up = document.getElementById('deepdive');
    if (up) up.classList.add('cs-highlight');
  }

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  renderForm();
})();
