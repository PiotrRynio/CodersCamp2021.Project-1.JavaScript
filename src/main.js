import './scss/style.scss';
import { mainMenu } from './components/mainMenu';

function main() {
  document.querySelector('#app');
  document.querySelector('#app').appendChild(mainMenu());
}

main();
