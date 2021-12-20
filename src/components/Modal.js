const Modal = (componentToShow) => {
  const modalPopup = document.createElement('div');

  modalPopup.classList.add('modalPopup');

  modalPopup.append(componentToShow);

  return modalPopup;
};
export default Modal;
