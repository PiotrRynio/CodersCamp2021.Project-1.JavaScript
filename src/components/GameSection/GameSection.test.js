import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '../../testsUtilities/renderComponent';
import GameSection from './GameSection';

describe('GameSection', () => {
  const testQuestion = {
    answers: ["Declan's men and his cook.", 'Los Pollos driver', 'No-Doze', 'Max Arciniega'],
    questionObject:
      'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
    correctAnswer: 'Los Pollos driver',
  };

  it('should display four answers, question and image', () => {
    // given
    const mockHandler = jest.fn();
    const category = 'Characters';
    // when
    const gameSection = renderComponent(GameSection(category, mockHandler));
    gameSection.changeQuestion(testQuestion);
    const answersButtons = gameSection.querySelectorAll('.answersSection__answer');
    const question = gameSection.querySelector('.textQuestion');
    const questionImage = gameSection.querySelector('.mainImageContainer');
    // then
    expect(question).toBeInTheDocument();
    expect(questionImage).toBeInTheDocument();
    expect(gameSection).toBeInTheDocument();
    expect(answersButtons).toHaveLength(4);
    testQuestion.answers.forEach((answer) => {
      expect(screen.getByText(answer)).toBeTruthy();
    });
    expect(screen.getByText('Who is this character?')).toBeTruthy();
    expect(gameSection).toHaveClass('gameSection--image');
  });

  it('should run callback on answer click', async () => {
    // given
    const mockHandler = jest.fn();
    const category = 'Characters';
    const gameSection = renderComponent(GameSection(category, mockHandler));
    gameSection.changeQuestion(testQuestion);
    const answersButtons = gameSection.querySelectorAll('.answersSection__answer');
    // when
    userEvent.click(answersButtons[1]);
    await new Promise((res) => setTimeout(res, 500));
    // then
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it('should used gameSection--text class on Quotes/Deaths category', () => {
    // given
    const mockHandler = jest.fn();
    const category = 'Quotes';

    // when
    const gameSection = renderComponent(GameSection(category, mockHandler));
    gameSection.changeQuestion(testQuestion);

    const questions = gameSection.querySelectorAll('.textQuestion');
    // then
    expect(questions).toHaveLength(2);
    expect(screen.getByText('Who said this quote?')).toBeTruthy();
    expect(gameSection).toHaveClass('gameSection--text');
  });
});
