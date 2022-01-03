const Modal = (componentToShow, parentComponent) => {
  const modalOverlay = document.createElement('div');
  const modal = document.createElement('section');
  modalOverlay.classList.add('overlay');
  modal.classList.add('modalPopup');
  modalOverlay.append(modal);

  const closeModal = () => {
    parentComponent.removeChild(modalOverlay);
  };

  componentToShow.setOnModalClose(closeModal);

  modal.append(componentToShow);
  return modalOverlay;
};

export default Modal;
