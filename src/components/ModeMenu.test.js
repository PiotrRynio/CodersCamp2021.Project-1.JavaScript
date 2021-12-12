import ModeMenu from './ModeMenu';
import { renderComponent } from '../testsUtilities/renderComponent';
describe('ModeMenu', () => {
  it('Properly shows rendered component', () => {
    renderComponent(ModeMenu());
    const testedDiv = document.querySelector('.modeMenu');
    const buttonList = [...document.querySelectorAll('.modeMenu__button')];
    expect(testedDiv).toBeInTheDocument();
    expect(buttonList.length === 3).toBeTruthy();
    expect(
      buttonList[0].textContent === 'Characters' &&
        buttonList[1].textContent === 'Quotes' &&
        buttonList[2].textContent === 'Deaths',
    ).toBeTruthy();
  });
});
