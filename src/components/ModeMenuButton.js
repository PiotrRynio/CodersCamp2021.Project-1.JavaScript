const ModeMenuButton = (textContent, onClick) => {
  const button = document.createElement('button');
  button.classList.add('modeMenu__button');
  button.textContent = textContent;
  const handleOnClick = () => {
    button.parentElement.removeActive();
    button.classList.add('modeMenu__button--active');
    onClick(textContent);
  };
  button.addEventListener('click', handleOnClick);
  return button;
};

export default ModeMenuButton;
