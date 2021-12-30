import computerPlayer from './computerPlayer';
import player from './Player';

describe('Computer Player', () => {
  const testQuestion = {
    answers: ["Declan's men and his cook.", 'Los Pollos driver', 'No-Doze', 'Max Arciniega'],
    correctAnswer: 'No-Doze',
    questionObject: 'Beaten to death.',
  };

  it('callback should be called once if we ask the player a question', async () => {
    const mockCallback = jest.fn();
    const testComputerPlayer = computerPlayer();
    testComputerPlayer.askQuestion(testQuestion, mockCallback);
    await new Promise((res) => setTimeout(res, 1000));
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('properly saving question parameters', () => {
    const mockCallback = jest.fn();
    const testComputerPlayer = computerPlayer();
    testComputerPlayer.askQuestion(testQuestion, mockCallback);
    expect(testComputerPlayer.questionAndAnswersToAnswer).toBe(testQuestion);
  });

  it('returned random answer should be an element of testQuestion.answers array', async () => {
    const mockCallback = jest.fn();
    const testComputerPlayer = computerPlayer();
    testComputerPlayer.askQuestion(testQuestion, mockCallback);
    await new Promise((res) => setTimeout(res, 1000));
    expect(testQuestion.answers).toContain(testComputerPlayer.randomAnswer);
  });
});
