import { useState, useRef, useEffect, MouseEvent } from 'react';
import '../Footer.css';

const PrivacyPolicyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowMore(false);
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <a href="#" onClick={openModal} className="cookie-link">
        Política de Privacidad
      </a>
      {isOpen && (
        <div className="modal-overlay">
          <div ref={modalRef} className="modal-content">
            <div className="modal-close">
              <button onClick={closeModal}>x</button>
            </div>
            <div className="modal-header">
              <h2>Política de Privacidad y Términos de Uso</h2>
            </div>
            <div className="modal-body">
              <p>
                En FemCoders Club, valoramos profundamente tu privacidad. Esta Política de Privacidad y los Términos de Uso describen cómo recopilamos, usamos y divulgamos la información obtenida de nuestras integrantes en nuestro directorio web. Al proporcionarnos tu información, aceptas que tu información personal se manejará según lo descrito en esta Política. Tu uso en nuestro sitio y cualquier disputa sobre la privacidad están sujetos a esta Política y a los Términos de Uso de nuestro sitio, que incluyen limitaciones aplicables a los daños y la resolución de disputas. Los Términos de Uso del sitio web de FemCoders Club se incorporan por referencia en esta Política.
              </p>
              <h4>¿Qué información recopilamos sobre ti y por qué?</h4>
              <p>
                Podemos recopilar información sobre ti directamente cuando te registras en el directorio mediante el formulario web de nuestro sitio o cuando envías una consulta a través del formulario correspondiente. También podemos recopilar información durante encuestas eventuales que realicemos.
              </p>
              <p>
                <strong>Información que podemos solicitarte:</strong><br />
                Te pediremos que te registres en nuestro directorio para acceder a ciertos servicios, como recibir beneficios o acceder a contenido específico en nuestro sitio web. En estas áreas, podemos solicitar tu nombre, dirección de correo electrónico y otra información opcional, como detalles sobre tu formación académica. También podemos administrar cuestionarios, encuestas y otras herramientas de investigación y pedirte información como parte de tu participación, siendo siempre opcional y de participación voluntaria.
              </p>
              <p>
                <strong>Información que recopilamos automáticamente:</strong><br />
                Podemos recopilar automáticamente información sobre tu uso de nuestro sitio a través de cookies, balizas web, script java, archivos de registro y otras tecnologías. Esto incluye tu nombre de dominio, tipo de navegador y sistema operativo, páginas web visitadas, enlaces seleccionados, dirección IP, tiempo de visita y URL de referencia. Para más detalles, consulta la sección "Cookies y otros mecanismos de seguimiento" a continuación.
              </p>
              <h4>¿Cómo usamos tu información?</h4>
              <p>
                Utilizamos la información que nos brindas, incluida tu información personal, para los siguientes propósitos:
              </p>
              <ul>
                <li>Generar estadísticas y comunicarnos contigo: Utilizamos tu información para generar estadísticas, comunicarnos contigo y responder a tus consultas y solicitudes.</li>
                <li>Personalizar contenido e información: Personalizamos el contenido e información que te enviamos o mostramos, mejoramos nuestro sitio y actividades, y realizamos investigaciones y análisis.</li>
              </ul>
              {!showMore && (
                <button onClick={toggleShowMore} className="tertiary-button">
                  Saber más
                </button>
              )}
              {showMore && (
                <>
                  <h4>¿Cómo compartimos tu información?</h4>
                  <p>
                    Podemos compartir tu información de las siguientes maneras:
                  </p>
                  <ul>
                    <li>Compartir con otros miembros: Cualquier información que autorices a publicar será visible para otros miembros en el sitio.</li>
                    <li>Protección propia y de otros: Podemos divulgar información si creemos que es necesario investigar, prevenir o tomar medidas con respecto a actividades ilegales o situaciones que impliquen amenazas potenciales para la seguridad.</li>
                  </ul>
                  <h4>Nuestro uso de cookies y otros mecanismos de seguimiento</h4>
                  <p>
                    Utilizamos cookies, GIFs transparentes y otras tecnologías para rastrear información sobre tu uso de nuestro sitio y servicios. Podemos combinar esta información con otra información personal que recopilamos de ti.
                  </p>
                  <p>
                    <strong>Cookies:</strong> Transferimos identificadores alfanuméricos a tu computadora mediante tu navegador web. Puedes ajustar las opciones de tu navegador para bloquearlas.<br />
                    <strong>GIFs transparentes:</strong> Son pequeños gráficos incrustados de forma invisible en las páginas web para rastrear actividades. Los utilizamos para administrar el contenido y recopilar estadísticas.<br />
                    <strong>Análisis de terceros:</strong> Utilizamos dispositivos y aplicaciones automatizadas para evaluar el uso de nuestros sitios y servicios. Esta información puede ser combinada por terceros proveedores de análisis.
                  </p>
                  <h4>Enlaces de terceros</h4>
                  <p>
                    Nuestro sitio y servicios pueden contener enlaces a sitios web de terceros. El acceso y uso de estos sitios no está gobernado por esta Política, sino por las políticas de privacidad de los sitios web de terceros.
                  </p>
                  <h4>Comunicaciones de nosotras</h4>
                  <p>
                    Podemos enviarte correos electrónicos informativos periódicos. Puedes optar por no recibir dichas comunicaciones siguiendo las instrucciones de exclusión que figuran en el correo electrónico.
                  </p>
                  <h4>Seguridad de tu información personal</h4>
                  <p>
                    Hemos implementado medidas de seguridad para proteger la información que recopilamos, pero ninguna medida puede garantizar el 100% de seguridad.
                  </p>
                  <h4>Cambios a esta política</h4>
                  <p>
                    Esta Política está vigente a partir de la Fecha de vigencia establecida anteriormente. Podemos cambiarla ocasionalmente, por lo que te recomendamos revisarla periódicamente. Publicaremos cualquier cambio aquí y, si es relevante, te notificaremos con antelación.
                  </p>
                  <h4>Contacto</h4>
                  <p>
                    Tu privacidad es importante para nosotras. Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto con nosotras.
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
      )}
    </>
  );
};

export default PrivacyPolicyModal;

