const left = document.querySelector('.pets_btn__left');
const rigth = document.querySelector('.pets_btn__rigth');
const cardsWrapper = document.querySelector('.pets_cards');
const cards = document.querySelectorAll('.pets_cards__item');

left.addEventListener('click', () => {
  const removeCard = cardsWrapper.children[0];
  cardsWrapper.children[0].remove();
  cardsWrapper.append(removeCard);
});

rigth.addEventListener('click', () => {
  const last = cardsWrapper.children.length - 1;
  const removeCard = cardsWrapper.children[last];
  cardsWrapper.children[last].remove();
  cardsWrapper.prepend(removeCard);
});
