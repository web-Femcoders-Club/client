import React, { useState } from 'react';

import '../Footer.css';

const CookiePolicyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <a href="#" onClick={openModal} className="cookie-link">
        Política de cookies
      </a>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-close">
              <button onClick={closeModal}>x</button>
            </div>
            <div className="modal-header">
              <h3>Política de cookies</h3>
            </div>
            <div className="modal-body">
              <p>
                Las cookies son pequeños fragmentos de texto enviados por su navegador web por un sitio web que visita. Un archivo cookie se almacena en su navegador web y permite que el Servicio o un tercero lo reconozca y haga que su próxima visita sea más fácil y que el Servicio le resulte más útil.
              </p>
              <h3>Aviso de Cookies</h3>
              <p>
                Este sitio web utiliza cookies para mejorar la experiencia del usuario y proporcionar funcionalidades adicionales. Al utilizar nuestro sitio web, aceptas el uso de cookies de acuerdo con nuestra política de cookies.
              </p>
              <h4>¿Qué son las cookies?</h4>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
              </p>
              <h4>¿Cómo usamos las cookies?</h4>
              <p>
                Utilizamos cookies para varios propósitos, incluyendo:
              </p>
              <ul>
                <li>Mejorar la funcionalidad y rendimiento del sitio.</li>
                <li>Personalizar tu experiencia en el sitio.</li>
                <li>Analizar el uso del sitio para realizar mejoras.</li>
              </ul>
              <h4>¿Cómo puedes gestionar las cookies?</h4>
              <p>
                Puedes controlar y/o eliminar las cookies según tus preferencias. Para más detalles, consulta la sección de ayuda de tu navegador. Ten en cuenta que deshabilitar las cookies puede afectar la funcionalidad de este sitio y de otros sitios web.
              </p>
              <h4>Política de Privacidad</h4>
              <p>
                Para obtener más información sobre cómo manejamos tus datos personales y cookies, consulta nuestra politica de privacidad.
              </p>
              <p>
                Al continuar utilizando nuestro sitio web, aceptas el uso de cookies según lo descrito en este aviso.
              </p>
            </div>
            <div className="modal-footer">
              <button onClick={closeModal} className="tertiary-button"> 
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiePolicyModal;



