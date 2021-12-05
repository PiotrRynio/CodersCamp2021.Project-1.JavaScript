import LogoSection from './LogoSection';
import ChooseGameSection from './ChooseGameSection';
import MainSection from './MainSection';

const Wrapper = () => {
  const wrapper = document.createElement('div');
  const upperSection = document.createElement('div');
  const lowerSection = document.createElement('div');

  wrapper.classList.add('mainWrapper');
  upperSection.classList.add('mainWrapper__upperSection');
  lowerSection.classList.add('mainWrapper__lowerSection');

  wrapper.appendChild(upperSection);
  wrapper.appendChild(lowerSection);


  upperSection.appendChild(LogoSection());
  upperSection.appendChild(ChooseGameSection());
  lowerSection.appendChild(MainSection());
  return wrapper;
};



export default Wrapper;
