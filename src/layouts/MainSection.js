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
      rules: 'who from Breaking Bad is shown on the photo.',
    },
    Quotes: {
      category: 'Quotes',
      question: 'Who said this quote?',
      rules: "who from Breaking Bad said quote's words.",
    },
    Deaths: {
      category: 'Deaths',
      question: 'Who died this way?',
      rules: 'who from Breaking Bad died in described way.',
    },
  };

  contentSection.append(RulesSection(r.Characters));

  mainSection.append(menuSection);
  mainSection.append(contentSection);

  return mainSection;
};

export default MainSection;
