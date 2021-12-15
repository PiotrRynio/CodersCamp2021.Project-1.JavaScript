import isAnswerIsCorrect from './isAnswerCorrect';
import player from './utilities/Player';
import question from './questionGenerator';
import { saveScore } from './saveScore';

const Game = (name, gameType) => {
  const returnedGame = {
    type: gameType,
    questionIndex: 0,
    currentQuestion: {},
    playerName: name,
    currentScore: 0,
    Player: player(),
  };
  returnedGame.startGame = () => {
    (returnedGame.secondsLeft = 60), setInterval(returnedGame.measureTime, 1000);
    generateQuestion();
  };

  returnedGame.generateQuestion = () => {
    questionIndex++;
    Game.currentQuestion = question();
    displayQuestion();
  };

  returnedGame.displayQuestion = () => {
    shuffleQuestion();
  };

  returnedGame.onAnswerCheck = () => {
    questionIndex === 15 ? endGame() : generateQuestion();
  };

  returnedGame.endGame = () => {
    saveScore(Game.type, Game.playerName, game.score);
  };

  returnedGame.measureTime = () => secondsLeft--;

  return returnedGame;
};

export default Game;
