const player = () => {
  const returnedPlayer = {
    askQuestion(onQuestionAsked, randomQuestion) {
      onQuestionAsked(randomQuestion);
    },
    answer(onQuestionAnswered, choosenAnswer) {
      onQuestionAnswered(choosenAnswer);
    },
  };

  return returnedPlayer;
};

export default player;
