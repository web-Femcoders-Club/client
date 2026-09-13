import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => ({
  Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
});

/** Una anotación del registro de actividad del panel. */
export interface AnotacionDeRegistro {
  id: number;
  accion: string;
  autorId: number | null;
  autorNombre: string;
  autorEmail: string | null;
  objetivoTipo: string | null;
  objetivoId: string | null;
  objetivoNombre: string | null;
  objetivoEmail: string | null;
  detalle: string | null;
  creadoEn: string;
}

export interface PaginaDeRegistro {
  filas: AnotacionDeRegistro[];
  total: number;
  pagina: number;
  porPagina: number;
  totalPaginas: number;
}

/** Una cuenta que está en la papelera y todavía se puede recuperar. */
export interface CuentaEnPapelera {
  idUser: number;
  userName: string;
  userLastName: string;
  userEmail: string;
  userRole: string;
  borradaEn: string;
  sePurgaEn: string;
  horasRestantes: number;
}

export const getRegistro = async (
  pagina: number,
  porPagina: number,
  accion?: string
): Promise<PaginaDeRegistro> => {
  const { data } = await axios.get(`${API_URL}/admin/registro`, {
    headers: getAuthHeaders(),
    params: { pagina, porPagina, ...(accion ? { accion } : {}) },
  });
  return data;
};

export const getAccionesDelRegistro = async (): Promise<string[]> => {
  const { data } = await axios.get(`${API_URL}/admin/registro/acciones`, {
    headers: getAuthHeaders(),
  });
  return data.acciones ?? [];
};

export const getPapelera = async (): Promise<CuentaEnPapelera[]> => {
  const { data } = await axios.get(`${API_URL}/admin/users/papelera`, {
    headers: getAuthHeaders(),
  });
  return data;
};

export const restaurarUsuaria = async (
  idUser: number
): Promise<{ message: string }> => {
  const { data } = await axios.post(
    `${API_URL}/admin/users/${idUser}/restaurar`,
    {},
    { headers: getAuthHeaders() }
  );
  return data;
};
