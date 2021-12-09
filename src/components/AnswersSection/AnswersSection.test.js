import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '../../testsUtilities/renderComponent';
import AnswersSection from './AnswersSection';

describe('AnswersSection', () => {
  const answers = ['Walter White', 'Jesse Pinkman', 'Hank Shrader', 'Saul Goodman'];
  const correctAnswer = 'Walter White';
  const mockHandler = jest.fn();

  renderComponent(AnswersSection({ answers, correctAnswer }, mockHandler));

  const answersSection = document.getElementById('testId');
  const answersButtons = answersSection.querySelectorAll('.answersSection__answer');

  it('should show rendered component', () => {
    expect(answersSection).toBeInTheDocument();
  });

  it('should show four answers', () => {
    expect(answersButtons).toHaveLength(4);
  });

  it('should show answers with text inside', () => {
    answers.forEach((answer) => {
      expect(screen.getByText(answer)).toBeTruthy();
    });
  });

  it('should give click event for answerButton', () => {
    answersButtons.forEach((answerButton) => {
      expect(answerButton.click).toBeTruthy();
    });
  });
});
