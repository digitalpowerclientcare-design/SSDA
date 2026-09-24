/* Lightweight motion: starfield, count-up, scroll reveals, card tilt.
   All guarded by prefers-reduced-motion; no libraries. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- scroll reveals ---- */
  var revealEls = document.querySelectorAll('.reveal, .reveal-1, .reveal-2, .reveal-3, .reveal-4');
  if (reduce) { revealEls.forEach(function (el) { el.classList.add('in'); }); }
  else if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else { revealEls.forEach(function (el) { el.classList.add('in'); }); }

  /* ---- count-up stats ---- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count-to'));
    var dec = (el.getAttribute('data-count-to').split('.')[1] || '').length;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = target.toLocaleString('en-IN') + suffix; return; }
    var start = null, dur = 1600;
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = (dec ? val.toFixed(dec) : Math.round(val).toLocaleString('en-IN')) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count-to]');
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  } else { counters.forEach(countUp); }

  /* ---- card tilt on pointer ---- */
  if (!reduce && window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('.card-glow').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty('--ry', (px * 6).toFixed(2) + 'deg');
        card.style.setProperty('--rx', (-py * 6).toFixed(2) + 'deg');
      });
      card.addEventListener('pointerleave', function () {
        card.style.setProperty('--ry', '0deg'); card.style.setProperty('--rx', '0deg');
      });
    });
  }

  /* ---- starfield canvas ---- */
  var canvas = document.getElementById('starfield');
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d'), dpr = Math.min(window.devicePixelRatio || 1, 2);
    var stars = [], shootings = [], W, H, last = 0;
    function resize() {
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.min(140, Math.floor(W * H / 9000));
      stars = [];
      for (var i = 0; i < count; i++) {
        stars.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + 0.3,
          a: Math.random(), tw: Math.random() * 0.02 + 0.004, dir: Math.random() > 0.5 ? 1 : -1 });
      }
    }
    function spawnShoot() {
      if (reduce) return;
      shootings.push({ x: Math.random() * W * 0.7, y: Math.random() * H * 0.4, len: 0, max: 120 + Math.random() * 80, sp: 6 + Math.random() * 4, life: 1 });
    }
    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        if (!reduce) { s.a += s.tw * s.dir; if (s.a > 1) { s.a = 1; s.dir = -1; } else if (s.a < 0.15) { s.a = 0.15; s.dir = 1; } }
        ctx.globalAlpha = s.a; ctx.fillStyle = i % 7 === 0 ? '#E4C67E' : '#F2E7D3';
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.2832); ctx.fill();
      }
      for (var j = shootings.length - 1; j >= 0; j--) {
        var sh = shootings[j]; sh.x += sh.sp; sh.y += sh.sp * 0.5; sh.len = Math.min(sh.len + sh.sp, sh.max); sh.life -= 0.012;
        var g = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.len, sh.y - sh.len * 0.5);
        g.addColorStop(0, 'rgba(228,198,126,' + Math.max(sh.life, 0) + ')'); g.addColorStop(1, 'rgba(228,198,126,0)');
        ctx.globalAlpha = 1; ctx.strokeStyle = g; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(sh.x, sh.y); ctx.lineTo(sh.x - sh.len, sh.y - sh.len * 0.5); ctx.stroke();
        if (sh.life <= 0 || sh.x > W + 50) shootings.splice(j, 1);
      }
      ctx.globalAlpha = 1;
      if (!reduce) { if (t - last > 3800) { last = t; if (Math.random() > 0.3) spawnShoot(); } requestAnimationFrame(draw); }
    }
    resize(); window.addEventListener('resize', resize);
    if (reduce) draw(0); else requestAnimationFrame(draw);
  }
})();
