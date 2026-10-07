import React from "react";
import { REQUISITOS_CONTRASENA } from "../politicaContrasena";

type RequisitosContrasenaProps = {
  contrasena: string;
  id?: string;
};

/*
 * El estado no depende solo del color: marca ✓/× y, para el lector,
 * «Cumplido»/«Pendiente». Estilos en FormularioAcceso.css.
 */
const RequisitosContrasena: React.FC<RequisitosContrasenaProps> = ({ contrasena, id }) => (
  <div className="formulario-acceso__requisitos" id={id}>
    <p className="formulario-acceso__requisitos-titulo">Tu contraseña necesita:</p>
    <ul className="formulario-acceso__requisitos-lista">
      {REQUISITOS_CONTRASENA.map(({ texto, cumple }) => {
        const cumplido = cumple(contrasena);
        return (
          <li
            key={texto}
            className={
              cumplido
                ? "formulario-acceso__requisito formulario-acceso__requisito--cumplido"
                : "formulario-acceso__requisito"
            }
          >
            <span className="formulario-acceso__requisito-marca" aria-hidden="true">
              {cumplido ? "✓" : "×"}
            </span>
            <span className="fc-solo-lector">{cumplido ? "Cumplido: " : "Pendiente: "}</span>
            {texto}
          </li>
        );
      })}
    </ul>
  </div>
);

export default RequisitosContrasena;
