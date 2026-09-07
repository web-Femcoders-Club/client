import React from 'react';
import './involucrate.css';

const CORREO = 'femcodersclub@gmail.com';

/*
 * Las nueve formas de aportar, agrupadas por lo que se le pide a quien se
 * apunta. La agrupación no es decorativa: nueve bloques iguales no dejaban ver
 * que hay tres tipos distintos de aportación.
 *
 * `color` es el de la familia y va en el número de cada punto; `linea` es su
 * versión clara para la regla de la cabecera. Los dos salen medidos sobre
 * blanco, porque el número va en negrita y grande pero la regla no lleva texto.
 */
const FAMILIAS = [
  {
    id: 'crea',
    nombre: 'Crea con otras',
    color: '#4737bb', // 8.29:1 sobre blanco
    linea: '#ddd8f5',
    items: [
      {
        titulo: 'Crea un proyecto',
        texto: 'Puedes dar forma a una idea en GitHub junto a otras programadoras.',
      },
      {
        titulo: 'Grupo de estudio',
        texto: 'Únete o crea uno sobre JavaScript, CSS o backend.',
      },
      {
        titulo: 'Participa como mentora',
        texto: 'Comparte tu experiencia y acompaña a otras mujeres en su aprendizaje.',
      },
    ],
  },
  {
    id: 'comparte',
    nombre: 'Comparte lo que sabes',
    /*
     * 4.83:1 sobre blanco. Cumple AAA porque el número va a 1.25rem en negrita
     * y cuenta como texto grande (AAA pide 4.5:1 ahí). No vale para texto
     * normal: si alguna vez este verde pasa a un párrafo, hay que oscurecerlo.
     */
    color: '#0f766e',
    linea: '#cfe8e5',
    items: [
      {
        titulo: 'Escribe un post',
        texto: 'Publica tus experiencias o una guía en el blog.',
      },
      {
        titulo: 'Comparte recursos',
        texto: 'Tutoriales y materiales para quien empieza.',
      },
      {
        titulo: 'Conviértete en ponente',
        texto: 'Si te apetece compartir un tema o una experiencia, nos encantará conocer tu propuesta.',
      },
    ],
  },
  {
    id: 'crece',
    nombre: 'Haz crecer la comunidad',
    color: '#a32617', // 7.38:1 sobre blanco; el coral de marca se queda en 3.71:1
    linea: '#f6d8d3',
    items: [
      {
        titulo: 'Da a conocer FemCoders Club',
        texto: 'Puedes compartir la comunidad con quienes quieran aprender y conectar con otras mujeres en tecnología.',
      },
      {
        titulo: 'Propón ideas',
        texto: 'Cuéntanos qué mejorarías. Cada sugerencia cuenta.',
      },
      {
        titulo: '¿Os gustaría acoger un encuentro?',
        texto: 'Si vuestra empresa tiene un espacio y os apetece compartirlo con la comunidad, nos encantará explorar la idea con vosotros.',
      },
    ],
  },
];

/*
 * Sección «Involúcrate en la comunidad».
 *
 * Sustituye a nueve tarjetas que giraban con :hover. Aquel giro escondía el
 * único enlace de contacto en el reverso, y sin ratón —en el móvil, o
 * navegando con teclado— no había forma de llegar a él: la vía de contacto de
 * la página no existía para quien entraba desde el teléfono. Ahora el correo
 * está a la vista, se dice una vez y es el mismo para las nueve opciones, que
 * es lo que siempre fue.
 */
const InvolucrateEnLaComunidad: React.FC = () => (
  <section className="involucrate" aria-labelledby="involucrate-titulo">
    <div className="involucrate__cuerpo">
      <div>
        <p className="involucrate__antetitulo">Nueve formas de aportar</p>
        <h2 id="involucrate-titulo" className="involucrate__titulo">
          Hay muchas formas de ser parte de FemCoders Club
        </h2>
        <p className="involucrate__entrada">
          Tu experiencia y tus ideas tienen un lugar aquí. Si te apetece
          participar, puedes elegir una propuesta que encaje con tus intereses
          y tu disponibilidad.
        </p>
        <a className="involucrate__cta" href={`mailto:${CORREO}`}>
          {CORREO}
        </a>
        <p className="involucrate__coletilla">
          Si alguna propuesta te interesa, escríbenos y vemos cómo darle forma juntas.
        </p>
      </div>

      <div>
        {FAMILIAS.map(({ id, nombre, color, linea, items }, indiceFamilia) => (
          <div
            key={id}
            className="involucrate__familia"
            aria-labelledby={`involucrate-${id}`}
            role="group"
          >
            <div className="involucrate__familia-cabecera">
              <h3
                id={`involucrate-${id}`}
                className="involucrate__familia-nombre"
                style={{ color }}
              >
                {nombre}
              </h3>
              <span
                className="involucrate__familia-linea"
                style={{ backgroundColor: linea }}
                aria-hidden="true"
              />
            </div>

            <div className="involucrate__items">
              {items.map(({ titulo, texto }, indiceItem) => (
                <div key={titulo}>
                  {/*
                    El número solo ordena a la vista. Leído en voz alta no
                    añade nada al título que va justo debajo, así que se oculta
                    al lector de pantalla en lugar de hacerle contar.
                  */}
                  <p
                    className="involucrate__numero"
                    style={{ color }}
                    aria-hidden="true"
                  >
                    {String(indiceFamilia * items.length + indiceItem + 1).padStart(2, '0')}
                  </p>
                  <h4 className="involucrate__item-titulo">{titulo}</h4>
                  <p className="involucrate__item-texto">{texto}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InvolucrateEnLaComunidad;
