// Sticky Header on Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    // If it's an anchor within the same page
    if (this.hash && this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
