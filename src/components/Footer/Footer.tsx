import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsSpotify, BsTwitterX, BsYoutube } from "react-icons/bs";
import { Slack } from "lucide-react";
import { ModalContext } from "../../context/ModalContext";
import { REDES_SOCIALES } from "../../data/redesSociales";
import { SLACK_INVITE_URL } from "../../utils/constants";
import "./Footer.css";

const REDES = [
  { nombre: "Instagram", url: REDES_SOCIALES.instagram, Icono: BsInstagram },
  { nombre: "LinkedIn", url: REDES_SOCIALES.linkedin, Icono: BsLinkedin },
  { nombre: "YouTube", url: REDES_SOCIALES.youtube, Icono: BsYoutube },
  { nombre: "GitHub", url: REDES_SOCIALES.github, Icono: BsGithub },
  { nombre: "X", url: REDES_SOCIALES.x, Icono: BsTwitterX },
  { nombre: "Spotify", url: REDES_SOCIALES.spotify, Icono: BsSpotify },
];

/*
 * Los avisos legales abren una ventana sobre la misma página: son botones,
 * no enlaces (antes eran `<a href="#">`, que subían la página y dejaban un
 * `#` en la URL).
 */
const AVISOS = [
  { modal: "cookiePolicy", texto: "Política de cookies" },
  { modal: "privacyPolicy", texto: "Política de privacidad" },
  { modal: "legalNotice", texto: "Aviso legal" },
  { modal: "faq", texto: "Preguntas frecuentes" },
] as const;

/*
 * Pie de página. Fondo azul noche, como las llamadas principales y la
 * sección de contacto: enmarca la web por abajo.
 *
 * Los enlaces de redes se abren en otra pestaña y lo dicen al lector de
 * pantalla. El copyright va de 2024, año en que se publicó la web, al año en
 * curso, que se calcula solo.
 */
const ANIO_PUBLICACION = 2024;
const FccFooter = () => {
  const { openModal } = useContext(ModalContext);
  const anioActual = new Date().getFullYear();
  const anios = anioActual > ANIO_PUBLICACION ? `${ANIO_PUBLICACION}–${anioActual}` : `${ANIO_PUBLICACION}`;

  return (
    <footer className="pie fc-sobre-oscuro">
      <div className="pie__contenedor">
        <div className="pie__fila">
          {/* El nombre del enlace dice a dónde lleva, no qué se ve en él. */}
          <Link to="/" className="pie__logo">
            <img src="/negativeLogo.png" alt="FemCoders Club, ir a la página de inicio" width="92" height="92" />
          </Link>

          <div className="pie__bloque">
            <p className="pie__rotulo" id="pie-redes">
              Síguenos en
            </p>
            <ul className="pie__redes" aria-labelledby="pie-redes">
              {REDES.map(({ nombre, url, Icono }) => (
                <li key={nombre}>
                  <a href={url} className="pie__red" target="_blank" rel="noopener noreferrer" aria-label={`${nombre} (se abre en una pestaña nueva)`}>
                    <Icono aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pie__bloque pie__bloque--separado">
            <p className="pie__rotulo">O también:</p>
            <a href={SLACK_INVITE_URL} className="pie__slack" target="_blank" rel="noopener noreferrer">
              <Slack aria-hidden="true" />
              Únete al Slack
              <span className="fc-solo-lector"> (se abre en una pestaña nueva)</span>
            </a>
          </div>

          <ul className="pie__avisos pie__bloque--separado">
            {AVISOS.map(({ modal, texto }) => (
              <li key={modal}>
                <button type="button" className="pie__aviso fc-enlace fc-enlace--siempre" onClick={() => openModal(modal)}>
                  {texto}
                </button>
              </li>
            ))}
          </ul>

          <Link to="/contacto" className="fc-boton fc-boton--borde pie__contacto">
            Contacto
          </Link>
        </div>

        <p className="pie__copyright">©{anios} FemCoders Club. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default FccFooter;
