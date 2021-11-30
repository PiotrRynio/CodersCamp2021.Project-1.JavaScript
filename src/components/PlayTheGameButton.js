export const PlayTheGameButton = () => {
    const button = document.createElement('button');
    button.classList.add('buttonPlayTheGame');
    button.innerText= "PLAY THE GAME"
   
    
const onButtonClick=()=>{
    button.innerText = "GAME STARTED"
};
button.addEventListener('click', onButtonClick)
return button;
  };
  