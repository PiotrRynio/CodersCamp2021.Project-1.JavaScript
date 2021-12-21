const Modal = (componentToShow) => {
  const modalPopup = document.createElement('div');
  modalPopup.classList.add('modalPopup');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  overlay.showModal = () => {
    modalPopup.classList.add('modalPopup--active');
    overlay.classList.add('overlay--active');
  };

  overlay.hideModal = () => {
    modalPopup.classList.remove('modalPopup--active');
    overlay.classList.remove('overlay--active');
  };

  overlay.changeContent = (newContentToShow) => {
    modalPopup.innerHTML = '';
    modalPopup.append(newContentToShow);
  };

  overlay.append(modalPopup);
  modalPopup.append(componentToShow);
  return overlay;
};
export default Modal;
