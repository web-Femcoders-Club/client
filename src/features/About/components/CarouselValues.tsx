import { useState, useEffect, useRef } from "react";
import OptimizedImage from "./../../../components/OptimizedImage"; 
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

interface CardProps {
  img: string;
  title: string;
  desc: string;
  isActive: boolean;
}

const Card: React.FC<CardProps> = ({ img, title, desc, isActive }) => (
  <div
    className={`flex flex-col items-center justify-center bg-dark py-7 px-3 rounded-3xl w-[300px] shadow-xl transition-all duration-500 ${
      isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"
    }`}
    style={{
      backgroundColor: "#4737bb",
      minHeight: "400px",
      position: "relative",
      zIndex: 1,
      transform: isActive ? "translateY(0)" : "translateY(20px)",
    }}
    role="figure"
    aria-labelledby={`card-title-${title}`}
  >
    <div
      className="card-background"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
        background:
          "radial-gradient(ellipse at center, rgba(109, 44, 149, 0) 30%, rgba(71, 55, 187, 0.2) 60%, rgba(234, 79, 51, 0.3) 100%)",
        zIndex: -1,
      }}
    ></div>
    <div className="icon-container animate-float">
      <OptimizedImage 
        src={img} 
        alt={`Icono de ${title}`} 
        className="mb-4 w-16 h-16"
      />
    </div>
    <h3 
      id={`card-title-${title}`} 
      className="text-xl font-bold text-white my-4 animate-title-glow"
    >
      {title}
    </h3>
    <p
      className="text-center px-6"
      style={{
        color: "#fdfdfd",
        fontSize: "1.2rem",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {desc}
    </p>
  </div>
);

const CarouselValues: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<number | null>(null);


  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      startAutoSlide();
    }
    
 
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

 
  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % cards.length;
    goToSlide(newIndex);
  };

  // Función para navegar a la diapositiva anterior
  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + cards.length) % cards.length;
    goToSlide(newIndex);
  };

  // Función para iniciar la reproducción automática
  const startAutoSlide = () => {
    intervalRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cards.length);
    }, 5000); // Aumentado a 5 segundos para dar más tiempo para leer
  };

  useEffect(() => {
    startAutoSlide();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      className="carousel-container mx-auto px-4 relative"
      style={{ minHeight: "450px" }}
      role="region"
      aria-label="Carrusel de valores"
    >
      <div className="flex overflow-hidden justify-center">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="mx-2 absolute transition-all duration-500"
            style={{ 
              opacity: currentSlide === index ? 1 : 0,
              pointerEvents: currentSlide === index ? 'auto' : 'none',
              transform: `translateX(${(index - currentSlide) * 320}px)`,
            }}
          >
            <Card 
              img={card.img} 
              title={card.title} 
              desc={card.desc} 
              isActive={currentSlide === index}
            />
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <div className="flex justify-center mt-4">
        <button 
          onClick={prevSlide}
          className="bg-[#ea4f33] text-white w-10 h-10 rounded-full flex items-center justify-center mr-2 hover:bg-[#821ad4] transition-colors"
          aria-label="Anterior valor"
        >
          &#8249;
        </button>
        
        {/* Indicadores */}
        <div className="flex space-x-2 mx-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-[#ea4f33] w-6' 
                  : 'bg-[#4737bb] opacity-50 hover:opacity-75'
              }`}
              aria-label={`Ir al valor ${index + 1}`}
              aria-current={currentSlide === index ? 'true' : 'false'}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="bg-[#ea4f33] text-white w-10 h-10 rounded-full flex items-center justify-center ml-2 hover:bg-[#821ad4] transition-colors"
          aria-label="Siguiente valor"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};


export default CarouselValues;

