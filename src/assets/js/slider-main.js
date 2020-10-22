const left = document.querySelector('.pets_btn__left');
const rigth = document.querySelector('.pets_btn__rigth');
const cardsWrapper = document.querySelector('.pets_cards');
const makeFrBtn = document.querySelector('.main_wrapper__content');
let numOfCards = 3;

const resolution = document.body.clientWidth;

if (resolution >= 768 && resolution <= 1279) {
  numOfCards = 2;
} else if (resolution <= 768) {
  numOfCards = 1;
}

const displayCards = () => {
  setTimeout(() => {
    const b = [];
    for (let i = 0; i < numOfCards; i += 1) {
      const removeCard = cardsWrapper.children[0];
      b.push(removeCard);
      cardsWrapper.children[0].remove();
    }
    const a = [...cardsWrapper.childNodes];
    a.sort(() => Math.random() - 0.5);
    a.forEach((div) => {
      cardsWrapper.append(div);
    });
    b.forEach((div) => {
      cardsWrapper.append(div);
    });
    cardsWrapper.removeAttribute('style');
  }, 600);
};

left.addEventListener('click', () => {
  cardsWrapper.style.opacity = '0';
  displayCards();
});

rigth.addEventListener('click', () => {
  cardsWrapper.style.opacity = '0';
  displayCards();
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.pets_wrapper__btn') || e.target === makeFrBtn.children[2]) {
    document.location.href = './pets.html';
  }
});
