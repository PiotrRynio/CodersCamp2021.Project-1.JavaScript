export const mainMenu = () => {
    /*
    const section = document.getElementByClassName('chooseGameSection')
    console.log(section)
    const mainMenu = section.createElement('button');
*/
    const section = document.querySelector('.chooseGameSection');
    //const low = section.querySelector('.upperSection')
    const mainMenuElement = document.createElement('div');
    mainMenuElement.classList.add('mainMenu');
    section.appendChild(mainMenuElement)
    
  



    //section.append(mainMenu); 
    /*
    button.classList.add('buttonPlayTheGame');
    button.innerText= "PLAY THE GAME"
   
    
const onButtonClick=()=>{
    button.innerText = "GAME STARTED"*/
    return section; 
};
/*
button.addEventListener('click', onButtonClick)
return button;
  };
  */