import { screen } from '@testing-library/dom';
import { renderComponent } from '../../testsUtilities/renderComponent';
import TextQuestion from './TextQuestion';

describe('TextQuestion', () => {
  it('should display component with text inside', () => {
    // given
    const testText = 'Test test test!';

    // when
    const testQuestion = renderComponent(TextQuestion(testText));

    // then
    expect(testQuestion).toBeInTheDocument();
    expect(screen.getByText(testText)).toBeTruthy();
  });

  it('should change text inside when set new text', () => {
    // given
    const testText = 'Test test test!';
    const testQuestion = renderComponent(TextQuestion(testText));
    const newTestText = 'New test';

    // when
    testQuestion.setNewText(newTestText);

    // then
    expect(screen.getByText(newTestText)).toBeTruthy();
  });
});
