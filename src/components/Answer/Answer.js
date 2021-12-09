const AnswerButton = (text) => {
  const answer = document.createElement('button');
  answer.classList.add('answersSection__answer');
  answer.textContent = text;

  answer.setCorrect = () => {
    answer.classList.add('answersSection__answer--correct');
  };

  answer.setWrong = () => {
    answer.classList.add('answersSection__answer--wrong');
  };

  answer.addClickEvent = (onButtonClick) => {
    answer.addEventListener('click', onButtonClick);
  };

  return answer;
};

export default AnswerButton;
