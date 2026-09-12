import { RefObject, useEffect, useRef } from "react";

/*
 * `aria-modal="true"` es una promesa: le dice al lector de pantalla que el resto
 * de la página no existe mientras el diálogo está abierto. El atributo por sí
 * solo no hace nada con el teclado — el Tab sigue saliendo al fondo y Escape no
 * cierra—, así que sin esto la promesa se incumple. Este hook la cumple:
 *
 *   - lleva el foco al diálogo al abrirse, para que se anuncie su título;
 *   - encierra el Tab y el Shift+Tab dentro del diálogo;
 *   - cierra con Escape;
 *   - devuelve el foco al elemento que lo abrió al cerrarse.
 *
 * La referencia la pone quien llama en vez de devolverla el hook: estos modales
 * ya tienen una apuntando al mismo elemento para el botón de volver arriba, y
 * dos referencias sobre el mismo nodo son dos sitios donde equivocarse.
 *
 * El elemento que reciba la referencia necesita `tabIndex={-1}` para poder
 * recibir el foco sin entrar en el orden de tabulación.
 */
const SELECTOR_ENFOCABLES = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export function useDialogoModal<T extends HTMLElement>(
  referenciaDialogo: RefObject<T>,
  cerrar: () => void
) {
  /*
   * `cerrar` llega casi siempre del contexto de modales, que la recrea en cada
   * render. Si fuese dependencia del efecto, cualquier render del proveedor
   * volvería a montar la trampa de foco y devolvería el foco al principio del
   * diálogo a media lectura. En la referencia siempre está la última versión y
   * el efecto se monta una sola vez.
   */
  const referenciaCerrar = useRef(cerrar);
  referenciaCerrar.current = cerrar;

  useEffect(() => {
    const dialogo = referenciaDialogo.current;
    if (!dialogo) return;

    const elementoQueAbrio = document.activeElement as HTMLElement | null;

    /*
     * Se recalcula en cada Tab y no una sola vez: estos diálogos tienen
     * acordeones y secciones que aparecen y desaparecen, y una lista congelada
     * al abrir dejaría el foco en elementos que ya no están en pantalla.
     * `offsetParent` descarta lo que está oculto por CSS.
     */
    const enfocablesVisibles = () =>
      Array.from(dialogo.querySelectorAll<HTMLElement>(SELECTOR_ENFOCABLES)).filter(
        (elemento) => elemento.offsetParent !== null
      );

    // Al diálogo entero, no al primer botón: así el lector anuncia el título
    // antes que "Cerrar", que es lo último que se quiere oír al abrir.
    dialogo.focus();

    const alPulsarTecla = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        referenciaCerrar.current();
        return;
      }

      if (evento.key !== "Tab") return;

      const enfocables = enfocablesVisibles();
      if (enfocables.length === 0) {
        evento.preventDefault();
        dialogo.focus();
        return;
      }

      const primero = enfocables[0];
      const ultimo = enfocables[enfocables.length - 1];
      const activo = document.activeElement;
      const estaDentro = dialogo.contains(activo);

      /*
       * Nada más abrirse el foco está en el diálogo, no en ninguno de sus
       * controles. Hacia delante no hay problema —el navegador entra solo al
       * primero—, pero hacia atrás se saldría al elemento anterior del
       * documento, que es justo lo que esta trampa tiene que impedir.
       */
      if (evento.shiftKey && activo === dialogo) {
        evento.preventDefault();
        ultimo.focus();
        return;
      }

      if (evento.shiftKey && (activo === primero || !estaDentro)) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && (activo === ultimo || !estaDentro)) {
        evento.preventDefault();
        primero.focus();
      }
    };

    document.addEventListener("keydown", alPulsarTecla);

    return () => {
      document.removeEventListener("keydown", alPulsarTecla);
      // Sin esto el foco vuelve al principio de la página y hay que recorrer
      // toda la cabecera para llegar otra vez al enlace del pie.
      elementoQueAbrio?.focus();
    };
    // Se monta y se desmonta con el diálogo, que es exactamente su vida útil:
    // el componente solo existe mientras la ventana está abierta.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
