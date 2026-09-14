import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CommentsSection from "../../components/CommentsSection";
import "../../page/PostStyles.css";

import ShareButtons from "../../components/ShareButtons";
import PostImage from "../../components/PostImage";
import { articleSchema } from "../../components/articleSchema";
import { urlAbsoluta } from "../../components/siteUrl";

/*
  Los dos códigos que aparecen en el post son de uso ilimitado: por muchas
  personas que los usen, siguen funcionando. Por eso pueden estar a la vista.

  Los cinco pases completos gratuitos que el congreso nos dio como Ambassadors
  son de un solo uso y valen 495 € cada uno. No están en este archivo a
  propósito: publicados se los llevaría quien pasara por aquí primero, que no
  tiene por qué ser alguien de la comunidad. Se reparten por correo desde la
  newsletter, y la vía de reparto está pendiente de decidir.
*/
const CODIGO_EXPO_GRATIS = "THBJGMZT";
const CODIGO_CONGRESO_DESCUENTO = "SABSUJNR";

const REGISTRO_BASE = "https://registration.firabarcelona.com/?cod_prom=";
const URL_EXPO_GRATIS = `${REGISTRO_BASE}${CODIGO_EXPO_GRATIS}#en_GB/J137026`;
const URL_CONGRESO_DESCUENTO = `${REGISTRO_BASE}${CODIGO_CONGRESO_DESCUENTO}#en_GB/J137026`;

