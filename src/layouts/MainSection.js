import Gameplay from '../model/Gameplay';
import GameSection from '../components/GameSection/GameSection';
import MenuButton from '../components/MenuButton';
import RankSection from '../components/RankSection/RankSection';
import RulesSection from '../components/RulesSection/RulesSection';
import { GAME_MODE } from '../model/constants';
import Modal from '../components/Modal/Modal';
import EndOfGameModalContent from '../components/ModalContents/EndOfGameModalContent';

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
    mainSection.game = Gameplay(handleEndOfGame, handleShowQuestion, handleUpdateTime);
    mainSection.gameSection = GameSection(mainSection.game.gameMode, handleUserAnswer);
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
  const rankButton = MenuButton('Ranking', showRank);
  const rulesButton = MenuButton('Rules', showRules);
  const newGameButton = MenuButton('New Game', startGame);
  menuSection.append(newGameButton, rankButton);
  contentSection.append(rulesSection);
  mainSection.append(menuSection);
  mainSection.append(contentSection);

  mainSection.changeMode = (newGameMode) => {
    rulesSection.changeRules(newGameMode);
    rankSection.changeRanks(newGameMode);
    mainSection.game.gameMode = newGameMode;
  };

  const handleUserAnswer = (isCorrect, answer) => {
    mainSection.game.gamePlayer.answer(mainSection.game.onAnswerCheck, { isCorrect, answer });
  };

  const handleEndOfGame = () => {
    mainSection.removeChild(mainSection.gameSection);
    mainSection.appendChild(menuSection);
    mainSection.appendChild(contentSection);

    // -----------------------------------
    //TODO: REMOVE THIS!
    const answer1 = {
      answer: 'Walter',
      isCorrect: true,
    };

    const answer2 = {
      answer: 'John',
      isCorrect: false,
    };

    const answer3 = {
      answer: 'Elton',
      isCorrect: true,
    };

    const answer4 = {
      answer: 'Elvis',
      isCorrect: false,
    };

    const answer5 = {
      answer: 'Travis',
      isCorrect: false,
    };

    const answersListPlayer = [answer1, answer2, answer3, answer4, answer5];
    const answersListComputer = [answer3, answer4];

    //do tego wywalić
    // -----------------------------------

    const modalContent = EndOfGameModalContent(
      mainSection.game.gameMode,
      mainSection.game.playerAnswers,
      answersListComputer,
    );
    const modal = Modal(modalContent, mainSection);
    mainSection.appendChild(modal);
  };

  const handleShowQuestion = (currentQuestionObject) => {
    if (mainSection.getElementsByClassName('gameSection').length === 0) {
      mainSection.append(mainSection.gameSection);
      mainSection.game.startTiming();
    }
    mainSection.gameSection.changeQuestion(currentQuestionObject);
  };

  const handleUpdateTime = (secondsToLeft) => {
    mainSection.gameSection.timer.updateTime(secondsToLeft);
  };
  menuSection.append(newGameButton, rankButton);
  contentSection.append(rulesSection);

  mainSection.append(menuSection);
  mainSection.append(contentSection);

  return mainSection;
};
export default MainSection;
