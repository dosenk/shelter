import './main.scss';
import '../../assets/js/pets';

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.nav_menu');

burger.addEventListener('click', (event) => {
  console.log(event.target);
  burger.classList.toggle('burger-turn');
  burgerMenu.classList.toggle('nav_menu__burger');
});
