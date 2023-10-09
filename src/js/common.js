const modals = document.querySelectorAll(".modal");

export default {
  closeModals: () => {
    modals.forEach((modal) => {
      this.closeModal(modal);
    });
  },
  closeModal: (modal) => {
    if (modal.classList.contains("open")) {
      modal.classList.remove("open");
    }
  },
  openModal: (modal) => {
    modal.classList.add("open");
  },
};
