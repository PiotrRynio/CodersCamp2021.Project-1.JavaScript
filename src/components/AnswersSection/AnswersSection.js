import AnswerButton from '../Answer/Answer';
import isAnswerCorrect from '../../model/isAnswerCorrect';

const AnswerSection = ({ answers, correctAnswer }, onButtonClick) => {
  const answersSection = document.createElement('section');
  answersSection.classList.add('answersSection');

  const handleAnswerButtonClick = ({ target }) => {
    const isCorrect = isAnswerCorrect(correctAnswer, target.textContent);
    // if (!isCorrect) {
    //   target.setWrong();
    // }
    // showCorrect();
    // onButtonClick(isCorrect, target.textContent);
    // removeListeners();
  };

  const answersButtons = answers.map((answerText) => AnswerButton(answerText, handleAnswerButtonClick));
  const [correctAnswerButton] = answersButtons.filter((answerButton) =>
    isAnswerCorrect(correctAnswer, answerButton.textContent)
  );

  // showCorrect = () => {
  //   answer;
  // };

  answersSection.append(...answersButtons);

  return answersSection;
};

export default AnswerSection;
