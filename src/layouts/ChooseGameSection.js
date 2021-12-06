import mainMenu from "./mainMenu";

const ChooseGameSection = () => {
  let choosedMode; 
  function handleMainMenuButtonClick(buttonName){
    choosedMode = buttonName; 
  }

  const chooseGame = document.createElement('section');
  chooseGame.classList.add('chooseGameSection');
  chooseGame.appendChild(mainMenu(handleMainMenuButtonClick)); 
  return chooseGame;
};

export default ChooseGameSection;
