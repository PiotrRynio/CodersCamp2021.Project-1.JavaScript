import { MyButton } from '../components/MyButton'

export const Wrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.id = 'wrapper';

  wrapper.appendChild(MyButton());

  return wrapper;
};
