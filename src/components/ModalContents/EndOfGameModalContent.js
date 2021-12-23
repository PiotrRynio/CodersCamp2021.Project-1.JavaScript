import { saveScore, getScores } from '../../model/saveScore';

const EndOfGameModalContent = (gameType, answersListPlayer, answersListComputer) => {
  const endOfGameModalContent = document.createElement('div');
  endOfGameModalContent.classList.add('endOfGameModalContent');

  endOfGameModalContent.onCloseButtonClick = () => {};

  endOfGameModalContent.setOnModalClose = (closeModal) => {
    endOfGameModalContent.onCloseButtonClick = closeModal;
  };

  const gameOver = document.createElement('p');
  gameOver.classList.add('gameOver'); // TODO change to BEM ('endOfGameModalContent__gameOver')
  gameOver.textContent = 'Game Over!';

  const getPoints = (player) => {
    return player.filter((answer) => answer.isCorrect).length;
  };

  const getPointsInPercentage = (player) => {
    return (getPoints(player) / player.length) * 100;
  };

  const getPlaceFromHistoryRank = (points) => {
    const scores = getScores(gameType);
    const scoresBetterThanCurrent = scores.filter((entry) => entry.score > points).length;
    console.log(scores);
    console.log(scoresBetterThanCurrent);
    return scoresBetterThanCurrent;
  };

  const showResults = () => {
    const message = `The purity of your results is ${getPointsInPercentage(answersListPlayer)}%.
    You've taken the # ${
      getPlaceFromHistoryRank(getPoints(answersListPlayer)) + 1
    } spot in the rankings. A competing dealer scored ${getPointsInPercentage(
      answersListComputer,
    )}% during this time. What is your name?`;
    return message;
  };

  const gameStats = document.createElement('p');
  gameStats.classList.add('gameStats');
  gameStats.textContent = showResults();

  const form = document.createElement('div');
  form.classList.add('form');

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Type your name here...';
  input.classList.add('nameInput');

  const acceptEndButton = document.createElement('button');
  acceptEndButton.classList.add('endOfGameButton', 'acceptEndButton');
  acceptEndButton.innerText = 'Accept';

  const acceptShowResultsButton = document.createElement('button');
  acceptShowResultsButton.classList.add('endOfGameButton', 'acceptShowResultsButton');
  acceptShowResultsButton.innerText = 'Accept and show results';

  const handleSaveScore = (name, score) => {
    if (name.length === 0) {
      alert("You can't go undercover all the time. Give us your name!");
      return false;
    }
    console.log('Score saved:', gameType, name, score);
    saveScore(gameType, name, score);
    return true;
  };

  const handleButtonAcceptAndEnd = (name, score) => {
    if (handleSaveScore(name, score)) {
      endOfGameModalContent.onCloseButtonClick();
    }
  };

  const handleButtonAcceptAndShowResults = (name, score) => {
    handleSaveScore(name, score);
    // TODO call "lista odpowiedzi"
  };

  acceptEndButton.addEventListener('click', () =>
    handleButtonAcceptAndEnd(input.value, getPoints(answersListPlayer)),
  );
  acceptShowResultsButton.addEventListener('click', () =>
    handleButtonAcceptAndShowResults(input.value, getPoints(answersListComputer)),
  );

  form.append(input, acceptEndButton, acceptShowResultsButton);
  endOfGameModalContent.append(gameOver, gameStats, form);

  return endOfGameModalContent;
};

export default EndOfGameModalContent;
