import userEvent from '@testing-library/user-event';
import { renderComponent } from '../testsUtilities/renderComponent';
import MenuButton from './MainMenuButton';

describe('Main menu button test', () => {
  const mockHandler = jest.fn();

  renderComponent(MenuButton('Test button', mockHandler));

  const testButton = document.querySelector('.mainMenuButton');
  const testButtonInnerText = document.querySelector('.mainMenuButton__text');

  it('Should show renederd component', () => {
    expect(testButton).toBeInTheDocument();
    expect(testButtonInnerText).toBeInTheDocument();
    expect(testButtonInnerText.textContent).toBe('Test button');
  });

  it('should add function which will be called after button click', () => {
    userEvent.click(testButton);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
