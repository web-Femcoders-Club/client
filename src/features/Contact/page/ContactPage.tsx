import React from "react";
import { Helmet } from "react-helmet";
import SeccionEscribenos from "../components/SeccionEscribenos";
import SeccionParticipa from "../components/SeccionParticipa";
import { META_CONTACTO } from "../contenido";

const SITIO = "https://www.femcodersclub.com";
const TITULO = META_CONTACTO.titulo;
const DESCRIPCION = META_CONTACTO.descripcion;
const URL = `${SITIO}/contacto`;
const IMAGEN = `${SITIO}${META_CONTACTO.imagen}`;
const IMAGEN_ALT = META_CONTACTO.imagenAlt;

/*
 * /contacto en dos secciones: el formulario con los motivos para escribir
 * (bg1) y lo que se puede hacer sin escribir (bg4). Textos en ../contenido.ts.
 */
const ContactPage: React.FC = () => (
  <>
    <Helmet>
      {/*
        Título, descripción e imagen salen de META_CONTACTO, el mismo objeto
        que escribe el prerender en el HTML servido (scripts/spaRoutesMeta.ts).

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
