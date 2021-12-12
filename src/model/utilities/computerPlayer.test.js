import computerPlayer from './computerPlayer';
import player from './Player';

describe('Computer Player', () => {
  const testQuestion = {
    answers: ["Declan's men and his cook.", 'Los Pollos driver', 'No-Doze', 'Max Arciniega'],
    questionObject: 'Beaten to death.',
  };

  it('callback should be called once if we ask the player a question', async () => {
    const mockCallbackToShowQuestion = jest.fn();
    const mockCallbackToHandleAnswer = jest.fn();
    const testComputerPlayer = computerPlayer(player());
    testComputerPlayer.askQuestion(
      mockCallbackToShowQuestion,
      testQuestion,
      mockCallbackToHandleAnswer,
    );
    expect(mockCallbackToShowQuestion).toHaveBeenCalledTimes(1);
    await new Promise((res) => setTimeout(res, 1000));
    expect(mockCallbackToHandleAnswer).toHaveBeenCalledTimes(1);
  });

  it('properly saving question parameters', () => {
    const mockCallback = jest.fn();
    const testComputerPlayer = computerPlayer(player());
    testComputerPlayer.askQuestion(mockCallback, testQuestion, mockCallback);
    expect(testComputerPlayer.questionAndAnswersToAnswer).toEqual(testQuestion);
  });

  it('returned random answer should be an element of testQuestion.answers array', async () => {
    const mockCallback = jest.fn();
    const testComputerPlayer = computerPlayer(player());
    testComputerPlayer.askQuestion(mockCallback, testQuestion, mockCallback);
    await new Promise((res) => setTimeout(res, 1000));
    expect(testQuestion.answers).toContain(testComputerPlayer.randomAnswer);
  });
});
