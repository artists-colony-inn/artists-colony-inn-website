document.currentScript.insertAdjacentHTML('afterend', `
<div style="position:fixed;top:0;right:0;z-index:200;font-family:'David','Times New Roman',serif;font-size:0.7rem;color:var(--text-light);padding:2px 6px;letter-spacing:0.05em;opacity:0.7">בס"ד</div>
<header>
  <div class="header-inner">
    <a class="logo" href="/en/index.html">
      <img src="/images/logo.svg" alt="Artists' Colony Inn">
    </a>
    <button class="nav-toggle" aria-label="Menu" id="nav-toggle-btn">
      <span></span><span></span><span></span>
    </button>
    <nav>
      <ul id="nav-menu">
        <li><a href="/en/index.html">Home</a></li>
        <li><a href="/en/shabbat.html">Shabbat</a></li>
        <li><a href="/en/gallery.html">Gallery</a></li>
        <li><a href="/en/about.html">About</a></li>
        <li><a href="/en/contact.html">Contact</a></li>
        <li><a href="/en/reviews.html">Reviews</a></li>
        <li><a href="/en/booking.html">Book</a></li>
        <li><a href="tel:+972586200779" class="nav-phone">+972-58-620-0779</a></li>
        <li><a href="#" id="lang-toggle" class="nav-phone">עברית</a></li>
      </ul>
    </nav>
  </div>
</header>
`);
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('nav-toggle-btn');
  var menu = document.getElementById('nav-menu');
  if (btn && menu) {
    btn.addEventListener('click', function() {
      menu.classList.toggle('open');
    });
    document.addEventListener('click', function(e) {
      if (!e.target.closest('header')) {
        menu.classList.remove('open');
      }
    });
  }
  var path = window.location.pathname;

  // Language toggle — strip /en/ prefix to get Hebrew equivalent
  var langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    var hePath = path.replace(/^\/en\//, '/');
    if (hePath === '/') hePath = '/index.html';
    langToggle.href = hePath;
  }

  document.querySelectorAll('nav a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (!href || href.startsWith('tel:') || a.id === 'lang-toggle') return;
    if (
      (href === '/en/index.html' && (path === '/en/' || path === '/en/index.html')) ||
      (href !== '/en/index.html' && path.startsWith(href.replace('.html', '')))
    ) {
      a.classList.add('active');
    }
  });
});
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/svg+xml';
favicon.href = '/images/logo.svg';
document.head.appendChild(favicon);