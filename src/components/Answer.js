const Answer = (text) => {
  const answer = document.createElement('button');
  answer.classList.add('answersSection__answer');
  answer.textContent = text;

  return answer
}

export default Answer;