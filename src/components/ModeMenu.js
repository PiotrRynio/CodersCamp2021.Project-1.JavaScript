import ModeMenuButton from './ModeMenuButton';

const ModeMenu = (onButtonClick) => {
  const section = document.createElement('div');
  section.classList.add('modeMenu');

  ['Characters', 'Quotes', 'Deaths'].map((buttonName) => {
    let newButton = ModeMenuButton(buttonName, onButtonClick);
    section.appendChild(newButton);
  });

  return section;
};
export default ModeMenu;
