import { jsxEmptyExpression } from '@babel/types';
import {randomNumbers, randomValueFromArray} from './utilities'

describe('randomNumbers', ()=>{
  let intro = 'If we set lowest number as 1, highest number as 4 and length as 4 then we should';
  test(`${intro} get array with numbers 1, 2, 3, 4`, ()=> {
    const result = randomNumbers(1, 4, 4);
    expect(result).toContain(1, 2, 3, 4);
  });

  test(`${intro}n't get array with numbers 0, 5`, ()=> {
    const result = randomNumbers(1, 4, 4);
    expect(result).not.toContain(5);
  });

  test(`${intro} get array.length equal 4`, ()=> {
    const result = randomNumbers(1, 4, 4);
    expect(result.length).toBe(4);
  });

  test(`${intro} get different numbers 4`, ()=> {
    const result = randomNumbers(1, 4, 4);
    const set = new Set(result);
    expect(set.size).toBe(4);
  });
})

describe('randomValueFromArray', () => {
  test("If we give it array, thats return it's value.",() => {
    const testArray = [1, 2, 3, 4];
    const result = randomValueFromArray(testArray);
    expect(testArray).toContain(result);
  })


  test("If random function returns 0 then function should return first value", () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);

    const testArray = [1, 2, 3, 4];
    const result = randomValueFromArray(testArray);

    expect(result).toBe(testArray[0]);
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  test("If random function returns almost 1 then function should return last value", () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.999999);

    const testArray = [1, 2, 3, 4];
    const result = randomValueFromArray(testArray);

    expect(result).toBe(testArray[testArray.length-1]);
    jest.spyOn(global.Math, 'random').mockRestore();
  });
})