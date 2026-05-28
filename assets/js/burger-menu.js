document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('burgerMenuBtn');
  var nav = document.getElementById('mobileNav');
  var icon = document.getElementById('burgerIcon');

  if (!btn || !nav || !icon) return;

  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(isOpen));
    nav.setAttribute('aria-hidden', String(!isOpen));
    icon.classList.toggle('fa-bars', !isOpen);
    icon.classList.toggle('fa-xmark', isOpen);
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-xmark');
    });
  });

  function closeMenuIfWide() {
    if (window.innerWidth > 942) {
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-xmark');
    }
  }

  window.addEventListener('resize', closeMenuIfWide);
});
