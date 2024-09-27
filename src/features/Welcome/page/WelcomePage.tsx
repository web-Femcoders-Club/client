import React from "react";
import { useLocation } from "react-router-dom";

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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div>
        <h1>
          Hola 👋 {displayName}, <br />
          ¡Bienvenida a tu comunidad!
        </h1>
        {userAvatar && (
          <img
            src={userAvatar}
            alt="Avatar"
            style={{ width: "150px", borderRadius: "50%" }}
          />
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
