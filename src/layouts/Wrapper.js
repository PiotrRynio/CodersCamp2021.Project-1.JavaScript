import {PlayTheGameButton} from '../components/PlayTheGameButton';

export const Wrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.id = 'wrapper';

  wrapper.appendChild(PlayTheGameButton());
  return wrapper;
};
