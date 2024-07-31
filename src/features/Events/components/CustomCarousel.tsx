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
  ];

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

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
