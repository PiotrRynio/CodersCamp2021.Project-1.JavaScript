const player = () => {
  const returnedPlayer = {
    askQuestion(showQuestionToPlayer, questionAndAnswers) {
      showQuestionToPlayer(questionAndAnswers);
    },

    answer(answerQuestion, choosenAnswer) {
      answerQuestion(choosenAnswer);
    },
  };

  return returnedPlayer;
};

export default player;
