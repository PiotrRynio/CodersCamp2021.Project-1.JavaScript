const NewGameButton = (onButtonClick) => {
  const button = document.createElement('button');
  const firstLetter = document.createElement('firstletter');
  const elementNum = document.createElement('span');

  button.classList.add('newGameButton');
  firstLetter.classList.add('newGameButton__first-letter');
  elementNum.classList.add('elementNum');

  button.textContent = 'ew Game';
  firstLetter.textContent = 'N';
  elementNum.textContent = '7';

  button.appendChild(firstLetter);
  firstLetter.appendChild(elementNum);

  button.addEventListener('click', onButtonClick);

  return button;
};

export default NewGameButton;
