import { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import OptimizedImage from "../../../components/OptimizedImage";
import { useRotacion } from "../../../hooks/useRotacion";
import { PONENTES as P } from "../contenido";
import "./SeccionPonentes.css";

const INTERVALO_ROTACION = 5000;

/*
 * Segunda sección de /eventos: ponentes de nuestros eventos, en un carrusel
 * sobre el fondo claro de «Nuestra esencia» (`bg3`).
 *
 * - Las fotos tienen proporciones muy distintas (carteles 3:1 con texto,
 *   fotos 16:9, alguna vertical): cada una se ve entera (`contain`) y detrás
 *   va la misma imagen difuminada rellenando el marco.
 * - Solo monta la foto activa y sus dos vecinas, como la galería de Inicio.
 * - El pie de foto describe la imagen, así que la imagen va con alt vacío:
 *   antes el alt repetía el pie entero y el lector lo leía dos veces.
 * - Gira sola (useRotacion, WCAG 2.2.2) y tiene animación ambiental; el botón
 *   de pausa detiene las dos. Mientras gira, el pie no se anuncia.
 */
const SeccionPonentes: React.FC = () => {
  const total = P.fotos.length;
  const [actual, setActual] = useState(0);
  const irA = useCallback((i: number) => setActual(((i % total) + total) % total), [total]);
  const rotacion = useRotacion(() => irA(actual + 1), INTERVALO_ROTACION, total > 1, actual);

  const vecinas = new Set([(actual - 1 + total) % total, actual, (actual + 1) % total]);

  const alPulsarTecla = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const acciones: Record<string, () => void> = {
      ArrowLeft: () => irA(actual - 1),
      ArrowRight: () => irA(actual + 1),
      Home: () => irA(0),
      End: () => irA(total - 1),
    };
    const accion = acciones[e.key];
    if (!accion) return;
    e.preventDefault();
    accion();
  };

  return (
    <section id="ponentes" className="ponentes bg3 fc-manchas" aria-labelledby="ponentes-titulo">
      <div className="fc-puntos fc-puntos--abajo-izquierda" aria-hidden="true" />
      <div className="ponentes__contenedor">
        <div data-aos="fade-right">
          <p className="fc-antetitulo fc-antetitulo--naranja">{P.antetitulo}</p>
          <h2 className="fc-titulo-seccion ponentes__titulo" id="ponentes-titulo">
            {P.titulo.texto} <span className="fc-rotulador">{P.titulo.destacado}</span>
          </h2>
          <p className="ponentes__texto">{P.texto}</p>
        </div>

        <div
          className={`carrusel-ponentes${rotacion.girando ? "" : " carrusel-ponentes--detenido"}`}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Ponentes de nuestros eventos"
          onKeyDown={alPulsarTecla}
          {...rotacion.pausaAlInteractuar}
        >
          <div className="fc-capa" aria-hidden="true" />
          <div className="carrusel-ponentes__marco" id="ponentes-fotos">
            {P.fotos.map((foto, i) =>
              vecinas.has(i) ? (
                <div
                  key={foto.src}
                  className={`carrusel-ponentes__foto${i === actual ? " carrusel-ponentes__foto--activa" : ""}`}
                  aria-hidden="true"
                >
                  <OptimizedImage src={foto.src} alt="" className="carrusel-ponentes__fondo" />
                  <OptimizedImage
                    src={foto.src}
                    alt=""
                    className="carrusel-ponentes__imagen"
                    loading={i === actual ? "eager" : "lazy"}
                  />
                </div>
              ) : null
            )}
          </div>

          <div className="carrusel-ponentes__barra">
            <p className="carrusel-ponentes__pie" aria-live={rotacion.girando ? "off" : "polite"}>
              <span className="fc-solo-lector">
                Ponente {actual + 1} de {total}:{" "}
              </span>
              {P.fotos[actual].texto}
            </p>
            <div className="carrusel-ponentes__controles">
              <button
                type="button"
                className="fc-boton-redondo"
                onClick={() => irA(actual - 1)}
                aria-label="Ponente anterior"
                aria-controls="ponentes-fotos"
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <span className="carrusel-ponentes__contador fc-texto-neutro" aria-hidden="true">
                {actual + 1} / {total}
              </span>
              <button
                type="button"
                className="fc-boton-redondo"
                onClick={rotacion.alternar}
                aria-label={rotacion.girando ? "Pausar el carrusel" : "Reanudar el carrusel"}
                aria-controls="ponentes-fotos"
              >
                {rotacion.girando ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
              </button>
              <button
                type="button"
                className="fc-boton-redondo"
                onClick={() => irA(actual + 1)}
                aria-label="Ponente siguiente"
                aria-controls="ponentes-fotos"
              >
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionPonentes;
