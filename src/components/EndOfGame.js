import { saveScore, getScores } from '../model/saveScore';

const EndOfGameModalContent = (gameType, answersListPlayer, answersListComputer) => {
  const endOfGameModalContent = document.createElement('div');

  const getPoints = (player) => {
    return player.filter((answer) => answer.isCorrect).length;
  };

  const getPointsInPercentage = (playerType) => {
    return (getPoints(playerType) / playerType.length) * 100;
  };

  const getPlaceFromHistoryRank = (points) => {
    const scores = getScores(gameType);
    console.log(scores);
    // To remove after pull
    if (scores === null) {
      return 0;
    }
    //
    const scoresBetterThanCurrent = scores.filter((entry) => entry.score > points).length;
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
  const text = document.createElement('p');
  text.textContent = showResults();

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Wpisz swoje imię...';
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
    handleSaveScore(gameType, name, score);
    // TODO call "close modal"
  };

  const handleButtonAcceptAndShowResults = (name, score) => {
    handleSaveScore(gameType, name, score);
    // TODO call "lista odpowiedzi"
  };

  acceptEndButton.addEventListener('click', () =>
    handleButtonAcceptAndEnd(input.value, getPoints(answersListPlayer)),
  );
  acceptShowResultsButton.addEventListener('click', () =>
    handleButtonAcceptAndShowResults(input.value, getPoints(answersListComputer)),
  );

  endOfGameModalContent.append(text, input, acceptEndButton, acceptShowResultsButton);

  return endOfGameModalContent;
};

export default EndOfGameModalContent;
