import NewGameButton from '../components/NewGameButton';
import RulesSection from '../components/RulesSection/RulesSection';

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

  const rulesRankChange = (e) => {
    console.log(e);
    if (e.target.textContent === 'Rules')
      e.target.innerHTML =
        '<span class="newGameButton__firstLetter">H</span><span class="newGameButton__restOfText">all Of Fame</span>';
    else if (e.target.textContent === 'Hall Of Fame')
      e.target.innerHTML =
        '<span class="newGameButton__firstLetter">R</span><span class="newGameButton__restOfText">ules</span>';
  };

  const rulesRankButton = NewGameButton(rulesRankChange);
  rulesRankButton.innerHTML =
    '<span class="newGameButton__firstLetter">H</span><span class="newGameButton__restOfText">all Of Fame</span>';

  menuSection.append(NewGameButton(startGame), rulesRankButton);
  //TODO: Add Rules/HallOfFame button

  const r = {
    Characters: {
      category: 'Characters',
      question: 'Who is this character?',
      rules:
        'You have one minute to answer fifteen question. During the game on each question you need to select who from Breaking Bad is showed on the photo from available options.',
    },
  };

  contentSection.append(RulesSection(r.Characters));

  mainSection.append(menuSection);
  mainSection.append(contentSection);

  return mainSection;
};

export default MainSection;
