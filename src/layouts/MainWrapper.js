import LogoSection from './LogoSection';
import ChooseGameSection from './ChooseGameSection';
import MainSection from './MainSection';

const Wrapper = () => {
  const wrapper = document.createElement('section');
  const upperSection = document.createElement('section');
  const lowerSection = document.createElement('section');

  wrapper.classList.add('mainWrapper');
  upperSection.classList.add('mainWrapper__upperSection');
  lowerSection.classList.add('mainWrapper__lowerSection');

  wrapper.appendChild(upperSection);
  wrapper.appendChild(lowerSection);

  const mainSection = MainSection();
  const handleChangeMode = (mode) => {
    mainSection.changeMode(mode);
  };

  upperSection.appendChild(LogoSection());
  upperSection.appendChild(ChooseGameSection(handleChangeMode));

  lowerSection.appendChild(mainSection);

  return wrapper;
};

export default Wrapper;
