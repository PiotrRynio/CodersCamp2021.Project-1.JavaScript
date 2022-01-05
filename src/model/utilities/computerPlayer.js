import randomValueFromArray from './randomValueFromArray';
import player from './Player';
import isAnswerCorrect from '../isAnswerCorrect';

const computerPlayer = () => {
  const returnedComputerPlayer = player();
  returnedComputerPlayer.type = 'COMPUTER';
  returnedComputerPlayer.answers = [];
  returnedComputerPlayer.name = 'Tuco';
  returnedComputerPlayer.askQuestion = (questionAndAnswers, handlePlayerAnswered) => {
    returnedComputerPlayer.questionAndAnswersToAnswer = questionAndAnswers;
    setTimeout(() => {
      returnedComputerPlayer.answer();
      const answer = returnedComputerPlayer.randomAnswer;
      const isCorrect = isAnswerCorrect(questionAndAnswers.correctAnswer, answer);
      handlePlayerAnswered({ isCorrect, answer }, returnedComputerPlayer);
    }, 200);
  };
  returnedComputerPlayer.answer = () => {
    returnedComputerPlayer.randomAnswer = randomValueFromArray(
      returnedComputerPlayer.questionAndAnswersToAnswer.answers,
    );
  };
  return returnedComputerPlayer;
};

export default computerPlayer;
