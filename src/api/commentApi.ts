import axios from "axios";
import { Comment } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

// Moderar comentarios exige admin desde server#72: hasta entonces aprobar era
// un GET abierto y rechazar borraba de verdad, sin ninguna sesion.
//
// La cabecera va en las tres operaciones de moderacion: listar la cola,
// aprobar y rechazar. Leer los aprobados y comentar siguen siendo publicos, y
// deben serlo: son los que se pintan bajo cada entrada del blog.
const cabeceraDeAuth = () => ({
  Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
});

export const getApprovedComments = async (
  postId?: number
): Promise<Comment[]> => {
  const response = await axios.get(`${API_URL}/comments/approved`, {
    params: { postId },
  });
  return response.data;
};

/**
 * La cola de moderacion. Solo para el equipo.
 *
 * Son los comentarios que aun no ha aprobado nadie: ahi es donde cae el spam,
 * un insulto o un dato personal escrito por error. Que esten sin moderar es
 * justo el motivo por el que no deben servirse a cualquiera.
 *
 * El backend tiene el guard preparado pero desactivado a la espera de que este
 * cliente mande la cabecera (server, comment.controller.ts). Mandarla ahora no
 * cambia nada mientras el guard siga fuera, y es lo que permite reactivarlo sin
 * dejar al equipo sin moderar: el orden es cliente desplegado primero,
 * backend despues. Al reves ya paso una vez y la moderacion estuvo caida horas.
 */
export const getPendingComments = async (
  postId?: number
): Promise<Comment[]> => {
  const response = await axios.get(`${API_URL}/comments/pending`, {
    params: { postId },
    headers: cabeceraDeAuth(),
  });
  return response.data;
};

export const addComment = async (
  commentData: Partial<Comment>
): Promise<Comment> => {
  const response = await axios.post(`${API_URL}/comments`, commentData);
  return response.data;
};

/**
 * Publica un comentario pendiente.
 *
 * Es PATCH porque cambia estado. Con GET, la protección dependía de que este
 * token viajara en una cabecera y no en una cookie: un GET autenticado es el
 * tipo de petición que un navegador dispara solo —una etiqueta `<img>` en
 * cualquier página basta— y eso era una garantía de cómo está montado este
 * cliente, no del endpoint (#65, server#98).
 *
 * El cuerpo va vacío: lo que se aprueba lo dice la ruta.
 */
export const approveComment = async (id: number): Promise<Comment> => {
  const response = await axios.patch(
    `${API_URL}/comments/approve/${id}`,
    {},
    { headers: cabeceraDeAuth() }
  );
  return response.data;
};

export const rejectComment = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/comments/reject/${id}`, {
    headers: cabeceraDeAuth(),
  });
};
