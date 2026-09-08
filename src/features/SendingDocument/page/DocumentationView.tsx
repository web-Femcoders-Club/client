import type { ChangeEvent, FormEvent, RefObject } from "react";
import { ArrowLeft, FileText, Mail, Paperclip, Send, Trash2 } from "lucide-react";
import CharCounter from "../../../components/ui/CharCounter";
import { MESSAGE_MAX_LENGTH } from "../../../utils/constants";
import "./documentation-view.css";

interface DocumentationViewProps {
  userEmail: string | null;
  title: string;
  description: string;
  files: File[];
  message: string | null;
  messageType: "error" | "success" | null;
  messageRef: RefObject<HTMLParagraphElement>;
  isLoading: boolean;
  admin: boolean;
  onBack: () => void;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onFilesChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: (index: number) => void;
  onSubmit: (event: FormEvent) => Promise<void>;
}

export default function DocumentationView(props: DocumentationViewProps) {
  return (
    <section className="documentacion-envio" aria-labelledby="documentacion-titulo">
      <div className="documentacion-envio__contenedor">
        <button type="button" className="documentacion-envio__volver" onClick={props.onBack}>
          <ArrowLeft size={20} aria-hidden="true" />
          {props.admin ? "Volver al panel" : "Volver a mi perfil"}
        </button>
        <header className="documentacion-envio__cabecera">
          <p className="documentacion-envio__antetitulo">Ideas que compartimos</p>
          <h1 id="documentacion-titulo">Comparte un recurso o un proyecto</h1>
          <p className="documentacion-envio__entrada">
            ¿Tienes una guía, un material de aprendizaje o un proyecto que te
            gustaría compartir? Nos encantará conocerlo. Cuéntanos de qué trata
            y envía tus documentos o imágenes al equipo de FemCoders Club.
          </p>
        </header>
        <div className="documentacion-envio__columnas">
          <aside className="documentacion-envio__orientacion" aria-labelledby="documentacion-orientacion">
            <h2 id="documentacion-orientacion">Un poco de contexto nos ayuda</h2>
            <p>Una breve presentación nos ayudará a conocer tu propuesta y cómo podría ser útil para la comunidad.</p>
            <ul className="documentacion-envio__temas">
              <li><FileText size={22} aria-hidden="true" /><div><h3>Presenta tu aportación</h3><p>Puede ser una guía, una presentación o documentación de un proyecto. Cuéntanos qué te gustaría compartir.</p></div></li>
              <li><Paperclip size={22} aria-hidden="true" /><div><h3>Añade tus archivos</h3><p>Puedes adjuntar documentos PDF o DOCX e imágenes PNG o JPG, de hasta 5 MB por archivo.</p></div></li>
              <li><Mail size={22} aria-hidden="true" /><div><h3>Envíalo al equipo</h3><p>Recibiremos la descripción y los archivos por correo, junto con la dirección de tu cuenta.</p></div></li>
            </ul>
            <div className="documentacion-envio__nota"><h3>Antes de enviar</h3><p>Comprueba que has añadido los archivos que quieres compartir. Puedes quitar cualquiera de la lista antes de enviarlo.</p></div>
          </aside>
          <form className="documentacion-envio__formulario" aria-labelledby="documentacion-formulario" onSubmit={(event) => {
            if (props.isLoading) { event.preventDefault(); return; }
            void props.onSubmit(event);
          }}>
            <div className="documentacion-envio__form-cabecera"><h2 id="documentacion-formulario">Prepara tu envío</h2><p>Añade un título, una descripción y al menos un archivo.</p></div>
            {props.userEmail && <div className="documentacion-envio__grupo">
              <label htmlFor="documentacion-correo">Correo electrónico</label>
              <input id="documentacion-correo" type="email" readOnly value={props.userEmail} aria-describedby="documentacion-correo-ayuda" />
              <p id="documentacion-correo-ayuda" className="documentacion-envio__ayuda">Tu envío se identificará con el correo de tu cuenta.</p>
            </div>}
            <div className="documentacion-envio__grupo">
              <label htmlFor="documentacion-asunto">Título del recurso o proyecto</label>
              <input id="documentacion-asunto" type="text" required value={props.title} onChange={(event) => props.onTitleChange(event.target.value)} placeholder="Por ejemplo, guía de CSS o presentación de mi proyecto" />
            </div>
            <div className="documentacion-envio__grupo">
              <label htmlFor="documentacion-descripcion">¿Qué nos envías?</label>
              <p id="documentacion-descripcion-ayuda" className="documentacion-envio__ayuda">Cuéntanos de qué trata, a quién podría ayudar y quién lo ha creado. Si el proyecto está en GitHub o en otra web, puedes incluir el enlace aquí.</p>
              <textarea id="documentacion-descripcion" required rows={5} value={props.description} onChange={(event) => props.onDescriptionChange(event.target.value)} maxLength={MESSAGE_MAX_LENGTH} aria-describedby="documentacion-descripcion-ayuda documentation-counter" placeholder="En estos archivos encontraréis…" />
              <CharCounter id="documentation-counter" current={props.description.length} max={MESSAGE_MAX_LENGTH} />
            </div>
            <div className="documentacion-envio__grupo">
              <label htmlFor="documentacion-archivos">Archivos adjuntos</label>
              <div className="documentacion-envio__adjuntos">
                <input id="documentacion-archivos" type="file" multiple accept=".pdf,.docx,.png,.jpg,.jpeg" onChange={(event) => { props.onFilesChange(event); event.target.value = ""; }} aria-describedby="documentacion-formatos" />
                <p id="documentacion-formatos" className="documentacion-envio__ayuda">PDF, DOCX, PNG o JPG · Máximo 5 MB por archivo. Puedes seleccionar varios o añadir más después.</p>
              </div>
              {props.files.length > 0 && <ul className="documentacion-envio__archivos">
                {props.files.map((file, index) => <li key={`${file.name}-${index}`}>
                  <FileText size={20} aria-hidden="true" />
                  <div><p className="documentacion-envio__nombre">{file.name}</p><p className="documentacion-envio__ayuda">{file.size < 1024 * 1024 ? `${Math.ceil(file.size / 1024)} KB` : `${(file.size / (1024 * 1024)).toLocaleString("es-ES", { maximumFractionDigits: 1 })} MB`}</p></div>
                  <button type="button" onClick={() => props.onRemoveFile(index)} aria-label={`Quitar ${file.name}`}><Trash2 size={19} aria-hidden="true" /></button>
                </li>)}
              </ul>}
            </div>
            <div className="documentacion-envio__pie">
              <button type="submit" className="documentacion-envio__enviar" disabled={props.isLoading}><Send size={18} aria-hidden="true" />{props.isLoading ? "Enviando documentación…" : "Enviar documentación"}</button>
              {props.isLoading && <p className="documentacion-envio__ayuda" role="status">Estamos enviando tus archivos.</p>}
              {props.message && <p className={`documentacion-envio__mensaje documentacion-envio__mensaje--${props.messageType}`} role={props.messageType === "error" ? "alert" : "status"} tabIndex={-1} ref={props.messageRef}>{props.message}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
