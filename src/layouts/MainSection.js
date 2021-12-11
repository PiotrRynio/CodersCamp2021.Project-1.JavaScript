import MainButton from '../components/HallOfFameButton'

const MainSection = () => {
  const mainSection = document.createElement('div');
  mainSection.classList.add('mainSection');


  mainSection.appendChild(MainButton("Hall of fame"));


  return mainSection;
};
export default MainSection;
