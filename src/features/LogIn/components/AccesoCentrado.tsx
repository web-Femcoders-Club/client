import React from "react";
import "../page/Acceso.css";
import "./FormularioAcceso.css";

type AccesoCentradoProps = {
  antetitulo: string;
  /** El h1: puede llevar la palabra destacada en `fc-rotulador`. */
  titulo: React.ReactNode;
  entradilla?: string;
  children: React.ReactNode;
};

/*
 * Página de acceso corta, con el título y la tarjeta centrados: «He olvidado
 * mi contraseña», «Nueva contraseña» y la baja del correo. El login y el
 * registro usan la versión en dos columnas (Acceso.css).
 */
const AccesoCentrado: React.FC<AccesoCentradoProps> = ({ antetitulo, titulo, entradilla, children }) => (
  <section className="acceso acceso--centrada bg1 fc-manchas" aria-labelledby="acceso-centrado-titulo">
    <div className="acceso__rejilla">
      <header className="acceso__cabecera">
        <p className="fc-antetitulo fc-antetitulo--naranja">{antetitulo}</p>
        <h1 className="acceso__titulo" id="acceso-centrado-titulo">
          {titulo}
        </h1>
        {entradilla && <p className="acceso__entradilla">{entradilla}</p>}
      </header>

      <div className="acceso__formulario">
        <div className="fc-capa" aria-hidden="true" />
        <div className="fc-tarjeta formulario-acceso">{children}</div>
      </div>
    </div>
  </section>
);

export default AccesoCentrado;
