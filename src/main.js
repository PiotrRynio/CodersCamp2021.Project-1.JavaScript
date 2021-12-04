import './scss/style.scss';
import saveScore from './model/saveScore';
import { getScoresForGameType } from './model/saveScore';

function main() {
  document.querySelector('#app');
}

main();
saveScore("pojedync", "maciek", 3);
saveScore("pojedyncz", "Michal", 8);
saveScore("pojedyncza", "Adi", 1);

console.log(getScoresForGameType());
