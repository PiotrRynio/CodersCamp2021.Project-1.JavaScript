const mainMenu = (callback) => {
    const section = document.createElement('div');
    section.classList.add('mainMenu');

    const buttonPeople = document.createElement('button')
    buttonPeople.classList.add('mainMenu__button','mainMenu__peopleButton')
    buttonPeople.innerText ='People';
    section.appendChild(buttonPeople)
    buttonPeople.addEventListener('click', ()=>callback('people'))

    const buttonQuotes = document.createElement('button')
    buttonQuotes.classList.add('mainMenu__button','mainMenu__quotesButton')
    buttonQuotes.innerText ='Quotes';
    section.appendChild(buttonQuotes)

    const buttonDeaths = document.createElement('button')
    buttonDeaths.classList.add('mainMenu__button','mainMenu__deathsButton')
    buttonDeaths.innerText ='Deaths';
    section.appendChild(buttonDeaths)

    // tu dorzucic componenty przyciskow

    return section;
  };


  export default mainMenu;
  