import { Wrapper } from './layouts/Wrapper';
import './scss/style.scss';
import { MyButton } from './components/MyButton.js';

function main() {
  document.querySelector('#app').appendChild(Wrapper());
  document.querySelector('#app').appendChild(MyButton());
}

main();
