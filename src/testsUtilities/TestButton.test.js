import userEvent from '@testing-library/user-event';
import { renderComponent } from './renderComponent';
import TestButton from './TestButton';

describe('TestButton', () => {
  it('should show rendered component and...', () => {
    renderComponent(TestButton());

    const testedComponent = document.getElementById('testId');

    expect(testedComponent).toBeInTheDocument();
    expect(testedComponent.innerText).toBe('test button');

    testedComponent.changeText();
    expect(testedComponent.innerText).toBe('test button changed');

    userEvent.click(testedComponent);
    expect(testedComponent.innerText).toBe('test button clicked');
  });
});
