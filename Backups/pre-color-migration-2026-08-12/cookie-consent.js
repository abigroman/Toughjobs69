/* Toughjobs — Cookie Consent Banner
   Sticky bottom bar, shown once per browser until the visitor accepts or declines.
   Choice is stored in localStorage under 'tj_cookie_consent' ('accepted' | 'declined').
*/
(function () {
  var STORAGE_KEY = 'tj_cookie_consent';

  function alreadyDecided() {
    try { return !!localStorage.getItem(STORAGE_KEY); } catch (e) { return false; }
  }

  function setChoice(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
  }

  function buildBanner() {
    var wrap = document.createElement('div');
    wrap.id = 'tj-cookie-banner';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-label', 'Cookie notice');

    wrap.innerHTML =
      '<div class="tj-cookie-inner">' +
        '<div class="tj-cookie-text">' +
          '<span class="tj-cookie-eyebrow">We use cookies</span>' +
          '<p>Just the essentials to keep this site running smoothly. No tracking today &mdash; if that ever changes, you\'ll see it listed on our <a href="cookies.html">Cookie Policy</a>.</p>' +
        '</div>' +
        '<div class="tj-cookie-actions">' +
          '<a href="cookies.html" class="tj-cookie-link">Read the policy</a>' +
          '<button type="button" class="tj-cookie-btn tj-cookie-decline">Decline</button>' +
          '<button type="button" class="tj-cookie-btn tj-cookie-accept">Accept</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(wrap);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () { wrap.classList.add('tj-cookie-visible'); });
    });

    function dismiss(choice) {
      setChoice(choice);
      wrap.classList.remove('tj-cookie-visible');
      wrap.addEventListener('transitionend', function handler() {
        wrap.removeEventListener('transitionend', handler);
        wrap.remove();
      });
      // Fallback removal in case transitionend doesn't fire
      setTimeout(function () { if (wrap.parentNode) wrap.remove(); }, 500);
    }

    wrap.querySelector('.tj-cookie-accept').addEventListener('click', function () { dismiss('accepted'); });
    wrap.querySelector('.tj-cookie-decline').addEventListener('click', function () { dismiss('declined'); });
  }

  function injectStyles() {
    var style = document.createElement('style');
    style.id = 'tj-cookie-styles';
    style.textContent =
      '#tj-cookie-banner{position:fixed;left:0;right:0;bottom:0;z-index:9999;' +
      'transform:translateY(110%);transition:transform .45s cubic-bezier(.16,1,.3,1);' +
      'background:#0A0F1C;border-top:3px solid #C8262A;' +
      'box-shadow:0 -12px 40px rgba(0,0,0,.35);' +
      'font-family:"Archivo",sans-serif;}' +
      '#tj-cookie-banner.tj-cookie-visible{transform:translateY(0);}' +
      '#tj-cookie-banner .tj-cookie-inner{max-width:1240px;margin:0 auto;padding:22px 32px;' +
      'display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;}' +
      '#tj-cookie-banner .tj-cookie-text{flex:1 1 380px;min-width:260px;}' +
      '#tj-cookie-banner .tj-cookie-eyebrow{display:block;font-family:"Archivo Black",sans-serif;' +
      'font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#C8262A;margin-bottom:6px;}' +
      '#tj-cookie-banner .tj-cookie-text p{margin:0;font-size:14.5px;line-height:1.55;color:rgba(255,255,255,.82);}' +
      '#tj-cookie-banner .tj-cookie-text a{color:#FFFFFF;text-decoration:underline;text-underline-offset:2px;}' +
      '#tj-cookie-banner .tj-cookie-text a:hover{color:#C8262A;}' +
      '#tj-cookie-banner .tj-cookie-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap;flex-shrink:0;}' +
      '#tj-cookie-banner .tj-cookie-link{font-size:13px;font-weight:700;color:rgba(255,255,255,.65);' +
      'text-decoration:none;white-space:nowrap;border-bottom:1px solid transparent;}' +
      '#tj-cookie-banner .tj-cookie-link:hover{color:#FFFFFF;border-bottom-color:rgba(255,255,255,.5);}' +
      '#tj-cookie-banner .tj-cookie-btn{font-family:"Archivo",sans-serif;font-weight:800;font-size:13px;' +
      'letter-spacing:.04em;text-transform:uppercase;padding:13px 26px;border:none;cursor:pointer;' +
      'white-space:nowrap;transition:opacity .15s ease, transform .15s ease;}' +
      '#tj-cookie-banner .tj-cookie-btn:hover{transform:translateY(-1px);}' +
      '#tj-cookie-banner .tj-cookie-decline{background:transparent;color:#FFFFFF;border:2px solid rgba(255,255,255,.4);}' +
      '#tj-cookie-banner .tj-cookie-decline:hover{border-color:#FFFFFF;}' +
      '#tj-cookie-banner .tj-cookie-accept{background:#C8262A;color:#FFFFFF;}' +
      '#tj-cookie-banner .tj-cookie-accept:hover{background:#A90100;}' +
      '@media (max-width:640px){' +
      '#tj-cookie-banner .tj-cookie-inner{padding:20px;gap:18px;}' +
      '#tj-cookie-banner .tj-cookie-actions{width:100%;justify-content:space-between;}' +
      '#tj-cookie-banner .tj-cookie-link{order:3;width:100%;text-align:center;margin-top:4px;}' +
      '#tj-cookie-banner .tj-cookie-btn{flex:1;text-align:center;}' +
      '}';
    document.head.appendChild(style);
  }

  function init() {
    if (alreadyDecided()) return;
    if (document.getElementById('tj-cookie-banner')) return;
    injectStyles();
    buildBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
