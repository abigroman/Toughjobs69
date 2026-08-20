// flying-tools.js — drifting real-tool cutouts for light/bright sections.
// Safe to include on every page: dark sections are skipped automatically.
(function () {
  var TOOLS = [
    {
      name: 'chainsaw',
      src: ((window.__resources||{}).toolChainsaw||'assets/floating-tools/chainsaw.webp'),
      minSize: 310,
      maxSize: 350
    },
    {
      name: 'hammer',
      src: ((window.__resources||{}).toolHammer||'assets/floating-tools/hammer.webp'),
      minSize: 255,
      maxSize: 285
    },
    {
      name: 'trowel',
      src: ((window.__resources||{}).toolTrowel||'assets/floating-tools/trowel.webp'),
      minSize: 210,
      maxSize: 240
    },
    {
      name: 'screwdriver',
      src: ((window.__resources||{}).toolScrewdriver||'assets/floating-tools/screwdriver.webp'),
      minSize: 165,
      maxSize: 195
    },
    {
      name: 'tape-measure',
      src: ((window.__resources||{}).toolTape||'assets/floating-tools/tape-measure.webp'),
      minSize: 110,
      maxSize: 140
    }
  ];

  // Every decorated section receives all five tools. The repeats keep the
  // composition full while preserving the requested visual size hierarchy.
  var TOOL_SEQUENCE = [
    TOOLS[0],
    TOOLS[1],
    TOOLS[2],
    TOOLS[3],
    TOOLS[4],
    TOOLS[1],
    TOOLS[2],
    TOOLS[3]
  ];

  var css = `
  .ft-bg{
    position:absolute;
    inset:0;
    z-index:0;
    pointer-events:none;
    overflow:hidden;
    contain:layout paint;
  }
  .ft-float{
    position:absolute;
    width:min(var(--ft-size),var(--ft-cap));
    height:min(var(--ft-size),var(--ft-cap));
    opacity:0;
    animation:ftDrift var(--ft-duration) linear var(--ft-delay) infinite;
    animation-play-state:paused;
    transform-origin:center;
    will-change:transform,opacity;
  }
  .ft-float img{
    display:block;
    width:100%;
    height:100%;
    object-fit:contain;
    filter:saturate(.2) contrast(.96);
  }
  .ft-chainsaw{--ft-cap:58vw}
  .ft-hammer{--ft-cap:50vw}
  .ft-trowel{--ft-cap:43vw}
  .ft-screwdriver{--ft-cap:36vw}
  .ft-tape-measure{--ft-cap:28vw}
  @keyframes ftDrift{
    0%{opacity:0;transform:translate3d(0,48px,0) rotate(var(--r0))}
    12%{opacity:.22}
    88%{opacity:.22}
    100%{opacity:0;transform:translate3d(var(--drift-x),-96px,0) rotate(var(--r1))}
  }
  @media(prefers-reduced-motion:reduce){
    .ft-float{
      animation:none;
      opacity:.14;
      will-change:auto;
    }
  }
  `;

  var style = document.createElement('style');
  style.id = 'ft-styles';
  style.textContent = css;
  document.head.appendChild(style);

  var decoratedSections = [];
  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function setMotionState(sec, isVisible) {
    var shouldRun = isVisible && !document.hidden && !motionQuery.matches;
    sec.querySelectorAll('.ft-float').forEach(function (tool) {
      tool.style.animationPlayState = shouldRun ? 'running' : 'paused';
    });
  }

  var observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          setMotionState(entry.target, entry.isIntersecting);
        });
      }, { rootMargin: '120px 0px' })
    : null;

  function populate(sec) {
    if (sec.dataset.ftDone) return;
    sec.dataset.ftDone = '1';
    if (getComputedStyle(sec).position === 'static') sec.style.position = 'relative';

    var bg = document.createElement('div');
    bg.className = 'ft-bg';
    bg.setAttribute('aria-hidden', 'true');

    TOOL_SEQUENCE.forEach(function (tool, index) {
      var el = document.createElement('div');
      var image = document.createElement('img');
      var size = tool.minSize + Math.random() * (tool.maxSize - tool.minSize);

      el.className = 'ft-float ft-' + tool.name;
      el.style.setProperty('--ft-size', size.toFixed(1) + 'px');
      el.style.left = (Math.random() * 88 - 2) + '%';
      el.style.top = (Math.random() * 82 - 4) + '%';
      el.style.setProperty('--r0', (Math.random() * 56 - 28) + 'deg');
      el.style.setProperty('--r1', (Math.random() * 100 - 50) + 'deg');
      el.style.setProperty('--drift-x', (Math.random() * 70 - 35) + 'px');
      el.style.setProperty('--ft-duration', (20 + Math.random() * 14) + 's');
      el.style.setProperty('--ft-delay', (-index * 2.7 - Math.random() * 9) + 's');

      image.src = tool.src;
      image.alt = '';
      image.loading = 'lazy';
      image.decoding = 'async';
      image.draggable = false;

      el.appendChild(image);
      bg.appendChild(el);
    });

    sec.insertBefore(bg, sec.firstChild);
    decoratedSections.push(sec);

    if (observer) {
      observer.observe(sec);
    } else {
      setMotionState(sec, true);
    }
  }

  function run() {
    if (document.documentElement.classList.contains('lite-media')) return;
    document.querySelectorAll('section.on-light, section.bg-light, section.td-analysis, section.gb-section').forEach(populate);
  }

  document.addEventListener('visibilitychange', function () {
    decoratedSections.forEach(function (sec) {
      var rect = sec.getBoundingClientRect();
      setMotionState(sec, rect.bottom >= -120 && rect.top <= window.innerHeight + 120);
    });
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  // Re-scan for sections rendered after the initial document.
  setTimeout(run, 400);
  setTimeout(run, 1200);
})();
