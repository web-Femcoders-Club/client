import type { RefObject } from "react";
import { ArrowLeft, BookOpen, Code2, MessageCircle, Send } from "lucide-react";
import CharCounter from "../../../components/ui/CharCounter";
import { MESSAGE_MAX_LENGTH } from "../../../utils/constants";
import "./mentorship-request.css";

interface MentorshipRequestViewProps {
  userEmail: string | null;
  mentorshipType: string;
  githubLink: string;
  description: string;
  message: string | null;
  messageType: "error" | "success" | null;
  messageRef: RefObject<HTMLParagraphElement>;
  isLoading: boolean;
  admin: boolean;
  onBack: () => void;
  onTypeChange: (value: string) => void;
  onGithubChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onSubmit: () => Promise<void>;
}

export default function MentorshipRequestView(props: MentorshipRequestViewProps) {
  return (
    <section className="mentoria-solicitud" aria-labelledby="mentoria-titulo">
      <div className="mentoria-solicitud__contenedor">
        <button type="button" className="mentoria-solicitud__volver" onClick={props.onBack}>
          <ArrowLeft size={20} aria-hidden="true" />
          {props.admin ? "Volver al panel" : "Volver a mi perfil"}
        </button>

        <header className="mentoria-solicitud__cabecera">
          <p className="mentoria-solicitud__antetitulo">Aprender en comunidad</p>
          <h1 id="mentoria-titulo">Un espacio para tus dudas y tus próximos pasos</h1>
          <p className="mentoria-solicitud__entrada">
            Si buscas orientación en programación o inglés técnico, cuéntanos
            qué te gustaría trabajar. Nos ayudará a conocer tu situación y
            valorar cómo podemos acompañarte desde FemCoders Club.
          </p>
        </header>

        <div className="mentoria-solicitud__columnas">
          <aside className="mentoria-solicitud__orientacion" aria-labelledby="mentoria-orientacion">
            <h2 id="mentoria-orientacion">¿Por dónde empezar?</h2>
            <p>Puedes centrar tu solicitud en lo que más te ayude ahora.</p>
            <ul className="mentoria-solicitud__temas">
              <li>
                <Code2 size={22} aria-hidden="true" />
                <div><h3>Programación y proyectos</h3><p>Un concepto que quieras entender o una duda al desarrollar tu proyecto.</p></div>
              </li>
              <li>
                <MessageCircle size={22} aria-hidden="true" />
                <div><h3>Inglés técnico</h3><p>Lo que te gustaría practicar para comunicarte o preparar una entrevista.</p></div>
              </li>
              <li>
                <BookOpen size={22} aria-hidden="true" />
                <div><h3>Tu aprendizaje</h3><p>En qué punto estás y qué te gustaría aprender a continuación.</p></div>
              </li>
            </ul>
            <div className="mentoria-solicitud__nota">
              <h3>No necesitas tenerlo todo definido</h3>
              <p>Una explicación con tus propias palabras es un buen comienzo. Si tienes un proyecto en GitHub, puedes compartirlo para darnos más contexto.</p>
            </div>
          </aside>

          <form className="mentoria-solicitud__formulario" aria-labelledby="mentoria-formulario" onSubmit={(event) => {
            event.preventDefault();
            if (!props.isLoading) void props.onSubmit();
          }}>
            <div className="mentoria-solicitud__form-cabecera">
              <h2 id="mentoria-formulario">Solicita una mentoría</h2>
              <p>Indica el tema y cuéntanos qué te gustaría trabajar. El enlace a GitHub es opcional.</p>
            </div>

            {props.userEmail && (
              <div className="mentoria-solicitud__grupo">
                <label htmlFor="mentoria-correo">Correo electrónico</label>
                <input id="mentoria-correo" type="email" value={props.userEmail} readOnly aria-describedby="mentoria-correo-ayuda" />
                <p id="mentoria-correo-ayuda" className="mentoria-solicitud__ayuda">Tu solicitud se enviará con el correo de tu cuenta.</p>
              </div>
            )}

            <div className="mentoria-solicitud__grupo">
              <label htmlFor="mentoria-tema">¿Sobre qué necesitas orientación?</label>
              <input id="mentoria-tema" type="text" value={props.mentorshipType} onChange={(event) => props.onTypeChange(event.target.value)} placeholder="Por ejemplo, funciones asíncronas en JavaScript" required />
            </div>

            <div className="mentoria-solicitud__grupo">
              <label htmlFor="mentoria-descripcion">Cuéntanos un poco más</label>
              <p id="mentoria-descripcion-ayuda" className="mentoria-solicitud__ayuda">Puedes explicar qué estás aprendiendo, qué has intentado y qué te gustaría conseguir con la mentoría.</p>
              <textarea id="mentoria-descripcion" value={props.description} onChange={(event) => props.onDescriptionChange(event.target.value)} placeholder="Estoy trabajando en… y me gustaría entender…" rows={6} required maxLength={MESSAGE_MAX_LENGTH} aria-describedby="mentoria-descripcion-ayuda mentorship-counter" />
              <CharCounter id="mentorship-counter" current={props.description.length} max={MESSAGE_MAX_LENGTH} />
            </div>

            <div className="mentoria-solicitud__grupo">
              <label htmlFor="mentoria-github">Enlace a GitHub (opcional)</label>
              <input id="mentoria-github" type="url" value={props.githubLink} onChange={(event) => props.onGithubChange(event.target.value)} placeholder="https://github.com/usuario/proyecto" />
            </div>

            <div className="mentoria-solicitud__pie">
              <button type="submit" className="mentoria-solicitud__enviar" disabled={props.isLoading}>
                <Send size={18} aria-hidden="true" />
                {props.isLoading ? "Enviando solicitud…" : "Enviar solicitud de mentoría"}
              </button>
              {props.isLoading && <p role="status" className="mentoria-solicitud__ayuda">Estamos enviando tu solicitud.</p>}
              {props.message && (
                <p className={`mentoria-solicitud__mensaje mentoria-solicitud__mensaje--${props.messageType}`} role={props.messageType === "error" ? "alert" : "status"} tabIndex={-1} ref={props.messageRef}>
                  {props.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
