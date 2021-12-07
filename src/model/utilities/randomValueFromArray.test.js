import randomValueFromArray from './randomValueFromArray';

describe('randomValueFromArray', () => {
  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  test("If we give it array, thats return it's value.", () => {
    const testArray = [1, 2, 3, 4];
    const result = randomValueFromArray(testArray);
    expect(testArray).toContain(result);
  });

  test('If random function returns 0 then function should return first value', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);

    const testArray = [1, 2, 3, 4];
    const result = randomValueFromArray(testArray);

    expect(result).toBe(testArray[0]);
  });

  test('If random function returns almost 1 then function should return last value', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.999999);

    const testArray = [1, 2, 3, 4];
    const result = randomValueFromArray(testArray);

    expect(result).toBe(testArray[testArray.length - 1]);
  });
});
