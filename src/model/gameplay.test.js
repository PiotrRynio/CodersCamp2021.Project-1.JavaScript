import Gameplay from './Gameplay';

describe('gameplay', () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

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
      'measureGameTime',
    ].sort();
    const receivedGameKeys = Object.keys(gameplayObject).sort();
    expect(JSON.stringify(receivedGameKeys) === JSON.stringify(expectedToReceiveKeys)).toBe(true);
  });

  it('should call endGame after 15 question', () => {
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

  it('should call endGame after timed out', () => {
    const mockCallbackEndGameHandler = jest.fn();
    // given
    const gameplay = Gameplay(mockCallbackEndGameHandler);
    gameplay.secondsLeft = 0;
    jest.useFakeTimers();
    // when
    expect(mockCallbackEndGameHandler).not.toHaveBeenCalled();
    gameplay.startTiming();
    jest.runAllTimers();
    // then
    expect(mockCallbackEndGameHandler).toHaveBeenCalledTimes(1);
  });

  it('should properly set and clear interval', () => {
    const mockEndGameHandler = jest.fn();
    jest.useFakeTimers();
    jest.spyOn(global, 'setInterval');
    // given
    const gameplay = Gameplay(mockEndGameHandler);
    // when
    gameplay.startTiming();
    // then
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    // given
    // when
    gameplay.endGame();
    // then
    expect(gameplay.interval).toBe(false);
  });

  it('should show question after was received', async () => {
    const mockEndGameHandler = jest.fn();
    const mockAskQuesionHandler = jest.fn();
    const gameplay = Gameplay(mockEndGameHandler, mockAskQuesionHandler);
    expect(mockAskQuesionHandler).not.toHaveBeenCalled();
    await gameplay.generateQuestion();
    expect(mockAskQuesionHandler).toHaveBeenCalledTimes(1);
  });
});
