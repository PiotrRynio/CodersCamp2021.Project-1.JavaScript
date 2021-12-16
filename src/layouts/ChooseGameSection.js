import ModeMenu from '../components/ModeMenu';
import rules from '../model/rules';

const ChooseGameSection = () => {
  const chooseGame = document.createElement('section');
  chooseGame.classList.add('chooseGameSection');

  let choosedMode = 'Characters';
  function handleModeMenuButtonClick(newCategoryName) {
    choosedMode = newCategoryName;
    const rulesSection = document.querySelector('.rulesSection');
    rulesSection.changeRules(rules[choosedMode]);
  }

  chooseGame.appendChild(ModeMenu(handleModeMenuButtonClick));
  return chooseGame;
};

export default ChooseGameSection;
