import './Modal.css';

function Modal({ showModal, closeModal, title = null, children }) {

  return (
    <div className={`modal ${showModal ? 'show-modal' : ''}`} onClick={closeModal}>
  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <div className="modal-header">
      {title && <h2 className="modal-title">{title}</h2>}
      <button className="modal-close" onClick={closeModal}>✖</button>
    </div>
    <div className="modal-body">
      {children}
    </div>
  </div>
</div>

  );
}

export default Modal;
