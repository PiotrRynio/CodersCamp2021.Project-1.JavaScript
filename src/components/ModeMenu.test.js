import { screen } from '@testing-library/dom';
import ModeMenu from './ModeMenu';
import { renderComponent } from '../testsUtilities/renderComponent';

describe('ModeMenu', () => {
  it('Properly shows rendered component', () => {
    renderComponent(ModeMenu());
    const testedDiv = document.querySelector('.modeMenu');
    const buttonList = [...document.querySelectorAll('.modeMenu__button')];
    expect(testedDiv).toBeInTheDocument();
    expect(buttonList.length === 3).toBeTruthy();
    expect(screen.getByText('Characters')).toBeTruthy();
    expect(screen.getByText('Quotes')).toBeTruthy();
    expect(screen.getByText('Deaths')).toBeTruthy();
  });
});
