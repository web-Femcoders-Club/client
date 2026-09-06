import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Send, Trash, FilePlus } from "lucide-react";
import MentorshipLogoAnimation from "../../Mentorship/components/MentorshipLogoAnimation";
import CharCounter from "../../../components/ui/CharCounter";
import { useFocusMessage } from "../../../hooks/useFocusMessage";
import { MESSAGE_MAX_LENGTH } from "../../../utils/constants";
import "../../Mentorship/page/Mentorship.css";

const SendDocumentation: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
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
    const savedUserName = sessionStorage.getItem("userName");
    const savedEmail = sessionStorage.getItem("userEmail");

    if (savedToken) {
      setToken(savedToken);
    } else {
      navigate("/login");
    }

    setUserName(savedUserName);
    setUserEmail(savedEmail);
  }, [navigate]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const allowedExtensions = ["pdf", "docx", "png", "jpg", "jpeg"];
      const maxFileSize = 5 * 1024 * 1024; // 5MB

      const validFiles = Array.from(e.target.files).filter((file) => {
        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
          alert(`El archivo ${file.name} no tiene una extensión válida.`);
          return false;
        }
        if (file.size > maxFileSize) {
          alert(`El archivo ${file.name} supera el tamaño máximo de 5MB.`);
          return false;
        }
        return true;
      });

      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token || !userEmail || !userName) {
      setMessage("Debes iniciar sesión para enviar la documentación.");
      setMessageType("error");
      return;
    }

    if (!title.trim()) {
      setMessage("Por favor, especifica un título para tu recurso.");
      setMessageType("error");
      return;
    }

    if (!description.trim()) {
      setMessage("Por favor, describe brevemente tu necesidad o problema.");
      setMessageType("error");
      return;
    }

    if (files.length === 0) {
      setMessage("Por favor, adjunta al menos un archivo.");
      setMessageType("error");
      return;
    }

    // `userName` no se manda: el servidor no lo usa —el correo que llega solo
    // lleva correo, título y descripción— y el DTO no lo declara, así que el
    // ValidationPipe rechazaba la petición entera (#28). Si algún día hace
    // falta el nombre en ese correo, sale del token, que es la fuente fiable:
    // este endpoint ya exige estar autenticada, y sessionStorage lo puede
    // editar cualquiera.
    const formData = new FormData();
    formData.append("mentorshipTitle", title);
    formData.append("description", description);
    formData.append("userEmail", userEmail as string);

    
    files.forEach((file) => {
      console.log(`Subiendo archivo: ${file.name}, tamaño: ${file.size} bytes`);
      formData.append("files", file);
    });

    setIsLoading(true);
    setMessage(null);
    setMessageType(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/emails/documentation`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        setMessage("Documentación enviada correctamente.");
        setMessageType("success");
        setFiles([]);
        setTitle("");
        setDescription("");
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Ocurrió un error inesperado.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error durante el envío:", error);
      setMessage("Error al enviar la documentación.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Enviar Documentación - FemCoders Club</title>
        <meta
          name="description"
          content="¿Tienes recursos o ideas para compartir? En FemCoders Club puedes enviar tu documentación y contribuir a nuestra comunidad."
        />
      </Helmet>

      <section className="mentorship-page-container bg1">
        <div className="mentorship-form-container">
          <div className="mentorship-content">
            <div className="form-column">
              <header>
                <h3>¡Envía Documentación!</h3>
                <p className="styled-paragraph mb-8">
                ¿Tienes ideas innovadoras o recursos valiosos sobre tecnología? Comparte tu conocimiento con nuestra comunidad de programadoras apasionadas. Completa el formulario, adjunta tus archivos y contribuye a inspirar y empoderar a otras mujeres en tecnología. ¡Juntas somos más fuertes! 🚀
                </p>
              </header>

              <form onSubmit={handleSubmit} className="form-control">
                {userEmail && (
                  <div className="form-group">
                    <label className="form-label" style={{ marginTop: "-2.5rem" }}>Correo Electrónico:</label>
                    <input
                      type="email"
                      value={userEmail}
                      readOnly
                      className="form-input"
                      title="Correo Electrónico"
                    />
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="title" className="form-label" style={{ marginTop: "-2.5rem" }}>
                    Título del recurso:
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ej. Introducción a IA"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="form-label" style={{ marginTop: "-2.5rem" }}>
                    Describe tu recurso:
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Breve descripción "
                    required
                    maxLength={MESSAGE_MAX_LENGTH}
                    aria-describedby="documentation-counter"
                    className="form-textarea"
                  ></textarea>
                  <CharCounter
                    id="documentation-counter"
                    current={description.length}
                    max={MESSAGE_MAX_LENGTH}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="files" className="form-label">
                    Adjuntar archivos:
                  </label>
                  <input
                  style={{ marginTop: "2.5rem" }}
                    type="file"
                    id="files"
                    multiple
                    onChange={handleFileChange}
                    className="form-input"
                    
                  />
                  <button
                    type="button"
                    className="secondary-button mt-4"
                    onClick={() => document.getElementById("files")?.click()}
                  >
                    <FilePlus size={16} />
                    Agregar más archivos
                  </button>

                  <div className="file-list">
                    {files.map((file, index) => (
                      <div key={index} className="file-item">
                        <span>{file.name}</span>
                        <button
                          type="button"
                          className="remove-file-btn" style={{ color: "#ea4f33", marginLeft: "1rem" }}  
                          onClick={() => handleRemoveFile(index)}
                          title="Eliminar archivo"
                        >
                          <Trash size={26} />
                        </button>
                      </div>
                    ))}
                  </div>
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
                      Enviar Documentación
                    </>
                  )}
                </button>

                {message && (
                  <p
                    className={`message ${
                      messageType === "error" ? "text-error" : "text-success"
                    }`}
                    role={messageType === "error" ? "alert" : "status"}
                    tabIndex={-1}
                    ref={messageRef}
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
        </div>
      </section>
    </>
  );
};

export default SendDocumentation;
