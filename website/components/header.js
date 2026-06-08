document.currentScript.insertAdjacentHTML('afterend', `
<header>
  <div class="header-inner">
    <a class="logo" href="/index.html">
      <img src="/images/logo.svg" alt="Artists' Colony Inn">
    </a>
    <button class="nav-toggle" aria-label="Menu" id="nav-toggle-btn">
      <span></span><span></span><span></span>
    </button>
    <nav>
      <ul id="nav-menu">
        <li><a href="/index.html">Home</a></li>
        <li><a href="/shabbat.html">Shabbat</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/contact.html">Contact</a></li>
        <li><a href="/booking.html">Book</a></li>
        <li><a href="tel:+972586200779" class="nav-phone">+972-58-620-0779</a></li>
      </ul>
    </nav>
  </div>
</header>
`);

// Mobile menu toggle
const toggleBtn = document.getElementById('nav-toggle-btn');
const navMenu   = document.getElementById('nav-menu');
if (toggleBtn && navMenu) {
  toggleBtn.addEventListener('click', () => navMenu.classList.toggle('open'));
}

// Mark active nav link
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('tel:')) return;
    if (
      (href === '/index.html' && (path === '/' || path === '/index.html')) ||
      (href !== '/index.html' && path.startsWith(href.replace('.html', '')))
    ) {
      a.classList.add('active');
    }
  });
});