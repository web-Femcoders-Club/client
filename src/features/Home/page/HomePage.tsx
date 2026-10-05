import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { getUpcomingEvents } from "../../../api/eventsApi";
import StatusModal from "../../../components/ui/StatusModal";
import CharCounter from "../../../components/ui/CharCounter";
import { MESSAGE_MAX_LENGTH } from "../../../utils/constants";
import SeccionNoticias, { type NewsItem } from "../components/SeccionNoticias";
import HeroCollage from "../components/HeroCollage";
import SeccionEsencia from "../components/SeccionEsencia";
import SeccionConocenos from "../components/SeccionConocenos";
import SeccionProyectos from "../components/SeccionProyectos";
import SeccionEmpresas from "../components/SeccionEmpresas";
import SeccionContacto from "../components/SeccionContacto";
import CifraAnimada from "../components/CifraAnimada";
import { ArrowRight, Building2, CalendarDays, Users } from "lucide-react";
import { CIFRAS_COMUNIDAD } from "../../../data/cifrasComunidad";
import "./Home.css";
import "./portada.css";
import "../../../features/Blog/page/PostStyles.css";

/*
 * Cifras de la portada; los valores viven en src/data/cifrasComunidad.ts,
 * compartidos con /equipo. `frase` es lo que oye un lector de pantalla: el
 * número animado va oculto.
 */
