import MainMenuButton from "./MainMenuButton";

const MainMenu = (onButtonClick) => {
    const section = document.createElement('div');
    section.classList.add('mainMenu');

    const peopleButton = MainMenuButton('mainMenu__button','Characters',onButtonClick)
    section.appendChild(peopleButton)

    const quotesButton = MainMenuButton('mainMenu__button','Quotes',onButtonClick)
    section.appendChild(quotesButton)

    const deathsButton = MainMenuButton('mainMenu__button','Deaths',onButtonClick)
    section.appendChild(deathsButton)
    
    return section;
  };


  export default MainMenu;
  