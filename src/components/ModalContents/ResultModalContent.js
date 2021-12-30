const ResultModalContent = (playerAnswers, computerAnswers) => {
  const resultModalContent = document.createElement('div');

  const resultTable = document.createElement('table');
  const resultTableHeader = document.createElement('tr');
  const resultTableHeaderQuestionNumber = document.createElement('th');
  resultTableHeaderQuestionNumber.textContent = 'No';
  const resultTableHeaderPlayer = document.createElement('th');
  resultTableHeaderPlayer.textContent = 'Player';
  const resultTableHeaderComputer = document.createElement('th');
  resultTableHeaderPlayer.textContent = 'Computer';
  resultTableHeaderPlayer.append(
    resultTableHeaderQuestionNumber,
    resultTableHeaderPlayer,
    resultTableHeaderComputer,
  );
  resultTable.append(resultTableHeader);

  const howManyAnswers =
    playerAnswers.length >= computerAnswers.length ? playerAnswers.length : computerAnswers.length;

  for (let answerIndex = 0; answerIndex < howManyAnswers; answerIndex += 1) {
    const row = document.createElement('tr');

    const questionNumber = document.createElement('td');
    questionNumber.textContent = answerIndex + 1;

    const playerCell = document.createElement('td');
    playerCell.textContent = playerAnswers[answerIndex]
      ? playerAnswers[answerIndex].answer
      : 'No answer';
    playerCell.classList.add(playerAnswers[answerIndex].isCorrect ? 'correct' : 'wrong');
    const computerCell = document.createElement('td');
    computerCell.textContent = computerAnswers[answerIndex]
      ? computerAnswers[answerIndex].answer
      : 'No answer';
    computerCell.classList.add(computerAnswers[answerIndex].isCorrect ? 'correct' : 'wrong');

    row.append(questionNumber, playerCell, computerCell);
    resultTable.append(row);
  }

  const closeButton = document.createElement('button');

  resultModalContent.append(resultTable, closeButton);

  return resultModalContent;
};

export default ResultModalContent;
