import axios from "axios";
import {
  DatosListaEspera,
  InscripcionListaEspera,
  ResumenListaEspera,
} from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => ({
  Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
});

/** Lista de espera para futuros proyectos (server#147). */

export const getListaEspera = async (
  idUser: number
): Promise<InscripcionListaEspera | null> => {
  const { data } = await axios.get(`${API_URL}/user/${idUser}/lista-espera`, {
    headers: getAuthHeaders(),
  });
  // Nest responde a un `null` con el cuerpo vacío, que axios entrega como "".
  return data || null;
};

export const guardarListaEspera = async (
  idUser: number,
  datos: DatosListaEspera
): Promise<InscripcionListaEspera> => {
  const { data } = await axios.post(
    `${API_URL}/user/${idUser}/lista-espera`,
    datos,
    { headers: getAuthHeaders() }
  );
  return data;
};

export const quitarListaEspera = async (idUser: number): Promise<void> => {
  await axios.delete(`${API_URL}/user/${idUser}/lista-espera`, {
    headers: getAuthHeaders(),
  });
};

/**
 * Todas las inscripciones con sus recuentos, para el panel. Solo admin.
 *
 * Trae el conjunto entero, como el resumen del piloto: hay como mucho una
 * inscripción por cuenta y la pantalla busca y pagina en memoria.
 */
export const getResumenListaEspera = async (): Promise<ResumenListaEspera> => {
  const { data } = await axios.get(`${API_URL}/admin/lista-espera`, {
    headers: getAuthHeaders(),
  });
  return data;
};
