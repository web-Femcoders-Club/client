import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BotonRotacion from "../../../components/ui/BotonRotacion";
import { IMPACTO as I } from "../contenido";
import "./SeccionImpacto.css";

const ID_CINTA = "impacto-alianzas";

/*
 * La cinta lleva la lista dos veces seguidas y se desplaza la mitad de su
 * ancho, así el final empalma con el principio. La segunda copia va oculta al
 * lector y fuera del orden de tabulación: cada alianza se anuncia una vez.
 */
const ListaAlianzas: React.FC<{ copia?: boolean }> = ({ copia = false }) => (
  <ul className="impacto__alianzas-lista" aria-hidden={copia || undefined}>
    {I.alianzas.map(({ papel, nombre, enlace, porVenir }) => (
      <li key={nombre}>
        <Link
          to={enlace}
          className={`impacto__ficha${porVenir ? " impacto__ficha--por-venir" : ""}`}
          tabIndex={copia ? -1 : undefined}
        >
          <span className="impacto__papel">{papel}</span>
          <span className="impacto__nombre">{nombre}</span>
          <ArrowRight className="impacto__flecha" aria-hidden="true" />
        </Link>
      </li>
    ))}
  </ul>
);

/*
 * Tercera sección de /equipo: cifras de la comunidad y alianzas. Fondo `bg4`,
 * que empieza en el lavanda en que termina `bg3` de los valores. Los textos
 * viven en ../contenido.ts y las cifras en src/data/cifrasComunidad.ts.
 *
 * La cinta de alianzas se mueve sola: se para con el ratón encima, con el
 * foco dentro (CSS) y con el botón (WCAG 2.2.2). Con «reducir movimiento» no
 * se mueve y se desplaza a mano.
 */
const SeccionImpacto: React.FC = () => {
  const [detenida, setDetenida] = useState(false);

  return (
    <section className="impacto bg4 fc-manchas" aria-labelledby="impacto-titulo">
      <div className="fc-puntos fc-puntos--arriba-derecha" aria-hidden="true" />
      <div className="impacto__contenedor">
        <div className="impacto__arriba">
          <div data-aos="fade-right">
            <p className="fc-antetitulo">{I.antetitulo}</p>
            <h2 className="fc-titulo-seccion impacto__titulo" id="impacto-titulo">
              {I.titulo.texto} <span className="fc-rotulador">{I.titulo.destacado}</span>
            </h2>
            <p className="impacto__parrafo">{I.parrafo}</p>
          </div>

          <ul className="impacto__cifras" data-aos="fade-up">
            {I.cifras.map(({ numero, rotulo }) => (
              <li key={rotulo} className="impacto__cifra">
                <p className="impacto__numero">{numero}</p>
                <p className="impacto__rotulo">{rotulo}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="impacto__alianzas">
          <div className="impacto__alianzas-cabeza">
            <h3 className="impacto__alianzas-titulo">{I.alianzasTitulo}</h3>
            <div className="impacto__alianzas-derecha">
              <p className="impacto__alianzas-nota">{I.alianzasNota}</p>
              <div className="impacto__boton">
                <BotonRotacion
                  girando={!detenida}
                  alAlternar={() => setDetenida((valor) => !valor)}
                  de="alianzas"
                  controla={ID_CINTA}
                />
              </div>
            </div>
          </div>

          <div
            className={`impacto__cinta${detenida ? " impacto__cinta--detenida" : ""}`}
            id={ID_CINTA}
          >
            <div className="impacto__pista">
              <ListaAlianzas />
              <ListaAlianzas copia />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionImpacto;
