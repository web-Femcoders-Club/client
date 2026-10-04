import React, { useContext, useEffect, useRef, useState } from "react";
import { Cookie, X } from "lucide-react";
import { ModalContext } from "../context/ModalContext";
import "./CookieBanner.css";

const CLAVE = "cookieBannerDismissed";

/*
 * El almacenamiento puede fallar (ventana privada, datos bloqueados). Si no se
 * puede leer, el aviso se muestra; si no se puede guardar, se cierra igual y
 * solo volverá a salir en la próxima visita.
 */
const yaVisto = () => {
  try {
    return localStorage.getItem(CLAVE) === "true";
  } catch {
    return false;
  }
};

/*
 * Aviso de cookies. La web solo usa cookies técnicas, así que no pide
 * consentimiento: informa. Sale la primera vez; «Entendido» o la ✕ lo cierran
 * y no vuelve a salir. La política sigue a mano en el pie.
 *
 * Mientras está abierto marca `data-aviso-cookies` en <html>: en el móvil el
 * botón «Volver arriba» espera a que se cierre para no apilar dos cosas abajo.
 *
 * Es una región con nombre propio y no `role="banner"`: ese papel es el de la
 * cabecera del sitio, y con dos el lector ofrecía dos «banner» iguales.
 */
const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(() => !yaVisto());
  const { openModal } = useContext(ModalContext);
  const aviso = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const raiz = document.documentElement;
    if (visible) raiz.dataset.avisoCookies = "abierto";
    else delete raiz.dataset.avisoCookies;
    return () => {
      delete raiz.dataset.avisoCookies;
    };
  }, [visible]);

  /*
   * Publica la altura del aviso en --aviso-cookies-alto: con ella, CookieBanner.css
   * reserva ese sitio al hacer scroll hasta un elemento enfocado, para que el
   * foco del teclado nunca quede debajo del aviso. Medida, no fija: cambia
   * con el ancho, el zoom y la versión compacta.
   */
  useEffect(() => {
    const elemento = aviso.current;
    if (!visible || !elemento) return;
    const raiz = document.documentElement;
    const publicar = () =>
      raiz.style.setProperty(
        "--aviso-cookies-alto",
        `${elemento.offsetHeight}px`,
      );
    publicar();
    const observador = new ResizeObserver(publicar);
    observador.observe(elemento);
    return () => {
      observador.disconnect();
      raiz.style.removeProperty("--aviso-cookies-alto");
    };
  }, [visible]);

  const cerrar = () => {
    setVisible(false);
    try {
      localStorage.setItem(CLAVE, "true");
    } catch {
      // Sin almacenamiento: se cierra igual para esta visita.
    }
  };

  if (!visible) return null;

  return (
    <section
      ref={aviso}
      className="aviso-cookies"
      aria-labelledby="aviso-cookies-titulo"
    >
      <div className="aviso-cookies__cabeza">
        <div className="aviso-cookies__icono" aria-hidden="true">
          <Cookie />
        </div>
        <h2 className="aviso-cookies__titulo" id="aviso-cookies-titulo">
          Solo cookies necesarias
        </h2>
        <button
          type="button"
          className="aviso-cookies__cerrar"
          onClick={cerrar}
          aria-label="Cerrar el aviso de cookies"
        >
          <X aria-hidden="true" />
        </button>
      </div>
      <p className="aviso-cookies__texto">
        Usamos únicamente cookies y almacenamiento técnicos para que la web funcione.{" "}
        <strong>No hacemos seguimiento</strong> ni usamos cookies de análisis o
        publicidad.
      </p>
      <div className="aviso-cookies__acciones">
        <button
          type="button"
          className="fc-boton fc-boton--naranja"
          onClick={cerrar}
        >
          Entendido
        </button>
        {/* No lleva a otra página: abre la política en una ventana sobre esta. */}
        <button
          type="button"
          className="aviso-cookies__enlace"
          onClick={() => openModal("cookiePolicy")}
        >
          Ver la política de cookies
        </button>
      </div>
    </section>
  );
};

export default CookieBanner;
