import { CHEMICAL_ELEMENTS } from '../model/chemicalElementsSymbols';

const Timer = () => {
  const timerElement = document.createElement('div');
  timerElement.classList.add('timer');

  const numberSection = document.createElement('div');
  numberSection.textContent = '60';
  numberSection.classList.add('timer__number');

  timerElement.appendChild(numberSection);

  const textSection = document.createElement('div');
  textSection.textContent = 'Nd';
  textSection.classList.add('timer__text');

  timerElement.appendChild(textSection);

  timerElement.updateTime = (secondsLeftInGame) => {
    numberSection.textContent = secondsLeftInGame;
    textSection.textContent = CHEMICAL_ELEMENTS[secondsLeftInGame - 1];
  };

  return timerElement;
};

export default Timer;
