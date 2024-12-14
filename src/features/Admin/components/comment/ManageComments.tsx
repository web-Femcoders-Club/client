import React, { useEffect, useState } from "react";
import {
  approveComment,
  getPendingComments,
  rejectComment,
} from "../../../../api/commentApi";
import { Check, X } from "lucide-react";
import { Comment } from "../../../../types/types";

const ManageComments: React.FC = () => {
  const [pendingComments, setPendingComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const comments = await getPendingComments();
        setPendingComments(comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  const handleApprove = async (id: number) => {
    try {
      await approveComment(id);
      setPendingComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== id)
      );
    } catch (error) {
      console.error("Error approving comment:", error);
    }
  };

  const handleReject = async (id: number) => {
    try {
      await rejectComment(id);
      setPendingComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== id)
      );
    } catch (error) {
      console.error("Error rejecting comment:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Administrar Comentarios</h1>

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
    </div>
  );
};

export default ManageComments;
