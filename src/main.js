import './scss/style.scss';
import questionGeneratator from './model/questionGeneratator';

function main() {
  console.log(questionGeneratator("People"));
  document.querySelector('#app');
}

main();
