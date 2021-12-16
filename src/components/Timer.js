const Timer = () => {
  const timerElement = document.createElement('div');
  timerElement.textContent = '60';
  timerElement.classList.add('timer');

  let timerInterval;
  let timeLeft = 60;

  const updateTime = () => {
    timeLeft = timeLeft - 1;
    timeLeft > 0 ? (timerElement.innerText = timeLeft) : (timerElement.innerHTML = 0 && gameOver());
    console.log(timeLeft);
  };

  const gameOver = () => {
    clearInterval(timerInterval);
  };

  timerInterval = setInterval(updateTime, 1000);

  return timerElement;
};

export default Timer;
