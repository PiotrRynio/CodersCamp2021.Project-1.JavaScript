import randomValueFromArray from './randomValueFromArray';
import player from './Player';

const computerPlayer = () => {
  const returnedPlayer = player();
  returnedPlayer.questionAndAnswersToAnswer = {};

  returnedPlayer.askQuestion = (showQuestionToPlayer, questionAndAnswers, handlePlayerAnswered) => {
    returnedPlayer.questionAndAnswersToAnswer = questionAndAnswers;

    showQuestionToPlayer(questionAndAnswers);
    // eslint-disable-next-line func-names
    setTimeout(function () {
      returnedPlayer.answer();
      handlePlayerAnswered();
    }, 1000);
  };
  returnedPlayer.answer = () => {
    returnedPlayer.randomAnswer = randomValueFromArray(
      returnedPlayer.questionAndAnswersToAnswer.answers,
    );
  };
  return returnedPlayer;
};

export default computerPlayer;
