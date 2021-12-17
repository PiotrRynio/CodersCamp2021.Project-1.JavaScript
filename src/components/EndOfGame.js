import { saveScore, getScores } from '../model/saveScore';

const EndOfGameModalContent = (answersListPlayer, answersListComputer) => {
  const endOfGameModalContent = document.createElement('b');

  const playerPointsPercentage =
    (answersListPlayer.filter((answer) => answer.isCorrect).length / answersListPlayer.length) *
    100;

  const computerPointsPercentage =
    (answersListComputer.filter((answer) => answer.isCorrect).length / answersListComputer.length) *
    100;

  console.log(saveScore('Character', 'test_name', 10));
  console.log(getScores('Character'));

  endOfGameModalContent.showResults = () => {
    const message = `Czystość Twoich wyników wynosi ${playerPointsPercentage}%. 
    Zająłeś XX miejsce w rankingu. 
    Konkurencja uzyskała ${computerPointsPercentage}%. 
    Jak się nazywasz?`;
    return message;
  };
  console.log(endOfGameModalContent.showResults());
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
  isCorrect: false,
};

const answer4 = {
  answer: 'Elvis',
  isCorrect: false,
};

const answersListPlayer = [answer1, answer2];
const answersListComputer = [answer3, answer4];

const modalContent = EndOfGameModalContent(answersListPlayer, answersListComputer);

export default EndOfGameModalContent;
