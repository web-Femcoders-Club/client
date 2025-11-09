import React, { useState, useRef, useEffect, useContext } from "react";
import "../Footer.css";
import { ModalContext } from "../../../context/ModalContext";

interface PrivacyPolicyModalProps {
  closeModal: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ closeModal }) => {
  const { openModal } = useContext(ModalContext);
  const [showMore, setShowMore] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleShowMore = (): void => {
    setShowMore((prev) => !prev);
  };

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [showMore]);

  const handleCookiesPolicyClick = (): void => {
    closeModal();
    openModal("cookiePolicy");
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        style={{ maxWidth: "900px" }} 
      >
        <div className="modal-close">
          <button onClick={closeModal}>x</button>
        </div>

        <div>
          <h3>Política de Privacidad de FemCoders Club</h3>
          <h4>Fecha de entrada en vigor: 29.09.2025</h4>
        </div>

        <div className="modal-body" ref={modalRef}>
          <p>
            En <strong>FemCoders Club</strong> nos tomamos muy en serio la privacidad de las personas
            que forman parte de nuestra comunidad. Esta Política de Privacidad explica qué datos
            recopilamos, con qué finalidad y cuáles son tus derechos. Nos comprometemos a tratar la
            información personal de forma responsable, transparente y conforme al Reglamento General
            de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
          </p>

          <h5>1. Responsable del Tratamiento</h5>
          <p>
            <strong>Nombre:</strong> FemCoders Club (asociación sin ánimo de lucro)
            <br />
            <strong>NIF: G22435788</strong>
            <br />
            <strong>Domicilio social:</strong> Calle Concepció Arenal 165 08027 Barcelona (Canòdrom, Barcelona)
            <br />
            <strong>Correo electrónico de contacto:</strong>{" "}
            <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>
          </p>

          <h5>2. Datos que Recopilamos y Finalidades</h5>
          <ul>
            <li>
              <strong>Formulario de contacto:</strong> nombre, correo electrónico y mensaje, para
              responder tus consultas.
            </li>
            <li>
              <strong>Inscripción a eventos:</strong> nombre, correo electrónico y datos logísticos
              necesarios, para gestionar tu participación y enviarte información relacionada.
            </li>
            <li>
              <strong>Newsletter:</strong> dirección de correo electrónico, solo si te suscribes
              voluntariamente, para enviarte noticias de nuestras actividades.
            </li>
            <li>
              <strong>Directorio de integrantes:</strong> datos básicos como nombre, email y datos
              opcionales (formación, perfil profesional), visibles solo para otras integrantes.
            </li>
            <li>
              <strong>Encuestas internas:</strong> participación voluntaria; los datos se usan de
              forma agregada y anónima para mejorar nuestras actividades.
            </li>
            <li>
              <strong>Cookies técnicas:</strong> necesarias para el correcto funcionamiento del
              sitio web. No usamos cookies de terceros ni de analítica. Más info en la{" "}
              <button onClick={handleCookiesPolicyClick} className="link-button">
                Política de Cookies
              </button>
              .
            </li>
            <li>
              <strong>Fotografías y vídeos de eventos:</strong> ver el apartado específico más
              abajo.
            </li>
          </ul>

          {!showMore && (
            <button onClick={toggleShowMore} className="tertiary-button">
              Saber más
            </button>
          )}

          {showMore && (
            <>
              <h5>3. Base Legal del Tratamiento</h5>
              <p>Tratamos tus datos sobre las siguientes bases jurídicas:</p>
              <ul>
                <li>
                  <strong>Consentimiento expreso:</strong> cuando te inscribes, participas o te
                  suscribes voluntariamente.
                </li>
                <li>
                  <strong>Interés legítimo:</strong> para la difusión de actividades y la gestión
                  interna de eventos y comunidad.
                </li>
              </ul>
              <p>
                No realizamos decisiones automatizadas ni elaboramos perfiles basados únicamente en
                el tratamiento automatizado de tus datos.
              </p>

              <h5>4. Conservación de los Datos</h5>
              <p>
                Tus datos se conservarán el tiempo necesario para cumplir la finalidad para la que
                fueron recogidos o hasta que solicites su supresión. A modo orientativo:
              </p>
              <ul>
                <li>
                  <strong>Contacto:</strong> hasta responder la consulta y cerrar el seguimiento.
                </li>
                <li>
                  <strong>Newsletter:</strong> hasta que solicites la baja.
                </li>
                <li>
                  <strong>Eventos:</strong> hasta la finalización del evento y la publicación del
                  material relacionado.
                </li>
              </ul>

              <h5>5. Cesiones de Datos y Encargados del Tratamiento</h5>
              <p>
                No compartimos tus datos personales con terceros, salvo obligación legal o cuando
                sea estrictamente necesario para prestar un servicio.
              </p>
              <p>
                Podemos utilizar plataformas externas (como servicios de formularios, gestión de
                eventos o boletines) que actúan como encargados del tratamiento bajo contratos
                adecuados conforme al RGPD. Actualmente usamos <strong>Eventbrite</strong> para la
                gestión de algunos eventos.
              </p>

              <h5>6. Transferencias Internacionales de Datos</h5>
              <p>
                Algunos de nuestros proveedores tecnológicos (como plataformas de eventos o
                infraestructura técnica) pueden estar ubicados fuera del Espacio Económico Europeo
                o tener infraestructuras en varios países. En esos casos, nos aseguramos de que
                existan garantías adecuadas, como decisiones de adecuación de la Comisión Europea o
                cláusulas contractuales tipo aprobadas por la UE.
              </p>

              <h5>7. Tus Derechos</h5>
              <p>
                Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición,
                limitación del tratamiento y portabilidad escribiendo a{" "}
                <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>. También puedes
                retirar tu consentimiento en cualquier momento.
              </p>
              <p>
                Si consideras que no se ha respetado tu derecho a la protección de datos, puedes
                presentar una reclamación ante la Agencia Española de Protección de Datos (
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
                  www.aepd.es
                </a>
                ).
              </p>

              <h5>8. Seguridad</h5>
              <p>
                Aplicamos medidas técnicas y organizativas razonables para proteger tus datos. El
                sitio web se aloja en <strong>Railway</strong>, utiliza <strong>Cloudflare</strong>{" "}
                como intermediario de red y el dominio está gestionado con <strong>Arsys</strong>.
                Todos estos proveedores ofrecen garantías de protección de datos conforme al RGPD.
              </p>

              <h5>9. Uso de Imágenes en Eventos y Actividades</h5>
              <p>
                Durante nuestros eventos, podemos tomar fotografías o vídeos con el objetivo de
                documentar y visibilizar las actividades de la comunidad. Estas imágenes pueden ser
                utilizadas en:
              </p>
              <ul>
                <li>Nuestra web oficial: https://femcodersclub.com</li>
                <li>Redes sociales oficiales de FemCoders Club</li>
                <li>Materiales divulgativos o promocionales propios</li>
              </ul>
              <p>
                Siempre con fines informativos y nunca con fines comerciales. No usamos las imágenes
                en contextos ajenos.
              </p>
              <p>
                <strong>Base legal:</strong> interés legítimo de la asociación en difundir sus
                actividades y, en su caso, consentimiento expreso.
              </p>
              <p>
                <strong>Derecho de oposición:</strong> si no deseas aparecer en las imágenes, puedes
                comunicarlo antes o durante el evento. También puedes solicitar la retirada de una
                imagen escribiendo a{" "}
                <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>.
              </p>
              <p>
                <strong>Menores:</strong> FemCoders Club no publicará imágenes de menores de 14 años
                sin el consentimiento explícito de su madre, padre o tutor legal.
              </p>

              <h5>10. Uso de Cookies</h5>
              <p>
                Solo utilizamos cookies propias de carácter técnico necesarias para el
                funcionamiento del sitio. No usamos cookies de terceros, ni de seguimiento ni de
                publicidad. No almacenamos información personal mediante cookies.
              </p>
              <p>
                Puedes configurar tu navegador para bloquearlas, aunque esto puede afectar al
                funcionamiento de algunas secciones del sitio. Para más detalles, consulta la{" "}
                <button onClick={handleCookiesPolicyClick} className="link-button">
                  Política de Cookies
                </button>
                .
              </p>

              <h5>11. Participación en Redes Sociales</h5>
              <p>
                La participación en nuestras redes sociales se rige por las políticas de privacidad
                de cada plataforma. FemCoders Club no extrae datos personales desde estas
                plataformas, salvo que se establezca un contacto directo por mensaje o formulario
                externo.
              </p>

              <h5>12. Cambios a esta Política</h5>
              <p>
                Podemos actualizar esta política para adaptarla a cambios legales o funcionales. Te
                avisaremos por medios razonables si se introducen cambios relevantes.
              </p>

              <h5>13. Contacto</h5>
              <p>
                Para cualquier duda, ejercicio de derechos o comentarios sobre esta política,
                escríbenos a{" "}
                <a href="mailto:info@femcodersclub.com">
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



