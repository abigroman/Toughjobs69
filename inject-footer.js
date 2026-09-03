/* ── Universal Footer Injection Script ──────────────────────────────── */
/*
  Load this script in every plain HTML page as:
  <script src="inject-footer.js"></script>
  (or "../../inject-footer.js" etc. from a nested page — the correct relative
  depth for THIS script tag).

  Single source of truth: shared-footer.html. Changing that file updates
  the footer on every page that loads this script.
*/

/*
  Same site-root-relative-path problem as inject-header.js: shared-footer.html
  and its own internal links are written assuming the page loading them is at
  the site root. Derive the real site root from this script's own resolved
  URL (its <script src> is always written with the correct relative depth per
  page) instead of assuming the current page is at the root.
*/
var TJ_FOOTER_SITE_ROOT = (function () {
  var scriptEl = document.currentScript;
  if (!scriptEl) return './';
  return new URL('.', scriptEl.src).href;
})();

function tjFooterResolveSiteUrl(relativePath) {
  var resolved = new URL(relativePath, TJ_FOOTER_SITE_ROOT);
  return resolved.pathname + resolved.search + resolved.hash;
}

function tjFooterRewriteRelativeUrls(container) {
  var attrsByTag = { A: 'href', IMG: 'src' };
  Object.keys(attrsByTag).forEach(function (tag) {
    var attr = attrsByTag[tag];
    container.querySelectorAll(tag.toLowerCase() + '[' + attr + ']').forEach(function (el) {
      var value = el.getAttribute(attr);
      if (!value) return;
      if (/^(https?:)?\/\//i.test(value)) return;
      if (/^(#|mailto:|tel:|javascript:)/i.test(value)) return;
      el.setAttribute(attr, tjFooterResolveSiteUrl(value));
    });
  });
}

(function injectFooter() {
  fetch(tjFooterResolveSiteUrl('shared-footer.html'))
    .then(response => response.text())
    .then(footerHTML => {
      // Append footer at the very end of body
      document.body.insertAdjacentHTML('beforeend', footerHTML);

      // The fetched markup's own links/images are site-root-relative — fix
      // them for pages nested outside the site root. Scoped to just the
      // freshly-inserted <footer> so this page's own correct links are untouched.
      var footerEl = document.body.querySelector('footer:last-of-type') || document.body.lastElementChild;
      if (footerEl) tjFooterRewriteRelativeUrls(footerEl);

      // Load decorative footer media only when the visitor approaches it.
      if (!document.querySelector('script[src$="deferred-media.js"]')) {
        var mediaScript = document.createElement('script');
        mediaScript.src = tjFooterResolveSiteUrl('deferred-media.js');
        mediaScript.defer = true;
        document.head.appendChild(mediaScript);
      }
    })
    .catch(error => console.error('Failed to inject footer:', error));
})();
