import ModeMenu from '../components/ModeMenu';

const ChooseGameSection = () => {
  const chooseGame = document.createElement('section');
  chooseGame.classList.add('chooseGameSection');

  chooseGame.choosedMode = 'Characters';
  function handleModeMenuButtonClick(newCategoryName) {
    chooseGame.choosedMode = newCategoryName;
  }

  chooseGame.appendChild(ModeMenu(handleModeMenuButtonClick));
  return chooseGame;
};

export default ChooseGameSection;
