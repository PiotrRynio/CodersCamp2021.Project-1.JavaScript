const player = () => {
  const returnedPlayer = {
    name: '',
    answers: [],
    currentQuestionIndex: 0,
    type: 'HUMAN',

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
