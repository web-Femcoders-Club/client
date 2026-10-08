import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/*
 * Al cambiar de ruta en una SPA el navegador no hace nada de lo que haría en una
 * navegación normal: no mueve el foco, no reinicia el scroll y el lector de
 * pantalla no anuncia que ha cambiado la página. Quien navega con teclado se
 * queda en el enlace que acaba de pulsar, así que el siguiente Tab continúa por
 * el menú anterior y no por el contenido nuevo; y quien llega desde un post
 * largo aterriza a media página.
 *
 * Se lleva el foco al <main> en vez de anunciar el título en una región
 * `aria-live`: el título lo escribe React-Helmet de forma asíncrona, así que
 * leerlo justo después del cambio de ruta devuelve todavía el de la página
 * anterior. Mover el foco no depende de ese orden.
 *
 * Los enlaces con ancla («/#empresas-titulo») tampoco funcionan solos: React
 * Router no baja hasta el elemento y, como las páginas cargan en diferido, el
 * elemento aún no existe cuando llega la navegación. Aquí se espera a que
 * aparezca (hasta unos segundos) y se baja hasta él. Vale igual para un ancla
 * en la misma página, que no cambia la ruta.
 *
 * El registro de la última ruta vive fuera del componente a propósito. Según
 * cómo reconcilie React, el Layout puede remontarse al cambiar de ruta, y un
 * useRef se reiniciaría con él: la primera navegación se confundiría con la
 * primera carga y nunca se movería el foco. Con la variable de módulo el
 * comportamiento es el mismo se remonte o no.
 */
let ultimaRutaVista: string | null = null;

const ESPERA_MAXIMA_ANCLA_MS = 4000;

/*
 * Baja hasta el elemento del ancla en cuanto existe. Con `moverFoco`, además lo
 * enfoca (sin volver a desplazar), para que el siguiente Tab siga desde ahí; un
 * título no es enfocable, así que recibe `tabindex="-1"`. Devuelve cómo
 * cancelar la espera si la ruta cambia antes.
 */
function irAlAncla(hash: string, moverFoco: boolean): () => void {
  const id = decodeURIComponent(hash.slice(1));
  const limite = performance.now() + ESPERA_MAXIMA_ANCLA_MS;
  let pendiente = 0;

  const intentar = () => {
    const destino = document.getElementById(id);
    if (!destino) {
      if (performance.now() < limite) pendiente = requestAnimationFrame(intentar);
      return;
    }

    const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // El margen para la cabecera fija lo pone `scroll-padding-top` en index.css.
    destino.scrollIntoView({ block: "start", behavior: sinMovimiento ? "auto" : "smooth" });

    if (moverFoco) {
      if (!destino.hasAttribute("tabindex")) destino.setAttribute("tabindex", "-1");
      destino.focus({ preventScroll: true });
    }
  };

  intentar();
  return () => cancelAnimationFrame(pendiente);
}

export function useEnfoqueDeRuta() {
  const referenciaPrincipal = useRef<HTMLElement>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const esPrimeraCarga = ultimaRutaVista === null;
    const cambioDeRuta = ultimaRutaVista !== pathname;
    ultimaRutaVista = pathname;

    // Un enlace con ancla dice a dónde quiere ir. En la primera carga solo se
    // baja hasta él: robar el foco le saltaría la cabecera a quien llega de fuera.
    if (hash) return irAlAncla(hash, !esPrimeraCarga);

    // En la primera carga manda el navegador; y sin cambio de ruta no hay nada que hacer.
    if (esPrimeraCarga || !cambioDeRuta) return;

    window.scrollTo({ top: 0, behavior: "auto" });
    referenciaPrincipal.current?.focus();
  }, [pathname, hash]);

  return referenciaPrincipal;
}
