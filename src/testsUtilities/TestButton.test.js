import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderComponent } from './renderComponent';
import TestButton from './TestButton';

describe('TestButton', () => {
  it('should show rendered component and...', () => {
    renderComponent(TestButton());

    const testedComponent = document.getElementById('testId');

    expect(testedComponent).toBeInTheDocument();
    expect(testedComponent.textContent).toBe('test button');
    screen.getByText('test button');

    testedComponent.changeText();
    expect(testedComponent.textContent).toBe('test button changed');
    expect(screen.getByText('test button changed')).toBeTruthy();

    userEvent.click(testedComponent);
    expect(testedComponent.textContent).toBe('test button clicked');
    screen.getByText('test button clicked');
  });
});
