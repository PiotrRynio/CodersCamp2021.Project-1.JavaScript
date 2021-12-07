const NewGameButton = (onButtonClick) => {
  const button = document.createElement('button');
  const span = document.createElement('span');

  button.classList.add('newGameButton');
  span.classList.add('newGameButton__greenBlock');

  button.textContent = 'ew Game';
  span.textContent = 'N';

  button.appendChild(span);

  button.addEventListener('click', onButtonClick);

  return button;
};

export default NewGameButton;
