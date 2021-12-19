const TextQuestion = (text) => {
  const textQuestion = document.createElement('h3');
  textQuestion.classList.add('textQuestion');

  textQuestion.setNewText = (newText) => {
    textQuestion.textContent = newText;
  };

  textQuestion.setNewText(text);

  return textQuestion;
};

export default TextQuestion;