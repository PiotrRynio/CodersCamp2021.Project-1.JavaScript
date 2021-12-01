import { Wrapper } from './layouts/Wrapper';
import './scss/style.scss';
import checkIfAnswerIsCorrect from './model/checkIfAnswerIsCorrect';

function main() {
  document.querySelector('#app').appendChild(Wrapper());
}

main();
