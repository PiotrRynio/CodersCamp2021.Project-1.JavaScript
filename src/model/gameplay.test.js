import Gameplay from './Gameplay';
import * as question from './questionGenerator';

describe('gameplay', () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should properly return game object', () => {
    // given
    const gameplayObject = Gameplay();
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
    gameplay.questionIndex = 15;
    // when
    gameplay.onAnswerCheck(false);
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

  it('should show question after was received', async () => {
    // given
    const mockEndGameHandler = jest.fn();
    const mockAskQuesionHandler = jest.fn();
    const mockHandleUpdateTime = jest.fn();
    const gameplay = Gameplay(mockEndGameHandler, mockAskQuesionHandler, mockHandleUpdateTime);
    const expectedQuestion = {
      correctAnswer: 'A',
      answers: ['A', 'B', 'C', 'D'],
      questionObject: 'image',
    };
    const expectedQuestionPromise = new Promise((resolve) => {
      resolve(expectedQuestion);
    });

    jest.spyOn(question, 'default').mockReturnValue(expectedQuestionPromise);
    // when
    await gameplay.startGame();
    // then
    await expect(gameplay.currentQuestion).toBe(expectedQuestion);
    expect(gameplay.questionIndex).toBe(1);
    expect(mockAskQuesionHandler).toHaveBeenCalledTimes(1);
  });
});
