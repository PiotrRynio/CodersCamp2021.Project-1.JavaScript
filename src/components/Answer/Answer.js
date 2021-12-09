import AnswerSection from '../AnswersSection/AnswersSection';

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

  answer.setNewAnswer = (newText) => {
    answer.textContent = newText;
    answer.classList.remove('answersSection__answer--correct');
    answer.classList.remove('answersSection__answer--wrong');
  };

  return answer;
};

export default AnswerButton;
