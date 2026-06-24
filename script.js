// ===== Mobile nav toggle =====
const navtoggle = document.getElementById('navtoggle');
const nav = document.getElementById('primary-nav');

navtoggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navtoggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navtoggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Scroll reveal for sections (hero is always visible, no JS dependency) =====
const revealTargets = document.querySelectorAll('.section');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => revealObserver.observe(el));

// Safety net: ensure all sections are visible even if IntersectionObserver
// is unavailable or something goes wrong (progressive enhancement).
setTimeout(() => {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}, 2500);

// ===== Animate skill meters when in view =====
const meters = document.querySelectorAll('.meter__fill');

const meterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-filled');
      meterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

meters.forEach(el => meterObserver.observe(el));

setTimeout(() => {
  meters.forEach(el => el.classList.add('is-filled'));
}, 3000);

// ===== Reduced motion preference =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===== Count-up animation for hero stats =====
const countEls = document.querySelectorAll('.count-up');

function runCountUp(el) {
  const target = parseInt(el.dataset.target, 10) || 0;
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const pad = parseInt(el.dataset.pad, 10) || 0;

  if (prefersReducedMotion) {
    el.textContent = prefix + String(target).padStart(pad, '0') + suffix;
    return;
  }

  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value = Math.round(eased * target);
    el.textContent = prefix + String(value).padStart(pad, '0') + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCountUp(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

countEls.forEach(el => countObserver.observe(el));

// Safety net for count-up too
setTimeout(() => {
  countEls.forEach(el => {
    if (el.textContent.replace(/\D/g, '') === '' || el.textContent === '0' || el.textContent === '00') {
      runCountUp(el);
    }
  });
}, 3200);

// ===== Live "uptime" counter — career started 2017-04-25 =====
const uptimeEl = document.getElementById('uptime-counter');
const CAREER_START = new Date('2017-04-25T00:00:00');

function updateUptime() {
  if (!uptimeEl) return;
  const now = new Date();
  let diffMs = now - CAREER_START;

  const msPerDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor(diffMs / msPerDay);
  const years = Math.floor(totalDays / 365.25);
  const remDays = Math.floor(totalDays - years * 365.25);

  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  uptimeEl.textContent = `${years}a ${remDays}d en producción [${hh}:${mm}:${ss}]`;
}

updateUptime();
setInterval(updateUptime, 1000);

// ===== Cursor-follow glow on project cards =====
if (!prefersReducedMotion) {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x}%`);
      card.style.setProperty('--my', `${y}%`);
    });
  });
}
