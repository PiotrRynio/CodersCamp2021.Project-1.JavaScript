import MainMenu from "../components/MainMenu"

const ChooseGameSection = () => {
  let choosedMode; 
  function handleMainMenuButtonClick(buttonName){
    choosedMode = buttonName; 
  }

  const chooseGame = document.createElement('section');
  chooseGame.classList.add('chooseGameSection');
  chooseGame.appendChild(MainMenu(handleMainMenuButtonClick)); 
  return chooseGame;
};

export default ChooseGameSection;
