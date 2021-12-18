import ModeMenuButton from './ModeMenuButton';

const ModeMenu = (handleChangeMode) => {
  const section = document.createElement('div');
  section.classList.add('modeMenu');

  const categoriesButtons = ['Characters', 'Quotes', 'Deaths'].map((buttonName) =>
    ModeMenuButton(buttonName, handleChangeMode),
  );
  section.append(...categoriesButtons);

  return section;
};
export default ModeMenu;
