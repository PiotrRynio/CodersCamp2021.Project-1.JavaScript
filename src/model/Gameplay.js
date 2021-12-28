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

  returnedGame.measureGameTime = () => {
    returnedGame.secondsLeft -= 1;
    if (returnedGame.secondsLeft < 0) {
      returnedGame.endGame();
    } else {
      handleUpdateTime(returnedGame.secondsLeft);
    }
  };

  returnedGame.startTiming = () => {
    returnedGame.interval = setInterval(returnedGame.measureGameTime, 1000);
  };

  returnedGame.generateQuestion = () => {
    returnedGame.questionIndex += 1;
    question(returnedGame.gameMode.toLowerCase(), returnedGame.questionHistory)
      .then((questionObject) => {
        returnedGame.currentQuestion = questionObject;
      })
      .then(() =>
        returnedGame.gamePlayer.askQuestion(handleShowQuestion, returnedGame.currentQuestion),
      );
  };

  returnedGame.startGame = () => {
    returnedGame.questionIndex = 0;
    returnedGame.score = 0;
    returnedGame.secondsLeft = 60;
    handleUpdateTime(returnedGame.secondsLeft);
    returnedGame();
  };

  returnedGame.onAnswerCheck = (isCorrect) => {
    if (isCorrect) returnedGame.score += 1;
    (returnedGame.questionIndex === 15 ? returnedGame.endGame : returnedGame.generateQuestion)();
  };

  returnedGame.endGame = () => {
    clearInterval(returnedGame.interval);
    returnedGame.interval = false;
    handleEndOfGame();
  };

  return returnedGame;
};
export default Game;
