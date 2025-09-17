function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark-mode') ? 'dark' : 'light'
  );
  setThemeIcon();
}

function setThemeIcon() {
  const btn = document.getElementById('theme-btn');
  if (!btn) return;
  btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

function initMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
}

function highlightActiveLink() {
  const links = document.querySelectorAll('nav ul li a');
  const current = window.location.pathname.split('/').pop();
  links.forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
}

function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msg = document.getElementById('formMsg');

    if (!name || !email || !message) {
      msg.textContent = "⚠️ Please fill out all fields!";
      msg.style.color = "red";
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      msg.textContent = "⚠️ Enter a valid email!";
      msg.style.color = "red";
      return;
    }

    msg.textContent = "✅ Message sent successfully!";
    msg.style.color = "green";
    form.reset();
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.body.classList.add('dark-mode');
  setThemeIcon();

  // ✅ Theme button works everywhere
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) themeBtn.addEventListener('click', toggleDarkMode);

  initMenu();
  highlightActiveLink();
  initForm();
  initSmoothScroll();
});
