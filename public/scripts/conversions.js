/* Conversion signals — calls & WhatsApp only (the entire funnel).
   Pushes clean events to dataLayer + gtag. Phase 2 wires GTM/Google Ads to these. */
(function () {
  var fired = {};
  function pageType() {
    var p = location.pathname;
    if (p === '/' || p === '') return 'home';
    var seg = p.split('/').filter(Boolean);
    return seg[0] || 'home';
  }
  function emit(channel) {
    var key = channel;
    if (fired[key]) return;
    fired[key] = true;
    var payload = { event: channel + '_click', channel: channel, page_path: location.pathname, page_type: pageType() };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    if (typeof window.gtag === 'function') {
      window.gtag('event', payload.event, { page_type: payload.page_type });
    }
    // Microsoft Clarity: tag + custom event so recordings/heatmaps can be
    // filtered to visitors who actually clicked Call / WhatsApp.
    if (typeof window.clarity === 'function') {
      try {
        window.clarity('set', 'lead_channel', channel);
        window.clarity('event', payload.event);
      } catch (e) {}
    }
  }
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('tel:') === 0) emit('call');
    else if (href.indexOf('wa.me/') !== -1 || href.indexOf('api.whatsapp.com') !== -1) emit('whatsapp');
  }, true);
})();
