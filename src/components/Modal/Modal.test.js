import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { renderComponent } from '../../testsUtilities/renderComponent';
import Modal from './Modal';

describe('Modal', () => {
  it('should display modal with component inside', () => {
    // given
    const parent = document.createElement('div');
    const component = document.createElement('p');
    component.textContent = 'Cześć, świecie';
    component.setOnModalClose = () => {};
    renderComponent(parent);

    // when
    const testModal = Modal(component, parent);
    parent.append(testModal);
    const modalPopup = parent.querySelector('.modalPopup');

    // then
    expect(modalPopup).toHaveClass('modalPopup');
    expect(testModal).toBeInTheDocument();
    expect(screen.getByText('Cześć, świecie')).toBeTruthy();
  });

  it('should close modal', () => {
    // given
    const parent = document.createElement('div');
    const component = document.createElement('button');
    component.setOnModalClose = (closeFunction) => {
      component.onclick = closeFunction;
    };
    renderComponent(parent);
    const testModal = Modal(component, parent);
    parent.append(testModal);

    // when
    userEvent.click(component);
    const modal = parent.querySelector('.modalPopup');

    // then
    expect(modal).toBeFalsy();
  });
});