const BarcelonaCybersecurityCongress26: React.FC = () => {
  const postId = 50;

  return (
    <div className="blog-post">
      <Helmet>
        <title>
          FemCoders Club, nueva Ambassador del Barcelona Cybersecurity Congress
          2026 | FemCoders Club
        </title>
        <meta
          name="description"
          content="Somos Ambassadors oficiales del Barcelona Cybersecurity Congress 2026, del 3 al 5 de noviembre en Fira de Barcelona. Te contamos qué vas a encontrar allí y cómo conseguir tu entrada gratis o con un 54% de descuento."
        />
        <meta
          name="keywords"
          content="Barcelona Cybersecurity Congress 2026, BCC26, ciberseguridad, Fira de Barcelona, mujeres en ciberseguridad, FemCoders Club, Ambassador, hacking village, entradas con descuento, mujeres en tecnología"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/barcelona-cybersecurity-congress-2026"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FemCoders Club, nueva Ambassador del Barcelona Cybersecurity Congress 2026 | FemCoders Club"
        />
        <meta
          property="og:description"
          content="Somos Ambassadors oficiales del Barcelona Cybersecurity Congress 2026, del 3 al 5 de noviembre en Fira de Barcelona. Te contamos qué vas a encontrar allí y cómo conseguir tu entrada gratis o con un 54% de descuento."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/barcelona-cybersecurity-congress-2026"
        />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/assets/noticias/bcc26-femcodersclub.jpg"
        />
        <meta
          property="og:image:alt"
          content="Barcelona Cybersecurity Congress 2026 x FemCoders Club. Los logotipos del congreso y de FemCoders Club, uno junto al otro, con las fechas del 3 al 5 de noviembre de 2026"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club, nueva Ambassador del Barcelona Cybersecurity Congress 2026"
        />
        <meta
          name="twitter:description"
          content="Del 3 al 5 de noviembre en Fira de Barcelona. Entrada gratuita a la zona de expositores y un 54% de descuento en el pase completo para nuestra comunidad."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/bcc26-femcodersclub.jpg"
        />

        <meta
          property="article:published_time"
          content="2026-09-15T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
        <meta property="article:tag" content="Ciberseguridad" />
        <meta property="article:tag" content="Barcelona Cybersecurity Congress" />
        <meta property="article:tag" content="BCC26" />
        <meta property="article:tag" content="Ambassador" />
        <meta property="article:tag" content="Mujeres en Tech" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <script type="application/ld+json">
          {JSON.stringify(
            articleSchema({
              type: "NewsArticle",
              path: "/noticias/barcelona-cybersecurity-congress-2026",
              headline:
                "FemCoders Club, nueva Ambassador del Barcelona Cybersecurity Congress 2026",
              description:
                "Somos Ambassadors oficiales del Barcelona Cybersecurity Congress 2026, del 3 al 5 de noviembre en Fira de Barcelona. Te contamos qué vas a encontrar allí y cómo conseguir tu entrada gratis o con un 54% de descuento.",
              image: "/assets/noticias/bcc26-femcodersclub.jpg",
              datePublished: "2026-09-15T10:00:00Z",
              about: {
                "@type": "Event",
                name: "Barcelona Cybersecurity Congress 2026",
                // El `image` del artículo no lo hereda el evento: Google valida
                // el `Event` como entidad independiente de quien lo contiene.
                image: urlAbsoluta("/assets/noticias/bcc26-femcodersclub.jpg"),
                description:
                  "Congreso europeo de ciberseguridad con un centenar de expositores, un hacking village y un programa centrado en IA aplicada a la ciberdefensa, seguridad en 5G y 6G, gobernanza de datos y normativa europea.",
                startDate: "2026-11-03T09:00:00+01:00",
                endDate: "2026-11-05T18:00:00+01:00",
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode:
                  "https://schema.org/OfflineEventAttendanceMode",
                url: "https://www.barcelonacybersecuritycongress.com/",
                location: {
                  "@type": "Place",
                  name: "Fira de Barcelona, recinto Gran Via",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Carrer de la Botànica, 62",
                    addressLocality: "L'Hospitalet de Llobregat",
                    addressRegion: "Barcelona",
                    addressCountry: "ES",
                  },
                },
                organizer: {
                  "@type": "Organization",
                  name: "Fira de Barcelona",
                  url: "https://www.barcelonacybersecuritycongress.com/",
                },
                // Dos entradas distintas, dos `offers`. Declarar solo una
                // dejaría fuera justo la que más nos interesa comunicar: que
                // se puede entrar gratis.
                offers: [
                  {
                    "@type": "Offer",
                    name: "Expo+ Pass con código de FemCoders Club",
                    url: URL_EXPO_GRATIS,
                    price: "0",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                  },
                  {
                    "@type": "Offer",
                    name: "Full Congress Pass con código de FemCoders Club",
                    url: URL_CONGRESO_DESCUENTO,
                    price: "225",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                  },
                ],
              },
              keywords: [
                "Barcelona Cybersecurity Congress 2026",
                "BCC26",
                "ciberseguridad",
                "Fira de Barcelona",
                "mujeres en ciberseguridad",
                "FemCoders Club",
                "hacking village",
                "mujeres en tecnología",
              ],
            })
          )}
        </script>
      </Helmet>

      {/* ── Hero image ── */}
      <PostImage
        src="/public-optimized/desktop/assets/noticias/bcc26-femcodersclub.webp"
        mobileSrc="/public-optimized/mobile/assets/noticias/bcc26-femcodersclub.webp"
        desktopSrc="/public-optimized/desktop/assets/noticias/bcc26-femcodersclub.webp"
        fallbackSrc="/assets/noticias/bcc26-femcodersclub.jpg"
        alt="Barcelona Cybersecurity Congress 2026 x FemCoders Club. Los logotipos del congreso y de FemCoders Club, uno junto al otro, con las fechas del 3 al 5 de noviembre de 2026 y la sede en Fira de Barcelona"
      />

      <h1 className="blog-post-title">
        FemCoders Club, nueva Ambassador del Barcelona Cybersecurity Congress
        2026
      </h1>

      <ShareButtons
        path="/noticias/barcelona-cybersecurity-congress-2026"
        title="FemCoders Club, nueva Ambassador del Barcelona Cybersecurity Congress 2026"
      />

      {/* ── Intro ── */}
      <div className="intro-text">
        <p>
          La ciberseguridad no es solo un tema técnico: es un reto social. En un
          mundo donde la tecnología lo abarca todo, desde cómo trabajamos hasta
          cómo nos relacionamos, la seguridad digital se ha convertido en una
          prioridad. Pero, ¿quién construye ese futuro seguro?
        </p>
        <br />
        <p>
          Todas deberíamos ser parte de la respuesta, y por eso en FemCoders
          Club estamos encantadas de contarte que somos{" "}
          <strong>
            Ambassadors oficiales del Barcelona Cybersecurity Congress 2026
          </strong>{" "}
          (#BCC26).
        </p>
      </div>

      {/* ── 1. Qué es el BCC26 ── */}
      <div className="highlight-box">
        <h2>El #BCC26: donde la ciberseguridad cobra vida</h2>
        <br />
        <p>
          El{" "}
          <a
            href="https://www.barcelonacybersecuritycongress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
            aria-label="Visitar la web del Barcelona Cybersecurity Congress"
          >
            <strong>Barcelona Cybersecurity Congress</strong>
          </a>{" "}
          no es un congreso más. Es el lugar donde profesionales, empresas,
          startups y expertas se reúnen para debatir los desafíos más urgentes
          del sector, mostrar soluciones que ya están cambiando las reglas del
          juego y conectar a quienes están construyendo un ecosistema digital
          más resiliente.
        </p>
        <br />
        <p>
          Este año se celebra del <strong>3 al 5 de noviembre de 2026</strong>{" "}
          en <strong>Fira de Barcelona, recinto Gran Via</strong>. Es un cambio
          importante respecto a otras ediciones: el congreso se mueve de mayo a
          noviembre para celebrarse a la vez que el Smart City Expo World
          Congress, así que la semana viene cargada.
        </p>
        <br />
        <p>
          Habrá alrededor de un centenar de expositores, un programa de charlas
          y un <strong>hacking village</strong>. Los ejes de esta edición son la
          inteligencia artificial aplicada a la ciberdefensa, la seguridad en
          redes 5G y 6G, la gobernanza de datos y el cumplimiento de la
          normativa europea de ciberseguridad.
        </p>
      </div>

      {/* ── 2. Por qué estamos aquí ── */}
      <div className="highlight-box">
        <h2>¿Por qué FemCoders Club está aquí?</h2>
        <br />
        <p>
          En FemCoders Club tenemos claro que la tecnología avanza cuando es
          diversa. La ciberseguridad necesita talento, sí, pero también
          perspectivas distintas, voces nuevas y manos dispuestas a innovar. Y
          eso solo se logra si todas tenemos un asiento en la mesa.
        </p>
        <br />
        <p>Como Ambassadors del #BCC26, lo que queremos es:</p>
        <br />
        <p>
          <strong>Llevar el congreso a nuestra comunidad.</strong> Porque
          queremos que tú también formes parte de esta conversación.
        </p>
        <br />
        <p>
          <strong>Romper barreras.</strong> Mostrar que la ciberseguridad no es
          un mundo cerrado, sino un sector lleno de oportunidades para mujeres y
          personas infrarrepresentadas.
        </p>
        <br />
        <p>
          <strong>Crear conexiones reales.</strong> Entre profesionales, entre
          curiosas, entre quienes ya trabajan en el sector y quienes quieren
          empezar.
        </p>
      </div>

      {/* ── 3. Qué vas a encontrar ── */}
      <div className="highlight-box">
        <h2>¿Qué puedes esperar del #BCC26?</h2>
        <br />
        <p>
          Si te interesa la tecnología, la ciberseguridad o simplemente quieres
          saber más sobre este mundo, el congreso es tu oportunidad para:
        </p>
        <br />
        <p>
          <strong>Descubrir las últimas tendencias.</strong> Desde la
          inteligencia artificial hasta la protección de datos, pasando por los
          riesgos emergentes.
        </p>
        <br />
        <p>
          <strong>Conocer proyectos que están cambiando cosas.</strong>{" "}
          Startups, herramientas y soluciones que marcan la diferencia.
        </p>
        <br />
        <p>
          <strong>Hacer networking de verdad.</strong> Con profesionales,
          empresas y posibles mentoras que pueden abrirte puertas.
        </p>
        <br />
        <p>
          <strong>Encontrar tu lugar en el sector.</strong> Ya sea para dar el
          salto profesional o para inspirarte en tu próximo proyecto.
        </p>
        <br />
        <p>
          <strong>Aprender de las mejores.</strong> Talleres, charlas y debates
          con expertas internacionales.
        </p>
      </div>

      {/* ── 4. Las entradas ── */}
      <div className="highlight-box">
        <h2>Tu entrada, con nuestro código</h2>
        <br />
        <p>
          Aquí viene la parte buena de ser Ambassadors: tenemos códigos para ti.
          Hay dos formas de entrar y la diferencia entre una y otra es cuánto
          del congreso ves.
        </p>
        <br />

        <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
          Entrada Expo+, gratis
        </h3>
        <p>
          Te da acceso a la <strong>zona de expositores</strong>: el centenar de
          empresas y startups que estarán allí, con sus demos y su gente. Es
          gratuita con nuestro código y no tiene límite de plazas, así que
          puedes compartirla con quien quieras.
        </p>
        <br />
        <p>
          Código: <strong>{CODIGO_EXPO_GRATIS}</strong>
        </p>
        <br />
        <a
          href={URL_EXPO_GRATIS}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#4737bb",
            color: "white",
            padding: "12px 30px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(71, 55, 187, 0.3)",
          }}
          aria-label="Conseguir la entrada Expo+ gratuita con el código de FemCoders Club"
        >
          Conseguir mi entrada gratis
        </a>
        <br />
        <br />

        <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
          Pase completo al congreso, 225 € en vez de 495 €
        </h3>
        <p>
          Este es el pase que te abre <strong>todo</strong>: las charlas, el
          programa de conferencias y el hacking village, además de la zona de
          expositores. Con nuestro código sale por{" "}
          <strong>225 € en lugar de 495 €</strong>, un 54% menos, y tampoco
          tiene límite de plazas.
        </p>
        <br />
        <p>
          Código: <strong>{CODIGO_CONGRESO_DESCUENTO}</strong>
        </p>
        <br />
        <a
          href={URL_CONGRESO_DESCUENTO}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#4737bb",
            color: "white",
            padding: "12px 30px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(71, 55, 187, 0.3)",
          }}
          aria-label="Conseguir el pase completo al congreso con el 54% de descuento de FemCoders Club"
        >
          Conseguir mi pase completo
        </a>
      </div>

      {/*
        ── 5. Los cinco pases gratuitos ──

        PENDIENTE: esta sección está a la espera de que se decida cómo se
        reparten los cinco Full Congress Pass gratuitos (sorteo entre
        suscriptoras o asignación directa). Según lo que se elija, aquí va:

        - Si es sorteo: en qué consiste, quién puede participar, fecha de cierre
          y cuándo se anuncian las ganadoras. Hace falta también una línea sobre
          el tratamiento de datos y un enlace a las bases.
        - Si es asignación directa: a quién van dirigidos y cómo pedirlos.

        En ninguno de los dos casos van aquí los códigos. Se envían por correo
        a cada persona, porque cada uno se gasta con un solo uso.
      */}

      {/* ── 6. Cierre ── */}
      <div className="highlight-box">
        <h2>Barcelona nos espera</h2>
        <br />
        <p>
          El Barcelona Cybersecurity Congress 2026 será el punto de encuentro
          para quienes creen en un futuro digital más seguro, inclusivo e
          innovador. Y nosotras estaremos ahí, representando a una comunidad que
          no para de crecer.
        </p>
        <br />
        <p>
          <strong>Cuándo:</strong> del 3 al 5 de noviembre de 2026
        </p>
        <p>
          <strong>Dónde:</strong> Fira de Barcelona, recinto Gran Via
        </p>
        <br />
        <p>
          ¿Te apuntas? Porque la ciberseguridad no es solo para algunas: es para
          todas las que queremos ser parte de la solución.
        </p>
        <br />
        <p>
          Si vas a venir, cuéntanoslo por{" "}
          <Link to="/contacto" className="highlight-link">
            aquí
          </Link>{" "}
          o en nuestras redes. Nos encantaría coincidir contigo esos días.
        </p>
      </div>

      <div className="author-info">
        <p>
          Escrito por: <strong>FemCoders Club</strong>
        </p>
        <p>
          Fecha de publicación: <strong>15 de septiembre, 2026</strong>
        </p>
      </div>

      <div className="back-to-blog-container">
        <a href="/blog" className="back-to-blog">
          Volver al Blog
        </a>
      </div>

      <CommentsSection postId={postId} />
    </div>
  );
};

export default BarcelonaCybersecurityCongress26;
