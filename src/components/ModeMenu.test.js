import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import ModeMenu from './ModeMenu';
import { renderComponent } from '../testsUtilities/renderComponent';

describe('ModeMenu', () => {
  it('Properly shows rendered component', () => {
    renderComponent(ModeMenu());
    const testedDiv = document.querySelector('.modeMenu');
    const buttonList = document.querySelectorAll('.modeMenu__button');
    const activeButton = document.querySelector('.modeMenu__button--active');
    expect(testedDiv).toBeInTheDocument();
    expect(buttonList.length === 3).toBeTruthy();
    expect(screen.getByText('Characters')).toBeTruthy();
    expect(screen.getByText('Quotes')).toBeTruthy();
    expect(screen.getByText('Deaths')).toBeTruthy();
    expect(activeButton).toBeInTheDocument();
  });

  it('should remove active class in every button', () => {
    renderComponent(ModeMenu());
    const testedDiv = document.querySelector('.modeMenu');
    const buttonList = document.querySelectorAll('.modeMenu__button');
    testedDiv.removeActive();

    buttonList.forEach((button) => {
      expect(button).not.toHaveClass('modeMenu__button--active');
    });
  });

  it('should set other button active and run callback', () => {
    const mockHandler = jest.fn();
    const testedMenu = renderComponent(ModeMenu(mockHandler));
    const [charactersButton, quotesButton] = testedMenu.querySelectorAll('.modeMenu__button');
    userEvent.click(quotesButton);

    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(charactersButton).not.toHaveClass('modeMenu__button--active');
    expect(quotesButton).toHaveClass('modeMenu__button--active');
  });
});
