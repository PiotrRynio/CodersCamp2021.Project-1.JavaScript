import './scss/style.scss';
import Wrapper from './layouts/MainWrapper';
import Modal from './components/Modal';
import EndOfGame from './components/EndOfGame';

function main() {
  document.querySelector('#app').appendChild(Wrapper());
  document.querySelector('#app').appendChild(Modal());
}

main();
