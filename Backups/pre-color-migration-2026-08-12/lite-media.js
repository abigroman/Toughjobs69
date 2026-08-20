// lite-media.js — drop decorative weight on small screens without wifi.
// Adds html.lite-media when the viewport is tablet/phone-sized AND the
// connection is metered, slow, or not wifi. Heavy fixed background textures
// and the drifting tool cutouts are suppressed in that state.
(function () {
  var SMALL = 1024; // tablet and below

  function connectionIsLight() {
    var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!c) return false;                       // unknown: assume ok, keep visuals
    if (c.saveData) return true;                // user asked for less data
    var type = c.type;                          // 'wifi' | 'cellular' | 'ethernet' | ...
    if (type && type !== 'wifi' && type !== 'ethernet') return true;
    var eff = c.effectiveType;                  // 'slow-2g' | '2g' | '3g' | '4g'
    if (eff && eff !== '4g') return true;
    return false;
  }

  function evaluate() {
    var lite = window.innerWidth <= SMALL && connectionIsLight();
    document.documentElement.classList.toggle('lite-media', lite);
  }

  var css = [
    'html.lite-media .ft-bg{display:none !important}',
    'html.lite-media .bg-dark,',
    'html.lite-media .bg-navy,',
    'html.lite-media .bg-light,',
    'html.lite-media .bg-accent2,',
    'html.lite-media .bg-blueprint-dark,',
    'html.lite-media .bg-blueprint-navy,',
    'html.lite-media .bg-blueprint-light,',
    'html.lite-media .gb-section,',
    'html.lite-media .td-analysis,',
    'html.lite-media body,',
    'html.lite-media main{background-image:none !important;background-attachment:scroll !important}'
  ].join('');

  var style = document.createElement('style');
  style.id = 'lite-media-styles';
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);

  evaluate();
  window.addEventListener('resize', evaluate, { passive: true });
  var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (c && c.addEventListener) c.addEventListener('change', evaluate);
})();
