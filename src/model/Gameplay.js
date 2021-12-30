import questionGenerator from './questionGenerator';
import player from './utilities/Player';
import computerPlayer from './utilities/computerPlayer';

const Gameplay = (handleEndOfGame, handleShowQuestion, handleUpdateTime) => {
  const returnedGame = {
    currentQuestion: {},
    questionHistory: [],
    gameMode: 'Characters',
    humanPlayer: player(),
    computerPlayer: computerPlayer(),
    questionGenerator: {},
  };

  returnedGame.onHumanAnswer = (answer) => {
    returnedGame.onAnswerCheck(answer, returnedGame.humanPlayer);
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

  const generateQuestion = (askedPlayer) => {
    askedPlayer.currentQuestionIndex += 1;

    const question = returnedGame.questionGenerator.getQuestion(askedPlayer.name);
    returnedGame.currentQuestion = question;

    if (askedPlayer.type === 'HUMAN') {
      askedPlayer.askQuestion(handleShowQuestion, question);
    } else if (askedPlayer.type === 'COMPUTER') {
      askedPlayer.askQuestion(() => {}, question, returnedGame.onAnswerCheck);
    }
  };

  returnedGame.startGame = () => {
    questionGenerator(returnedGame.gameMode).then((generator) => {
      returnedGame.questionGenerator = generator;
      returnedGame.secondsLeft = 60;
      handleUpdateTime(returnedGame.secondsLeft);
      generateQuestion(returnedGame.computerPlayer);
      generateQuestion(returnedGame.humanPlayer);
    });
  };

  returnedGame.onAnswerCheck = (answer, answeredPlayer) => {
    answeredPlayer.answers.push(answer);
    const isLastQuestion = answeredPlayer.currentQuestionIndex === 15;
    if (answeredPlayer.type === 'HUMAN' && isLastQuestion) {
      returnedGame.endGame();
    } else if (answeredPlayer.type === 'COMPUTER' && isLastQuestion) {
    } else {
      generateQuestion(answeredPlayer);
    }
  };

  returnedGame.endGame = () => {
    clearInterval(returnedGame.interval);
    returnedGame.interval = false;
    handleEndOfGame();
    console.log('koniec gry');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
  };

  return returnedGame;
};
export default Gameplay;
