import mainMenu from "./mainMenu";

const ChooseGameSection = () => {
  let choosedMode; 
  function handleMainMenuButtonClick(buttonName){
    console.log(`handlePeopleMainMenuButtonClick - clicked on ${buttonName}`);
    choosedMode = buttonName; 
  }
  const chooseGame = document.createElement('div');
  chooseGame.classList.add('chooseGameSection');
  chooseGame.appendChild(mainMenu(handleMainMenuButtonClick)); 
  return chooseGame;
};

export default ChooseGameSection;
