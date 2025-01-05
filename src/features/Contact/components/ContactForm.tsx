import React, { FormEvent, useRef, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

interface ContactFormProps {
  recipientEmail: string; // Interfaz para las props
}

const ContactForm: React.FC<ContactFormProps> = ({ recipientEmail }) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      setErrorMessage("El formulario no se encuentra disponible.");
      return;
    }

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("userName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("userEmail") as string,
      subject: formData.get("asunto") as string,
      message: formData.get("message") as string,
      recipientEmail, // Incluimos recipientEmail en el cuerpo del formulario
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/email-formulario/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(
          errorResponse.message || "Ocurrió un error enviando el formulario."
        );
      }

      setShowMessage(true);
      form.current.reset();
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Error desconocido."
      );
    }
  };

  const handleMouseOver = (
    e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.boxShadow = "0 0 10px rgba(71, 55, 187, 0.8)";
    e.currentTarget.style.borderColor = "#4737bb";
  };

  const handleMouseOut = (
    e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.borderColor = "#ddd";
  };

  return (
    <>
      <div
        className="form-card"
        style={{
          width: "100%",
          maxWidth: "550px",
          margin: "150px 0 auto",
          background: "#fdfdfd",
          padding: "2rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="/FemCodersClubLogo.png"
          alt="FemCoders Club Logo"
          className="form-logo"
          style={{ width: "100px", marginBottom: "1rem" }}
        />
        <form
          ref={form}
          onSubmit={handleSubmit}
          action="#"
          method="POST"
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <label
            htmlFor="userName"
            style={{
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#821ad4",
              textAlign: "left",
            }}
          >
            Nombre:
          </label>
          <input
            required
            type="text"
            aria-label="name"
            name="userName"
            placeholder=""
            className="input"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #4737bb",
              borderRadius: "5px",
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />

          <label
            htmlFor="lastName"
            style={{
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#821ad4",
              textAlign: "left",
            }}
          >
            Apellido:
          </label>
          <input
            required
            type="text"
            aria-label="lastName"
            name="lastName"
            placeholder=""
            className="input"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #4737bb",
              borderRadius: "5px",
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />

          <label
            htmlFor="userEmail"
            style={{
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#821ad4",
              textAlign: "left",
            }}
          >
            Correo:
          </label>
          <input
            required
            type="email"
            aria-label="correo"
            name="userEmail"
            placeholder=""
            className="input"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #4737bb",
              borderRadius: "5px",
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />

          <label
            htmlFor="asunto"
            style={{
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#821ad4",
              textAlign: "left",
            }}
          >
            Asunto:
          </label>
          <input
            required
            type="text"
            aria-label="asunto"
            name="asunto"
            placeholder=""
            className="input"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #4737bb",
              borderRadius: "5px",
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />

          <label
            htmlFor="message"
            style={{
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#821ad4",
              textAlign: "left",
            }}
          >
            Mensaje:
          </label>
          <textarea
            required
            name="message"
            title="Message"
            className="textarea"
            style={{
              border: "1px solid #4737bb",
              padding: "0.5rem",
              borderRadius: "5px",
              marginBottom: "1rem",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />

          {errorMessage && (
            <p
              style={{
                color: "red",
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="primaryBtn"
            style={{
              width: "200px",
              alignSelf: "center",
              marginTop: "1rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#4737bb",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#ea4f33")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4737bb")
            }
          >
            Enviar
          </button>
        </form>
      </div>

      <ConfirmationModal
        isVisible={showMessage}
        onClose={() => setShowMessage(false)}
      />
    </>
  );
};

export default ContactForm;
