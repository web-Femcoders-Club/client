import React, { useState } from "react";
import "../Footer.css";

interface FaqModalProps {
  closeModal: () => void;
}

const FaqModal: React.FC<FaqModalProps> = ({ closeModal }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué es FemCoders Club?",
      answer: [
        "FemCoders Club, una comunidad con sede en Barcelona, se estableció en 2023 con su lanzamiento oficial el 24 de octubre.",
        "Fundado por un grupo de mujeres apasionadas, este colectivo tiene un objetivo unificador: contribuir al empoderamiento de otras mujeres en el ámbito digital y tecnológico.",
        "La misión fundamental de FemCoders Club es proporcionar un espacio inclusivo donde las mujeres puedan colaborar, aprender y crecer en campos relacionados con la tecnología. Esta comunidad tiene un compromiso firme con la visibilización y el fortalecimiento de la presencia femenina en el sector.",
        "A través de eventos, talleres y talleres presenciales, FemCoders Club busca derribar barreras y desafiar estereotipos, alentando a las mujeres a perseguir carreras en áreas como la programación, el diseño digital y la ingeniería.",
        "Además, la red de apoyo de FemCoders Club se extiende más allá de las fronteras geográficas, conectando a mujeres interesadas en la tecnología a nivel internacional ya que es una comunidad online. La diversidad de experiencias y perspectivas enriquece la comunidad, fomentando un ambiente colaborativo donde el intercambio de conocimientos y el apoyo mutuo son fundamentales.",
        "En resumen, FemCoders Club no solo representa un espacio para el crecimiento profesional, sino también una fuerza impulsora en la construcción de un sector tecnológico más inclusivo y diverso al proporcionar recursos y oportunidades a mujeres que buscan destacar en el mundo digital.",
      ],
    },
    {
      question: "¿Cuáles son sus objetivos?",
      answer: [
        "- Organizar masterclasses y sesiones inspiradoras, brindando oportunidades de aprendizaje y desarrollo personal a través de experiencias compartidas.",
        "- Facilitar encuentros regulares donde las mujeres puedan conectarse, compartir experiencias y establecer conexiones significativas.",
        "- Promover la inclusión y diversidad, asegurando que la comunidad sea acogedora para mujeres de diversos trasfondos y experiencias.",
      ],
    },
    {
      question: "¿Por qué debería unirme a esta comunidad?",
      answer: [
        "Unirte a FemCoders Club no solo significa ser parte de una comunidad, sino también sumergirte en una experiencia enriquecedora que puede transformar tu trayectoria profesional y personal en el ámbito tecnológico.",
        "Aquí te presentamos algunas razones convincentes para unirte:",
        "● Networking: Formar parte activa de FemCoders Club te brinda acceso a una red de mujeres apasionadas y profesionales en el campo tecnológico. Estar conectada con personas que comparten intereses y objetivos puede abrir puertas a oportunidades de colaboración y crecimiento profesional.",
        "● Eventos: La comunidad organiza una variedad de eventos, desde conferencias hasta talleres y entrevistas. Participar en estos eventos te permite mantenerse actualizada sobre las últimas tendencias y desarrollos en tecnología, al tiempo que te brinda la oportunidad de aprender de expertos y compartir experiencias con colegas.",
        "● Desarrollo Personal: A través del trabajo totalmente voluntario, FemCoders Club se compromete a proporcionar recursos de desarrollo personal. Desde masterclass hasta eventos específicos para el empoderamiento femenino, la comunidad busca fortalecer tus habilidades y tu confianza en el ámbito tecnológico.",
        "● Emprendimiento: Si tienes aspiraciones emprendedoras, unirte a la comunidad te conectará con experiencias de otras mujeres emprendedoras, ofreciéndote de esta forma la posibilidad de conocer los emprendimientos y recursos para desarrollar y hacer crecer tus propias iniciativas empresariales en el mundo digital.",
        "● Inclusión y Apoyo Mutuo: FemCoders Club se esfuerza por crear un ambiente inclusivo donde cada voz sea valorada. Unirte te permite formar parte de un espacio donde el apoyo mutuo es fundamental, proporcionándote un respaldo significativo mientras navegas por los desafíos y triunfos de tu carrera.",
        "● Contribución a la Diversidad en Tecnología: Al unirte, contribuyes activamente a la construcción de un sector tecnológico más diverso e igualitario. Tu participación fortalece la presencia y el impacto de las mujeres en la industria, inspirando a futuras generaciones.",
        "En resumen, unirte a FemCoders Club no solo ampliará tu conocimiento y tu red, sino que también te proporcionará un sentido de pertenencia en una comunidad que impulsa el cambio y el progreso en el emocionante mundo de la tecnología.",
      ],
    },
    {
      question: "¿Cuáles son las líneas de actuación de FemCoders Club?",
      answer: [
        "Las líneas de actuación de FemCoders Club se despliegan estratégicamente para dinamizar y fortalecer la comunidad, abarcando diversas áreas clave que respaldan el crecimiento y el empoderamiento de las mujeres en el ámbito tecnológico. Estas líneas de actuación incluyen:",
        "● Eventos: FemCoders Club organiza una variedad de eventos estratégicos, desde conferencias y talleres hasta hackatones y encuentros sociales. Estos eventos fomentan la interacción y el intercambio de ideas entre los miembros de la comunidad.",
        "● Networking: La comunidad se enfoca en establecer conexiones que impulsen la colaboración y el apoyo mutuo.",
        "● Actividades Planificadas: Para asegurar la continuidad y la variedad de las experiencias ofrecidas, FemCoders Club implementa programas de actividades planificadas. Estos programas serán cuidadosamente diseñados para abordar diversas áreas de interés, desde desarrollo profesional y habilidades técnicas hasta temas de emprendimiento y liderazgo.",
        "● Participación Activa de la Comunidad: La participación activa de la comunidad es un pilar fundamental. FemCoders Club fomenta la contribución de sus miembros a través de la organización de eventos colaborativos, donde las mujeres tienen la oportunidad de compartir sus conocimientos, experiencias y perspectivas, creando así un ambiente enriquecedor.",
        "● Promoción de la Diversidad e Inclusión: FemCoders Club trabaja activamente en la promoción de la diversidad e inclusión en el sector tecnológico. Sus programas y eventos están diseñados para abordar desafíos específicos que las mujeres enfrentan en este campo, promoviendo así un entorno más equitativo.",
        "● Estas líneas de actuación colectivamente construyen un enfoque integral para el crecimiento y el éxito de las mujeres en tecnología, asegurando que FemCoders Club no solo sea un espacio de encuentro, sino también un motor activo para el cambio positivo en la comunidad tecnológica.",
      ],
    },
    {
      question: "¿Qué diferencia a FemCoders Club de otras comunidades?",
      answer: [
        "FemCoders Club va más allá de ser una simple comunidad tecnológica. Nos diferenciamos por promover la colaboración, el consenso y el apoyo mutuo como base de todo lo que hacemos.",
        "No solo compartimos conocimientos, sino que fomentamos un entorno donde cada mujer impulsa a las demás. Nos definimos como una colectividad activa y dinámica.",
        "A través de eventos, proyectos y un enfoque proactivo, trabajamos para visibilizar el talento femenino y generar impacto real en el sector tech.",
        "Además, buscamos activamente oportunidades laborales para nuestra comunidad, conectando a empresas con perfiles diversos y fomentando la inserción profesional de nuestras integrantes.",
        "Únete a un movimiento que impulsa el cambio, abraza la diversidad y apuesta por un futuro tecnológico más inclusivo.",
      ],
    },

    {
      question: "¿Cómo puedo enterarme de los eventos de FemCoders Club?",
      answer: [
        "FemCoders Club publica todos sus eventos a través de nuestra página web, Linkedin y nuestro canal de #eventos en slack.",
      ],
    },
    {
      question: "¿Cómo puedo unirme a la comunidad?",
      answer: [
        "Unirte a FemCoders Club es muy fácil. Solo tienes que registrarte en nuestra web: https://www.femcodersclub.com/login.",
        "Desde ahí podrás acceder a Slack, enterarte de eventos y empezar a conectar con otras mujeres en tecnología.",
        "También puedes unirte asistiendo a uno de nuestros eventos online o presenciales, o contactándonos por LinkedIn si tienes dudas.",
      ],
    },

    {
      question: "¿Puedo unirme como promotora?",
      answer: [
        "Si quieres participar más activamente en la comunidad, lo puedes hacer como promotora. Tienes que unirte a la comunidad por slack, presentarte en el canal de #nuevos-miembros y mencionar en tu presentación que quieres ser promotora en FemCoders Club, y en breve nos pondremos en contacto contigo.",
      ],
    },
    {
      question: "¿Cuáles son las tareas de una promotora?",
      answer: [
        "Las promotoras son miembros activos de la comunidad que colaboran voluntariamente en la creación de contenido para las redes sociales de FemCoders Club, escriben artículos, diseñan la publicidad de los eventos, diseño y mantenimiento de la página web, planeación de eventos, etc.",
        "Como empresa puedes ser patrocinador de FemCoders Club a través de:",
        "● Espacios para eventos: Las empresas pueden ofrecer espacios para que FemCoders Club organice talleres, eventos de networking, charlas y otras actividades.",
        "● Voluntariado: Los empleados de las empresas pueden ofrecer su tiempo como voluntarios para ayudar a FemCoders Club con la organización de eventos, la creación de contenido, la gestión de redes sociales u otras tareas.",
        "● Difusión: Las empresas pueden ayudar a FemCoders Club a difundir su mensaje y aumentar su visibilidad compartiendo información sobre la organización en sus redes sociales, sitio web y boletines informativos.",
        "● Ofertas de trabajo: Las empresas pueden considerar y dar prioridad a las mujeres de FemCoders Club en sus procesos de selección de personal.",
      ],
    },
  ];

  const handleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close">
          <button onClick={closeModal}>x</button>
        </div>
        <div className="modal-header">
          <h3>Preguntas Frecuentes</h3>
        </div>
        <div className="modal-body">
          <div className="faq-collapse">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${
                    expandedIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleExpand(index)}
                >
                  <span>{faq.question}</span>
                  <span>{expandedIndex === index ? "-" : "+"}</span>
                </button>
                {expandedIndex === index && (
                  <div className="faq-answer">
                    {faq.answer.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={closeModal} className="tertiary-button">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqModal;
