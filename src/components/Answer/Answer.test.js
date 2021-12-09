import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '../../testsUtilities/renderComponent';
import AnswerButton from './Answer';

describe('Answer button', () => {
  renderComponent(AnswerButton('Test Answer'));
  const answerButton = document.getElementById('testId');

  it('should show rendered component', () => {
    expect(answerButton).toBeInTheDocument();
  });

  it('should have "Test Answer" inside.', () => {
    expect(answerButton.textContent).toBe('Test Answer');
    expect(screen.getByText('Test Answer')).toBeTruthy();
  });

  it('should have class "answersSection__answer"', () => {
    expect(answerButton.classList).toContain('answersSection__answer');
  });

  it('should contains class "answersSection__answer--correct" after set it correct', () => {
    answerButton.setCorrect();
    expect(answerButton.classList).toContain('answersSection__answer--correct');
  });

  it('should contains class "answersSection__answer--wrong" after set it wrong', () => {
    answerButton.setWrong();
    expect(answerButton.classList).toContain('answersSection__answer--wrong');
  });

  it('should add a function that will be executed after click event', () => {
    const mockCallback = jest.fn();
    answerButton.addClickEvent(mockCallback);
    userEvent.click(answerButton);
    expect(mockCallback.mock.calls).toHaveLength(1);
  });

  it('should change text and remove modifier classes', () => {
    answerButton.setNewAnswer('New Answer Text');
    expect(answerButton.classList).not.toContain('answersSection__answer--wrong');
    expect(answerButton.classList).not.toContain('answersSection__answer--correct');
    expect(screen.getByText('New Answer Text')).toBeTruthy();
  });
});
