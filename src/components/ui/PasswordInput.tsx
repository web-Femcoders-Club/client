import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./PasswordInput.css";

interface PasswordInputProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
  autoComplete?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  /**
   * Se renderiza justo después del input, dentro del contenedor. Para
   * formularios con floating label que dependen del selector `input + label`.
   */
  children?: React.ReactNode;
}

/**
 * Campo de contraseña con toggle de visibilidad («ojito»).
 * Patrón accesible: aria-label + aria-pressed en el botón, icono decorativo.
 */
const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  value,
  onChange,
  name,
  required,
  autoComplete,
  onFocus,
  onBlur,
  children,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="password-field">
      <input
        type={show ? "text" : "password"}
        id={id}
        name={name ?? id}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {children}
      <button
        type="button"
        className="password-toggle"
        onClick={() => setShow(!show)}
        aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
        aria-pressed={show}
      >
        {show ? (
          <EyeOff size={20} aria-hidden="true" />
        ) : (
          <Eye size={20} aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
