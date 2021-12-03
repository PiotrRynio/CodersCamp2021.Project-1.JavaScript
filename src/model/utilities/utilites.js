export const randomNumbers = (lowestNumber, highestNumber, returnedArrayLength) => {
  const numbers = [];
  while(numbers.length != returnedArrayLength){
    const number = Math.floor(Math.random() * (highestNumber + 1)) + lowestNumber;
    if(!numbers.includes(number)){
      numbers.push(number);
    }
  }
  return numbers;
}

export const randomValueFromArray = (idArray) => {
  const correctIdIndex = Math.floor(Math.random() * idArray.length);
  return idArray[correctIdIndex];
}

