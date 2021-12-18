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

  const func = (category) => {
    mainSection.setNewCategory(category);
  };

  upperSection.appendChild(LogoSection());
  upperSection.appendChild(ChooseGameSection(func));
  lowerSection.appendChild(MainSection());
  return wrapper;
};

export default Wrapper;
