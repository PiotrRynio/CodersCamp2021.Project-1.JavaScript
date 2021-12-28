import Gameplay from './gameplay';

describe('gameplay', () => {
  it('should properly return game object', () => {
    const gameplayObject = Gameplay();
    expect(typeof gameplayObject).toBe('object');
    const expectedToReceiveKeys = [
      'currentQuestion',
      'questionHistory',
      'gameMode',
      'gamePlayer',
      'playerName',
      'score',
      'endGame',
      'onAnswerCheck',
      'startGame',
      'startTiming',
      'questionIndex',
    ].sort();
    const receivedGameKeys = Object.keys(gameplayObject).sort();
    expect(JSON.stringify(receivedGameKeys) === JSON.stringify(expectedToReceiveKeys)).toBe(true);
  });

  it('should call endGame when index is 15', () => {
    const mockEndGameHandler = jest.fn();

    // given
    const gameplay = Gameplay(mockEndGameHandler);
    gameplay.questionIndex = 15;
    // when
    expect(mockEndGameHandler).toHaveBeenCalledTimes(0);
    gameplay.onAnswerCheck(false);
    // then
    expect(mockEndGameHandler).toHaveBeenCalledTimes(1);
  });
});

//  TODO test('it should call endGame after timed out')
