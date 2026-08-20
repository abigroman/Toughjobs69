// service-page.js — scroll reveals, KPI counters, animated comparison + ROI calculator
(function () {
  // Replace legacy compact service footers with the shared main-site footer.
  // Main service pages already load inject-footer.js directly; this branch
  // keeps apparel, print, kit, and licensing detail pages consistent.
  var legacyFooter = document.querySelector('body > footer');
  var sharedFooterLoader = document.querySelector('script[src="inject-footer.js"]');
  if (legacyFooter && !sharedFooterLoader) {
    legacyFooter.remove();
    sharedFooterLoader = document.createElement('script');
    sharedFooterLoader.src = 'inject-footer.js';
    document.body.appendChild(sharedFooterLoader);
  }
  // ── Scroll reveal ──────────────────────────────────────────────────
  var reveals = document.querySelectorAll('.sp .reveal');
  var ro = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  reveals.forEach(function (el) { ro.observe(el); });

  // ── KPI / number counters ──────────────────────────────────────────
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var dec = (el.getAttribute('data-dec') | 0);
    var dur = 1400, start = performance.now();
    function tick(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var v = target * eased;
      el.textContent = dec ? v.toFixed(dec) : Math.round(v).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = dec ? target.toFixed(dec) : target.toLocaleString();
    }
    requestAnimationFrame(tick);
  }
  var co = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { animateCount(e.target); co.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.sp [data-count]').forEach(function (el) { co.observe(el); });

  // ── ROI calculator ─────────────────────────────────────────────────
  var D = null;
  // Try to read from data island first, fall back to window.SERVICE_DATA for legacy pages
  var dataEl = document.getElementById('service-data');
  if (dataEl && dataEl.type === 'application/json') {
    try {
      var parsed = JSON.parse(dataEl.textContent);
      D = parsed.roi;
    } catch (e) {}
  }
  if (!D && window.SERVICE_DATA && window.SERVICE_DATA.roi) {
    D = window.SERVICE_DATA.roi;
  }
  if (D && document.getElementById('roi-driver') && document.getElementById('roi-job')) {
    var fmt = function (n) { return n.toLocaleString('en-US', { maximumFractionDigits: 0 }); };
    var money = function (n) { return '$' + fmt(n); };
    var driver = document.getElementById('roi-driver');
    var job = document.getElementById('roi-job');
    function recalc() {
      var dv = +driver.value, jv = +job.value;
      document.getElementById('roi-driver-val').textContent = fmt(dv) + (D.driverSuffix || '');
      document.getElementById('roi-job-val').textContent = money(jv);
      var extraLeads = dv * D.liftPct;
      var jobs = extraLeads * (D.closeRate || 0.3);
      var revenue = jobs * jv;
      var cost = D.ourCost;
      var roi = cost > 0 ? revenue / cost : 0;
      document.getElementById('roi-revenue').textContent = money(Math.round(revenue));
      document.getElementById('roi-leads').textContent = '+' + fmt(Math.round(extraLeads));
      document.getElementById('roi-multiple').textContent = (roi).toFixed(1) + '×';
      document.getElementById('roi-cost').textContent = money(cost);
    }
    driver.addEventListener('input', recalc);
    job.addEventListener('input', recalc);
    recalc();
  }

  // ── Nav scroll shrink (in case page-local handler absent) ──────────
  var nh = document.getElementById('nav-header');
  if (nh) {
    window.addEventListener('scroll', function () {
      nh.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }
})();
