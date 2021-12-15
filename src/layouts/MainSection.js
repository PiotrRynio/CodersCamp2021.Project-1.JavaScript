import AnswerSection from '../components/AnswersSection/AnswersSection';
import NewGameButton from '../components/NewGameButton';
import MainImage from '../components/MainImage';
import MenuButton from '../components/HallOfFameButton';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');

  const answers = ['Walter White', 'Jesse Pinkman', 'Hank Shrader', 'Saul Goodman'];
  const handler = (isCorrect, answer) => {
    console.log(answer, isCorrect);
  };

  mainSection.append(AnswerSection({ answers, correctAnswer: 'Walter White' }, handler));
  const startGame = () => {
    console.log('The game has started');
  };
  mainSection.append(NewGameButton(startGame));
  mainSection.append(MenuButton());
  mainSection.appendChild(MainImage());

  return mainSection;
};

export default MainSection;
