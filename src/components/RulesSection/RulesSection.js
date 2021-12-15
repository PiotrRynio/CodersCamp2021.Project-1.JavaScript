const RulesSection = (rulesObject) => {
  const rulesSection = document.createElement('section');
  rulesSection.classList.add('rulesSection');

  const category = document.createElement('h2');
  category.classList.add('rulesSection__category');
  const question = document.createElement('h2');
  question.classList.add('rulesSection__question');
  const rules = document.createElement('p');
  rules.classList.add('rulesSection__rules');

  category.textContent = rulesObject.category;
  question.textContent = rulesObject.question;
  rules.textContent = rulesObject.rules;

  rulesSection.append(category, question, rules);

  return rulesSection;
};

export default RulesSection;
