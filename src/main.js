import './scss/style.scss';
import Wrapper from './layouts/MainWrapper';
//import './domScripts/startGameButton';

function main() {
  document.querySelector('#app').appendChild(Wrapper());
}

main();