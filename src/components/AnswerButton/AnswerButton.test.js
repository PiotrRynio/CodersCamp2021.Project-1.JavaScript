import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '../../testsUtilities/renderComponent';
import AnswerButton from './AnswerButton';

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
    expect(answerButton).toHaveClass('answersSection__answer');
  });

  it('should contains class "answersSection__answer--correct" after set it correct', () => {
    answerButton.setCorrect();
    expect(answerButton).toHaveClass('answersSection__answer--correct');
  });

  it('should contains class "answersSection__answer--wrong" after set it wrong', () => {
    answerButton.setWrong();
    expect(answerButton).toHaveClass('answersSection__answer--wrong');
  });

  it('should add a function that will be executed after click event', () => {
    const mockCallback = jest.fn();
    answerButton.addClickEvent(mockCallback);
    userEvent.click(answerButton);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('should change text and remove modifier classes after set new answer', () => {
    answerButton.setNewAnswer('New Answer Text');
    expect(answerButton).not.toHaveClass('answersSection__answer--wrong');
    expect(answerButton).not.toHaveClass('answersSection__answer--correct');
    expect(screen.getByText('New Answer Text')).toBeTruthy();
  });
});
