import question from './questionGenerator';

const Game = (handleEndOfGame, handleShowQuestion, handleUpdateTime) => {
  const returnedGame = {
    questionIndex: 0,
    currentQuestion: {},
    questionHistory: [],
    gameMode: '',
    playerName: '',
    score: 0,
    secondsLeft: 60,
  };

  const measureGameTime = () => {
    returnedGame.secondsLeft -= 1;
    if (returnedGame.secondsLeft < 0) {
      returnedGame.endGame();
    } else {
      handleUpdateTime(returnedGame.secondsLeft);
    }
  };

  const generateQuestion = () => {
    if (returnedGame.questionIndex !== 0 && Object.keys(returnedGame.currentQuestion).length !== 0)
      returnedGame.questionHistory.push(returnedGame.currentQuestion);

    returnedGame.questionIndex += 1;
    question(returnedGame.gameMode.toLowerCase(), returnedGame.questionHistory)
      .then((questionObject) => {
        returnedGame.currentQuestion = questionObject;
      })
      .then(() => handleShowQuestion(returnedGame.currentQuestion));
  };

  returnedGame.startGame = () => {
    returnedGame.secondsLeft = 5;
    handleUpdateTime(returnedGame.secondsLeft);
    returnedGame.interval = setInterval(measureGameTime, 1000);
    generateQuestion();
  };

  returnedGame.onAnswerCheck = (isCorrect) => {
    if (isCorrect) returnedGame.score += 1;
    (returnedGame.questionIndex === 15 ? returnedGame.endGame() : generateQuestion)();
  };

  returnedGame.endGame = () => {
    clearInterval(returnedGame.interval);
    handleEndOfGame();
  };

  return returnedGame;
};
export default Game;
