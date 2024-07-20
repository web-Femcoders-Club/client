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
            Las cookies son pequeños fragmentos de texto enviados por su
            navegador web por un sitio web que visitas. Un archivo cookie se
            almacena en tu navegador web y permite que el Servicio o un tercero
            lo reconozca y haga que tu próxima visita sea más fácil y que el
            Servicio te resulte más útil.
          </p>
          <h3>Aviso de Cookies</h3>
          <p>
            Este sitio web utiliza cookies para mejorar la experiencia del
            usuario y proporcionar funcionalidades adicionales. Al utilizar
            nuestro sitio web, aceptas el uso de cookies de acuerdo con nuestra
            política de cookies.
          </p>
          <h3>¿Qué son las cookies?</h3>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu
            dispositivo cuando visitas un sitio web. Se utilizan ampliamente
            para hacer que los sitios web funcionen de manera más eficiente, así
            como para proporcionar información a los propietarios del sitio.
          </p>
          <h3>¿Cómo usamos las cookies?</h3>
          <p>
            En FemCoders Club utilizamos cookies para los siguientes propósitos:
          </p>
          <ul>
            <li>Mejorar la funcionalidad y el rendimiento del sitio web.</li>
            <li>Personalizar tu experiencia en el sitio.</li>
            <li>
              Analizar el uso del sitio para realizar mejoras continuas. Esto
              incluye saber qué secciones son más visitadas y cuáles no, para
              así optimizar nuestro contenido.
            </li>
          </ul>
          <p>
            No utilizamos las cookies para vender o compartir tus datos con
            terceros para sus propios fines comerciales. Sin embargo, podemos
            compartir información recopilada a través de cookies en las
            siguientes circunstancias:
          </p>
          <ul>
            <li>
              **Proveedores de servicios:** Podemos compartir la información con
              proveedores de servicios que nos ayudan a operar y mejorar nuestro
              sitio.
            </li>
            <li>
              **Cumplimiento legal:** Podemos divulgar información si creemos
              que es necesario para cumplir con una ley, regulación o proceso
              legal, o para proteger la seguridad, los derechos y la propiedad
              de FemCoders Club y nuestros usuarios.
            </li>
          </ul>
          <h3>¿Cómo puedes gestionar las cookies?</h3>
          <p>
            Puedes controlar y/o eliminar las cookies según tus preferencias.
            Para más detalles, consulta la sección de ayuda de tu navegador. Ten
            en cuenta que deshabilitar las cookies puede afectar la
            funcionalidad de este sitio y de otros sitios web.
          </p>
          <h3>Política de Privacidad</h3>
          <p>
            Para obtener más información sobre cómo manejamos tus datos
            personales y cookies, consulta nuestra{" "}
            <button onClick={handlePrivacyPolicyClick} className="link-button">
              política de privacidad
            </button>
            .
          </p>

          <h5>Contacto</h5>
          <p>
            Si tienes alguna pregunta o inquietud sobre nuestra política de
            cookies, no dudes en ponerte en contacto con nosotras en{" "}
           <span> <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>.</span>
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
