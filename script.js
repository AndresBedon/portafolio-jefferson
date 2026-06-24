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
