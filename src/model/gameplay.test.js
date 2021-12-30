import Gameplay from './Gameplay';
import fetch from '../testsUtilities/fetch';

describe('gameplay', () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('should properly return game object', () => {
    // given
    const gameplayObject = Gameplay();
    const expectedToReceiveKeys = [
      'currentQuestion',
      'questionHistory',
      'gameMode',
      'humanPlayer',
      'computerPlayer',
      'questionGenerator',
      'endGame',
      'onAnswerCheck',
      'onHumanAnswer',
      'startGame',
      'startTiming',
    ];
    // when
    const receivedGameKeys = Object.keys(gameplayObject);
    // then
    expectedToReceiveKeys.forEach((key) => {
      expect(receivedGameKeys).toContain(key);
    });
    expect(typeof gameplayObject).toBe('object');
  });

  it('should call endGame after 15 question', () => {
    // given
    const mockEndGameHandler = jest.fn();
    const gameplay = Gameplay(mockEndGameHandler);
    gameplay.humanPlayer.currentQuestionIndex = 15;
    // when
    gameplay.onAnswerCheck(false, gameplay.humanPlayer);
    // then
    expect(mockEndGameHandler).toHaveBeenCalledTimes(1);
  });

  it('should call endGame after timed out', () => {
    // given
    const mockCallbackEndGameHandler = jest.fn();
    const gameplay = Gameplay(mockCallbackEndGameHandler);
    gameplay.secondsLeft = 0;
    jest.useFakeTimers();
    // when
    gameplay.startTiming();
    jest.runAllTimers();
    // then
    expect(mockCallbackEndGameHandler).toHaveBeenCalledTimes(1);
  });

  it('should properly set and clear interval', () => {
    // given
    const mockEndGameHandler = jest.fn();
    jest.useFakeTimers();
    jest.spyOn(global, 'setInterval');
    const gameplay = Gameplay(mockEndGameHandler);
    // when
    gameplay.startTiming();
    gameplay.endGame();
    // then
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    expect(gameplay.interval).toBe(false);
  });

  it('should run onAnswerCheck onHumanAnswer', async () => {
    // given
    const mockEndGameHandler = jest.fn();
    const mockShowQuestion = jest.fn(() => {
      gameplay.startTiming();
    });
    const mockUpdateTime = jest.fn();
    const gameplay = Gameplay(mockEndGameHandler, mockShowQuestion, mockUpdateTime);
    const answer = { answer: 'test', isCorrect: false };
    jest.spyOn(gameplay, 'onAnswerCheck');
    global.fetch = fetch;

    // when
    await gameplay.startGame();
    gameplay.onHumanAnswer(answer);
    await new Promise((res) => {
      setTimeout(res, 1000);
    });

    console.log(mockUpdateTime.mock.calls);

    console.log(gameplay.secondsLeft);
    // then
    expect(gameplay.onAnswerCheck).toHaveBeenCalledTimes(2);
    expect(mockUpdateTime).toHaveBeenCalledTimes(1);
  });
});
