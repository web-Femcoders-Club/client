import React, { useEffect, useState } from "react";
import { sendMentorshipEmail } from "../../../api/emailApi";
import { EmailDto } from "../../../types/types";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import MentorshipRequestView from "../components/MentorshipRequestView";
import { esAdmin } from "../../../utils/sesion";
import axios from "axios";
import { useFocusMessage } from "../../../hooks/useFocusMessage";

const MentorshipForm: React.FC = () => {
  const [mentorshipType, setMentorshipType] = useState<string>("");
  const [githubLink, setGithubLink] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [description, setDescription] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const messageRef = useFocusMessage(message);
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
          content="Solicita orientación en programación o inglés técnico. Cuéntanos qué te gustaría aprender y cómo podemos acompañarte desde FemCoders Club."
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

      <MentorshipRequestView
        userEmail={userEmail}
        mentorshipType={mentorshipType}
        githubLink={githubLink}
        description={description}
        message={message}
        messageType={messageType}
        messageRef={messageRef}
        isLoading={isLoading}
        admin={esAdmin()}
        onBack={() => {
          if (esAdmin()) {
            navigate("/admin");
          } else {
            navigate("/welcome", {
              state: {
                userName: sessionStorage.getItem("userName") || "Usuario",
                userId: Number(sessionStorage.getItem("userId")) || undefined,
              },
            });
          }
        }}
        onTypeChange={setMentorshipType}
        onGithubChange={setGithubLink}
        onDescriptionChange={setDescription}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default MentorshipForm;
