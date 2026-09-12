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
 * El registro de la última ruta vive fuera del componente a propósito. Según
 * cómo reconcilie React, el Layout puede remontarse al cambiar de ruta, y un
 * useRef se reiniciaría con él: la primera navegación se confundiría con la
 * primera carga y nunca se movería el foco. Con la variable de módulo el
 * comportamiento es el mismo se remonte o no.
 */
let ultimaRutaVista: string | null = null;

export function useEnfoqueDeRuta() {
  const referenciaPrincipal = useRef<HTMLElement>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (ultimaRutaVista === pathname) return;

    const esPrimeraCarga = ultimaRutaVista === null;
    ultimaRutaVista = pathname;

    // En la primera carga manda el navegador: robarle el foco le saltaría la
    // cabecera a quien acaba de llegar desde un buscador o un enlace externo.
    if (esPrimeraCarga) return;

    // Un enlace con ancla ya dice a dónde quiere ir; no se le pisa el destino.
    if (hash) return;

    window.scrollTo({ top: 0, behavior: "auto" });
    referenciaPrincipal.current?.focus();
  }, [pathname, hash]);

  return referenciaPrincipal;
}
