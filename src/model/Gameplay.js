import isAnswerIsCorrect from './isAnswerCorrect';
import player from './utilities/Player';
import question from './questionGenerator';
import { saveScore } from './saveScore';

const Game = (handleEndOfGame, handleShowQuestion, handleUpdateTime) => {
  const returnedGame = {
    questionIndex: 0,
    currentQuestion: {},
    questionHistory: [],
    gameMode: '',
    playerName: '',
    score: 0,
    secondsLeft: Number,
    Player: player(),
  };

  const measureGameTime = () => {
    console.log(returnedGame.secondsLeft);
    returnedGame.secondsLeft -= 1;

    if (returnedGame.secondsLeft < 0) {
      returnedGame.endGame('Timeout');
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
    console.log('The game has started');
    console.log(`Choosed game mode: ${returnedGame.gameMode}`);
    returnedGame.secondsLeft = 5;
    handleUpdateTime(returnedGame.secondsLeft);
    returnedGame.interval = setInterval(measureGameTime, 1000);
    generateQuestion();
  };

  returnedGame.onAnswerCheck = (userAnswer) => {
    if (isAnswerIsCorrect(userAnswer, returnedGame.currentQuestion.correctAnswer))
      returnedGame.score += 1;
    console.log(returnedGame.score);
    (returnedGame.questionIndex === 15 ? returnedGame.endGame('15 Questions') : generateQuestion)();
  };

  returnedGame.endGame = (reasonToEnd) => {
    clearInterval(returnedGame.interval);
    handleEndOfGame(reasonToEnd);
  };

  return returnedGame;
};

export default Game;
