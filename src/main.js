import { Wrapper } from './layouts/Wrapper';
import './scss/style.scss';
import {PlayTheGameButton} from './components/PlayTheGameButton'

function main() {
  document.querySelector('#app').appendChild(Wrapper());
  document.querySelector('#app').appendChild(PlayTheGameButton());

}

main();
