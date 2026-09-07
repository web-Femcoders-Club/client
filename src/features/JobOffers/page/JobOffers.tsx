import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ArrowLeft } from "lucide-react";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "../../../components/OptimizedImage";
import "./ofertas-de-trabajo.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const CANAL_WHATSAPP =
  "https://www.whatsapp.com/channel/0029Vav2hfgKGGGCberYwN2I";
const LINKEDIN_DANIEL = "https://www.linkedin.com/in/danielgbaena";
const CORREO_EMPRESAS =
  "mailto:info@femcodersclub.com?subject=Publicación de oferta laboral";

interface JobOffer {
  id: number;
  title: string;
  company: string;
  pdf_url: string;
  /*
   * El servidor manda `is_active` desde siempre, pero el tipo del cliente no lo
   * declaraba y nadie lo leía. En su lugar la tarjeta llevaba escrito a fuego
   * «YA NO DISPONIBLE», el nombre de la empresa tachado y el botón
   * deshabilitado: se dibujó el estado de un momento concreto en vez de leer el
   * dato, así que cualquier oferta nueva habría salido muerta igual.
   */
  is_active: boolean;
  created_at: string;
}

/**
 * Una oferta. Usa `pdf_url`, que existía en el tipo y no se leía en ninguna
 * parte: la tarjeta anterior no enlazaba a ningún sitio.
 */
