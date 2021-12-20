// import AnswerSection from '../components/AnswersSection/AnswersSection';
// import MainImage from '../components/MainImage';
// import MenuButton from '../components/MenuButton';
// import RankSection from '../components/RankSection/RankSection';
// import RulesSection from '../components/RulesSection/RulesSection';
import GameSection from '../components/GameSection/GameSection';

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

  mainSection.append(RankSection('Characters'));
  mainSection.append(RulesSection('Characters'));

  const testQuestion = {
    answers: ["Declan's men and his cook.", 'Los Pollos driver', 'No-Doze', 'Max Arciniega'],
    questionObject:
      'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
    correctAnswer: 'Los Pollos driver',
  };

  const gameSection = GameSection('Characters', menuButtonClicked);

  mainSection.append(gameSection);

  gameSection.changeQuestion(testQuestion);

  return mainSection;
};

export default MainSection;
