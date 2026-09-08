import { useQuery } from "@tanstack/react-query";
import {
    Award,
    Briefcase,
    Calendar,
    ChevronRight,
    Clock,
    ExternalLink,
    FileUp,
    FolderOpen,
    Heart,
    MapPin,
    Presentation,
    UserCog,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { getUserAchievements } from "../../../api/achievementsApi";
import { getUpcomingEvents } from "../../../api/eventsApi";
import OptimizedImage from "../../../components/OptimizedImage";
import CollapsibleSidebar from "../../../components/ui/CollapsibleSidebar";
import InvolucrateEnLaComunidad from "../components/InvolucrateEnLaComunidad";
import "./WelcomePage.css";

/*
 * Cada enlace lleva icono porque el menú contraído deja solo la franja de
 * iconos: el texto se oculta a la vista pero sigue en el árbol de
 * accesibilidad, así que un lector de pantalla lo anuncia entero. El `title` es
 * para quien navega con ratón y solo ve el dibujo.
 */
const ENLACES_MENU = [
  { to: "/ofertas-de-trabajo", texto: "Ofertas de Trabajo", Icono: Briefcase },
  { to: "/personaliza-perfil", texto: "Personaliza tu perfil", Icono: UserCog },
  { to: "/presentaciones-destacadas", texto: "Presentaciones", Icono: Presentation },
  {
    to: "/recursos-comunidad-femcoders-club",
    texto: "Recursos Exclusivos",
    Icono: FolderOpen,
  },
  { to: "/mentoria", texto: "¿Necesitas mentoría?", Icono: Heart },
  { to: "/enviar-documentacion", texto: "Enviar documentación", Icono: FileUp },
];

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
    gcTime: 0,
  });

  const combinedAchievements = [
    defaultAchievement,
    ...(Array.isArray(userAchievements) ? userAchievements : []),
  ].filter(
    (achievement, index, self) =>
      index === self.findIndex((a) => a.title === achievement.title)
  );

  useEffect(() => {
    const storedStats = localStorage.getItem("emojiStats");
    if (storedStats) {
      setEmojiStats(JSON.parse(storedStats));
    }
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



  /*
   * El saludo, el emoji y la frase motivacional vivían dentro del menú lateral.
   * No son navegación, y eran justamente lo que obligaba al menú a medir 20rem y
   * a estar siempre abierto. Fuera de él, el menú puede estrecharse a una franja
   * de iconos y el contenido recupera el ancho.
   */
  const bandaPersonal = (
    <div className="welcome-banda">
      <div className="welcome-banda__fila">
        {selectedEmoji && (
          <span className="welcome-banda__emoji">{selectedEmoji}</span>
        )}
        <div className="welcome-banda__texto">
          <h2 className="welcome-banda__saludo">
            {getGreeting()}, {displayName}!
          </h2>
          {/*
            La frase iba en una caja con `bg2 backdrop-blur-sm border
            border-white/20` y el texto con `text-white/90`: de esas cuatro, tres
            son sintaxis de Tailwind v3 que el CDN v2 no conoce, así que ni el
            borde ni el color existían —el blanco lo heredaba de un `text-white`
            del contenedor—. Ahora va sobre el fondo claro de la tarjeta, donde
            el contraste se puede medir: #2a2170 sobre blanco da 12.9:1.
          */}
          <p className="welcome-banda__cita">{motivationalMessage}</p>
        </div>
        <button
          onClick={() => setEmojiMenuOpen(!emojiMenuOpen)}
          className="primary-button welcome-banda__boton"
          aria-expanded={emojiMenuOpen}
        >
          {emojiMenuOpen ? "Cerrar Emojis" : "Cambiar mi estado de ánimo"}
        </button>
      </div>

      {emojiMenuOpen && (
        <div className="welcome-banda__emojis">
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
                className="welcome-banda__emoji-envoltorio"
                onMouseEnter={() => setHoveredEmoji(emoji)}
                onMouseLeave={() => setHoveredEmoji(null)}
              >
                <button
                  onClick={() => handleEmojiSelect(emoji)}
                  className={`welcome-banda__emoji-op${
                    selectedEmoji === emoji
                      ? " welcome-banda__emoji-op--activo"
                      : ""
                  }`}
                  aria-pressed={selectedEmoji === emoji}
                  aria-label={label}
                >
                  {emoji}
                </button>
                {hoveredEmoji === emoji && (
                  <span className="welcome-banda__globo" aria-hidden="true">
                    {label}
                  </span>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );

  /*
   * Contenido del menú, no un componente. Definido como `const Sidebar = () =>`
   * dentro del cuerpo de WelcomePage, React lo veía como un tipo de componente
   * nuevo en cada render y desmontaba y volvía a montar el menú entero: se
   * perdía el foco y las transiciones se cortaban a medias. Como elemento JSX el
   * árbol es estable.
   *
   * Cada enlace se etiquetaba además con un `<h2>`: seis encabezados falsos que
   * ensuciaban el esquema de la página para quien navega saltando de encabezado
   * en encabezado. Es un enlace, y se marca como tal.
   */
  const contenidoMenu = (
    <nav aria-label="Tu espacio">
      <ul className="welcome-menu__lista">
        {ENLACES_MENU.map(({ to, texto, Icono }) => (
          <li key={to}>
            <Link to={to} className="welcome-menu__enlace" title={texto}>
              <Icono className="welcome-menu__icono" aria-hidden="true" />
              <span className="fem-sidebar__label">{texto}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
    <Helmet>
      <title>Bienvenida - FemCoders Club</title>
      <meta name="description" content="Tu espacio para crecer, aprender y conectar con otras mujeres en tecnología. Explora recursos, eventos y oportunidades de mentoría en FemCoders Club." />
    </Helmet>
    {/*
      La capa oscura y el botón de abrir los pone CollapsibleSidebar. El de aquí
      solo respondía al ratón por encima, o al clic únicamente en pantallas
      táctiles: con teclado no había forma de abrir el menú, y en un portátil no
      táctil con la ventana estrecha el clic tampoco hacía nada.
    */}
    <div className="welcome-layout flex min-h-screen bg1">
      <CollapsibleSidebar
        storageKey="femcoders:menu-bienvenida"
        label="menú de bienvenida"
        title="Tu espacio"
      >
        {contenidoMenu}
      </CollapsibleSidebar>

      {/*
        `min-w-0` en lugar de `w-full`: ahora el menú ocupa sitio en el flujo en
        vez de superponerse con un margen fijo, y un hijo flexible con el ancho
        mínimo por defecto no deja encoger las rejillas anchas de abajo.
      */}
      <div className="flex-1 min-w-0 p-4 lg:p-8">
        <div className="max-w-6xl mx-auto welcome-columna">
          {bandaPersonal}

          <header className="mb-8 lg:mb-12">
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
                    <p className="text-gray-500 font-medium">Estamos trabajando en los próximos encuentros</p>
                    <p className="text-sm text-gray-400 mt-1">Estamos preparando nuevas oportunidades para aprender y compartir en comunidad. Aquí encontrarás las novedades.</p>
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
          
          <InvolucrateEnLaComunidad />
        </div>
      </div>
    </div>
    </>
  );
};

export default WelcomePage;
