const ModalContent = (PlayerAnswers, NpcAnswers) => {
  const modalContent = document.createElement('b');

  modalContent.showResults = () => {
    const message =
      'Czystość Twoich wyników wynosi XX%. Zająłeś XX miejsce w rankingu. Konkurencja uzyskała XX%. Jak się nazywasz?';
    return message;
  };
};

export default ModalContent;
