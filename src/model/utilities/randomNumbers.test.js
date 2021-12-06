import randomNumbers from './randomNumbers'

describe('randomNumbers', ()=>{
  describe('If we set lowest number as 1, highest number as 4 and length as 4',() => {
    const result = randomNumbers(1, 4, 4);

    test(`then we should get array with numbers 1, 2, 3, 4`, ()=> {
      expect(result).toContain(1, 2, 3, 4);
    });

    test(`then we shouldn't get array with numbers 0, 5`, ()=> {
      expect(result).not.toContain(5);
    });

    test(`then we should get array.length equal 4`, ()=> {
      expect(result.length).toBe(4);
    });

    test(`then we should get different numbers 4`, ()=> {
      const set = new Set(result);
      expect(set.size).toBe(4);
    });
  })
})
