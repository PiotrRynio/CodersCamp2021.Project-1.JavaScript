const ManuButton = (firstLetterButtonInnerText, restOfTextButtonInnerText) => {

    const button = document.createElement('button');
    button.classList.add('menuButton');

    const firstLetter = document.createElement('span');
    firstLetter.classList.add('menuButton__greenBlock');
    firstLetter.innerText = firstLetterButtonInnerText;

    const  restOfText = document.createElement('span');
    restOfText.classList.add('hallOfFameButton')
    restOfText.innerText = restOfTextButtonInnerText;
    
    button.appendChild(firstLetter);
    button.appendChild(restOfText);

    return button;
}

export default ManuButton;