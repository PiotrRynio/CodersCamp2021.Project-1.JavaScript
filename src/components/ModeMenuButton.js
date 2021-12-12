const ModeMenuButton = (textContent, onClick) => {
  const button = document.createElement('button');
  button.classList.add('modeMenu__button');
  button.textContent = textContent;

  button.addEventListener('click', () => onClick(textContent));
  return button;
};

export default ModeMenuButton;
