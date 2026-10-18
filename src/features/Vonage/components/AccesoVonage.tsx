import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "../../../components/OptimizedImage";
import "../../Welcome/components/vonage.css";

/**
 * Acceso a /vonage desde /welcome (server#147). Sustituye a los bloques del
 * código, de «Qué puedes hacer con esto» y del cierre del piloto, que ahora
 * viven juntos en su página.
 */
const AccesoVonage: React.FC = () => (
  <section className="vonage vonage--acceso" aria-labelledby="acceso-vonage-titulo">
    {/* La barra de cuatro colores de los bloques de Vonage. Decorativa. */}
    <div className="vonage__barra" aria-hidden="true" />

    <div className="vonage__acceso-fila">
      {/* El título ya nombra a Vonage, así que el logo es decorativo. */}
      <OptimizedImage
        src="/assets/Vonage/VonageLogo.png"
        alt=""
        className="vonage__logo"
        loading="lazy"
      />
      <div className="vonage__acceso-texto">
        <h2 id="acceso-vonage-titulo" className="vonage__titulo">
          Somos Community Partner de Vonage
        </h2>
        <p className="vonage__texto">
          Tu código con 20 € de crédito para sus APIs, qué puedes construir con
          ellas y el programa piloto, todo en un mismo sitio.
        </p>
      </div>
      <Link to="/vonage" className="vonage__boton foco-visible">
        Ir a Vonage
        <ArrowRight width={16} height={16} aria-hidden="true" />
      </Link>
    </div>
  </section>
);

export default AccesoVonage;
