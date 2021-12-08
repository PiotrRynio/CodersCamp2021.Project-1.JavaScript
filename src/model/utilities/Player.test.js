import player from './Player';

describe('Player', () => {
  const testPlayer = player();
  const testQuestion = {
    answers: ["Declan's men and his cook.", 'Los Pollos driver', 'No-Doze', 'Max Arciniega'],
    correctAnswer: 'NoDoze',
    questionObject: 'Beaten to death.',
  };

  it('callback should be called once if we ask the player a question', () => {
    const mockCallback = jest.fn();
    testPlayer.askQuestion(mockCallback, testQuestion);

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('callback should be called if the player answers', () => {
    const mockCallback = jest.fn();
    testPlayer.answer(mockCallback, testQuestion);
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('callback should be called with testQuestion as an argument', () => {
    const mockCallback = jest.fn();
    testPlayer.answer(mockCallback, testQuestion);
    expect(mockCallback.mock.calls[0][0]).toBe(testQuestion);
  });
});
