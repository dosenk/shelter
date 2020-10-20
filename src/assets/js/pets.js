import pets from '../info/pets.json';
import closeButton from '../images/close-button.png';

const petsCards = document.querySelector('.pets_cards');
const createElem = (tagName, innerText = null, ...classes) => {
  const element = document.createElement(tagName);
  classes.forEach((className) => {
    element.classList.add(className);
    if (innerText !== null) element.innerText = innerText;
  });
  return element;
};

// must be func? render-cards?
pets.forEach((petsCard) => {
  const card = createElem('div', null, 'pets_cards__item');
  const img = createElem('img', null, 'pets_card__img');
  img.setAttribute('src', petsCard.img);
  const text = createElem('p', petsCard.name, 'pets_card__text');
  const button = createElem('button', 'Learn more', 'pets_card__btn');
  card.append(img, text, button);
  petsCards.append(card);
});

const displayCard = (card) => {
  const popup = createElem('div', null, 'popup');
  const popupCard = createElem('div', null, 'popup__card');
  const popupCloseButton = createElem('div', null, 'popup__card_closeButton');
  const popupCloseButtonImg = createElem('img', null, 'popup__card_closeButton-img');
  popupCloseButtonImg.setAttribute('src', closeButton);
  popupCloseButton.append(popupCloseButtonImg);
  const popupImg = createElem('img', null, 'popup__card_img');
  popupImg.setAttribute('src', card.img);
  const popupContent = createElem('div', null, 'popup__card_content');
  const popupContentTitle = createElem('h3', card.name, 'popup__card_content-title');
  const popupContentSubTitle = createElem('h4', `${card.type} - ${card.breed}`, 'popup__card_content-SubTitle');
  const popupContentText = createElem('p', card.description, 'popup__card_content-text');
  const popupContentList = createElem('ul', null, 'popup__card_content-list');
  const popupContentListAge = createElem('li', 'Age: ', 'popup__card_content-list-name');
  popupContentListAge.innerHTML += `<span>${card.age}</span>`;
  const popupContentListInoculations = createElem('li', 'Inoculations: ', 'popup__card_content-list-name');
  popupContentListInoculations.innerHTML += `<span>${card.inoculations}</span>`;
  const popupContentListDiseases = createElem('li', 'Diseases: ', 'popup__card_content-list-name');
  popupContentListDiseases.innerHTML += `<span>${card.diseases}</span>`;
  const popupContentListParasites = createElem('li', 'Parasites: ', 'popup__card_content-list-name');
  popupContentListParasites.innerHTML += `<span>${card.parasites}</span>`;
  popupContentList.append(popupContentListAge, popupContentListInoculations,
    popupContentListDiseases, popupContentListParasites);
  popupContent.append(popupContentTitle, popupContentSubTitle, popupContentText, popupContentList);
  popupCard.append(popupImg, popupContent, popupCloseButton);
  popup.append(popupCard);
  document.querySelector('body').append(popup);
};

petsCards.addEventListener('click', (event) => {
  if (event.target.closest('.pets_cards__item')) {
    const card = event.target.closest('.pets_cards__item');
    const cardName = card.children[1].innerText;
    pets.forEach((petsItem) => {
      if (petsItem.name === cardName) {
        displayCard(petsItem);
        const popupCard = document.querySelector('.popup__card');
        popupCard.addEventListener('mouseleave', () => {
          document.querySelector('.popup__card_closeButton').classList.add('popup__card_closeButton-hover');
        });
        popupCard.addEventListener('mouseenter', () => {
          document.querySelector('.popup__card_closeButton').classList.remove('popup__card_closeButton-hover');
        });
      }
    });
  }
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')
    || event.target.closest('.popup__card_closeButton')) {
    document.querySelector('.popup').remove();
  }
});
