// Load decorative background videos shortly before they enter the viewport.
(function deferBackgroundMedia() {
  var selector = 'video[data-play-when-near]';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var initialized = new WeakSet();

  function safePlay(video) {
    if (reducedMotion.matches) return;
    var playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function () {
        // Muted decorative media can still be blocked by browser policy.
      });
    }
  }

  var observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var video = entry.target;

          if (entry.isIntersecting) {
            if (video.preload !== 'auto') {
              video.preload = 'auto';
              video.load();
            }
            safePlay(video);
          } else {
            video.pause();
          }
        });
      }, { rootMargin: '600px 0px', threshold: 0 })
    : null;

  function prepare(video) {
    if (initialized.has(video)) return;
    initialized.add(video);
    video.autoplay = false;
    video.preload = 'none';
    video.pause();

    if (observer) {
      observer.observe(video);
    } else if (!reducedMotion.matches) {
      video.preload = 'metadata';
      safePlay(video);
    }
  }

  function scan(root) {
    if (root.matches && root.matches(selector)) prepare(root);
    if (root.querySelectorAll) root.querySelectorAll(selector).forEach(prepare);
  }

  scan(document);

  new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1) scan(node);
      });
    });
  }).observe(document.documentElement, { childList: true, subtree: true });

  reducedMotion.addEventListener('change', function () {
    document.querySelectorAll(selector).forEach(function (video) {
      if (reducedMotion.matches) {
        video.pause();
      } else {
        var bounds = video.getBoundingClientRect();
        if (bounds.top < window.innerHeight + 600 && bounds.bottom > -600) {
          safePlay(video);
        }
      }
    });
  });
})();
