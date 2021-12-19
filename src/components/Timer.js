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

  const chemicalElements = [
    'H',
    'He',
    'Li',
    'Be',
    'B',
    'C',
    'N',
    'O',
    'F',
    'Ne',
    'Na',
    'Mg',
    'Al',
    'Si',
    'P',
    'S',
    'Cl',
    'Ar',
    'K',
    'Ca',
    'Sc',
    'Ti',
    'V',
    'Cr',
    'Mn',
    'Fe',
    'Co',
    'Ni',
    'Cu',
    'Zn',
    'Ga',
    'Ge',
    'As',
    'Se',
    'Br',
    'Kr',
    'Rb',
    'Sr',
    'Y',
    'Zr',
    'Nb',
    'Mo',
    'Tc',
    'Ru',
    'Rh',
    'Pd',
    'Ag',
    'Cd',
    'In',
    'Sn',
    'Sb',
    'Te',
    'I',
    'Xe',
    'Cs',
    'Ba',
    'La',
    'Ce',
    'Pr',
  ];

  timerElement.updateTime = (secondsLeftInGame) => {
    numberSection.textContent = secondsLeftInGame;
    textSection.textContent = chemicalElements[secondsLeftInGame - 1];
  };

  return timerElement;
};

export default Timer;
