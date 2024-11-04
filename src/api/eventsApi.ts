import axios, { AxiosResponse } from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Función auxiliar para reintentar solicitudes con un retraso
const retryRequest = async (
  requestFunc: () => Promise<AxiosResponse>,
  retries: number = 3,
  delay: number = 10000
): Promise<AxiosResponse> => {
  try {
    return await requestFunc();
  } catch (error: unknown) {
    // Verificar si el error es un error de Axios y si tiene una respuesta de tipo 429
    if (retries > 0 && axios.isAxiosError(error) && error.response?.status === 429) {
      console.warn(`Rate limit exceeded. Retrying in ${delay / 1000} seconds...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return retryRequest(requestFunc, retries - 1, delay);
    }
    throw error;
  }
};

export const getPastEvents = async () => {
  const requestFunc = () => axios.get(`${API_URL}/events/api/list/past`);
  const response = await retryRequest(requestFunc);
  return response.data;
};

export const getUpcomingEvents = async () => {
  const requestFunc = () => axios.get(`${API_URL}/events/api/list/upcoming`);
  const response = await retryRequest(requestFunc);
  return response.data;
};



