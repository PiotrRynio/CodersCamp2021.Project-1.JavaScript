import ModeMenu from '../components/ModeMenu';
import rules from '../model/rules';

const ChooseGameSection = (func) => {
  const chooseGame = document.createElement('section');
  chooseGame.classList.add('chooseGameSection');

  let choosedMode = 'Characters';
  function handleModeMenuButtonClick(newCategoryName) {
    choosedMode = newCategoryName;
    func(choosedMode);

    //const rulesSection = document.querySelector('.rulesSection');
    //rulesSection.changeRules(rules[choosedMode]);
  }

  chooseGame.appendChild(ModeMenu(handleModeMenuButtonClick));
  return chooseGame;
};

export default ChooseGameSection;
