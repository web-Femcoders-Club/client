import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import "./CollapsibleSidebar.css";

/**
 * Ancho a partir del cual el menú convive con el contenido en vez de taparlo.
 * Es lo único que decide cómo se comporta: no hay una variante por pantalla.
 */
const WIDE_VIEWPORT = "(min-width: 1024px)";

export interface CollapsibleSidebarProps {
  /** Clave de `localStorage` donde se recuerda si estaba abierto o contraído. */
  storageKey: string;
  /**
   * Nombre de la región, en minúscula y sin artículo: "menú del panel". Da
   * nombre accesible al `<aside>` y compone el del botón ("Contraer menú del
   * panel" / "Expandir menú del panel").
   */
  label: string;
  /** Rótulo visible sobre la lista. Se oculta al contraer. */
  title: string;
  children: React.ReactNode;
}

const readStoredState = (key: string): boolean | null => {
  try {
    const stored = window.localStorage.getItem(key);
    return stored === null ? null : stored === "true";
  } catch {
    // Navegación privada o cookies bloqueadas: se sigue sin preferencia guardada.
    return null;
  }
};

const matchesWideViewport = () =>
  typeof window !== "undefined" && window.matchMedia(WIDE_VIEWPORT).matches;

/**
 * Menú lateral contraíble, compartido por el panel de administración y la
 * página de bienvenida (client#59).
 *
 * UNA SOLA FORMA DE COMPORTARSE, DECIDIDA POR EL ANCHO
 * Ancho suficiente: el menú va en el flujo y al contraerse deja una franja de
 * iconos, para que se siga viendo dónde se está; el contenido de al lado
 * recupera el espacio. Ancho insuficiente: se superpone con capa oscura, y
 * entonces —y solo entonces— se comporta como un diálogo (`aria-modal`, foco
 * retenido y `Escape`), siguiendo el contrato ya escrito en `StatusModal`.
 *
 * Antes esto era una prop `variant` que elegía cada pantalla, y por eso los dos
 * menús de la web se comportaban distinto en el mismo ancho.
 *
 * POR QUÉ CSS PROPIO Y NO TAILWIND
 * El mismo motivo que documenta `src/features/Admin/admin-ui.css`: al navegador
 * solo llega el CDN de Tailwind v2, así que la sintaxis de la v3 no se aplica
 * (client#92).
 */
const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({
  storageKey,
  label,
  title,
  children,
}) => {
  const panelId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const [isWide, setIsWide] = useState(matchesWideViewport);
  const [isOpen, setIsOpen] = useState(
    // Sin preferencia guardada, en pantalla estrecha arranca contraído (client#59).
    () => readStoredState(storageKey) ?? matchesWideViewport()
  );

  /** Solo cuando tapa el contenido se comporta como diálogo. */
  const isModal = !isWide && isOpen;

  useEffect(() => {
    const query = window.matchMedia(WIDE_VIEWPORT);
    const onChange = (event: MediaQueryListEvent) => setIsWide(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, String(isOpen));
    } catch {
      // Sin almacenamiento la preferencia no sobrevive a la recarga; el menú funciona igual.
    }
  }, [isOpen, storageKey]);

  const close = useCallback(() => setIsOpen(false), []);

  /*
   * Superpuesto y contraído, el menú sigue en el DOM para poder animarlo, así
   * que `inert` lo saca del orden de tabulación: sin esto se tabula dentro de un
   * menú que no se ve (client#59). En la franja de iconos los enlaces sí se ven
   * y deben seguir siendo alcanzables.
   */
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (!isWide && !isOpen) {
      panel.setAttribute("inert", "");
    } else {
      panel.removeAttribute("inert");
    }
  }, [isOpen, isWide]);

  /* Contrato de diálogo, calcado de StatusModal: Escape, foco retenido y retorno. */
  useEffect(() => {
    if (!isModal) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    // Se copia ahora: en la limpieza, `toggleRef.current` puede apuntar ya a otro nodo.
    const toggle = toggleRef.current;
    panelRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        "button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Al cerrarse, el foco vuelve a quien lo abrió y no al principio de la página.
      (previousFocus ?? toggle)?.focus();
    };
  }, [isModal, close]);

  /*
   * El icono dice lo que va a pasar: en la franja, flechas que estrechan o
   * ensanchan; superpuesto, la hamburguesa y la equis de toda la vida.
   */
  const ToggleIcon = isWide
    ? isOpen
      ? ChevronLeft
      : ChevronRight
    : isOpen
    ? X
    : Menu;

  return (
    <div
      className={`fem-sidebar ${isWide ? "fem-sidebar--rail" : "fem-sidebar--overlay"} ${
        isOpen ? "fem-sidebar--open" : "fem-sidebar--collapsed"
      }`}
    >
      {isModal && (
        <div className="fem-sidebar__scrim" onClick={close} aria-hidden="true" />
      )}

      {/*
        El botón va fuera del panel, no dentro: superpuesto y contraído el panel
        se oculta entero, y un botón alojado ahí se iría con él dejando el menú
        sin forma de abrirse. Lo coloca el CSS en la esquina del panel.
      */}
      <button
        type="button"
        ref={toggleRef}
        className="fem-sidebar__toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={`${isOpen ? "Contraer" : "Expandir"} ${label}`}
        onClick={() => setIsOpen((open) => !open)}
      >
        <ToggleIcon className="fem-sidebar__toggle-icon" aria-hidden="true" />
      </button>

      <aside
        id={panelId}
        ref={panelRef}
        className="fem-sidebar__panel"
        aria-label={label}
        role={isModal ? "dialog" : undefined}
        aria-modal={isModal || undefined}
        tabIndex={isModal ? -1 : undefined}
      >
        <span className="fem-sidebar__titulo fem-sidebar__label">{title}</span>
        <div className="fem-sidebar__contenido">{children}</div>
      </aside>
    </div>
  );
};

export default CollapsibleSidebar;
