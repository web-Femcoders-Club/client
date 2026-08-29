import React, { useEffect, useState } from "react";
import {
  approveComment,
  getApprovedComments,
  getPendingComments,
  rejectComment,
} from "../../../../api/commentApi";
import { Check, X } from "lucide-react";
import { Comment } from "../../../../types/types";

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
      <h1 className="text-2xl font-bold mb-6">Administrar Comentarios</h1>

      {error && (
        <p
          role="alert"
          className="mb-4 px-4 py-3 rounded-lg bg-red-50 text-red-800 text-sm"
        >
          {error}
        </p>
      )}

      {pendingComments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left">Alias</th>
                <th className="p-4 text-left">Comentario</th>
                <th className="p-4 text-left">Post ID</th>
                <th className="p-4 text-left">Fecha</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pendingComments.map((comment) => (
                <tr key={comment.id} className="hover:bg-gray-50">
                  <td className="p-4">{comment.alias || "Anónimo"}</td>
                  <td className="p-4">{comment.content}</td>
                  <td className="p-4">{comment.postId}</td>
                  <td className="p-4">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 flex justify-center gap-2">
                    <button
                      onClick={() => handleApprove(comment.id)}
                      className="btn btn-success btn-sm flex items-center gap-1"
                    >
                      <Check size={16} /> Aprobar
                    </button>
                    <button
                      onClick={() => handleReject(comment.id)}
                      className="btn btn-error btn-sm flex items-center gap-1"
                    >
                      <X size={16} /> Rechazar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
            style={{ color: "#4737bb" }}
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
