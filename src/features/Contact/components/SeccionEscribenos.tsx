import { BriefcaseBusiness, Handshake, Mic, Users, type LucideIcon } from "lucide-react";
import { BsGithub, BsInstagram, BsLinkedin, BsSpotify, BsYoutube } from "react-icons/bs";
import ContactForm from "./ContactForm";
import { CORREO_CONTACTO, ESCRIBENOS } from "../contenido";
import { REDES_SOCIALES } from "../../../data/redesSociales";
import "./SeccionEscribenos.css";

type ClaveMotivo = (typeof ESCRIBENOS.motivos)[number]["clave"];

/* Icono de cada motivo, decorativo: el título ya lo dice. Naranja y violeta en damero. */
const ICONOS: Record<ClaveMotivo, { Icono: LucideIcon; naranja: boolean }> = {
  patrocinio: { Icono: Handshake, naranja: true },
  vacante: { Icono: BriefcaseBusiness, naranja: false },
  charla: { Icono: Mic, naranja: false },
  comunidades: { Icono: Users, naranja: true },
};

const REDES = [
  { nombre: "Instagram", href: REDES_SOCIALES.instagram, Icono: BsInstagram },
  { nombre: "LinkedIn", href: REDES_SOCIALES.linkedin, Icono: BsLinkedin },
  { nombre: "YouTube", href: REDES_SOCIALES.youtube, Icono: BsYoutube },
  { nombre: "GitHub", href: REDES_SOCIALES.github, Icono: BsGithub },
  { nombre: "Spotify", href: REDES_SOCIALES.spotify, Icono: BsSpotify },
] as const;

/*
 * Primera sección de /contacto: título, formulario, motivos para escribir y
 * correo y redes. En el HTML el formulario va justo después del título, para
 * que el tabulador y el lector lleguen a él antes que a la lista; la rejilla
 * lo coloca a la derecha en escritorio.
 */
const SeccionEscribenos: React.FC = () => (
  <section className="escribenos bg1 fc-manchas" aria-labelledby="escribenos-titulo">
    <div className="escribenos__rejilla">
      <header className="escribenos__cabecera">
        <p className="fc-antetitulo fc-antetitulo--naranja">{ESCRIBENOS.antetitulo}</p>
        <h1 className="escribenos__titulo" id="escribenos-titulo">
          {ESCRIBENOS.titulo.texto} <span className="fc-rotulador">{ESCRIBENOS.titulo.destacado}</span>
        </h1>
        <p className="escribenos__entradilla">{ESCRIBENOS.entradilla}</p>
      </header>

      <div className="escribenos__formulario">
        <div className="fc-capa" aria-hidden="true" />
        <ContactForm />
      </div>

      <div className="escribenos__motivos-bloque">
        <h2 className="escribenos__subtitulo">{ESCRIBENOS.motivosTitulo}</h2>
        <ul className="escribenos__motivos">
          {ESCRIBENOS.motivos.map(({ clave, titulo, texto }) => {
            const { Icono, naranja } = ICONOS[clave];
            return (
              <li key={clave} className="escribenos__motivo">
                <div className={`fc-disco${naranja ? " fc-disco--naranja" : ""}`} aria-hidden="true">
                  <Icono />
                </div>
                <div>
                  <h3 className="escribenos__motivo-titulo">{titulo}</h3>
                  <p className="escribenos__motivo-texto">{texto}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="escribenos__directo">
        <p className="escribenos__correo">
          {ESCRIBENOS.correo}{" "}
          <a className="fc-enlace fc-enlace--texto" href={`mailto:${CORREO_CONTACTO}`}>
            {CORREO_CONTACTO}
          </a>
        </p>
        <div className="escribenos__redes">
          <p className="escribenos__redes-texto">{ESCRIBENOS.redes}</p>
          <ul className="escribenos__redes-lista">
            {REDES.map(({ nombre, href, Icono }) => (
              <li key={nombre}>
                <a
                  className="fc-boton-redondo"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${nombre} (se abre en otra pestaña)`}
                >
                  <Icono aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default SeccionEscribenos;
