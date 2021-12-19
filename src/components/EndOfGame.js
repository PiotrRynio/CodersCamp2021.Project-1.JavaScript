import { saveScore, getScores } from '../model/saveScore';

const EndOfGameModalContent = (answersListPlayer, answersListComputer) => {
  const endOfGameModalContent = document.createElement('P');

  const playerType = {
    Player: answersListPlayer,
    Computer: answersListComputer,
  };

  const gameType = {
    Character: 'Character',
  };

  const getPoints = (playerType) => {
    return playerType.filter((answer) => answer.isCorrect).length;
  };

  const getPointsInPercentage = (playerType) => {
    return (getPoints(playerType) / playerType.length) * 100;
  };

  const getPlaceFromHistoryRank = (gameType, points) => {
    const scores = getScores(gameType);
    console.log(scores);
    if (scores === null) {
      return 0;
    }
    const scoresBetterThanCurrent = scores.filter((entry) => entry.score > points).length;
    console.log(scoresBetterThanCurrent);
    return scoresBetterThanCurrent;
  };

  endOfGameModalContent.showResults = () => {
    const message = `Czystość Twoich wyników wynosi ${getPointsInPercentage(playerType.Player)}%. 
    Zająłeś ${
      getPlaceFromHistoryRank(gameType.Character, getPoints(playerType.Player)) + 1
    } miejsce w rankingu. 
    Konkurencjny dealer uzyskał w tym czasie ${getPointsInPercentage(playerType.Computer)}%. 
    Jak się nazywasz?`;
    return message;
  };
  const textNode = document.createTextNode(endOfGameModalContent.showResults());

  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('nameInput');

  const acceptEndButton = document.createElement('button');
  acceptEndButton.classList.add('endOfGameButton', 'acceptEndButton');
  acceptEndButton.innerText = 'Accept';

  const acceptShowResultsButton = document.createElement('button');
  acceptShowResultsButton.classList.add('endOfGameButton', 'acceptShowResultsButton');
  acceptShowResultsButton.innerText = 'Accept and show results';

  const handleSaveScore = (gameType, name, score) => {
    if (name.length === 0) {
      alert('Nie możesz ciągle działać pod przykrywką. Podaj swój pseudonim!');
      return false;
    }
    console.log('Score saved:', gameType, name, score);
    return saveScore(gameType, name, score);
  };

  const handleButtonAcceptAndEnd = (gameType, name, score) => {
    handleSaveScore(gameType, name, score);
  };

  const handleButtonAcceptAndShowResults = (gameType, name, score) => {
    handleSaveScore(gameType, name, score);
  };

  acceptEndButton.addEventListener('click', () =>
    handleButtonAcceptAndEnd(gameType.Character, input.value, getPoints(playerType.Player)),
  );
  acceptShowResultsButton.addEventListener('click', () =>
    handleButtonAcceptAndShowResults(
      gameType.Character,
      input.value,
      getPoints(playerType.Computer),
    ),
  );

  //document.querySelector('.modalPopup').appendChild(input); // ModalPopup is not imported yet
  document.querySelector('#app').appendChild(textNode);
  document.querySelector('#app').appendChild(input);
  document.querySelector('#app').appendChild(acceptEndButton);
  document.querySelector('#app').appendChild(acceptShowResultsButton);
};

const answer1 = {
  answer: 'Walter',
  isCorrect: true,
};

const answer2 = {
  answer: 'John',
  isCorrect: false,
};

const answer3 = {
  answer: 'Elton',
  isCorrect: true,
};

const answer4 = {
  answer: 'Elvis',
  isCorrect: false,
};

const answer5 = {
  answer: 'Travis',
  isCorrect: false,
};

const answersListPlayer = [answer1, answer2, answer3, answer4, answer5];
const answersListComputer = [answer3, answer4];

EndOfGameModalContent(answersListPlayer, answersListComputer);

export default EndOfGameModalContent;
