import React, { useEffect, useState } from "react";
import { sendMentorshipEmail } from "../../../api/emailApi";
import { EmailDto } from "../../../types/types";
import { Helmet } from "react-helmet";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Mentorship.css";

const MentorshipForm: React.FC = () => {
  const [mentorshipType, setMentorshipType] = useState<string>("");
  const [githubLink, setGithubLink] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [description, setDescription] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"error" | "success" | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = sessionStorage.getItem("authToken");
    const savedEmail = sessionStorage.getItem("userEmail");

    if (savedToken) {
      setToken(savedToken);
    } else {
      navigate("/login");
    }

    if (savedEmail) {
      setUserEmail(savedEmail);
    }
  }, [navigate]);

  const handleSubmit = async () => {
    // Validaciones
    if (!token) {
      setMessage("Debes iniciar sesión para enviar la solicitud.");
      setMessageType("error");
      return;
    }

    if (!userEmail) {
      setMessage("No se pudo recuperar el correo electrónico del usuario.");
      setMessageType("error");
      return;
    }

    if (!mentorshipType.trim()) {
      setMessage("Por favor, especifica el tipo de mentoría que necesitas.");
      setMessageType("error");
      return;
    }

    if (!description.trim()) {
      setMessage("Por favor, describe brevemente tu necesidad o problema.");
      setMessageType("error");
      return;
    }

    setIsLoading(true);
    setMessage(null);
    setMessageType(null);

    const emailData: EmailDto = {
      mentorshipType,
      githubLink: githubLink || undefined,
      userEmail,
      description,
    };

    try {
      const response = await sendMentorshipEmail(emailData, token);
      setMessage(response.message);
      setMessageType("success");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setMessage(`Error: ${error.response?.data?.message || error.message}`);
      } else if (error instanceof Error) {
        setMessage(`Error inesperado: ${error.message}`);
      } else {
        setMessage("Ocurrió un error inesperado.");
      }
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Solicita una Mentoría - FemCoders Club</title>
        <meta
          name="description"
          content="En FemCoders Club puedes solicitar mentoría para crecer en tu carrera tech. Completa el formulario para ser emparejado con una mentora especializada."
        />
      </Helmet>

      <section className="mentorship-form-container bg1">
        <header className="mentorship-header">
          <img
            src="/assets/FemCodersClubLogo.png"
            alt="Fem Coders Club Logo"
            className="form-logo"
          />
          <h1 className="text-primary">¡Solicita una Mentoría!</h1>
          <p className="header-description">
            En FemCoders Club estamos aquí para ayudarte a crecer. Completa este
            formulario para ser emparejado con una mentora en HTML, CSS,
            JavaScript, Node.js, Java, Python u otras áreas.
          </p>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="form-control"
        >
          {userEmail && (
            <div className="form-group">
              <label className="form-label">Correo Electrónico:</label>
              <input
                type="email"
                value={userEmail}
                readOnly
                className="form-input"
                title="Correo Electrónico"
                placeholder="Correo Electrónico"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="mentorshipType" className="form-label">
              Tipo de mentoría que necesitas:
            </label>
            <input
              type="text"
              id="mentorshipType"
              value={mentorshipType}
              onChange={(e) => setMentorshipType(e.target.value)}
              placeholder="Ej. Necesito ayuda con JavaScript avanzado"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="githubLink" className="form-label">
              Enlace a GitHub (opcional):
            </label>
            <input
              type="url"
              id="githubLink"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              placeholder="https://github.com/usuario/proyecto"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Describe tu necesidad o problema:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe brevemente tu necesidad..."
              required
              className="form-textarea"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? (
              "Enviando..."
            ) : (
              <>
                <Send className="send-icon" />
                Enviar solicitud de mentoría
              </>
            )}
          </button>

          {message && (
            <p
              className={`message ${
                messageType === "error" ? "text-error" : "text-success"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </section>
    </>
  );
};

export default MentorshipForm;
