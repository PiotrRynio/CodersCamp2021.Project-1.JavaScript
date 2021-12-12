import isAnswerCorrect from './isAnswerCorrect';

describe('isAnswerIsCorrect', () => {
  it('properly compares two good asnwers', () => {
    expect(isAnswerCorrect('A', 'A')).toBe(true);
  });

  it('properly compares two wrong answers', () => {
    expect(isAnswerCorrect('A', 'B')).toBe(false);
  });

  it('check if both of types are strings', () => {
    expect(isAnswerCorrect({}, 'A')).toBe(false);
  });

  it('check if input is not equal null', () => {
    expect(isAnswerCorrect(null, 'A')).toBe(false);
  });

  it('check if input is not equal undefined', () => {
    expect(isAnswerCorrect(undefined, 'A')).toBe(false);
  });

  it('check if input is not empty', () => {
    expect(isAnswerCorrect()).toBe(false);
  });

  it('check if there are not more than two inputs', () => {
    expect(isAnswerCorrect('A', 'B', 'C')).toBe(false);
  });

  it('check if there are not less than two inputs', () => {
    expect(isAnswerCorrect('A')).toBe(false);
  });
});
