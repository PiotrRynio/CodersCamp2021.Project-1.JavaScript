const NewGameButton = (onButtonClick) => {
  const text = 'New Game';

  const button = document.createElement('button');
  const firstLetter = document.createElement('span');
  const restOfText = document.createElement('span');

  button.classList.add('newGameButton');
  firstLetter.classList.add('newGameButton__firstLetter');
  restOfText.classList.add('newGameButton__restOfText');

  firstLetter.textContent = text.charAt(0);
  restOfText.textContent = text.substring(1, 8);

  button.appendChild(firstLetter);
  button.appendChild(restOfText);

  button.addEventListener('click', onButtonClick);

  return button;
};

export default NewGameButton;
