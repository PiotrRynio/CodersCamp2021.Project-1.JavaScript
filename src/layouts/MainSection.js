import NewGameButton from '../components/NewGameButton';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');

  const startGame = () => {
    console.log('The game has started');
  };
  mainSection.append(NewGameButton(startGame));
  return mainSection;
};

export default MainSection;
