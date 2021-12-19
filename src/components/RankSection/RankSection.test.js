import { screen } from '@testing-library/dom';
import { renderComponent } from '../../testsUtilities/renderComponent';
import RankSection from './RankSection';
import * as scores from '../../model/saveScore';
import { GAME_MODE } from '../../model/constants';

describe('RankSection', () => {
  afterEach(() => {
    jest.spyOn(scores, 'getScores').mockRestore();
  });

  it('should display three rankRecords with players in correct order', () => {
    // given
    const testScores = [
      { name: 'Player1', score: 10 },
      { name: 'Player2', score: 30 },
      { name: 'Player3', score: 20 },
    ];
    jest.spyOn(scores, 'getScores').mockReturnValue(testScores);
    const category = GAME_MODE.CHARACTER;

    // when
    const testRanking = renderComponent(RankSection(category));
    const playerRecords = testRanking.querySelectorAll('.rankRecord');

    // then
    expect(testRanking).toBeInTheDocument();
    expect(playerRecords).toHaveLength(3);
    expect(screen.getByText('1. Player2')).toBeTruthy();
    expect(screen.getByText('2. Player3')).toBeTruthy();
    expect(screen.getByText('3. Player1')).toBeTruthy();
  });

  it('should display maximum 20 records', () => {
    // given
    const testScores = [];
    for (let i = 0; i < 25; i += 1) {
      testScores.push({ name: 'Player', score: Math.floor(Math.random() * 100) });
    }
    jest.spyOn(scores, 'getScores').mockReturnValue(testScores);
    const category = GAME_MODE.QUOTES;

    // when
    const testRanking = renderComponent(RankSection(category));
    const playerRecords = testRanking.querySelectorAll('.rankRecord');

    // then
    expect(testRanking).toBeInTheDocument();
    expect(playerRecords).toHaveLength(20);
  });
});
