import AnswerSection from '../AnswersSection/AnswersSection';
import MainImage from '../MainImage';

const PlayArea = () => {
  const playArea = document.createElement('div');
  playArea.classList.add('playArea');
  const answers = ['Walter White', 'Jesse Pinkman', 'Hank Shrader', 'Saul Goodman'];
  playArea.appendChild(MainImage());
  const handler = (isCorrect, answer) => {
    console.log(answer, isCorrect);
  };
  playArea.append(AnswerSection({ answers, correctAnswer: 'Walter White' }, handler));

  return playArea;
};
export default PlayArea;
