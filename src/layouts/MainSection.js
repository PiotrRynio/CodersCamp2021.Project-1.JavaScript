import MenuButton from '../components/MenuButton';
import RankSection from '../components/RankSection/RankSection';
import RulesSection from '../components/RulesSection/RulesSection';
import { GAME_MODE } from '../model/constants';

const MainSection = () => {
  const mainSection = document.createElement('section');
  mainSection.classList.add('mainSection');

  const menuSection = document.createElement('section');
  menuSection.classList.add('menuSection');
  const contentSection = document.createElement('div');
  contentSection.classList.add('contentSection');

  const rankSection = RankSection(GAME_MODE.CHARACTERS);
  const rulesSection = RulesSection(GAME_MODE.CHARACTERS);

  const startGame = () => {
    mainSection.removeChild(menuSection);
    mainSection.removeChild(contentSection);
  };

  const showRank = () => {
    contentSection.removeChild(rulesSection);
    contentSection.appendChild(rankSection);
    menuSection.removeChild(rankButton);
    menuSection.appendChild(rulesButton);
  };

  const showRules = () => {
    contentSection.removeChild(rankSection);
    contentSection.appendChild(rulesSection);
    menuSection.removeChild(rulesButton);
    menuSection.appendChild(rankButton);
  };

  const rankButton = MenuButton('Ranking', showRank);
  const rulesButton = MenuButton('Rules', showRules);
  const newGameButton = MenuButton('New Game', startGame);

  mainSection.changeMode = (newGameMode) => {
    rulesSection.changeRules(newGameMode);
    rankSection.changeRanks(newGameMode);
  };

  menuSection.append(newGameButton, rankButton);
  contentSection.append(rulesSection);

  mainSection.append(menuSection);
  mainSection.append(contentSection);

  return mainSection;
};

export default MainSection;
