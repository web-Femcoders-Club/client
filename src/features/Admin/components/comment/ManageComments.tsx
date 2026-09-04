import React, { useEffect, useState } from "react";
import {
  approveComment,
  getApprovedComments,
  getPendingComments,
  rejectComment,
} from "../../../../api/commentApi";
import { Check, X } from "lucide-react";
import { Comment } from "../../../../types/types";
import AdminTable from "../ui/AdminTable";

/** Cuántos comentarios ya publicados se muestran como referencia. */
const ULTIMOS_APROBADOS = 4;

const ManageComments: React.FC = () => {
  const [pendingComments, setPendingComments] = useState<Comment[]>([]);
  const [ultimosAprobados, setUltimosAprobados] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Los pendientes son la tarea; los aprobados, el contexto de qué hay
        // publicado ahora mismo en la web.
        const [pendientes, aprobados] = await Promise.all([
          getPendingComments(),
          getApprovedComments().catch(() => [] as Comment[]),
        ]);
        setPendingComments(pendientes);
        setUltimosAprobados(
          [...aprobados]
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime(),
            )
            .slice(0, ULTIMOS_APROBADOS),
        );
      } catch {
        // Antes solo se hacía console.error: el fallo era invisible en pantalla.
        setError("No se pudieron cargar los comentarios.");
      }
    };

    fetchComments();
  }, []);

  const handleApprove = async (id: number) => {
    const comentario = pendingComments.find((c) => c.id === id);
    try {
      await approveComment(id);
      setPendingComments((prev) => prev.filter((c) => c.id !== id));

      // Pasa arriba del todo en los aprobados: acaba de publicarse, y así se
      // ve el efecto de la acción sin recargar la página.
      if (comentario) {
        setUltimosAprobados((prev) =>
          [comentario, ...prev].slice(0, ULTIMOS_APROBADOS),
        );
      }
    } catch {
      setError("No se pudo aprobar el comentario.");
    }
  };

  const handleReject = async (id: number) => {
    try {
      await rejectComment(id);
      setPendingComments((prev) => prev.filter((c) => c.id !== id));
    } catch {
      setError("No se pudo rechazar el comentario.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1
        className="text-2xl font-bold mb-6"
        style={{ color: "var(--color-primary)" }}
      >
        Administrar Comentarios
      </h1>

      {error && (
        <p
          role="alert"
          className="admin-alerta admin-alerta--error"
        >
          {error}
        </p>
      )}

      {pendingComments.length > 0 ? (
        <AdminTable
          columns={[
            "Alias",
            "Comentario",
            "Post",
            "Fecha",
            { label: "Acciones", align: "center" },
          ]}
          caption="Comentarios pendientes de moderar"
        >
          {pendingComments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.alias || "Anónimo"}</td>
              <td>{comment.content}</td>
              <td>{comment.postId}</td>
              <td>
                {new Date(comment.createdAt).toLocaleDateString("es-ES")}
              </td>
              <td>
                <div className="flex justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleApprove(comment.id)}
                    className="admin-btn admin-btn--primario"
                  >
                    <Check size={16} aria-hidden="true" /> Aprobar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReject(comment.id)}
                    className="admin-btn admin-btn--peligro"
                  >
                    <X size={16} aria-hidden="true" /> Rechazar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </AdminTable>
      ) : (
        <p className="text-center text-gray-500">
          No hay comentarios pendientes de aprobación.
        </p>
      )}

      {/*
        Los últimos publicados, como referencia de qué se ve ahora mismo en la
        web. La pantalla solo mostraba los pendientes, así que no había forma
        de saber qué se había aprobado sin ir a mirar el blog.
      */}
      {ultimosAprobados.length > 0 && (
        <section className="mt-10" aria-labelledby="aprobados-titulo">
          <h2
            id="aprobados-titulo"
            className="text-lg font-bold mb-1"
            style={{ color: "var(--color-secondary)" }}
          >
            Últimos publicados
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Los {ULTIMOS_APROBADOS} comentarios aprobados más recientes, ya
            visibles en la web.
          </p>

          <ul className="space-y-3">
            {ultimosAprobados.map((comment) => (
              <li
                key={comment.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex flex-wrap justify-between gap-2 mb-1">
                  <span className="text-sm font-medium">
                    {comment.alias || "Anónimo"}
                  </span>
                  <span className="text-xs text-gray-500">
                    Post {comment.postId} ·{" "}
                    {new Date(comment.createdAt).toLocaleDateString("es-ES")}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{comment.content}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ManageComments;
