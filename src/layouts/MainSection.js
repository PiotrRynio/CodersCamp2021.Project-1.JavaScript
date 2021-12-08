import AnswerSection from '../components/AnswersSection/AnswersSection';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');

  const answers = ['Walter White', 'Jesse Pinkman', 'Hank Shrader', 'Saul Goodman'];
  const handler = (isCorrect, answer) => {
    console.log(answer, isCorrect);
  };

  mainSection.append(AnswerSection({ answers, correctAnswer: 'Walter White' }, handler));
  return mainSection;
};
export default MainSection;
