import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { esAdmin, haySesion } from "../../../utils/sesion";
import {
  CABECERA,
  CODIGO_COMUNIDAD,
  CORREO_CODIGO,
  META_CODIGO,
  PROYECTOS,
  type Apartado,
  type Bloque,
} from "../contenido";
import "./CodigoConductaPage.css";

const SITIO = "https://www.femcodersclub.com";
const URL = `${SITIO}/codigo-de-conducta`;

/* El correo dentro de un texto se pinta como enlace; el resto, tal cual. */
const ConCorreo: React.FC<{ texto: string }> = ({ texto }) => {
  const [antes, ...despues] = texto.split(CORREO_CODIGO);
  if (despues.length === 0) return <>{texto}</>;
  return (
    <>
      {antes}
      <a href={`mailto:${CORREO_CODIGO}`} className="fc-enlace fc-enlace--texto">
        {CORREO_CODIGO}
      </a>
      {despues.join(CORREO_CODIGO)}
    </>
  );
};

const Bloques: React.FC<{ bloques: readonly Bloque[] }> = ({ bloques }) => (
  <>
    {bloques.map((bloque, i) =>
      typeof bloque === "string" ? (
        <p key={i}>
          <ConCorreo texto={bloque} />
        </p>
      ) : (
        <ul key={i}>
          {bloque.map((elemento) => (
            <li key={elemento}>
              <ConCorreo texto={elemento} />
            </li>
          ))}
        </ul>
      )
    )}
  </>
);

/* Los apartados cuelgan de un h2 en la parte general y de un h3 en cada proyecto. */
const Apartados: React.FC<{ apartados: readonly Apartado[]; Titulo: "h3" | "h4" }> = ({ apartados, Titulo }) => (
  <>
    {apartados.map(({ titulo, bloques }) => (
      <section key={titulo} className="codigo__apartado">
        <Titulo className="codigo__apartado-titulo">{titulo}</Titulo>
        <Bloques bloques={bloques} />
      </section>
    ))}
  </>
);

const SECCIONES_PROYECTOS = [PROYECTOS.comunes, ...PROYECTOS.programas];

/*
 * Se llega desde el menú de /welcome y desde /vonage, y la página es pública:
 * sin esto no había forma de volver al espacio personal. Solo con sesión,
 * porque quien llega desde el pie o desde Slack sin cuenta no tiene adónde
 * volver. Destino y `state` como en Ofertas y Presentaciones: sin el `state`,
 * el saludo de /welcome cae a «Usuario».
 */
const VolverAlEspacio: React.FC = () => {
  if (!haySesion()) return null;
  if (esAdmin()) {
    return (
      <Link to="/admin" className="codigo__volver">
        <ArrowLeft aria-hidden="true" />
        Volver al panel
      </Link>
    );
  }
  return (
    <Link
      to="/welcome"
      state={{
        userName: sessionStorage.getItem("userName") || "Usuario",
        userId: Number(sessionStorage.getItem("userId")) || undefined,
      }}
      className="codigo__volver"
    >
      <ArrowLeft aria-hidden="true" />
      Volver a tu espacio
    </Link>
  );
};

/*
 * /codigo-de-conducta: página pública, enlazada desde el pie, /welcome y
 * /vonage. Primero el código de toda la comunidad y después el de los
 * proyectos: las normas comunes a cualquier proyecto en grupo y lo propio de
 * cada programa. Textos en ../contenido.ts.
 *
 * Cada parte lleva un `id` para compartir el enlace directo
 * (/codigo-de-conducta#piloto-vonage); el Layout baja hasta él y deja ahí el foco.
 */
const CodigoConductaPage: React.FC = () => (
  <>
    <Helmet>
      {/* Título y descripción salen de META_CODIGO, lo mismo que escribe el prerender. */}
      <title>{META_CODIGO.titulo}</title>
      <meta name="description" content={META_CODIGO.descripcion} />
      <link rel="canonical" href={URL} />

      <meta property="og:title" content={META_CODIGO.titulo} />
      <meta property="og:description" content={META_CODIGO.descripcion} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={META_CODIGO.titulo} />
      <meta name="twitter:description" content={META_CODIGO.descripcion} />
    </Helmet>

    <div className="codigo bg1 fc-manchas">
      <div className="codigo__marco">
        <VolverAlEspacio />
        <article className="codigo__hoja fc-tarjeta">
          <header className="codigo__cabecera">
            <p className="fc-antetitulo fc-antetitulo--naranja">{CABECERA.antetitulo}</p>
            <h1 className="codigo__titulo">
              {CABECERA.titulo.texto} <span className="fc-rotulador">{CABECERA.titulo.destacado}</span>
            </h1>
            <p className="codigo__entradilla">{CABECERA.entradilla}</p>
            <p className="codigo__vigor">
              <time dateTime={CABECERA.vigor.fecha}>{CABECERA.vigor.texto}</time>
            </p>
          </header>

          <nav className="codigo__indice" aria-labelledby="codigo-indice-titulo">
            <p className="codigo__indice-titulo" id="codigo-indice-titulo">
              {CABECERA.indice}
            </p>
            <ul>
              <li>
                <Link to={`#${CODIGO_COMUNIDAD.id}`} className="fc-enlace fc-enlace--texto">
                  {CODIGO_COMUNIDAD.titulo}
                </Link>
              </li>
              <li>
                <Link to={`#${PROYECTOS.id}`} className="fc-enlace fc-enlace--texto">
                  {PROYECTOS.titulo}
                </Link>
                <ul>
                  {SECCIONES_PROYECTOS.map(({ id, titulo }) => (
                    <li key={id}>
                      <Link to={`#${id}`} className="fc-enlace fc-enlace--texto">
                        {titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>

          <section className="codigo__parte" aria-labelledby={CODIGO_COMUNIDAD.id}>
            <h2 className="codigo__parte-titulo" id={CODIGO_COMUNIDAD.id}>
              {CODIGO_COMUNIDAD.titulo}
            </h2>
            <Apartados apartados={CODIGO_COMUNIDAD.apartados} Titulo="h3" />
          </section>

          <section className="codigo__parte" aria-labelledby={PROYECTOS.id}>
            <h2 className="codigo__parte-titulo" id={PROYECTOS.id}>
              {PROYECTOS.titulo}
            </h2>
            <p className="codigo__parte-entradilla">{PROYECTOS.entradilla}</p>

            {SECCIONES_PROYECTOS.map(({ id, titulo, bloques, apartados }) => (
              <section key={id} className="codigo__proyecto">
                <h3 className="codigo__proyecto-titulo" id={id}>
                  {titulo}
                </h3>
                {bloques && <Bloques bloques={bloques} />}
                <Apartados apartados={apartados} Titulo="h4" />
              </section>
            ))}
          </section>
        </article>
      </div>
    </div>
  </>
);

export default CodigoConductaPage;
