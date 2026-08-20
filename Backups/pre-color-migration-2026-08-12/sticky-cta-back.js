// sticky-cta-back.js — Toughjobs corner "Go Back" badge
// Mirror of the Start Assessment badge, anchored TOP-LEFT under the header.
// Sends the visitor back to the TRADE page they came from.
(function () {
  // Service pages now use the main navigation and footer consistently.
  // The former corner Return badge is intentionally disabled site-wide.
  document.querySelectorAll('.tj-back-container').forEach(function (badge) {
    badge.remove();
  });
  return;
  // ── Work out where "back" should go ──────────────────────────────
  // 1. If the referrer is a trade-*.html page on this site, use it (and cache it).
  // 2. Else fall back to a previously cached trade origin.
  // 3. Else fall back to the services hub.
  function resolveOrigin() {
    var TRADE_RE = /\/trade-[^\/?#]+\.html/i;
    try {
      var ref = document.referrer || '';
      if (ref && TRADE_RE.test(ref)) {
        var sameHost = ref.indexOf(location.origin) === 0 || ref.indexOf('://') === -1;
        if (sameHost || location.protocol === 'file:') {
          try { sessionStorage.setItem('tj-trade-origin', ref); } catch (e) {}
          return ref;
        }
      }
      var cached = null;
      try { cached = sessionStorage.getItem('tj-trade-origin'); } catch (e) {}
      if (cached && TRADE_RE.test(cached)) return cached;
    } catch (e) {}
    return 'services.html';
  }

  var css = `
  .tj-back-container {
    position: absolute;
    top: 100%;
    left: 0;
    width: 134px;
    height: 134px;
    z-index: 950;
    pointer-events: none;
    animation: tj-back-in .5s ease-out .6s backwards;
  }
  /* Triangular wedge anchoring the badge into the LEFT corner */
  .tj-back-wedge {
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        -45deg,
        #C8262A 0px,
        #C8262A 2px,
        #0A0F1C 2px,
        #0A0F1C 4px
      );
    clip-path: polygon(0 0, 0 100%, 100% 0);
    box-shadow: 0 8px 20px rgba(0,0,0,.30);
  }
  .tj-back-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    width: 112px;
    height: 112px;
    display: block;
    cursor: pointer;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;
    filter: drop-shadow(0 4px 10px rgba(0,0,0,.35));
    transition: transform .25s cubic-bezier(.4,0,.2,1);
    border: 0;
    background: transparent;
    padding: 0;
  }
  .tj-back-badge:hover { transform: scale(1.07); }
  .tj-back-badge:active { transform: scale(1.0); }
  .tj-back-badge:focus-visible { outline: 3px solid #FFFFFF; outline-offset: 3px; border-radius: 50%; }
  .tj-back-badge svg { width: 100%; height: 100%; display: block; overflow: visible; }
  .tj-back-ring-text { animation: tj-back-spin 18s linear infinite; transform-origin: 100px 100px; }
  .tj-back-badge:hover .tj-back-ring-text { animation-duration: 6s; }
  @keyframes tj-back-spin { to { transform: rotate(-360deg); } }
  @keyframes tj-back-in {
    from { opacity: 0; transform: translate(-20px,-20px); }
    to   { opacity: 1; transform: translate(0,0); }
  }
  @media (max-width: 768px) {
    .tj-back-container { width: 134px; height: 134px; }
    .tj-back-badge { width: 92px; height: 92px; top: 14px; left: 14px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .tj-back-container, .tj-back-ring-text, .tj-back-badge { animation: none; transition: none; }
  }
  `;

  var style = document.createElement('style');
  style.id = 'tj-back-styles';
  style.textContent = css;
  document.head.appendChild(style);

  var container = document.createElement('div');
  container.className = 'tj-back-container';

  var wedge = document.createElement('div');
  wedge.className = 'tj-back-wedge';
  container.appendChild(wedge);

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'tj-back-badge';
  btn.setAttribute('aria-label', 'Go back to the trade page');
  btn.title = 'Go Back';
  btn.innerHTML = `
    <svg viewBox="0 0 200 200" role="img" aria-hidden="true">
      <defs>
        <path id="tj-back-circle" d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0" />
      </defs>

      <!-- Outer disc -->
      <circle cx="100" cy="100" r="98" fill="#0A0F1C"/>
      <circle cx="100" cy="100" r="94" fill="#C8262A"/>

      <!-- Rotating curved label -->
      <g class="tj-back-ring-text">
        <text fill="#FFFFFF"
              font-family="'Archivo Black','Archivo',sans-serif"
              font-size="18" font-weight="900"
              letter-spacing="3"
              text-anchor="middle">
          <textPath href="#tj-back-circle" startOffset="25%">GO BACK</textPath>
        </text>
        <text fill="#FFFFFF"
              font-family="'Archivo Black','Archivo',sans-serif"
              font-size="16" font-weight="900"
              letter-spacing="2.5"
              text-anchor="middle" opacity=".75">
          <textPath href="#tj-back-circle" startOffset="75%">RETURN &#183;</textPath>
        </text>
      </g>

      <!-- Inner knockout circle -->
      <circle cx="100" cy="100" r="54" fill="#FFFFFF"/>
      <circle cx="100" cy="100" r="54" fill="none" stroke="#0A0F1C" stroke-width="3"/>

      <!-- Back (left) arrow mark -->
      <path d="M 110 78 L 84 100 L 110 122" fill="none" stroke="#C8262A" stroke-width="11"
            stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="118" y1="100" x2="84" y2="100" stroke="#C8262A" stroke-width="11" stroke-linecap="round"/>
    </svg>
  `;
  btn.addEventListener('click', function () {
    window.location.href = resolveOrigin();
  });
  container.appendChild(btn);

  // Attach the badge INSIDE the sticky header so it moves with it automatically.
  function attach() {
    var header = document.querySelector('header');
    if (!header) {
      setTimeout(attach, 60);
      return;
    }
    var pos = window.getComputedStyle(header).position;
    if (pos === 'static') header.style.position = 'relative';
    header.style.overflow = 'visible';
    header.appendChild(container);
  }
  attach();
})();
