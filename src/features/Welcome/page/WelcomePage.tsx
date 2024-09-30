import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


interface LocationState {
  userName: string;
  avatar: string;
}

const WelcomePage: React.FC = () => {
  const location = useLocation();
  const state = (location.state as LocationState) || {};
  const { userName, avatar } = state;

  const userAvatar = avatar || localStorage.getItem("userAvatar");
  const displayName = userName || localStorage.getItem("userName") || "Usuario";

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Buenos días";
    if (hours < 18) return "Buenas tardes";
    return "Buenas noches";
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Menu */}
      <div className="w-64 bg-base-200 shadow-lg p-6">
        <div className="flex flex-col items-center">
          <div className="avatar mb-4">
            {userAvatar ? (
              <img
                src={userAvatar}
                alt="User Avatar"
                className="rounded-full w-24"
              />
            ) : (
              <div className="rounded-full w-24 h-24 bg-gray-300 flex items-center justify-center">
                <span className="text-xl text-gray-700">No Avatar</span>
              </div>
            )}
          </div>
          <h2 className="text-xl font-bold">{getGreeting()} {displayName}!</h2>
          <ul className="menu mt-4 w-full">
            <li>
              <Link to="/personaliza-perfil" className="btn btn-outline mb-2">
                Personaliza tu perfil
              </Link>
            </li>
            <li>
              <Link to="/eventos" className="btn btn-outline mb-2">
                Eventos
              </Link>
            </li>
            <li>
              <Link to="/recursos-exclusivos" className="btn btn-outline mb-2">
                Recursos Exclusivos
              </Link>
            </li>
            <li>
              <Link to="/mentoria" className="btn btn-outline mb-2">
                Necesitas mentoría?
              </Link>
            </li>
            <li>
              <Link to="/enviar-documentacion" className="btn btn-outline mb-2">
                Enviar documentación
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-base-100 p-8">
        <h1 className="text-3xl font-bold mb-6">Bienvenida a tu comunidad!</h1>
        <p className="text-lg mb-4">
          Explora los recursos, eventos y oportunidades de mentoría que hemos preparado para ti.
        </p>
        <div className="card bg-base-200 shadow-xl p-6">
          <h2 className="text-xl font-bold mb-4">Próximo evento</h2>
          <p>Fecha: 24 de octubre, 2024</p>
          <p>Descripción: Celebración del primer aniversario de FemCoders Club.</p>
          <button className="btn btn-primary mt-4">Inscribirme al evento</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

