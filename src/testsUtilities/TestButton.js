const TestButton = () => {
  const testButton = document.createElement('button');
  testButton.classList.add('testButton');
  testButton.innerText = 'test button';

  testButton.changeText = () => {
    testButton.innerText = 'test button changed';
  };

  const handleButtonClick = () => {
    testButton.innerText = 'test button clicked';
  };

  testButton.addEventListener('click', () => handleButtonClick());

  return testButton;
};

export default TestButton;
