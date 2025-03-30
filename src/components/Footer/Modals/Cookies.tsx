import React, { useContext } from "react";
import "../Footer.css";
import { ModalContext } from "../../../context/ModalContext";

interface CookiePolicyModalProps {
  closeModal: () => void;
}

const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({
  closeModal,
}) => {
  const { openModal } = useContext(ModalContext);

  const handlePrivacyPolicyClick = () => {
    closeModal();
    openModal("privacyPolicy");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close">
          <button onClick={closeModal}>x</button>
        </div>

        <div>
          <h3>Política de cookies</h3>
        </div>

        <div className="modal-body">
          <p>
            Las cookies son pequeños fragmentos de texto que se almacenan en tu navegador cuando visitas una página web. Sirven para que el sitio recuerde tu visita y funcione correctamente.
          </p>

          <h3>Aviso de Cookies</h3>
          <p>
            Solo usamos cookies técnicas esenciales para garantizar el correcto funcionamiento de esta web. No utilizamos cookies de seguimiento ni con fines publicitarios. Aquí te explicamos cómo funcionan y cómo las gestionamos.
          </p>

          <h3>¿Qué son las cookies?</h3>
          <p>
            Son archivos de texto que se guardan en tu dispositivo cuando visitas un sitio web. Permiten funciones básicas como mantener sesiones activas o guardar preferencias temporales.
          </p>
          <p>
  Al no utilizar cookies de análisis ni publicidad, no es necesario que aceptes o configures nada. Te mostramos esta política únicamente con fines informativos.
</p>

          <h3>¿Cómo usamos las cookies?</h3>
          <p>
            En FemCoders Club utilizamos cookies únicamente para:
          </p>
          <ul>
            <li>Garantizar el funcionamiento y rendimiento del sitio.</li>
            <li>Recordar ciertas preferencias básicas del usuario.</li>
          </ul>
          <p>
            No compartimos tus datos con fines comerciales. Sin embargo, podemos compartir información limitada con:
          </p>
          <ul>
            <li>
              <strong>Proveedores de servicios:</strong> Plataformas como Railway u otros servicios técnicos que nos ayudan a alojar y mantener esta web.
            </li>
            <li>
              <strong>Cumplimiento legal:</strong> En caso de obligación legal, podríamos compartir información necesaria con las autoridades competentes.
            </li>
          </ul>

          <h3>¿Cómo puedes gestionar las cookies?</h3>
          <p>
            Puedes controlar y/o eliminar las cookies desde la configuración de tu navegador. Ten en cuenta que desactivar algunas puede afectar al funcionamiento de esta página.
          </p>

          <h3>Política de Privacidad</h3>
          <p>
            Si deseas más información sobre cómo tratamos tus datos, consulta nuestra{" "}
            <button onClick={handlePrivacyPolicyClick} className="link-button">
              política de privacidad
            </button>
            .
          </p>

          <h3>Contacto</h3>
          <p>
            Si tienes dudas o preguntas, puedes escribirnos a{" "}
            <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>.
          </p>
        </div>

        <div className="modal-footer">
          <button onClick={closeModal} className="tertiary-button">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyModal;

