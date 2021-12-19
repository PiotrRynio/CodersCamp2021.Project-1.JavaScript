import { screen } from '@testing-library/dom';
import { renderComponent } from '../../testsUtilities/renderComponent';
import RulesSection from './RulesSection';
import * as scores from '../../model/saveScore';
import { GAME_MODE, RULES } from '../../model/constants';

describe('RankSection', () => {
  it('should display rules with category text', () => {
    // given
    const category = GAME_MODE.CHARACTERS;

    // when
    const testRules = renderComponent(RulesSection(category));

    // then
    expect(testRules).toBeInTheDocument();
    expect(screen.getByText(`Rules: ${category}`)).toBeTruthy();
    expect(screen.getByText(RULES[category].question)).toBeTruthy();
    expect(
      screen.getByText(
        `You have one minute to answer fifteen questions. During the game on each question you need to select ${RULES[category].specialRule} The correct answer will be shown to you after giving the answer. If you want to go to the next question then click again.`,
      ),
    ).toBeTruthy();
  });

  it('should change ruls after on changeRules function', () => {
    // given
    const category = GAME_MODE.CHARACTERS;
    const testRules = renderComponent(RulesSection(category));
    const newCategory = GAME_MODE.QUOTES;

    // when
    testRules.changeRules(newCategory);

    // then
    expect(screen.getByText(`Rules: ${newCategory}`)).toBeTruthy();
    expect(screen.getByText(RULES[newCategory].question)).toBeTruthy();
    expect(
      screen.getByText(
        `You have one minute to answer fifteen questions. During the game on each question you need to select ${RULES[newCategory].specialRule} The correct answer will be shown to you after giving the answer. If you want to go to the next question then click again.`,
      ),
    ).toBeTruthy();
  });
});