const { mujeres, eventos, empresas } = CIFRAS_COMUNIDAD;
const CIFRAS_PORTADA = [
  { valor: mujeres, rotulo: "Mujeres en STEM", frase: `Más de ${mujeres} mujeres en STEM`, Icono: Users },
  { valor: eventos, rotulo: "Eventos realizados", frase: `Más de ${eventos} eventos realizados`, Icono: CalendarDays },
  { valor: empresas, rotulo: "Empresas colaboradoras", frase: `Más de ${empresas} empresas colaboradoras`, Icono: Building2 },
];

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
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState<boolean>(false);
  const [messageLength, setMessageLength] = useState<number>(0);
  const { openModal } = useContext(ModalContext);
  const form = useRef<HTMLFormElement | null>(null);

  const images = [
    {
      src: "/public-optimized/desktop/assets/noticias/taller-decidim-elvia.webp",
      alt: "Taller de Decidim en el Canòdrom con Elvia Benedith — FemCoders Club, mayo 2026",
      title: "Taller práctico sobre Decidim con Elvia Benedith (Pokecode) — Canòdrom, mayo 2026",
    },
    {
      src: "/assets/eventos2026/evento-github-2026.webp",
      alt: "Evento de GitHub en FemCoders Club con ponentes femeninas",
      title: "Evento de GitHub en FemCoders Club — 2026",
    },
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

    setIsSubmitting(true);
    setErrorMessage(null);
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
        throw new Error("No se pudo enviar el mensaje. Inténtalo de nuevo.");
      }

      setShowMessage(true);
      form.current.reset();
      setMessageLength(0);
      setAcceptedPrivacy(false);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Error al enviar el mensaje."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const newsData: NewsItem[] = [
    {
      id: "25",
      title: "Testing en JavaScript sin frameworks: construye tu propio test runner",
      description:
        "Assertions con diff, spies, fake timers y cobertura real leyendo el perfilador de V8. Proyecto práctico: testlet, un framework de testing completo y sin dependencias que se testea a sí mismo.",
      image: "/assets/javascript/testlet-arquitectura.webp",
      imageAlt: "Diagrama de arquitectura de testlet: Runner, Suite, Test, Reporter, Assert, Spy, FakeTimers y Coverage",
      date: "2 Octubre 2026",
      category: "Recursos",
      link: "/recursos/js/testing-javascript-sin-frameworks",
    },
    {
      id: "24",
      title: "Nuestro equipo recibe el premio Best use of the Vonage Video API en HackBarna AI Summit 26",
      description:
        "CTRL4ELLA, el equipo de FemCoders Club, presentó OFFLOAD en HackBarna AI Summit 26: una aplicación familiar que reparte la carga mental de una casa, con una agente de IA que escucha una videollamada de Vonage y solo pide la palabra cuando hace falta. El código es público, y contamos cómo está construido.",
      image: "/assets/noticias/offload-challenge-vonage-hackbarna-ai-summit-26.jpg",
      imageAlt: "Collage de OFFLOAD en HackBarna AI Summit 26: el equipo CTRL4ELLA en el escenario con el premio de Vonage, el equipo trabajando, el público del evento y pantallas de la aplicación con Mia",
      date: "29 Septiembre 2026",
      category: "Noticias",
      link: "/noticias/offload-challenge-vonage-hackbarna-ai-summit-26",
    },
    {
      id: "23",
      title: "FemCoders Club, nueva Ambassador del Barcelona Cybersecurity Congress 2026",
      description:
        "Somos Ambassadors oficiales del congreso europeo de ciberseguridad, del 3 al 5 de noviembre en Fira de Barcelona. Habrá un centenar de expositores, un hacking village y un programa sobre IA aplicada a la ciberdefensa, seguridad en 5G y 6G y normativa europea. Tenemos dos códigos para la comunidad: entrada gratuita a la zona de expositores y el pase completo por 225 € en lugar de 495 €.",
      image: "/assets/noticias/bcc26-femcodersclub.jpg",
      imageAlt: "Cartel del Barcelona Cybersecurity Congress 2026 con el lema «We are ambassadors of the #BCC26» y el logotipo de FemCoders Club en el centro. Del 3 al 5 de noviembre de 2026 en Barcelona, Gran Via Venue, hall 2.1",
      date: "17 Septiembre 2026",
      category: "Noticias",
      link: "/noticias/barcelona-cybersecurity-congress-2026",
    },
    {
      id: "21",
      title: "FemCoders Club se une al Vonage Community Partnership Program",
      description:
        "Nos unimos al programa de Vonage (part of Ericsson) para comunidades de developers. Sus APIs de voz, vídeo, mensajería y verificación son tecnología con la que podemos experimentar, y esta colaboración nos acerca a un ecosistema internacional. Las primeras cosas ya están disponibles dentro de la web, y estamos viendo si sale adelante un proyecto en grupo.",
      image: "/assets/noticias/vonage-femcodersclub.jpg",
      imageAlt: "Vonage x fem Coders Club, colaboración para impulsar a las mujeres en tecnología. Los logotipos de Vonage —part of Ericsson— y de FemCoders Club sobre un fondo con una red de nodos y la silueta de un rostro de mujer formada por circuitos",
      aiGenerated: true,
      date: "10 Septiembre 2026",
      category: "Noticias",
      link: "/noticias/vonage-community-partnership-program",
    },
    {
      id: "20",
      title: "FemCoders Club vuelve a HackBarna AI Summit 26: esta vez también desde dentro",
      description:
        "Volvemos como Community Partner y este año vamos un poco más allá: varias femcoders hemos formado equipo y también participaremos en el hackathon. 19 y 20 de septiembre de 2026 en Norrsken House Barcelona.",
      image: "/assets/noticias/hackbarna-ai-summit-26-desde-dentro.jpg",
      imageAlt: "Cuatro tarjetas «¡vengo a hackear!» de HackBarna AI Summit 26 con las fotos de Irina Ichim, Elvia Benedith, Ana Lucía Silva Córdoba y Silvina Lucero Calderón, sobre la playa de Barcelona. Sep 19-20, Norrsken House Barcelona",
      aiGenerated: true,
      date: "9 Septiembre 2026",
      category: "Noticias",
      link: "/noticias/hackbarna-ai-summit-26-desde-dentro",
    },
    {
      id: "15",
      title: "FemCoders Club colabora en el desarrollo de June, una plataforma para documentar la violencia digital y política de género",
      description:
        "FemCoders Club se suma como equipo de desarrollo al proyecto June, impulsado por la asociación In CoDe, una plataforma para documentar la violencia política de género y la censura digital en España.",
      image: "/assets/noticias/colaboracion-june.png",
      imageAlt: "FemCoders Club colabora en el desarrollo de June, plataforma de In CoDe contra la violencia digital de género",
      aiGenerated: true,
      date: "5 Julio 2026",
      category: "Noticias",
      link: "/noticias/colaboracion-june",
    },
    {
      id: "14",
      title: "Optimización en JavaScript: mide antes de tocar una línea",
      description:
        "Debounce, throttle, memoization y detección de memory leaks medidos con datos reales, no con intuiciones. Proyecto práctico: perf-lab-js, un toolkit de profiling y benchmarking sin dependencias.",
      image: "/assets/javascript/optimizacion-javascript.webp",
      imageAlt: "Optimización en JavaScript: mide antes de tocar una línea — femCoders Club",
      aiGenerated: true,
      date: "27 Junio 2026",
      category: "Recursos",
      link: "/recursos/js/optimizacion-javascript",
    },
    {
      id: "13",
      title: "Web APIs de nueva generación en JavaScript: más allá del localStorage",
      description:
        "IndexedDB, Web Crypto API y File System Access API: persistencia estructurada, encriptación AES-GCM-256 real y acceso a ficheros sin servidor. Proyecto práctico: Encrypted Private Notes, sin dependencias externas.",
      image: "/assets/javascript/web-apis-nueva-generacion.webp",
      imageAlt: "Web APIs de nueva generación en JavaScript — femCoders Club",
      aiGenerated: true,
      date: "12 Junio 2026",
      category: "Recursos",
      link: "/recursos/js/web-apis-nueva-generacion",
    },
    {
      id: "11",
      title: "Módulos y Arquitectura Escalable en JavaScript",
      description:
        "ES Modules vs CommonJS, dynamic import, tree shaking y cómo organizar un proyecto que va a crecer. Proyecto práctico: Productivity Dashboard, un dashboard modular en vanilla JavaScript con tres widgets independientes.",
      image: "/assets/javascript/modulos-arquitectura-escalable.webp",
      imageAlt: "Módulos y Arquitectura Escalable en JavaScript — femCoders Club",
      aiGenerated: true,
      date: "3 Junio 2026",
      category: "Recursos",
      link: "/recursos/js/modulos-arquitectura-escalable",
    },
    {
      id: "10",
      title: "Patrones de Diseño en JavaScript Puro: Más Allá del Catálogo",
      description:
        "Module, Observer, Proxy, Decorator y composición funcional en menos de 300 líneas. Proyecto práctico: reactive-store-js, un sistema de estado reactivo que implementa cinco patrones trabajando juntos.",
      image: "/assets/javascript/patrones-diseno-javascript.webp",
      imageAlt: "Patrones de Diseño en JavaScript Puro — femCoders Club",
      aiGenerated: true,
      date: "10 Mayo 2026",
      category: "Recursos",
      link: "/recursos/js/patrones-diseno-javascript",
    },
    {
      id: "9",
      title: "FemCoders Club colabora con Extraordinary: networking real para mujeres en tecnología",
      description: (
        <>
          Desde marzo de 2026 colaboramos con{" "}
          <strong>Extraordinary</strong>, la app de networking diseñada para
          conectar a mujeres profesionales basándose en intereses y objetivos
          reales. Visibilidad, conexiones de calidad y comunidad en tu bolsillo.{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.extraordinayversion1&hl=es_419"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            Descarga la app
          </a>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/company/extraordinary-women-in-barcelona/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
          >
            LinkedIn
          </a>
        </>
      ),
      image: "/assets/equipoFemCodersClub/colaboracion-femCodersClub-Extraordinary.png",
      imageAlt: "Colaboración FemCoders Club y Extraordinary — networking para mujeres en tecnología",
      date: "Marzo 2026",
      category: "Colaboraciones",
      link: "/#empresas-titulo",
    },
    {
      id: "8",
      title: "Estructuras de Datos Avanzadas en JavaScript: Map, Set, WeakMap y WeakSet",
      description:
        "Map, Set, WeakMap y WeakSet: cuándo usar cada estructura y por qué importa. Proyecto práctico: LRU Cache con Map, el mismo ejercicio de entrevistas de Google, Meta y Amazon.",
      image: "/assets/javascript/estructuras-datos-js.webp",
      imageAlt: "Estructuras de Datos Avanzadas en JavaScript: Map, Set, WeakMap y WeakSet",
      date: "25 Abril 2026",
      category: "Recursos",
      link: "/recursos/js/estructuras-datos-js",
    },
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
      <section className="parallax bg1 portada" aria-labelledby="portada-titulo">
        <div className="portada__contenedor">
          <div
            className="portada__texto"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic"
          >
            <h1
              id="portada-titulo"
              className="portada__titulo"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              femCoders Club
            </h1>

            <h2 className="portada__lema" data-aos="fade-up" data-aos-delay="400">
              Tu comunidad de mujeres en{" "}
              <span className="portada__subrayada">
                tecnología
                <svg
                  className="portada__curva"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 9 Q 50 0 100 9" />
                </svg>
              </span>
            </h2>

            <p className="portada__parrafo" data-aos="fade-up" data-aos-delay="600">
              <strong>Juntas,</strong> potenciamos el crecimiento y liderazgo de
              las mujeres tech. Descubre nuevas oportunidades, comparte
              conocimientos y crece profesionalmente en un entorno inclusivo y
              motivador.
              <br />
              Si compartes nuestra pasión por la tecnología, ¡únete a{"\u00a0"}nosotras!
            </p>

            <div className="portada__botones" data-aos="fade-up" data-aos-delay="800">
              <Link to="/register" className="fc-boton fc-boton--grande fc-boton--noche">
                Unirse al club
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link to="/eventos" className="fc-boton fc-boton--grande fc-boton--borde">
                Ver eventos
              </Link>
            </div>

            <ul className="portada__cifras">
              {CIFRAS_PORTADA.map(({ valor, rotulo, frase, Icono }, i) => (
                <li key={rotulo} className="portada__cifra">
                  <Icono className="portada__cifra-icono" aria-hidden="true" />
                  <div>
                    <CifraAnimada valor={valor} sufijo="+" retraso={i * 350} />
                    <span className="portada__cifra-rotulo" aria-hidden="true">
                      {rotulo}
                    </span>
                    <span className="portada__solo-lector">{frase}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <HeroCollage />
        </div>
      </section>
      <SeccionEsencia fotos={images} />

      {/*
        La lógica de eventos no se toca: la petición, la cuenta atrás y el
        cambio automático siguen aquí. La sección solo los pinta. El manejador
        de los puntos es el mismo que había en el marcado anterior.
      */}
      <SeccionConocenos
        eventos={upcomingEvents}
        indiceActivo={activeEventIndex}
        tiempoRestante={timeLeft}
        enTransicion={isEventTransitioning}
        alElegirEvento={(idx) => {
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
      />

      <SeccionNoticias noticias={newsData} />
      <SeccionProyectos />
      <SeccionEmpresas />
      <SeccionContacto>
          <div
            className="form-container"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="900"
            data-aos-easing="ease-out-sine"
          >
            <div className="form-card">
              <img
                src="/logo-femcoders-animado.webp"
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
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={MESSAGE_MAX_LENGTH}
                    aria-describedby="home-message-counter"
                    onChange={(e) => setMessageLength(e.target.value.length)}
                  ></textarea>
                  <label htmlFor="message">Mensaje</label>
                  <CharCounter
                    id="home-message-counter"
                    current={messageLength}
                    max={MESSAGE_MAX_LENGTH}
                  />
                </div>
                <div className="form-consent">
                  <input
                    type="checkbox"
                    id="homePrivacy"
                    name="homePrivacy"
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    required
                    aria-required="true"
                  />
                  <label htmlFor="homePrivacy">
                    He leído y acepto la{" "}
                    <button
                      type="button"
                      className="link-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal("privacyPolicy");
                      }}
                    >
                      Política de Privacidad
                    </button>
                    . <span aria-hidden="true">*</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="fc-boton fc-boton--noche"
                  disabled={isSubmitting || !acceptedPrivacy}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? "Enviando…" : "Enviar"}
                </button>
              </form>
            </div>
          </div>
      </SeccionContacto>

      <StatusModal
        variant="success"
        isVisible={showMessage}
        onClose={() => setShowMessage(false)}
      />
      <StatusModal
        variant="error"
        isVisible={!!errorMessage}
        message={errorMessage ?? undefined}
        onClose={() => setErrorMessage(null)}
      />
    </>
  );
};

export default HomePage;
