import ModeMenu from '../components/ModeMenu';

const ChooseGameSection = () => {
  let choosedMode;
  function handleModeMenuButtonClick(buttonName) {
    choosedMode = buttonName;
  }

  const chooseGame = document.createElement('section');
  chooseGame.classList.add('chooseGameSection');
  chooseGame.appendChild(ModeMenu(handleModeMenuButtonClick));
  return chooseGame;
};

export default ChooseGameSection;
