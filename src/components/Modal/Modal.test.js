import { screen } from '@testing-library/dom';
import { renderComponent } from '../../testsUtilities/renderComponent';
import Modal from './Modal';

describe('Modal', () => {
  it('should display modal with component inside', () => {
    // given
    const component = document.createElement('p');
    component.textContent = 'Cześć, świecie';
    // when
    const testModal = renderComponent(Modal(component));
    const modalPopup = testModal.querySelector('.modalPopup');
    testModal.showModal();

    // then
    expect(modalPopup).toHaveClass('modalPopup--active');
    expect(testModal).toBeInTheDocument();
    expect(screen.getByText('Cześć, świecie')).toBeTruthy();
  });

  it('should not display modal after hide', () => {
    // given
    const component = document.createElement('p');
    component.textContent = 'Cześć, świecie';
    const testModal = renderComponent(Modal(component));
    const modalPopup = testModal.querySelector('.modalPopup');
    testModal.showModal();
    // when
    testModal.hideModal();
    // then
    expect(modalPopup).toHaveClass('modalPopup');
  });

  it('should change content on changeContent function', () => {
    // given

    const component = document.createElement('p');
    component.textContent = 'Cześć, świecie';
    const testModal = renderComponent(Modal(component));
    testModal.showModal();
    const newComponent = document.createElement('p');
    newComponent.textContent = 'Cześć, super świecie';

    // when

    testModal.changeContent(newComponent);

    // then

    expect(screen.getByText('Cześć, super świecie')).toBeTruthy();
  });
});
