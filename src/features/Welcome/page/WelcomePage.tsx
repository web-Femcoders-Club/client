import { useQuery } from "@tanstack/react-query";
import {
    Award,
    Book,
    BookOpen,
    Building,
    Calendar,
    ChevronRight,
    Clock,
    ExternalLink,
    FolderOpen,
    Heart,
    Lightbulb,
    MapPin,
    Megaphone,
    Menu,
    MicVocal,
    Rocket,
    Users,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { getUserAchievements } from "../../../api/achievementsApi";
import { getUpcomingEvents } from "../../../api/eventsApi";
import OptimizedImage from "../../../components/OptimizedImage";
import "./WelcomePage.css";

const WelcomePage = () => {
  const location = useLocation();
  const state = (location.state as { userName: string; userId?: number }) || {};
  const { userName, userId } = state;

  const resolvedUserId =
    userId || 
    parseInt(localStorage.getItem("userId") || "0") ||
    parseInt(sessionStorage.getItem("userId") || "0");

  const [selectedEmoji, setSelectedEmoji] = useState(
    localStorage.getItem("userEmoji") || null
  );
  const [emojiMenuOpen, setEmojiMenuOpen] = useState(false);
  const [emojiStats, setEmojiStats] = useState<{ [key: string]: number }>({});
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const displayName = userName || localStorage.getItem("userName") || "Usuario";

  const defaultAchievement = {
    id: 0,
    icon: "🏆",
    title: "Primera Conexión",
    description: "¡Bienvenida a la comunidad!",
  };

  const {
    data: userAchievements = [],
    isLoading: loadingAchievements,
    isError: achievementsError,
  } = useQuery({
    queryKey: ["userAchievements", resolvedUserId],
    queryFn: () => getUserAchievements(resolvedUserId),
    enabled: resolvedUserId > 0,
    staleTime: 0,
    cacheTime: 0,
  });

  const combinedAchievements = [defaultAchievement, ...userAchievements];

  useEffect(() => {
    const storedStats = localStorage.getItem("emojiStats");
    if (storedStats) {
      setEmojiStats(JSON.parse(storedStats));
    }

    const isTouchCapable =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouchCapable);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
        setIsHovering(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Buenos días";
    if (hours < 18) return "Buenas tardes";
    return "Buenas noches";
  };
  const [hoveredEmoji, setHoveredEmoji] = useState<string | null>(null);

  const getMotivationalMessage = () => {
    const messages = [
      "La tecnología debe ser un puente hacia la igualdad, no una barrera - Tarana Burke",
      "Las mujeres programadoras estamos cambiando el mundo, ¡una línea de código a la vez! 👩‍💻✨",
      "Tu perspectiva única hace que tu código sea especial. ¡Sigue brillando! 💫👑",
      "Ada Lovelace comenzó con un algoritmo. ¡Tú puedes crear lo que imagines! 🚀💪",
      "Cada mujer en tech abre camino para las demás. ¡Juntas somos más fuertes! 👭💻",
      "Tu voz y tu código son importantes. ¡El mundo tech necesita más mujeres como tú! 🎤💪",
      "Programa con confianza, debuggea sin miedo. ¡Eres más capaz de lo que crees! 🔍✨",
      "Detrás de cada error hay una lección. ¡Aprende y brilla más fuerte! 💎📚",
      "Tu código tiene el poder de inspirar a otras mujeres en tech. ¡Compártelo! 🌟💝",
      "Las grandes desarrolladoras también comenzaron con su primer 'Hola Mundo'. ¡Sigue adelante! 🌱💫",
      "Somos una comunidad de mujeres tech apoyándonos mutuamente. ¡Nunca estás sola! 👩‍💻👩‍💻",
      "Tu éxito inspira a otras mujeres a unirse al mundo tech. ¡Sigue rompiendo barreras! 🌈💪",
      "Cada commit es un paso más hacia la diversidad en tech. ¡Tú marcas la diferencia! 🎯💕",
      "¡Hoy es un gran día para romper barreras en el mundo tech! 🚀",
      "El código no tiene género, ¡tu talento tampoco! 💪",
      "Juntas creamos, aprendemos y crecemos en tecnología 👩‍💻",
      "Tu perspectiva única hace la diferencia en el desarrollo 🌟",
      "La diversidad en tech comienza contigo 🌈",
      "Programadora hoy, líder tech mañana 💫",
      "Construyendo el futuro, una línea de código a la vez ⌨️",
      "Tu código cuenta una historia única. ¡Escríbelo con tu estilo! 📖✨",
      "Los mejores productos nacen de equipos diversos. ¡Tu perspectiva es valiosa! 🌍💡",
      "Documenta con amor, testea con poder. ¡Tu código refleja tu excelencia! 📝💪",
      "Grace Hopper nos enseñó a no temer a los bugs. ¡Debuggea con valentía! 🐛✨",
      "Katherine Johnson calculó trayectorias espaciales. ¡Tú también puedes alcanzar las estrellas! 🚀⭐",
      "Las mujeres ENIAC programaron el primer computador. ¡Sigamos haciendo historia! 💫👩‍💻",
      "Tu potencial en tech no tiene límites. ¡Rompe el techo de cristal! 💎🔨",
      "Cada proyecto es una oportunidad para demostrar tu talento. ¡Brilla! ✨👑",
      "El futuro de la tecnología necesita tu visión única. ¡Créalo! 🎯💫",
      "Tómate un respiro cuando lo necesites. ¡Las mejores ideas llegan con mente fresca! 🧘‍♀️💆‍♀️",
      "Celebra cada pequeña victoria en tu viaje como desarrolladora. ¡Te lo mereces! 🎉👑",
      "Balance entre código y autocuidado. ¡Ambos son importantes! 💝🌸",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };
  const [motivationalMessage, setMotivationalMessage] = useState(
    getMotivationalMessage()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setMotivationalMessage(getMotivationalMessage());
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const { data: upcomingEvents, isLoading: loadingUpcomingEvents } = useQuery({
    queryKey: ["upcomingEvents"],
    queryFn: getUpcomingEvents,
  });

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmoji(emoji);
    localStorage.setItem("userEmoji", emoji);
    setEmojiMenuOpen(false);

    const currentDate = new Date().toLocaleDateString();
    const updatedStats = { ...emojiStats };
    updatedStats[currentDate] = (updatedStats[currentDate] || 0) + 1;
    setEmojiStats(updatedStats);
    localStorage.setItem("emojiStats", JSON.stringify(updatedStats));
  };

  // Función para calcular días hasta el evento
  const getDaysUntilEvent = (eventDate: string) => {
    const now = new Date();
    const event = new Date(eventDate);
    const diff = event.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
  };



  const Sidebar = () => (
    <div
      className={`
        lg:fixed lg:w-80 w-full h-full bg1
        text-white shadow-xl transition-transform duration-300 transform
        ${
          isSidebarOpen || isHovering
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
        fixed top-0 left-0 z-40
      `}
      onMouseEnter={() => !isTouchDevice && setIsHovering(true)}
      onMouseLeave={() => !isTouchDevice && setIsHovering(false)}
    >
      <div className="flex flex-col h-full p-6 overflow-y-auto sidebar-nav">
        <button
          title="Cerrar Sidebar"
          className="primary-button mt-12 self-end flex items-center"
          onClick={() => {
            setSidebarOpen(false);
            setIsHovering(false);
          }}
        >
          <X className="w-6 h-6 mr-2" />
          Cerrar
        </button>

        <div className="flex flex-col items-center space-y-4 mt-12">
          {selectedEmoji && (
            <div className="text-6xl animate-bounce">{selectedEmoji}</div>
          )}
          <h2 className="text-2xl font-bold text-center text-[#4737bb]">
            {getGreeting()}, {displayName}!
          </h2>
        </div>

        <div className="mt-4 p-4 bg2 backdrop-blur-sm rounded-xl border border-white/20">
          <p className="text-sm text-white/90 italic">{motivationalMessage}</p>
        </div>

        {/* Emoji Selector */}
        <button
          onClick={() => setEmojiMenuOpen(!emojiMenuOpen)}
          className="primary-button mt-8"
        >
          {emojiMenuOpen ? "Cerrar Emojis" : "Cambiar mi estado de ánimo"}
        </button>

        {emojiMenuOpen && (
          <div className="grid grid-cols-4 gap-4 mt-4">
            {[
              { emoji: "😊", label: "Feliz" },
              { emoji: "😍", label: "Enamorado/a" },
              { emoji: "🤓", label: "Estudiando" },
              { emoji: "🌟", label: "Motivado/a" },
              { emoji: "😪", label: "Cansado/a" },
              { emoji: "😌", label: "Relajado/a" },
              { emoji: "🥳", label: "Celebrando" },
              { emoji: "🤔", label: "Pensativo/a" },
              { emoji: "⚡", label: "Enérgico/a" },
              { emoji: "🎨", label: "Creativo/a" },
              { emoji: "🧠", label: "Concentrado/a" },
              { emoji: "😐", label: "Aburrido/a" },
              { emoji: "💡", label: "Inspirado/a" },
              { emoji: "🙏", label: "Agradecido/a" },
              { emoji: "🧘", label: "Meditando" },
              { emoji: "👨‍💻", label: "Trabajando duro" },
            ].map(({ emoji, label }) => (
              <div
                key={emoji}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredEmoji(emoji)}
                onMouseLeave={() => setHoveredEmoji(null)}
              >
                <button
                  onClick={() => handleEmojiSelect(emoji)}
                  className={`p-3 rounded-full transition-all duration-200 ${
                    selectedEmoji === emoji
                      ? "bg-indigo-100 text-indigo-700 shadow-lg scale-110"
                      : "hover:bg-indigo-50 hover:shadow-md"
                  }`}
                >
                  <span className="text-2xl">{emoji}</span>
                </button>
                {hoveredEmoji === emoji && (
                  <span className="absolute -bottom-5 px-2 py-1 text-xs font-semibold text-[#4737bb] bg-white border border-[#4737bb] rounded-lg shadow-md z-10">
                    {label}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        <nav className="mt-8 flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {[
              { to: "/ofertas-de-trabajo", text: "Ofertas de Trabajo" },
              { to: "/personaliza-perfil", text: "Personaliza tu perfil" },
              { to: "/presentaciones-destacadas", text: "Presentaciones" },
              {
                to: "/recursos-comunidad-femcoders-club",
                text: "Recursos Exclusivos",
              },
              { to: "/mentoria", text: "¿Necesitas mentoría?" },
              { to: "/enviar-documentacion", text: "Enviar documentación" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 group transition-all duration-200"
                  onClick={() => {
                    setSidebarOpen(false);
                    setIsHovering(false);
                  }}
                >
                  <h2 className="text-lg text-[#4737bb] font-semibold">
                    {item.text}
                  </h2>
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200 nav-chevron" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );

  const Overlay = () =>
    (isSidebarOpen || isHovering) && (
      <div
        className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        onClick={() => {
          setSidebarOpen(false);
          setIsHovering(false);
        }}
        onMouseEnter={() => !isTouchDevice && setIsHovering(true)}
        onMouseLeave={() => !isTouchDevice && setIsHovering(false)}
      />
    );

  const MenuTrigger = () => (
    <div
      className="lg:hidden fixed top-40 left-4 z-20 p-2 rounded-lg shadow-lg cursor-pointer"
      style={{ backgroundColor: "#4737bb" }}
      onClick={() => isTouchDevice && setSidebarOpen(true)}
      onMouseEnter={() => !isTouchDevice && setIsHovering(true)}
      onMouseLeave={() => !isTouchDevice && setIsHovering(false)}
    >
      <Menu className="w-6 h-6 text-600" style={{ color: "#ea4f33" }} />
    </div>
  );

  return (
    <>
    <Helmet>
      <title>Bienvenida - FemCoders Club</title>
      <meta name="description" content="Tu espacio para crecer, aprender y conectar con otras mujeres en tecnología. Explora recursos, eventos y oportunidades de mentoría en FemCoders Club." />
    </Helmet>
    <div className="flex min-h-screen bg1">
      <Overlay />
      <Sidebar />

      <div className="lg:ml-80 flex-1 p-4 lg:p-8 w-full">
        <MenuTrigger />

        <div className="max-w-6xl mx-auto">
          <header className="mt-36 mb-8 lg:mb-12">
            <h2>
              ¡Bienvenida a FemCoders Club!{" "}
              {selectedEmoji && ` ${selectedEmoji}`}
            </h2>
            <p className="text-base lg:text-lg mt-4 text-custom-blue">
              Tu espacio para crecer, aprender y conectar con otras mujeres en
              tecnología. ¡Explora los recursos, eventos y oportunidades de
              mentoría que hemos preparado para ti!
            </p>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {/* SECCIÓN DE EVENTOS MEJORADA */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 lg:p-8 border border-gray-100 hover:border-[#4737bb]">
              <div className="flex items-center gap-4 mb-8">
                <Calendar className="w-8 h-8 text-indigo-500" />
                <h2>Próximos Eventos</h2>
              </div>

              <div className="space-y-6 lg:space-y-8">
                {loadingUpcomingEvents ? (
                  <div className="space-y-6">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-24 bg-gray-200 rounded-xl animate-pulse shadow-inner"
                      />
                    ))}
                  </div>
                ) : upcomingEvents?.length ? (
                  upcomingEvents.map((event, index) => (
                    <div
                      key={event.id || index}
                      className="group relative border-l-4 border-indigo-500 pl-6 py-4 bg-gradient-to-r from-white to-gray-50 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-white rounded-r-xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors pr-4">
                          {event.name}
                        </h5>
                        {event.logo_url && (
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 shadow-sm">
                            {event.logo_url && (
  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
    <OptimizedImage
      src={event.logo_url}
      alt={`Logo ${event.name}`}
      className="w-full h-full object-cover"
    />
  </div>
)}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-indigo-400" />
                          <p className="text-sm text-indigo-600 font-medium">
                            {new Date(event.start_local).toLocaleString("es-ES", {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                            })}
                          </p>
                        </div>
                        {/* Mini countdown */}
                        {(() => {
                          const days = getDaysUntilEvent(event.start_local);
                          
                          if (days > 0) {
                            return (
                              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {days === 1 ? 'Mañana' : `${days}d`}
                              </span>
                            );
                          } else if (days === 0) {
                            return (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium flex items-center gap-1 animate-pulse">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                ¡Hoy!
                              </span>
                            );
                          }
                          return null;
                        })()}
                      </div>

                      {event.location && (
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <p className="text-sm text-gray-600 line-clamp-1">{event.location}</p>
                        </div>
                      )}
                      
                      <p className="text-sm text-custom-blue line-clamp-3 mb-4">
                        {event.description}
                      </p>

                      {event.event_url && (
                        <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <a
                            href={event.event_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-all duration-200"
                          >
                            Ver detalles
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="no-events-container mb-6">
                      <video
                        src="/assets/videos/SinEvento.mp4"
                        className="no-event-video w-32 h-32 rounded-lg mx-auto opacity-80"
                        autoPlay
                        muted
                        loop
                        aria-label="Sin eventos programados por ahora"
                      />
                    </div>
                    <p className="text-gray-500 font-medium">No hay eventos programados</p>
                    <p className="text-sm text-gray-400 mt-1">Te avisaremos cuando tengamos novedades</p>
                  </div>
                )}
              </div>

              {/* Footer con enlace a todos los eventos */}
              {(upcomingEvents && upcomingEvents.length > 0) && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    to="/eventos"
                    className="flex items-center justify-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors group"
                  >
                    Ver todos los eventos
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>

            <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 lg:p-8 border border-gray-100 hover:border-indigo-300">
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-8 h-8 text-indigo-500" />
                <h2>Tus Logros ({combinedAchievements.length})</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-y-auto max-h-64 pr-2">
                {loadingAchievements ? (
                  <p className="text-base text-gray-600">Cargando logros...</p>
                ) : achievementsError ? (
                  <p className="text-base text-gray-600">
                    Error al cargar logros
                  </p>
                ) : combinedAchievements.length > 0 ? (
                  combinedAchievements.map((achievement, index) => (
                    <div
                      key={`achievement-${achievement.id}-${index}`}
                      className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-indigo-300 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <h5 className="font-semibold">{achievement.title}</h5>
                      <p className="text-base lg:text-lg mt-4 text-custom-blue">
                        {achievement.description}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-base text-gray-600">
                    No tienes logros todavía.
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {/* Welcome Card - resto del componente igual */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-white mt-8 mx-auto max-w-full lg:max-w-6xl">
            {/* ... resto del contenido igual ... */}
            <div className="max-w-xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Rocket size={36} className="text-orange-500 animate-bounce" />
                <span>¡Involúcrate en la Comunidad!</span>
              </h2>
              <p className="text-base lg:text-lg mt-4 text-custom-blue">
                ¡Descubre cómo puedes contribuir, aprender y crecer junto a
                otras mujeres programadoras en FemCoders Club!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Todas las tarjetas de comunidad iguales */}
              <div className="group relative overflow-hidden flip-card-welcome mb-6">
                <div
                  style={{
                    background:
                      "radial-gradient(circle at top left, #4737bb, #ea43ff)",
                  }}
                  className="absolute inset-0 transform transition-transform group-hover:scale-105"
                />
                <div className="flip-card-inner-welcome relative h-full w-full min-h-[400px]">
                  <div className="flip-card-front-welcome relative bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <Users
                      size={32}
                      style={{ color: "#ea4f33" }}
                      className="mb-4 transition-transform group-hover:scale-110"
                    />
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-orange-400">
                      Crea un Proyecto Junto a Otras Mujeres
                    </h3>
                    <p className="text-gray-300 group-hover:text-white">
                      Conéctate y comienza un proyecto en GitHub con otras
                      programadoras. ¡Aprende y crece juntas!
                    </p>
                  </div>

                  <div className="flip-card-back-welcome absolute inset-0 bg-[#4737bb] bg-opacity-90 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-white transform rotate-y-180">
                    <p className="mb-4 text-lg font-semibold text-center">
                      ¿Tienes un proyecto en mente o simplemente te gustaría
                      colaborar en un proyecto junto a otras programadoras?
                      ¡Esta es tu oportunidad para conectar y crecer juntas!
                    </p>
                    <a
                      href="mailto:femcodersclub@gmail.com"
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all"
                    >
                      ¡Contáctanos!
                    </a>
                  </div>
                </div>
              </div>

              {/* Resto de tarjetas de la comunidad - copio las restantes del archivo original */}
              <div className="group relative overflow-hidden flip-card-welcome mb-6">
                <div
                  style={{
                    background: "linear-gradient(to right, #4737bb, #ea43ff)",
                  }}
                  className="absolute inset-0 transform transition-transform group-hover:scale-105"
                />
                <div className="flip-card-inner-welcome relative h-full w-full min-h-[400px]">
                  <div className="flip-card-front-welcome relative bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <Book
                      size={32}
                      style={{ color: "#ea4f33" }}
                      className="mb-4 transition-transform group-hover:scale-110"
                    />
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-orange-400">
                      Escribe un Post y Comparte Tu Conocimiento
                    </h3>
                    <p className="text-gray-300 group-hover:text-white">
                      Publica tus experiencias o crea una guía para inspirar y
                      ayudar a otras programadoras.
                    </p>
                  </div>

                  <div className="flip-card-back-welcome absolute inset-0 bg-[#4737bb] bg-opacity-90 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-white transform rotate-y-180">
                    <p className="mb-4 text-lg font-semibold text-center">
                      ¿Tienes algo que compartir con la comunidad? ¡Escribe un
                      post y comparte tu conocimiento!
                    </p>
                    <a
                      href="mailto:femcodersclub@gmail.com"
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all"
                    >
                      ¡Contáctanos!
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden flip-card-welcome mb-6">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #4737bb 0%, #7a52c7 50%, #ea43ff 100%)",
                  }}
                  className="absolute inset-0 transform transition-transform group-hover:scale-105"
                />

                <div className="flip-card-inner-welcome relative h-full w-full min-h-[400px]">
                  <div className="flip-card-front-welcome relative bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <Megaphone
                      size={32}
                      style={{ color: "#ea4f33" }}
                      className="mb-4 transition-transform group-hover:scale-110"
                    />
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-orange-400">
                      Sé Promotora de la Comunidad
                    </h3>
                    <p className="text-gray-300 group-hover:text-white">
                      ¿Te gustaría ser promotora de FemCoders Club? ¡Ayúdanos a
                      difundir nuestra misión y atraer a más mujeres a la
                      comunidad!
                    </p>
                  </div>

                  <div className="flip-card-back-welcome absolute inset-0 bg-[#4737bb] bg-opacity-90 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-white transform rotate-y-180">
                    <p className="mb-4 text-lg font-semibold text-center">
                      ¿Quieres saber cómo puedes ser promotora? ¡Contáctanos y
                      empieza a hacer la diferencia hoy mismo!
                    </p>
                    <a
                      href="mailto:femcodersclub@gmail.com"
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all"
                    >
                      Enviar correo
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden flip-card-welcome mb-6">
                <div
                  style={{
                    background: "linear-gradient(to right, #4737bb, #ea43ff)",
                  }}
                  className="absolute inset-0 transform transition-transform group-hover:scale-105"
                />

                <div className="flip-card-inner-welcome relative h-full w-full min-h-[400px]">
                  <div className="flip-card-front-welcome relative bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <Lightbulb
                      size={32}
                      style={{ color: "#ea4f33" }}
                      className="mb-4 transition-transform group-hover:scale-110"
                    />
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-orange-400">
                      Propón Ideas para Mejorar la Comunidad
                    </h3>
                    <p className="text-gray-300 group-hover:text-white">
                      Comparte tus ideas para mejorar la comunidad. ¡Cada
                      sugerencia cuenta!
                    </p>
                  </div>

                  <div className="flip-card-back-welcome absolute inset-0 bg-[#4737bb] bg-opacity-90 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-white transform rotate-y-180">
                    <p className="mb-4 text-lg font-semibold text-center">
                      ¡Tus ideas son importantes! Comparte tus propuestas.
                    </p>
                    <a
                      href="mailto:femcodersclub@gmail.com"
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all"
                    >
                      ¡Queremos escucharte!
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden flip-card-welcome mb-6">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(71, 55, 187, 0.9) 0%, rgba(234, 67, 255, 0.9) 100%)",
                  }}
                  className="absolute inset-0 transform transition-transform group-hover:scale-105"
                />

                <div className="flip-card-inner-welcome relative h-full w-full min-h-[400px]">
                  <div className="flip-card-front-welcome relative bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <Heart
                      size={32}
                      style={{ color: "#ea4f33" }}
                      className="mb-4 transition-transform group-hover:scale-110"
                    />
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-orange-400">
                      Participa como Mentora
                    </h3>
                    <p className="text-gray-300 group-hover:text-white">
                      Comparte tu experiencia y conviértete en mentora para
                      inspirar y guiar a otras mujeres en programación y
                      tecnología. ¡Únete a nuestro programa de mentoría y haz la
                      diferencia!
                    </p>
                  </div>

                  <div className="flip-card-back-welcome absolute inset-0 bg-[#4737bb] bg-opacity-90 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-white transform rotate-y-180">
                    <p className="mb-4 text-lg font-semibold text-center">
                      ¿Te interesa ser mentora? ¡Únete a nuestro programa de
                      mentoría y comparte tu conocimiento con otras mujeres!
                    </p>
                    <a
                      href="mailto:femcodersclub@gmail.com"
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all"
                    >
                      ¡Contáctanos para más detalles!
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden flip-card-welcome mb-6">
                <div
                  style={{
                    background: "linear-gradient(to right, #4737bb, #ea43ff)",
                  }}
                  className="absolute inset-0 transform transition-transform group-hover:scale-105"
                />

                <div className="flip-card-inner-welcome relative h-full w-full min-h-[400px]">
                  <div className="flip-card-front-welcome relative bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <BookOpen
                      size={32}
                      style={{ color: "#ea4f33" }}
                      className="mb-4 transition-transform group-hover:scale-110"
                    />
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-orange-400">
                      Forma Parte de un Grupo de Estudio
                    </h3>
                    <p className="text-gray-300 group-hover:text-white">
                      Únete o crea un grupo de estudio sobre JavaScript, CSS,
                      backend, y más. ¡Aprende y crece junto a otras
                      programadoras!
                    </p>
                  </div>

                  <div className="flip-card-back-welcome absolute inset-0 bg-[#4737bb] bg-opacity-90 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-white transform rotate-y-180">
                    <p className="mb-4 text-lg font-semibold text-center">
                      ¿Te estás iniciando en el mundo de la tecnología? ¿Te has
                      quedado atascada, necesitas ayuda con algo específico o
                      simplemente quieres mejorar tus habilidades? ¡Estamos aquí
                      para apoyarte! Únete o crea un grupo de estudio y aprende
                      junto a otras programadoras.
                    </p>
                    <a
                      href="mailto:femcodersclub@gmail.com"
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all"
                    >
                      ¡Escríbenos para más información!
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden flip-card-welcome mb-6">
                <div
                  style={{
                    background:
                      "linear-gradient(to bottom right, #4737bb 0%, #ea43ff 100%)",
                  }}
                  className="absolute inset-0 transform transition-transform group-hover:scale-105"
                />

                <div className="flip-card-inner-welcome relative h-full w-full min-h-[400px]">
                  <div className="flip-card-front-welcome relative bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <MicVocal
                      size={32}
                      style={{ color: "#ea4f33" }}
                      className="mb-4 transition-transform group-hover:scale-110"
                    />
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-orange-400">
                      Conviértete en Ponente
                    </h3>
                    <p className="text-gray-300 group-hover:text-white">
                      Comparte tu conocimiento y experiencia en áreas STEM.
                      ¡Conviértete en ponente en nuestros eventos y comparte tu
                      pasión con la comunidad de mujeres en tecnología!
                    </p>
                  </div>

                  <div className="flip-card-back-welcome absolute inset-0 bg-[#4737bb] bg-opacity-90 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-white transform rotate-y-180">
                    <p className="mb-4 text-lg font-semibold text-center">
                      ¿Lista para inspirar a la comunidad? ¡Te esperamos como
                      ponente!
                    </p>
                    <a
                      href="mailto:femcodersclub@gmail.com"
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all"
                    >
                      ¿Hablamos sobre tus ideas?
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden flip-card-welcome mb-6">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #4737bb 0%, #7a52c7 50%, #ea43ff 100%)",
                  }}
                  className="absolute inset-0 transform transition-transform group-hover:scale-105"
                />

                <div className="flip-card-inner-welcome relative h-full w-full min-h-[400px]">
                  <div className="flip-card-front-welcome relative bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <FolderOpen
                      size={32}
                      style={{ color: "#ea4f33" }}
                      className="mb-4 transition-transform group-hover:scale-110"
                    />
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-orange-400">
                      Comparte Recursos
                    </h3>
                    <p className="text-gray-300 group-hover:text-white">
                      Comparte tus recursos, tutoriales, guías y más con la
                      comunidad. ¡Ayuda a otras mujeres a aprender y crecer en
                      tecnología!
                    </p>
                  </div>

                  <div className="flip-card-back-welcome absolute inset-0 bg-[#4737bb] bg-opacity-90 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-white transform rotate-y-180">
                    <p className="mb-4 text-lg font-semibold text-center">
                      ¿Tienes recursos para compartir? ¡Envíalos a la comunidad!
                    </p>
                    <a
                      href="mailto:femcodersclub@gmail.com"
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all"
                    >
                      Enviar recursos
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden flip-card-welcome mb-6">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #4737bb 0%, #ea43ff 50%)",
                  }}
                  className="absolute inset-0 transform transition-transform group-hover:scale-105"
                />

                <div className="flip-card-inner-welcome relative h-full w-full min-h-[400px]">
                  <div className="flip-card-front-welcome relative bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 transition-all duration-300 group-hover:border-orange-500/50 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <Building
                      size={32}
                      style={{ color: "#ea4f33" }}
                      className="mb-4 transition-transform group-hover:scale-110"
                    />
                    <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-orange-400">
                      ¿Compartes Nuestros Valores?
                    </h3>
                    <p className="text-gray-300 group-hover:text-white">
                      Sé parte del cambio colaborando con FemCoders Club como
                      anfitriona. Apoya eventos y talleres, y lidera el impulso
                      hacia una tecnología más inclusiva y diversa.
                    </p>
                  </div>

                  <div className="flip-card-back-welcome absolute inset-0 bg-[#4737bb] bg-opacity-90 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-white transform rotate-y-180">
                    <p className="mb-4 text-lg font-semibold text-center">
                      ¡Haz que tu empresa sea protagonista del cambio! Únete
                      como anfitriona y fomenta la diversidad en tecnología.
                    </p>
                    <a
                      href="mailto:femcodersclub@gmail.com"
                      className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all"
                    >
                      Contáctanos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WelcomePage;
