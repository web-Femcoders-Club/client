import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./WelcomePage.css";

interface LocationState {
  userName: string;
}

const WelcomePage: React.FC = () => {
  const location = useLocation();
  const state = (location.state as LocationState) || {};
  const { userName } = state;

  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(
    localStorage.getItem("userEmoji") || null
  );
  const [emojiMenuOpen, setEmojiMenuOpen] = useState<boolean>(false);
  const [emojiStats, setEmojiStats] = useState<{ [key: string]: number }>({});

  const displayName = userName || localStorage.getItem("userName") || "Usuario";

  useEffect(() => {
    // Recuperar las estadísticas de emojis del localStorage
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

  const getMotivationalMessage = () => {
    const messages = [
      "¡Hoy es un gran día para aprender algo nuevo! 🚀",
      "¡Confía en tu potencial, estás haciendo un gran trabajo! 💪",
      "Cada línea de código que escribes cuenta. ¡Sigue adelante! 🔥",
      "Recuerda que cada pequeño paso te acerca a tu meta. 🌟",
    ];
    const index = new Date().getDay() % messages.length;
    return messages[index];
  };

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

  const calculateWeeklyStats = () => {
    const today = new Date();
    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 7);

    const emojiCount: { [key: string]: number } = {};

    for (const date in emojiStats) {
      const currentDate = new Date(date);
      if (currentDate >= weekAgo && currentDate <= today) {
        const emoji = emojiStats[date];
        if (emojiCount[emoji]) {
          emojiCount[emoji]++;
        } else {
          emojiCount[emoji] = 1;
        }
      }
    }

    return emojiCount;
  };

  const weeklyStats = calculateWeeklyStats();

  const emojiOptions = [
    { emoji: "😊", label: "Feliz" },
    { emoji: "😍", label: "Enamorado/a" },
    { emoji: "🤓", label: "Estudiando" },
    { emoji: "💪", label: "Fuerte" },
    { emoji: "🌟", label: "Motivado/a" },
    { emoji: "😪", label: "Cansado/a" },
    { emoji: "😌", label: "Relajado/a" },
    { emoji: "🥳", label: "Celebrando" },
    { emoji: "😔", label: "Triste" },
    { emoji: "😤", label: "Frustrado/a" },
    { emoji: "🤗", label: "Agradecido/a" },
    { emoji: "🤯", label: "Sorprendido/a" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-72 bg1 shadow-lg p-6 rounded-r-3xl">
        <div className="flex flex-col items-center mt-24">
          {selectedEmoji && (
            <div className="selected-emoji mb-4 text-5xl animate-emoji">
              {selectedEmoji}
            </div>
          )}

          <h2 className="text-xl font-semibold text-center text-white mb-4">
            {getGreeting()}, {displayName}!
          </h2>
          <blockquote className="text-sm italic text-white text-center mb-8 bg-opacity-20 bg-black px-4 py-2 rounded-lg shadow-md">
            {getMotivationalMessage()}
          </blockquote>

          <button
            onClick={() => setEmojiMenuOpen(!emojiMenuOpen)}
            className="w-full text-center py-2 px-4 bg-white text-[#4737bb] font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300 mb-4"
          >
            {emojiMenuOpen ? "Cerrar Emojis" : "Cambiar mi estado de ánimo"}
          </button>

          {emojiMenuOpen && (
            <div className="emoji-selection flex flex-wrap justify-center space-x-4 mb-12">
              {emojiOptions.map(({ emoji, label }) => (
                <button
                  key={emoji}
                  onClick={() => handleEmojiSelect(emoji)}
                  title={label}
                  className={`emoji-option text-3xl p-2 rounded-lg ${
                    selectedEmoji === emoji
                      ? "bg-white text-[#4737bb] shadow-md"
                      : "bg-transparent text-white"
                  } hover:bg-white hover:text-[#4737bb] transition duration-300`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}

          <div className="weekly-stats text-white mt-8">
            <h3 className="text-lg font-semibold mb-4">
              Resumen semanal de tu estado de ánimo:
            </h3>
            {Object.keys(weeklyStats).length > 0 ? (
              <ul>
                {Object.entries(weeklyStats).map(([emoji, count]) => (
                  <li key={emoji} className="text-sm mb-2">
                    {emoji}: {count} {count > 1 ? "veces" : "vez"}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm">No hay datos de la última semana.</p>
            )}
          </div>

          <ul className="menu mt-4 w-full flex flex-col items-center gap-4">
            <li>
              <Link
                to="/personaliza-perfil"
                className="w-full text-center py-2 px-4 bg-white text-[#4737bb] font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
              >
                Personaliza tu perfil
              </Link>
            </li>
            <li>
              <Link
                to="/eventos"
                className="w-full text-center py-2 px-4 bg-white text-[#4737bb] font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
              >
                Eventos
              </Link>
            </li>
            <li>
              <Link
                to="/recursos-exclusivos"
                className="w-full text-center py-2 px-4 bg-white text-[#4737bb] font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
              >
                Recursos Exclusivos
              </Link>
            </li>
            <li>
              <Link
                to="/mentoria"
                className="w-full text-center py-2 px-4 bg-white text-[#4737bb] font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
              >
                Necesitas mentoría?
              </Link>
            </li>
            <li>
              <Link
                to="/enviar-documentacion"
                className="w-full text-center py-2 px-4 bg-white text-[#4737bb] font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
              >
                Enviar documentación
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-8 rounded-l-3xl shadow-lg">
        <h1 className="text-4xl font-bold text-[#4737bb] mb-6">
          Bienvenida a tu comunidad!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Explora los recursos, eventos y oportunidades de mentoría que hemos
          preparado para ti.
        </p>
        <div className="card bg-gray-50 shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold text-[#6d2c95] mb-4">
            Próximo evento
          </h2>
          <p className="text-gray-800">
            Fecha:{" "}
            <span className="font-semibold text-[#4737bb]">
              24 de octubre, 2024
            </span>
          </p>
          <p className="text-gray-800">
            Descripción: Celebración del primer aniversario de FemCoders Club.
          </p>
          <button className="mt-4 py-2 px-6 bg-[#ea4f33] text-white font-semibold rounded-lg shadow hover:bg-[#bb3f28] transition duration-300">
            Inscribirme al evento
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;



// import { useState, useEffect } from "react";
// import { Calendar, Book, Users, Award, MessageCircle, Code, Rocket, Heart } from 'lucide-react';

// const WelcomePage = () => {
//   const [selectedEmoji, setSelectedEmoji] = useState<string | null>(
//     localStorage.getItem("userEmoji") || null
//   );
//   const [emojiMenuOpen, setEmojiMenuOpen] = useState<boolean>(false);
//   const [emojiStats, setEmojiStats] = useState<{ [key: string]: number }>({});
//   const [activeSection, setActiveSection] = useState("dashboard");

//   const displayName = localStorage.getItem("userName") || "Usuario";

//   useEffect(() => {
//     const storedStats = localStorage.getItem("emojiStats");
//     if (storedStats) {
//       setEmojiStats(JSON.parse(storedStats));
//     }
//   }, []);

//   const getGreeting = () => {
//     const hours = new Date().getHours();
//     if (hours < 12) return "Buenos días";
//     if (hours < 18) return "Buenas tardes";
//     return "Buenas noches";
//   };

//   const getMotivationalMessage = () => {
//     const messages = [
//       "¡Hoy es un gran día para romper barreras en el mundo tech! 🚀",
//       "El código no tiene género, ¡tu talento tampoco! 💪",
//       "Juntas creamos, aprendemos y crecemos en tecnología 👩‍💻",
//       "Tu perspectiva única hace la diferencia en el desarrollo 🌟",
//       "La diversidad en tech comienza contigo 🌈",
//       "Programadora hoy, líder tech mañana 💫",
//       "Construyendo el futuro, una línea de código a la vez ⌨️"
//     ];
//     const index = new Date().getDay() % messages.length;
//     return messages[index];
//   };

//   const upcomingEvents = [
//     {
//       title: "Workshop: Introducción a React",
//       date: "24 de octubre, 2024",
//       time: "18:00 - 20:00",
//       type: "online",
//       description: "Aprende los fundamentos de React con mentoras experimentadas."
//     },
//     {
//       title: "FemCoders Tech Talks",
//       date: "26 de octubre, 2024",
//       time: "17:00 - 19:00",
//       type: "presencial",
//       description: "Charlas inspiradoras de mujeres líderes en tecnología."
//     }
//   ];

//   const achievements = [
//     {
//       icon: "🏆",
//       title: "Primera conexión",
//       description: "¡Bienvenida a la comunidad!"
//     },
//     {
//       icon: "📝",
//       title: "Perfil completado",
//       description: "Completa tu perfil para desbloquear"
//     }
//   ];

//   const NavLink = ({ icon, children, section }) => (
//     <button 
//       onClick={() => setActiveSection(section)}
//       className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white w-full transition-all
//         ${activeSection === section ? 'bg-[#ea4f33] shadow-lg' : 'hover:bg-white/10'}`}
//     >
//       {icon}
//       <span className="font-medium">{children}</span>
//     </button>
//   );

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="w-80 bg-gradient-to-br from-[#4737bb] via-[#6d2c95] to-[#4737bb] shadow-xl p-6 rounded-r-3xl relative overflow-hidden">
//         {/* Decorative elements */}
//         <div className="absolute top-0 left-0 w-full h-full opacity-10">
//           <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
//           <div className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-white"></div>
//         </div>
        
//         <div className="relative flex flex-col items-center mt-8">
//           {selectedEmoji && (
//             <div className="selected-emoji mb-4 text-6xl animate-bounce">
//               {selectedEmoji}
//             </div>
//           )}

//           <h2 className="text-2xl font-bold text-center text-white mb-4">
//             {getGreeting()}, {displayName}!
//           </h2>
          
//           <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-8 w-full shadow-lg">
//             <p className="text-sm italic text-white text-center font-medium">
//               {getMotivationalMessage()}
//             </p>
//           </div>

//           <nav className="w-full space-y-2">
//             <NavLink icon={<Users size={22} />} section="dashboard">
//               Mi Comunidad
//             </NavLink>
//             <NavLink icon={<Code size={22} />} section="learning">
//               Ruta de Aprendizaje
//             </NavLink>
//             <NavLink icon={<Calendar size={22} />} section="events">
//               Eventos
//             </NavLink>
//             <NavLink icon={<MessageCircle size={22} />} section="mentorship">
//               Mentoría
//             </NavLink>
//             <NavLink icon={<Award size={22} />} section="achievements">
//               Logros
//             </NavLink>
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8 bg-gradient-to-br from-gray-50 to-purple-50">
//         <div className="max-w-4xl mx-auto">
//           <header className="mb-8">
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-[#4737bb] to-[#6d2c95] text-transparent bg-clip-text mb-2">
//               ¡Bienvenida a FemCoders Club!
//             </h1>
//             <p className="text-gray-600 text-lg">
//               Tu espacio para crecer, aprender y conectar con otras mujeres en tecnología
//             </p>
//           </header>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             {/* Próximos eventos */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//               <h2 className="text-xl font-bold text-[#6d2c95] mb-6 flex items-center gap-2">
//                 <Calendar size={24} className="text-[#ea4f33]" />
//                 Próximos Eventos
//               </h2>
//               <div className="space-y-4">
//                 {upcomingEvents.map((event, index) => (
//                   <div key={index} className="group border-l-4 border-[#ea4f33] pl-4 py-2 hover:bg-purple-50 rounded-r-lg transition-colors">
//                     <h3 className="font-semibold text-gray-800 group-hover:text-[#4737bb]">
//                       {event.title}
//                     </h3>
//                     <p className="text-sm text-gray-600">{event.date} - {event.time}</p>
//                     <span className={`inline-block px-3 py-1 text-xs rounded-full 
//                       ${event.type === 'online' 
//                         ? 'bg-green-100 text-green-800' 
//                         : 'bg-purple-100 text-purple-800'} 
//                       mt-1`}>
//                       {event.type}
//                     </span>
//                     <p className="text-sm text-gray-700 mt-2">{event.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Logros */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//               <h2 className="text-xl font-bold text-[#6d2c95] mb-6 flex items-center gap-2">
//                 <Award size={24} className="text-[#ea4f33]" />
//                 Tus Logros
//               </h2>
//               <div className="grid grid-cols-2 gap-4">
//                 {achievements.map((achievement, index) => (
//                   <div key={index} 
//                     className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-gray-50 hover:from-purple-100 hover:to-gray-100 transition-colors cursor-pointer">
//                     <div className="text-4xl mb-2">{achievement.icon}</div>
//                     <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
//                     <p className="text-sm text-gray-600">{achievement.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Recursos destacados */}
//           {/* <div className="bg-gradient-to-r from-[#4737bb] to-[#6d2c95] rounded-2xl shadow-xl p-8 text-white">
//             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//               <Rocket size={28} className="text-[#ea4f33]" />
//               Recursos Destacados
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all cursor-pointer group">
//                 <Book size={24} className="mb-2 text-[#ea4f33]" />
//                 <h3 className="font-bold text-lg mb-1">Biblioteca de Recursos</h3>
//                 <p className="text-sm opacity-90 group-hover:opacity-100">
//                   Accede a tutoriales, guías y material de estudio
//                 </p>
//               </div>
//               <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all cursor-pointer group">
//                 <Users size={24} className="mb-2 text-[#ea4f33]" />
//                 <h3 className="font-bold text-lg mb-1">Comunidad</h3>
//                 <p className="text-sm opacity-90 group-hover:opacity-100">
//                   Conecta con otras programadoras
//                 </p>
//               </div>
//               <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all cursor-pointer group">
//                 <Heart size={24} className="mb-2 text-[#ea4f33]" />
//                 <h3 className="font-bold text-lg mb-1">Mentoría</h3>
//                 <p className="text-sm opacity-90 group-hover:opacity-100">
//                   Sesiones 1:1 con expertas del sector
//                 </p>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;



