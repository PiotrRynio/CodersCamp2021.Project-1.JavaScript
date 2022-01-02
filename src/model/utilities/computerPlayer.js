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
    // eslint-disable-next-line func-names
    setTimeout(function () {
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

// import randomValueFromArray from './randomValueFromArray';
// import player from './Player';

// const computerPlayer = () => {
//   const returnedPlayer = player();
//   returnedPlayer.questionAndAnswersToAnswer = {};

//   returnedPlayer.askQuestion = (questionObject, handlePlayerAnswered) => {
//     returnedPlayer.currentQuestion = questionObject;

//     // eslint-disable-next-line func-names
//     // setTimeout(function () {
//     //   returnedPlayer.answer();
//     //   handlePlayerAnswered();
//     // }, 1000);
//   };
//   returnedPlayer.answer = () => {
//     returnedPlayer.randomAnswer = randomValueFromArray(returnedPlayer.questionObject.answers);
//   };
//   return returnedPlayer;
// };

// export default computerPlayer;
