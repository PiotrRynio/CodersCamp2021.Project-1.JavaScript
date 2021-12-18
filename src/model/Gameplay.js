import isAnswerIsCorrect from './isAnswerCorrect';
import player from './utilities/Player';
import question from './questionGenerator';
import { saveScore } from './saveScore';

const Game = (handleGameEnd, handleShowQuestion) => {
  const returnedGame = {
    questionIndex: 0,
    currentQuestion: {},
    questionHistory: [],
    playerName: '',
    score: 0,
    Player: player(),
  };
  const displayQuestion = () => {
    console.log(returnedGame.currentQuestion);
    handleShowQuestion(returnedGame.currentQuestion);
  };
  const measureGameTime = () => {
    console.log(returnedGame.secondsLeft);
    returnedGame.secondsLeft -= 1;
    if (returnedGame.secondsLeft < 0) returnedGame.endGame('Timeout');
  };

  const generateQuestion = () => {
    if (returnedGame.questionIndex !== 0 && Object.keys(returnedGame.currentQuestion).length !== 0)
      returnedGame.questionHistory.push(returnedGame.currentQuestion);

    returnedGame.questionIndex += 1;
    question(returnedGame.gameMode.toLowerCase(), [])
      .then((questionObject) => {
        returnedGame.currentQuestion = questionObject;
      })
      .then(() => displayQuestion());
  };

  returnedGame.startGame = () => {
    console.log('The game has started');
    console.log(`Choosed game mode: ${returnedGame.gameMode}`);
    returnedGame.secondsLeft = 5;
    returnedGame.interval = setInterval(measureGameTime, 1000);
    generateQuestion();
  };

  returnedGame.onAnswerCheck = (userAnswer) => {
    if (isAnswerIsCorrect(userAnswer, returnedGame.currentQuestion.correctAnswer))
      returnedGame.score += 1;

    (returnedGame.questionIndex === 15 ? returnedGame.endGame : returnedGame.generateQuestion)();
  };

  returnedGame.endGame = (reasonToEnd) => {
    console.log('Game ends');
    clearInterval(returnedGame.interval);
    saveScore(returnedGame.type, returnedGame.playerName, returnedGame.score);
    handleGameEnd(reasonToEnd);
  };

  return returnedGame;
};

export default Game;
