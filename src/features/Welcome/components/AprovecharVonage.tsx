import React from "react";
import "./vonage.css";

/**
 * Qué puede hacer una usuaria con la colaboración de Vonage (#102).
 *
 * Va entre el código y el cierre del piloto: arriba se acaba de dar algo, y aquí
 * se explica para qué sirve.
 *
 * ## Las inscripciones al piloto cerraron
 *
 * El 18 de octubre de 2026 (server#147). Este texto, el bloque de cierre de
 * abajo y la noticia /noticias/proyecto-piloto-apis-vonage cuentan lo mismo:
 * quien llega desde la noticia lee las tres cosas seguidas.
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
        probar sus APIs por tu cuenta o construir en equipo en nuestro primer
        programa piloto.
      </p>

      <div className="vonage__caminos">
        <div className="vonage__camino">
          <p className="vonage__caja-titulo">Por tu cuenta, desde hoy</p>

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
          <p className="vonage__caja-titulo">Y si prefieres construir en equipo</p>

          <p className="vonage__camino-texto">
            Durante unas <strong>seis semanas</strong>, en pequeños equipos,
            100 % online y con mentoras de FemCoders Club, crearemos
            aplicaciones con estas APIs. Es para quien da sus primeros pasos y
            también para quien ya tiene experiencia y quiere construir algo en
            comunidad.
          </p>

          <p className="vonage__camino-texto">
            Las participantes contarán con créditos para usar las APIs durante
            el proyecto. Las inscripciones cerraron el{" "}
            <strong>domingo 18 de octubre de 2026</strong>.
          </p>

          <p className="vonage__camino-texto vonage__camino-texto--llamada">
            Si te apetece sumarte a los próximos proyectos, apúntate a la lista
            de espera de aquí abajo.
          </p>
        </div>
      </div>
    </div>
  </section>
);


export default AprovecharVonage;
