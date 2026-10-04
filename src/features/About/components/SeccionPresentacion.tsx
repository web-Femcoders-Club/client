import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { VIDEO_COMUNIDAD } from "../videoComunidad";
import { PRESENTACION } from "../contenido";
import TextoRico from "./TextoRico";
import "./SeccionPresentacion.css";

/*
 * Primera sección de «Quiénes somos»: texto a la izquierda y vídeo a la
 * derecha, sobre el mismo fondo que la portada de la home (`bg1`).
 *
 * El vídeo lleva título y descripción visibles y miniatura (`poster`): son lo
 * que Google necesita para indexarlo, junto con el VideoObject que escribe el
 * prerender en el HTML servido. No se incrusta el de YouTube para no cargar
 * cookies de terceros; se enlaza.
 */
const SeccionPresentacion: React.FC = () => (
  <section
    className="presentacion bg1 fc-manchas"
    aria-labelledby="presentacion-titulo"
  >
    <div className="fc-puntos fc-puntos--abajo-izquierda" aria-hidden="true" />
    <div className="presentacion__contenedor">
      <div className="presentacion__texto">
        <p className="fc-antetitulo">{PRESENTACION.antetitulo}</p>
        <h1 className="presentacion__titulo" id="presentacion-titulo">
          <span className="presentacion__marca">{PRESENTACION.marca}</span>{" "}
          {PRESENTACION.titulo.texto}{" "}
          <span className="fc-rotulador">{PRESENTACION.titulo.destacado}</span>
        </h1>
        <p className="presentacion__parrafo">
          <TextoRico
            fragmentos={PRESENTACION.parrafo}
            claseEnlace="fc-enlace fc-enlace--siempre fc-enlace--texto"
          />
        </p>
        <div className="presentacion__botones">
          <Link to="/eventos" className="fc-boton fc-boton--noche">
            Ver eventos
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link to="/equipo" className="fc-boton fc-boton--borde">
            Conocer al equipo
          </Link>
        </div>
      </div>

      <figure className="presentacion__video fc-tarjeta">
        <video
          src={VIDEO_COMUNIDAD.archivo}
          poster={VIDEO_COMUNIDAD.miniatura}
          width={VIDEO_COMUNIDAD.ancho}
          height={VIDEO_COMUNIDAD.alto}
          controls
          playsInline
          preload="metadata"
          aria-labelledby="presentacion-video-titulo"
          aria-describedby="presentacion-video-desc"
        />
        <figcaption className="presentacion__pie">
          <div className="presentacion__pie-cabeza">
            <h2
              className="presentacion__video-titulo"
              id="presentacion-video-titulo"
            >
              {VIDEO_COMUNIDAD.titulo}
            </h2>
            <span className="fc-chip">
              Vídeo · {VIDEO_COMUNIDAD.duracionSegundos} s
            </span>
          </div>
          <p className="presentacion__video-desc" id="presentacion-video-desc">
            {VIDEO_COMUNIDAD.descripcion}
          </p>
          <a
            href={VIDEO_COMUNIDAD.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="presentacion__youtube fc-enlace fc-enlace--siempre"
          >
            Verlo en YouTube
            <ExternalLink aria-hidden="true" />
            <span className="fc-solo-lector">
              {" "}
              (se abre en una pestaña nueva)
            </span>
          </a>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default SeccionPresentacion;
