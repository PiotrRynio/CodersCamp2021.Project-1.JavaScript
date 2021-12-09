import AnswerButton from '../Answer/Answer';
import isAnswerCorrect from '../../model/isAnswerCorrect';

const AnswerSection = ({ answers, correctAnswer }, onButtonClick) => {
  const answersSection = document.createElement('section');
  answersSection.classList.add('answersSection');

  const answersButtons = answers.map((answerText) => AnswerButton(answerText));
  const [correctAnswerButton] = answersButtons.filter((answerButton) =>
    isAnswerCorrect(correctAnswer, answerButton.textContent),
  );

  const isButtonClicked = () => {
    return correctAnswerButton.classList.contains('answersSection__answer--correct');
  };

  const handleAnswerButtonClick = ({ target }) => {
    if (isButtonClicked()) {
      return;
    }
    const isCorrect = isAnswerCorrect(correctAnswer, target.textContent);
    target.setWrong();
    correctAnswerButton.setCorrect();
    onButtonClick(isCorrect, target.textContent);
  };

  answersButtons.forEach((button) => {
    button.addClickEvent(handleAnswerButtonClick);
  });

  answersSection.append(...answersButtons);

  return answersSection;
};

export default AnswerSection;
