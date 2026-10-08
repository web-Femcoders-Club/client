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
import { CAMBIO as C } from "../contenido";
import "./SeccionCambio.css";

/* Decoración: el título de cada beneficio ya lo dice. */
const ICONOS: Record<string, LucideIcon> = {
  visibilizad: Users,
  visibilidad: Star,
  networking: Handshake,
  talento: Lightbulb,
  diversidad: ShieldCheck,
  impacto: Heart,
};

/*
 * Última sección de /equipo: la invitación a las empresas. Fondo `bg2`, como
 * el contacto de Inicio, con los textos en claro (`fc-sobre-oscuro`). Los
 * textos viven en ../contenido.ts.
 *
 * «Quiero colaborar» lleva al formulario de contacto (sale por Gmail, como el
 * resto) y «Ver quién colabora», a la cinta de empresas de Inicio.
 */
const SeccionCambio: React.FC = () => (
  <section className="cambio bg2 fc-sobre-oscuro" aria-labelledby="cambio-titulo">
    <div className="cambio__contenedor">
      <div className="cambio__texto" data-aos="fade-right">
        <div>
          <p className="fc-antetitulo fc-antetitulo--naranja">{C.antetitulo}</p>
          <h2 className="fc-titulo-seccion cambio__titulo" id="cambio-titulo">
            {C.titulo.texto} <span className="fc-rotulador">{C.titulo.destacado}</span>
          </h2>
        </div>
        <p className="cambio__parrafo">{C.parrafo}</p>
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
          <a href={`mailto:${C.correo}`} className="cambio__enlace">
            {C.correo}
          </a>
        </p>
      </div>

      <ul className="cambio__lista" data-aos="fade-up">
        {C.beneficios.map(({ id, titulo, texto }, i) => {
          const Icono = ICONOS[id];
          return (
            <li key={id} className="cambio__beneficio">
              <div className={`fc-disco${i % 2 ? " fc-disco--naranja" : ""}`} aria-hidden="true">
                <Icono />
              </div>
              <h3 className="cambio__beneficio-titulo">{titulo}</h3>
              <p className="cambio__beneficio-texto">{texto}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default SeccionCambio;
