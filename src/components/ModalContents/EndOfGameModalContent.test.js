import { renderComponent } from '../../testsUtilities/renderComponent';
import EndOfGameModalContent from './EndOfGameModalContent';
import { GAME_MODE } from '../../model/constants';

describe('EndOfGameModalContent', () => {
  it('Content should be shown propery when first place', () => {
    const answers = [
      { answer: 'TestNameA', isCorrect: true },
      { answer: 'TestNameB', isCorrect: true },
    ];
    const modalContent = renderComponent(
      EndOfGameModalContent(GAME_MODE.CHARACTERS, answers, answers),
    );

    expect(modalContent).toBeInTheDocument();
  });

  //   it('Content should be shown propery when last place', () => {
  //     renderComponent(EndOfGameModalContent());

  //     const answers = [
  //       { answer: 'TestNameA', isCorrect: false },
  //       { answer: 'TestNameB', isCorrect: false },
  //     ];
  //     //expect(EndOfGameModalContent(answers)).toBe('A');
  //   });
});
