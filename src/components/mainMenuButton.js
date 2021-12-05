const mainMenuButton = (className,innerText,callback) => {
    const button = document.createElement('button');
    button.classList.add(className)
    button.innerText = innerText;

    button.addEventListener('click', ()=>callback(innerText))
    return button;
  };

  export default mainMenuButton;
  