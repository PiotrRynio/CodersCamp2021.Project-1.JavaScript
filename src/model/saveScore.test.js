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

  global.localStorage = new LocalStorageMock();

  beforeEach(() => {
    localStorage.clear();
  });

  it('saves single score into local storage', () => {
    saveScore('tested', 'Maciek', 10);
    const result = getScores('tested');
    const expectedValue = [{ name: 'Maciek', score: 10 }];
    expect(result).toStrictEqual(expectedValue);
  });

  it('saves multiple scores into local storage', () => {
    saveScore('tested', 'Maciek', 10);
    saveScore('tested', 'Adam', 0);
    saveScore('tested', 'Iza', 66);
    const result = getScores('tested');
    const expectedValue = [
      { name: 'Maciek', score: 10 },
      { name: 'Adam', score: 0 },
      { name: 'Iza', score: 66 },
    ];
    expect(result).toStrictEqual(expectedValue);
  });

  it('saves multiple scores with different keys into local storage', () => {
    saveScore('A', 'Maciek', 10);
    saveScore('B', 'Adam', 0);
    const resultA = getScores('A');
    const resultB = getScores('B');
    const expectedA = [{ name: 'Maciek', score: 10 }];
    const expectedB = [{ name: 'Adam', score: 0 }];
    expect(resultA).toStrictEqual(expectedA);
    expect(resultB).toStrictEqual(expectedB);
  });
});
