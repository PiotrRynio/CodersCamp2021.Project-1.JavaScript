import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '../testsUtilities/renderComponent';
import MainSection from './MainSection';
import * as scores from '../model/saveScore';
import { GAME_MODE } from '../model/constants';

describe('MainSection', () => {
  afterEach(() => {
    jest.spyOn(scores, 'getScores').mockRestore();
  });

  it('should display MainSection with Rules and Two Buttons', () => {
    // given

    // when
    const testMainSection = renderComponent(MainSection());
    const menuButtons = testMainSection.querySelectorAll('.menuButton');

    // then
    expect(testMainSection).toBeInTheDocument();
    expect(menuButtons).toHaveLength(2);
    expect(screen.getByText('Rules: Characters')).toBeTruthy();
    expect(screen.getByText('Ranking')).toBeTruthy();
    expect(screen.getByText('New Game')).toBeTruthy();
  });

  it('should hide menu buttons and content on "New Game" button click', () => {
    // given
    const testMainSection = renderComponent(MainSection());
    const [newGameButton] = testMainSection.querySelectorAll('.menuButton');

    // when
    userEvent.click(newGameButton);
    const menuSection = testMainSection.querySelector('.menuSection');
    const contentSection = testMainSection.querySelector('.contentSection');

    // then
    expect(testMainSection).toBeInTheDocument();
    expect(menuSection).toBeFalsy();
    expect(contentSection).toBeFalsy();
  });

  it('should change category to new on changeMode function', () => {
    // given
    const testMainSection = renderComponent(MainSection());
    const menuButtons = testMainSection.querySelectorAll('.menuButton');

    // when
    testMainSection.changeMode(GAME_MODE.DEATHS);

    // then
    expect(testMainSection).toBeInTheDocument();
    expect(menuButtons).toHaveLength(2);
    expect(screen.getByText('Rules: Deaths')).toBeTruthy();
  });

  it('should display ranking on "Ranking" button click', () => {
    // given
    const testScores = [
      { name: 'Player1', score: 10 },
      { name: 'Player2', score: 30 },
      { name: 'Player3', score: 20 },
    ];
    jest.spyOn(scores, 'getScores').mockReturnValue(testScores);
    const testMainSection = renderComponent(MainSection());
    const menuButtons = testMainSection.querySelectorAll('.menuButton');

    // when
    userEvent.click(menuButtons[1]);
    const ranks = testMainSection.querySelectorAll('.rankRecord');

    // then
    expect(ranks).toHaveLength(3);
    expect(screen.getByText('Ranking: Characters')).toBeTruthy();
    expect(screen.getByText('Rules')).toBeTruthy();
  });

  it('should display ranking Deaths on "Ranking" button click and after change category', () => {
    // given
    const testScores = [
      { name: 'Player1', score: 10 },
      { name: 'Player2', score: 30 },
      { name: 'Player3', score: 20 },
    ];
    jest.spyOn(scores, 'getScores').mockReturnValue(testScores);
    const testMainSection = renderComponent(MainSection());
    const [, rankingButton] = testMainSection.querySelectorAll('.menuButton');

    // when
    userEvent.click(rankingButton);
    testMainSection.changeMode(GAME_MODE.DEATHS);
    const ranks = testMainSection.querySelectorAll('.rankRecord');

    // then
    expect(ranks).toHaveLength(3);
    expect(screen.getByText('Ranking: Deaths')).toBeTruthy();
  });

  it('should display Quotes rules on "Rules" button click and after change category', () => {
    // given
    const testScores = [
      { name: 'Player1', score: 10 },
      { name: 'Player2', score: 30 },
      { name: 'Player3', score: 20 },
    ];
    jest.spyOn(scores, 'getScores').mockReturnValue(testScores);
    const testMainSection = renderComponent(MainSection());
    testMainSection.changeMode(GAME_MODE.QUOTES);
    const [, RankingButton] = testMainSection.querySelectorAll('.menuButton');
    userEvent.click(RankingButton);
    const [, RulesButton] = testMainSection.querySelectorAll('.menuButton');

    // when
    userEvent.click(RulesButton);

    // then
    expect(screen.getByText('Rules: Quotes')).toBeTruthy();
    expect(screen.getByText('Ranking')).toBeTruthy();
    expect(screen.getByText('New Game')).toBeTruthy();
  });
});
