import './scss/style.scss';
import questionGeneratator from './model/questionGenerator';

function main() {
  const askedQuestions = [];
  console.log(questionGeneratator("characters", askedQuestions));
  document.querySelector('#app');
}

main();
