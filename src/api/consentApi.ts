import axios from "axios";
import {
  DecisionDeConsentimiento,
  EstadoDeConsentimiento,
} from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Preferencias de comunicación de la usuaria (server#130).
 *
 * Los endpoints exigen sesión y comparan el `user_id` de la ruta con el de la
 * sesión, así que el token es obligatorio en las dos llamadas.
 */
const getAuthHeaders = () => ({
  Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
});

export const getEstadoDeConsentimiento = async (
  idUser: number
): Promise<EstadoDeConsentimiento> => {
  const { data } = await axios.get(`${API_URL}/user/${idUser}/consent`, {
    headers: getAuthHeaders(),
  });
  return data;
};

export const guardarConsentimiento = async (
  idUser: number,
  decision: DecisionDeConsentimiento
): Promise<EstadoDeConsentimiento> => {
  const { data } = await axios.post(
    `${API_URL}/user/${idUser}/consent`,
    decision,
    { headers: getAuthHeaders() }
  );
  return data;
};
