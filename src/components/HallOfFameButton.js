const MenuButton = () => {
  const textInsideButton = 'Hall of Fame';

  const button = document.createElement('button');
  button.classList.add('menuButton');

  const innerTextButton = document.createElement('span');
  innerTextButton.classList.add('menuButton__text');
  innerTextButton.innerText = textInsideButton;

  button.appendChild(innerTextButton);

  return button;
};

export default MenuButton;
