import './scss/style.scss';
import Wrapper from './layouts/MainWrapper';
import Modal from './components/Modal/Modal';
import MenuButton from './components/MenuButton';

function main() {
  document.querySelector('#app').appendChild(Wrapper());

  const parent = document.querySelector('#app');
  const KomponentJarka = MenuButton('Test', () => {});
  // parent.appendChild(btn);

  const modal = Modal(KomponentJarka, parent);
  parent.appendChild(modal);
  // document.querySelector('#app').appendChild(modal);
  // const handleCloseModalButton = () => {
  // document.querySelector('#app').removeChild(modal);
  // };
  // const btn = MenuButton('Test', handleCloseModalButton);
  //
  // modal.changeContent(btn);
}

main();
