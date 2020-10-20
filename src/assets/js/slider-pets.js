const petsCards = document.querySelector('.pets_cards');
const petsCardsControls = document.querySelector('.our-friend__wrapper_controls-items');

const getAllCards = () => {
  const petsCardPage = [];
  const petsCardAll = [];
  petsCards.childNodes.forEach((item) => {
    petsCardPage.push(item.outerHTML);
  });
  for (let i = 0; i < 6; i += 1) {
    if (i === 0) {
      petsCardAll.push(...petsCardPage);
    } else {
      const newArr1 = petsCardPage.slice(0, i);
      const newArr2 = petsCardPage.slice(i);
      const arrSum = newArr2.concat(newArr1);
      petsCardAll.push(...arrSum);
    }
  }
  return petsCardAll;
};
const allCards = getAllCards();
console.log(allCards);
const getPageCards = (pageNumber, numOfCards) => {
  console.log(allCards);
  const startIdx = pageNumber * numOfCards - numOfCards;
  const endIdx = startIdx + 8;
  console.log(startIdx, endIdx);
  const cards = allCards.slice(startIdx, endIdx);
  const numOfPage = document.querySelector('.our-friend__wrapper_controls-items').children[2];
  numOfPage.innerText = Number(numOfPage.innerText) + 1;
  return cards;
};

const displayCards = (cards) => {
  petsCards.innerHTML = '';
  // console.log(cards);
  // petsCards.innerHTML = cards;
  cards.forEach((card) => {
    // console.log(petsCards.innerHTML);
    petsCards.innerHTML += card;
  });
};

petsCardsControls.addEventListener('click', (event) => {
  if (event.target.closest('.our-friend__wrapper_controls-items-item_active')) {
    let numOfCards = petsCards.childNodes.length;
    const pageNumber = petsCardsControls.children[2].innerText;
    const resolution = document.body.clientWidth;

    if (resolution >= 1280) {
      numOfCards = 8;
    } else if (resolution >= 768 && resolution <= 1279) {
      numOfCards = 6;
    } else numOfCards = 3;

    const cards = getPageCards(Number(pageNumber) + 1, numOfCards);
    displayCards(cards);
  }
});
