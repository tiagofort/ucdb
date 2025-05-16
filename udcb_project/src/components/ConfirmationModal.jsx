const ConfirmationModal = ({ visible, onConfirm, onCancel }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Você confirma sua resposta?</p>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Sim</button>
          <button onClick={onCancel}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;