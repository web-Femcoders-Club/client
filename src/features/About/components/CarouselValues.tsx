import { useEffect, useState } from "react";
import iconEquity from "/iconEquity.png";
import iconInclusion from "/iconInclusion.png";
import iconVisibility from "/iconVisibility.png";
import iconDevelopment from "/iconDevelopment.png";
import iconCollaboration from "/iconCollaboration.png";
import iconEmpowerment from "/iconEmpowerment.png";
import iconDiversity from "/iconDiversity.png";
import iconEthics from "/iconEthics.png";
import iconInnovation from "/iconInnovation.png";
import iconBalance from "/iconBalance.png";
import iconResponsibility from "/iconResponsibility.png";

function CarouselValues() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      img: iconEquity,
      title: "Equidad",
      desc: "Las mujeres deben tener las mismas oportunidades de desarrollo profesional que los hombres, sin discriminación por género.",
    },
    {
      img: iconInclusion,
      title: "Inclusión",
      desc: "Las mujeres deben sentirse bienvenidas y apoyadas en el sector IT, independientemente de sus antecedentes o experiencias.",
    },
    {
      img: iconVisibility,
      title: "Visibilidad",
      desc: "Los logros de las mujeres en el sector IT deben ser reconocidos y celebrados.",
    },
    {
      img: iconDevelopment,
      title: "Desarrollo profesional",
      desc: "Las mujeres deben tener acceso a oportunidades de desarrollo profesional que les permitan alcanzar su máximo potencial.",
    },
    {
      img: iconCollaboration,
      title: "Colaboración",
      desc: "Fomentar un ambiente donde las mujeres trabajen juntas de manera colaborativa, compartiendo conocimientos y experiencias para impulsar el crecimiento mutuo.",
    },
    {
      img: iconEmpowerment,
      title: "Empoderamiento",
      desc: "Capacitar a las mujeres para que tomen el control de sus carreras en tecnología, brindándoles las herramientas y el apoyo necesarios para alcanzar sus metas.",
    },
    {
      img: iconDiversity,
      title: "Diversidad",
      desc: "Reconocer y valorar las diversas perspectivas, habilidades y experiencias que cada mujer aporta al campo de la tecnología, promoviendo un entorno inclusivo y enriquecedor.",
    },
    {
      img: iconEthics,
      title: "Ética",
      desc: "Promover prácticas éticas en el trabajo tecnológico, priorizando la integridad, la transparencia y el respeto hacia los demás y hacia la sociedad en general.",
    },
    {
      img: iconInnovation,
      title: "Innovación",
      desc: "Fomentar la creatividad y la innovación entre las mujeres en tecnología, alentándolas a pensar de manera crítica y a proponer soluciones disruptivas para los desafíos actuales y futuros.",
    },
    {
      img: iconBalance,
      title: "Equilibrio entre vida laboral y personal",
      desc: "Promover un equilibrio saludable entre la vida laboral y personal, reconociendo la importancia de cuidar el bienestar físico, emocional y mental de las mujeres en la industria tecnológica.",
    },
    {
      img: iconResponsibility,
      title: "Responsabilidad social",
      desc: "Comprometerse con la responsabilidad social corporativa, participando en iniciativas y proyectos que tengan un impacto positivo en la comunidad y en el mundo en general.",
    },
  ];

  const itemsPerPage = 1;

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + itemsPerPage) % cards.length);
    };

    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [cards.length]);

  interface CardProps {
    img: string;
    title: string;
    desc: string;
  }

  const Card: React.FC<CardProps> = ({ img, title, desc }) => (
    <div
      className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[300px]"
      style={{
        boxShadow: "10px 0 20px -5px rgba(234, 79, 51, 0.5)", 
        minHeight: "400px",
      }}
    >
      <img src={img} alt={title} className="mb-4" />
      <h3 className="text-xl font-bold text-secondary font-headerText my-4">
        {title}
      </h3>
      <p
        className="text-center px-6"
        style={{
          color: "#4737bb",
          fontSize: "1.2rem",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {desc}
      </p>
    </div>
  );

  return (
    <div className="carousel-container mx-auto px-4 relative" style={{ minHeight: "400px" }}>
      <div className="flex overflow-hidden">
        {cards
          .slice(currentSlide, currentSlide + itemsPerPage)
          .map((card, index) => (
            <div key={index} className="flex justify-center mx-2">
              <Card img={card.img} title={card.title} desc={card.desc} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CarouselValues;








