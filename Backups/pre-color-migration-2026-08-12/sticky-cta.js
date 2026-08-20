// sticky-cta.js — Toughjobs corner "Start Assessment" badge
// Spinning circular badge anchored to the TOP-RIGHT, tucked under the header.
// Clicking it takes the user to the assessment / free-tools intake.
(function () {
  var css = `
  .tj-cta-container {
    position: absolute;
    top: 100%;
    right: 0;
    width: 134px;
    height: 134px;
    z-index: 950;
    pointer-events: none;
    animation: tj-cta-in .5s ease-out .6s backwards;
  }
  /* Triangular wedge anchoring the badge into the RIGHT corner */
  .tj-cta-wedge {
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        45deg,
        #C8262A 0px,
        #C8262A 2px,
        #0A0F1C 2px,
        #0A0F1C 4px
      );
    clip-path: polygon(100% 0, 100% 100%, 0 0);
    box-shadow: 0 8px 20px rgba(0,0,0,.30);
  }
  .tj-cta-badge {
    position: absolute;
    top: 16px;
    right: 16px;
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
  .tj-cta-badge:hover { transform: scale(1.07); }
  .tj-cta-badge:active { transform: scale(1.0); }
  .tj-cta-badge:focus-visible { outline: 3px solid #FFFFFF; outline-offset: 3px; border-radius: 50%; }
  .tj-cta-badge svg { width: 100%; height: 100%; display: block; overflow: visible; }
  @keyframes tj-cta-in {
    from { opacity: 0; transform: translate(20px,-20px); }
    to   { opacity: 1; transform: translate(0,0); }
  }
  @keyframes tj-cta-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  .tj-cta-ring-text { transform-origin: 100px 100px; animation: tj-cta-spin 8s linear infinite; }
  @media (max-width: 768px) {
    .tj-cta-container { width: 134px; height: 134px; }
    .tj-cta-badge { width: 92px; height: 92px; top: 14px; right: 14px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .tj-cta-container, .tj-cta-ring-text, .tj-cta-badge { animation: none; transition: none; }
  }
  `;

  var style = document.createElement('style');
  style.id = 'tj-cta-styles';
  style.textContent = css;
  document.head.appendChild(style);

  var container = document.createElement('div');
  container.className = 'tj-cta-container';

  var wedge = document.createElement('div');
  wedge.className = 'tj-cta-wedge';
  container.appendChild(wedge);

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'tj-cta-badge';
  btn.setAttribute('aria-label', 'Start your free marketing assessment');
  btn.title = 'Start Assessment';
  btn.innerHTML = `
    <svg viewBox="0 0 200 200" role="img" aria-hidden="true">
      <defs>
        <path id="tj-cta-circle" d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0" />
      </defs>

      <!-- Outer disc -->
      <circle cx="100" cy="100" r="98" fill="#0A0F1C"/>
      <circle cx="100" cy="100" r="94" fill="#C8262A"/>

      <!-- Rotating curved label -->
      <g class="tj-cta-ring-text">
        <text fill="#FFFFFF"
              font-family="'Archivo Black','Archivo',sans-serif"
              font-size="16" font-weight="900"
              letter-spacing="2.5"
              text-anchor="middle">
          <textPath href="#tj-cta-circle" startOffset="25%">START ASSESSMENT</textPath>
        </text>
        <text fill="#FFFFFF"
              font-family="'Archivo Black','Archivo',sans-serif"
              font-size="16" font-weight="900"
              letter-spacing="2.5"
              text-anchor="middle" opacity=".75">
          <textPath href="#tj-cta-circle" startOffset="75%">FREE &#183; FAST &#183;</textPath>
        </text>
      </g>

      <!-- Inner knockout circle -->
      <circle cx="100" cy="100" r="54" fill="#FFFFFF"/>
      <circle cx="100" cy="100" r="54" fill="none" stroke="#0A0F1C" stroke-width="3"/>

      <!-- Lightning bolt mark -->
      <path d="M 110 72 L 84 106 L 99 106 L 91 130 L 118 94 L 102 94 Z"
            fill="#C8262A" stroke="#C8262A" stroke-width="4"
            stroke-linejoin="round"/>
    </svg>
  `;
  btn.addEventListener('click', function () {
    window.location.href = 'free-tools.html';
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
