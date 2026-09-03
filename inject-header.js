/* ── Universal Header Injection Script ──────────────────────────────── */
/*
  Load this script in every plain HTML page as:
  <script src="inject-header.js"></script>
  (or "../../inject-header.js" etc. from a nested page — the correct relative
  depth for THIS script tag). Place it BEFORE any other scripts that need
  the header to exist.
*/

/*
  Every asset this file fetches or points a href/src at (shared-header.html,
  the logo, service-hero-uniform.css, and every link *inside* the fetched
  header markup) is written as a site-root-relative path like "websites.html"
  or "assets/logo.webp" — correct for every page that used to live flat at
  site root. Pages nested in a subfolder (e.g. websites/faqs/index.html)
  break those paths, because a fetch('shared-header.html') or an <a
  href="websites.html"> resolves against the CURRENT PAGE's folder, not the
  site root. This script's own <script src="..."> tag is always written with
  the correct relative depth for wherever it's loaded from, so we derive the
  site root from *this script's* resolved URL and rewrite every root-relative
  reference against that — instead of hardcoding an assumption that the page
  is always at the site root.
*/
var TJ_SITE_ROOT = (function () {
  var scriptEl = document.currentScript;
  if (!scriptEl) return './';
  return new URL('.', scriptEl.src).href;
})();

function tjResolveSiteUrl(relativePath) {
  var resolved = new URL(relativePath, TJ_SITE_ROOT);
  return resolved.pathname + resolved.search + resolved.hash;
}

