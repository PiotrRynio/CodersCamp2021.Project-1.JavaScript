import question from './questionGenerator';
import player from './utilities/Player';

const Game = (handleEndOfGame, handleShowQuestion, handleUpdateTime) => {
  const returnedGame = {
    currentQuestion: {},
    questionHistory: [],
    gameMode: 'Characters',
    gamePlayer: player(),
    playerName: '',
    score: 0,
    questionIndex: 0,
  };

  const measureGameTime = () => {
    returnedGame.secondsLeft -= 1;
    if (returnedGame.secondsLeft < 0) {
      returnedGame.endGame();
    } else {
      handleUpdateTime(returnedGame.secondsLeft);
    }
  };

  returnedGame.startTiming = () => {
    returnedGame.interval = setInterval(measureGameTime, 1000);
  };

  const generateQuestion = () => {
    returnedGame.questionIndex += 1;
    question(returnedGame.gameMode.toLowerCase(), returnedGame.questionHistory).then(
      (questionObject) => {
        returnedGame.currentQuestion = questionObject;
        returnedGame.gamePlayer.askQuestion(handleShowQuestion, questionObject);
      },
    );
  };

  returnedGame.startGame = () => {
    returnedGame.secondsLeft = 60;
    handleUpdateTime(returnedGame.secondsLeft);
    generateQuestion();
  };

  returnedGame.onAnswerCheck = (isCorrect) => {
    if (isCorrect) returnedGame.score += 1;
    (returnedGame.questionIndex === 15 ? returnedGame.endGame : generateQuestion)();
  };

  returnedGame.endGame = () => {
    clearInterval(returnedGame.interval);
    returnedGame.interval = false;
    handleEndOfGame();
  };

  return returnedGame;
};
export default Game;
