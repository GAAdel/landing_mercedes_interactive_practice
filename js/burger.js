const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  burger.classList.toggle('humburger-menu-active');
}

burger.addEventListener('click', () => {
  toggleMenu(); 
})

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuElem.classList.remove('menu-active');
    burger.classList.remove('humburger-menu-active');
  })
})
