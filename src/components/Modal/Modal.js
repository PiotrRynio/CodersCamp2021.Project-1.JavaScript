const Modal = (componentToShow, parentComponent) => {
  const modalOverlay = document.createElement('div');
  const modal = document.createElement('section');
  modalOverlay.classList.add('overlay');
  modal.classList.add('modalPopup');
  modalOverlay.append(modal);

  const closeModal = () => {
    parentComponent.removeChild(modalOverlay);
  };

  const changeModalContent = (newModalContent) => {
    modal.removeChild(componentToShow);
    newModalContent.setOnModalClose(closeModal);
    modal.append(newModalContent);
  };

  componentToShow.setOnModalClose(closeModal);
  componentToShow.setOnChangeContent(changeModalContent);

  modal.append(componentToShow);
  return modalOverlay;
};

export default Modal;
