import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./WelcomePage.css"; // Vamos a necesitar un archivo CSS para animaciones

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

    // Actualizar estadísticas
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

  // Opciones de Emojis con significados
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
      {/* Sidebar Menu */}
      <div className="w-72 bg1 shadow-lg p-6 rounded-r-3xl">
        <div className="flex flex-col items-center mt-24">
          {/* Mostrar Emoji Seleccionado */}
          {selectedEmoji && (
            <div className="selected-emoji mb-4 text-5xl animate-emoji">
              {selectedEmoji}
            </div>
          )}

          {/* Mensaje de Bienvenida */}
          <h2 className="text-xl font-semibold text-center text-white mb-4">
            {getGreeting()}, {displayName}!
          </h2>
          <blockquote className="text-sm italic text-white text-center mb-8 bg-opacity-20 bg-black px-4 py-2 rounded-lg shadow-md">
            {getMotivationalMessage()}
          </blockquote>

          {/* Botón para Mostrar/Ocultar Emojis */}
          <button
            onClick={() => setEmojiMenuOpen(!emojiMenuOpen)}
            className="w-full text-center py-2 px-4 bg-white text-[#4737bb] font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300 mb-4"
          >
            {emojiMenuOpen ? "Cerrar Emojis" : "Cambiar mi estado de ánimo"}
          </button>

          {/* Selección de Emoji (Oculta por Defecto) */}
          {emojiMenuOpen && (
            <div className="emoji-selection flex flex-wrap justify-center space-x-4 mb-12">
              {emojiOptions.map(({ emoji, label }) => (
                <button
                  key={emoji}
                  onClick={() => handleEmojiSelect(emoji)}
                  title={label} // Mostrar el significado al pasar el cursor sobre el emoji
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

          {/* Mostrar Estadísticas Semanales */}
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

          {/* Enlaces del Menú */}
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
















