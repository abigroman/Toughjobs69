// article-toc.js — Field Notes article template: reading progress bar + auto-built table of contents.
(function () {
  var bar = document.querySelector('.reading-progress-bar');
  if (bar) {
    var updateProgress = function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      bar.style.width = pct + '%';
    };
    document.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
  }

  document.querySelectorAll('.share-copy').forEach(function (btn) {
    var original = btn.textContent;
    btn.addEventListener('click', function () {
      var url = btn.getAttribute('data-url') || location.href;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).catch(function () {});
      }
      btn.textContent = '✓';
      setTimeout(function () { btn.textContent = original; }, 1600);
    });
  });

  var list = document.getElementById('tocList');
  var headings = document.querySelectorAll('.art-content h2');
  if (!list || !headings.length) return;

  var used = {};
  headings.forEach(function (h, i) {
    if (!h.id) {
      var slug = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || ('section-' + i);
      while (used[slug]) slug = slug + '-' + i;
      used[slug] = true;
      h.id = slug;
    }
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.className = 'toc-link';
    a.textContent = h.textContent;
    list.appendChild(a);
  });

  var links = list.querySelectorAll('.toc-link');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove('active'); });
        var active = list.querySelector('.toc-link[href="#' + entry.target.id + '"]');
        if (active) active.classList.add('active');
      });
    }, { rootMargin: '-140px 0px -70% 0px' });
    headings.forEach(function (h) { observer.observe(h); });
  }
})();