function tjRewriteRelativeUrls(container) {
  var attrsByTag = { A: 'href', IMG: 'src' };
  Object.keys(attrsByTag).forEach(function (tag) {
    var attr = attrsByTag[tag];
    container.querySelectorAll(tag.toLowerCase() + '[' + attr + ']').forEach(function (el) {
      var value = el.getAttribute(attr);
      if (!value) return;
      if (/^(https?:)?\/\//i.test(value)) return; // absolute / protocol-relative
      if (/^(#|mailto:|tel:|javascript:)/i.test(value)) return; // same-page or non-navigational
      el.setAttribute(attr, tjResolveSiteUrl(value));
    });
  });
}

(function loadSharedHeroStyles() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isServicePage = document.body.classList.contains('sp');
  const isTradePage = /^trade-.*\.html$/i.test(currentPage);

  if (!isServicePage && !isTradePage) return;

  document.body.classList.toggle('is-service-page', isServicePage);
  document.body.classList.toggle('is-trade-page', isTradePage);

  if (document.querySelector('link[data-shared-hero-layout]')) return;

  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = tjResolveSiteUrl('service-hero-uniform.css?v=20260730b');
  stylesheet.dataset.sharedHeroLayout = 'true';
  document.head.appendChild(stylesheet);
})();

/*
  Some trade-page SEO sections were written into the HTML as escaped text,
  for example: &lt;section class="td-analysis"&gt;...&lt;/section&gt;.
  Browsers decode the entities into a text node and print the markup on screen.
  Convert only that known trade-content block back into real DOM elements.
*/
(function repairEscapedTradeContent() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (!/^trade-.*\.html$/i.test(currentPage)) return;

  const main = document.querySelector('main');
  if (!main || main.querySelector('section.td-analysis')) return;

  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
  const brokenNodes = [];

  while (walker.nextNode()) {
    const value = walker.currentNode.nodeValue || '';
    if (
      value.includes('<section class="td-analysis"') ||
      value.includes("<section class='td-analysis'")
    ) {
      brokenNodes.push(walker.currentNode);
    }
  }

  brokenNodes.forEach(textNode => {
    const raw = textNode.nodeValue || '';
    const doubleQuoteStart = raw.indexOf('<section class="td-analysis"');
    const singleQuoteStart = raw.indexOf("<section class='td-analysis'");
    const start = doubleQuoteStart >= 0 ? doubleQuoteStart : singleQuoteStart;
    const closingTag = '</section>';
    const end = raw.lastIndexOf(closingTag);

    if (start < 0 || end < start) return;

    const escapedBlock = raw.slice(start, end + closingTag.length);
    const template = document.createElement('template');
    template.innerHTML = escapedBlock.trim();

    const repairedSection = template.content.querySelector('section.td-analysis');
    if (!repairedSection) return;

    const replacement = document.createDocumentFragment();
    const before = raw.slice(0, start);
    const after = raw.slice(end + closingTag.length);

    if (before.trim()) replacement.append(document.createTextNode(before));
    replacement.append(template.content.cloneNode(true));
    if (after.trim()) replacement.append(document.createTextNode(after));

    textNode.replaceWith(replacement);
  });
})();

(function injectHeader() {
  // Fetch the shared header HTML, resolved against the site root (not the current page's folder)
  fetch(tjResolveSiteUrl('shared-header.html'))
    .then(response => response.text())
    .then(headerHTML => {
      // Insert header at the very top of body
      document.body.insertAdjacentHTML('afterbegin', headerHTML);

      // The fetched markup's own links/images are written as site-root-relative
      // paths — rewrite them so they still work from a nested page. Scoped to
      // just the freshly-inserted header + mobile drawer (siblings, not nested
      // inside <header>) — never the whole <body>, which would also catch
      // this page's own already-correct relative links and double-resolve them.
      var headerEl = document.body.querySelector('header');
      var mobileDrawerEl = document.getElementById('mobileDrawer');
      if (headerEl) tjRewriteRelativeUrls(headerEl);
      if (mobileDrawerEl) tjRewriteRelativeUrls(mobileDrawerEl);

      // Initialize header functionality
      initHeaderInteractions();
      initMobileDrawer();
      setActiveNavLink();
    })
    .catch(error => console.error('Failed to inject header:', error));
})();

// ── Mobile drawer ─────────────────────────────────────────────────────

function initMobileDrawer() {
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('mobileBackdrop');
  const closeBtn = document.getElementById('mdClose');
  let previousFocus = null;
  if (!toggle || !drawer || !backdrop) return;

  function openDrawer() {
    previousFocus = document.activeElement;
    drawer.classList.add('open');
    backdrop.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previousFocus && typeof previousFocus.focus === 'function') {
      previousFocus.focus();
    }
  }

  toggle.addEventListener('click', () => {
    drawer.classList.contains('open') ? closeDrawer() : openDrawer();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  const sub = document.getElementById('mdTrades');
  if (sub) {
    const subToggle = sub.querySelector('.md-sub-toggle');
    if (subToggle) subToggle.addEventListener('click', () => {
      const isOpen = sub.classList.toggle('open');
      subToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const svcSub = document.getElementById('mdServices');
  if (svcSub) {
    const svcToggle = svcSub.querySelector('.md-sub-toggle');
    if (svcToggle) svcToggle.addEventListener('click', () => {
      const isOpen = svcSub.classList.toggle('open');
      svcToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.addEventListener('keydown', event => {
    if (!drawer.classList.contains('open')) return;

    if (event.key === 'Escape') {
      closeDrawer();
      return;
    }

    if (event.key !== 'Tab') return;
    const focusable = drawer.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

// ── Header Interactions ──────────────────────────────────────────────

function initHeaderInteractions() {
  const header = document.querySelector('header');
  if (!header) return;

  // ── Scroll shrink removed — header stays full height ─────────────

  const dropdowns = header.querySelectorAll('.nav-dropdown');
  
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const menu = dropdown.querySelector('.nav-dropdown-menu');

    if (!toggle || !menu) return;

    // The menu is `position:fixed` (so it can center on the viewport instead
    // of clipping to the header), which leaves a real gap between the toggle
    // link and the menu's rendered box. Plain CSS :hover loses state the
    // instant the cursor crosses that gap, so a fast-but-normal mouse move
    // from the link toward the menu can close it before it's reached. A
    // short close grace period (cancelled the moment the cursor lands back
    // in the dropdown or menu) makes the menu forgiving of that gap without
    // hardcoding pixel-perfect, easily-broken positioning.
    let closeTimer = null;

    const setExpanded = expanded => {
      toggle.setAttribute('aria-expanded', String(expanded));
    };
    const open = () => {
      if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      dropdown.classList.add('is-open');
      setExpanded(true);
    };
    const scheduleClose = () => {
      if (closeTimer) clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        dropdown.classList.remove('is-open');
        setExpanded(false);
        closeTimer = null;
      }, 300);
    };

    dropdown.addEventListener('mouseenter', open);
    dropdown.addEventListener('mouseleave', scheduleClose);
    dropdown.addEventListener('focusin', open);
    dropdown.addEventListener('focusout', event => {
      if (!dropdown.contains(event.relatedTarget)) scheduleClose();
    });
  });
}

// ── Set Active Nav Link ──────────────────────────────────────────────

function setActiveNavLink() {
  const header = document.querySelector('header');
  if (!header) return;

  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Find and mark active link
  const navLinks = header.querySelectorAll('nav.nav-links a.nav-link:not(.nav-dropdown-toggle)');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ── Scroll animations (trade pages only) ─────────────────────────

(function initTradeAnimations() {
  const page = window.location.pathname.split('/').pop() || '';
  if (!/^trade-.*\.html$/i.test(page)) return;
  if (!('IntersectionObserver' in window)) return;

  document.body.classList.add('js-can-animate');

  // Mobile: strip fixed heights and compress card padding (inline styles block CSS cascade)
  if (window.innerWidth <= 760) {
    document.querySelectorAll('.mix-grid-2,.mix-grid-3,.mix-grid-4,.mix-grid-5').forEach(grid => {
      grid.style.setProperty('display', 'grid', 'important');
      grid.style.setProperty('grid-template-columns', '1fr', 'important');
      grid.style.setProperty('gap', '8px', 'important');
      grid.style.setProperty('margin-bottom', '24px', 'important');
    });
    document.querySelectorAll('.mix-grid-2 > div,.mix-grid-3 > div,.mix-grid-4 > div,.mix-grid-5 > div').forEach(card => {
      card.style.setProperty('min-height', '0', 'important');
      card.style.setProperty('padding', '14px 16px', 'important');
    });
  }

  // Mix cards — stagger on viewport entry (cards use inline styles, targeted via grid parent)
  const cards = [...document.querySelectorAll('.mix-grid-2 > div, .mix-grid-3 > div, .mix-grid-4 > div, .mix-grid-5 > div')];
  if (cards.length) {
    cards.forEach((c, i) => { c.dataset.animIdx = i; });
    const cardObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const idx = Math.min(parseInt(entry.target.dataset.animIdx || '0'), 5);
        entry.target.style.transitionDelay = (idx * 70) + 'ms';
        entry.target.classList.add('is-visible');
        cardObs.unobserve(entry.target);
      });
    }, { threshold: 0.1 });
    cards.forEach(c => cardObs.observe(c));
  }

  // Sections — blueprint crosshairs acquire target
  document.querySelectorAll('main > section').forEach(section => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('sect-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    obs.observe(section);
  });
})();
