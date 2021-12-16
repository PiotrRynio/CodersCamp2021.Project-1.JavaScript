const MenuButton = (textInsideButton, onButtonClick) => {
  const button = document.createElement('button');
  button.classList.add('menuButton');

  const innerTextButton = document.createElement('span');
  innerTextButton.classList.add('menuButton__text');
  innerTextButton.textContent = textInsideButton;

  button.appendChild(innerTextButton);

  button.addEventListener('click', onButtonClick);

  return button;
};

export default MenuButton;
