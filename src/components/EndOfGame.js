import { saveScore, getScores } from '../model/saveScore';

const EndOfGameModalContent = (answersListPlayer, answersListComputer) => {
  const endOfGameModalContent = document.createElement('b');

  const playerType = {
    Player: answersListPlayer,
    Computer: answersListComputer,
  };

  const getPoints = (playerType) => {
    return playerType.filter((answer) => answer.isCorrect).length;
  };

  const getPointsInPercentage = (playerType) => {
    return (getPoints(playerType) / playerType.length) * 100;
  };

  endOfGameModalContent.showResults = () => {
    const message = `Czystość Twoich wyników wynosi ${getPointsInPercentage(playerType.Player)}%. 
    Zająłeś XX miejsce w rankingu. 
    Konkurencja uzyskała ${getPointsInPercentage(playerType.Computer)}%. 
    Jak się nazywasz?`;
    return message;
  };
  console.log(endOfGameModalContent.showResults());

  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('nameInput');

  const acceptEndButton = document.createElement('button');
  acceptEndButton.classList.add('endOfGameButton', 'acceptEndButton');
  acceptEndButton.innerText = 'Accept';

  const acceptShowResultsButton = document.createElement('button');
  acceptShowResultsButton.classList.add('endOfGameButton', 'acceptShowResultsButton');
  acceptShowResultsButton.innerText = 'Accept and show results';

  const handleSaveScore = (name, score) => {
    saveScore('Character', name, score); // TODO Handle other types of game
  };

  const handleButtonAcceptAndEnd = (name, score) => {
    acceptEndButton.innerText = `${name}, ${score}`;
    handleSaveScore(name, score);
  };

  const handleButtonAcceptAndShowResults = (name, score) => {
    acceptShowResultsButton.innerText = `${name}, ${score}`;
    handleSaveScore(name, score);
  };

  acceptEndButton.addEventListener('click', () =>
    handleButtonAcceptAndEnd(input.value, getPoints(playerType.Player)),
  );
  acceptShowResultsButton.addEventListener('click', () =>
    handleButtonAcceptAndShowResults(input.value, getPoints(playerType.Computer)),
  );

  //document.querySelector('.modalPopup').appendChild(input); // ModalPopup is not imported yet
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
  isCorrect: true,
};

const answersListPlayer = [answer1, answer2];
const answersListComputer = [answer3, answer4];

EndOfGameModalContent(answersListPlayer, answersListComputer);

export default EndOfGameModalContent;
