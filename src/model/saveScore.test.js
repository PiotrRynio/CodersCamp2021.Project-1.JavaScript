import { saveScore, getScores } from './saveScore';

describe('saveScore', () => {

    class LocalStorageMock {
        constructor() {
          this.store = {};
        }
      
        clear() {
          this.store = {};
        }
      
        getItem(key) {
          return this.store[key] || null;
        }
      
        setItem(key, value) {
          this.store[key] = String(value);
        }
      }
      
      global.localStorage = new LocalStorageMock;

    //   jest.spyOn(global.localStorage, 'setItem')
    //     jest.spyOn(global.localStorage, 'getItem')

    beforeEach(() => { 
        localStorage.clear();
    })

  it('saves score into local storage', () => {

    saveScore("tested", "Maciek", 10);
    const result = getScores("tested");
    const expectedValue = {"name": "Maciek", "score": 10}
    expect(result).toBe(expectedValue);

    });
});