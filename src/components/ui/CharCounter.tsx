import React from "react";
import "./CharCounter.css";

interface CharCounterProps {
  /** id para asociarlo al campo con aria-describedby */
  id: string;
  current: number;
  max: number;
}

/** Contador de caracteres para textareas con maxLength. */
const CharCounter: React.FC<CharCounterProps> = ({ id, current, max }) => {
  const remaining = max - current;
  const nearLimit = remaining <= max * 0.1;

  return (
    <p
      id={id}
      className={`char-counter${nearLimit ? " char-counter--limit" : ""}`}
    >
      {current}/{max} caracteres
      {/* Solo se anuncia al lector de pantalla cuando queda poco espacio,
          para no narrar cada pulsación. */}
      <span className="sr-only" aria-live="polite">
        {nearLimit ? `Quedan ${remaining} caracteres` : ""}
      </span>
    </p>
  );
};

export default CharCounter;
