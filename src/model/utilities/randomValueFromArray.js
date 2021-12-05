const randomValueFromArray = (valueArray) => {
  const randomArrayIndex = Math.floor(Math.random() * valueArray.length);
  return valueArray[randomArrayIndex];
}

export default randomValueFromArray;
