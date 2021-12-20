import NewGameButton from '../components/NewGameButton';
import PlayArea from '../components/PlayArea/PlayArea';
import Gameplay from '../model/Gameplay';
import Timer from '../components/Timer';
import GameSection from '../components/GameSection/GameSection';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');

  const timer = Timer();
  mainSection.appendChild(timer);

  const handleUserAnswer = (isCorrect) => {
    mainSection.game.onAnswerCheck(isCorrect);
  };

  const playArea = PlayArea('', handleUserAnswer);

  const handleEndOfGame = () => {
    mainSection.removeChild(playArea.div);
    mainSection.appendChild(newGameButton);
  };

  const handleShowQuestion = (currentQuestionObject) => {
    mainSection.gameSection.changeQuestion(currentQuestionObject);
  };

  const handleUpdateTime = (secondsToLeft) => {
    timer.updateTime(secondsToLeft);
  };

  mainSection.game = Gameplay(handleEndOfGame, handleShowQuestion, handleUpdateTime);

  mainSection.changeMode = (mode) => {
    mainSection.game.gameMode = mode;
  };

  const startGame = () => {
    mainSection.gameSection = GameSection(mainSection.game.gameMode, handleUserAnswer);
    mainSection.append(gameSection);
    mainSection.removeChild(newGameButton);
    mainSection.game.startGame();
  };

  const newGameButton = NewGameButton(startGame);
  mainSection.append(newGameButton);

  return mainSection;
};

export default MainSection;
