import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const API_URL = `${BASE_URL}/admin`;

console.log("Conectando a API en:", API_URL);

/**
 * Manejo centralizado de errores de Axios.
 * @param error - Error lanzado por Axios.
 */
const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error("Error en la API:", error.response?.data || error.message);
  } else {
    console.error("Error inesperado:", error);
  }
  throw error;
};

/**
 * Asigna el logro "Primera Conexión" a un usuario.
 * @param idUser - ID del usuario.
 */
export const assignFirstConnection = async (idUser: number) => {
  try {
    const response = await axios.post(
      `${API_URL}/users/${idUser}/achievements`,
      {
        achievementId: 1,
      }
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

/**
 * Asigna un logro específico a un usuario por parte del administrador.
 * @param idUser - ID del usuario.
 * @param achievementId - ID del logro a asignar.
 */
export const assignAchievementByAdmin = async (
  idUser: number,
  achievementId: number
) => {
  try {
    const response = await axios.post(
      `${API_URL}/users/${idUser}/achievements`,
      {
        achievementId,
      }
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

/**
 * Obtiene todos los logros asignados a un usuario.
 * @param idUser - ID del usuario.
 */
export const getAchievementsByUser = async (idUser: number) => {
  try {
    const response = await axios.get(`${API_URL}/users/${idUser}/achievements`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

/**
 * Obtiene la lista completa de logros disponibles en la plataforma.
 */
export const getAllAchievements = async () => {
  try {
    const response = await axios.get(`${API_URL}/achievements`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

/**
 * Agrega un nuevo logro a la base de datos.
 * @param achievement - Información del logro (título, ícono, descripción).
 */
export const addAchievement = async (achievement: {
  title: string;
  icon: string;
  description: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/achievements`, achievement);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

/**
 * Elimina un logro específico de la base de datos.
 * @param achievementId - ID del logro a eliminar.
 */
export const deleteAchievement = async (achievementId: number) => {
  try {
    const response = await axios.delete(
      `${API_URL}/achievements/${achievementId}`
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

/**
 * Actualiza un logro específico en la base de datos.
 * @param achievementId - ID del logro a actualizar.
 * @param updatedAchievement - Datos actualizados del logro.
 */
export const updateAchievement = async (
  achievementId: number,
  updatedAchievement: {
    title?: string;
    icon?: string;
    description?: string;
  }
) => {
  try {
    const response = await axios.put(
      `${API_URL}/achievements/${achievementId}`,
      updatedAchievement
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const getUserAchievements = async (idUser: number) => {
  try {
    const response = await axios.get(`${API_URL}/users/${idUser}/achievements`);
    return response.data;
  } catch (error) {
    const axiosError = error as any;
    console.error(
      "Error obteniendo logros del usuario:",
      axiosError.response?.data || axiosError.message
    );
    throw error;
  }
};
