import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CierrePilotoVonage from "../components/CierrePilotoVonage";
import MaterialesPilotoVonage from "../components/MaterialesPilotoVonage";
import CodigoVonage from "../components/CodigoVonage";
import AprovecharVonage from "../components/AprovecharVonage";
import MenuEspacio from "../../Welcome/components/MenuEspacio";
import "../../Welcome/components/vonage.css";

/**
 * Todo lo de la colaboración con Vonage en una sola página (server#147), en
 * este orden: el aviso de cierre del piloto; la presentación del programa y el
 * código de conducta; la tarjeta de Community Partner, con el código y el
 * registro en la comunidad de Vonage; y qué se puede hacer con todo ello.
 * Antes eran cuatro bloques seguidos en /welcome.
 *
 * Solo exige sesión (`ProtectedRoute`), no la pantalla de preferencias: nada
 * de aquí puede depender del consentimiento, porque condicionar el código a
 * aceptar las comunicaciones dejaría ese consentimiento sin valor (RGPD art.
 * 7.4). Ver el comentario de `CodigoVonage`.
 *
 * El `<h1>` está oculto a la vista: visualmente la página la encabeza la
 * tarjeta de Vonage, pero el aviso de cierre va antes y lleva su `<h2>`, y sin
 * un `<h1>` delante el esquema de encabezados empezaría por un nivel 2.
 */
const VonagePage: React.FC = () => (
  <>
    <Helmet>
      <title>Vonage - FemCoders Club</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="vonage-pagina">
      {/* El mismo menú que /welcome, y en el mismo estado (abierto o contraído). */}
      <MenuEspacio />

      <div className="vonage-pagina__contenido">
        <div className="vonage-pagina__columna">
          <Link to="/welcome" className="vonage-pagina__volver foco-visible">
            <ArrowLeft width={20} height={20} aria-hidden="true" />
            Volver a tu espacio
          </Link>

          <h1 className="vonage__sr-only">Vonage en FemCoders Club</h1>

          <CierrePilotoVonage />
          <MaterialesPilotoVonage />
          <CodigoVonage />
          <AprovecharVonage />
        </div>
      </div>
    </div>
  </>
);

export default VonagePage;
