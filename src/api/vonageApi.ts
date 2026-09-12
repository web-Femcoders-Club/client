import axios from "axios";
import { InteresEnApis, RespuestaDeInteres } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => ({
  Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
});

/**
 * El código promocional de Vonage (server#131).
 *
 * Viene del backend y no de una constante del cliente porque el bundle de React
 * es público: un código escrito aquí estaría publicado aunque el componente que
 * lo pinta solo aparezca tras iniciar sesión.
 */
export const getCodigoVonage = async (): Promise<{ codigo: string }> => {
  const { data } = await axios.get(`${API_URL}/vonage/codigo`, {
    headers: getAuthHeaders(),
  });
  return data;
};

export const getInteresEnApis = async (
  idUser: number
): Promise<InteresEnApis | null> => {
  const { data } = await axios.get(`${API_URL}/user/${idUser}/interes-apis`, {
    headers: getAuthHeaders(),
  });
  return data;
};

export const guardarInteresEnApis = async (
  idUser: number,
  respuesta: RespuestaDeInteres
): Promise<InteresEnApis> => {
  const { data } = await axios.post(
    `${API_URL}/user/${idUser}/interes-apis`,
    respuesta,
    { headers: getAuthHeaders() }
  );
  return data;
};
