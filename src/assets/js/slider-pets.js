const petsCards = document.querySelector('.pets_cards');
const petsCardsControls = document.querySelector('.our-friend__wrapper_controls-items');

const getPageCards = (petsCardAll, pageNumber, numOfCards) => {
//   console.log(pageNumber * numOfCards - numOfCards, numOfCards);
  const cards = petsCardAll.splice(pageNumber * numOfCards - numOfCards, numOfCards);
  //   console.log(cards);
  document.querySelector('.our-friend__wrapper_controls-items').children[2].innerText = pageNumber + 1;
  return cards;
};

const getAllCards = () => {
  const petsCardPage = [];
  const petsCardAll = [];
  petsCards.childNodes.forEach((item) => {
    petsCardPage.push(item.outerHTML);
  });
  console.log(petsCardPage);
  for (let i = 0; i < 6; i += 1) {
    if (i === 0) {
      petsCardPage.forEach((item) => {
        petsCardAll.push(item);
      });
    } else {
      const newArr1 = petsCardPage.slice(0, i);
      const newArr2 = petsCardPage.slice(i);
      const arrSum = newArr2.concat(newArr1);
      console.log(arrSum);
      arrSum.forEach((item) => {
        petsCardAll.push(item);
      });
    }
  }
  return petsCardAll;
};

// console.log(petsCardAll);

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
    const petsCardAll = getAllCards();
    console.log(petsCardAll);
    // petsCards.append(petsCards.childNodes);
    // console.log(numOfCards, pageNumber);
    //   console.log(getPageCards(petsCardAll, Number(pageNumber), numOfCards));
    getPageCards(petsCardAll, Number(pageNumber), numOfCards);
  }
});
