import ModeMenuButton from './ModeMenuButton';

const ModeMenu = (onButtonClick) => {
  const section = document.createElement('div');
  section.classList.add('modeMenu');

  const categoriesButtons = ['Characters', 'Quotes', 'Deaths'].map((buttonName) =>
    ModeMenuButton(buttonName, onButtonClick),
  );
  section.removeActive = () => {
    categoriesButtons.forEach((button) => button.classList.remove('modeMenu__button--active'));
  };
  categoriesButtons[0].classList.add('modeMenu__button--active');

  section.append(...categoriesButtons);

  return section;
};
export default ModeMenu;
