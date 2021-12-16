const RulesSection = (rulesObject) => {
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

  category.textContent = rulesObject.category;
  question.textContent = rulesObject.question;
  rules.textContent = allRules(rulesObject.rules);

  rulesSection.append(category, question, rules);

  return rulesSection;
};

export default RulesSection;
