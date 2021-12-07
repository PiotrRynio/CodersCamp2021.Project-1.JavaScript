import NewGameButton from '../components/NewGameButton';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');
  mainSection.append(NewGameButton());
  return mainSection;
};
export default MainSection;
