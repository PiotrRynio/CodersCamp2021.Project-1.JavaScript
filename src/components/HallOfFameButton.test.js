import { renderComponent } from '../testsUtilities/renderComponent';
import MenuButton from './HallOfFameButton';

describe('Menu button test', () => {
  it('Should show renederd component', () => {
    renderComponent(MenuButton());

    const testButton = document.querySelector('.menuButton');
    const testButtonInnerText = document.querySelector('.menuButton__text');

    expect(testButton).toBeInTheDocument();
    expect(testButtonInnerText).toBeInTheDocument();
    expect(testButtonInnerText.textContent).toBe('Hall of Fame');
  });
});
