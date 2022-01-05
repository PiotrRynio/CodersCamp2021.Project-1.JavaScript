const ResultModalContent = (playerAnswers, computerAnswers) => {
  const resultModalContent = document.createElement('div');
  resultModalContent.classList.add('resultModalContent');

  const closeButton = document.createElement('button');
  closeButton.classList.add('closeButton');
  closeButton.textContent = 'Close';

  resultModalContent.setOnModalClose = (modalClose) => {
    closeButton.onclick = modalClose;
  };

  const resultTable = document.createElement('table');
  resultTable.classList.add('table');

  const resultTableHeader = document.createElement('tr');
  resultTableHeader.classList.add('table__header');

  const resultTableHeaderQuestionNumber = document.createElement('th');
  resultTableHeaderQuestionNumber.classList.add('table__header__number');
  resultTableHeaderQuestionNumber.textContent = 'No';

  const resultTableHeaderPlayer = document.createElement('th');
  resultTableHeaderPlayer.textContent = 'Player';
  resultTableHeaderPlayer.classList.add('table__header__column');

  const resultTableHeaderComputer = document.createElement('th');
  resultTableHeaderComputer.textContent = 'Computer';
  resultTableHeaderComputer.classList.add('table__header__column');

  resultTableHeader.append(
    resultTableHeaderQuestionNumber,
    resultTableHeaderPlayer,
    resultTableHeaderComputer,
  );
  resultTable.append(resultTableHeader);

  const howManyAnswers =
    playerAnswers.length >= computerAnswers.length ? playerAnswers.length : computerAnswers.length;

  for (let answerIndex = 0; answerIndex < howManyAnswers; answerIndex += 1) {
    const row = document.createElement('tr');
    row.classList.add('table__dataRow');

    const questionNumber = document.createElement('td');
    questionNumber.textContent = answerIndex + 1;
    questionNumber.classList.add('table__dataRow__number');

    const playerCell = document.createElement('td');
    const playerCellText = document.createElement('span');
    playerCellText.textContent = playerAnswers[answerIndex]
      ? playerAnswers[answerIndex].answer
      : 'No answer';
    playerCell.classList.add(
      playerAnswers[answerIndex] && playerAnswers[answerIndex].isCorrect ? 'correct' : 'wrong',
    );
    playerCell.classList.add('table__dataRow__column');
    playerCell.append(playerCellText);

    const computerCell = document.createElement('td');
    const computerCellText = document.createElement('span');
    computerCellText.textContent = computerAnswers[answerIndex]
      ? computerAnswers[answerIndex].answer
      : 'No answer';
    computerCell.classList.add(
      computerAnswers[answerIndex] && computerAnswers[answerIndex].isCorrect ? 'correct' : 'wrong',
    );
    computerCell.classList.add('table__dataRow__column');
    computerCell.append(computerCellText);

    row.append(questionNumber, playerCell, computerCell);
    resultTable.append(row);
  }

  resultModalContent.append(resultTable, closeButton);

  return resultModalContent;
};

export default ResultModalContent;
