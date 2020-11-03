import React from 'react';

function Modal({ modalOpen, children }) {
  return (
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Terms and Conditions</p>
          <button class="delete" aria-label="close" onClick={() => modalOpen(false)} />
        </header>
        <section class="modal-card-body">{children}</section>
        <footer class="modal-card-foot">
          <button class="button is-success" onClick={() => modalOpen(false)}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
