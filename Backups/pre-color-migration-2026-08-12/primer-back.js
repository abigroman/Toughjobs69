// primer-back.js — fixed top-left "Go Back" badge for standalone Primer pages
// (these pages have no shared header, so this attaches directly to <body>).
(function () {
  var css = `
  .tj-primer-back {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 9999;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px 12px 16px;
    background: #C8262A;
    color: #fff;
    border: 0;
    border-radius: 999px;
    font-family: "Archivo","Archivo Black",Arial,sans-serif;
    font-weight: 800;
    font-size: 13px;
    letter-spacing: .04em;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(0,0,0,.35);
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .tj-primer-back:hover { transform: translate(-2px,-2px); box-shadow: 0 10px 24px rgba(0,0,0,.4); }
  .tj-primer-back:active { transform: translate(0,0); }
  .tj-primer-back svg { width: 16px; height: 16px; flex: none; }
  @media (max-width: 640px) {
    .tj-primer-back { top: 12px; left: 12px; padding: 10px 16px 10px 12px; font-size: 12px; }
  }
  `;
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'tj-primer-back';
  btn.setAttribute('aria-label', 'Go back');
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg><span>Go Back</span>';
  btn.addEventListener('click', function () {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = 'trades-list.html';
    }
  });
  document.body.appendChild(btn);
})();
