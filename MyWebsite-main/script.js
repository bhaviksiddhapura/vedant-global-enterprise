document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  const form = document.querySelector('.contact-form');
  const status = document.querySelector('.form-status');

  menuToggle?.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  navigation?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'Thank you. Our team will be in touch shortly.';
    form.reset();
  });
});
