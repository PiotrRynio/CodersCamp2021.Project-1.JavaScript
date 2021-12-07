const NewGameButton = () => {
  const button = document.createElement('button');
  const span = document.createElement('span');

  button.classList.add('newGameButton');
  span.classList.add('newGameButton__greenBlock');

  button.textContent = 'ew Game';
  span.textContent = 'N';

  button.appendChild(span);

  return button;
};

export default NewGameButton;
