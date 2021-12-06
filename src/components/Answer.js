const Answer = (text) => {
  const answer = document.createElement('button');
  answer.classList.add('Answer');
  answer.innerText = text;

  return answer
}