import AnswerSection from '../components/AnswersSection/AnswersSection';
import NewGameButton from '../components/NewGameButton';
import MainImage from '../components/MainImage';

const MainSection = () => {
  const mainSection = document.createElement('section');
  mainSection.classList.add('mainSection');

  const menuSection = document.createElement('section');
  const contentSection = document.createElement('div');

  const startGame = () => {
    console.log('The game has started');
  };

  menuSection.append(NewGameButton(startGame));
  //TODO: Add Rules/HallOfFame button

  mainSection.append(menuSection);
  mainSection.append(contentSection);

  return mainSection;
};

export default MainSection;
