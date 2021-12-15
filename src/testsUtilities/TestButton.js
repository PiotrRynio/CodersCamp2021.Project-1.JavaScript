const TestButton = () => {
  const testButton = document.createElement('button');
  testButton.classList.add('testButton');
  testButton.textContent = 'test button';

  testButton.changeText = () => {
    testButton.textContent = 'test button changed';
  };

  const handleButtonClick = () => {
    testButton.textContent = 'test button clicked';
  };

  testButton.addEventListener('click', () => handleButtonClick());

  return testButton;
};

export default TestButton;
