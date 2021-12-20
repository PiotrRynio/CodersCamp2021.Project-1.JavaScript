import Gameplay from '../model/Gameplay';
import Timer from '../components/Timer';
import GameSection from '../components/GameSection/GameSection';
import MenuButton from '../components/MenuButton';
import RankSection from '../components/RankSection/RankSection';
import RulesSection from '../components/RulesSection/RulesSection';
import { GAME_MODE } from '../model/constants';

const MainSection = () => {
  const mainSection = document.createElement('section');
  mainSection.classList.add('mainSection');

  const timer = Timer();
  mainSection.appendChild(timer);

  const handleUserAnswer = (isCorrect) => {
    mainSection.game.onAnswerCheck(isCorrect);
  };

  const handleEndOfGame = () => {
    mainSection.appendChild(newGameButton);
  };

  const handleShowQuestion = (currentQuestionObject) => {
    mainSection.gameSection.changeQuestion(currentQuestionObject);
  };

  const handleUpdateTime = (secondsToLeft) => {
    timer.updateTime(secondsToLeft);
  };

  mainSection.game = Gameplay(handleEndOfGame, handleShowQuestion, handleUpdateTime);

  const menuSection = document.createElement('section');
  menuSection.classList.add('menuSection');
  const contentSection = document.createElement('div');
  contentSection.classList.add('contentSection');

  const rankSection = RankSection(GAME_MODE.CHARACTERS);
  const rulesSection = RulesSection(GAME_MODE.CHARACTERS);

  const startGame = () => {
    mainSection.removeChild(menuSection);
    mainSection.removeChild(contentSection);
    mainSection.gameSection = GameSection(mainSection.game.gameMode, handleUserAnswer);
    mainSection.game.startGame();
    mainSection.append(mainSection.gameSection);
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
    mainSection.game.gameMode = newGameMode;
  };

  menuSection.append(newGameButton, rankButton);
  contentSection.append(rulesSection);

  mainSection.append(menuSection);
  mainSection.append(contentSection);

  return mainSection;
};

export default MainSection;
