import NewGameButton from '../components/NewGameButton';
import MainImage from '../components/MainImage';
import EndOfGame from '../components/EndOfGame';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');

  const startGame = () => {
    console.log('The game has started');
  };
  mainSection.append(NewGameButton(startGame));
  mainSection.appendChild(MainImage());

  return mainSection;
};

export default MainSection;
