import mainMenu from "./mainMenu";

const ChooseGameSection = () => {
  let czyZostalPoinformowany = false; 
  function handlePeopleMainMenuButtonClick (x){
    console.log('Kliknieto people menu button');
    console.log(x);
    czyZostalPoinformowany = true; 
  }

  const chooseGame = document.createElement('div');
  chooseGame.classList.add('chooseGameSection');
  chooseGame.appendChild(mainMenu(handlePeopleMainMenuButtonClick)); 
  return chooseGame;
};

export default ChooseGameSection;
