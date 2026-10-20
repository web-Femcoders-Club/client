import React, { useRef } from "react";
import "../Footer.css";
import "./Documento.css";
import { X } from "lucide-react";
import BackToTop from "../../ui/BackToTop";
import { useDialogoModal } from "../../../hooks/useDialogoModal";

interface CodigoConductaModalProps {
  closeModal: () => void;
}

/*
 * Código de conducta de la comunidad, con los apartados del programa piloto de
 * proyectos en grupo con Vonage. Se abre desde el menú de /welcome.
 *
 * El original está en el Drive de la asociación: si se cambia allí, hay que
 * copiar el cambio aquí, porque la web no lo lee del Drive.
 */
const CodigoConductaModal: React.FC<CodigoConductaModalProps> = ({ closeModal }) => {
  const contentRef = useRef<HTMLElement | null>(null);
  useDialogoModal(contentRef, closeModal);

  return (
    <div className="modal-overlay documento-fondo">
      <article
        className="modal-content documento"
        role="dialog"
        aria-modal="true"
        aria-labelledby="codigo-conducta-titulo"
        ref={contentRef}
        tabIndex={-1}
      >
        <div className="modal-close">
          <button onClick={closeModal} aria-label="Cerrar código de conducta">
            <X aria-hidden="true" />
          </button>
        </div>

        <header>
          <h3 id="codigo-conducta-titulo">Código de conducta de FemCoders Club</h3>
          <p>
            <time dateTime="2026-10-20">Fecha de entrada en vigor: 20.10.2026</time>
          </p>
        </header>

        <div className="modal-body">
          <section>
            <h5>Idea general</h5>
            <p>
              En FemCoders Club se espera respeto en todo momento, y el acoso y el abuso no se
              toleran nunca. Ante todo, sentido común: educación, respeto y tolerancia hacia toda
              la comunidad.
            </p>
            <p>
              Este código se aplica a todas las personas que forman parte de la comunidad
              (participantes, mentoría, voluntariado y organización) y a todos sus espacios:
              eventos presenciales y online, Slack, redes sociales, GitHub y las sesiones de los
              programas.
            </p>
          </section>

          <section>
            <h5>Qué se considera acoso</h5>
            <p>Se considera acoso:</p>
            <ul>
              <li>
                Los comentarios ofensivos, verbales o escritos, sobre género, edad, orientación
                sexual, discapacidad, aspecto físico, tamaño corporal, raza, religión, clase
                social o situación económica.
              </li>
              <li>Interrumpir de forma sostenida charlas u otros eventos.</li>
              <li>
                En general, cualquier conducta que genere incomodidad a otra persona. Eso ya es
                motivo suficiente para dejar de hacerla.
              </li>
            </ul>
            <p>Esta norma se aplica igualmente a la mentoría, al voluntariado y a la organización.</p>
          </section>

          <section>
            <h5>Conversaciones constructivas y contenido apropiado</h5>
            <ul>
              <li>
                Las diferencias de opinión son bienvenidas siempre que se expresen con respeto. Se
                debaten ideas, no se ataca a las personas.
              </li>
              <li>
                No se permite compartir contenido NSFW u obsceno: texto, imágenes, gifs, vídeos o
                enlaces con desnudez, contenido sexual explícito, violencia gráfica o material
                perturbador.
              </li>
            </ul>
          </section>

          <section>
            <h5>Legalidad y derechos de autor</h5>
            <ul>
              <li>
                No se permite compartir de forma ilegal material protegido por derechos de autor,
                ni con enlaces de descarga ni distribuyendo archivos PDF, salvo que se trate de
                contenidos de libre distribución.
              </li>
              <li>
                No se permite ninguna práctica ilegal, como la piratería o el hacking. Las
                actividades educativas de hacking ético (pentesting o ciberseguridad) sí pueden
                desarrollarse sin problema.
              </li>
            </ul>
          </section>

          <section>
            <h5>Un espacio para aprender y compartir</h5>
            <p>
              Estamos aquí para aprender, compartir, ayudar y divertirnos, y en esta comunidad
              nadie es más que nadie. Se respetan todas las preferencias por un lenguaje,
              framework, sistema operativo o herramienta: no se discute ni se adoctrina, y cada
              persona tiene su opinión.
            </p>
            <p>
              Preguntar siempre es bienvenido. Nadie tiene que justificar una duda, y quien
              responde lo hace con paciencia.
            </p>
          </section>

          <section>
            <h5>Moderación y cómo comunicar un problema</h5>
            <p>
              El equipo de moderación de FemCoders Club vela por que se cumplan estas normas y
              puede advertir, silenciar, expulsar o vetar a quien las incumpla. Se espera respeto
              hacia sus decisiones.
            </p>
            <p>
              Si algo te incomoda o crees que no se está cumpliendo este código, puedes comentarlo
              con quien acompaña tu grupo o escribir a{" "}
              <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a>. Se tratará con
              discreción y con respeto hacia todas las personas implicadas.
            </p>
            <p>
              El incumplimiento de estas normas puede derivar en sanciones temporales o en la
              expulsión. Ante una falta, lo primero es conversar y buscar una solución; si la
              conducta se repite o es grave, se aplicarán esas medidas.
            </p>
          </section>

          <section>
            <h5>Proyectos en grupo: compromiso y comunicación</h5>
            <p>
              En el programa piloto de proyectos en grupo y mentorías con Vonage, el equipo de
              acompañamiento está formado por la mentoría y las tech leads.
            </p>
            <ul>
              <li>
                Participamos con constancia durante las seis semanas y dedicamos al proyecto el
                tiempo acordado dentro del grupo.
              </li>
              <li>
                Se avisa con tiempo si no se puede continuar o si una semana resulta imposible,
                para que el grupo pueda reorganizarse.
              </li>
              <li>
                Cumplimos las tareas que asumimos y pedimos ayuda cuando algo nos bloquea, sin
                esperar al último día.
              </li>
              <li>
                El proyecto es del grupo: todas las personas participan en el código y en las
                decisiones.
              </li>
              <li>
                Asistimos a la mentoría semanal con puntualidad y, si no es posible, se avisa
                antes.
              </li>
              <li>
                Slack es el canal principal del programa, para las dudas del día a día y para los
                avisos. Se responde en un plazo razonable y se avisa si va a tardarse más.
              </li>
              <li>
                Escribimos con claridad y con tono amable, usamos hilos para que las
                conversaciones sean fáciles de seguir y dejamos por escrito las decisiones
                importantes.
              </li>
              <li>
                El equipo de acompañamiento orienta y resuelve dudas, y las personas participantes
                construyen el proyecto.
              </li>
            </ul>
          </section>

          <section>
            <h5>Proyectos en grupo: GitHub, código y portfolio</h5>
            <ul>
              <li>
                Todo el código se integra mediante pull requests, que revisa el equipo de
                acompañamiento, y los commits siguen la especificación Conventional Commits.
              </li>
              <li>
                Las revisiones se hacen con tono constructivo: se señala lo que funciona, se
                explica lo que se puede mejorar y se proponen alternativas.
              </li>
              <li>
                El equipo de acompañamiento asigna las issues en el Project, para que se vea con
                claridad quién hace qué.
              </li>
              <li>Citamos las fuentes y el código ajeno que utilicemos.</li>
              <li>
                El proyecto se publica en GitHub y todas las personas que contribuyen pueden
                mostrarlo en su portfolio y en entrevistas.
              </li>
              <li>
                La autoría se reconoce por el historial de commits y pull requests, y ninguna
                aportación se atribuye a otra persona.
              </li>
              <li>
                Si alguien deja el programa, sus aportaciones ya integradas permanecen en el
                proyecto y se le sigue reconociendo la autoría.
              </li>
            </ul>
          </section>

          <section>
            <h5>Proyectos en grupo: sesiones, grabaciones e imagen</h5>
            <ul>
              <li>Las sesiones se graban, tal como se explicó al presentar el programa.</li>
              <li>Quien no quiera aparecer en la grabación puede apagar la cámara.</li>
              <li>
                Las grabaciones se usan para el programa y no se publican sin el consentimiento de
                las personas que aparecen en ellas.
              </li>
              <li>
                Las fotos, las capturas de pantalla y los nombres se publican en la web y en las
                redes de FemCoders Club solo con el consentimiento de cada persona.
              </li>
              <li>
                Nadie graba, captura ni comparte por su cuenta las sesiones ni las conversaciones
                del grupo.
              </li>
            </ul>
          </section>

          <section>
            <h5>Proyectos en grupo: créditos y claves de Vonage</h5>
            <ul>
              <li>
                Los créditos de API que aporta Vonage se usan solo para desarrollar el proyecto del
                grupo.
              </li>
              <li>
                Las claves y credenciales no se comparten fuera del grupo y nunca se suben al
                repositorio ni a ningún espacio público, ni se incluyen datos personales en el
                código.
              </li>
              <li>
                Quien detecte una clave expuesta o un uso indebido de los créditos lo comunica
                enseguida al equipo de acompañamiento, para poder revocarla.
              </li>
            </ul>
          </section>

          <section>
            <h5>Proyectos en grupo: uso de la inteligencia artificial</h5>
            <ul>
              <li>
                Podemos usar herramientas de IA como apoyo para aprender y desarrollar, siempre con
                criterio.
              </li>
              <li>
                Entendemos el código que subimos: si no supiéramos explicarlo en una entrevista,
                todavía no está listo para entrar en el repositorio.
              </li>
              <li>
                No compartimos con herramientas externas las credenciales del proyecto ni datos
                personales de otras personas.
              </li>
            </ul>
          </section>

          <section>
            <h5>Aceptación del código</h5>
            <p>
              Al formar parte de la comunidad y al participar en el programa aceptas este código.
              Te pedimos que lo leas antes del inicio, el 26 de octubre, y que escribas a{" "}
              <a href="mailto:info@femcodersclub.com">info@femcodersclub.com</a> si te queda
              alguna duda.
            </p>
          </section>
        </div>

        <footer className="modal-footer">
          <button onClick={closeModal} className="fc-boton fc-boton--noche">
            Cerrar
          </button>
        </footer>
        <BackToTop targetRef={contentRef} />
      </article>
    </div>
  );
};

export default CodigoConductaModal;
