import './scss/style.scss';
import { mainMenu } from './components/mainMenu';
import Wrapper from './components/MainWrapper';

function main() {
  document.querySelector('#app').appendChild(Wrapper());
  document.querySelector('#app').appendChild(mainMenu());
}

main();
