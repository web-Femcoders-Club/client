import React, { useContext, useRef } from "react";
import "../Footer.css";
import "./Documento.css";
import { X } from "lucide-react";
import { ModalContext } from "../../../context/ModalContext";
import BackToTop from "../../ui/BackToTop";
import { useDialogoModal } from "../../../hooks/useDialogoModal";

interface CookiePolicyModalProps {
  closeModal: () => void;
}

const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({ closeModal }) => {
  const { openModal } = useContext(ModalContext);
  const contentRef = useRef<HTMLElement | null>(null);
  useDialogoModal(contentRef, closeModal);

  const handlePrivacyPolicyClick = (): void => {
    closeModal();
    openModal("privacyPolicy");
  };

  return (
    <div className="modal-overlay documento-fondo">
      <article
        className="modal-content documento"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-policy-title"
        ref={contentRef}
        tabIndex={-1}
      >
        <div className="modal-close">
          <button onClick={closeModal} aria-label="Cerrar política de cookies">
            <X aria-hidden="true" />
          </button>
        </div>

        <header>
          <h3 id="cookie-policy-title">Política de Cookies de FemCoders Club</h3>
          <p>
            <time dateTime="2026-10-04">Fecha de entrada en vigor: 04.10.2026</time>
          </p>
        </header>

        <div className="modal-body">
          <section>
            <h5>1. ¿Qué son las cookies?</h5>
            <p>
              Las <strong>cookies</strong> son pequeños archivos de texto que una web guarda en tu
              navegador para recordar tu visita, mantener tu sesión abierta o funcionar
              correctamente. El navegador también tiene otro espacio parecido, el{" "}
              <strong>almacenamiento local</strong> (localStorage y sessionStorage), que sirve para
              lo mismo y que la normativa trata igual que las cookies. En esta política hablamos de
              los dos.
            </p>
          </section>

          <section>
            <h5>2. Cómo los usamos</h5>
            <p>
              En <strong>FemCoders Club</strong> solo usamos cookies y almacenamiento{" "}
              <strong>técnicos</strong>, los necesarios para que la web funcione y para recordar
              algunas preferencias que eliges tú. Nuestra web no pone ninguna cookie propia: todo lo
              que necesita lo guarda en el almacenamiento de tu navegador.
            </p>
            <p>
              <strong>No usamos</strong> herramientas de analítica, de seguimiento ni de
              publicidad, y no elaboramos perfiles con tu navegación. Por eso no te pedimos
              consentimiento: el aviso que ves la primera vez es informativo, y esta política está
              aquí para que sepas en todo momento qué se guarda y para qué.
            </p>
          </section>

          <section>
            <h5>3. Qué guardamos en tu navegador</h5>
            <p>
              <strong>Si inicias sesión</strong>, guardamos lo necesario para mantenerla abierta
              mientras navegas. Se borra solo al cerrar la pestaña o al cerrar sesión:
            </p>
            <ul>
              <li>
                <strong>Tu sesión</strong> (<code>authToken</code>, <code>isAuthenticated</code>,{" "}
                <code>userId</code>, <code>userRole</code>): para saber que has entrado y mostrarte
                las secciones de tu cuenta.
              </li>
              <li>
                <strong>Tus datos de perfil</strong> (<code>userName</code>,{" "}
                <code>userLastName</code>, <code>userEmail</code>, <code>userAvatar</code>): para
                saludarte por tu nombre y enseñarte tu avatar sin tener que pedirlos de nuevo en
                cada página.
              </li>
            </ul>
            <p>
              <strong>Tus preferencias</strong> se quedan en el navegador hasta que borres sus
              datos, para que no tengas que volver a elegirlas:
            </p>
            <ul>
              <li>
                <strong>Aviso de cookies</strong> (<code>cookieBannerDismissed</code>): recuerda que
                ya lo has cerrado, para no volver a mostrártelo.
              </li>
              <li>
                <strong>Menú lateral</strong> (<code>femcoders:menu-bienvenida</code>,{" "}
                <code>femcoders:menu-panel</code>): recuerda si lo dejaste abierto o cerrado en tu
                espacio de bienvenida o en el panel.
              </li>
              <li>
                <strong>Tu emoji</strong> (<code>userEmoji</code>, <code>emojiStats</code>):
                recuerda el emoji que eliges en tu bienvenida.
              </li>
            </ul>
          </section>

          <section>
            <h5>4. Contenido de otras plataformas</h5>
            <p>
              Algunas entradas del blog incluyen <strong>vídeos de YouTube</strong>. Al abrir una
              de esas entradas, el reproductor se carga desde YouTube, que puede guardar sus propias
              cookies según su política. Puedes consultarla en{" "}
              <a
                href="https://policies.google.com/technologies/cookies?hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                la política de cookies de Google
              </a>
              . El resto de la web no carga contenido de terceros que use cookies.
            </p>
          </section>

          <section>
            <h5>5. Cómo gestionarlos</h5>
            <p>
              Puedes <strong>ver y borrar</strong> las cookies y el almacenamiento local en
              cualquier momento desde la configuración de tu navegador.
            </p>
            <p>
              <strong>Ten en cuenta</strong> que, si los bloqueas, algunas partes de la web pueden
              dejar de funcionar como esperas: por ejemplo, no podrás mantener la sesión iniciada.
            </p>
          </section>

          <section>
            <h5>6. Intercambio de información técnica</h5>
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
            <h5>7. Política de privacidad</h5>
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
            <h5>8. Contacto</h5>
            <p>
              Si tienes dudas o preguntas sobre esta política de cookies, puedes escribirnos a{" "}
              <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>.
            </p>
          </section>
        </div>

        <footer className="modal-footer">
          <button onClick={closeModal} className="fc-boton fc-boton--noche">
            Aceptar
          </button>
        </footer>
        <BackToTop targetRef={contentRef} />
      </article>
    </div>
  );
};

export default CookiePolicyModal;

