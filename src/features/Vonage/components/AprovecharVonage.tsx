import React from "react";
import { Link } from "react-router-dom";
import "../../Welcome/components/vonage.css";

/**
 * Qué puede hacer una usuaria con la colaboración de Vonage (#102).
 *
 * Va después del código: arriba se acaba de dar algo, y aquí se explica para qué
 * sirve.
 *
 * ## El programa piloto está cerrado
 *
 * Sus inscripciones cerraron el 18 de octubre de 2026 (server#147). El aviso de
 * cierre de arriba, la etiqueta de esta tarjeta y la noticia
 * /noticias/proyecto-piloto-apis-vonage cuentan lo mismo.
 */
const AprovecharVonage: React.FC = () => (
  <section className="vonage vonage--aprovechar" aria-labelledby="aprovechar-titulo">
    {/* La misma barra de cuatro colores que la tarjeta del código, para que los
        dos bloques de Vonage se lean como uno solo. Decorativa. */}
    <div className="vonage__barra" aria-hidden="true" />

    <div className="vonage__cuerpo">
      <h2 id="aprovechar-titulo" className="vonage__titulo">
        Qué puedes hacer con esta colaboración
      </h2>

      <p className="vonage__texto">
        Gracias a nuestra colaboración con Vonage, puedes explorar sus APIs por
        tu cuenta o participar en proyectos en equipo con otras mujeres de la
        comunidad.
      </p>

      <div className="vonage__caminos">
        <div className="vonage__camino">
          <h3 className="vonage__caja-titulo">Por tu cuenta, desde hoy</h3>

          <ul className="vonage__lista">
            <li>
              Utiliza tus 20 € de crédito para experimentar con las APIs de
              Vonage: enviar SMS, implementar sistemas de verificación o integrar
              videollamadas en tus aplicaciones.
            </li>
            <li>
              Accede al espacio de FemCoders Club en Vonage, donde encontrarás
              formación, recursos técnicos y novedades sobre sus eventos.
            </li>
            <li>
              Desarrolla tus propias ideas, amplía tus conocimientos y crea
              proyectos que podrás incorporar a tu portfolio.
            </li>
          </ul>
        </div>

        <div className="vonage__camino vonage__camino--programa">
          <div className="vonage__camino-cabecera">
            <h3 className="vonage__caja-titulo">En equipo: programa piloto</h3>
            {/*
              Sello redondo sobre la esquina. «Inscripciones cerradas» y no
              «Cerrado», que daría a entender que el programa ha terminado. Va
              justo después del título para que se lea en ese orden.
            */}
            <span className="vonage__sello">Inscripciones cerradas</span>
          </div>

          <p className="vonage__camino-texto">
            Durante seis semanas, las participantes desarrollan proyectos en
            pequeños equipos, 100 % online, con el acompañamiento de mentoras de
            FemCoders Club y créditos para utilizar las APIs de Vonage.
          </p>

          <p className="vonage__camino-texto">
            Una oportunidad para aprender, compartir conocimientos y crear
            soluciones reales, independientemente de tu nivel de experiencia.
          </p>

          <p className="vonage__camino-texto vonage__camino-texto--llamada">
            ¿Te gustaría participar en la próxima edición? Inscríbete en nuestra{" "}
            <Link
              to="/welcome#lista-espera"
              className="vonage__enlace vonage__enlace--claro foco-visible"
            >
              lista de espera
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AprovecharVonage;
