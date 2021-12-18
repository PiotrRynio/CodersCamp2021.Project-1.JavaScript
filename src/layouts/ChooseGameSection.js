import ModeMenu from '../components/ModeMenu';

const ChooseGameSection = (handleChangeMode) => {
  const chooseGame = document.createElement('section');

  chooseGame.classList.add('chooseGameSection');
  chooseGame.appendChild(ModeMenu(handleChangeMode));

  return chooseGame;
};

export default ChooseGameSection;
