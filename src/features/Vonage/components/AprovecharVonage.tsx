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
        Qué puedes hacer con esto
      </h2>

      <p className="vonage__texto">
        La colaboración con Vonage te abre dos caminos, y no tienes que elegir:
        probar sus APIs por tu cuenta o construir en equipo con la comunidad.
      </p>

      <div className="vonage__caminos">
        <div className="vonage__camino">
          <h3 className="vonage__caja-titulo">Por tu cuenta, desde hoy</h3>

          <ul className="vonage__lista">
            <li>
              Canjea el código y prueba sus APIs con el crédito: mandar un SMS,
              montar una verificación en un login, abrir una sala de vídeo.
            </li>
            <li>
              Regístrate en su espacio para FemCoders Club. Dentro de su
              plataforma hay cursos y recursos para developers, y te llegan sus
              eventos.
            </li>
            <li>
              Lo que construyas es tuyo y lo puedes enseñar. Haber integrado una
              API de comunicaciones se explica muy bien en una entrevista.
            </li>
          </ul>
        </div>

        <div className="vonage__camino vonage__camino--programa">
          <div className="vonage__camino-cabecera">
            <h3 className="vonage__caja-titulo">En equipo: programa piloto</h3>
            {/*
              Sello redondo sobre la esquina. A la vista dice solo «Cerrado»; el
              lector de pantalla oye «Cerrado a nuevas inscripciones», que sin
              el dibujo es lo que se entiende. Va justo después del título para
              que se lea en ese orden.
            */}
            <span className="vonage__sello">
              Cerrado
              <span className="vonage__sr-only"> a nuevas inscripciones</span>
            </span>
          </div>

          <p className="vonage__camino-texto">
            Seis semanas, en pequeños equipos, 100 % online, con mentoras de
            FemCoders Club y créditos para usar las APIs durante el proyecto. Es
            para quien da sus primeros pasos y también para quien ya tiene
            experiencia y quiere construir algo en comunidad.
          </p>

          <p className="vonage__camino-texto vonage__camino-texto--llamada">
            Si te apetece sumarte a la próxima edición, apúntate a la{" "}
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
