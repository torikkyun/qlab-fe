function showModal(message) {
  const modal = document.getElementById("notification-modal");
  const messageEl = modal.querySelector(".modal-message");
  messageEl.textContent = message;
  modal.classList.add("show");
  const handleClose = () => {
    modal.classList.remove("show");
  };

  modal.querySelector(".modal-close").onclick = handleClose;
  modal.querySelector(".modal-confirm").onclick = handleClose;
}
