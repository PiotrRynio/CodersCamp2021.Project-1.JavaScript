import randomValueFromArray from './randomValueFromArray';
import player from './Player';
import isAnswerCorrect from '../isAnswerCorrect';

const computerPlayer = () => {
  const returnedComputerPlayer = player();
  returnedComputerPlayer.type = 'COMPUTER';
  returnedComputerPlayer.answers = [];
  returnedComputerPlayer.name = 'Tuco';
  returnedComputerPlayer.isGameFinished = false;
  returnedComputerPlayer.askQuestion = (questionAndAnswers, handlePlayerAnswered) => {
    returnedComputerPlayer.questionAndAnswersToAnswer = questionAndAnswers;
    if (returnedComputerPlayer.isGameFinished) {
      return;
    }
    setTimeout(() => {
      returnedComputerPlayer.answer();
      const answer = returnedComputerPlayer.randomAnswer;
      const isCorrect = isAnswerCorrect(questionAndAnswers.correctAnswer, answer);
      handlePlayerAnswered({ isCorrect, answer }, returnedComputerPlayer);
    }, 1000);
  };
  returnedComputerPlayer.answer = () => {
    returnedComputerPlayer.randomAnswer = randomValueFromArray(
      returnedComputerPlayer.questionAndAnswersToAnswer.answers,
    );
  };
  return returnedComputerPlayer;
};

export default computerPlayer;
