import { Link } from "react-router-dom";
import {
  ArrowRight,
  Handshake,
  Heart,
  Lightbulb,
  ShieldCheck,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import "./SeccionCambio.css";

const CORREO = "info@femcodersclub.com";

/*
 * Lo que gana una empresa al colaborar. Va de «vosotros» en todo el bloque,
 * como pide la guía de tono para hablar a un equipo o empresa, y sin prometer
 * lo que no podemos garantizar. El icono es decoración: el título ya lo dice.
 */
const BENEFICIOS: { titulo: string; texto: string; Icono: LucideIcon }[] = [
  {
    titulo: "Visibilizad a vuestro equipo femenino",
    texto: "Dad protagonismo a las mujeres de vuestra empresa y mostradlas como referentes del sector tech.",
    Icono: Users,
  },
  {
    titulo: "Visibilidad destacada",
    texto:
      "Vuestra marca estará presente en eventos, redes y materiales de la comunidad, ante una audiencia tech comprometida.",
    Icono: Star,
  },
  {
    titulo: "Networking estratégico",
    texto: "Conectad con profesionales de la tecnología y ampliad vuestra red de contactos en el sector.",
    Icono: Handshake,
  },
  {
    titulo: "Innovación y talento",
    texto:
      "Conoced a mujeres con perfiles tecnológicos diversos que pueden aportar nuevas ideas a vuestros equipos.",
    Icono: Lightbulb,
  },
  {
    titulo: "Compromiso con la diversidad",
    texto: "Reforzad vuestro compromiso con la diversidad y la inclusión en tecnología.",
    Icono: ShieldCheck,
  },
  {
    titulo: "Impacto social real",
    texto: "Formad parte del cambio hacia un sector tecnológico más inclusivo, justo y representativo.",
    Icono: Heart,
  },
];

/*
 * Última sección de /equipo: la invitación a las empresas. Fondo `bg2`, como
 * el contacto de Inicio, con los textos en claro (`fc-sobre-oscuro`).
 *
 * «Quiero colaborar» lleva al formulario de contacto (sale por Gmail, como el
 * resto) y «Ver quién colabora», a la cinta de empresas de Inicio.
 */
const SeccionCambio: React.FC = () => (
  <section className="cambio bg2 fc-sobre-oscuro" aria-labelledby="cambio-titulo">
    <div className="cambio__contenedor">
      <div className="cambio__texto" data-aos="fade-right">
        <div>
          <p className="fc-antetitulo fc-antetitulo--naranja">Para empresas</p>
          <h2 className="fc-titulo-seccion cambio__titulo" id="cambio-titulo">
            Sé parte del cambio en la <span className="fc-rotulador">industria tecnológica</span>
          </h2>
        </div>
        <p className="cambio__parrafo">
          Uníos a las empresas que ya están marcando la diferencia en la inclusión de mujeres en
          tecnología. Vuestro apoyo puede abrir nuevas oportunidades y ayudar a construir un sector
          más diverso.
        </p>
        <div className="cambio__botones">
          <Link to="/contacto" className="fc-boton fc-boton--naranja">
            Quiero colaborar
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link to="/#empresas-titulo" className="fc-boton">
            Ver quién colabora
          </Link>
        </div>
        <p className="cambio__correo">
          O escribidnos a{" "}
          <a href={`mailto:${CORREO}`} className="cambio__enlace">
            {CORREO}
          </a>
        </p>
      </div>

      <ul className="cambio__lista" data-aos="fade-up">
        {BENEFICIOS.map(({ titulo, texto, Icono }, i) => (
          <li key={titulo} className="cambio__beneficio">
            <div className={`fc-disco${i % 2 ? " fc-disco--naranja" : ""}`} aria-hidden="true">
              <Icono />
            </div>
            <h3 className="cambio__beneficio-titulo">{titulo}</h3>
            <p className="cambio__beneficio-texto">{texto}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SeccionCambio;
