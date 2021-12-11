import player from './player';

const computerPlayer = (player) => {
  const computerPlayer = {};
  computerPlayer = player;
  computerPlayer.questionAndAnswers = {};

  computerPlayer.askQuestion = (showQuestion, questionAsked, handlePlayerAnswered) => {
    computerPlayer.questionAndAnswers = questionAsked;
    setTimeout(computerPlayer.answer, 1000);
  };
  computerPlayer.answer = (onQuestionAnswered) => {
    //answerFromComputerMind = randomComputerAnswer(questionAsked);
    const randomAnswersIndex = Math.floor(Math.random() * answers.length);
    const answerFromComputerMind = computerPlayer.questionAndAnswers.answers[randomAnswersIndex];
    onQuestionAnswered(answerFromComputerMind);
  };
  return computerPlayer;
};
