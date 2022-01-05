import { saveScore, getScores } from '../../model/saveScore';
import ResultModalContent from './ResultModalContent';
import { QUESTIONS_NUMBER } from '../../model/constants';

const EndOfGameModalContent = (gameType, answersListPlayer, answersListComputer) => {
  const endOfGameModalContent = document.createElement('div');
  endOfGameModalContent.classList.add('endOfGameModalContent');

  endOfGameModalContent.onCloseButtonClick = () => {};
  endOfGameModalContent.onShowResultButtonClick = () => {};

  endOfGameModalContent.setOnModalClose = (closeModal) => {
    endOfGameModalContent.onCloseButtonClick = closeModal;
  };

  endOfGameModalContent.setOnChangeContent = (changeModalContent) => {
    endOfGameModalContent.onShowResultButtonClick = changeModalContent;
  };

  const gameOver = document.createElement('p');
  gameOver.classList.add('endOfGameModalContent__gameOver');
  gameOver.textContent = 'Game Over!';

  const getPoints = (player) => {
    return player.filter((answer) => answer.isCorrect).length;
  };

  const getPointsInPercentage = (player) => {
    const pointsEarned = getPoints(player);
    if (pointsEarned === 0) {
      return 0;
    }
    return Math.floor((pointsEarned / QUESTIONS_NUMBER) * 100);
  };

  const getPlaceFromHistoryRank = (points) => {
    const scores = getScores(gameType);
    const scoresBetterThanCurrent = scores.filter((entry) => entry.score > points).length;
    return scoresBetterThanCurrent;
  };

  const showResults = () => {
    const message = `The purity of your results is ${getPointsInPercentage(answersListPlayer)}%.
    You've taken the #${
      getPlaceFromHistoryRank(getPoints(answersListPlayer)) + 1
    } spot in the ranking. A competing dealer scored ${getPointsInPercentage(
      answersListComputer,
    )}%. What is your name?`;
    return message;
  };

  const gameStats = document.createElement('p');
  gameStats.classList.add('endOfGameModalContent__gameStats');
  gameStats.textContent = showResults();

  const form = document.createElement('div');
  form.classList.add('endOfGameModalContent__form');

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Type your name here...';
  input.classList.add('endOfGameModalContent__input');

  const acceptEndButton = document.createElement('button');
  acceptEndButton.classList.add(
    'endOfGameModalContent__button',
    'endOfGameModalContent__button--closeButton',
  );
  acceptEndButton.innerText = 'Accept';

  const acceptShowResultsButton = document.createElement('button');
  acceptShowResultsButton.classList.add(
    'endOfGameModalContent__button',
    'endOfGameModalContent__button--showResultsButton',
  );
  acceptShowResultsButton.innerText = 'Accept and show results';

  const handleSaveScore = (name, score) => {
    if (name.length === 0) {
      alert("You can't go undercover all the time. Tell us your name!");
      return false;
    }
    saveScore(gameType, name, score);
    return true;
  };

  const handleButtonAcceptAndEnd = (name, score) => {
    if (handleSaveScore(name, score)) {
      endOfGameModalContent.onCloseButtonClick();
    }
  };

  const handleButtonAcceptAndShowResults = (name, score) => {
    if (handleSaveScore(name, score)) {
      endOfGameModalContent.onShowResultButtonClick(
        ResultModalContent(answersListPlayer, answersListComputer),
      );
    }
  };

  acceptEndButton.addEventListener('click', () =>
    handleButtonAcceptAndEnd(input.value, getPoints(answersListPlayer)),
  );
  acceptShowResultsButton.addEventListener('click', () =>
    handleButtonAcceptAndShowResults(input.value, getPoints(answersListPlayer)),
  );

  form.append(input, acceptEndButton, acceptShowResultsButton);
  endOfGameModalContent.append(gameOver, gameStats, form);

  return endOfGameModalContent;
};

export default EndOfGameModalContent;
