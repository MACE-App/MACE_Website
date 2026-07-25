// Defensive fallback for Google Analytics / gtag.
//
// @docusaurus/plugin-google-gtag registers an onRouteDidUpdate handler that
// calls window.gtag() on every client-side navigation. When the analytics
// script is blocked or stripped (ad blockers, privacy extensions, browser
// tracking protection), window.gtag is never defined and navigation throws
// "window.gtag is not a function".
//
// Defining a queueing stub here (matching Google's standard install snippet)
// keeps those calls harmless: they queue into dataLayer instead of crashing.
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
}
