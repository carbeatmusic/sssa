const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  // Анимация меню
  nav.classList.toggle('nav-active');
  
  // Анимация ссылок
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s;
    }
  });
  
  // Анимация бургера
  burger.classList.toggle('toggle');
});
