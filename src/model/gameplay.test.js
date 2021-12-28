import Gameplay from './gameplay';

describe('gameplay', () => {
  test('it should properly return game object', () => {
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
    ].sort();
    const receivedGameKeys = Object.keys(gameplayObject).sort();
    expect(JSON.stringify(receivedGameKeys) === JSON.stringify(expectedToReceiveKeys)).toBe(true);
  });

  // TODO test('it should call endGame when index is 15')
  //  TODO test('it should call endGame after timed out')
});
