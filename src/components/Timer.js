import { chemicalElementsSymbols } from '../model/chemicalElementsSymbols';

const Timer = () => {
  const timerElement = document.createElement('div');
  timerElement.classList.add('timer');

  const numberSection = document.createElement('div');
  numberSection.classList.add('timer__number');

  timerElement.appendChild(numberSection);

  const textSection = document.createElement('div');
  textSection.classList.add('timer__text');

  timerElement.appendChild(textSection);

  timerElement.updateTime = (secondsLeftInGame) => {
    numberSection.textContent = secondsLeftInGame;
    textSection.textContent = chemicalElementsSymbols[secondsLeftInGame - 1];
  };

  return timerElement;
};

export default Timer;
