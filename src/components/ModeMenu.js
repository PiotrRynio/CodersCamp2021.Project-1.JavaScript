import ModeMenuButton from './ModeMenuButton';

const ModeMenu = (onButtonClick) => {
  const section = document.createElement('div');
  section.classList.add('modeMenu');

  const categoriesButtons = ['Characters', 'Quotes', 'Deaths'].map((buttonName) =>
    ModeMenuButton(buttonName, onButtonClick),
  );
  section.append(...categoriesButtons);

  return section;
};
export default ModeMenu;
