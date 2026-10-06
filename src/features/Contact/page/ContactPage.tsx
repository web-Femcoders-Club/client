import React from "react";
import { Helmet } from "react-helmet";
import SeccionEscribenos from "../components/SeccionEscribenos";
import SeccionParticipa from "../components/SeccionParticipa";

const TITULO = "Contacto | FemCoders Club · Mujeres en tecnología";
const DESCRIPCION =
  "Escribe a FemCoders Club para colaborar o patrocinar, compartir una vacante, dar una charla u organizar algo entre comunidades. Te responderemos por correo.";
const URL = "https://www.femcodersclub.com/contacto";
const IMAGEN = "https://www.femcodersclub.com/og-contacto.jpg";
const IMAGEN_ALT =
  "Cuatro asistentes posan abrazadas y sonrientes durante el networking de un evento de FemCoders Club";

/*
 * /contacto en dos secciones: el formulario con los motivos para escribir
 * (bg1) y lo que se puede hacer sin escribir (bg4). Textos en ../contenido.ts.
 */
const ContactPage: React.FC = () => (
  <>
    <Helmet>
      {/*
        Los mismos textos que escribe el prerender en el HTML servido
        (scripts/spaRoutesMeta.ts, entrada "/contacto"): si se cambian aquí,
        hay que cambiarlos también allí.

        El JSON-LD (ContactPage, punto de contacto y miga de pan) no va aquí:
        lo escribe el prerender en el HTML servido (scripts/contenidoContacto.ts),
        para que lo lean también los rastreadores que no ejecutan JavaScript.
      */}
      <title>{TITULO}</title>
      <meta name="description" content={DESCRIPCION} />
      <link rel="canonical" href={URL} />

      <meta property="og:title" content={TITULO} />
      <meta property="og:description" content={DESCRIPCION} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FemCoders Club" />
      <meta property="og:image" content={IMAGEN} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={IMAGEN_ALT} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITULO} />
      <meta name="twitter:description" content={DESCRIPCION} />
      <meta name="twitter:image" content={IMAGEN} />
      <meta name="twitter:image:alt" content={IMAGEN_ALT} />
    </Helmet>

    <SeccionEscribenos />
    <SeccionParticipa />
  </>
);

export default ContactPage;
