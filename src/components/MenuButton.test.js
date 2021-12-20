import { renderComponent } from '../testsUtilities/renderComponent';
import MenuButton from './MenuButton';
import userEvent from '@testing-library/user-event';

describe('Menu button test', () => {
  const mockHandler = jest.fn();

  renderComponent(MenuButton('Test button', mockHandler));

  const testButton = document.querySelector('.menuButton');
  const testButtonInnerText = document.querySelector('.menuButton__text');

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
