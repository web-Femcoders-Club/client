import { CalendarDays, Rocket, Users } from "lucide-react";
import OptimizedImage from "../../../components/OptimizedImage";
import "./HeroCollage.css";

/** Mismo trazo en el arco y en su máscara: la máscara es la que lo va destapando. */
const ARCO = "M4 2 C 0 70, 50 116, 130 116 C 200 116, 240 80, 258 50";

/*
 * Collage de la portada: tres fotos de la comunidad con etiquetas y el lema
 * «Juntas llegamos más lejos» escrito a mano.
 *
 * Los marcos se nombran por su sitio (grande, izquierda, abajo), no por la
 * foto que llevan, para poder cambiarla sin que el nombre quede falso.
 *
 * Las fotos son contenido y llevan su `alt`. Todo lo demás —etiquetas, lema,
 * chispas, manchas y el arco discontinuo— es decoración y va con
 * `aria-hidden`: lo que dicen las etiquetas ya lo cuentan el titular y el
 * párrafo de al lado, y leído suelto («Comunidad», «Eventos») no aporta nada.
 *
 * Las animaciones viven en HeroCollage.css: una sola entrada de unos 4 s y
 * después todo queda quieto.
 */
const HeroCollage: React.FC = () => (
  <div className="hero-collage">
    <span className="hero-collage__mancha hero-collage__mancha--lila" aria-hidden="true" />
    <span className="hero-collage__mancha hero-collage__mancha--rosa" aria-hidden="true" />

    <figure className="hero-collage__foto hero-collage__foto--grande">
      <OptimizedImage
        src="/assets/eventos2026/hackaton-femCodersClub-2026.jpeg"
        alt="El equipo de FemCoders Club trabaja con portátiles en torno a una mesa durante el hackathon HackBarna AI Summit 2026"
        loading="eager"
        fetchPriority="high"
      />
    </figure>

    <figure className="hero-collage__foto hero-collage__foto--izquierda">
      <OptimizedImage
        src="/assets/home-images/asociacion-mujeresTech-Barcelona.webp"
        alt="Las cofundadoras de FemCoders Club se hacen un selfi al aire libre"
        loading="eager"
      />
    </figure>

    <figure className="hero-collage__foto hero-collage__foto--abajo">
      <OptimizedImage
        src="/assets/eventos2026/fundadoras-femCodersClub-2026.jpeg"
        alt="Las cinco cofundadoras de FemCoders Club se hacen un selfi sonriendo al sol en Barcelona"
        loading="eager"
      />
    </figure>

    <div className="hero-collage__decoracion" aria-hidden="true">
      <span className="hero-collage__etiqueta hero-collage__etiqueta--comunidad">
        <Users /> Comunidad
        <svg className="chispas-etiqueta" viewBox="0 0 20 20">
          <path pathLength={1} d="M3 10 L1 1" />
          <path pathLength={1} d="M8 11 L15 2" />
          <path pathLength={1} d="M10 17 L19 12" />
        </svg>
      </span>
      <span className="hero-collage__etiqueta hero-collage__etiqueta--eventos">
        <CalendarDays /> Eventos
        <svg className="chispas-etiqueta" viewBox="0 0 20 20">
          <path pathLength={1} d="M14 1 L16 8" />
          <path pathLength={1} d="M4 5 L10 10" />
          <path pathLength={1} d="M1 14 L8 14" />
        </svg>
      </span>
      <span className="hero-collage__etiqueta hero-collage__etiqueta--oportunidades">
        <Rocket /> Oportunidades
        <svg className="chispas-etiqueta" viewBox="0 0 20 20">
          <path pathLength={1} d="M4 2 L6 9" />
          <path pathLength={1} d="M12 1 L11 8" />
          <path pathLength={1} d="M19 6 L14 11" />
        </svg>
      </span>

      <p className="hero-collage__lema">
        Juntas
        <br />
        llegamos
        <br />
        más lejos
        <svg className="hero-collage__subrayado" viewBox="0 0 140 20" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hero-subrayado-degradado" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" style={{ stopColor: "var(--color-primary)" }} />
              <stop offset="1" style={{ stopColor: "var(--color-lila)" }} />
            </linearGradient>
          </defs>
          <path pathLength={1} d="M3 16 C 40 4, 95 2, 137 8" />
        </svg>
      </p>

      <svg className="hero-collage__chispas hero-collage__chispas--izquierda" viewBox="0 0 60 60">
        <path pathLength={1} d="M42 4 L50 30" />
        <path pathLength={1} d="M10 18 L32 34" />
        <path pathLength={1} d="M4 48 L28 46" />
      </svg>

      <svg className="hero-collage__curva" viewBox="0 0 260 120" preserveAspectRatio="none">
        <defs>
          {/* Los primeros guiones en naranja y el resto en violeta: corte seco, sin degradado. */}
          <linearGradient id="hero-curva-degradado" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" style={{ stopColor: "var(--color-primary)" }} />
            <stop offset=".2" style={{ stopColor: "var(--color-primary)" }} />
            <stop offset=".2" style={{ stopColor: "var(--color-secondary)" }} />
            <stop offset="1" style={{ stopColor: "var(--color-secondary)" }} />
          </linearGradient>
          <mask
            id="hero-curva-mascara"
            maskUnits="userSpaceOnUse"
            x="-20"
            y="-20"
            width="300"
            height="160"
          >
            <path className="hero-collage__mascara-trazo" pathLength={1} d={ARCO} />
          </mask>
        </defs>
        <path mask="url(#hero-curva-mascara)" d={ARCO} />
      </svg>
    </div>
  </div>
);

export default HeroCollage;
