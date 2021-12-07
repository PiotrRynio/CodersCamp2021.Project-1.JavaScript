import Answer from "../components/Answer"

const AnswerSection = ({answers, correctAnswer}, onButtonClick) => {
  const answersSection = document.createElement('section');
  answersSection.classList.add('answersSection');

  const answersButtons = answers.map(answer => (Answer(answer)));
  const [correctButton] = answersButtons.filter(answersButton => answersButton.textContent === correctAnswer);

  const showCorrect = () => {
    correctButton.classList.add('correct');
  }

  const removeListeners = () => {
    answersButtons.forEach(button => button.removeEventListener('click', checkAnswer));
  }

  const checkAnswer = ({target}) => {
    const isCorrect = target.textContent === correctAnswer;
    if(!isCorrect) {
      target.classList.add('wrong');
    }
    showCorrect();
    onButtonClick(isCorrect, target.textContent);
    removeListeners();
  }

  answersButtons.forEach(button => {
    button.addEventListener('click', checkAnswer);
  });

  answersSection.append(...answersButtons)

  return answersSection;
}

export default AnswerSection;