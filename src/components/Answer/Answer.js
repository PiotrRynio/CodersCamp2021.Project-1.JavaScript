const AnswerButton = (text, onButtonClick) => {
  const answer = document.createElement('button');
  answer.classList.add('answersSection__answer');
  answer.textContent = text;

  answer.setCorrect = () => {
    answer.classList.add('answersSection__answer--correct');
  };

  answer.setWrong = () => {
    answer.classList.add('answersSection__answer--wrong');
  };

  answer.removeClickEvent = () => {
    answer.removeEventListener('click');
  };

  answer.addEventListener('click', onButtonClick);

  return answer;
};

export default AnswerButton;
