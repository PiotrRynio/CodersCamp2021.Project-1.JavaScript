import { Wrapper } from './layouts/Wrapper';
import { PlayTheGameButton } from './components/PlayTheGameButton';
import './scss/style.scss';

function main() {
  document.querySelector('#app').appendChild(Wrapper());
  document.querySelector('#app').appendChild(PlayTheGameButton());
}

main();
