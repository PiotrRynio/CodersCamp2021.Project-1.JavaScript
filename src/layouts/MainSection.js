import AnswerSection from '../components/AnswersSection/AnswersSection';
import MainImage from '../components/MainImage';
import MenuButton from '../components/MenuButton';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');

  const answers = ['Walter White', 'Jesse Pinkman', 'Hank Shrader', 'Saul Goodman'];
  const handler = (isCorrect, answer) => {
    console.log(answer, isCorrect);
  };

  mainSection.append(AnswerSection({ answers, correctAnswer: 'Walter White' }, handler));
  const menuButtonClicked = () => {
    console.log('Menu button clicked');
  };
  mainSection.append(MenuButton('New Game', menuButtonClicked));
  mainSection.append(MenuButton('Hall of Fame', menuButtonClicked));
  mainSection.appendChild(MainImage());
  mainSection.appendChild(Timer());

  return mainSection;
};

export default MainSection;
