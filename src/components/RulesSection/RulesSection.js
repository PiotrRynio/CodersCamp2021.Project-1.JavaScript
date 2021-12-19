import { RULES } from '../../model/constants';

const RulesSection = (categoryName) => {
  const rulesSection = document.createElement('section');
  rulesSection.classList.add('rulesSection');

  const category = document.createElement('h2');
  category.classList.add('rulesSection__category');
  const question = document.createElement('h2');
  question.classList.add('rulesSection__question');
  const rules = document.createElement('p');
  rules.classList.add('rulesSection__rules');

  const allRules = (whatToSelect) => {
    return `You have one minute to answer fifteen questions. During the game on each question you need to select ${whatToSelect} The correct answer will be shown to you after giving the answer. If you want to go to the next question then click again.`;
  };

  rulesSection.changeRules = (newCategoryName) => {
    category.textContent = `Rules: ${RULES[newCategoryName].category}`;
    question.textContent = RULES[newCategoryName].question;
    rules.textContent = allRules(RULES[newCategoryName].specialRule);
  };

  rulesSection.changeRules(categoryName);

  rulesSection.append(category, question, rules);

  return rulesSection;
};

export default RulesSection;
