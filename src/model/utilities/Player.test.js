import Player from './Player';

describe('Player', () => {
  const player = Player();
  const mockCallback = jest.fn();
  const testQuestion = {
    answers: ["Declan's men and his cook.", 'Los Pollos driver', 'No-Doze', 'Max Arciniega'],
    correctAnswer: 'NoDoze',
    questionObject: 'Beaten to death.',
  };

  it('callback powinien zostac wywołany raz jesli zadamy graczowi pytanie', () => {
    player.askQuestion(mockCallback, testQuestion);

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('callback powinien zostac wywolany jesli gracz odpowie', () => {
    player.answer(mockCallback, testQuestion);

    expect(mockCallback.mock.calls.length).toBe(2);
  });

  it('callback powinien zostac wywoalny z testQuestion jako argument', () => {
    expect(mockCallback.mock.calls[0][0]).toBe(testQuestion);
  });
});
