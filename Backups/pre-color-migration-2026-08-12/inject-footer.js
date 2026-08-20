/* ── Universal Footer Injection Script ──────────────────────────────── */
/*
  Load this script in every plain HTML page as:
  <script src="inject-footer.js"></script>

  Single source of truth: shared-footer.html. Changing that file updates
  the footer on every page that loads this script.
*/

(function injectFooter() {
  fetch('shared-footer.html')
    .then(response => response.text())
    .then(footerHTML => {
      // Append footer at the very end of body
      document.body.insertAdjacentHTML('beforeend', footerHTML);

      // Load decorative footer media only when the visitor approaches it.
      if (!document.querySelector('script[src="deferred-media.js"]')) {
        var mediaScript = document.createElement('script');
        mediaScript.src = 'deferred-media.js';
        mediaScript.defer = true;
        document.head.appendChild(mediaScript);
      }
    })
    .catch(error => console.error('Failed to inject footer:', error));
})();
