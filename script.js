// Scroll button on hero page
const scrollButton = document.getElementById('scrollButton');

if (scrollButton) {
  scrollButton.addEventListener('click', function () {
    const gallery = document.getElementById('maps-gallery');
    if (gallery) {
      gallery.scrollIntoView({
        behavior: 'smooth',
      });
    }
    this.classList.add('fade-out');
  });

  // Fade button out on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      scrollButton.classList.add('fade-out');
    } else {
      scrollButton.classList.remove('fade-out');
    }
  });
}