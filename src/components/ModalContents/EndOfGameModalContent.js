import { saveScore, getScores } from '../../model/saveScore';

const EndOfGameModalContent = (gameType, answersListPlayer, answersListComputer) => {
  const endOfGameModalContent = document.createElement('div');
  endOfGameModalContent.classList.add('endOfGameModalContent');

  endOfGameModalContent.onCloseButtonClick = () => {};

  endOfGameModalContent.setOnModalClose = (closeModal) => {
    endOfGameModalContent.onCloseButtonClick = closeModal;
  };

  const gameOver = document.createElement('p');
  gameOver.classList.add('gameOver');
  gameOver.textContent = 'Game Over!';

  const getPoints = (player) => {
    return player.filter((answer) => answer.isCorrect).length;
  };

  const getPointsInPercentage = (player) => {
    return Math.floor((getPoints(player) / player.length) * 100);
  };

  const getPlaceFromHistoryRank = (points) => {
    const scores = getScores(gameType);
    const scoresBetterThanCurrent = scores.filter((entry) => entry.score > points).length;
    return scoresBetterThanCurrent;
  };

  const showResults = () => {
    const message = `Czystość Twoich wyników wynosi ${getPointsInPercentage(answersListPlayer)}%.
    Zająłeś ${getPlaceFromHistoryRank(getPoints(answersListPlayer)) + 1} miejsce w rankingu.
    Konkurencjny dealer uzyskał w tym czasie ${getPointsInPercentage(answersListComputer)}%.
    Jak się nazywasz?`;
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
      alert('Nie możesz ciągle działać pod przykrywką. Podaj swój pseudonim!');
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
