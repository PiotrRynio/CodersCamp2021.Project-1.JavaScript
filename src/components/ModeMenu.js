import ModeMenuButton from "./ModeMenuButton";

const ModeMenu = (onButtonClick) => {
    const section = document.createElement('div');
    section.classList.add('modeMenu');

    section.append(['Characters', 'Quotes', 'Deaths'].map( buttonName => ModeMenuButton(buttonName, onButtonClick)));
      
    return section;
  };
  export default ModeMenu;
  
