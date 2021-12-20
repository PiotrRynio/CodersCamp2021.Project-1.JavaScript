import NewGameButton from '../components/NewGameButton';
import MainImage from '../components/MainImage';
import Modal from '../components/Modal';
import EndOfGame from '../components/EndOfGame';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');

  const startGame = () => {
    console.log('The game has started');
  };
  mainSection.append(NewGameButton(startGame));
  mainSection.appendChild(MainImage());

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

  const endOfGame = EndOfGame('Character', answersListPlayer, answersListComputer);
  const modal = Modal(endOfGame);

  mainSection.append(modal);

  return mainSection;
};

export default MainSection;
