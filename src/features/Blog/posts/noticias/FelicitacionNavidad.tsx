import React from "react";
import { Helmet } from "react-helmet";
import { Building2, Megaphone, Mic, Users } from "lucide-react";
import PlantillaPost from "../../components/post/PlantillaPost";
import { SeccionPost, TarjetasPost, VideoPost } from "../../components/post/PiezasPost";

const FelicitacionNavidad: React.FC = () => (
  <>
      <Helmet>
        <title>femCoders Club - Felices Fiestas 2024</title>
        <meta
          name="description"
          content="Felicitamos la Navidad y Año Nuevo desde femCoders Club, celebrando los logros del 2024 y mirando hacia un 2025 lleno de innovación y empoderamiento."
        />
        <meta
          name="keywords"
          content="femCoders Club, Navidad, Año Nuevo, comunidad de programación, mujeres en tecnología, inclusión, innovación, mentoring"
        />
        <link
          rel="canonical"
          href="https://www.femcodersclub.com/noticias/FelicitacionNavidad"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="femCoders Club - Felices Fiestas 2024"
        />
        <meta
          property="og:description"
          content="Felicitamos la Navidad y el Año Nuevo desde femCoders Club, celebrando los logros de 2024 y mirando hacia un 2025 lleno de innovación."
        />
        <meta
          property="og:url"
          content="https://www.femcodersclub.com/noticias/FelicitacionNavidad"
        />
        {/* El post es un video sin fotograma de portada, asi que la vista previa
            recae en el logo de la comunidad de forma explicita. */}
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/FemCodersClubLogo.png"
        />
        <meta
          property="og:image:alt"
          content="Logotipo de FemCoders Club, comunidad de mujeres en tecnología"
        />
        <meta property="og:site_name" content="FemCoders Club" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="femCoders Club - Felices Fiestas 2024"
        />
        <meta
          name="twitter:description"
          content="Nuestra felicitación navideña a toda la comunidad de femCoders Club."
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/FemCodersClubLogo.png"
        />

        <meta
          property="article:published_time"
          content="2024-12-22T10:00:00Z"
        />
        <meta property="article:author" content="FemCoders Club" />
        <meta property="article:section" content="Noticias" />
      </Helmet>

    <PlantillaPost
      ruta="/noticias/FelicitacionNavidad"
      titulo="Querida comunidad FemCoders Club, ¡felices fiestas!"
      autora={{ nombre: "FemCoders Club", rol: "Comunidad de mujeres en tecnología" }}
      idComentarios={10}
      entradilla={
        <>
          <p>
            En esta época especial, queremos hacer una pausa en nuestro código
            para compartir con vosotras los mejores deseos para estas fiestas.
            💻✨
          </p>
          <p>
            El 2024 ha sido un año lleno de retos, aprendizajes y logros para{" "}
            <strong>FemCoders Club</strong>. Mientras nos preparamos para cerrar
            el año, reflexionamos sobre el camino recorrido y, sobre todo,
            queremos agradeceros por ser parte de este proyecto que busca
            empoderar a las mujeres en el mundo de la tecnología 💪. Cada
            workshop, cada encuentro, cada mensaje de apoyo ha sido como un
            commit que ha mejorado nuestra versión colectiva.
          </p>
        </>
      }
    >
      <VideoPost
        src="/assets/videos/FelizNavidad.mp4"
        srcMovil="/assets/videos/FelizNavidadMovil.mp4"
        descripcion="Felicitación navideña de FemCoders Club, comunidad de mujeres programadoras"
      />

      <SeccionPost titulo="Queremos aprovechar este momento para expresar nuestra más profunda gratitud a…">
        <TarjetasPost
          tarjetas={[
            {
              titulo: "Nuestra comunidad increíble",
              icono: <Users aria-hidden="true" />,
              texto: (
                <p>
                  Gracias por asistir a cada evento con entusiasmo, compartir
                  experiencias y conocimientos, y crear un ambiente tan
                  especial de apoyo mutuo.
                </p>
              ),
            },
            {
              titulo: "Nuestras extraordinarias ponentes",
              icono: <Mic aria-hidden="true" />,
              texto: (
                <p>
                  Gracias por compartir generosamente su expertise, por
                  inspirar a otras mujeres con sus historias y por demostrar que
                  el mundo tech es un espacio para todas. Sus charlas y
                  workshops han sido fundamentales para el crecimiento
                  profesional de nuestra comunidad.
                </p>
              ),
            },
            {
              titulo: "Las empresas colaboradoras",
              icono: <Building2 aria-hidden="true" />,
              texto: (
                <p>
                  Gracias por creer en nuestra misión y apoyar la diversidad en
                  tech. Su respaldo ha sido crucial para hacer realidad
                  nuestros eventos y proyectos, abriendo puertas para más
                  mujeres en el sector tecnológico.
                </p>
              ),
            },
            {
              titulo: "Las promotoras",
              icono: <Megaphone aria-hidden="true" />,
              texto: (
                <p>
                  Gracias por su dedicación, su tiempo y su energía para hacer
                  que cada evento sea un éxito. Su compromiso es un pilar
                  fundamental de nuestra comunidad.
                </p>
              ),
            },
          ]}
        />
      </SeccionPost>

      <SeccionPost titulo="Para el 2025 deseamos">
        <ul>
          <li>
            Que vuestros proyectos se compilen sin errores y vuestras ideas se
            desplieguen con éxito.
          </li>
          <li>Que vuestros códigos sean seguros y vuestros datos estén protegidos.</li>
          <li>Que sigamos rompiendo juntas los estereotipos en el mundo tech.</li>
          <li>
            Que la comunidad FemCoders Club siga creciendo y empoderando a más
            mujeres.
          </li>
          <li>Que la diversidad y la inclusión sean el estándar en la industria.</li>
          <li>Que sigamos conectadas, aprendiendo y compartiendo juntas.</li>
          <li>
            Que esta Navidad os traiga la paz del código bien escrito 💻 y que
            el Año Nuevo venga cargado de nuevas funcionalidades para vuestras
            vidas. 🎉
          </li>
        </ul>
      </SeccionPost>

      <p>
        En <strong>FemCoders Club</strong> no solo compartimos conocimiento
        técnico: construimos una comunidad donde cada mujer puede desarrollar su
        propio algoritmo y brillar con luz propia. 💡 Estas fiestas, celebremos
        juntas la alegría de nuestros logros, la magia de la innovación y los
        momentos que nos inspiran a seguir creciendo.
      </p>
      <p>
        🎄✨ ¡Felices fiestas y que el Año Nuevo traiga nuevas oportunidades y
        éxitos para todas! 🎉💻
      </p>
    </PlantillaPost>
  </>
);

export default FelicitacionNavidad;
