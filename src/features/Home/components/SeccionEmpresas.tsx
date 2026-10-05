import { useState } from "react";
import BotonRotacion from "../../../components/ui/BotonRotacion";
import {
  ANIO_PRIMERA_COLABORACION,
  COLABORADORAS,
  type Colaboradora,
} from "../../../data/colaboradoras";
import "./SeccionEmpresas.css";

const ID_CINTA = "empresas-cinta";

/*
 * Segundos por ficha: con este ritmo la cinta va a la misma velocidad que la
 * de alianzas de /equipo (unos 44 px por segundo), tenga las organizaciones
 * que tenga.
 */
const SEGUNDOS_POR_FICHA = 5.3;

const ORDENADAS = [...COLABORADORAS].sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

const Ficha: React.FC<{ colaboradora: Colaboradora }> = ({ colaboradora: { nombre, imagen } }) => {
  const clasesImagen = [
    "empresas__imagen",
    imagen.tipo === "foto" && "empresas__imagen--foto",
    imagen.encuadre === "izquierda" && "empresas__imagen--izquierda",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className="empresas__ficha">
      <div className={clasesImagen}>
        {/* El nombre va justo debajo: la imagen no añade información. */}
        <img src={imagen.ruta} alt="" loading="lazy" />
      </div>
      <span className="empresas__nombre">{nombre}</span>
    </li>
  );
};

/*
 * La cinta lleva la lista dos veces seguidas y se desplaza la mitad de su
 * ancho, así el final empalma con el principio. La copia va oculta al lector:
 * cada organización se anuncia una vez.
 */
const Lista: React.FC<{ copia?: boolean }> = ({ copia = false }) => (
  <ul className="empresas__lista" aria-hidden={copia || undefined}>
    {ORDENADAS.map((colaboradora) => (
      <Ficha key={colaboradora.nombre} colaboradora={colaboradora} />
    ))}
  </ul>
);

/*
 * «Empresas que han confiado en nosotras», en Inicio, entre Proyectos y
 * Contacto: la prueba de las «30+ empresas» de la portada. Todas por igual,
 * con su logo (o una foto) y su nombre. Los datos son los de
 * src/data/colaboradoras.ts, la misma lista que cuenta el panel; el HTML
 * servido la incluye para quien no ejecuta JavaScript (scripts/prerenderMeta).
 *
 * La cinta se mueve sola: se para con el ratón encima, con el foco dentro
 * (CSS) y con el botón (WCAG 2.2.2). Con «reducir movimiento» no se mueve y se
 * desplaza a mano.
 */
const SeccionEmpresas: React.FC = () => {
  const [detenida, setDetenida] = useState(false);

  return (
    <section className="empresas bg3 fc-manchas" aria-labelledby="empresas-titulo">
      <div className="fc-puntos fc-puntos--abajo-izquierda" aria-hidden="true" />
      <div className="empresas__contenedor">
        <div className="empresas__cabeza" data-aos="fade-up">
          <div>
            <p className="fc-antetitulo fc-antetitulo--naranja">Empresas que nos acompañan</p>
            <h2 className="fc-titulo-seccion empresas__titulo" id="empresas-titulo">
              Empresas que han confiado <span className="fc-rotulador">en nosotras</span>
            </h2>
          </div>
          <p className="empresas__parrafo">
            Estas organizaciones apoyan a FemCoders Club en distintos momentos y comparten nuestra
            visión de un futuro tecnológico más diverso e inclusivo. A través de su participación en
            iniciativas como eventos, talleres, charlas, mentorías y recursos, ayudan a promover un
            entorno donde más mujeres puedan desarrollarse en el sector tech.
          </p>
        </div>

        <div className="empresas__pie">
          <p className="empresas__total">
            <span className="empresas__total-numero">{COLABORADORAS.length}</span>
            <span className="empresas__total-texto">
              empresas y organizaciones desde {ANIO_PRIMERA_COLABORACION}
            </span>
          </p>
          <div className="empresas__boton">
            <BotonRotacion
              girando={!detenida}
              alAlternar={() => setDetenida((valor) => !valor)}
              de="empresas"
              controla={ID_CINTA}
            />
          </div>
        </div>

        <div
          className={`empresas__cinta${detenida ? " empresas__cinta--detenida" : ""}`}
          id={ID_CINTA}
          // Sin enlaces dentro: el foco del teclado entra para poder pararla y desplazarla.
          tabIndex={0}
          role="region"
          aria-label="Empresas y organizaciones colaboradoras"
        >
          <div
            className="empresas__pista"
            style={{ animationDuration: `${COLABORADORAS.length * SEGUNDOS_POR_FICHA}s` }}
          >
            <Lista />
            <Lista copia />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionEmpresas;
