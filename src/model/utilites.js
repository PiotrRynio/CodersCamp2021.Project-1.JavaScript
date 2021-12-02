export const randomNumbers = (min, max, howMuch) => {
  const numbers = [];
  while(numbers.length != howMuch){
    const number = Math.floor(Math.random() * (max + 1)) + min;
    if(!numbers.includes(number))
      numbers.push(number);
  }
  return numbers;
}