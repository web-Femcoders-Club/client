import React, { useState, useRef } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Comment } from"../../../types/types"; // Asegúrate de que esta ruta sea correcta

interface CommentsSectionProps {
  approvedComments: Comment[];
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ approvedComments }) => {
  const [comment, setComment] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Lógica para enviar el comentario aquí

    setSubmitted(true);
    setComment("");
    setName("");
    setLoading(false);
  };

  return (
    <div className="comments-section">
      <h3>¡Queremos saber de ti! 💬</h3>
      <form ref={form} onSubmit={handleSubmit} className="comment-form">
        <label htmlFor="name" className="visually-hidden">Tu nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Tu nombre"
          required
          className="comment-input"
        />
        <label htmlFor="comment" className="visually-hidden">Escribe tu comentario aquí...</label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Escribe tu comentario aquí..."
          required
          className="comment-textarea"
        />
        <button type="submit" disabled={loading} className="comment-button">
          {loading ? "Enviando..." : "Enviar comentario"}
        </button>
      </form>
      {submitted && (
        <p className="success-message">
          Tu comentario ha sido enviado y está pendiente de moderación. ¡Gracias por participar!
        </p>
      )}
      <div className="approved-comments">
        <h3>Lo que dicen nuestras lectoras 🌸</h3>
        <ul className="comments-list">
          {approvedComments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <strong>{comment.userEmail}</strong>
              <p>{comment.content}</p>
              <small>
                {format(new Date(comment.createdAt), "d 'de' MMMM 'de' yyyy", { locale: es })}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentsSection;

