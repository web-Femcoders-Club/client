import React from "react";
import "./vonage.css";

/**
 * Qué puede hacer una usuaria con la colaboración de Vonage (#102).
 *
 * Va entre el código y las tres preguntas porque es el puente entre los dos:
 * arriba se acaba de dar algo, abajo se pide algo, y aquí se explica para qué
 * sirve lo primero y por qué merece la pena lo segundo.
 *
 * ## Por qué el programa de octubre está escrito en condicional
 *
 * Todavía no existe: depende de cuánta gente conteste el formulario de abajo.
 * Anunciarlo como si estuviera decidido conseguiría más respuestas a corto
 * plazo y costaría credibilidad en cuanto se retrasara o no saliera.
 *
 * Decir en voz alta que primero hace falta saber cuántas sois convierte la
 * incertidumbre en el motivo para contestar, en vez de en una excusa. Si alguien
 * edita este texto, esa es la línea que no conviene cruzar: se puede contar la
 * intención, no comprometer la fecha.
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
        el primero está disponible desde hoy y el segundo depende de cuántas
        seáis.
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
          <p className="vonage__caja-titulo">Y si prefieres no hacerlo sola</p>

          <p className="vonage__camino-texto">
            Queremos preparar para <strong>octubre</strong> un programa para
            construir uno o varios proyectos en grupo con estas APIs: algo más
            ambicioso de lo que suele salir en solitario, con gente con quien
            repartirse el trabajo y a quien preguntar.
          </p>

          <p className="vonage__camino-texto">
            No está decidido todavía, y preferimos decirlo a prometerlo. Antes
            de fijar nada necesitamos saber cuántas personas tendrían ganas y
            con cuánto tiempo cuentan. Si sale adelante, será porque hay gente
            suficiente.
          </p>

          <p className="vonage__camino-texto vonage__camino-texto--llamada">
            Eso es justo lo que preguntamos aquí abajo. Son tres preguntas y se
            contestan en un minuto.
          </p>
        </div>
      </div>
    </div>
  </section>
);


export default AprovecharVonage;
