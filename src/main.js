import './scss/style.scss';
import Wrapper from './layouts/MainWrapper';
import PersonImage from './components/PersonImage';


function main() {
  document.querySelector('#app').appendChild(Wrapper());
}

main();
