import { renderComponent } from '../../testsUtilities/renderComponent';
import EndOfGameModalContent from './EndOfGameModalContent';
import { GAME_MODE } from '../../model/constants';

describe('EndOfGameModalContent', () => {
  it('should show modal', () => {
    const answers = [
      { answer: 'TestNameA', isCorrect: true },
      { answer: 'TestNameB', isCorrect: true },
    ];
    const modalContent = renderComponent(
      EndOfGameModalContent(GAME_MODE.CHARACTERS, answers, answers),
    );

    expect(modalContent).toBeInTheDocument();
  });

  it('should calculate wrong answers as 0%', () => {
    const answers = [
      { answer: 'TestNameA', isCorrect: false },
      { answer: 'TestNameB', isCorrect: false },
    ];
    renderComponent(EndOfGameModalContent(GAME_MODE.CHARACTERS, answers, answers));

    const statsMessage = document.querySelector('.gameStats').textContent;
    expect(statsMessage).toContain('The purity of your results is 0%');
  });

  it('should calculate good answers as 100%', () => {
    const answers = [
      { answer: 'TestNameA', isCorrect: true },
      { answer: 'TestNameB', isCorrect: true },
    ];
    renderComponent(EndOfGameModalContent(GAME_MODE.CHARACTERS, answers, answers));

    const statsMessage = document.querySelector('.gameStats').textContent;
    expect(statsMessage).toContain('The purity of your results is 100%');
  });
});
