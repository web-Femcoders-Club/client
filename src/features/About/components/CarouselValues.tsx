import { useEffect, useState } from "react";
import iconArrowR from "/iconArrowR.png";
import iconArrowL from "/iconArrowL.png";
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

function getInitialDeviceWidth() {
  if (window.innerWidth <= 768) {
    return "mobile";
  } else if (window.innerWidth <= 976) {
    return "tablet";
  } else {
    return "desktop";
  }
}

function CarouselValues() {
  const [deviceType, setDeviceType] = useState<"desktop" | "tablet" | "mobile">(
    getInitialDeviceWidth
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 976) {
        setDeviceType("desktop");
      } else if (window.innerWidth <= 976) {
        setDeviceType("tablet");
      } else if (window.innerWidth <= 768) {
        setDeviceType("mobile");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const itemsPerPage =
    deviceType === "mobile" ? 1 : deviceType === "tablet" ? 2 : 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + itemsPerPage) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - itemsPerPage + cards.length) % cards.length
    );
  };

  interface CardProps {
    img: string;
    title: string;
    desc: string;
  }

  const Card: React.FC<CardProps> = ({ img, title, desc }) => (
    <div
      className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[300px] h-[350px]"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 6px 4px 12px 3px" }}
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
    <div className="h-[500px] w-full relative">
      <div className="flex overflow-hidden">
        {cards
          .slice(currentSlide, currentSlide + itemsPerPage)
          .map((card, index) => (
            <div key={index} className="flex justify-center mx-2">
              <Card img={card.img} title={card.title} desc={card.desc} />
            </div>
          ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <img src={iconArrowL} alt="Previous" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2  text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <img src={iconArrowR} alt="Next" />
      </button>
    </div>
  );
}

export default CarouselValues;
