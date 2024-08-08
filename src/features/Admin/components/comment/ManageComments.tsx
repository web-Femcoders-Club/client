import React, { useEffect, useState } from 'react';
import { approveComment, getPendingComments, rejectComment } from '../../../../api/commentApi';
import { Comment } from '../../../../types/types';

const ManageComments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const pendingComments = await getPendingComments();
        setComments(pendingComments);
      } catch (error) {
        console.error('Error fetching pending comments:', error);
      }
    };

    fetchComments();
  }, []);

  const handleApprove = async (id: number) => {
    try {
      await approveComment(id);
      setComments(comments.filter(comment => comment.id !== id));
    } catch (error) {
      console.error('Error approving comment:', error);
    }
  };

  const handleReject = async (id: number) => {
    try {
      await rejectComment(id);
      setComments(comments.filter(comment => comment.id !== id));
    } catch (error) {
      console.error('Error rejecting comment:', error);
    }
  };

  return (
    <div>
      <h2 style={{ marginTop: '10rem' }}>Administrar Comentarios</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.content}
            <button onClick={() => handleApprove(comment.id)}>Aprobar</button>
            <button onClick={() => handleReject(comment.id)}>Rechazar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageComments;









