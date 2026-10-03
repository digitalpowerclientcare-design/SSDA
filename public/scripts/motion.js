/* Reveal fallback only. Native CSS scroll-driven reveal handles modern browsers;
   this adds .in via IntersectionObserver when html.io-reveal is set. No libraries. */
(function () {
  var root = document.documentElement;
  var els = document.querySelectorAll('.reveal');
  if (!root.classList.contains('io-reveal') || !els.length) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  els.forEach(function (el) { io.observe(el); });
})();
