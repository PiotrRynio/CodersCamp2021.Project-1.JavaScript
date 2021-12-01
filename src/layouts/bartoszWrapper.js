import ChooseGameSection from './ChooseGameSection';
import GameSection from './GameSection';
import OptionsSection from './OptionsSection';
import MenuArea from './MenuArea';

const Wrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.id = 'wrapper';

  wrapper.appendChild(OptionsSection());
  wrapper.appendChild(MenuArea());
  wrapper.appendChild(ChooseGameSection());
  wrapper.appendChild(GameSection());
  return wrapper;
};
export default Wrapper;
