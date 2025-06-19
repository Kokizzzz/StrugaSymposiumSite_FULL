// Language switcher buttons
document.querySelectorAll('.lang-switcher button').forEach(button => {
  button.addEventListener('click', () => {
    const selectedLang = button.dataset.lang;
   
  });
});

// Autoplay video after user interacts
document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('video');
  if (video) {
    document.body.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      }
    }, { once: true });
  }
});
function toggleMenu() {
  const navList = document.querySelector('.main-nav ul');
  navList.classList.toggle('active');
}
