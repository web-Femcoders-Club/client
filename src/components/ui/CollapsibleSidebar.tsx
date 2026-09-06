import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { Menu, PanelLeftClose, X } from "lucide-react";
import "./CollapsibleSidebar.css";

/** Ancho a partir del cual el menú convive con el contenido en vez de taparlo. */
const WIDE_VIEWPORT = "(min-width: 1024px)";

export interface CollapsibleSidebarProps {
  /**
   * `rail`: el menú vive en el flujo y al contraerse deja una franja de iconos,
   * para que se siga viendo dónde se está (client#59). El contenido de al lado
   * recupera el ancho.
   *
   * `overlay`: el menú se superpone. Al contraerse se oculta tras el botón,
   * porque una franja permanente encima del contenido quita sitio sin orientar.
   */
  variant: "rail" | "overlay";
  /** Clave de `localStorage` donde se recuerda si estaba abierto o contraído. */
  storageKey: string;
  /**
   * Nombre de la región, en minúscula y sin artículo inicial: "menú del panel".
   * Da nombre accesible al `<aside>` y compone el del botón ("Contraer menú del
   * panel" / "Expandir menú del panel").
   */
  label: string;
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
 * Menú lateral que se puede contraer, compartido por el panel de administración
 * y la página de bienvenida (client#59).
 *
 * POR QUÉ CSS PROPIO Y NO TAILWIND
 * El mismo motivo que documenta `src/features/Admin/admin-ui.css`: al navegador
 * solo llega el CDN de Tailwind v2 (`index.html`), así que la sintaxis de la v3
 * no se aplica. El menú de bienvenida arrastraba justo ese fallo — su capa
 * oscura era `bg-black/50`, que en v2 no existe, y por eso nunca oscureció nada.
 *
 * SEMÁNTICA SEGÚN LO QUE TAPA, NO SEGÚN LA VARIANTE
 * Cuando el menú se superpone al contenido en pantalla estrecha se comporta como
 * un diálogo: `aria-modal`, foco retenido y `Escape`, siguiendo el contrato ya
 * escrito en `StatusModal`. Cuando convive con el contenido es solo un
 * desplegable (`aria-expanded`), donde retener el foco sería incorrecto.
 */
const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({
  variant,
  storageKey,
  label,
  children,
}) => {
  const panelId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const [isWide, setIsWide] = useState(matchesWideViewport);
  const [isOpen, setIsOpen] = useState(
    // Sin preferencia guardada, en móvil arranca contraído (client#59).
    () => readStoredState(storageKey) ?? matchesWideViewport()
  );

  /** El menú tapa el contenido: se comporta como diálogo mientras esté abierto. */
  const isModal = variant === "overlay" && !isWide && isOpen;

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
   * Contraído y superpuesto, el menú sigue en el DOM para poder animarlo. `inert`
   * lo saca del orden de tabulación: sin esto se tabula dentro de un menú que no
   * se ve (client#59). En la variante `rail` los enlaces siguen visibles como
   * iconos, así que deben seguir siendo alcanzables.
   */
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const unreachable = variant === "overlay" && !isOpen;
    if (unreachable) {
      panel.setAttribute("inert", "");
    } else {
      panel.removeAttribute("inert");
    }
  }, [isOpen, variant]);

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

  const action = isOpen ? "Contraer" : "Expandir";
  const ToggleIcon = isOpen ? (variant === "rail" ? PanelLeftClose : X) : Menu;

  return (
    <div
      className={`fem-sidebar fem-sidebar--${variant} ${
        isOpen ? "fem-sidebar--open" : "fem-sidebar--collapsed"
      }`}
    >
      {isModal && (
        <div
          className="fem-sidebar__scrim"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <button
        type="button"
        ref={toggleRef}
        className="fem-sidebar__toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={`${action} ${label}`}
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
        {children}
      </aside>
    </div>
  );
};

export default CollapsibleSidebar;
