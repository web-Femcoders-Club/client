import { BriefcaseBusiness, Handshake, Mic, Users } from "lucide-react";
import { BsGithub, BsInstagram, BsLinkedin, BsSpotify, BsYoutube } from "react-icons/bs";
import ContactForm from "./ContactForm";
import { REDES_SOCIALES } from "../../../data/redesSociales";
import "./SeccionEscribenos.css";

const CORREO = "info@femcodersclub.com";

/*
 * Para qué se puede escribir. A empresas y comunidades se les habla de
 * vosotros; a cada persona, de tú (docs/tono-editorial.md). El icono es
 * decoración: el título ya lo dice.
 */
const MOTIVOS = [
  {
    titulo: "Colaborar o patrocinar",
    texto: "¿Formáis parte de una empresa? Podemos apoyar un evento o crear algo con vosotros para la comunidad.",
    Icono: Handshake,
    naranja: true,
  },
  {
    titulo: "Compartir una vacante",
    texto: "¿Buscáis talento tech? Contadnos vuestra oferta y vemos cómo acercarla a la comunidad.",
    Icono: BriefcaseBusiness,
    naranja: false,
  },
  {
    titulo: "Dar una charla o un taller",
    texto: "¿Tienes algo que compartir? Cuéntanos tu propuesta y pensemos cómo llevarla a la comunidad.",
    Icono: Mic,
    naranja: false,
  },
  {
    titulo: "Organizar algo en colaboración",
    texto: "¿Sois una comunidad o asociación tech? Podemos unir fuerzas y crear algo en colaboración.",
    Icono: Users,
    naranja: true,
  },
] as const;

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
        <p className="fc-antetitulo fc-antetitulo--naranja">Contacto</p>
        <h1 className="escribenos__titulo" id="escribenos-titulo">
          Escríbenos, nos encantará <span className="fc-rotulador">leerte</span>
        </h1>
        <p className="escribenos__entradilla">
          Detrás de este formulario está el equipo de FemCoders Club. Cuéntanos
          tu idea y te responderemos por correo.
        </p>
      </header>

      <div className="escribenos__formulario">
        <div className="fc-capa" aria-hidden="true" />
        <ContactForm />
      </div>

      <div className="escribenos__motivos-bloque">
        <h2 className="escribenos__subtitulo">¿Qué tienes en mente?</h2>
        <ul className="escribenos__motivos">
          {MOTIVOS.map(({ titulo, texto, Icono, naranja }) => (
            <li key={titulo} className="escribenos__motivo">
              <div className={`fc-disco${naranja ? " fc-disco--naranja" : ""}`} aria-hidden="true">
                <Icono />
              </div>
              <div>
                <h3 className="escribenos__motivo-titulo">{titulo}</h3>
                <p className="escribenos__motivo-texto">{texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="escribenos__directo">
        <p className="escribenos__correo">
          ¿Prefieres el correo? Escríbenos a{" "}
          <a className="fc-enlace fc-enlace--texto" href={`mailto:${CORREO}`}>
            {CORREO}
          </a>
        </p>
        <div className="escribenos__redes">
          <p className="escribenos__redes-texto">También estamos en</p>
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
