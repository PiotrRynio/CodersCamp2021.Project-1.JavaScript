import ChooseGameSection from './ChooseGameSection';
import MainSection from './MainSection';
import LogoSection from './LogoSection';

const Wrapper = () => {
  const wrapper = document.createElement('div');
  const upperSection = document.createElement('div');
  const lowerSection = document.createElement('div');

  wrapper.classList.add('mainWrapper');
  upperSection.classList.add('upperSection');
  lowerSection.classList.add('lowerSection');

  wrapper.appendChild(upperSection);
  wrapper.appendChild(lowerSection);

  upperSection.appendChild(LogoSection());
  upperSection.appendChild(ChooseGameSection());
  lowerSection.appendChild(MainSection());
  return wrapper;
};
export default Wrapper;
