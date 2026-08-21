/**
 * Applies the stored theme before first paint.
 *
 * App.jsx also syncs this class, but it does so in an effect — i.e. after the
 * browser has already painted — which flashes the light palette at every
 * dark-mode visitor. This runs synchronously in <head> instead.
 *
 * It is a separate file rather than an inline <script> on purpose: the CSP is
 * script-src 'self', so inline script would need a hash kept in sync across
 * nginx.conf, vercel.json and vite.config.js. Keep the logic here identical to
 * readTheme() in src/App.jsx.
 */
(function () {
  var theme = 'dark';
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') theme = stored;
  } catch (e) {
    /* storage blocked (private mode, locked-down browser) — fall back to dark */
  }
  document.documentElement.classList.toggle('dark', theme === 'dark');

  // Marks that scripting is available. Scroll-reveal styles are scoped to .js
  // so that with JS disabled the content renders plainly instead of staying
  // stuck at opacity 0 waiting for an observer that will never run.
  document.documentElement.classList.add('js');
})();
