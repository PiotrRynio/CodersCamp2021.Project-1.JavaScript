import ModalButton from './ModalButton';

const Modal = () => {
  const modalPopup = document.createElement('div');

  modalPopup.classList.add('modalPopup');
  modalPopup.appendChild(ModalButton());
  ModalButton.addEventListener = ('click', modalPopup.classList.remove('modalPopup.active'));

  return modalPopup;
};
export default Modal;
