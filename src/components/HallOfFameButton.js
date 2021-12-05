const HallOfFameButton = () => {

    const button = document.createElement('button');
    button.classList.add('displayButton');
    
    button.appendChild(firstLetter());
    button.appendChild(restOfTextButton());

    return button;
}

export default HallOfFameButton;

const firstLetter = () =>{

    const firstLetter = document.createElement('span');
    firstLetter.classList.add('hallOfFameButton__greenBlock');
    firstLetter.innerText = 'H';

    return firstLetter;
}

const restOfTextButton = () => {
    const  restOfText = document.createElement('span');
    restOfText.innerText = "all of fame";
    restOfText.classList.add('hallOfFameButton')
    
    return restOfText;
}