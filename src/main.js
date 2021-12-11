import './scss/style.scss';
import Wrapper from './layouts/MainWrapper';
import Modal from './components/Modal';

function main() {
  document.querySelector('#app').appendChild(Wrapper());
  document.querySelector('#app').appendChild(Modal());
}

main();
