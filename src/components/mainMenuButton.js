const MainMenuButton = (innerText,onClick) => {
    const button = document.createElement('button');
    button.classList.add('mainMenu__button')
    button.innerText = innerText;

    button.addEventListener('click', ()=>onClick(innerText))
    return button;
  };

  export default MainMenuButton;
  