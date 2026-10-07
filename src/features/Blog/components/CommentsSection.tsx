import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { getApprovedComments, addComment } from "../../../api/commentApi";
import { Comment } from "../../../types/types";
import CharCounter from "../../../components/ui/CharCounter";
import { useFocusMessage } from "../../../hooks/useFocusMessage";
import { MESSAGE_MAX_LENGTH } from "../../../utils/constants";
import "./CommentsSection.css";

interface CommentsSectionProps {
  postId: number;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [alias, setAlias] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const errorRef = useFocusMessage(error);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const allComments = await getApprovedComments();
        setComments(
          allComments
            .filter((comment) => comment.postId === postId)
            .map((comment) => ({
              ...comment,
              createdAt: new Date(comment.createdAt), 
            }))
        );
      } catch (error) {
        console.error("Error al obtener los comentarios:", error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const newComment: Omit<Comment, "id" | "approved" | "createdAt"> = {
        postId,
        content: commentText,
        alias: alias || "Anónimo",
      };

      await addComment(newComment);

      setSubmitted(true);
      setCommentText("");
      setAlias("");

      setComments((prevComments) => [
        ...prevComments,
        {
          ...newComment,
          id: Date.now(),
          approved: false,
          createdAt: new Date(), 
        },
      ]);
    } catch {
      // Antes el fallo solo iba a console.error y la usuaria no veía nada.
      setError(
        "No se pudo enviar tu comentario. Inténtalo de nuevo en unos minutos."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="post-comentarios" aria-labelledby="comentarios-titulo">
      <h2 id="comentarios-titulo">
        Comentarios
        {comments.length > 0 && (
          <span className="post-comentarios__numero">{comments.length}</span>
        )}
      </h2>

      {comments.length > 0 ? (
        <ol className="post-comentarios__lista">
          {comments.map((comment) => (
            <li key={comment.id} className="post-comentario">
              <span className="post-comentario__inicial" aria-hidden="true">
                {(comment.alias || "Anónimo").charAt(0).toUpperCase()}
              </span>
              <div>
                <p className="post-comentario__cabecera">
                  <strong>{comment.alias || "Anónimo"}</strong>{" "}
                  <time dateTime={comment.createdAt.toISOString()}>
                    {format(comment.createdAt, "d de MMMM de yyyy", {
                      locale: es,
                    })}
                  </time>
                  {!comment.approved && (
                    <span className="post-comentario__pendiente"> · pendiente de revisión</span>
                  )}
                </p>
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p className="post-comentarios__vacio">
          Todavía no hay comentarios. ¿Te animas a dejar el primero?
        </p>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="post-comentarios__formulario">
        <h3>Deja tu comentario</h3>
        <div className="fc-campo">
          <label htmlFor="alias">
            Tu nombre o alias <span className="post-comentarios__opcional">(opcional)</span>
          </label>
          <input
            type="text"
            id="alias"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            autoComplete="nickname"
          />
        </div>
        <div className="fc-campo">
          <label htmlFor="commentText">Tu comentario</label>
          <textarea
            id="commentText"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
            maxLength={MESSAGE_MAX_LENGTH}
            aria-describedby="comment-counter"
          />
          <CharCounter
            id="comment-counter"
            current={commentText.length}
            max={MESSAGE_MAX_LENGTH}
          />
        </div>
        <p className="post-comentarios__aviso">
          Los comentarios se publican después de revisarlos.
        </p>
        {error && (
          <p className="fc-aviso fc-aviso--error" role="alert" tabIndex={-1} ref={errorRef}>
            {error}
          </p>
        )}
        {submitted && (
          <p className="fc-aviso fc-aviso--exito" role="status">
            Tu comentario se ha enviado y se publicará cuando lo revisemos.
            ¡Gracias por participar!
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className="fc-boton fc-boton--noche"
        >
          {loading ? "Enviando…" : "Enviar comentario"}
        </button>
      </form>
    </section>
  );
};

export default CommentsSection;


