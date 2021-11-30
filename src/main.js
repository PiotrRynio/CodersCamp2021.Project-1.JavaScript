import Wrapper from './layouts/Wrapper';
import './scss/style.scss';
import Button from './components/gigaButton';

function main() {
  document.querySelector('#app').appendChild(Wrapper());
  document.querySelector('#app').appendChild(Button());
}

main();
