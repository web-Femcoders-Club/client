// src/components/Footer/modals/LegalNoticeModal.tsx
import React, { useContext } from "react";
import "../Footer.css";
import { ModalContext } from "../../../context/ModalContext";

interface LegalNoticeModalProps {
  closeModal: () => void;
}

const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ closeModal }) => {
  const { openModal } = useContext(ModalContext);

  const handlePrivacyPolicyClick = (): void => {
    closeModal();
    openModal("privacyPolicy");
  };

  const handleCookiePolicyClick = (): void => {
    closeModal();
    openModal("cookiePolicy");
  };

  return (
    <div className="modal-overlay">
      <article
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-notice-title"
        style={{ maxWidth: "900px" }}
      >
        <div className="modal-close">
          <button
            onClick={closeModal}
            aria-label="Cerrar aviso legal"
          >
            x
          </button>
        </div>

        <header>
          <h3 id="legal-notice-title">Aviso Legal de FemCoders Club</h3>
          <p>
            <time dateTime="2025-11-09">
              Fecha de entrada en vigor: 09.11.2025
            </time>
          </p>
        </header>

        <div className="modal-body">
          <section>
            <h5>1. Datos del Titular</h5>
            <p>
              De acuerdo con lo establecido por la Ley 34/2002, de 11 de julio,
              de Servicios de la Sociedad de la Información y de Comercio
              Electrónico (LSSI-CE), se informa de forma clara y accesible sobre
              la entidad titular de este sitio web:
            </p>
            <p>
              <strong>Nombre de la entidad:</strong> FemCoders Club (asociación
              sin ánimo de lucro)
              <br />
              <strong>NIF: G22435788</strong>
              <br />
              <strong>Domicilio social y fiscal:</strong> Calle Concepció Arenal 165 08027 Barcelona(ubicada en el
              Canòdrom - Ateneu d&apos;Innovació Digital i Democràtica,
              Barcelona)
              <br />
              <strong>Correo electrónico de contacto:</strong>{" "}
              <a href="mailto:info@femcodersclub.com">
                info@femcodersclub.com
              </a>
              <br />
              <strong>Sitio web oficial:</strong>{" "}
              <a
                href="https://femcodersclub.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://femcodersclub.com
              </a>
            </p>
          </section>

          <section>
            <h5>2. Finalidad del Sitio Web</h5>
            <p>
              Este sitio tiene como objetivo informar sobre las actividades,
              eventos, iniciativas y objetivos de la comunidad FemCoders Club.
              No se realiza venta directa de productos ni contratación en línea
              de servicios profesionales a través del sitio.
            </p>
            <p>
              Los contenidos publicados son de carácter informativo, divulgativo
              y comunitario, orientados a la promoción de la participación de
              mujeres en tecnología.
            </p>
          </section>

          <section>
            <h5>3. Propiedad Intelectual e Industrial</h5>
            <p>
              Todos los contenidos del sitio web, incluyendo a título enunciativo
              pero no limitativo: textos, imágenes, logotipos, marcas, nombres
              comerciales, diseño gráfico, documentos, vídeos y demás elementos
              multimedia, son propiedad de FemCoders Club o se utilizan con la
              debida autorización de sus titulares.
            </p>
            <p>
              Queda prohibida la reproducción, distribución, comunicación
              pública, puesta a disposición, transformación o cualquier otro
              uso de los contenidos sin el consentimiento expreso y por escrito
              de la entidad titular, salvo en los casos amparados por la ley.
            </p>
            <p>
              El uso no autorizado de los contenidos puede constituir una
              infracción de la normativa en materia de propiedad intelectual
              y/o industrial.
            </p>
          </section>

          <section>
            <h5>4. Responsabilidad sobre los Contenidos</h5>
            <p>
              FemCoders Club no se hace responsable del mal uso que terceras
              personas puedan hacer de la información publicada en este sitio
              web ni de los daños o perjuicios que pudieran derivarse del acceso,
              uso o interpretación de la misma.
            </p>
            <p>
              Aunque se realizan esfuerzos razonables para mantener la
              información actualizada y correcta, FemCoders Club no garantiza la
              ausencia de errores, inexactitudes u omisiones y se reserva el
              derecho a modificar, actualizar o eliminar contenidos sin previo
              aviso cuando lo considere oportuno.
            </p>
          </section>

          <section>
            <h5>5. Enlaces a Terceros</h5>
            <p>
              En el sitio web pueden aparecer enlaces a páginas o recursos
              externos (por ejemplo, redes sociales, plataformas de eventos
              como Eventbrite, herramientas colaborativas u otros sitios de
              interés).
            </p>
            <p>
              FemCoders Club no se responsabiliza de los contenidos, políticas
              de privacidad o prácticas de dichos sitios externos, que son
              responsabilidad exclusiva de sus respectivos titulares. Se
              recomienda a las personas usuarias que revisen las políticas
              legales y de privacidad de cada sitio enlazado.
            </p>
          </section>

          <section>
            <h5>6. Protección de Datos Personales</h5>
            <p>
              El tratamiento de los datos personales que se pudieran recabar a
              través de este sitio web se rige por la{" "}
              <button
                type="button"
                onClick={handlePrivacyPolicyClick}
                className="link-button"
              >
                Política de Privacidad
              </button>{" "}
              de FemCoders Club, donde se detallan las finalidades del
              tratamiento, la base legal, los plazos de conservación, tus
              derechos y cómo ejercerlos.
            </p>
            <p>
              De forma general, cualquier persona interesada puede ejercer sus
              derechos de acceso, rectificación, supresión, limitación del
              tratamiento, portabilidad u oposición escribiendo un correo a{" "}
              <a href="mailto:info@femcodersclub.com">
                info@femcodersclub.com
              </a>
              .
            </p>
          </section>

          <section>
            <h5>7. Uso de Cookies</h5>
            <p>
              El uso de cookies en este sitio web se describe detalladamente en
              nuestra{" "}
              <button
                type="button"
                onClick={handleCookiePolicyClick}
                className="link-button"
              >
                Política de Cookies
              </button>
              . En FemCoders Club utilizamos exclusivamente cookies técnicas o
              estrictamente necesarias para el funcionamiento del sitio.
            </p>
          </section>

          <section>
            <h5>8. Legislación Aplicable y Jurisdicción</h5>
            <p>
              Este aviso legal se rige por la legislación española. En caso de
              conflicto o discrepancia en la interpretación o aplicación de las
              condiciones aquí expuestas, y salvo que la normativa aplicable
              establezca otra cosa, las partes se someten a los Juzgados y
              Tribunales de la ciudad de Barcelona.
            </p>
          </section>

          <section>
            <h5>9. Contacto</h5>
            <p>
              Para cualquier consulta relacionada con este aviso legal o con el
              sitio web, puedes escribirnos a{" "}
              <a href="mailto:info@femcodersclub.com">
                info@femcodersclub.com
              </a>
              .
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

export default LegalNoticeModal;
