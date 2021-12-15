import NewGameButton from '../components/NewGameButton';
import playArea from '../components/PlayArea/PlayArea';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');

  const startGame = () => {
    console.log('The game has started');
    mainSection.appendChild(playArea());
    mainSection.removeChild(newGameButton);
  };
  const newGameButton = NewGameButton(startGame);
  mainSection.append(newGameButton);

  return mainSection;
};

export default MainSection;
