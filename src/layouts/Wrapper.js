import Button from '../components/gigaButton';

const Wrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.id = 'wrapper';

  wrapper.appendChild(Button());

  return wrapper;
};

export default Wrapper;
