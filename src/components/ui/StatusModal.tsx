import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./StatusModal.css";

export interface StatusModalProps {
  isVisible: boolean;
  variant: "success" | "error";
  title?: string;
  message?: string;
  onClose: () => void;
  /** Solo variante error: si se pasa, muestra un botón «Reintentar». */
  onRetry?: () => void;
}

const DEFAULTS = {
  success: {
    title: "¡Mensaje enviado con éxito!",
    message:
      "Gracias por escribirnos. En breve nos pondremos en contacto contigo.",
  },
  error: {
    title: "No se pudo enviar el mensaje",
    message:
      "Ha habido un problema al enviar tu mensaje. Inténtalo de nuevo en unos minutos.",
  },
} as const;

/**
 * Modal compartido de resultado de formularios (éxito / error).
 * Diseño: https://claude.ai/code/artifact/592dc3f6-8360-46ac-8bbf-9a8923e4a2d9
 */
const StatusModal: React.FC<StatusModalProps> = ({
  isVisible,
  variant,
  title,
  message,
  onClose,
  onRetry,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isVisible) return;

    previousFocus.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Focus trap: Tab no sale del modal.
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          "button, a[href], [tabindex]:not([tabindex='-1'])"
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [isVisible, onClose]);

  if (!isVisible) {
    return null;
  }

  const text = {
    title: title ?? DEFAULTS[variant].title,
    message: message ?? DEFAULTS[variant].message,
  };

  return createPortal(
    <div
      className="status-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className="status-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="status-modal-title"
        tabIndex={-1}
      >
        <div className="status-modal-close-row">
          <button
            type="button"
            className="status-modal-close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="status-modal-body">
          <img
            src="/FemCodersClubLogo.png"
            alt="FemCoders Club"
            className="status-modal-logo"
          />
          {variant === "success" ? (
            <div className="status-modal-icon status-modal-icon--success">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4.5 12.5l5 5 10-11"
                  stroke="#116932"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : (
            <div className="status-modal-icon status-modal-icon--error">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 7v6"
                  stroke="#9b2c14"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="17" r="1.5" fill="#9b2c14" />
              </svg>
            </div>
          )}
          <h3 id="status-modal-title" className="status-modal-title">
            {text.title}
          </h3>
          <p className="status-modal-message">
            {text.message}
            {variant === "error" && (
              <>
                {" "}
                Si el problema continúa, escríbenos a{" "}
                <a href="mailto:info@femcodersclub.com">
                  info@femcodersclub.com
                </a>
                .
              </>
            )}
          </p>
          <div className="status-modal-actions">
            {variant === "error" && onRetry && (
              <button
                type="button"
                className="status-modal-primary"
                onClick={onRetry}
              >
                Reintentar
              </button>
            )}
            <button
              type="button"
              className={
                variant === "error" && onRetry
                  ? "status-modal-secondary"
                  : "status-modal-primary"
              }
              onClick={onClose}
            >
              {variant === "success" ? "Aceptar" : "Cerrar"}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default StatusModal;
