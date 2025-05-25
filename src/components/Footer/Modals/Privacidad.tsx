import React, { useState, useRef, useEffect, useContext } from "react";
import "../Footer.css";
import { ModalContext } from "../../../context/ModalContext";

interface PrivacyPolicyModalProps {
  closeModal: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  closeModal,
}) => {
  const { openModal } = useContext(ModalContext);
  const [showMore, setShowMore] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [showMore]);

  const handleCookiesPolicyClick = () => {
    closeModal();
    openModal("cookiePolicy");
  };

  return (
    <div className="modal-overlay">
     <div className="modal-content" role="dialog" aria-modal="true">

        <div className="modal-close">
          <button onClick={closeModal}>x</button>
        </div>
        <div>
          <h3>Política de Privacidad y Términos de Uso</h3>
        </div>
        <div className="modal-body" ref={modalRef}>
          <p>
            En <span>FemCoders Club</span>, valoramos profundamente tu
            privacidad. Esta{" "}
            <strong>Política de Privacidad y los Términos de Uso</strong>{" "}
            describe cómo recopilamos, usamos y divulgamos la información
            obtenida de nuestras integrantes en nuestro directorio web. <br />
            Al proporcionarnos tu información, aceptas que tu información
            personal se manejará según lo descrito en esta Política. Tu uso de
            nuestro sitio y cualquier disputa sobre la privacidad están sujetos
            a esta <strong>Política y a los Términos de Uso</strong> de nuestro
            sitio, que incluyen limitaciones aplicables a los daños y la
            resolución de disputas. <br />
            Los Términos de Uso del sitio web de FemCoders Club se incorporan
            por referencia en esta Política.
          </p>

          <br />
          <h5>¿Qué información recopilamos sobre ti y por qué?</h5>
          <p>
            Podemos recopilar información sobre ti directamente cuando te
            registras en el directorio mediante el formulario web de nuestro
            sitio o cuando envías una consulta a través del formulario
            correspondiente. También podemos recopilar información durante
            encuestas eventuales que realicemos.
          </p>
          <p>
            <span>Información que podemos solicitarte:</span>
            <br />
            ● Te pediremos que te registres en nuestro directorio para acceder a
            ciertos servicios, como recibir beneficios o acceder a contenido
            específico en nuestro sitio web. En estas áreas, podemos solicitar
            tu nombre, dirección de correo electrónico y otra información
            opcional, como detalles sobre tu formación académica.
            <br />● También podemos administrar cuestionarios, encuestas y otras
            herramientas de investigación, solicitándote información como parte
            de tu participación. Estas actividades siempre serán opcionales y de
            participación voluntaria.
          </p>

          <p>
            <span>Información que recopilamos automáticamente:</span>
            <br />
            Podemos recopilar automáticamente información sobre tu uso de
            nuestro sitio a través de cookies, balizas web (también conocidas
            como "web beacons" o "clear GIFs"), archivos de registro y otras
            tecnologías. Esto incluye tu nombre de dominio, tipo de navegador y
            sistema operativo, páginas web visitadas, enlaces seleccionados,
            dirección IP, tiempo de visita y URL de referencia. Para más
            detalles, consulta la sección{" "}
            <button onClick={handleCookiesPolicyClick} className="link-button">
              {" "}
              Política de Cookies
            </button>{" "}
            a continuación.
          </p>

          <h5>¿Cómo usamos tu información?</h5>
          <p>
            Utilizamos la información que nos brindas, incluida tu información
            personal, para los siguientes propósitos:
          </p>
          <ul>
            <li>
              Generar estadísticas y comunicarnos contigo: Utilizamos tu
              información para generar estadísticas, comunicarnos contigo y
              responder a tus consultas y solicitudes.
            </li>
            <li>
              Personalizar contenido e información: Personalizamos el contenido
              e información que te enviamos o mostramos, mejoramos nuestro sitio
              y actividades, y realizamos investigaciones y análisis.
            </li>
            <li>
  Notificaciones sobre eventos: Si has asistido a alguno de nuestros eventos, es posible que recibas comunicaciones futuras con invitaciones a otros eventos organizados por FemCoders Club. Si no deseas recibir este tipo de correos, puedes hacérnoslo saber escribiéndonos a <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>.
</li>

          </ul>
          {!showMore && (
            <button onClick={toggleShowMore} className="tertiary-button">
              Saber más
            </button>
          )}
          {showMore && (
            <>
              <h5>¿Cómo compartimos tu información?</h5>
              <p>Podemos compartir tu información de las siguientes maneras:</p>
              <ul>
                <li>
                  Compartir con otros miembros: Cualquier información que
                  autorices a publicar será visible para otros miembros en el
                  sitio.
                </li>
                <li>
                  Proveedores de servicios:Podemos compartir la información con
                  proveedores de servicios que nos ayudan a operar y mejorar
                  nuestro sitio.
                </li>
                <li>
                  Cumplimiento legal: Podemos divulgar información si creemos
                  que es necesario para cumplir con una ley, regulación o
                  proceso legal, o para proteger la seguridad, los derechos y la
                  propiedad de FemCoders Club y nuestros usuarios.
                </li>
              </ul>
              <h5>Nuestro uso de cookies y otros mecanismos de seguimiento</h5>
              <p>
                Utilizamos cookies, GIFs transparentes y otras tecnologías para
                rastrear información sobre tu uso de nuestro sitio y servicios.
                Podemos combinar esta información con otra información personal
                que recopilamos de ti.
              </p>
              <p>
                <button
                  onClick={handleCookiesPolicyClick}
                  className="link-button"
                >
                  {" "}
                  Política de Cookies
                </button>{" "}
                Transferimos identificadores alfanuméricos a tu computadora
                mediante tu navegador web. Puedes ajustar las opciones de tu
                navegador para bloquearlas.
                <br />
                <strong>GIFs transparentes:</strong> Son pequeños gráficos
                incrustados de forma invisible en las páginas web para rastrear
                actividades. Los utilizamos para administrar el contenido y
                recopilar estadísticas.
                <br />
                <strong>Análisis de terceros:</strong> Utilizamos dispositivos y
                aplicaciones automatizadas para evaluar el uso de nuestros
                sitios y servicios. Esta información puede ser combinada por
                terceros proveedores de análisis.
              </p>
              <h5>Uso de imágenes en eventos</h5>
<p>
  Durante nuestros eventos, podemos tomar fotografías o capturas de vídeo para documentar la actividad. Estas imágenes pueden ser utilizadas posteriormente en nuestras redes sociales, página web o materiales promocionales, siempre con el objetivo de visibilizar las actividades de la comunidad. Si no deseas que tu imagen sea publicada, puedes comunicarlo escribiéndonos a <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>.
</p>

              <h5>Enlaces de terceros</h5>
              <p>
                Nuestro sitio y servicios pueden contener enlaces a sitios web
                de terceros. El acceso y uso de estos sitios no está gobernado
                por esta Política, sino por las políticas de privacidad de los
                sitios web de terceros.
              </p>
              <h5>Comunicaciones de nosotras</h5>
              <p>
                Podemos enviarte correos electrónicos informativos periódicos.
                Puedes optar por no recibir dichas comunicaciones siguiendo las
                instrucciones de exclusión que figuran en el correo electrónico.
              </p>
              <h5>Seguridad de tu información personal</h5>
              <p>
                Hemos implementado medidas de seguridad para proteger la
                información que recopilamos, pero ninguna medida puede
                garantizar el 100% de seguridad.
              </p>
              <h5>Cambios a esta política</h5>
              <p>
                Esta Política está vigente a partir de la Fecha de vigencia
                establecida anteriormente. Podemos cambiarla ocasionalmente, por
                lo que te recomendamos revisarla periódicamente. Publicaremos
                cualquier cambio aquí y, si es relevante, te notificaremos con
                antelación.
              </p>
              <h5>Contacto</h5>
              <p>
                Tu privacidad es importante para nosotras. Si tienes alguna
                pregunta o inquietud, no dudes en ponerte en contacto con
                nosotras en{" "}
                <a href="mailto:info@femcodersclub.com">
                  {" "}
                  <span>info@femcodersclub.com</span>
                </a>
                .
              </p>
              <div className="flex justify-start mt-4">
                <button onClick={closeModal} className="tertiary-button">
                  Aceptar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
