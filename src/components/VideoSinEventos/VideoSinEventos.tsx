import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import "./VideoSinEventos.css";

interface VideoSinEventosProps {
  /** Clase del marco: cada sección fija su tamaño y su fondo. */
  className: string;
}

const prefiereMenosMovimiento = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/*
 * Vídeo decorativo de «no hay eventos próximos», en Inicio y en /eventos.
 *
 * Se mueve solo y en bucle, así que lleva botón de pausa (WCAG 2.2.2). Con
 * «reducir movimiento» activado no arranca solo. El vídeo no dice nada que no
 * diga el texto de al lado: va con aria-hidden; el botón sí se anuncia.
 */
const VideoSinEventos: React.FC<VideoSinEventosProps> = ({ className }) => {
  const video = useRef<HTMLVideoElement>(null);
  const [enMarcha, setEnMarcha] = useState(() => !prefiereMenosMovimiento());

  const alternar = () => {
    const el = video.current;
    if (!el) return;
    if (enMarcha) {
      el.pause();
      setEnMarcha(false);
    } else {
      el.play().then(() => setEnMarcha(true)).catch(() => setEnMarcha(false));
    }
  };

  return (
    <div className={`video-sin-eventos ${className}`}>
      <video
        ref={video}
        src={`${import.meta.env.BASE_URL}assets/videos/SinEvento.mp4`}
        autoPlay={enMarcha}
        muted
        loop
        playsInline
        preload={enMarcha ? "auto" : "metadata"}
        aria-hidden="true"
        onError={(e) => {
          if (e.currentTarget.error) {
            console.error("El vídeo de «sin eventos» no se pudo cargar.");
            e.currentTarget.style.display = "none";
          }
        }}
      />
      <button
        type="button"
        className="fc-boton-redondo fc-boton-rotacion video-sin-eventos__boton"
        onClick={alternar}
        aria-label={enMarcha ? "Pausar el vídeo" : "Reproducir el vídeo"}
      >
        {enMarcha ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
      </button>
    </div>
  );
};

export default VideoSinEventos;
