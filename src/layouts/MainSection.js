import NewGameButton from '../components/NewGameButton';
import PlayArea from '../components/PlayArea/PlayArea';
import Gameplay from '../model/Gameplay';
import Timer from '../components/Timer';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');

  const timer = Timer();
  mainSection.appendChild(timer);

  const handleUserAnswer = (isCorrect, answer) => {
    console.log(`User answer ${answer}, is correct: ${isCorrect}`);
    mainSection.game.onAnswerCheck(answer);
  };

  const playArea = PlayArea('', handleUserAnswer);

  const handleEndOfGame = (reasonOfEnd) => {
    console.log(`Game end because of ${reasonOfEnd}`);
    console.log(`User scores: ${mainSection.game.score} / ${mainSection.game.questionIndex}`);
    mainSection.removeChild(playArea.div);
    mainSection.appendChild(newGameButton);
  };
  const handleShowQuestion = (currentQuestionObject) => {
    console.log('currentQuestionObject.answers', currentQuestionObject.answers);
    playArea.showQuestionAndAnswer(currentQuestionObject);
  };
  const handleUpdateTime = (secondsToLeft) => {
    timer.updateTime(secondsToLeft);
  };

  mainSection.game = Gameplay(handleEndOfGame, handleShowQuestion, handleUpdateTime);

  mainSection.changeMode = (mode) => {
    mainSection.game.gameMode = mode;
  };
  const startGame = () => {
    mainSection.appendChild(playArea.div);
    mainSection.removeChild(newGameButton);
    mainSection.game.startGame();
  };

  const newGameButton = NewGameButton(startGame);
  mainSection.append(newGameButton);

  return mainSection;
};

export default MainSection;
