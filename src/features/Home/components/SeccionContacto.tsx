import type { ReactNode } from "react";
import { Handshake, Heart, MessageCircle, Users } from "lucide-react";
import OptimizedImage from "../../../components/OptimizedImage";
import "./SeccionContacto.css";

/** Lo que se puede hacer desde aquí. El icono es decoración: el título ya lo dice. */
const MOTIVOS = [
  {
    titulo: "Escríbenos",
    texto: "Cuéntanos tu duda, tu idea o lo que necesites.",
    Icono: MessageCircle,
    tono: "lila",
  },
  {
    titulo: "Colabora",
    texto:
      "Si quieres proponer una iniciativa o colaborar desde tu empresa, nos encantará conocerla.",
    Icono: Handshake,
    tono: "naranja",
  },
  {
    titulo: "Forma parte",
    texto:
      "Únete a una comunidad diversa, inclusiva y en constante crecimiento.",
    Icono: Users,
    tono: "lila",
  },
] as const;

/*
 * Última sección de la home: el formulario de contacto con un collage de
 * fotos y los motivos para escribir.
 *
 * Solo maqueta. El formulario llega como `children` desde HomePage, con su
 * estado, su envío y su diseño tal como estaban: aquí no se toca.
 *
 * Fondo `bg2` (azul oscuro). Los textos van en claro con `fc-sobre-oscuro`.
 * Etiquetas, lema, chispas y curva del collage son decoración (`aria-hidden`):
 * lo que dicen ya lo cuentan el título y los motivos.
 */
const SeccionContacto: React.FC<{ children: ReactNode }> = ({ children }) => (
  <section
    className="contacto bg2 fc-sobre-oscuro"
    aria-labelledby="contacto-titulo"
  >
    <div className="contacto__rejilla">
      <header className="contacto__cabecera">
        <p className="fc-antetitulo fc-antetitulo--naranja">
          Únete a femCoders
        </p>
        <h2 className="fc-titulo-seccion contacto__titulo" id="contacto-titulo">
          Hablemos
          <br />y construyamos <span className="fc-rotulador">juntas</span>
        </h2>
        <p className="contacto__entradilla">
          Si tienes alguna pregunta, quieres colaborar, proponer un evento o
          simplemente formar parte de nuestra comunidad, estaremos encantadas de
          leerte.
        </p>
      </header>

      <div className="contacto__formulario">{children}</div>

      <div className="contacto__visual">
        <div className="contacto__collage">
          <figure className="contacto__foto contacto__foto--grupo">
            <OptimizedImage
              src="/fundadoras-asociacion-femCodersClub.png"
              alt="Cuatro mujeres de FemCoders Club se hacen un selfi sonriendo durante un evento"
            />
          </figure>
          <figure className="contacto__foto contacto__foto--charla">
            <OptimizedImage
              src="/assets/home-images/mujeresTech.webp"
              alt="Público de una charla de FemCoders Club: mujeres sentadas escuchan con atención y sonríen"
            />
          </figure>
          <figure className="contacto__foto contacto__foto--networking">
            <OptimizedImage
              src="/assets/home-images/codersEventoFemCodersClub.webp"
              alt="Cuatro asistentes posan abrazadas y sonrientes durante el networking de un evento de FemCoders Club"
            />
          </figure>

          <div className="contacto__decoracion" aria-hidden="true">
            <span className="contacto__etiqueta contacto__etiqueta--inspira">
              <Heart /> Comunidad que inspira
            </span>
            <span className="contacto__etiqueta contacto__etiqueta--eventos">
              <Users /> Eventos · Networking · Oportunidades
            </span>
            <svg className="contacto__chispas" viewBox="0 0 60 60">
              <path d="M18 4 L10 28" />
              <path d="M48 14 L26 34" />
              <path d="M56 42 L32 44" />
            </svg>
            {/* Mismo alto/ancho que su caja (aspect-ratio en el CSS): no se estira y la punta no se deforma. */}
            <svg className="contacto__curva" viewBox="0 0 200 45">
              <path d="M196 6 C 170 44, 50 46, 14 10" />
              <path d="M16 18 L14 10 L22 12" />
            </svg>
          </div>
        </div>

        <div className="contacto__cierre">
          <p className="contacto__lema" aria-hidden="true">
            Juntas
            <br />
            llegamos
            <br />
            más lejos
            <svg
              className="contacto__subrayado"
              viewBox="0 0 140 20"
              preserveAspectRatio="none"
            >
              <path d="M3 16 C 40 4, 95 2, 137 8" />
            </svg>
          </p>

          <ul className="contacto__motivos">
            {MOTIVOS.map(({ titulo, texto, Icono, tono }) => (
              <li key={titulo} className="contacto__motivo">
                <span
                  className={`contacto__icono contacto__icono--${tono}`}
                  aria-hidden="true"
                >
                  <Icono />
                </span>
                <div>
                  <h3 className="contacto__motivo-titulo">{titulo}</h3>
                  <p className="contacto__motivo-texto">{texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default SeccionContacto;
