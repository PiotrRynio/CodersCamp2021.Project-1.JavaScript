import { renderComponent } from '../testsUtilities/renderComponent';
import NewGameButton from './NewGameButton';

describe('NewGameButton', () => {
  it('Should show rendered component', () => {
    renderComponent(NewGameButton());

    const testedButton = document.querySelector('.newGameButton');
    const testedButtonFirstLetter = document.querySelector('.newGameButton__first-letter');
    const testedButtonRestOfText = document.querySelector('.newGameButton__restOfText');

    expect(testedButton).toBeInTheDocument();
    expect(testedButton.textContent).toBe('New Game');

    expect(testedButtonFirstLetter).toBeInTheDocument();
    expect(testedButtonFirstLetter.textContent).toBe('N');

    expect(testedButtonRestOfText).toBeInTheDocument();
    expect(testedButtonRestOfText.textContent).toBe('ew Game');
  });
});
