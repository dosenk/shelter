const burger = document.querySelector('.burger');
const header = document.querySelector('header');
const burgerMenu = document.querySelector('.nav_menu');
const headerWrapper = document.querySelector('.header__wrapper');
const logoTitle = document.querySelector('.logo_title');
const logoSubTitle = document.querySelector('.logo_subtitle');
const body = document.querySelector('body');
const bodyDiv = document.createElement('div');
bodyDiv.classList.add('opacity');
body.append(bodyDiv);

const changeBurger = (e) => {
  if (e.target.closest('.burger') || e.target === bodyDiv || e.target.closest('.active')) {
    headerWrapper.style.transition = 'left 0.7s ease-out';
    header.classList.toggle('header__before');
    burger.classList.toggle('burger-turn');
    burgerMenu.classList.toggle('nav_menu__burger');
    headerWrapper.classList.toggle('header__wrapper-burger');
    logoTitle.classList.toggle('logo_title-burger');
    logoSubTitle.classList.toggle('logo_subtitle-burger');
    bodyDiv.classList.toggle('bodyOpacity');
    if (headerWrapper.classList.contains('header__wrapper-burger')) {
      header.style.background = 'rgba(41, 41, 41, 0.5)';
      body.style.overflow = 'hidden';
      setTimeout(() => {
        headerWrapper.style.transition = 'right';
        headerWrapper.style.position = 'fixed';
        headerWrapper.style.left = 'calc( 100% - 309px)';
      }, 800);
    } else {
      header.style = '';
      headerWrapper.style.transition = 'left 0.7s ease-out';
      headerWrapper.style.position = 'fixed';
      headerWrapper.style.left = 'calc( 50% - 150px)';
      setTimeout(() => {
        headerWrapper.style = '';
        headerWrapper.style.transition = 'right';
        body.style = '';
      }, 800);
    }
  }
};

document.addEventListener('click', changeBurger);
