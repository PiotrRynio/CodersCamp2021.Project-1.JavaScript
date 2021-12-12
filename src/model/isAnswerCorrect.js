function isAnswerCorrect(correctAnswer, userAnswer) {
  return !!(userAnswer && correctAnswer === userAnswer);
}

export default isAnswerCorrect;
