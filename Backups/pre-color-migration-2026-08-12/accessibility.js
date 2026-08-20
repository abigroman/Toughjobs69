// accessibility.js — Toughjobs slide-out accessibility menu
// Self-contained: injects styles + panel DOM, wires the existing .accessibility-btn
(function () {
  // ── Inject styles ─────────────────────────────────────────────────────────
  var css = `
  /* Accessibility trigger button */
  .accessibility-btn {
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.2s ease;
    padding: 0;
    box-shadow: none;
  }
  .accessibility-btn.visible { opacity: 1; }
  .accessibility-btn:hover { transform: scale(1.08); }
  .accessibility-btn:active { transform: scale(0.96); }
  .accessibility-btn img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    display: block;
    border-radius: 50%;
  }

  /* Slide-out panel */
  .a11y-panel {
    position: fixed; left: 0; top: 0;
    width: 100%; max-width: 420px; height: 100vh;
    background: #C8262A;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform .35s cubic-bezier(.4,0,.2,1);
    overflow-y: auto; overflow-x: hidden;
    display: flex; flex-direction: column;
    font-family: "Inter","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  .a11y-panel.open { transform: translateX(0); }

  /* Header */
  .a11y-header {
    padding: 28px 22px 22px;
    display: flex; flex-direction: column; align-items: center; text-align: center;
    position: relative;
    background: #A90100;
  }
  .a11y-close {
    position: absolute; top: 18px; right: 18px;
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(0,0,0,.25); border: 2px solid rgba(255,255,255,.7);
    color: #fff; font-size: 20px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background .2s ease, transform .2s ease;
  }
  .a11y-close:hover { background: rgba(0,0,0,.4); transform: scale(1.08); }
  .a11y-close:focus-visible { outline: 3px solid #fff; outline-offset: 2px; }

  .a11y-badge {
    width: 60px; height: 60px; border-radius: 50%;
    background: #fff; display: flex; align-items: center; justify-content: center;
    margin-bottom: 14px; overflow: hidden;
  }
  .a11y-badge img { width: 100%; height: 100%; object-fit: contain; }
  .a11y-title {
    color: #fff;
    font-family: "Archivo Black","Archivo",sans-serif;
    font-size: 1.35rem; font-weight: 900; text-transform: uppercase;
    letter-spacing: -.01em; line-height: 1.1;
  }
  .a11y-sub {
    background: none; border: none; color: rgba(255,255,255,.85);
    font-size: .85rem; text-decoration: underline; cursor: pointer; margin-top: 8px;
    font-family: inherit; min-height: 44px; padding: 10px 8px;
  }
  .a11y-sub:hover { color: #fff; }

  /* Content area */
  .a11y-content { flex: 1; padding: 18px 14px 32px; background: #C8262A; }
  .a11y-card {
    background: #fff; border-radius: 14px; padding: 20px; margin-bottom: 16px;
  }
  .a11y-section-title {
    font-family: "Archivo Black","Archivo",sans-serif;
    font-size: .95rem; font-weight: 900; text-transform: uppercase;
    letter-spacing: .04em; color: #0A0F1C; margin: 0 0 16px;
  }

  .a11y-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
  }
  .a11y-stepper {
    grid-column: 1 / -1;
    background: #F4F5F7; border-radius: 12px; padding: 14px;
    display: flex; flex-direction: column; align-items: center; gap: 10px;
    margin-bottom: 4px;
  }
  .a11y-stepper-label {
    font-weight: 700; font-size: .9rem; color: #0A0F1C;
  }
  .a11y-stepper-controls {
    display: flex; align-items: center; gap: 14px; width: 100%; justify-content: center;
  }
  .a11y-step-btn {
    width: 44px; height: 44px; border-radius: 50%;
    background: #C8262A; color: #fff; border: none;
    font-size: 22px; font-weight: 700; cursor: pointer; line-height: 1;
    display: flex; align-items: center; justify-content: center;
    transition: filter .2s ease, transform .15s ease;
  }
  .a11y-step-btn:hover { filter: brightness(.85); transform: scale(1.1); }
  .a11y-step-btn:focus-visible { outline: 3px solid #0A0F1C; outline-offset: 2px; }
  .a11y-step-value {
    min-width: 96px; text-align: center; font-size: .85rem; color: #555;
    background: #fff; border-radius: 6px; padding: 8px 4px; font-weight: 600;
  }

  /* Toggle tiles */
  .a11y-toggle {
    background: #F4F5F7; border: 2px solid transparent; border-radius: 12px;
    padding: 16px 10px; cursor: pointer; text-align: center;
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    transition: border-color .2s ease, background .2s ease, transform .15s ease;
    font-family: inherit;
  }
  .a11y-toggle:hover { transform: translateY(-2px); border-color: #C8262A; }
  .a11y-toggle:focus-visible { outline: 3px solid #C8262A; outline-offset: 2px; }
  .a11y-toggle.active { border-color: #C8262A; background: #FFF3F3; }
  .a11y-toggle-icon {
    width: 40px; height: 40px; border-radius: 50%; background: #fff;
    display: flex; align-items: center; justify-content: center; font-size: 18px;
    color: #0A0F1C; border: 1px solid #e6e6e6; font-weight: 700;
  }
  .a11y-toggle-label { font-size: .8rem; font-weight: 600; color: #0A0F1C; line-height: 1.2; }

  /* Navigation links */
  .a11y-nav { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
  .a11y-nav a {
    display: block; padding: 13px 16px; background: #F4F5F7; border-radius: 8px;
    color: #0A0F1C; text-decoration: none; font-weight: 700;
    font-size: .92rem; transition: background .2s ease, transform .15s ease;
  }
  .a11y-nav a:hover { background: #E8E8E8; transform: translateX(4px); }
  .a11y-nav a:focus-visible { outline: 3px solid #C8262A; outline-offset: 2px; }

  /* Reset button */
  .a11y-reset {
    width: 100%; margin-top: 4px; padding: 14px; border: none; border-radius: 10px;
    background: #0A0F1C; color: #fff;
    font-family: "Archivo",sans-serif;
    font-weight: 800; letter-spacing: .06em; text-transform: uppercase; font-size: .8rem;
    cursor: pointer; transition: filter .2s ease; min-height: 44px;
  }
  .a11y-reset:hover { filter: brightness(1.4); }
  .a11y-reset:focus-visible { outline: 3px solid #C8262A; outline-offset: 2px; }

  /* Dim overlay */
  .a11y-overlay {
    position: fixed; inset: 0;
    background: #000; z-index: 999;
    opacity: 0; pointer-events: none;
    transition: opacity .35s cubic-bezier(.4,0,.2,1);
  }
  .a11y-overlay.open { opacity: .5; pointer-events: auto; }

  /* Accessibility class effects on <html> */
  html.a11y-readable, html.a11y-readable body { font-family: Verdana, Tahoma, sans-serif !important; }
  html.a11y-spacing, html.a11y-spacing body { letter-spacing: .12em !important; word-spacing: .16em !important; }
  html.a11y-bold body, html.a11y-bold body * { font-weight: 700 !important; }
  html.a11y-align body p, html.a11y-align body li { text-align: left !important; }

  @media (max-width: 1024px) {
    video[muted][playsinline] { display: none !important; }
  }
  @media (max-width: 480px) { .a11y-panel { max-width: 100%; } }
  @media (prefers-reduced-motion: reduce) {
    .a11y-panel, .a11y-overlay, .a11y-toggle, .a11y-step-btn, .a11y-nav a, .accessibility-btn { transition: none; }
  }
  `;

  var style = document.createElement('style');
  style.id = 'a11y-styles';
  style.textContent = css;
  document.head.appendChild(style);

  // Disable decorative background video playback on tablets and phones.
  var compactVideoMedia = window.matchMedia('(max-width: 1024px)');
  var decorativeVideoSelector = 'video[muted][playsinline]';

  function updateDecorativeVideo(video) {
    if (compactVideoMedia.matches) {
      if (video.hasAttribute('autoplay')) {
        video.dataset.desktopAutoplay = 'true';
        video.removeAttribute('autoplay');
      }
      video.pause();
      video.preload = 'none';
    } else if (video.dataset.desktopAutoplay === 'true') {
      video.setAttribute('autoplay', '');
      delete video.dataset.desktopAutoplay;
      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {});
      }
    }
  }

  function scanDecorativeVideos(root) {
    if (root.matches && root.matches(decorativeVideoSelector)) {
      updateDecorativeVideo(root);
    }
    if (root.querySelectorAll) {
      root.querySelectorAll(decorativeVideoSelector).forEach(updateDecorativeVideo);
    }
  }

  scanDecorativeVideos(document);
  new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1) scanDecorativeVideos(node);
      });
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
  compactVideoMedia.addEventListener('change', function () {
    document.querySelectorAll(decorativeVideoSelector).forEach(updateDecorativeVideo);
  });

  // ── Build panel DOM ───────────────────────────────────────────────────────
  var overlay = document.createElement('div');
  overlay.className = 'a11y-overlay';

  var panel = document.createElement('aside');
  panel.className = 'a11y-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-label', 'Accessibility adjustments');
  panel.innerHTML = `
    <div class="a11y-header">
      <button class="a11y-close" aria-label="Close accessibility menu">&times;</button>
      <div class="a11y-badge"><img src="assets/accessibility-logo.webp" alt=""></div>
      <h2 class="a11y-title">Accessibility<br>Adjustments</h2>
      <button class="a11y-sub" data-close>Hide Toolbar</button>
    </div>
    <div class="a11y-content">

      <div class="a11y-card">
        <h3 class="a11y-section-title">Content Modules</h3>
        <div class="a11y-row">
          <div class="a11y-stepper">
            <span class="a11y-stepper-label">Font Size</span>
            <div class="a11y-stepper-controls">
              <button class="a11y-step-btn" data-step="font-down" aria-label="Decrease font size">&minus;</button>
              <span class="a11y-step-value" data-val="font">Default</span>
              <button class="a11y-step-btn" data-step="font-up" aria-label="Increase font size">+</button>
            </div>
          </div>
          <div class="a11y-stepper">
            <span class="a11y-stepper-label">Line Height</span>
            <div class="a11y-stepper-controls">
              <button class="a11y-step-btn" data-step="line-down" aria-label="Decrease line height">&minus;</button>
              <span class="a11y-step-value" data-val="line">Default</span>
              <button class="a11y-step-btn" data-step="line-up" aria-label="Increase line height">+</button>
            </div>
          </div>
          <button class="a11y-toggle" data-tool="readable" aria-pressed="false">
            <span class="a11y-toggle-icon">A</span>
            <span class="a11y-toggle-label">Readable Font</span>
          </button>
          <button class="a11y-toggle" data-tool="bigcursor" aria-pressed="false">
            <span class="a11y-toggle-icon">&#10138;</span>
            <span class="a11y-toggle-label">Big Cursor</span>
          </button>
          <button class="a11y-toggle" data-tool="spacing" aria-pressed="false">
            <span class="a11y-toggle-icon">&#8596;</span>
            <span class="a11y-toggle-label">Letter Spacing</span>
          </button>
          <button class="a11y-toggle" data-tool="align" aria-pressed="false">
            <span class="a11y-toggle-icon">&#8801;</span>
            <span class="a11y-toggle-label">Align Text</span>
          </button>
          <button class="a11y-toggle" data-tool="bold" aria-pressed="false">
            <span class="a11y-toggle-icon">B</span>
            <span class="a11y-toggle-label">Font Weight</span>
          </button>
        </div>
      </div>

      <div class="a11y-card">
        <h3 class="a11y-section-title">Color Modules</h3>
        <div class="a11y-row" style="grid-template-columns:repeat(3,1fr)">
          <button class="a11y-toggle active" data-contrast="light" aria-pressed="true">
            <span class="a11y-toggle-icon">&#9728;</span>
            <span class="a11y-toggle-label">Light Contrast</span>
          </button>
          <button class="a11y-toggle" data-contrast="high" aria-pressed="false">
            <span class="a11y-toggle-icon">&#9681;</span>
            <span class="a11y-toggle-label">High Contrast</span>
          </button>
          <button class="a11y-toggle" data-contrast="mono" aria-pressed="false">
            <span class="a11y-toggle-icon">&#9684;</span>
            <span class="a11y-toggle-label">Monochrome</span>
          </button>
        </div>
      </div>

      <div class="a11y-card">
        <h3 class="a11y-section-title">Navigation</h3>
        <ul class="a11y-nav">
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="website-examples.html">Work</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>

      <button class="a11y-reset">Reset All Settings</button>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(panel);

  // ── Wire up button (self-inject if the page didn't include one) ───────────
  var btn = document.querySelector('.accessibility-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.className = 'accessibility-btn';
    btn.setAttribute('aria-label', 'Accessibility');
    btn.setAttribute('title', 'Accessibility');
    btn.innerHTML = '<img src="assets/accessibility-logo.webp" alt="Accessibility" style="width:100%;height:100%;object-fit:contain;" />';
    document.body.appendChild(btn);
  }
  var closeBtn = panel.querySelector('.a11y-close');
  var lastFocus = null;

  function openPanel() {
    lastFocus = document.activeElement;
    panel.classList.add('open');
    overlay.classList.add('open');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }
  function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    if (lastFocus) lastFocus.focus();
  }
  function togglePanel() {
    panel.classList.contains('open') ? closePanel() : openPanel();
  }

  if (btn) {
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.addEventListener('click', togglePanel);
    // Fade in shortly after load
    setTimeout(function () { btn.classList.add('visible'); }, 1000);
  }

  closeBtn.addEventListener('click', closePanel);
  overlay.addEventListener('click', closePanel);
  panel.querySelector('[data-close]').addEventListener('click', closePanel);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
  });

  // Keyboard focus trap
  panel.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var focusable = panel.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    var first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // ── Font size stepper ─────────────────────────────────────────────────────
  var fontSteps = ['Default', 'Large', 'Larger', 'Largest'];
  var fontVals  = [100, 112, 125, 140];
  var lineSteps = ['Default', 'Tall', 'Taller', 'Tallest'];
  var lineVals  = [1.5, 1.7, 1.9, 2.2];
  var fontIdx = 0, lineIdx = 0;
  var root = document.documentElement;

  function applyFont() {
    root.style.fontSize = fontVals[fontIdx] + '%';
    panel.querySelector('[data-val="font"]').textContent = fontSteps[fontIdx];
  }
  function applyLine() {
    document.body.style.lineHeight = lineVals[lineIdx];
    panel.querySelector('[data-val="line"]').textContent = lineSteps[lineIdx];
  }

  panel.addEventListener('click', function (e) {
    var step = e.target.closest('[data-step]');
    if (!step) return;
    var s = step.dataset.step;
    if (s === 'font-up')   fontIdx = Math.min(fontIdx + 1, fontSteps.length - 1);
    if (s === 'font-down') fontIdx = Math.max(fontIdx - 1, 0);
    if (s === 'line-up')   lineIdx = Math.min(lineIdx + 1, lineSteps.length - 1);
    if (s === 'line-down') lineIdx = Math.max(lineIdx - 1, 0);
    if (s.indexOf('font') === 0) applyFont(); else applyLine();
  });

  // ── Toggle tools ──────────────────────────────────────────────────────────
  panel.querySelectorAll('[data-tool]').forEach(function (t) {
    t.addEventListener('click', function () {
      var tool = t.dataset.tool;
      var on = root.classList.toggle('a11y-' + tool);
      t.classList.toggle('active', on);
      t.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  });

  // ── Contrast modes ────────────────────────────────────────────────────────
  var contrastBtns = panel.querySelectorAll('[data-contrast]');
  contrastBtns.forEach(function (c) {
    c.addEventListener('click', function () {
      contrastBtns.forEach(function (b) {
        b.classList.remove('active'); b.setAttribute('aria-pressed', 'false');
      });
      c.classList.add('active'); c.setAttribute('aria-pressed', 'true');
      var m = c.dataset.contrast;
      root.style.filter = m === 'high' ? 'contrast(1.5)' : m === 'mono' ? 'grayscale(1)' : 'none';
    });
  });

  // ── Reset all ────────────────────────────────────────────────────────────
  panel.querySelector('.a11y-reset').addEventListener('click', function () {
    fontIdx = 0; lineIdx = 0; applyFont(); applyLine();
    root.style.filter = 'none';
    ['readable','bigcursor','spacing','align','bold'].forEach(function (t) {
      root.classList.remove('a11y-' + t);
    });
    panel.querySelectorAll('[data-tool]').forEach(function (t) {
      t.classList.remove('active'); t.setAttribute('aria-pressed', 'false');
    });
    contrastBtns.forEach(function (b, i) {
      b.classList.toggle('active', i === 0);
      b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
    });
  });

})();
