import MainMenuSection from '../components/MainMenuSection/MainMenuSection';

const MainSection = () => {
  const mainSection = document.createElement('section');
  mainSection.classList.add('mainSection');

  const startGame = () => {
    mainSection.removeChild(mainMenuSection);
  };

  const mainMenuSection = MainMenuSection(startGame);

  mainSection.changeMode = (newGameMode) => {
    mainMenuSection.changeMode(newGameMode);
  };

  mainSection.append(mainMenuSection);

  return mainSection;
};

export default MainSection;
