/* eslint-disable no-param-reassign */
const petsCardsDiv = document.querySelector('.pets_cards');
const petsCards = document.querySelectorAll('.pets_cards__item');
const petsCardsControls = document.querySelector('.our-friend__wrapper_controls-items');

const getAllCards = () => {
  const petsCard = [...petsCards]; // начальный массив
  let petsCardAll = [...petsCards]; // массив для 6 и 3 карточек
  const petsCardAllForEight = [...petsCards]; // массив для 8 карточек
  for (let i = 1; i <= 5; i += 1) {
    petsCardAll = petsCardAll.concat(petsCard);
  }
  for (let i = 1; i <= 5; i += 1) {
    petsCardAllForEight.push(...petsCard.sort(() => Math.random() - 0.5));
  }
  return [petsCardAll, petsCardAllForEight];
};

const allCards = getAllCards();

const getCardsInPage = (pageNumber, numOfCards) => {
  let startIdx = pageNumber * numOfCards - numOfCards;
  let endIdx = startIdx + 8;

  let cards;
  if (numOfCards === 8) {
    cards = allCards[1].slice(startIdx, endIdx);
  } else if (startIdx >= 40 && startIdx <= 45) {
    startIdx -= 48;
    endIdx -= 48;
    const a = allCards[0].slice(startIdx);
    const b = allCards[0].slice(0, endIdx);
    cards = a.concat(b);
  } else {
    cards = allCards[0].slice(startIdx, endIdx);
  }
  const numOfPage = document.querySelector('.our-friend__wrapper_controls-items').children[2];
  numOfPage.innerText = pageNumber;
  return cards;
};

const displayCards = (cards) => {
  setTimeout(() => {
    cards.forEach((card) => {
      petsCardsDiv.append(card);
    });
    petsCardsDiv.removeAttribute('style');
  }, 400);
};

const changePaginationStatus = (pageNumber, maxPageNumber, ...buttons) => {
  if (pageNumber === maxPageNumber) {
    buttons.forEach((button) => {
      button.disabled = true;
      button.classList.toggle('our-friend__wrapper_controls-items-item_active');
    });
  }
};

petsCardsControls.addEventListener('click', (event) => {
  const btnRigth = petsCardsControls.children[3];
  const btnLeft = petsCardsControls.children[1];
  const btnMaxRigth = petsCardsControls.children[4];
  const btnMaxLeft = petsCardsControls.children[0];
  let numOfCards = petsCardsDiv.childNodes.length;
  let pageNumber = Number(petsCardsControls.children[2].innerText);
  let maxPageNumber = 6;
  const resolution = document.body.clientWidth;
  if (resolution >= 1280) {
    numOfCards = 8;
    maxPageNumber = 5;
  } else if (resolution >= 768 && resolution <= 1279) {
    numOfCards = 6;
    maxPageNumber = 7;
  } else {
    numOfCards = 3;
    maxPageNumber = 15;
  }

  if (event.target.closest('.btn-rigth') || event.target.closest('.btn-max-rigth')) {
    petsCardsDiv.style.opacity = '0';
    if (event.target.closest('.btn-max-rigth')) pageNumber = maxPageNumber;
    const cards = getCardsInPage(pageNumber + 1, numOfCards);
    displayCards(cards);
    if (!btnLeft.classList.contains('our-friend__wrapper_controls-items-item_active')) {
      btnLeft.classList.add('our-friend__wrapper_controls-items-item_active');
      btnMaxLeft.classList.add('our-friend__wrapper_controls-items-item_active');
      btnLeft.disabled = false;
      btnMaxLeft.disabled = false;
    }
    changePaginationStatus(pageNumber, maxPageNumber, btnRigth, btnMaxRigth);
  }

  if (event.target.closest('.btn-left') || event.target.closest('.btn-max-left')) {
    petsCardsDiv.style.opacity = '0';
    if (event.target.closest('.btn-max-left')) pageNumber = 2;
    const cards = getCardsInPage(pageNumber - 1, numOfCards);
    displayCards(cards);
    if (!btnRigth.classList.contains('our-friend__wrapper_controls-items-item_active')) {
      btnRigth.classList.add('our-friend__wrapper_controls-items-item_active');
      btnMaxRigth.classList.add('our-friend__wrapper_controls-items-item_active');
      btnRigth.disabled = false;
      btnMaxRigth.disabled = false;
    }
    changePaginationStatus(pageNumber - 1, 1, btnLeft, btnMaxLeft);
  }
});
