import NewGameButton from '../components/NewGameButton';
import MainImage from '../components/MainImage';
import MenuButton from '../components/HallOfFameButton';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');

  const startGame = () => {
    console.log('The game has started');
  };
  mainSection.append(NewGameButton(startGame));
  mainSection.append(MenuButton());
  mainSection.appendChild(MainImage());

  return mainSection;
};

export default MainSection;
