import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost, TarjetasPost } from "../../components/post/PiezasPost";
import { articleSchema } from "../../components/articleSchema";
import { urlAbsoluta } from "../../components/siteUrl";

/*
  Los dos códigos que aparecen en el post son de uso ilimitado: por muchas
  personas que los usen, siguen funcionando. Por eso pueden estar a la vista.

  Los cinco pases completos gratuitos que el congreso nos dio como Ambassadors
  son de un solo uso y valen 495 € cada uno. Está decidido que no salgan en la
  web: publicados se los llevaría quien pasara por aquí primero, que no tiene
  por qué ser alguien de la comunidad. Se reparten por correo desde la
  newsletter, fuera de este archivo.
*/
const CODIGO_EXPO_GRATIS = "THBJGMZT";
const CODIGO_CONGRESO_DESCUENTO = "SABSUJNR";

const REGISTRO_BASE = "https://registration.firabarcelona.com/?cod_prom=";
const URL_EXPO_GRATIS = `${REGISTRO_BASE}${CODIGO_EXPO_GRATIS}#en_GB/J137026`;
const URL_CONGRESO_DESCUENTO = `${REGISTRO_BASE}${CODIGO_CONGRESO_DESCUENTO}#en_GB/J137026`;

const BarcelonaCybersecurityCongress26: React.FC = () => (
  <>
      <Helmet>
        <title>
          FemCoders Club, nueva Ambassador del Barcelona Cybersecurity Congress
          2026 | FemCoders Club
        </title>
        {/*
          158 caracteres es lo que enseña Google. Esta cabe entera: si se
          corta, lo primero que se pierde es la oferta, que es justo el
          motivo por el que alguien entra.
        */}
        <meta
          name="description"
          content="Barcelona Cybersecurity Congress 2026, del 3 al 5 de noviembre en Fira de Barcelona. Somos Ambassadors: entrada gratis y el pase completo con un 54 % menos."
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
          content="FemCoders Club, nueva Ambassador del Barcelona Cybersecurity Congress 2026"
        />
        <meta
          property="og:description"
          content="Barcelona Cybersecurity Congress 2026, del 3 al 5 de noviembre en Fira de Barcelona. Somos Ambassadors: entrada gratis y el pase completo con un 54 % menos."
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
          content="Cartel del Barcelona Cybersecurity Congress 2026 con el lema «We are ambassadors of the #BCC26» y el logotipo de FemCoders Club"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club, nueva Ambassador del Barcelona Cybersecurity Congress 2026"
        />
        <meta
          name="twitter:description"
          content="Del 3 al 5 de noviembre en Fira de Barcelona. Entrada gratuita a la zona de expositores y un 54 % de descuento en el pase completo para nuestra comunidad."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/assets/noticias/bcc26-femcodersclub.jpg"
        />

        <meta
          property="article:published_time"
          content="2026-09-17T10:00:00Z"
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
                "Barcelona Cybersecurity Congress 2026, del 3 al 5 de noviembre en Fira de Barcelona. Somos Ambassadors: entrada gratis y el pase completo con un 54 % menos.",
              image: "/assets/noticias/bcc26-femcodersclub.jpg",
              datePublished: "2026-09-17T10:00:00Z",
              about: {
                "@type": "Event",
                name: "Barcelona Cybersecurity Congress 2026",
                // El `image` del artículo no lo hereda el evento: Google valida
                // el `Event` como entidad independiente de quien lo contiene.
                image: urlAbsoluta("/assets/noticias/bcc26-femcodersclub.jpg"),
                description:
                  "Congreso europeo de ciberseguridad con un centenar de expositores, un hacking village y un programa centrado en IA aplicada a la ciberdefensa, seguridad en 5G y 6G, gobernanza de datos y normativa europea.",
                // Fecha sin hora a propósito: el horario de apertura no está
                // confirmado contra el programa oficial y la página tampoco lo
                // dice. Declarar 09:00–18:00 sería inventarse una precisión.
                startDate: "2026-11-03",
                endDate: "2026-11-05",
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode:
                  "https://schema.org/OfflineEventAttendanceMode",
                url: "https://www.barcelonacybersecuritycongress.com/",
                location: {
                  "@type": "Place",
                  name: "Fira de Barcelona, recinto Gran Via, hall 2.1",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Carrer de la Botànica, 62",
                    addressLocality: "L'Hospitalet de Llobregat",
                    addressRegion: "Barcelona",
                    postalCode: "08908",
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
                    // Desde que los códigos son públicos, que es cuando se
                    // publica este post.
                    validFrom: "2026-09-17T10:00:00Z",
                  },
                  {
                    "@type": "Offer",
                    name: "Full Congress Pass con código de FemCoders Club",
                    url: URL_CONGRESO_DESCUENTO,
                    price: "225",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    validFrom: "2026-09-17T10:00:00Z",
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

    {/*
      El `speakable` del prerender apunta al título y a la
      entradilla (`.post__titulo`, `.post__entradilla`): esto es lo que un asistente lee cuando le preguntan por
      el congreso. Por eso la intro lleva las fechas, la sede y las dos
      entradas, y no solo el gancho.
    */}
    <PlantillaPost
      ruta="/noticias/barcelona-cybersecurity-congress-2026"
      titulo="FemCoders Club, nueva Ambassador del Barcelona Cybersecurity Congress 2026"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={50}
      entradilla={
        <>
          <p>
            La ciberseguridad no es solo un tema técnico: es un reto social. En
            un mundo donde la tecnología lo abarca todo, desde cómo trabajamos
            hasta cómo nos relacionamos, la seguridad digital se ha convertido
            en una prioridad. Pero ¿quién construye ese futuro seguro?
          </p>
          <p>
            Todas deberíamos ser parte de la respuesta, y por eso en FemCoders
            Club estamos encantadas de contarte que somos{" "}
            <strong>
              Ambassadors oficiales del Barcelona Cybersecurity Congress 2026
            </strong>{" "}
            (#BCC26).
          </p>
          <p>
            El congreso se celebra del{" "}
            <strong>3 al 5 de noviembre de 2026</strong> en{" "}
            <strong>Fira de Barcelona, recinto Gran Via, hall 2.1</strong>. Como
            Ambassadors tenemos dos códigos para la comunidad: uno que te da la{" "}
            <strong>entrada Expo+ gratis</strong> y otro que deja el{" "}
            <strong>pase completo en 225 € en lugar de 495 €</strong>. Los dos
            están más abajo y ninguno tiene límite de plazas.
          </p>
        </>
      }
    >
      <SeccionPost titulo="El #BCC26: donde la ciberseguridad cobra vida">
        <p>
          El{" "}
          <a
            href="https://www.barcelonacybersecuritycongress.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Barcelona Cybersecurity Congress</strong>
          </a>{" "}
          no es un congreso más. Es el lugar donde profesionales, empresas,
          startups y expertas se reúnen para debatir los desafíos más urgentes
          del sector, mostrar soluciones que ya están cambiando las reglas del
          juego y conectar a quienes están construyendo un ecosistema digital
          más resiliente.
        </p>
        <p>
          Este año se celebra del <strong>3 al 5 de noviembre de 2026</strong>{" "}
          en <strong>Fira de Barcelona, recinto Gran Via</strong>. Es un cambio
          importante respecto a otras ediciones: el congreso se mueve de mayo a
          noviembre para celebrarse a la vez que el Smart City Expo World
          Congress, así que la semana viene cargada.
        </p>
        <p>
          Habrá alrededor de un centenar de expositores, un programa de charlas
          y un <strong>hacking village</strong>. Los ejes de esta edición son la
          inteligencia artificial aplicada a la ciberdefensa, la seguridad en
          redes 5G y 6G, la gobernanza de datos y el cumplimiento de la
          normativa europea de ciberseguridad.
        </p>
      </SeccionPost>

      <SeccionPost titulo="¿Por qué FemCoders Club está aquí?">
        <p>
          En FemCoders Club tenemos claro que la tecnología avanza cuando es
          diversa. La ciberseguridad necesita talento, sí, pero también
          perspectivas distintas, voces nuevas y manos dispuestas a innovar. Y
          eso solo se logra si todas tenemos un asiento en la mesa.
        </p>
        <p>Como Ambassadors del #BCC26, lo que queremos es:</p>
        <TarjetasPost
          columnas={3}
          tarjetas={[
            {
              titulo: "Llevar el congreso a nuestra comunidad",
              texto:
                "Porque queremos que tú también formes parte de esta conversación.",
            },
            {
              titulo: "Romper barreras",
              texto:
                "Mostrar que la ciberseguridad no es un mundo cerrado, sino un sector lleno de oportunidades para mujeres y personas infrarrepresentadas.",
            },
            {
              titulo: "Crear conexiones reales",
              texto:
                "Entre profesionales, entre curiosas, entre quienes ya trabajan en el sector y quienes quieren empezar.",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="¿Qué puedes esperar del #BCC26?">
        <p>
          Si te interesa la tecnología, la ciberseguridad o simplemente quieres
          saber más sobre este mundo, el congreso es tu oportunidad para:
        </p>
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Descubrir las últimas tendencias",
              texto:
                "Desde la inteligencia artificial hasta la protección de datos, pasando por los riesgos emergentes.",
            },
            {
              titulo: "Conocer proyectos que están cambiando cosas",
              texto:
                "Startups, herramientas y soluciones que marcan la diferencia.",
            },
            {
              titulo: "Hacer networking de verdad",
              texto:
                "Con profesionales, empresas y posibles mentoras que pueden abrirte puertas.",
            },
            {
              titulo: "Encontrar tu lugar en el sector",
              texto:
                "Ya sea para dar el salto profesional o para inspirarte en tu próximo proyecto.",
            },
            {
              titulo: "Aprender de las mejores",
              texto:
                "Talleres, charlas y debates con expertas internacionales.",
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Entradas del BCC26: gratis o con un 54 % de descuento">
        <p>
          Aquí viene la parte buena de ser Ambassadors: tenemos códigos para ti.
          Hay dos formas de entrar y la diferencia entre una y otra es cuánto
          del congreso ves.
        </p>

        <h3>Entrada Expo+, gratis</h3>
        <p>
          Te da acceso a la <strong>zona de expositores</strong>: el centenar de
          empresas y startups que estarán allí, con sus demos y su gente. Es
          gratuita con nuestro código y no tiene límite de plazas, así que
          puedes compartirla con quien quieras.
        </p>
        <p>
          Código: <strong>{CODIGO_EXPO_GRATIS}</strong>
        </p>
        <p>
          <a
            href={URL_EXPO_GRATIS}
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Conseguir mi entrada gratis
          </a>
        </p>

        <h3>Pase completo al congreso, 225 € en vez de 495 €</h3>
        <p>
          Este es el pase que te abre <strong>todo</strong>: las charlas, el
          programa de conferencias y el hacking village, además de la zona de
          expositores. Con nuestro código sale por{" "}
          <strong>225 € en lugar de 495 €</strong>, un 54 % menos, y tampoco
          tiene límite de plazas.
        </p>
        <p>
          Código: <strong>{CODIGO_CONGRESO_DESCUENTO}</strong>
        </p>
        <p>
          <a
            href={URL_CONGRESO_DESCUENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="fc-boton"
          >
            Conseguir mi pase completo
          </a>
        </p>
      </SeccionPost>

      <SeccionPost titulo="Barcelona nos espera">
        <p>
          El Barcelona Cybersecurity Congress 2026 será el punto de encuentro
          para quienes creen en un futuro digital más seguro, inclusivo e
          innovador. Y nosotras estaremos ahí, representando a una comunidad que
          no para de crecer.
        </p>
        <p>
          <strong>Cuándo:</strong> del 3 al 5 de noviembre de 2026
        </p>
        <p>
          <strong>Dónde:</strong> Fira de Barcelona, recinto Gran Via, hall 2.1
        </p>
        <p>
          ¿Te apuntas? Porque la ciberseguridad no es solo para algunas: es para
          todas las que queremos ser parte de la solución.
        </p>
        <p>
          Si vas a venir, cuéntanoslo en el{" "}
          <Link to="/contacto">formulario de contacto</Link> o en nuestras
          redes. Nos encantaría coincidir contigo esos días.
        </p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default BarcelonaCybersecurityCongress26;
