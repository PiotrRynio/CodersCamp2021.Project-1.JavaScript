import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '../../testsUtilities/renderComponent';
import AnswersSection from './AnswersSection';

describe('AnswersSection', () => {
  const answers = ['Walter White', 'Jesse Pinkman', 'Hank Shrader', 'Saul Goodman'];
  const correctAnswer = 'Walter White';

  it('should display four character names if we render new component', () => {
    // given
    const mockHandler = jest.fn();

    // when
    const answersSection = renderComponent(AnswersSection({ answers, correctAnswer }, mockHandler));
    const answersButtons = answersSection.querySelectorAll('.answersSection__answer');

    // then
    expect(answersSection).toBeInTheDocument();
    expect(answersButtons).toHaveLength(4);
    answers.forEach((answer) => {
      expect(screen.getByText(answer)).toBeTruthy();
    });
  });

  it('should mark correct and wrong answer when we click wrong', () => {
    // given
    const mockHandler = jest.fn();
    const answersSection = renderComponent(AnswersSection({ answers, correctAnswer }, mockHandler));
    const answersButtons = answersSection.querySelectorAll('.answersSection__answer');
    const [correctButton, wrongClickedButton, ...wrongButtons] = answersButtons;

    // when
    userEvent.click(answersButtons[1]);

    // then
    wrongButtons.forEach((button) => {
      expect(button).not.toHaveClass('answersSection__answer--correct');
      expect(button).not.toHaveClass('answersSection__answer--wrong');
    });
    expect(wrongClickedButton).toHaveClass('answersSection__answer--wrong');
    expect(correctButton).toHaveClass('answersSection__answer--correct');
  });

  it('should mark correct answer when we click correct', () => {
    // given
    const mockHandler = jest.fn();
    const answersSection = renderComponent(AnswersSection({ answers, correctAnswer }, mockHandler));
    const answersButtons = answersSection.querySelectorAll('.answersSection__answer');

    // when
    userEvent.click(answersButtons[0]);
    const [correctButton, ...wrongButtons] = answersButtons;

    // then
    wrongButtons.forEach((button) => {
      expect(button).not.toHaveClass('answersSection__answer--correct');
      expect(button).not.toHaveClass('answersSection__answer--wrong');
    });
    expect(correctButton).toHaveClass('answersSection__answer--correct');
  });

  it('should call once mockHandler even if we click three times', async () => {
    // given
    const mockHandler = jest.fn();
    const answersSection = renderComponent(AnswersSection({ answers, correctAnswer }, mockHandler));
    const answersButtons = answersSection.querySelectorAll('.answersSection__answer');

    // when
    userEvent.click(answersButtons[0]);
    userEvent.click(answersButtons[0]);
    userEvent.click(answersButtons[1]);
    await new Promise((res) => setTimeout(res, 500));

    // then
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it('should call mockHandler second time after we set new answers', async () => {
    // given
    const mockHandler = jest.fn();
    const answersSection = renderComponent(AnswersSection({ answers, correctAnswer }, mockHandler));
    const answersButtons = answersSection.querySelectorAll('.answersSection__answer');
    const newQuestionObject = {
      answers: ['A', 'B', 'C', 'D'],
      correctAnswer: 'D',
    };

    // when
    userEvent.click(answersButtons[0]);
    await new Promise((res) => setTimeout(res, 500));
    answersSection.setNewQuestionAnswers(newQuestionObject);
    userEvent.click(answersButtons[0]);
    userEvent.click(answersButtons[1]);
    await new Promise((res) => setTimeout(res, 500));

    // then
    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});
