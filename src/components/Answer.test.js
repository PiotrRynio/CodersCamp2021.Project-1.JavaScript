import { renderComponent } from "../testsUtilities/renderComponent";
import Answer from "./Answer";

describe('Answer button',() => {

  renderComponent(Answer('Test Answer'));
  const answerButton = document.getElementById('testId');

  it('should show rendered component', () => {
    expect(answerButton).toBeInTheDocument();
  });

  it('should have "Test Answer" inside.', () => {
    expect(answerButton.textContent).toBe('Test Answer');
  });

  it('should have class "answersSection__answer"', () => {
    expect(answerButton.classList).toContain('answersSection__answer');
  });
});