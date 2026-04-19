import AOS from "aos";
import "aos/dist/aos.css";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import OptimizedImage from "../../../../src/components/OptimizedImage";
import { getUpcomingEvents } from "../../../api/eventsApi";
import ConfirmationModal from "../../Contact/components/ConfirmationModal";
import CarouselWithText from "../components/CarouselWithText";
import GitHubProjects from "../components/GitHubProjects";
import NewsSlider, { NewsItem } from "../components/NewsSlider";
import "./Home.css";
import "../../../features/Blog/page/PostStyles.css";

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
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [isEventTransitioning, setIsEventTransitioning] = useState(false);
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
    { src:"/assets/eventos2026/evento-softSkills-Canodrom.webp",
      alt: "Evento Soft Skills: Comunicación Asertiva en el Ambiente Laboral organizado por FemCoders Club",
      title:"Soft Skills: Comunicación Asertiva en el Ambiente Laboral -15 de abril 2026"},
    {
      src:"/assets/eventos2026/evento-estructurasEnMovimiento.webp",
      alt: "Celebrando Dia de la Mujer en InfoJobs con FemCoders Club y EY",
      title: " Evento Estructuras en Movimiento: Mujeres que Transforman el Futuro — 8 de marzo 2026",
    },
    {
      src: "/assets/eventos2026/cv-tech-jennifer.webp",
      alt: "Taller presencial Propuesta de Valor con Jennifer C. Neyra en el Canòdrom",
      title: "Taller Presencial: Propuesta de Valor con Jennifer C. Neyra — Canòdrom 2026",
    },
    {
      src: "/assets/Eventos2025/aprendiendo-sobre-IA.webp",
      alt: "Aprendiendo sobre IA y liderazgo tecnológico femenino",
      title:
        "Evento de IA y liderazgo tecnológico femenino organizado por FemCoders Club, InfoJobs y NttData",
    },
    {
      src: "/assets/Eventos2025/femCodersClub-comunidad-inclusiva.webp",
      alt: "Comunidad tech inclusiva organizada por FemCoders Club",
      title: "Evento de comunidad tech inclusiva organizado por FemCoders Club",
    },
    {
      src: "/assets/Eventos2025/igualdad-en-tecnologia.webp",
      alt: "No le pongas género, ponle talento",
      title:
        "Charla inspiradora, igualdad en tecnologia, talento sin género, IA con propósito",
    },
    {
      src: "/assets/Eventos2025/publico-evento-IA-femCodersClub.webp",
      alt: "Público asistente al evento de IA organizado por FemCoders Club",
      title: "Participantes de FemCoders Club en evento de IA en Barcelona",
    },
    {
      src: "/assets/home-images/comunidad-tech-femcodersClub.webp",
      alt: "Organizadores evento DataConnect FemCoders Club",
      title:
        "Irina, Isadora,Lucia, Silvina, parte de las cofundadoras de FemCoders Club",
    },
    {
      src: "/assets/home-images/organizadoresEventoDataConnect.webp",
      alt: "Organizadores evento DataConnect FemCoders Club",
      title:
        "femCoders Club, InfoJobs, LeWagon y Glovo, organizando DataConnect",
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
      src: "/assets/home-images/eventoCarmenAnsio.webp",
      alt: "Evento con Carmen Ansio en FemCoders Club",
      title: "Evento con Carmen Ansio",
    },
    {
      src: "/assets/home-images/mujeresTech.webp",
      alt: "Grupo de mujeres en tecnología en un evento de FemCoders Club",
      title: "Mujeres en tecnología",
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
      src: "/assets/home-images/eventoUnlokingData.webp",
      alt: "Evento sobre datos e inteligencia artificial en FemCoders Club",
      title: "Evento: Unlocking Data",
    },
    {
      src: "/assets/home-images/posit8Marzo.webp",
      alt: "Evento en el Día Internacional de la Mujer en FemCoders Club",
      title: "8M: Positividad y Empoderamiento",
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
      src: "/assets/home-images/comunidadDeMujeres.webp",
      alt: "Mujeres en la comunidad de FemCoders Club",
      title: "Mujeres en la Comunidad",
    },
    {
      src: "/assets/home-images/eventoAdevintaFemCodersClub.webp",
      alt: "Evento en Adevinta con ponentes de FemCoders Club",
      title: "Evento en Adevinta",
    },
    {
      src: "/assets/ML-ComunicacionAcertiva/EventoFemCodersClub-ComunicacionAcertiva.webp",
      alt: "Evento de comunicación asertiva en FemCoders Club",
      title: "Evento de Comunicación Asertiva",
    },
    {
      src: "/assets/home-images/LuciaCofundadora.webp",
      alt: "Lucía, cofundadora de FemCoders Club",
      title: "Lucía, Cofundadora",
    },
    {
      src: "/assets/UltimosEventos2024/eventoSeatCode.webp",
      alt: "Evento reciente en SeatCode con ponentes de FemCoders Club",
      title: "Evento en SeatCode",
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
    const fetchUpcomingEvents = async () => {
      try {
        const events = await getUpcomingEvents();
        if (events && events.length > 0) {
          const adaptedEvents: Event[] = events.map((nextEvent) => ({
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
          }));
          setUpcomingEvents(adaptedEvents);
          setTimeLeft(calculateTimeLeft(new Date(adaptedEvents[0].start.local)));
        }
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
      }
    };

    fetchUpcomingEvents();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (upcomingEvents.length > 0) {
        const eventDate = new Date(upcomingEvents[activeEventIndex].start.local);
        setTimeLeft(calculateTimeLeft(eventDate));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [upcomingEvents, activeEventIndex]);

  useEffect(() => {
    if (upcomingEvents.length <= 1) return;
    const carouselTimer = setInterval(() => {
      setIsEventTransitioning(true);
      setTimeout(() => {
        setActiveEventIndex((prev) => (prev + 1) % upcomingEvents.length);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsEventTransitioning(false);
          });
        });
      }, 600);
    }, 8000);
    return () => clearInterval(carouselTimer);
  }, [upcomingEvents]);

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
  const newsData: NewsItem[] = [
    {
      id: "7",
      title: "El mes en que dejamos de pedir permiso para ocupar espacio",
      description:
        "Talent Arena, el primer evento de Claude en Barcelona, una invitación del Gobierno que no esperábamos y una tarde con InfoJobs. Marzo 2026 ha sido un mes que deja huella.",
      image: "/banner-2026-talentArena.png",
      imageAlt: "FemCoders Club — Eventos de marzo 2026: Talent Arena, Claude y InfoJobs",
      date: "6 Marzo 2026",
      category: "Noticias",
      link: "/noticias/marzo-2026-eventos",
    },
    {
      id: "6",
      title: "Segundo taller con Jennifer Neyra: la presentación ya está disponible",
      description: (
        <>
          ¿Estuviste en el taller presencial del 26 de febrero en el Canòdrom?
          La presentación de{" "}
          <strong>Jennifer C. Neyra</strong> sobre propuesta de valor profesional
          ya está disponible en nuestra sección de Presentaciones Destacadas.{" "}
          <strong>Regístrate o inicia sesión</strong> para acceder a este recurso exclusivo.
        </>
      ),
      image: "/assets/eventos2026/cv-tech-jennifer.webp",
      imageAlt: "Segundo taller Propuesta de Valor con Jennifer C. Neyra en el Canòdrom",
      date: "26 Febrero 2026",
      category: "Eventos",
      link: "/login",
    },
    {
      id: "1",
      title: "Closures, Scope y Context: Lo que Realmente Pasa en el Motor de JavaScript",
      description:
        "El 60% de las preguntas técnicas de JavaScript en entrevistas giran alrededor de scope, closures y this. Aprende cómo funcionan realmente con una state machine interactiva y domina bind, call y apply.",
      image: "/assets/javascript/closures-scope-context.webp",
      imageAlt: "Closures, Scope y Context en JavaScript - State Machine femCoders Club",
      date: "1 Marzo 2026",
      category: "Recursos",
      link: "/recursos/js/closures-scope-context",
    },
    {
      id: "2",
      title: "CV Tech vs Selección IT: Recursos disponibles para miembros",
      description: (
        <>
          ¿Te perdiste el evento con{" "}
          <strong>Jennifer C. Neyra</strong> sobre cómo optimizar tu CV en el sector IT?
          La presentación y un ejemplo práctico de CV optimizado para ATS ya están disponibles
          en nuestra sección de Presentaciones Destacadas.{" "}
          <strong>Regístrate o inicia sesión</strong> para acceder a estos recursos exclusivos.
        </>
      ),
      image: "/assets/eventos2026/cv-tech-jennifer.webp",
      imageAlt: "CV Tech vs Selección IT - Recursos del evento con Jennifer C. Neyra",
      date: "12 Febrero 2026",
      category: "Eventos",
      link: "/login",
    },
    {
  id: "3",
  title: "FemCoders Club, Community Partner oficial de Talent Arena 2026",
  description: (
    <>
      FemCoders Club se une a{" "}
      <a
        href="https://talentarena.tech/"
        target="_blank"
        rel="noopener noreferrer"
        className="highlight-link"
      >
        Talent Arena 2026
      </a>
      , el principal evento europeo de talento digital que se celebra junto al Mobile World Congress Barcelona. Una oportunidad única para conectar, visibilizar y potenciar el talento femenino en tecnología a nivel europeo.
    </>
  ),
  image: "/assets/noticias/talent-arena-2026-partnership.webp",
  imageAlt:
    "FemCoders Club Community Partner de Talent Arena 2026 en MWC Barcelona",
  date: "30 Enero 2026",
  category: "Colaboraciones",
  link: "/noticias/talent-arena-2026-partnership",
},
    {
      id: "4",
      title: "Manipulaci\u00f3n del DOM como una Ingeniera",
      description:
        "Event Delegation, Performance, IntersectionObserver, MutationObserver y Custom Events. Aprende a construir sistemas robustos de manipulaci\u00f3n del DOM con un proyecto pr\u00e1ctico: Smart Analytics Tracker.",
      image: "/assets/javascript/manipulacion-dom-ingeniera.png",
      imageAlt:
        "Manipulaci\u00f3n del DOM como una Ingeniera - femCoders Club",
      date: "8 Febrero 2026",
      category: "Recursos",
      link: "/recursos/js/manipulacion-dom-ingeniera",
    },
  ];
  const githubProjectsData = [
    {
      id: "7",
      name: "Mujeres que Transforman el Futuro",
      description: (
        <>
          Landing page para el evento &lsquo;Estructuras en Movimiento: Mujeres que Transforman el Futuro&rsquo;. Una página diseñada para inspirar e informar sobre el próximo evento de FemCoders Club, con reserva de entradas a través de{" "}
          <a
            href="https://www.eventbrite.es/e/entradas-estructuras-en-movimiento-mujeres-que-transforman-el-futuro-1984505957741?aff=oddtdtcreator"
            className="highlight-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eventbrite
          </a>
        </>
      ),
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/femcodersclub/mujeres-que-transforman-el-futuro",
      demoUrl: "https://femcodersclub.github.io/mujeres-que-transforman-el-futuro/",
      image: "mujeres-que-transforman-futuro.png",
      imageAlt: "Mujeres que Transforman el Futuro — Landing de evento FemCoders Club",
      author: "Ana Lucía Silva Córdoba",
      authorAvatar: "assets/home-images/anaLuciaSilva.png",
      lastUpdated: "marzo 2026",
      stars: 1,
      language: "HTML",
      difficulty: "Intermedio",
    },
    {
      id: "1",
      name: "State Machine — Wizard de Perfil",
      description:
        "Wizard de configuración de perfil profesional implementado como una state machine. Demuestra closures, scope léxico, this y bind/call/apply en acción — cada paso del wizard muestra en tiempo real cómo funcionan estos mecanismos.",
      techStack: ["JavaScript", "State Machine", "IIFE"],
      githubUrl: "https://github.com/femcodersclub/state-machine",
      demoUrl: "https://femcodersclub.github.io/state-machine/",
      image: "/assets/javascript/state-machine-scope.webp",
      imageAlt: "State Machine Wizard — Closures, Scope y Context en JavaScript",
      author: "Irina Ichim",
      authorAvatar: "assets/home-images/desarolladora-profesional-irina.webp",
      lastUpdated: "marzo 2026",
      stars: 1,
      language: "JavaScript",
      postUrl: "https://www.femcodersclub.com/recursos/js/closures-scope-context",
      postTitle: "Closures, Scope y Context: Lo que Realmente Pasa en el Motor de JavaScript",
      difficulty: "Avanzado",
    },
    {
      id: "2",
      name: "Smart Analytics Tracker",
      description:
        "Sistema de analytics inteligente que demuestra Event Delegation, IntersectionObserver, MutationObserver y Custom Events. Detecta rage clicks, mide visibilidad real de elementos y trackea scroll con arquitectura desacoplada.",
      techStack: ["JavaScript", "DOM API", "Event Delegation"],
      githubUrl: "https://github.com/femcodersclub/smart-analytics-tracker",
      demoUrl: "https://femcodersclub.github.io/smart-analytics-tracker/",
      image: "/assets/javascript/dashboard-metricas.png",
      imageAlt: "Smart Analytics Tracker - Dashboard de m\u00e9tricas en tiempo real",
      author: "Irina Ichim",
      authorAvatar: "assets/home-images/desarolladora-profesional-irina.webp",
      lastUpdated: "febrero 2026",
      stars: 1,
      language: "JavaScript",
      postUrl: "https://www.femcodersclub.com/recursos/js/manipulacion-dom-ingeniera",
      postTitle: "Manipulaci\u00f3n del DOM como una Ingeniera",
      difficulty: "Avanzado",
    },
    {
      id: "3",
      name: "API Resilience Wrapper",
      description:
        "Wrapper que añade resiliencia a cualquier API: retry automático con backoff exponencial, circuit breaker, rate limiting, timeout y fallback. Aprende patrones profesionales para manejar fallos de red.",
      techStack: ["TypeScript", "JavaScript", "API Design"],
      githubUrl: "https://github.com/femcodersclub/API-Resilience-Wrapper",
      demoUrl: "https://femcodersclub.github.io/API-Resilience-Wrapper/",
      image: "/assets/javascript/api-resilience-wrapper.webp",
      imageAlt: "API Resilience Wrapper - Patrones de resiliencia para APIs",
      author: "Irina Ichim",
      authorAvatar: "assets/home-images/desarolladora-profesional-irina.webp",
      lastUpdated: "enero 2026",
      stars: 1,
      language: "TypeScript",
      postUrl: "https://www.femcodersclub.com/recursos/js/event-loop-javascript",
      postTitle: "Event Loop en JavaScript: Cómo Funciona la Asincronía",
      difficulty: "Avanzado",
    },
    {
      id: "4",
      name: "FemPalette - Generador SASS",
      description:
        "Generador visual de variables SASS con tutorial completo que incluye funciones, mixins y patrón 7-1. Herramienta interactiva para aprender SASS de forma práctica.",
      techStack: ["SASS", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/femcodersclub/sass-color-generator",
      demoUrl: "https://femcodersclub.github.io/sass-color-generator/",
      image: "assets/css/fempalette-generator.gif",
      imageAlt: "Generador de variables SASS - FemPalette",
      author: "Irina Ichim",
      authorAvatar: "assets/home-images/desarolladora-profesional-irina.webp",
      lastUpdated: "2 meses atrás",
      stars: 1,
      language: "SASS",
      postUrl: "https://www.femcodersclub.com/recursos/css/sass-next-level",
      postTitle: "SASS: Lleva tu CSS al siguiente nivel",
      difficulty: "Intermedio",
    },
    {
      id: "5",
      name: "Efecto Parallax con Svelte",
      description:
        "Implementación elegante del efecto parallax utilizando Svelte. Demuestra las capacidades reactivas del framework para crear animaciones fluidas.",
      techStack: ["Svelte", "CSS", "JavaScript"],
      githubUrl: "https://github.com/femcodersclub/Efecto-Parallax-Svelte",
      demoUrl: "https://efecto-parallax-svelte.vercel.app/",
      image: "assets/home-images/efecto-parallax-svelte.webp",
      imageAlt: "Efecto Parallax desarrollado con Svelte",
      author: "FemCoders Club",
      authorAvatar: "assets/FemCodersClubLogo.webp",
      lastUpdated: "2024",
      stars: 1,
      language: "Svelte",
      postUrl: "",
      postTitle: "Creando efectos parallax con Svelte",
      difficulty: "Intermedio",
    },
    {
      id: "6",
      name: "Canvas Text Animation",
      description:
        "Animaciones de texto creativas usando HTML5 Canvas y JavaScript. Explora las posibilidades artísticas de la programación con efectos visuales impactantes.",
      techStack: ["JavaScript", "HTML5 Canvas", "CSS"],
      githubUrl: "https://github.com/femcodersclub/CanvasTextAnimation",
      demoUrl: "https://femcodersclub.github.io/CanvasTextAnimation/",
      image: "assets/html/ApisHtml.webp",
      imageAlt: "Animaciones de texto con Canvas",
      author: "Irina Ichim",
      authorAvatar: "assets/home-images/desarolladora-profesional-irina.webp",
      lastUpdated: "2024",
      stars: 1,
      language: "JavaScript",
      postUrl: "https://www.femcodersclub.com/recursos/html/apis-html",
      postTitle: "Introducción a las APIs en HTML: Potencia tus Proyectos Web",
      difficulty: "Básico",
    },
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
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="400"
            className="image-content"
            role="presentation"
            aria-label="Cofundadoras de FemCoders Club demostrando liderazgo e influencia"
          >
            <div className="esferas-container">
              {/* Esfera principal - Liderazgo primario */}
              <div className="leadership-sphere primary">
                <div 
                  className="leadership-indicator" 
                  data-tooltip="Pausar/Reanudar animación"
                  role="button"
                  tabIndex={0}
                  aria-label="Pausar o reanudar animación de imágenes"
                ></div>
                <OptimizedImage
                  src="/assets/home-images/asociacion-mujeresTech-Barcelona.webp"
                  alt="Cofundadoras de FemCoders Club: líderes inspiradoras en tecnología"
                  title="Liderazgo e influencia: Cofundadoras de FemCoders Club"
                  loading="eager"
                />
              </div>

              {/* Esfera secundaria - Liderazgo complementario */}
              <div className="leadership-sphere secondary">
                <div 
                  className="leadership-indicator" 
                  data-tooltip="Pausar/Reanudar animación"
                  role="button"
                  tabIndex={0}
                  aria-label="Pausar o reanudar animación de imágenes"
                ></div>
                <OptimizedImage
                  src="/fundadorasFemCodersClub.png"
                  alt="Elvia, Lili y Silvina: fundadoras de FemCoders Club impulsando la comunidad tech"
                  title="Elvia, Lili y Silvina - Fundadoras legacy de FemCoders Club"
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
              <CarouselWithText
                texts={texts}
                currentImageIndex={carouselIndex}
              />
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
                    1500+
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
                    40+
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
                    30+
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

              {upcomingEvents.length > 0 ? (
                <div
                  className={`event-carousel-slide${isEventTransitioning ? " transitioning" : ""}`}
                >
                  {upcomingEvents.length > 1 && (
                    <p className="event-name-label">
                      {upcomingEvents[activeEventIndex]?.name?.text}
                    </p>
                  )}

                  <div className="countdown">
                    <div className="countdown-item">
                      <span>{timeLeft.days}</span> días
                    </div>
                    <div className="countdown-item">
                      <span>{timeLeft.hours}</span> horas
                    </div>
                    <div className="countdown-item">
                      <span>{timeLeft.minutes}</span> minutos
                    </div>
                    <div className="countdown-item">
                      <span>{timeLeft.seconds}</span> segundos
                    </div>
                  </div>

                  <div className="event-card">
                    <div className="event-image-wrapper">
                      <OptimizedImage
                        src={
                          upcomingEvents[activeEventIndex]?.logo?.original
                            ?.url || "/apoyomujeres.png"
                        }
                        alt="Próximo evento"
                        className="event-image"
                      />
                    </div>
                    {upcomingEvents.length > 1 && (
                      <div className="event-carousel-dots">
                        {upcomingEvents.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            className={`event-dot${idx === activeEventIndex ? " active" : ""}`}
                            onClick={() => {
                              if (idx === activeEventIndex) return;
                              setIsEventTransitioning(true);
                              setTimeout(() => {
                                setActiveEventIndex(idx);
                                requestAnimationFrame(() => {
                                  requestAnimationFrame(() => {
                                    setIsEventTransitioning(false);
                                  });
                                });
                              }, 600);
                            }}
                            aria-label={`Ver evento ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                    <Link to="/eventos">
                      <button className="secondary-button pulse-effect">
                        Más información
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
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
                        <strong>Mantente conectada</strong> para ser la primera
                        en conocer nuestras próximas sorpresas.
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
                        <span style={{ animation: "pulse 2s infinite" }}>
                          ✨
                        </span>
                        <span
                          style={{ animation: "pulse 2s infinite 0.5s" }}
                        >
                          🚀
                        </span>
                        <span style={{ animation: "pulse 2s infinite 1s" }}>
                          💜
                        </span>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div
                    className="event-placeholder-card"
                    data-aos="zoom-in"
                    data-aos-delay="600"
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
                </>
              )}
            </div>
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
          maxProjects={7}
          showFilters={true}
          autoRotate={true}
          rotateInterval={8000}
        />
      </section>
      <section className="parallax bg5">
        {/* Texto superior */}
        <div
          className="content-text"
          style={{ width: "100%", maxWidth: "100vw" }}
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <p className="text-white">
            Si tienes alguna pregunta o inquietud, o si estás interesada en cómo
            puedes contribuir a nuestra comunidad, por favor llena el
            formulario. Estamos aquí para asistirte y valoramos enormemente tu
            interés en apoyar a FemCoders Club.
            <br />
          </p>
        </div>

        {/* Bloque principal: formulario + imágenes */}
        <div className="form-and-photos">
          {/* FORMULARIO */}
          <div
            className="form-container"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="900"
            data-aos-easing="ease-out-sine"
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

          {/* IMÁGENES CON EFECTO "ESFERAS DE INFLUENCIA LIGERO" */}
          <div
            className="image-content"
            data-aos="fade-up-left"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="200"
            role="presentation"
            aria-label="Cofundadoras de FemCoders Club compartiendo experiencias"
          >
            <div className="esferas-container bg5-variant">
              {/* Esfera principal */}
              <div className="leadership-sphere primary">
                <div 
                  className="leadership-indicator" 
                  data-tooltip="Pausar/Reanudar animación"
                  role="button"
                  tabIndex={0}
                  aria-label="Pausar o reanudar animación de imágenes"
                ></div>
                <OptimizedImage
                  src="/fundadoras-asociacion-femCodersClub.png"
                  alt="Cofundadoras de FemCoders Club participando en charlas STEM"
                  title="Cofundadoras de FemCoders Club participando en charlas STEM"
                  loading="eager"
                />
              </div>

              {/* Esfera secundaria */}
              <div className="leadership-sphere secondary">
                <div 
                  className="leadership-indicator" 
                  data-tooltip="Pausar/Reanudar animación"
                  role="button"
                  tabIndex={0}
                  aria-label="Pausar o reanudar animación de imágenes"
                ></div>
                <OptimizedImage
                  src="/empoderando-mujeres.png"
                  alt="Fundadoras de FemCoders Club empoderando mujeres en STEM"
                  title="fundadoras de FemCoders Club empoderando mujeres en STEM"
                  loading="eager"
                />
              </div>
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
