import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Comment } from '../../../types/types';
import { getApprovedComments } from '../../../api/commentApi';

const Noticia1: React.FC = () => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [approvedComments, setApprovedComments] = useState<Comment[]>([]);
  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const approved = await getApprovedComments();
        setApprovedComments(approved);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      throw new Error("The form element is not found");
    }

    const serviceId = import.meta.env.VITE_API_SERVICE_ID;
    const templateId = import.meta.env.VITE_API_TEMPLATE_ID;
    const apiKey = import.meta.env.VITE_API_EMAILJS_KEY;

    const templateParams = {
      from_name: name,
      message: comment,
      to_name: 'Irina', 
      postId: '1', 
    };

    emailjs.send(serviceId, templateId, templateParams, apiKey)
      .then(result => {
        console.log(result.text);
        setSubmitted(true);
        setComment('');
        setName('');
      })
      .catch(error => {
        console.log(error);
      });

    
    fetch(`${import.meta.env.VITE_API_URL}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postId: 1,
        content: comment,
        userEmail: '', 
      }),
    }).then(response => response.json())
      .then(data => {
        console.log('Comentario enviado al backend:', data);
      })
      .catch(error => {
        console.error('Error enviando el comentario al backend:', error);
      });
  };

  return (
    <div className="blog-post">
      <img src="url-de-la-imagen.jpg" alt="Bienvenidas a femCoders Club" className="blog-post-image" />
      <h2>Bienvenidas a femCoders Club: Innovación, Inclusión y Comunidad en la Programación</h2>
      <p>¡Hola a todos! Estamos muy emocionadas de presentarles el nuevo sitio web de femCoders Club, un espacio dedicado a fomentar la inclusión, innovación y el crecimiento profesional de las mujeres en el mundo de la tecnología y la programación. En este primer artículo, queremos contarles quiénes somos, qué hacemos y cómo pueden unirse a esta increíble comunidad.</p>
      {/* ...más contenido... */}
      
      <div className="comments-section">
        
        <ul>
          {approvedComments.map((comment) => (
            <li key={comment.id}>{comment.content}</li>
          ))}
        </ul>

        <h3>Deja un comentario</h3>
        <form ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Tu nombre"
            required
          />
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Escribe tu comentario aquí..."
            required
          />
          <button type="submit">Enviar comentario</button>
        </form>
        {submitted && <p>Tu comentario ha sido enviado y está pendiente de moderación.</p>}
      </div>
    </div>
  );
};

export default Noticia1;