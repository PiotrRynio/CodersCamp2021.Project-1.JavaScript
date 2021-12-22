import { screen } from '@testing-library/dom';
import Timer from './Timer';
import { renderComponent } from '../testsUtilities/renderComponent';

describe('Timer', () => {
  it('shows rendered component', () => {
    renderComponent(Timer());
    const testTimer = document.querySelector('.timer');

    expect(testTimer).toBeInTheDocument();
  });

  it('should display different number value and text from const values chemical elements symbols', () => {
    const time = Timer();

    time.updateTime(10);
    renderComponent(time);
    expect(screen.getByText('10')).toBeTruthy();
    expect(screen.getByText('Ne')).toBeTruthy();

    time.updateTime(25);
    renderComponent(time);
    expect(screen.getByText('25')).toBeTruthy();
    expect(screen.getByText('Mn')).toBeTruthy();
  });
});
