import React from "react";
import LoginForm from "../components/LoginForm";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  return (
    <div className="login-page bg1">
      <div className="login-container">
        <div className="login-background-text ">
          <h3 className="typing main-title">¡Únete a nuestra comunidad!</h3>
          <div className="words">
            
            <h2 className="typing">Empoderamiento</h2>
            <h2 className="typing">Inclusión</h2>
            <h2 className="typing">Diversidad</h2>
            <h2 className="typing">Liderazgo</h2>
            <h2 className="typing">Crecimiento</h2>
            <h2 className="typing">Desarrollo profesional</h2>

          </div>
        </div>
        <div className="login-form-container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;




