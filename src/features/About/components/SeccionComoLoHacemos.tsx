import { Mic, Users } from "lucide-react";
import "./SeccionComoLoHacemos.css";

/*
 * Tercera sección de «Quiénes somos»: cómo trabaja la comunidad. Recoge los
 * dos párrafos largos que antes iban bajo las tarjetas de misión y visión (y
 * que en el móvil estaban ocultos).
 */
const SeccionComoLoHacemos: React.FC = () => (
  <section className="como bg4 fc-manchas" aria-labelledby="como-titulo">
    <div className="fc-puntos fc-puntos--abajo-izquierda" aria-hidden="true" />
    <div className="como__contenedor">
      <div className="como__texto">
        <p className="fc-antetitulo fc-antetitulo--naranja">Cómo lo hacemos</p>
        <h2 className="fc-titulo-seccion como__titulo" id="como-titulo">
          Creamos espacios para conectar, compartir y{" "}
          <span className="fc-rotulador">crecer</span>
        </h2>
        <p className="como__parrafo">
          Reunimos a mujeres STEM en espacios donde puedan conocerse, compartir
          experiencias y crear conexiones que impulsen su desarrollo personal y
          profesional. Nuestros encuentros abordan la tecnología desde
          diferentes perspectivas: desde conocimientos técnicos hasta
          liderazgo, soft skills, bienestar profesional y oportunidades dentro
          del sector.
        </p>
        <p className="como__cierre">
          Porque cuando una mujer comparte su experiencia, no solo cuenta su
          historia: también puede abrir camino para muchas otras.
        </p>
      </div>

      <div className="como__tarjetas">
        <div className="fc-capa como__capa" aria-hidden="true" />
        <ul className="como__lista">
          <li className="como__tarjeta fc-tarjeta">
            <div className="como__fila">
              <div className="fc-disco" aria-hidden="true">
                <Mic />
              </div>
              <h3 className="como__nombre">Referentes</h3>
            </div>
            <p className="como__texto-tarjeta">
              Damos visibilidad a mujeres que ya están construyendo su camino
              profesional, invitándolas a compartir su experiencia como ponentes
              y referentes.{" "}
              <strong>
                Queremos que otras mujeres puedan verse reflejadas en ellas,
                descubrir nuevos caminos y sentir que también pueden llegar
                hasta allí.
              </strong>
            </p>
          </li>
          <li className="como__tarjeta fc-tarjeta">
            <div className="como__fila">
              <div className="fc-disco fc-disco--naranja" aria-hidden="true">
                <Users />
              </div>
              <h3 className="como__nombre">Colaboraciones</h3>
            </div>
            <p className="como__texto-tarjeta">
              Colaboramos con empresas, organizaciones y profesionales para
              acercar nuestra comunidad al ecosistema tecnológico y generar
              encuentros de los que puedan surgir nuevas ideas, relaciones y
              oportunidades.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default SeccionComoLoHacemos;
