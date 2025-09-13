import AOS from "aos";
import "aos/dist/aos.css";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import OptimizedImage from "../../../../src/components/OptimizedImage";
import { getUpcomingEvents } from "../../../api/eventsApi";
import ConfirmationModal from "../../Contact/components/ConfirmationModal";
import CarouselWithText from "../components/CarouselWithText";
import "./Home.css";
import NewsSlider from '../components/NewsSlider';
import GitHubProjects from '../components/GitHubProjects';

interface Event {
  start: {
    local: string;
  };
  id: string;
  name: {
    text: string;
  };
  logo?: {
    original?: {
      url?: string;
    };
  };
}

const HomePage: React.FC = () => {
  const [upcomingEvent, setUpcomingEvent] = useState<Event | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-back",
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [carouselIndex, currentPhotoIndex]);

  const images = [
    {
      src: "/assets/home-images/comunidad-tech-femcodersClub.webp",
      alt: "Organizadores evento DataConnect FemCoders Club",
      title:
        "femCoders Club, InfoJobs, LeWagon y Glovo, organizando DataConnect",
    },
    {
      src: "/assets/home-images/organizadoresEventoDataConnect.webp",
      alt: "Organizadores evento DataConnect FemCoders Club",
      title:
        "femCoders Club, InfoJobs, LeWagon y Glovo, organizando DataConnect",
    },
    {
      src: "/assets/home-images/asistentes-evento-femCodersClub.webp",
      alt: "Asistentes al evento DataConnect FemCoders Club",
      title: "Asistentes comunidad femCodersClub durante el evento DataConnect",
    },
    {
      src: "/assets/home-images/comunidad-data-evento-femCodersClub.webp",
      alt: "Comunidad Data Connect durante el evento de FemCoders Club",
      title: "Comunidad Data Connect durante el evento de FemCoders Club",
    },
    {
      src: "/assets/home-images/comunidad-femcodersclub-dataconnect-barcelona.webp",
      alt: "Comunidad FemCoders Club en DataConnect Barcelona",
      title: "Comunidad FemCoders Club en DataConnect Barcelona",
    },
    {
      src: "/assets/home-images/musica-codigo-evento-femCodersClub.webp",
      alt: "Música y código en el evento de FemCoders Club",
      title: "Música y Código en el Evento",
    },
    {
      src: "/assets/home-images/femCodersClub-mujeresStem-eventoData.webp",
      alt: "Mujeres en STEM durante el evento DataConnect de FemCoders Club",
      title: "Mujeres en STEM en DataConnect",
    },
    {
      src: "/assets/home-images/infoJobsCelebracion.webp",
      alt: "Celebrando Dia de la Mujer en InfoJobs con FemCoders Club",
      title: "Celebrando el Día de la Mujer en InfoJobs",
    },
    {
      src: "/assets/home-images/mujereslideres.webp",
      alt: "Mujeres inspiradoras en un evento de FemCoders Club",
      title: "Mujeres que inspiran a la comunidad",
    },
    {
      src: "/assets/home-images/eventoCarmenAnsio.webp",
      alt: "Evento con Carmen Ansio en FemCoders Club",
      title: "Evento con Carmen Ansio",
    },
    {
      src: "/assets/home-images/eventoFactoriaF5.webp",
      alt: "Evento en Factoría F5 con desarrolladoras de FemCoders Club",
      title: "Evento en Factoría F5",
    },
    {
      src: "/assets/home-images/mujeresTech.webp",
      alt: "Grupo de mujeres en tecnología en un evento de FemCoders Club",
      title: "Mujeres en tecnología",
    },
    {
      src: "/assets/home-images/comunidadFemCodersClubEventoCriteo.webp",
      alt: "Miembros de FemCoders Club en un evento en Criteo",
      title: "Evento en Criteo con FemCoders Club",
    },
    {
      src: "/assets/home-images/doscomunidadestech.webp",
      alt: "Dos comunidades tecnológicas colaborando en un evento",
      title: "Colaboración entre comunidades tech",
    },
    {
      src: "/assets/home-images/eventoTecnologico8Marzo.webp",
      alt: "Evento tecnológico en el Día Internacional de la Mujer",
      title: "8M: Mujeres en Tecnología",
    },
    {
      src: "/assets/home-images/mujeresprogramadoras.webp",
      alt: "Mujeres programadoras en un evento de FemCoders Club",
      title: "Mujeres programadoras",
    },
    {
      src: "/assets/home-images/eventoUnlokingData.webp",
      alt: "Evento sobre datos e inteligencia artificial en FemCoders Club",
      title: "Evento: Unlocking Data",
    },
    {
      src: "/assets/home-images/mujeresFemCodersClub.webp",
      alt: "Mujeres en la comunidad de FemCoders Club",
      title: "Mujeres de FemCoders Club",
    },
    {
      src: "/assets/home-images/posit8Marzo.webp",
      alt: "Evento en el Día Internacional de la Mujer en FemCoders Club",
      title: "8M: Positividad y Empoderamiento",
    },
    {
      src: "/assets/home-images/evento_techFemCodersClub.webp",
      alt: "Evento tecnológico en FemCoders Club",
      title: "Evento Tech en FemCoders Club",
    },
    {
      src: "/assets/home-images/comunidadesMujeresTecnologas.webp",
      alt: "Comunidades de mujeres en tecnología colaborando en un evento",
      title: "Comunidades de Mujeres en Tecnología",
    },
    {
      src: "/assets/home-images/AureaRodriguez.webp",
      alt: "Aurea Rodríguez en un evento de FemCoders Club",
      title: "Aurea Rodríguez en FemCoders Club",
    },
    {
      src: "/assets/home-images/asistentesfemCodersClubCriteo.webp",
      alt: "Asistentes a un evento de FemCoders Club en Criteo",
      title: "Asistentes en Criteo",
    },
    {
      src: "/assets/home-images/apoyoMujeresTech.webp",
      alt: "Mujeres en tecnología apoyándose mutuamente en un evento",
      title: "Apoyo entre Mujeres Tech",
    },
    {
      src: "/assets/home-images/EventoFactorial.webp",
      alt: "Evento en Factorial con ponentes de FemCoders Club",
      title: "Evento en Factorial",
    },
    {
      src: "/assets/home-images/mujeresTechNetworking.webp",
      alt: "Mujeres en tecnología en un evento de networking",
      title: "Networking entre Mujeres Tech",
    },
    {
      src: "/assets/home-images/musicaconcodigo.webp",
      alt: "Evento de música y código en FemCoders Club",
      title: "Música con Código",
    },
    {
      src: "/assets/home-images/eventoLiderazgoMujer.webp",
      alt: "Evento sobre liderazgo femenino en FemCoders Club",
      title: "Liderazgo de la Mujer",
    },
    {
      src: "/assets/home-images/eventoUnlokingData.webp",
      alt: "Evento sobre datos e inteligencia artificial en FemCoders Club",
      title: "Evento: Unlocking Data",
    },
    {
      src: "/assets/home-images/mujeres-ciberseguridad-femcoders-evento.webp",
      alt: "Mujeres en ciberseguridad en un evento de FemCoders Club",
      title: "Mujeres en Ciberseguridad",
    },
    {
      src: "/assets/home-images/networkingEventosFemCodersClub.webp",
      alt: "Networking en eventos de FemCoders Club",
      title: "Networking en Eventos",
    },
    {
      src: "/assets/home-images/mujeresComunidadFemCodersClub.webp",
      alt: "Mujeres en la comunidad de FemCoders Club",
      title: "Mujeres en la Comunidad",
    },
    {
      src: "/assets/home-images/comunidadDeMujeres.webp",
      alt: "Mujeres en la comunidad de FemCoders Club",
      title: "Mujeres en la Comunidad",
    },
    {
      src: "/assets/home-images/mujeresFemCodersClub.webp",
      alt: "Mujeres en un evento de FemCoders Club",
      title: "Mujeres en FemCoders Club",
    },
    {
      src: "/assets/home-images/networking.webp",
      alt: "Networking en un evento de FemCoders Club",
      title: "Networking en Evento",
    },
    {
      src: "/assets/home-images/eventoAdevintaFemCodersClub.webp",
      alt: "Evento en Adevinta con ponentes de FemCoders Club",
      title: "Evento en Adevinta",
    },
    {
      src: "/assets/home-images/apoyomujeres.webp",
      alt: "Evento femCoders Club en Adevinta",
      title: "Evento en Adevinta",
    },
    {
      src: "/assets/home-images/comunidadDeMujeres.webp",
      alt: "Comunidad de mujeres en un evento de FemCoders Club",
      title: "Comunidad de Mujeres",
    },
    {
      src: "/assets/ML-ComunicacionAcertiva/EventoFemCodersClub-ComunicacionAcertiva.webp",
      alt: "Evento de comunicación asertiva en FemCoders Club",
      title: "Evento de Comunicación Asertiva",
    },
    {
      src: "/assets/home-images/desarolladora-fullstack-Irina-femCodersClub.webp",
      alt: "Irina Ichim, desarrolladora fullstack y cofundadora de FemCoders Club",
      title: "Irina Ichim, Desarrolladora Fullstack",
    },
    {
      src: "/assets/home-images/LuciaCofundadora.webp",
      alt: "Lucía, cofundadora de FemCoders Club",
      title: "Lucía, Cofundadora",
    },
    {
      src: "/assets/semRush/eventoSemrush.webp",
      alt: "Evento en Semrush organizado por FemCoders Club",
      title: "Evento en Semrush",
    },
    {
      src: "/assets/UltimosEventos2024/eventoSeatCode.webp",
      alt: "Evento reciente en SeatCode con ponentes de FemCoders Club",
      title: "Evento en SeatCode",
    },
    {
      src: "/assets/home-images/eventocontere.webp",
      alt: "Evento sobre inteligencia emocional en FemCoders Club",
      title: "Inteligencia Emocional",
    },
    {
      src: "/assets/home-images/chicasComunidadFemCodersClub.webp",
      alt: "Chicas en la comunidad de FemCoders Club",
      title: "Chicas en la Comunidad",
    },
    {
      src: "/assets/home-images/NiltonInfoJobs.webp",
      alt: "Nilton Navarro Flores presentando el evento de InfoJobs",
      title: "Nilton Navarro Flores en InfoJobs",
    },
    {
      src: "/assets/home-images/codersEventoFemCodersClub.webp",
      alt: "networking durante un evento de femCoders Club",
      title: "networking evento femCoders Club",
    },
  ];

  const texts = [
    "Empoderamos a las Mujeres en Tecnología",
    "Participa en Nuestro Próximo Evento",
    "Conéctate y Crezcamos Juntas",
    "Sé una Líder en tu Vida y Profesión",
    "Construyendo la Comunidad Tech más Diversa",
    "Rompiendo Barreras en el Mundo Digital",
    "Desarrolla tu Potencial sin Límites",
    "Aprendizaje Colaborativo entre Mujeres",
    "Networking que Transforma Carreras",
    "Inspirando la Próxima Generación Tech",
    "Tu Talento es Nuestra Mayor Fortaleza",
    "Juntas Programamos un Futuro Mejor",
    "Innovación con Perspectiva Femenina",
    "Compartiendo Conocimiento, Creciendo Juntas",
    "De Principiante a Experta: Tu Comunidad de Apoyo",
  ];

  const calculateTimeLeft = (eventDate: Date | null) => {
    const now = new Date();
    if (!eventDate) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const difference = eventDate.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const fetchUpcomingEvent = async () => {
      try {
        const events = await getUpcomingEvents();
        if (events && events.length > 0) {
          const nextEvent = events[0];
          const adaptedEvent: Event = {
            id: nextEvent.id,
            start: {
              local: nextEvent.start_local,
            },
            name: {
              text: nextEvent.name,
            },
            logo: nextEvent.logo_url
              ? {
                  original: {
                    url: nextEvent.logo_url,
                  },
                }
              : undefined,
          };

          const eventDate = new Date(adaptedEvent.start.local);
          setUpcomingEvent(adaptedEvent);
          setTimeLeft(calculateTimeLeft(eventDate));
        }
      } catch (error) {
        console.error("Error fetching upcoming event:", error);
      }
    };

    fetchUpcomingEvent();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (upcomingEvent) {
        const eventDate = new Date(upcomingEvent.start.local);
        setTimeLeft(calculateTimeLeft(eventDate));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [upcomingEvent]);

  useEffect(() => {
    const photoInterval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 3000);

    return () => {
      clearInterval(photoInterval);
    };
  }, []);

  useEffect(() => {
    let carouselInterval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      carouselInterval = setInterval(() => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
    }

    return () => {
      if (carouselInterval) {
        clearInterval(carouselInterval);
      }
    };
  }, [isPlaying, images.length]);

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCarouselIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index: number) => {
    setCarouselIndex(index);
    if (isPlaying) {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), 5000);
    }
  };

  const handleCarouselKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      if (isPlaying) {
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 5000);
      }
    }

    switch (e.key) {
      case "ArrowLeft":
        prevSlide();
        e.preventDefault();
        break;
      case "ArrowRight":
        nextSlide();
        e.preventDefault();
        break;
      case "Home":
        goToSlide(0);
        e.preventDefault();
        break;
      case "End":
        goToSlide(images.length - 1);
        e.preventDefault();
        break;
      case " ":
      case "Enter":
        togglePlay();
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      throw new Error("The form element is not found");
    }

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/email-formulario/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Error enviando el formulario.");
      }

      setShowMessage(true);
    } catch (error) {
      console.error(error);
    }
  };
