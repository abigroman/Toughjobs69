// Self-injecting Image Finder slide-out tab + modal (loads image-finder.html in an iframe)
(function () {
  // Internal editing utility: never inject it into public or preview deployments.
  var localHosts = { 'localhost': true, '127.0.0.1': true, '::1': true };
  if (!localHosts[window.location.hostname]) return;

  // Inject stylesheet if not already present
  if (!document.querySelector('link[href="image-finder-tab.css"]')) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'image-finder-tab.css';
    document.head.appendChild(link);
  }

  // Tab
  var tab = document.createElement('div');
  tab.className = 'image-finder-tab';
  tab.textContent = 'Image Finder';

  // Modal
  var modal = document.createElement('div');
  modal.className = 'image-finder-modal';
  modal.innerHTML =
    '<div class="image-finder-container">' +
      '<div class="image-finder-header">' +
        '<h2>Image Finder</h2>' +
        '<button class="image-finder-close" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div class="image-finder-content">' +
        '<iframe style="width:100%;height:100%;border:none;background:#0A0F1C;"></iframe>' +
      '</div>' +
    '</div>';

  var iframe = modal.querySelector('iframe');
  var closeBtn = modal.querySelector('.image-finder-close');

  var loaded = false;
  function open() {
    if (!loaded) { iframe.src = 'image-finder.html'; loaded = true; }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  tab.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
  window.addEventListener('message', function (e) {
    if (e.data === 'close-image-finder') close();
  });

  document.body.appendChild(tab);
  document.body.appendChild(modal);
})();
