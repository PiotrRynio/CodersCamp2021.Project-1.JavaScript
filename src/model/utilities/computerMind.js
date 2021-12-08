import player from './player';

const computerMind = (player) => {
  const computerMind = {};
  computerMind.computerPlayer = player();
  computerMind.tryAnswer = (player) => {
    player.askQuestion();
    computerMind.answerFromComputerMind = randomComputerAnswer(player.onQuestionAsked.answers);
  };
  return computerMind;
};

const randomComputerAnswer = (answers) => {
  randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
};

/*QUESTION STRUCTURE
const testQuestion = {
  answers: ["Declan's men and his cook.", 'Los Pollos driver', 'No-Doze', 'Max Arciniega'],
  correctAnswer: 'No-Doze',
  questionObject: 'Beaten to death.',
};
*/
