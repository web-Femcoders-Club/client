import React, { FormEvent, useContext, useRef, useState } from "react";
import { Send } from "lucide-react";
import StatusModal from "../../../components/ui/StatusModal";
import CharCounter from "../../../components/ui/CharCounter";
import { MESSAGE_MAX_LENGTH } from "../../../utils/constants";
import { ModalContext } from "../../../context/ModalContext";
import "./ContactForm.css";

/**
 * El destinatario NO viaja en el formulario, y no es un descuido: lo decide el
 * servidor con `EMAIL_RECEIVER`. Si viniera del navegador, cualquiera podría
 * cambiarlo y usar la API para enviar correos a donde quisiera.
 *
 * Se mandaba, y desde que el ValidationPipe rechaza los campos que el DTO no
 * declara (#28) el formulario devolvía «property recipientEmail should not
 * exist» sin llegar a enviar nada.
 */
const ContactForm: React.FC = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState<boolean>(false);
  const [messageLength, setMessageLength] = useState<number>(0);
  const { openModal } = useContext(ModalContext);
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
    };

    setIsSubmitting(true);
    setErrorMessage(null);
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
      setMessageLength(0);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Error desconocido."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="fc-tarjeta formulario-contacto">
        <div className="formulario-contacto__cabecera">
          <img
            src="/logo-femcoders-animado.webp"
            alt="FemCoders Club"
            className="formulario-contacto__logo"
            width={80}
            height={80}
          />
          <div>
            <h2 className="formulario-contacto__titulo">Envíanos un mensaje</h2>
            <p className="formulario-contacto__nota">
              Todos los campos son obligatorios.
            </p>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} action="#" method="POST">
          <div className="formulario-contacto__campos">
            <div className="formulario-contacto__campo">
              <label htmlFor="userName">Nombre</label>
              <input
                required
                type="text"
                id="userName"
                name="userName"
                autoComplete="given-name"
              />
            </div>

            <div className="formulario-contacto__campo">
              <label htmlFor="lastName">Apellidos</label>
              <input
                required
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
              />
            </div>

            <div className="formulario-contacto__campo formulario-contacto__campo--ancho-movil">
              <label htmlFor="userEmail">Correo electrónico</label>
              <input
                required
                type="email"
                id="userEmail"
                name="userEmail"
                autoComplete="email"
              />
            </div>

            <div className="formulario-contacto__campo formulario-contacto__campo--ancho-movil">
              <label htmlFor="asunto">Asunto</label>
              <input required type="text" id="asunto" name="asunto" />
            </div>

            <div className="formulario-contacto__campo formulario-contacto__campo--ancho">
              <label htmlFor="message">Mensaje</label>
              <textarea
                required
                id="message"
                name="message"
                maxLength={MESSAGE_MAX_LENGTH}
                aria-describedby="contact-message-counter"
                onChange={(e) => setMessageLength(e.target.value.length)}
              />
              <CharCounter
                id="contact-message-counter"
                current={messageLength}
                max={MESSAGE_MAX_LENGTH}
              />
            </div>
          </div>

          <div className="form-consent">
            <input
              type="checkbox"
              id="contactPrivacy"
              name="contactPrivacy"
              checked={acceptedPrivacy}
              onChange={(e) => setAcceptedPrivacy(e.target.checked)}
              required
              aria-required="true"
            />
            <label htmlFor="contactPrivacy">
              He leído y acepto la{" "}
              <button
                type="button"
                className="link-button"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal("privacyPolicy");
                }}
              >
                Política de Privacidad
              </button>
              . <span aria-hidden="true" className="formulario-contacto__obligatorio">*</span>
            </label>
          </div>

          <button
            type="submit"
            className="fc-boton fc-boton--noche formulario-contacto__enviar"
            disabled={isSubmitting || !acceptedPrivacy}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Enviando…" : "Enviar mensaje"}
            <Send aria-hidden="true" />
          </button>
        </form>
      </div>

      <StatusModal
        variant="success"
        isVisible={showMessage}
        onClose={() => setShowMessage(false)}
      />
      <StatusModal
        variant="error"
        isVisible={!!errorMessage}
        message={errorMessage ?? undefined}
        onClose={() => setErrorMessage(null)}
      />
    </>
  );
};

export default ContactForm;
