import AnswerButton from '../AnswerButton/AnswerButton';
import isAnswerCorrect from '../../model/isAnswerCorrect';

const AnswerSection = (questionAnswers, onButtonClick) => {
  const answersSection = document.createElement('section');
  answersSection.classList.add('answersSection');

  let { correctAnswer, answers } = questionAnswers;

  const answersButtons = answers.map((answerText) => AnswerButton(answerText));
  const correctAnswerButton = () => {
    const [button] = answersButtons.filter((answerButton) => {
      return isAnswerCorrect(correctAnswer, answerButton.textContent);
    });
    return button;
  };

  const isButtonClicked = () => {
    return correctAnswerButton().classList.contains('answersSection__answer--correct');
  };

  const handleAnswerButtonClick = ({ target }) => {
    if (isButtonClicked()) {
      return;
    }
    const isCorrect = isAnswerCorrect(correctAnswer, target.textContent);
    target.setWrong();
    correctAnswerButton().setCorrect();
    onButtonClick(isCorrect);
  };

  answersButtons.forEach((button) => {
    button.addClickEvent(handleAnswerButtonClick);
  });

  answersSection.setNewQuestionAnswers = (newQuestionAnswers) => {
    answers = newQuestionAnswers.answers;
    correctAnswer = newQuestionAnswers.correctAnswer;
    answers.forEach((answerText, index) => {
      answersButtons[index].setNewAnswer(answerText);
    });
  };

  answersSection.append(...answersButtons);

  return answersSection;
};

export default AnswerSection;
