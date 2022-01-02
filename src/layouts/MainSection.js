import Gameplay from '../model/Gameplay';
import GameSection from '../components/GameSection/GameSection';
import MainMenuButton from '../components/MainMenuButton';
import RankSection from '../components/RankSection/RankSection';
import RulesSection from '../components/RulesSection/RulesSection';
import { GAME_MODE } from '../model/constants';
import Modal from '../components/Modal/Modal';
import EndOfGameModalContent from '../components/ModalContents/EndOfGameModalContent';

const MainSection = () => {
  const mainSection = document.createElement('section');
  mainSection.classList.add('mainSection');

  const menuSection = document.createElement('section');
  menuSection.classList.add('mainSection__mainMenuSection');

  const contentSection = document.createElement('div');
  contentSection.classList.add('contentSection');
  const rankSection = RankSection(GAME_MODE.CHARACTERS);
  const rulesSection = RulesSection(GAME_MODE.CHARACTERS);

  let gameMode = 'Characters';
  let gameSection;

  const startGame = () => {
    mainSection.removeChild(menuSection);
    mainSection.removeChild(contentSection);
    mainSection.game = Gameplay(handleEndOfGame, handleShowQuestion, handleUpdateTime);
    mainSection.game.gameMode = gameMode;
    gameSection = GameSection(mainSection.game.gameMode, handleUserAnswer);
    mainSection.append(gameSection);
    mainSection.game.startGame();
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
  const rankButton = MainMenuButton('Ranking', showRank);
  const rulesButton = MainMenuButton('Rules', showRules);
  const newGameButton = MainMenuButton('New Game', startGame);
  menuSection.append(newGameButton, rankButton);
  contentSection.append(rulesSection);
  mainSection.append(menuSection);
  mainSection.append(contentSection);

  mainSection.changeMode = (newGameMode) => {
    rulesSection.changeRules(newGameMode);
    rankSection.changeRanks(newGameMode);
    gameMode = newGameMode;
  };

  const handleUserAnswer = (isCorrect, answer) => {
    mainSection.game.onHumanAnswer({ isCorrect, answer });
  };

  const handleEndOfGame = () => {
    mainSection.removeChild(gameSection);
    mainSection.appendChild(menuSection);
    mainSection.appendChild(contentSection);

    const modalContent = EndOfGameModalContent(
      mainSection.game.gameMode,
      mainSection.game.humanPlayer.answers,
      mainSection.game.computerPlayer.answers,
    );
    const modal = Modal(modalContent, mainSection);
    mainSection.appendChild(modal);
  };

  const handleShowQuestion = (currentQuestionObject) => {
    if (!mainSection.game.interval) {
      mainSection.game.startTiming();
    }
    gameSection.changeQuestion(currentQuestionObject);
  };

  const handleUpdateTime = (secondsToLeft) => {
    gameSection.timer.updateTime(secondsToLeft);
  };
  menuSection.append(newGameButton, rankButton);
  contentSection.append(rulesSection);

  mainSection.append(menuSection);
  mainSection.append(contentSection);

  return mainSection;
};
export default MainSection;
