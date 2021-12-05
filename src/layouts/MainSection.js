import TestButton from '../components/TestButton';

const MainSection = () => {
  const mainSection = document.createElement('section');
  mainSection.classList.add('mainSection');

  mainSection.appendChild(TestButton());

  return mainSection;
};
export default MainSection;
