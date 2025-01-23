import { useState, useEffect } from "react";
import "./CustomCarousel.css";

const CustomCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const images = [
    {
      src: "/aurearodríguez.jpg",
      text: "Àurea Rodríguez, fuente de inspiración para la comunidad FemCoders Club.",
    },
    {
      src: "/AdoptaUnJunior.png",
      text: "En el evento Adopta Un Junior, entrevistamos a las fundadoras sobre su valioso trabajo.",
    },
    {
      src: "/AureaRodriguezMarinaAlves.jpg",
      text: "Àurea Rodríguez y Marina Altés liderando una sesión sobre los últimos avances en inteligencia artificial.",
    },
    {
      src: "/carmenAnsio.jpg",
      text: "Carmen Ansio, especialista en sistemas de diseño, uniendo diseño y desarrollo web.",
    },
    {
      src: "/ErikaVicente.jpg",
      text: "Erika Vicente: Analista de datos y ponente destacada en el evento del Día Internacional de la Mujer.",
    },
    {
      src: "/eventoAntesMuertaQueSinIA.jpg",
      text: "Compartiendo un momento especial con Àurea Rodríguez, una verdadera inspiración para FemCoders Club.",
    },
    {
      src: "/femCodersClubCarmenAnsio.jpg",
      text: "Celebrando junto a Carmen Ansio, cuya visión y liderazgo inspiran a toda la comunidad femCoders Club.",
    },
    {
      src: "/femcodersCriteo.jpg",
      text: "Agradecidas a Criteo y Marina Altés por su apoyo y colaboración en nuestro evento: Antes Muerta que Sin IA.",
    },

    {
      src: "/femCodersFactorial.jpg",
      text: " Gran evento en Factorial, aprendiendo sobre soluciones tecnológicas sostenibles con María Alexandra Galarza.",
    },

    {
      src: "/martaDiez.jpg",
      text: "Inspirándonos con Marta Díez Asensio, desarrolladora y asesora en blockchain, en el evento del 8 de Marzo.",
    },

    {
      src: "/ponentesEventoGlovo.jpg",
      text: "En Glovo con las ponentes del evento 'Análisis profundo sobre el Testing en Backend y los Obstáculos de Escalabilidad'.",
    },
    {
      src: "/eventoGitHub.png",
      text: "Evento online con Mari Carmen, aprendiendo a customizar tu perfil de GitHub.",
    },
    {
      src: "/ponentesUnlockingData.jpg",
      text: "Unlocking Data: Visualización y métricas esenciales para el éxito, con las brillantes Alba Vicente Olmo y Patricia Márquez Valle.",
    },
    {
      src: "/SarahDresden.jpg",
      text: "Disfrutando de la experiencia y talento de Sarah, destacada desarrolladora de juegos, en el evento del 8 de Marzo.",
    },
    {
      src: "/Laure.png",
      text: "Explorando cómo la gestión emocional puede ser la clave para el éxito personal en todas las áreas de la vida.",
    },
    {
      src: "/unlockingDataAlba.jpg",
      text: "Disfrutando de la experiencia en Unlocking Data con la talentosa Alba Vicente Olmo, aprendiendo sobre visualización de datos.",
    },
    {
      src: "/unlockingDataPatricia.jpg",
      text: "Disfrutando de la experiencia en Unlocking Data con la brillante Patricia Márquez Valle, explorando métricas clave para el éxito.",
    },
    {
      src: "/PonentesMesaRedondaAdevinta.JPG",
      text: "Espectacular evento: Mesa redonda sobre mujeres en tecnología, explorando los retos y oportunidades en el campo.",
    },
    {
      src: "/AsiaNoble.png",
      text: "Workshop con Asia Noble: Predice la brecha salarial de género con IA, explorando técnicas de análisis de datos con Python y Pandas.",
    },
    {
      src: "/CarolinaMouradas.png",
      text: "De la mano de Carolina Muradas, exploramos cómo la IA está transformando el mundo laboral.",
    },
    {
      src: "/LauraPourtier.png",
      text: "De la mano de Laura Pourtier, analizamos la rentabilidad de Walmart utilizando Tableau en colaboración con Le Wagon. Un evento imprescindible para los apasionados por el análisis de datos y la tecnología.",
    },
    {
      src: "/DanielaTrifu-experta-en-ciberseguridad.png",
      text: "Daniela Trifu, referente en ciberseguridad, aportando su valiosa experiencia durante el evento 'Ciberseguridad: Catch Me If You Can: Malware Hide and Seek'",
    },
    {
      src: "/Yeraldyn-Salazar-Cybersecurity-Teacher.png",
      text: "Yeraldin Salazar, especialista en ciberseguridad, brindando su visión experta en el evento 'Ciberseguridad: Catch Me If You Can: Malware Hide and Seek''.",
    },
    {
      src: "/assets/ML-ComunicacionAcertiva/AnnaVia.png",
      text: "Anna Vía, Product Manager de Machine Learning en Adevinta, compartió su conocimiento en la presentación 'Desbloqueando el potencial de IA: del problema al impacto', durante un evento organizado con el apoyo de Le Wagon.",
    },

    {
      src: "/assets/ML-ComunicacionAcertiva/ponentePaulaOses.png",
      text: "Paula Oses, ingeniera de IA en IAG, presentó 'Construyendo tu propio modelo Rag' en el evento organizado con el apoyo de Le Wagon.",
    },

    {
      src: "/assets/ML-ComunicacionAcertiva/femcodersclubyponentes.png",
      text: "En colaboración con Le Wagon, femCoders Club organizó un evento sobre Machine Learning, donde las ponentes compartieron su conocimiento y experiencia en el campo.",
    },

    {
      src: "/assets/ML-ComunicacionAcertiva/LiliDemarco-ponente.png",
      text: "Liliana, una de las cofundadoras más queridas de femCoders Club, nos inspiró con su presentación 'Soft Skill: Comunicación Asertiva' en un evento organizado junto a Canodrum.",
    },
    {
      src: "/assets/semRush/dariaNaidikova.jpg",
      text: "Daria Naidikova, desarrolladora front-end en Semrush, compartió estrategias clave sobre cómo mejorar la accesibilidad en productos digitales, inspirando a nuestra comunidad a crear experiencias web inclusivas para todos.",
    },
    {
      src: "/assets/semRush/crisMouta.jpg",
      text: "Cris Mouta, arquitecta convertida en programadora y formadora fullstack, nos mostró los fundamentos de la Programación Orientada a Objetos (POO), destacando la importancia de la creatividad y pasión en el desarrollo de software.",

    },
      {
      src: "/assets/UltimosEventos2024/rocioCejudo.jpg",
      text: "Rocío Cejudo, experta en accesibilidad y ciberseguridad, compartió valiosas estrategias para crear experiencias digitales más seguras e inclusivas en su charla. ",
      
    },
    {
      src: "/assets/UltimosEventos2024/lorenaSalvador.jpg",
      text: "Lorena Salvador abordó cómo diseñar webs y aplicaciones teniendo en cuenta la accesibilidad, destacando buenas prácticas para garantizar experiencias inclusivas para todos.",
      
    },
    {
      src:"/assets/Eventos2025/ponentesFemCodersClub.jpg",
      text:"En el evento 'Iníciate en programación con FemCoders Club', organizado con Fundación Asti, Ana Lucía Silva Córdoba nos mostró las posibilidades de la Realidad Aumentada y Virtual con Glitch y A-Frame. Gilda Irina Ichim presentó un proyecto interactivo con CodePen, Three.js, HTML, CSS y JavaScript. "
    },
    
  ];

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(carouselInterval);
    };
  }, [images.length]);

  return (
    <div className="custom-carousel-container">
      <div className="custom-carousel-wrapper">
        <div
          className="custom-carousel"
          style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`custom-carousel-item ${
                index === carouselIndex ? "active" : ""
              }`}
            >
              <img src={image.src} alt={`Evento ${index + 1}`} />
              <div className="custom-carousel-text">{image.text}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="custom-carousel-control prev"
        onClick={() =>
          setCarouselIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          )
        }
      >
        ❮
      </button>
      <button
        className="custom-carousel-control next"
        onClick={() =>
          setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
      >
        ❯
      </button>
    </div>
  );
};

export default CustomCarousel;
