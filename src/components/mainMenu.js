import mainMenuButton from "./mainMenuButton";

const mainMenu = (callback) => {
    const section = document.createElement('div');
    section.classList.add('mainMenu');

    const peopleButton = mainMenuButton('mainMenu__button','People',callback)
    section.appendChild(peopleButton)

    const quotesButton = mainMenuButton('mainMenu__button','Quotes',callback)
    section.appendChild(quotesButton)

    const deathsButton = mainMenuButton('mainMenu__button','Deaths',callback)
    section.appendChild(deathsButton)
    
    return section;
  };


  export default mainMenu;
  