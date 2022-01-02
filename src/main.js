import './scss/style.scss';
import Wrapper from './layouts/MainWrapper';
import Background from './layouts/Background';

function main() {
  document.querySelector('#app').appendChild(Wrapper());
  document.querySelector('#app').appendChild(Background());
}

main();
