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
    const testFunction = ({ target }) => {
      target.textContent += ' clicked';
    };
    answerButton.addClickEvent(testFunction);
    userEvent.click(answerButton);
    expect(answerButton.textContent).toBe('Test Answer clicked');
    expect(screen.getByText('Test Answer clicked')).toBeTruthy();
  });
});
