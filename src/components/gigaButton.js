const Button = () => {
  const button = document.createElement('button');
  button.classList.add('gigaButton');
  button.innerText = 'Im gigantic';

  /*
  const onClickButton = () => {
    button.innerText = 'GigaButton';
  };
  */

  return button;
};

export default Button;
