import userEvent from '@testing-library/user-event';
import { renderComponent } from '../../testsUtilities/renderComponent';
import AnswersSection from './AnswersSection';

describe('AnswersSection', () => {
  const answers = ['Walter White', 'Jesse Pinkman', 'Hank Shrader', 'Saul Goodman'];
  const correctAnswer = 'Walter White';
  const handler = (isCorrect, answer) => {
    console.log(answer, isCorrect);
  };

  renderComponent(AnswersSection({ answers, correctAnswer }, handler));

  const answersSection = document.getElementById('testId');

  it('should show rendered component', () => {
    expect(answersSection).toBeInTheDocument();
  });

  //expect(testedComponent.innerText).toBe('test button');

  //testedComponent.changeText();
  //expect(testedComponent.innerText).toBe('test button changed');

  //userEvent.click(testedComponent);
  //expect(testedComponent.innerText).toBe('test button clicked');
});
