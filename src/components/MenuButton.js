const MenuButton = (textInsideButton, onButtonClick) => {
  const button = document.createElement('button');
  button.textContent = textInsideButton;
  button.classList.add('menuButton');

  // const innerTextButton = document.createElement('span');
  // innerTextButton.classList.add('menuButton__text');

  //button.appendChild(innerTextButton);

  button.addEventListener('click', onButtonClick);

  return button;
};

export default MenuButton;
