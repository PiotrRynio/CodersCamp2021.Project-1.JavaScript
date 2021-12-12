import { renderComponent } from '../testsUtilities/renderComponent';
import MenuButton from './MenuButton';

describe('Menu button test', () => {
  it('Should show renederd component', () => {
    renderComponent(MenuButton('Test button', onclick));

    const testButton = document.querySelector('.menuButton');
    const testButtonInnerText = document.querySelector('.menuButton__text');

    expect(testButton).toBeInTheDocument();
    expect(testButtonInnerText).toBeInTheDocument();
    expect(testButtonInnerText.innerText).toBe('Test button');
  });
});
