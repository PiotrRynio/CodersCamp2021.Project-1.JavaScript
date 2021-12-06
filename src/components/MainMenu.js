import MainMenuButton from "./MainMenuButton";

const MainMenu = (onButtonClick) => {
    const section = document.createElement('div');
    section.classList.add('mainMenu');

    const peopleButton = MainMenuButton('Characters',onButtonClick)
    section.appendChild(peopleButton)

    const quotesButton = MainMenuButton('Quotes',onButtonClick)
    section.appendChild(quotesButton)

    const deathsButton = MainMenuButton('Deaths',onButtonClick)
    section.appendChild(deathsButton)
    
    return section;
  };
  export default MainMenu;
  
