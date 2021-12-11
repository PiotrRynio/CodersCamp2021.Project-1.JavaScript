const player = () => {
  const returnedPlayer = {
    askQuestion(onQuestionAsked, questionAndAnswers) {
      onQuestionAsked(questionAndAnswers);
    },
    answer(onQuestionAnswered, choosenAnswer) {
      onQuestionAnswered(choosenAnswer);
    },
  };

  return returnedPlayer;
};

export default player;
