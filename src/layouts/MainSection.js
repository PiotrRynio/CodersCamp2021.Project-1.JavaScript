import MainImage from '../components/MainImage';

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');

  mainSection.appendChild(MainImage());

  return mainSection;
};
export default MainSection;
