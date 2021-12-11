const MenuButton = (innerText) => {

    //const text = "Hall of Fame"

    const button = document.createElement('button');
    button.classList.add('menuButton');

    const firstLetter = document.createElement('span');
    firstLetter.classList.add('menuButton__text');
    firstLetter.innerText = innerText;
    
    button.appendChild(firstLetter);

    //button.addEventListener("click", onButtonClick);

    return button;
}

export default MenuButton;