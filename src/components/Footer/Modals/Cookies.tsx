import React, { useContext } from "react";
import "../Footer.css";
import { ModalContext } from "../../../context/ModalContext";

interface CookiePolicyModalProps {
  closeModal: () => void;
}

const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({ closeModal }) => {
  const { openModal } = useContext(ModalContext);

  const handlePrivacyPolicyClick = (): void => {
    closeModal();
    openModal("privacyPolicy");
  };

  return (
    <div className="modal-overlay">
      <article
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-policy-title"
        style={{ maxWidth: "900px" }}
      >
        <div className="modal-close">
          <button onClick={closeModal} aria-label="Cerrar política de cookies">
            x
          </button>
        </div>

        <header>
          <h3 id="cookie-policy-title">Política de Cookies de FemCoders Club</h3>
          <p>
            <time dateTime="2025-11-09">Fecha de entrada en vigor: 29.09.2025</time>
          </p>
        </header>

        <div className="modal-body">
          <section>
            <h5>1. ¿Qué son las Cookies?</h5>
            <p>
              Las <strong>cookies</strong> son pequeños archivos de texto que se almacenan en tu navegador o dispositivo cuando visitas una página web. Su función es permitir que el sitio recuerde tu visita, mantenga sesiones activas y funcione correctamente.
            </p>
          </section>

          <section>
            <h5>2. Nuestro Compromiso y Uso de Cookies</h5>
            <p>
              En <strong>FemCoders Club</strong>, nuestra prioridad es tu privacidad. Por ello, <strong>solo utilizamos cookies técnicas o estrictamente necesarias</strong> para garantizar el correcto funcionamiento y la seguridad de esta web.
            </p>
            <p>
              <strong>No utilizamos</strong> cookies de seguimiento, de análisis, publicitarias, de perfiles de usuario ni de terceros con fines comerciales.
            </p>
            <p>
              Al utilizar únicamente cookies esenciales, <strong>no requerimos</strong> de un banner de consentimiento u opciones de configuración. Presentamos esta política con fines informativos y de total <strong>transparencia</strong>.
            </p>
          </section>

          <section>
            <h5>3. Cookies Utilizadas</h5>
            <p>En FemCoders Club utilizamos cookies únicamente para:</p>
            <ul>
              <li>Garantizar el funcionamiento y rendimiento básico del sitio web.</li>
              <li>Recordar ciertas preferencias básicas de la persona usuaria.</li>
            </ul>
          </section>

          <section>
            <h5>4. Gestión de tus Cookies</h5>
            <p>
              Puedes <strong>controlar y/o eliminar</strong> las cookies en cualquier momento a través de la configuración de tu navegador.
            </p>
            <p>
              <span role="img" aria-label="Advertencia">⚠️</span> <strong>Importante:</strong> La desactivación de las cookies técnicas puede <strong>afectar al funcionamiento correcto</strong> de esta página web, impidiendo el uso de ciertas funcionalidades esenciales.
            </p>
          </section>

          <section>
            <h5>5. Intercambio de Información Técnica</h5>
            <p>
              No compartimos tus datos para fines comerciales. Sin embargo, para el funcionamiento técnico de la plataforma, es posible que se trate información técnica limitada relacionada con la gestión del servicio junto a nuestros <strong>Proveedores de Servicios</strong> y bajo <strong>Cumplimiento Legal</strong>:
            </p>
            <ul>
              <li>
                <strong>Proveedores de servicios:</strong> Plataformas como Railway u otros
                servicios técnicos que nos ayudan a alojar y mantener esta web, así como
                servicios de red como Cloudflare y la gestión de dominio con Arsys.
              </li>
              <li>
                <strong>Cumplimiento legal:</strong> En caso de obligación legal, podríamos
                compartir información necesaria con las autoridades competentes.
              </li>
            </ul>
          </section>

          <section>
            <h5>6. Política de Privacidad</h5>
            <p>
              Si deseas más información sobre cómo tratamos tus datos personales, consulta
              nuestra{" "}
              <button onClick={handlePrivacyPolicyClick} className="link-button">
                política de privacidad
              </button>
              .
            </p>
          </section>

          <section>
            <h5>7. Contacto</h5>
            <p>
              Si tienes dudas o preguntas sobre esta política de cookies, puedes escribirnos a{" "}
              <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>.
            </p>
          </section>
        </div>

        <footer className="modal-footer">
          <button onClick={closeModal} className="tertiary-button">
            Aceptar
          </button>
        </footer>
      </article>
    </div>
  );
};

export default CookiePolicyModal;

