const randomValueFromArray = (idArray) => {
  const correctIdIndex = Math.floor(Math.random() * idArray.length);
  return idArray[correctIdIndex];
}

export default randomValueFromArray;