const newsData = [
  {
    id: '1',
    title: 'Ana Lucía Silva Córdoba: Profesional Digital Referente 2025',
    description: 'Nuestra compañera Ana Lucía Silva Córdoba ha sido galardonada como Profesional Digital Referente 2025 en los prestigiosos Premios Dona TIC. Un reconocimiento merecido a su trayectoria desde la docencia rural hacia la tecnología inclusiva con una red femenina global.',
    image: 'assets/home-images/anaLuciaSilva.webp', 
    imageAlt: 'Ana Lucía Silva Córdoba - Profesional Digital Referente 2025',
    date: '9 Septiembre 2025',
    category: 'Reconocimientos',
    link: 'https://donadigital.cat/ana-lucia-silva-de-la-docencia-rural-a-la-tecnologia-inclusiva-amb-una-xarxa-femenina-global/'
  },
  {
    id: '2',
    title: 'Nuevo Quiz de HTML: Prepárate para Entrevistas Técnicas',
    description: 'Hemos lanzado un completo quiz de HTML diseñado especialmente para prepararte en entrevistas técnicas. Una herramienta interactiva que te ayudará a refrescar conceptos clave y ganar confianza en procesos de selección.',
    image: 'assets/html/HTML-Quiz-Entrevistas.webp', 
    imageAlt: 'Quiz interactivo de HTML para entrevistas técnicas',
    date: '11 Septiembre 2025',
    category: 'Recursos',
    link: 'https://www.femcodersclub.com/recursos/html/quiz-html-entrevistas'
  },
  {
    id: '3',
    title: 'Liliana Dalmarco Regresa a FemCoders Club',
    description: 'Con gran alegría anunciamos el regreso de Liliana Dalmarco a nuestra comunidad. Como parte de nuestras fundadoras legacy, su visión y dedicación fueron fundamentales en los inicios de FemCoders Club. Ahora vuelve para continuar impulsando nuestro crecimiento y misión.',
    image: 'assets/home-images/lilianaDalmarco.webp', 
    imageAlt: 'Liliana Dalmarco regresa a FemCoders Club',
    date: '25 Agosto 2025',
    category: 'Equipo',
    link: 'https://www.femcodersclub.com/equipo'
  }
];

