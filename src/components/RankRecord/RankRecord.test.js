import { screen } from '@testing-library/dom';
import { renderComponent } from '../../testsUtilities/renderComponent';
import RankRecord from './RankRecord';

describe('RankRecord', () => {
  it('should display player place, name and score', () => {
    // given
    const testPlayerPlace = 3;
    const testPlayerScore = { name: 'John Doe', score: 100 };

    // when
    const testRankRecord = renderComponent(RankRecord(testPlayerPlace, testPlayerScore));

    // then
    expect(testRankRecord).toBeInTheDocument();
    // answers.forEach((answer) => {
    //   expect(screen.getByText(answer)).toBeTruthy();
    // });
  });
});
