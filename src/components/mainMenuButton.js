const MainMenuButton = (className,innerText,onClick) => {
    const button = document.createElement('button');
    button.classList.add(className)
    button.innerText = innerText;

    button.addEventListener('click', ()=>onClick(innerText))
    return button;
  };

  export default MainMenuButton;
  