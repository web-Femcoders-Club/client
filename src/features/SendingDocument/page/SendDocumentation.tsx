import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import DocumentationView from "./DocumentationView";
import { esAdmin } from "../../../utils/sesion";
import { useFocusMessage } from "../../../hooks/useFocusMessage";

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
      setMessage("Añade un título para identificar la documentación.");
      setMessageType("error");
      return;
    }

    if (!description.trim()) {
      setMessage("Añade una breve descripción de los archivos que quieres enviar.");
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
          content="Comparte recursos, materiales de aprendizaje o documentación de tus proyectos con el equipo de FemCoders Club. Cuéntanos tu propuesta y adjunta tus archivos."
        />
      </Helmet>

      <DocumentationView
        userEmail={userEmail}
        title={title}
        description={description}
        files={files}
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
        onTitleChange={setTitle}
        onDescriptionChange={setDescription}
        onFilesChange={handleFileChange}
        onRemoveFile={handleRemoveFile}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default SendDocumentation;