const githubProjectsData = [
  {
    id: '1',
    name: 'FemPalette - Generador SASS',
    description: 'Generador visual de variables SASS con tutorial completo que incluye funciones, mixins y patrón 7-1. Herramienta interactiva para aprender SASS de forma práctica.',
    techStack: ['SASS', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/femcodersclub/sass-color-generator',
    demoUrl: 'https://femcodersclub.github.io/sass-color-generator/', 
   image: 'assets/css/fempalette-generator.gif',
    imageAlt: 'Generador de variables SASS - FemPalette',
    author: 'Irina Ichim',
    authorAvatar: 'assets/home-images/desarolladora-profesional-irina.webp',
    lastUpdated: '2 meses atrás',
    stars: 1,
    language: 'SASS',
    postUrl: 'https://www.femcodersclub.com/recursos/css/sass-next-level', 
    postTitle: 'SASS: Lleva tu CSS al siguiente nivel',
    difficulty: 'Intermedio'
  },
  {
    id: '2',
    name: 'Efecto Parallax con Svelte',
    description: 'Implementación elegante del efecto parallax utilizando Svelte. Demuestra las capacidades reactivas del framework para crear animaciones fluidas.',
    techStack: ['Svelte', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/femcodersclub/Efecto-Parallax-Svelte',
    demoUrl: 'https://efecto-parallax-svelte.vercel.app/',
    image: 'assets/home-images/efecto-parallax-svelte.webp',
    imageAlt: 'Efecto Parallax desarrollado con Svelte',
    author: 'FemCoders Club',
    authorAvatar: 'assets/FemCodersClubLogo.webp',
    lastUpdated: '2024',
    stars: 1,
    language: 'Svelte',
    postUrl: '',
    postTitle: 'Creando efectos parallax con Svelte',
    difficulty: 'Intermedio'
  },
  {
    id: '3',
    name: 'Canvas Text Animation',
    description: 'Animaciones de texto creativas usando HTML5 Canvas y JavaScript. Explora las posibilidades artísticas de la programación con efectos visuales impactantes.',
    techStack: ['JavaScript', 'HTML5 Canvas', 'CSS'],
    githubUrl: 'https://github.com/femcodersclub/CanvasTextAnimation',
    demoUrl: 'https://femcodersclub.github.io/CanvasTextAnimation/', 
    image: 'assets/html/ApisHtml.webp',
    imageAlt: 'Animaciones de texto con Canvas',
    author: 'Irina Ichim',
    authorAvatar: 'assets/home-images/desarolladora-profesional-irina.webp',
    lastUpdated: '2024',
    stars: 1,
    language: 'JavaScript',
    postUrl: 'https://www.femcodersclub.com/recursos/html/apis-html',
    postTitle: 'Introducción a las APIs en HTML: Potencia tus Proyectos Web',
    difficulty: 'Básico'
  },
  {
    id: '4',
    name: 'Mindfulness CSS App',
    description: 'Aplicación web de mindfulness y respiración guiada, creada completamente con CSS puro y JavaScript mínimo. Demuestra el poder del CSS moderno.',
    techStack: ['CSS', 'JavaScript', 'HTML'],
    githubUrl: 'https://github.com/femcodersclub/AnimacionesCSS',
    demoUrl: 'https://femcodersclub.github.io/AnimacionesCSS/',
    image: 'assets/css/breathe-app-demo.gif',
    imageAlt: 'Aplicación de mindfulness con CSS puro',
    author: 'Irina Ichim',
    authorAvatar: 'assets/home-images/desarolladora-profesional-irina.webp',
    lastUpdated: '3 meses atrás',
    stars: 2,
    language: 'CSS',
    postUrl: 'https://www.femcodersclub.com/recursos/css/animaciones-css',
    postTitle: 'Domina las Animaciones CSS De Básico a Avanzado',
    difficulty: 'Intermedio'
  },
  {
    id: '5',
    name: 'CodersPortfolio',
    description: 'Portfolio profesional desarrollado con TypeScript. Template moderno y responsive que puedes personalizar para mostrar tus proyectos y habilidades.',
    techStack: ['TypeScript', 'CSS', 'React'],
    githubUrl: 'https://github.com/femcodersclub/CodersPortfolio',
    demoUrl: 'https://femcodersclub.github.io/CodersPortfolio/',
    image: 'assets/home-images/coders-portfolio.webp',
    imageAlt: 'Portfolio profesional con TypeScript',
    author: 'Irina Ichim',
   authorAvatar: 'assets/FemCodersClubLogo.webp',
    lastUpdated: '7 meses atrás',
    stars: 3,
    language: 'TypeScript',
    postUrl: '',
    postTitle: 'CodersPortfolio',
    difficulty: 'Intermedio'
  },
  {
    id: '6',
    name: 'Nike Store React',
    description: 'Almudena Rendón Fernández te muestra cómo crear una réplica profesional de Nike Store con React, incluyendo carrito de compras, localStorage y formularios avanzados.',
    techStack: ['React'],
    githubUrl: 'https://github.com/Almudena-Rendon', 
    demoUrl: 'https://nike-store-omega-nine.vercel.app/',
    image: 'assets/react/nike-store-replica.webp',
    imageAlt: 'Nike Store desarrollada con React',
    author: 'Almudena Rendón',
    authorAvatar: 'assets/home-images/almudena.webp',
    lastUpdated: 'marzo 2025',
    stars: 3,
    language: 'React',
    postUrl: 'https://www.femcodersclub.com/recursos/react/nike-store-replica',
    postTitle: 'Réplica de Nike Store con React: Un Proyecto E-commerce Completo',
    difficulty: 'Intermedio'
  }
];

  return (
    <>
      <Helmet>
        <title>FemCoders Club | Comunidad Líder de Mujeres en Tecnología</title>
        <meta name="robots" content="index, follow" />

        {/* Meta básico */}
        <meta
          name="description"
          content="Comunidad que empodera a mujeres en tecnología con eventos, talleres y networking. Aprende, comparte y crece en programación. Únete a femCoders Club."
        />
        <meta
          name="keywords"
          content="femcoders club, fem coders club, mujeres en tecnología, comunidad tech, eventos tecnológicos, talleres de programación, desarrollo web, mentorías tech, networking tecnológico, mujeres programadoras, formación en tecnología, diversidad en tech, oportunidades tech para mujeres"
        />
        <meta
          name="author"
          content="Irina Ichim, co-fundadora FemCoders Club"
        />
        <link rel="canonical" href="https://www.femcodersclub.com" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="FemCoders Club | Comunidad Líder de Mujeres en Tecnología"
        />
        <meta
          property="og:description"
          content="Comunidad dedicada a empoderar a mujeres en el sector tecnológico a través de eventos, talleres, mentorías y networking."
        />
        <meta property="og:url" content="https://www.femcodersclub.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.femcodersclub.com/cofundadoras-femCoders-club.webp"
        />
        <meta
          property="og:image:alt"
          content="Mujeres cofundadoras de FemCoders Club en un evento"
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="FemCoders Club" />
        <meta
          property="og:see_also"
          content="https://www.instagram.com/femcoders_club/"
        />
        <meta
          property="og:see_also"
          content="https://www.linkedin.com/company/fem-coders-club/"
        />
        <meta
          property="og:see_also"
          content="https://www.youtube.com/@FemcodersClub"
        />
        <meta
          property="og:see_also"
          content="https://github.com/femcodersclub"
        />
        <meta
          property="og:see_also"
          content="https://communityinviter.com/apps/femcodersclub/femcoders-club"
        />
        <meta property="og:see_also" content="https://x.com/FemCodersClub" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FemCoders Club | Comunidad Líder de Mujeres en Tecnología"
        />
        <meta
          name="twitter:description"
          content="Comunidad dedicada a empoderar a mujeres en tecnología"
        />
        <meta
          name="twitter:image"
          content="https://www.femcodersclub.com/cofundadorasFemCodersClub.jpg"
        />
        <meta name="twitter:site" content="@FemCodersClub" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FemCoders Club",
            alternateName: [
              "Fem Coders Club",
              "femcodersclub",
              "femCoders club",
              "FemCoders Club",
              "FEM CODERS CLUB",
              "fem coders",
            ],
            url: "https://www.femcodersclub.com",
            logo: "https://www.femcodersclub.com/FemCodersClubLogo.png",
            sameAs: [
              "https://www.instagram.com/femcoders_club/",
              "https://www.linkedin.com/company/fem-coders-club/",
              "https://www.youtube.com/@FemcodersClub",
              "https://github.com/femcodersclub",
              "https://communityinviter.com/apps/femcodersclub/femcoders-club",
              "https://x.com/FemCodersClub",
            ],
            description:
              "Una comunidad dedicada a empoderar a mujeres en tecnología a través de eventos, talleres y networking.",
            foundingDate: "2023-10-24",
            email: "info@femcodersclub.com",
            address: {
              "@type": "PostalAddress",
              addressCountry: "España",
            },
          })}
        </script>

        {/* Schema.org para Sitio Web */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "FemCoders Club",
            url: "https://www.femcodersclub.com",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.femcodersclub.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>

        {/* Schema.org para Elementos de Navegación */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "SiteNavigationElement",
                position: 1,
                name: "Inicio",
                description: "Página principal de FemCoders Club",
                url: "https://www.femcodersclub.com/",
              },
              {
                "@type": "SiteNavigationElement",
                position: 2,
                name: "Sobre Nosotras",
                description: "Conoce más sobre FemCoders Club y nuestra misión",
                url: "https://www.femcodersclub.com/femcoders-quienes-somos",
              },
              {
                "@type": "SiteNavigationElement",
                position: 3,
                name: "Equipo",
                description: "Conoce al equipo detrás de FemCoders Club",
                url: "https://www.femcodersclub.com/equipo",
              },
              {
                "@type": "SiteNavigationElement",
                position: 4,
                name: "Eventos",
                description:
                  "Próximos eventos y talleres para mujeres en tecnología",
                url: "https://www.femcodersclub.com/eventos",
              },
              {
                "@type": "SiteNavigationElement",
                position: 5,
                name: "Contacto",
                description: "Ponte en contacto con FemCoders Club",
                url: "https://www.femcodersclub.com/contacto",
              },
              {
                "@type": "SiteNavigationElement",
                position: 6,
                name: "Blog",
                description:
                  "Artículos, recursos y noticias sobre mujeres en tecnología",
                url: "https://www.femcodersclub.com/blog",
              },
              {
                "@type": "SiteNavigationElement",
                position: 7,
                name: "Iniciar Sesión",
                description: "Accede a tu cuenta de FemCoders Club",
                url: "https://www.femcodersclub.com/login",
              },
            ],
          })}
        </script>

        {/* Schema.org para FAQ basado en tu componente FaqModal */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es FemCoders Club?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FemCoders Club, una comunidad con sede en Barcelona, se estableció en 2023 con su lanzamiento oficial el 24 de octubre. Fundado por un grupo de mujeres apasionadas, este colectivo tiene un objetivo unificador: contribuir al empoderamiento de otras mujeres en el ámbito digital y tecnológico. La misión fundamental de FemCoders Club es proporcionar un espacio inclusivo donde las mujeres puedan colaborar, aprender y crecer en campos relacionados con la tecnología.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuáles son sus objetivos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Organizar masterclasses y sesiones inspiradoras, brindando oportunidades de aprendizaje y desarrollo personal a través de experiencias compartidas. Facilitar encuentros regulares donde las mujeres puedan conectarse, compartir experiencias y establecer conexiones significativas. Promover la inclusión y diversidad, asegurando que la comunidad sea acogedora para mujeres de diversos trasfondos y experiencias.",
                },
              },
              {
                "@type": "Question",
                name: "¿Por qué debería unirme a esta comunidad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Unirte a FemCoders Club te brinda acceso a networking con mujeres profesionales en tecnología, eventos y talleres, desarrollo personal, apoyo al emprendimiento, inclusión y apoyo mutuo, y la oportunidad de contribuir a la diversidad en el sector tecnológico.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo puedo unirme a la comunidad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Si quieres formar parte de nuestra comunidad, puedes hacerlo a través de nuestro Slack. Puedes contactarnos por LinkedIn. También puedes hacerlo asistiendo a uno de nuestros eventos online o presencial.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo puedo enterarme de los eventos de FemCoders Club?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FemCoders Club publica todos sus eventos a través de nuestra página web, Linkedin y nuestro canal de #eventos en slack.",
                },
              },
            ],
          })}
        </script>
      </Helmet>
      <section className="parallax bg1">
        <div className="content-container">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic"
            className="text-content"
            tabIndex={0}
            aria-label="Sección principal de FemCoders Club"
          >
            <h1 data-aos="fade-up" data-aos-delay="200" tabIndex={0}>
              femCoders Club
            </h1>

            <h2 data-aos="fade-up" data-aos-delay="400" tabIndex={0}>
              Tu comunidad de mujeres en tecnología
              <svg
                className="curved-line"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                data-aos="zoom-in"
                data-aos-delay="800"
                {...{ "aria-hidden": "true" }}
              >
                <path
                  d="M0 10 Q 50 0 100 10"
                  stroke="#EA4F33"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </h2>
            <p
              className="styled-paragraph"
              data-aos="fade-up"
              data-aos-delay="600"
              tabIndex={0}
            >
              <span> Juntas,</span> potenciamos el crecimiento y liderazgo de
              las mujeres tech. Descubre nuevas oportunidades, comparte
              conocimientos y crece profesionalmente en un entorno inclusivo y
              motivador.
              <br />
              Si compartes nuestra pasión por la tecnología, ¡únete a nosotras!
            </p>
            <div
              className="button-container"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Link to="/register">
                <button
                  className="primary-button"
                  aria-label="Unirse al club de mujeres programadoras"
                >
                  Unirse al club
                </button>
              </Link>

              <Link to="/eventos">
                <button
                  className="secondary-button"
                  aria-label="Ver eventos programados"
                >
                  Ver eventos
                </button>
              </Link>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic"
            className="image-content"
            role="presentation"
          >
            <div className="photo-stack">
              <div
                className={`photo ${
                  currentPhotoIndex === 0 ? "photo-1" : "photo-2"
                }`}
                data-aos="zoom-in-up"
                data-aos-delay="300"
                aria-hidden="false"
              >
                <div className="photo-gradient"></div>
                <div className="photo-gradient"></div>
                <OptimizedImage
                  src="/cofundadorasFemCodersClub.jpg"
                  alt="varias de las cofundadoras de FemCoders Club"
                  className="photo-image"
                  title="Parte de las cofundadoras de FemCoders Club"
                  tabIndex={currentPhotoIndex === 0 ? 0 : -1}
                  loading="eager"
                />
              </div>

              <div
                className={`photo ${
                  currentPhotoIndex === 1 ? "photo-1" : "photo-2"
                }`}
                data-aos="zoom-in-down"
                data-aos-delay="600"
              >
                <div className="photo-gradient"></div>
                <OptimizedImage
                  src="/assets/home-images/Isadora.webp"
                  alt="Mujeres cofundadoras de FemCoders Club"
                  className="photo-image"
                  title="Parte de las cofundadoras de FemCoders Club"
                  tabIndex={currentPhotoIndex === 1 ? 0 : -1}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="parallax bg2 full-height">
        <div className="carousel-container">
          <p
            className="carousel-subheading"
            tabIndex={0}
            {...{ "aria-label": "Descripción de FemCoders Club y sus eventos" }}
          >
            En<span> FemCoders Club, </span>organizamos regularmente eventos que
            no solo son educativos, sino también una oportunidad increíble para
            conectar con otras mujeres en el <span>sector tech.</span> Nuestros
            eventos incluyen talleres, charlas inspiradoras, y sesiones de
            networking que te ayudarán a ampliar tus conocimientos y tu{" "}
            <span>red de contactos.</span>
            <br />
            Consulta la galería para ver eventos pasados y cómo nuestras
            miembros han crecido en{" "}
            <span>liderazgo femenino en tecnología.</span>
          </p>
          <p
            className="carousel-subheading-mobile"
            tabIndex={0}
            {...{
              "aria-label":
                "Descripción resumida de FemCoders Club y sus eventos",
            }}
          >
            Nuestros eventos incluyen talleres, charlas inspiradoras, y sesiones
            de networking que te ayudarán a ampliar tus conocimientos y tu{" "}
            <span>red de contactos.</span>
          </p>

          <div
            className="carousel"
            role="region"
            {...{ "aria-label": "Galería de eventos pasados" }}
            {...{ "aria-live": isPlaying ? "off" : "polite" }}
            tabIndex={0}
            onKeyDown={handleCarouselKeyDown}
          >
            <div className="sr-only" {...{ "aria-live": "polite" }}>
              {isPlaying
                ? "El carrusel está rotando automáticamente. Presiona la barra espaciadora para pausar."
                : "El carrusel está pausado. Presiona la barra espaciadora para reanudar la rotación. Usa las flechas izquierda y derecha para navegar."}
            </div>

            {images.map(({ src, alt, title }, index) => {
              const isActive = index === carouselIndex;

              if (isActive) {
                return (
                  <div
                    key={index}
                    className={`carousel-item active ${
                      !isPlaying ? "paused" : ""
                    }`}
                    role="group"
                    aria-label={`Evento ${index + 1}`}
                    aria-hidden="false"
                  >
                    <OptimizedImage
                      src={src}
                      alt={alt || "default alt text"}
                      title={title}
                      className="carousel-image"
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="carousel-item"
                    role="group"
                    aria-label={`Evento ${index + 1}`}
                    aria-hidden="true"
                  >
                    <OptimizedImage
                      src={src}
                      alt={alt || "default alt text"}
                      title={title}
                      className="carousel-image"
                    />
                  </div>
                );
              }
            })}

            <div
              role="complementary"
              {...{ "aria-label": "Textos descriptivos sobre FemCoders" }}
            >
              <CarouselWithText texts={texts} />
            </div>
          </div>

          <div className="carousel-controls">
            <div className="carousel-nav-controls">
              <button
                className="carousel-control prev"
                onClick={prevSlide}
                {...{ "aria-label": "Imagen anterior" }}
              >
                ❮
              </button>

              <button
                className="play-pause"
                onClick={togglePlay}
                {...{
                  "aria-label": isPlaying
                    ? "Pausar rotación automática"
                    : "Reanudar rotación automática",
                }}
              >
                {isPlaying ? "⏸️" : "▶️"}
              </button>

              <button
                className="carousel-control next"
                onClick={nextSlide}
                {...{ "aria-label": "Imagen siguiente" }}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax bg3">
        <div className="section-content">
          <div
            className="call-to-action"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2>Conócenos</h2>
            </div>

            <p data-aos="fade-up" data-aos-delay="300">
              Si compartes nuestra pasión por la tecnología y nuestra filosofía
              de <strong>visibilizar a las mujeres programadoras</strong>,
              promoviendo su desarrollo profesional, te invitamos a unirte a
              nuestra comunidad. Ya seas una mujer en tecnología que busca
              crecer profesionalmente o una líder con años de experiencia
              dispuesta a compartir tu conocimiento, hay un lugar para ti en{" "}
              <strong>FemCoders Club. </strong>
              <br />
              <br />
              Además, extendemos una invitación a las empresas que se alinean
              con nuestros valores para que colaboren con nosotras.{" "}
              <strong>
                Juntas, podemos crear un entorno más inclusivo y equitativo en
                el sector tech.
              </strong>
              <br />
            </p>

            <br />

            {/* NUEVO CONTENIDO AGREGADO */}
            <div
              className="community-stats"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 data-aos="fade-up" data-aos-delay="700">
                🌟 Nuestra comunidad
              </h3>
              <div
                className="stats-grid"
                data-aos="fade-up"
                data-aos-delay="800"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "20px",
                  margin: "20px 0",
                  textAlign: "center",
                }}
              >
                <div
                  className="stat-item"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#6C63FF",
                    }}
                  >
                    1000+
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      opacity: 0.8,
                      color: "#2a2170",
                    }}
                  >
                    Mujeres STEM
                  </div>
                </div>
                <div
                  className="stat-item"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#6C63FF",
                    }}
                  >
                    25+
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      opacity: 0.8,
                      color: "#2a2170",
                    }}
                  >
                    Eventos realizados
                  </div>
                </div>
                <div
                  className="stat-item"
                  data-aos="zoom-in"
                  data-aos-delay="1100"
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#6C63FF",
                    }}
                  >
                    20+
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      opacity: 0.8,
                      color: "#2a2170",
                    }}
                  >
                    Empresas colaboradoras
                  </div>
                </div>
              </div>
            </div>

            <div
              className="join-cta"
              data-aos="zoom-in"
              data-aos-delay="1200"
              style={{
                textAlign: "center",
                marginTop: "30px",
                padding: "20px",
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                borderRadius: "10px",
                border: "2px solid rgba(108, 99, 255, 0.2)",
              }}
            >
              <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
                <strong>
                  ¿Lista para dar el siguiente paso en tu carrera tech?
                </strong>
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link to="/login">
                  <button className="primary-button pulse-effect">
                    Únete a la comunidad
                  </button>
                </Link>
                <Link to="/femcoders-quienes-somos">
                  <button className="secondary-button">
                    Conoce más sobre nosotras
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="section-countdown"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="countdown-content">
              <h2 data-aos="fade-down" data-aos-delay="300">
                ¡Próximo evento!
              </h2>
              {upcomingEvent ? (
                <div
                  className="countdown"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div
                    className="countdown-item"
                    data-aos="flip-up"
                    data-aos-delay="500"
                  >
                    <span>{timeLeft.days}</span> días
                  </div>
                  <div
                    className="countdown-item"
                    data-aos="flip-up"
                    data-aos-delay="600"
                  >
                    <span>{timeLeft.hours}</span> horas
                  </div>
                  <div
                    className="countdown-item"
                    data-aos="flip-up"
                    data-aos-delay="700"
                  >
                    <span>{timeLeft.minutes}</span> minutos
                  </div>
                  <div
                    className="countdown-item"
                    data-aos="flip-up"
                    data-aos-delay="800"
                  >
                    <span>{timeLeft.seconds}</span> segundos
                  </div>
                </div>
              ) : (
                <div
                  className="no-event-container"
                  data-aos="fade-in"
                  data-aos-delay="400"
                >
                  <video
                    src={`${
                      import.meta.env.BASE_URL
                    }assets/videos/SinEvento.mp4`}
                    className="no-event-video"
                    autoPlay
                    muted
                    loop
                    preload="none"
                    onError={(e) => {
                      if ((e.target as HTMLVideoElement).error) {
                        console.error("El video no se pudo cargar.");
                        (e.target as HTMLVideoElement).style.display = "none";
                      }
                    }}
                  />
                  <br />
                  <div
                    className="no-event-info"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    style={{
                      textAlign: "center",
                      padding: "20px 10px",
                      backgroundColor: "rgba(108, 99, 255, 0.05)",
                      borderRadius: "15px",
                      border: "2px dashed rgba(108, 99, 255, 0.3)",
                    }}
                  >
                    <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                      🔥
                    </div>
                    <h3
                      style={{
                        color: "#2a2170",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      ¡Grandes cosas están por venir!
                    </h3>
                    <p
                      style={{
                        color: "#2a2170",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                        marginBottom: "20px",
                        opacity: 0.9,
                      }}
                    >
                      Nuestro equipo está diseñando experiencias únicas que
                      transformarán tu carrera tech.{" "}
                      <strong>Mantente conectada</strong> para ser la primera en
                      conocer nuestras próximas sorpresas.
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                        fontSize: "1.2rem",
                        marginTop: "15px",
                      }}
                    >
                      <span style={{ animation: "pulse 2s infinite" }}>✨</span>
                      <span style={{ animation: "pulse 2s infinite 0.5s" }}>
                        🚀
                      </span>
                      <span style={{ animation: "pulse 2s infinite 1s" }}>
                        💜
                      </span>
                    </div>
                  </div>
                  <br />
                </div>
              )}
              <br />
            </div>
            {upcomingEvent ? (
              <div
                className="event-card"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div
                  className="event-image-wrapper"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <OptimizedImage
  src={upcomingEvent.logo?.original?.url || "/apoyomujeres.png"}
  alt="Próximo evento"
  className="event-image"
/>
                </div>
                <Link to="/eventos" data-aos="fade-up" data-aos-delay="800">
                  <button className="secondary-button pulse-effect">
                    Más información
                  </button>
                </Link>
              </div>
            ) : (
              <div
                className="event-placeholder-card"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div
                  className="event-buttons"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <div
                    className="event-buttons"
                    data-aos="fade-up"
                    data-aos-delay="700"
                    style={{
                      display: "flex",
                      gap: "15px",
                      justifyContent: "center",
                    }}
                  >
                    <Link to="/eventos">
                      <button className="secondary-button">
                        Ver eventos pasados
                      </button>
                    </Link>
                    <Link to="/blog/recursos">
                      <button className="primary-button">
                        Explorar recursos
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

       <section className="full-height d-flex flex-column justify-content-center align-items-center parallax bg2">
      <NewsSlider 
        newsItems={newsData}
        autoPlay={true}
        autoPlayInterval={6000}
        showDots={true}
        showArrows={true}
      />
    </section>
<section className="projects-section bg1">
       <GitHubProjects 
  projects={githubProjectsData}
  maxProjects={6}  
  showFilters={true}
  autoRotate={true} 
  rotateInterval={8000}
/>
      </section>
      <section className="parallax bg5">
       
       <div
  className="content-text"
  style={{ width: '100%', maxWidth: '100vw' }}
  data-aos="fade-down"
  data-aos-duration="800"
>
  <p className="text-white">
    Si tienes alguna pregunta o inquietud, o si estás interesada en cómo
    puedes contribuir a nuestra comunidad, por favor llena el
    formulario. Estamos aquí para asistirte y valoramos enormemente tu
    interés en apoyar a FemCoders Club. <br />
  </p>
</div>

        <div className="form-and-photos">
          <div
            className="form-container"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <div className="form-card">
              <OptimizedImage
                src="FemCodersClubLogo.png"
                alt="femCoders Club Logo"
                className="form-logo"
                title="FemCoders Club"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" id="name" name="name" required />
                  <label htmlFor="name">Nombre</label>
                </div>
                <div className="form-group">
                  <input type="text" id="last-name" name="last-name" required />
                  <label htmlFor="last-name">Apellidos</label>
                </div>
                <div className="form-group">
                  <input type="email" id="email" name="email" required />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-group">
                  <textarea id="message" name="message" required></textarea>
                  <label htmlFor="message">Mensaje</label>
                </div>
                <button type="submit" className="accent-button">
                  Enviar
                </button>
              </form>
            </div>
          </div>

          <div
            className="image-content"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic"
            role="presentation"
          >
            <div className="photo-stack">
              {currentPhotoIndex === 0 ? (
                <div
                  className="photo photo-1"
                  data-aos="zoom-in-up"
                  data-aos-delay="300"
                  aria-hidden="false"
                >
                  <div className="photo-gradient"></div>
                  <OptimizedImage
                    src="/assets/home-images/asociacion-mujeresTech-Barcelona.webp"
                    alt="Cofundadoras de FemCoders Club con perfiles en STEM"
                    title="Cofundadoras de FemCoders Club con perfiles en STEM"
                    className="photo-image"
                    tabIndex={0}
                  />
                </div>
              ) : (
                <div
                  className="photo photo-2"
                  data-aos="zoom-in-up"
                  data-aos-delay="300"
                  aria-hidden="true"
                >
                  <div className="photo-gradient"></div>
                  <OptimizedImage
                    src="/assets/home-images/asociacion-mujeresTech-Barcelona.webp"
                    alt="Cofundadoras de FemCoders Club con perfiles en STEM"
                    title="Cofundadoras de FemCoders Club con perfiles en STEM"
                    className="photo-image"
                    tabIndex={-1}
                  />
                </div>
              )}

              {currentPhotoIndex === 1 ? (
                <div
                  className="photo photo-1 photo-event"
                  data-aos="zoom-in-down"
                  data-aos-delay="600"
                  aria-hidden="false"
                >
                  <div className="photo-gradient"></div>
                  <OptimizedImage
                    src="/assets/home-images/comunidad-tech-femcodersClub.jpg"
                    alt="Cofundadoras de FemCoders Club en el evento del 8 de Marzo 2024 dedicado a las mujeres tech"
                    title="Cofundadoras de FemCoders Club en el evento del 8 de Marzo 2024"
                    className="photo-image"
                    tabIndex={0}
                  />
                </div>
              ) : (
                <div
                  className="photo photo-2 photo-event"
                  data-aos="zoom-in-down"
                  data-aos-delay="600"
                  aria-hidden="true"
                >
                  <div className="photo-gradient"></div>
                  <OptimizedImage
                    src="/assets/home-images/femcodersclubFinalEvento.jpg"
                    alt="Cofundadoras de FemCoders Club en el evento del 8 de Marzo 2024 dedicado a las mujeres tech"
                    title="Cofundadoras de FemCoders Club en el evento del 8 de Marzo 2024"
                    className="photo-image"
                    tabIndex={-1}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ConfirmationModal
        isVisible={showMessage}
        onClose={() => setShowMessage(false)}
      />
    </>
  );
};

export default HomePage;
