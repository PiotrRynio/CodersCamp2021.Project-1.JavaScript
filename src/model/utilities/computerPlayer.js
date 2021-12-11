const computerPlayer = (playerToExtend) => {
  const returnedPlayer = playerToExtend;
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
    const randomIndex = Math.floor(
      Math.random() * returnedPlayer.questionAndAnswersToAnswer.answers.length,
    );
    returnedPlayer.randomAnswer = returnedPlayer.questionAndAnswersToAnswer.answers[randomIndex];
  };
  return returnedPlayer;
};

export default computerPlayer;
