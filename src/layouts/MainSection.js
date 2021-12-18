import NewGameButton from '../components/NewGameButton';
import PlayArea from '../components/PlayArea/PlayArea';
import Gameplay from '../model/Gameplay';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');
  const playArea = PlayArea();

  const handleGameEnd = (reasonToEnd) => {
    console.log(`Game end because of ${reasonToEnd}`);
    mainSection.removeChild(playArea);
    mainSection.appendChild(newGameButton);
  };
  const handleShowQuestion = (currentQuestionObject) => {};

  mainSection.game = Gameplay(handleGameEnd, handleShowQuestion);

  mainSection.changeMode = (mode) => {
    mainSection.game.gameMode = mode;
  };
  const startGame = () => {
    mainSection.appendChild(playArea);
    mainSection.removeChild(newGameButton);
    mainSection.game.startGame();
  };

  const newGameButton = NewGameButton(startGame);
  mainSection.append(newGameButton);

  return mainSection;
};

export default MainSection;
