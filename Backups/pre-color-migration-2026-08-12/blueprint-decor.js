// blueprint-decor.js — adds the 4-corner crosshair marks + "DWG. NO." stamp
// to any element with class="bp-section". Configure via data attributes:
//   data-mark-color   crosshair stroke color (default rgba(255,255,255,.32))
//   data-stamp-color  stamp text/border color (defaults to mark color)
//   data-dwg          drawing number, e.g. "SVC-02"
//   data-sheet        sheet title, e.g. "WEBSITES"
//   data-scale        e.g. "1:1" (default)
(function () {
  function markSvg(color) {
    return '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">' +
      '<line x1="20" y1="0" x2="20" y2="14" stroke="' + color + '" stroke-width="1"/>' +
      '<line x1="20" y1="26" x2="20" y2="40" stroke="' + color + '" stroke-width="1"/>' +
      '<line x1="0" y1="20" x2="14" y2="20" stroke="' + color + '" stroke-width="1"/>' +
      '<line x1="26" y1="20" x2="40" y2="20" stroke="' + color + '" stroke-width="1"/>' +
      '<circle cx="20" cy="20" r="6" stroke="' + color + '" stroke-width="1" fill="none"/>' +
      '</svg>';
  }

  function attach() {
    document.querySelectorAll('.bp-section').forEach(function (el) {
      if (el.dataset.bpDecorated) return;
      el.dataset.bpDecorated = '1';
      var color = el.getAttribute('data-mark-color') || 'rgba(255,255,255,.32)';
      var stampColor = el.getAttribute('data-stamp-color') || color;
      var dwg = el.getAttribute('data-dwg');
      var sheet = el.getAttribute('data-sheet');
      var scale = el.getAttribute('data-scale') || '1:1';

      var pos = window.getComputedStyle(el).position;
      if (pos === 'static') el.style.position = 'relative';

      var svg = markSvg(color);
      [['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].forEach(function (corner) {
        var wrap = document.createElement('div');
        wrap.style.cssText = 'position:absolute;z-index:1;pointer-events:none;' + corner[0] + ':28px;' + corner[1] + ':28px';
        wrap.innerHTML = svg;
        el.appendChild(wrap);
      });

      if (dwg) {
        var stamp = document.createElement('div');
        stamp.style.cssText = 'position:absolute;top:28px;right:88px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:' + stampColor + ';line-height:1.6;border:1px solid ' + stampColor + ';padding:8px 14px;pointer-events:none;z-index:1';
        stamp.innerHTML = '<div>DWG. NO. <strong style="letter-spacing:.1em">' + dwg + '</strong></div><div>SHEET \u2014 ' + sheet + '</div><div>SCALE ' + scale + '</div>';
        el.appendChild(stamp);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }
})();
