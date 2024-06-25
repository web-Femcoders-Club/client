import React from 'react';
import { createPortal } from 'react-dom';
import bgModal from '../../../../public/bgModal.svg';
import './ConfirmationModal.css'; 

interface ConfirmationModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={bgModal} className="modal-background" alt="Background" />
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <h2 className="modal-title">¡Mensaje enviado con éxito!</h2>
          <p>En breve nos comunicaremos contigo</p>
          <button className="secondary-button" onClick={onClose}>Aceptar</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmationModal;