const TarjetaDeOferta = ({ oferta }: { oferta: JobOffer }) => {
  const cerrada = !oferta.is_active;

  return (
    <article className={`oferta${cerrada ? " oferta--cerrada" : ""}`}>
      <span
        className={`oferta__etiqueta oferta__etiqueta--${
          cerrada ? "cerrada" : "abierta"
        }`}
      >
        {cerrada ? "Cerrada" : "Abierta"}
      </span>

      <h3 className="oferta__puesto">{oferta.title}</h3>
      <p className="oferta__empresa">{oferta.company}</p>

      {cerrada ? (
        <p className="oferta__nota">Ya no admite candidaturas</p>
      ) : (
        <a
          className="oferta__enlace"
          href={oferta.pdf_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver la oferta
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      )}
    </article>
  );
};

/*
 * Ofertas de trabajo.
 *
 * La página listaba ofertas propias, un banner de InfoJobs y dos empresas
 * colaboradoras. Las ofertas estaban todas cerradas, y el conjunto competía
 * consigo mismo: cuatro bloques pidiendo atención para no llevar a ninguna
 * parte. Ahora hay una sola recomendación —el canal de Daniel— y el listado
 * queda esperando a que haya algo que listar.
 */
const JobOffers = () => {
  const navigate = useNavigate();

  const [ofertas, setOfertas] = useState<JobOffer[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /*
   * Esta página es pública, así que el botón de volver solo aparece con sesión
   * abierta: quien entra desde fuera no tiene ningún panel al que regresar.
   *
   * El destino y el `state` se copian del desplegable del avatar en Header —
   * sin ese `state`, el saludo de bienvenida cae a «Usuario».
   */
  const haySesion = sessionStorage.getItem("isAuthenticated") === "true";
  const esAdmin = sessionStorage.getItem("userRole") === "admin";

  const volver = () => {
    if (esAdmin) {
      navigate("/admin");
      return;
    }
    navigate("/welcome", {
      state: {
        userName: sessionStorage.getItem("userName") || "Usuario",
        userId: Number(sessionStorage.getItem("userId")) || undefined,
      },
    });
  };

  useEffect(() => {
    const cargarOfertas = async () => {
      try {
        setCargando(true);
        const respuesta = await axios.get(`${API_URL}/jobs`);
        setOfertas(respuesta.data);
        setError(null);
      } catch (error) {
        console.error("Error al obtener ofertas:", error);
        setError(
          "No pudimos cargar las ofertas en este momento. Por favor, inténtalo más tarde."
        );
      } finally {
        setCargando(false);
      }
    };

    cargarOfertas();
  }, []);

  return (
    <div className="ofertas">
      <Helmet>
        <title>Ofertas de Trabajo - FemCoders Club</title>
        <meta
          name="description"
          content="Dónde mirar si buscas tu primer trabajo en tecnología: recomendamos el canal JuniorJobs de Daniel García Baena, con ofertas junior de España y LATAM seleccionadas cada domingo."
        />
        <meta
          property="og:title"
          content="Ofertas de Trabajo - FemCoders Club"
        />
        <meta
          property="og:description"
          content="Dónde mirar si buscas tu primer trabajo en tecnología. Una recomendación, no un listado."
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/img/ofertas-trabajo.png"
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/ofertas-de-trabajo"
        />
      </Helmet>

      <div className="ofertas__contenedor">
        {haySesion && (
          <button type="button" className="ofertas__volver" onClick={volver}>
            <ArrowLeft className="ofertas__icono-volver" aria-hidden="true" />
            {esAdmin ? "Volver al panel" : "Volver a mi perfil"}
          </button>
        )}

        <p className="ofertas__antetitulo">Una recomendación, no un listado</p>
        <h1 className="ofertas__titulo">
          Si estás buscando tu primer trabajo, hay un sitio al que ir
        </h1>
        <p className="ofertas__entrada">
          No publicamos ofertas propias, y preferimos no llenar esta página de
          enlaces que nadie mantiene. En su lugar te contamos dónde miramos
          nosotras.
        </p>

        <section className="ofertas__banda" aria-labelledby="juniorjobs-titulo">
          {/*
            La foto se sirve desde el propio proyecto. Antes era un enlace
            directo al CDN de LinkedIn con una firma caducada dentro de la URL
            —el parámetro `e=` marcaba noviembre de 2025—, así que llevaba meses
            sin verse. Esas URLs caducan siempre; alojarla es lo único estable.
          */}
          <OptimizedImage
            src="/assets/joboffers/daniel.png"
            alt="Daniel García Baena"
            className="ofertas__foto"
          />

          <div className="ofertas__banda-texto">
            <h2 id="juniorjobs-titulo" className="ofertas__banda-titulo">
              JuniorJobs, de Daniel García Baena
            </h2>
            <p className="ofertas__banda-detalle">
              Canal de WhatsApp gratuito. Cada domingo publica ofertas para
              perfiles junior de España y LATAM.
            </p>
          </div>

          <a
            className="ofertas__boton-claro"
            href={CANAL_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp size={20} aria-hidden="true" />
            Unirme al canal
          </a>
        </section>

        <div className="ofertas__apoyo">
          <p>
            Las elige una a una: revisa cientos de portales y deja solo
            posiciones verificadas, en empresas que desarrollan software. No es
            un agregador automático, y esa es toda la diferencia.
          </p>
          <div>
            <p>
              No hace falta registrarse en ningún sitio para leerlo. Lo
              recomiendan también <strong>Brais Moure (MoureDev)</strong>,{" "}
              <strong>Linkfy</strong> y <strong>Genbeta</strong>.
            </p>
            <a
              className="ofertas__enlace"
              href={LINKEDIN_DANIEL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={18} aria-hidden="true" />
              Ver el perfil de Daniel
            </a>
          </div>
        </div>

        <section className="ofertas__seccion" aria-labelledby="ofertas-titulo">
          <h2 id="ofertas-titulo" className="ofertas__seccion-titulo">
            Ofertas publicadas aquí
          </h2>

          {cargando ? (
            <p className="ofertas__cargando" role="status">
              Cargando ofertas…
            </p>
          ) : error ? (
            <p className="ofertas__error" role="alert">
              {error}
            </p>
          ) : ofertas.length === 0 ? (
            <div className="ofertas__vacio">
              <p className="ofertas__vacio-titulo">
                Ahora mismo no hay ninguna
              </p>
              <p className="ofertas__vacio-texto">
                Cuando una empresa publique con nosotras, la verás aquí.
                Mientras tanto, el canal de arriba es el mejor sitio para mirar.
              </p>
            </div>
          ) : (
            <div className="ofertas__rejilla">
              {ofertas.map((oferta) => (
                <TarjetaDeOferta key={oferta.id} oferta={oferta} />
              ))}
            </div>
          )}
        </section>

        <section className="ofertas__empresas" aria-labelledby="empresas-titulo">
          <div className="ofertas__empresas-texto">
            <h2 id="empresas-titulo" className="ofertas__empresas-titulo">
              ¿Buscáis talento tech en vuestra empresa?
            </h2>
            <p className="ofertas__empresas-detalle">
              Si valoráis la diversidad y queréis llegar a esta comunidad,
              escribidnos y publicamos vuestra vacante aquí.
            </p>
          </div>
          <a className="ofertas__boton" href={CORREO_EMPRESAS}>
            Escribirnos
          </a>
        </section>
      </div>
    </div>
  );
};

export default JobOffers;
