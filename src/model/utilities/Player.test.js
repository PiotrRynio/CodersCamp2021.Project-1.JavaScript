import Player from './Player';

describe('Player', () => {
  const player = Player();
  const testCallback = (testAray) => testAray.push(5);

  it('if askQuestion call functions with certain parametrs', () => {
    const testAray = [];

    player.askQuestion(testCallback, testAray);

    expect(testAray).toContain(5);
  });

  it('if answer call functions with certain parametrs', () => {
    const testAray = [];

    player.answer(testCallback, testAray);

    expect(testAray).toContain(5);
  });
});
