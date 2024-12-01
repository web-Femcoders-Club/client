import React, { useEffect, useState } from "react";
import { sendMentorshipEmail } from "../../../api/emailApi";
import { EmailDto } from "../../../types/types";
import { Helmet } from "react-helmet";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MentorshipLogoAnimation from "../components/MentorshipLogoAnimation";
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
          content="¿Buscas una mentoría personalizada en programación o inglés técnico? En FemCoders Club estamos aquí para ayudarte a superar cualquier desafío y avanzar en tu carrera tecnológica."
        />
        <meta name="author" content="FemCoders Club" />
        <meta
          name="keywords"
          content="mentoría, programación, HTML, CSS, JavaScript, Node.js, Python, tecnología, inglés técnico, mujeres en tecnología"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Solicita una Mentoría - FemCoders Club"
        />
        <meta
          property="og:description"
          content="Únete a nuestras mentorías personalizadas en programación y tecnología. Completa este formulario y da el siguiente paso en tu carrera tech con FemCoders Club."
        />
        <meta property="og:image" content="/FemCodersClubLogo.png" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Solicita una Mentoría - FemCoders Club"
        />
        <meta
          name="twitter:description"
          content="Completa este formulario y solicita una mentoría personalizada en programación y tecnología. En FemCoders Club, no estás sola."
        />
        <meta name="twitter:image" content="/FemCodersClubLogo.png" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>

      <section className="mentorship-page-container bg1">
        <section className="mentorship-form-container">
          <div className="mentorship-content ">
            <div className="form-column">
              <header>
                <h3>¡Solicita una Mentoría!</h3>
                <p className="styled-paragraph">
                  ¿Estás dando tus primeros pasos en el mundo de la programación
                  y necesitas orientación? ¿Te has atascado con algún concepto o
                  buscas a alguien que te ayude a entender mejor los lenguajes
                  de programación? ¿O quizás quieres mejorar tu inglés técnico
                  para entrevistas laborales? <br /> <br />
                  En <span> FemCoders Club</span> no estás sola. Completa este
                  formulario, solicita una mentoría personalizada y juntas
                  superaremos cualquier desafío que se interponga en tu camino.
                  ¡Estamos aquí para ayudarte a crecer y alcanzar tus metas! 🚀
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
                  <div className="form-group" style={{ marginTop: "2.5rem" }}>
                    <label
                      className="form-label "
                      style={{ marginTop: "-2.5rem" }}
                    >
                      Correo Electrónico:
                    </label>
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
                  <label
                    htmlFor="mentorshipType"
                    className="form-label"
                    style={{ marginTop: "-2.5rem" }}
                  >
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
                  <label
                    htmlFor="githubLink"
                    className="form-label"
                    style={{ marginTop: "-2.5rem" }}
                  >
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
                  <label
                    htmlFor="description"
                    className="form-label"
                    style={{ marginTop: "-2.5rem" }}
                  >
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

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isLoading}
                >
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
            </div>
            <div className="logo-column">
              <MentorshipLogoAnimation logoSrc="/FemCodersClubLogo.png" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default MentorshipForm;
