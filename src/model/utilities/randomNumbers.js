const randomNumbers = (lowestNumber, highestNumber, returnedArrayLength) => {
  const numbers = [];
  while(numbers.length != returnedArrayLength){
    const number = Math.floor(Math.random() * ((highestNumber - lowestNumber + 1)) + lowestNumber);
    if(!numbers.includes(number)){
      numbers.push(number);
    }
  }
  return numbers;
}

export default randomNumbers;
