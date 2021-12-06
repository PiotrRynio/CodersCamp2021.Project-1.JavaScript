import mainMenuButton from "./mainMenuButton";

const mainMenu = (onButtonClick) => {
    const section = document.createElement('div');
    section.classList.add('mainMenu');

    const peopleButton = mainMenuButton('mainMenu__button','Characters',onButtonClick)
    section.appendChild(peopleButton)

    const quotesButton = mainMenuButton('mainMenu__button','Quotes',onButtonClick)
    section.appendChild(quotesButton)

    const deathsButton = mainMenuButton('mainMenu__button','Deaths',onButtonClick)
    section.appendChild(deathsButton)
    
    return section;
  };


  export default mainMenu;
  