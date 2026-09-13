import React, { useEffect, useRef } from "react";
import { AlertTriangle } from "lucide-react";
import "./confirmacion-irreversible.css";

interface Props {
  abierto: boolean;
  titulo: string;
  /** Qué va a pasar exactamente. Se lee antes que nada. */
  mensaje: React.ReactNode;
  /** Sobre qué recae la acción: el email, el nombre de la cuenta. */
  sujeto?: string;
  textoConfirmar?: string;
  textoCancelar?: string;
  onConfirmar: () => void;
  onCancelar: () => void;
  ocupado?: boolean;
}

/**
 * El aviso de las acciones que no se pueden deshacer.
 *
 * Sustituye a `window.confirm`, que tiene tres problemas para esto: sale
 * pequeño y con el aspecto del navegador, no permite destacar qué es lo
 * irreversible, y algunos navegadores lo suprimen si aparecen varios seguidos —
 * es decir, puede no llegar a mostrarse justo cuando más falta hace.
 *
 * ## Decisiones que parecen detalles y no lo son
 *
 * **El foco entra en Cancelar**, no en Confirmar. Quien abra esto por error y
 * pulse Intro por inercia no borra nada.
 *
 * **Escape cancela.** En un diálogo destructivo, la salida rápida tiene que
 * llevar a la opción segura.
 *
 * **El foco se queda dentro** mientras está abierto y vuelve a donde estaba al
 * cerrarse: sin eso, quien navega con teclado sigue tabulando por la página de
 * detrás sin saber que el diálogo sigue ahí.
 */
const ConfirmacionIrreversible: React.FC<Props> = ({
  abierto,
  titulo,
  mensaje,
  sujeto,
  textoConfirmar = "Sí, continuar",
  textoCancelar = "Cancelar",
  onConfirmar,
  onCancelar,
  ocupado = false,
}) => {
  const dialogoRef = useRef<HTMLDivElement>(null);
  const cancelarRef = useRef<HTMLButtonElement>(null);
  const focoPrevio = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!abierto) return;

    focoPrevio.current = document.activeElement as HTMLElement | null;
    cancelarRef.current?.focus();

    const alPulsarTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onCancelar();
        return;
      }

      if (e.key !== "Tab") return;

      const focusables = dialogoRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;

      const primero = focusables[0];
      const ultimo = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };

    document.addEventListener("keydown", alPulsarTecla);
    return () => {
      document.removeEventListener("keydown", alPulsarTecla);
      focoPrevio.current?.focus();
    };
  }, [abierto, onCancelar]);

  if (!abierto) return null;

  return (
    <div className="confirmar__fondo">
      <div
        className="confirmar"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirmar-titulo"
        aria-describedby="confirmar-mensaje"
        ref={dialogoRef}
      >
        <div className="confirmar__cabecera">
          <span className="confirmar__icono" aria-hidden="true">
            <AlertTriangle size={26} />
          </span>
          <h2 id="confirmar-titulo" className="confirmar__titulo">
            {titulo}
          </h2>
        </div>

        {sujeto && <p className="confirmar__sujeto">{sujeto}</p>}

        <div id="confirmar-mensaje" className="confirmar__mensaje">
          {mensaje}
        </div>

        <p className="confirmar__irreversible">Esta acción no se puede deshacer.</p>

        <div className="confirmar__botones">
          <button
            type="button"
            className="confirmar__boton confirmar__boton--cancelar"
            onClick={onCancelar}
            ref={cancelarRef}
            disabled={ocupado}
          >
            {textoCancelar}
          </button>
          <button
            type="button"
            className="confirmar__boton confirmar__boton--confirmar"
            onClick={onConfirmar}
            disabled={ocupado}
          >
            {ocupado ? "Un momento…" : textoConfirmar}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionIrreversible;
