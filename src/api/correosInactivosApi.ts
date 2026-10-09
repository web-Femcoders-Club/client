import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => ({
  Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
});

/** Una persona conocida cuyo correo dejó de funcionar (server#144). */
export interface CorreoInactivo {
  id: number;
  nombre: string;
  email: string;
  nota: string | null;
  emailNuevo: string | null;
  anadidoPor: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface NuevoCorreoInactivo {
  nombre: string;
  email: string;
  nota?: string;
}

/** `null` vacía el campo; un campo que no se manda se queda como estaba. */
export interface CambiosEnCorreoInactivo {
  nota?: string | null;
  emailNuevo?: string | null;
}

const URL = () => `${API_URL}/admin/correos-inactivos`;

export const getCorreosInactivos = async (): Promise<CorreoInactivo[]> => {
  const { data } = await axios.get<CorreoInactivo[]>(URL(), {
    headers: getAuthHeaders(),
  });
  return data;
};

export const anadirCorreoInactivo = async (
  nuevo: NuevoCorreoInactivo,
): Promise<CorreoInactivo> => {
  const { data } = await axios.post<CorreoInactivo>(URL(), nuevo, {
    headers: getAuthHeaders(),
  });
  return data;
};

export const editarCorreoInactivo = async (
  id: number,
  cambios: CambiosEnCorreoInactivo,
): Promise<CorreoInactivo> => {
  const { data } = await axios.patch<CorreoInactivo>(`${URL()}/${id}`, cambios, {
    headers: getAuthHeaders(),
  });
  return data;
};

export const borrarCorreoInactivo = async (id: number): Promise<void> => {
  await axios.delete(`${URL()}/${id}`, { headers: getAuthHeaders() });
};
