// import React, { useEffect, useState } from 'react';
// import { approveComment, getPendingComments, rejectComment } from '../../../../api/commentApi';
// import { Comment } from '../../../../types/types';

// const ManageComments: React.FC = () => {
//   const [comments, setComments] = useState<Comment[]>([]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const pendingComments = await getPendingComments();
//         setComments(pendingComments);
//       } catch (error) {
//         console.error('Error fetching pending comments:', error);
//       }
//     };

//     fetchComments();
//   }, []);

//   const handleApprove = async (id: number) => {
//     try {
//       await approveComment(id);
//       setComments(comments.filter(comment => comment.id !== id));
//     } catch (error) {
//       console.error('Error approving comment:', error);
//     }
//   };

//   const handleReject = async (id: number) => {
//     try {
//       await rejectComment(id);
//       setComments(comments.filter(comment => comment.id !== id));
//     } catch (error) {
//       console.error('Error rejecting comment:', error);
//     }
//   };

//   return (
//     <div>
//       <h2 style={{ marginTop: '10rem' }}>Administrar Comentarios</h2>
//       <ul>
//         {comments.map(comment => (
//           <li key={comment.id}>
//             {comment.content}
//             <button onClick={() => handleApprove(comment.id)}>Aprobar</button>
//             <button onClick={() => handleReject(comment.id)}>Rechazar</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ManageComments;



import React, { useEffect, useState } from 'react';
import { approveComment, getPendingComments, rejectComment } from '../../../../api/commentApi';
import { getPendingUnconnectedComments, approveUnconnectedComment, rejectUnconnectedComment } from '../../../../api/unconnectedCommentApi';
import { Comment, UnconnectedComment } from '../../../../types/types';

const ManageComments: React.FC = () => {
  const [connectedComments, setConnectedComments] = useState<Comment[]>([]);
  const [unconnectedComments, setUnconnectedComments] = useState<UnconnectedComment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const pendingConnected = await getPendingComments();
        setConnectedComments(pendingConnected);

        const pendingUnconnected = await getPendingUnconnectedComments(); 
        setUnconnectedComments(pendingUnconnected);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  const handleApproveConnected = async (id: number) => {
    try {
      await approveComment(id);
      setConnectedComments(connectedComments.filter(comment => comment.id !== id));
    } catch (error) {
      console.error('Error approving connected comment:', error);
    }
  };

  const handleRejectConnected = async (id: number) => {
    try {
      await rejectComment(id);
      setConnectedComments(connectedComments.filter(comment => comment.id !== id));
    } catch (error) {
      console.error('Error rejecting connected comment:', error);
    }
  };

  const handleApproveUnconnected = async (id: number) => {
    try {
      await approveUnconnectedComment(id);
      setUnconnectedComments(unconnectedComments.filter(comment => comment.id !== id));
    } catch (error) {
      console.error('Error approving unconnected comment:', error);
    }
  };

  const handleRejectUnconnected = async (id: number) => {
    try {
      await rejectUnconnectedComment(id);
      setUnconnectedComments(unconnectedComments.filter(comment => comment.id !== id));
    } catch (error) {
      console.error('Error rejecting unconnected comment:', error);
    }
  };

  return (
    <div>
      <h2 style={{ marginTop: '10rem' }}>Administrar Comentarios</h2>

      <h3>Comentarios de Usuarios Conectados</h3>
      <ul>
        {connectedComments.map(comment => (
          <li key={comment.id}>
            {comment.content}
            <button onClick={() => handleApproveConnected(comment.id)}>Aprobar</button>
            <button onClick={() => handleRejectConnected(comment.id)}>Rechazar</button>
          </li>
        ))}
      </ul>

      <h3>Comentarios de Usuarios No Conectados</h3>
      <ul>
        {unconnectedComments.map(comment => (
          <li key={comment.id}>
            {comment.content}
            <button onClick={() => handleApproveUnconnected(comment.id)}>Aprobar</button>
            <button onClick={() => handleRejectUnconnected(comment.id)}>Rechazar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageComments;
