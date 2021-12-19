import AnswerSection from '../AnswersSection/AnswersSection';
import MainImage from '../MainImage';
import TextQuestion from '../TextQuestion/TextQuestion';

const PlayArea = (category, onButtonClick) => {
  const playArea = {};
  playArea.div = document.createElement('div');
  playArea.div.classList.add('playArea');

  const textQuestion = TextQuestion('Test question text');
  playArea.div.appendChild(textQuestion);

  playArea.showQuestionAndAnswer = (question) => {
    playArea.removePreviousAnswers();

    const answerSection = AnswerSection(
      { answers: question.answers, correctAnswer: question.correctAnswer },
      onButtonClick,
    );
    playArea.div.appendChild(answerSection);
  };
  playArea.removePreviousAnswers = () => {
    if (document.querySelector('.answersSection')) {
      playArea.div.removeChild(document.querySelector('.answersSection'));
    }
  };

  playArea.div.appendChild(MainImage());

  return playArea;
};
export default PlayArea;
