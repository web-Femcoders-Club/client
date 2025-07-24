import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { getApprovedComments, addComment } from "../../../api/commentApi";
import { Comment } from "../../../types/types";

interface CommentsSectionProps {
  postId: number;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [alias, setAlias] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
    } catch (error) {
      console.error("Error al enviar el comentario:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comments-section">
      <h3>¡Queremos saber de ti! 💬</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="comment-form">
        <label htmlFor="alias" style={{ color: "#2a2170" }}>
          Tu nombre o alias:
        </label>

        <input
          type="text"
          id="alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          placeholder="Escribe tu nombre o alias"
          className="comment-item"
        />
        <label htmlFor="commentText" style={{ color: "#2a2170" }}>
          Tu comentario:
        </label>
        <textarea
          id="commentText"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Escribe tu comentario aquí..."
          required
          className="comment-item"
        />
        <button type="submit" disabled={loading} className="comment-button">
          {loading ? "Enviando..." : "Enviar comentario"}
        </button>
      </form>
      {submitted && (
        <p className="success-message">
          Tu comentario ha sido enviado y está pendiente de moderación. ¡Gracias
          por participar!
        </p>
      )}
      <div className="approved-comments">
        <h3>Lo que dicen nuestras lectoras 🌸</h3>
        <ul className="comments-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <strong>{comment.alias || "Anónimo"}:</strong>
              <p>{comment.content}</p>
              <small>
                {format(comment.createdAt, "d 'de' MMMM 'de' yyyy", {
                  locale: es,
                })}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentsSection;


