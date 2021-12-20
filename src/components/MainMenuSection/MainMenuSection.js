import MenuButton from '../MenuButton';
import RankSection from '../RankSection/RankSection';
import RulesSection from '../RulesSection/RulesSection';
import { GAME_MODE } from '../../model/constants';

const MainMenuSection = (onStartGame) => {
  const mainMenuSection = document.createElement('section');
  mainMenuSection.classList.add('mainMenuSection');

  const menuButtonsSection = document.createElement('section');
  menuButtonsSection.classList.add('menuButtonsSection');
  const contentSection = document.createElement('div');
  contentSection.classList.add('contentSection');

  const rankSection = RankSection(GAME_MODE.CHARACTERS);
  const rulesSection = RulesSection(GAME_MODE.CHARACTERS);

  const showRank = () => {
    contentSection.removeChild(rulesSection);
    contentSection.appendChild(rankSection);
    menuButtonsSection.removeChild(rankButton);
    menuButtonsSection.appendChild(rulesButton);
  };

  const showRules = () => {
    contentSection.removeChild(rankSection);
    contentSection.appendChild(rulesSection);
    menuButtonsSection.removeChild(rulesButton);
    menuButtonsSection.appendChild(rankButton);
  };

  const rankButton = MenuButton('Ranking', showRank);
  const rulesButton = MenuButton('Rules', showRules);
  const newGameButton = MenuButton('New Game', onStartGame);

  mainMenuSection.changeMode = (newGameMode) => {
    rulesSection.changeRules(newGameMode);
    rankSection.changeRanks(newGameMode);
  };

  menuButtonsSection.append(newGameButton, rankButton);
  contentSection.append(rulesSection);

  mainMenuSection.append(menuButtonsSection);
  mainMenuSection.append(contentSection);

  return mainMenuSection;
};

export default MainMenuSection;
