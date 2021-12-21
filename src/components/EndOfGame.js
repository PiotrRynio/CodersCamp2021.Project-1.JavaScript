import { saveScore, getScores } from '../model/saveScore';

const EndOfGameModalContent = (gameType, answersListPlayer, answersListComputer) => {
  const endOfGameModalContent = document.createElement('div');
  endOfGameModalContent.classList.add('endOfGameModalContent');

  const gameOver = document.createElement('p');
  gameOver.classList.add('gameOver');
  gameOver.textContent = 'Game Over!';

  const getPoints = (player) => {
    return player.filter((answer) => answer.isCorrect).length;
  };

  const getPointsInPercentage = (playerType) => {
    return (getPoints(playerType) / playerType.length) * 100;
  };

  const getPlaceFromHistoryRank = (points) => {
    const scores = getScores(gameType);
    const scoresBetterThanCurrent = scores.filter((entry) => entry.score > points).length;
    console.log(scores);
    console.log(scoresBetterThanCurrent);
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
    return saveScore(gameType, name, score);
  };

  const handleButtonAcceptAndEnd = (name, score) => {
    handleSaveScore(name, score);
    // TODO call "close modal"
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

  endOfGameModalContent.append(
    gameOver,
    gameStats,
    input,
    acceptEndButton,
    acceptShowResultsButton,
  );

  return endOfGameModalContent;
};

export default EndOfGameModalContent;
