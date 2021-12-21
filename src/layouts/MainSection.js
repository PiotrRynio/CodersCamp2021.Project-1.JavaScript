import MenuButton from '../components/MenuButton';
import RankSection from '../components/RankSection/RankSection';
import RulesSection from '../components/RulesSection/RulesSection';
import Modal from '../components/Modal';
import EndOfGame from '../components/EndOfGame';
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

  const endOfGame = EndOfGame('Character', answersListPlayer, answersListComputer);
  const modal = Modal(endOfGame);

  modal.showModal();

  mainSection.append(modal);

  return mainSection;
};

export default MainSection;
