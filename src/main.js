import './scss/style.scss';
import questionGeneratator from './model/questionGeneratator';

function main() {
  const askedQuestions = [];
  console.log(questionGeneratator("quotes", askedQuestions));
  document.querySelector('#app');
}

main();
