import axios, { AxiosError } from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const API_URL = `${BASE_URL}/admin`;

console.log("Conectando a API en:", API_URL);

const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error("Error en la API:", error.response?.data || error.message);
  } else {
    console.error("Error inesperado:", error);
  }
  throw error;
};

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

export const getAchievementsByUser = async (idUser: number) => {
  try {
    const response = await axios.get(`${API_URL}/users/${idUser}/achievements`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const getAllAchievements = async () => {
  try {
    const response = await axios.get(`${API_URL}/achievements`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

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

/**
 * Los logros de una persona.
 *
 * Llamaba a `/admin/users/:id/achievements`, que exige rol admin desde que
 * `server#2` protegió el panel: una usuaria normal recibía 401 y la página de
 * bienvenida enseñaba "Error al cargar logros". Ahora usa la ruta propia
 * `/achievements/user/:id`, que pide sesión y que el id sea el tuyo (o admin),
 * el mismo criterio que el perfil.
 */
export const getUserAchievements = async (idUser: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/achievements/user/${idUser}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "Error obteniendo logros del usuario:",
      axiosError.response?.data || axiosError.message
    );
    throw error;
  }
};
