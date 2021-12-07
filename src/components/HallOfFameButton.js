const MenuButton = (firstLetterButtonInnerText, restOfTextButtonInnerText) => {

    const button = document.createElement('button');
    button.classList.add('menuButton');

    const firstLetter = document.createElement('span');
    firstLetter.classList.add('menuButton__text');
    firstLetter.innerText = restOfTextButtonInnerText;
    
    button.appendChild(firstLetter);

    return button;
}

export default MenuButton;