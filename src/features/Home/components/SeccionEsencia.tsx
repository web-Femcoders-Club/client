import { GraduationCap, Lightbulb, Share2, Users } from "lucide-react";
import GaleriaEventos, { type FotoEvento } from "./GaleriaEventos";
import "./SeccionEsencia.css";

const CLAVES = [
  { Icono: GraduationCap, titulo: "Talleres", texto: "para aprender y crecer" },
  { Icono: Users, titulo: "Charlas inspiradoras", texto: "con referentes del sector" },
  { Icono: Share2, titulo: "Networking", texto: "con una comunidad real y diversa" },
  { Icono: Lightbulb, titulo: "Oportunidades", texto: "para impulsar tu carrera" },
];

/*
 * Segunda sección de la home: qué es FemCoders Club más allá de los eventos,
 * con la galería de eventos pasados al lado.
 *
 * En el texto solo hay un color además del azul oscuro: el violeta de marca
 * para los realces. El degradado vive en el trazo de rotulador de «una
 * comunidad», no en las letras, que van en violeta sólido (8,29:1, AAA).
 */
const SeccionEsencia: React.FC<{ fotos: FotoEvento[] }> = ({ fotos }) => (
  <section className="esencia" aria-labelledby="esencia-titulo">
    <div className="esencia__puntos" aria-hidden="true" />
    <div className="esencia__contenedor">
      <div className="esencia__texto">
        <p className="fc-antetitulo">Nuestra esencia</p>
        <h2 className="esencia__titulo" id="esencia-titulo">
          Más que eventos,
          <br />
          <span className="esencia__rotulador">una comunidad</span>
        </h2>

        <div className="esencia__parrafos">
          <p>
            En <strong>FemCoders Club</strong> organizamos regularmente eventos
            que no solo son educativos, sino también una oportunidad increíble
            para conectar con otras mujeres en el <strong>sector tech</strong>.
          </p>
          <p>
            Nuestros eventos incluyen talleres, charlas inspiradoras y sesiones
            de networking que te ayudarán a ampliar tus conocimientos y tu{" "}
            <strong>red de contactos</strong>.
          </p>
          <p>
            Consulta la galería para ver eventos pasados y cómo nuestras
            miembros han crecido en{" "}
            <strong>liderazgo femenino en tecnología</strong>.
          </p>
        </div>

        <ul className="esencia__claves">
          {CLAVES.map(({ Icono, titulo, texto }) => (
            <li key={titulo} className="esencia__clave">
              <span className="esencia__clave-disco" aria-hidden="true">
                <Icono />
              </span>
              <span className="esencia__clave-titulo">{titulo}</span>
              <span className="esencia__clave-texto">{texto}</span>
            </li>
          ))}
        </ul>
      </div>

      <GaleriaEventos fotos={fotos} />
    </div>
  </section>
);

export default SeccionEsencia;
