import './scss/style.scss';
import questionGeneratator from './model/questionGeneratator';

function main() {
  const askedQuestions = [];
  console.log(questionGeneratator("deaths", askedQuestions));
  document.querySelector('#app');
}

main();
