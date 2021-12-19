import { screen } from '@testing-library/dom';
import Timer from './Timer';
import { renderComponent } from '../testsUtilities/renderComponent';
import { CHEMICAL_ELEMENTS } from '../model/constants';

describe('Timer', () => {
  it('shows rendered component', () => {
    renderComponent(Timer());
    const testTimer = document.querySelector('.timer');
    const testTimerNumberSection = document.querySelector('.timer__number');
    const testTimerTextSection = document.querySelector('.timer__text');

    expect(testTimer).toBeInTheDocument();
    expect(testTimerNumberSection).toBeInTheDocument();
    expect(testTimerTextSection).toBeInTheDocument();
    expect(screen.getByText('60')).toBeTruthy();
    expect(screen.getByText('Nd')).toBeTruthy();
  });

  it('should change time and chemical element sign', () => {
    const time = Timer();
    time.updateTime(10);

    renderComponent(time);

    expect(screen.getByText('10')).toBeTruthy();
    expect(screen.getByText('Ne')).toBeTruthy();
  });
});
