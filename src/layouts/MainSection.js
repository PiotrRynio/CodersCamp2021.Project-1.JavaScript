import RankSection from '../components/RankSection/RankSection';
import RulesSection from '../components/RulesSection/RulesSection';
import rules from '../model/rules';
import MenuButton from '../components/MenuButton';

const MainSection = () => {
  const mainSection = document.createElement('section');
  mainSection.classList.add('mainSection');

  const menuSection = document.createElement('section');
  menuSection.classList.add('menuSection');
  const contentSection = document.createElement('div');
  contentSection.classList.add('contentSection');

  const startGame = () => {
    console.log('The game has started');
  };

  const showRank = () => {
    console.log('Rank');
  };

  const showRules = () => {
    console.log('rules');
  };

  const rankButton = MenuButton('Rank', showRank);
  const rulesButton = MenuButton('Rules', showRules);
  const newGameButton = MenuButton('New Game', startGame);

  menuSection.append(newGameButton, rankButton);
  //TODO: Add Rules/HallOfFame button

  //contentSection.append(RulesSection(rules.Characters));
  contentSection.append(RankSection());

  mainSection.append(menuSection);
  mainSection.append(contentSection);

  return mainSection;
};

export default MainSection;
