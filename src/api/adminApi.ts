import axios from "axios";
import { filasDe, paginacionDe } from "../utils/respuestaPaginada";
import {
  UserStats,
  AchievementStats,
  UserWithAchievements,
  RecentAchievement,
  PaginatedResponse,
  CrmStats,
  CrmAttendeePaginated,
  CrmAttendeeDetail,
  CrmEventAttendeesResponse,
  CrmUsersCrosscheck,
  PendingUnsubscribeRecord,
  UnsubscribedEmailRecord,
} from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => {
  const token = sessionStorage.getItem("authToken");
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getUserStats = async (): Promise<UserStats> => {
  const response = await axios.get(`${API_URL}/admin/stats`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// Estadísticas de logros
export const getAchievementStats = async (): Promise<AchievementStats> => {
  const response = await axios.get(`${API_URL}/admin/stats/achievements`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// Usuarios con sus logros (paginado)
export const getUsersWithAchievements = async (
  page: number = 1,
  limit: number = 10
): Promise<PaginatedResponse<UserWithAchievements>> => {
  const response = await axios.get(`${API_URL}/admin/users-with-achievements`, {
    headers: getAuthHeaders(),
    params: { page, limit },
  });
  return response.data;
};

// Actividad reciente de logros
export const getRecentAchievements = async (): Promise<RecentAchievement[]> => {
  const response = await axios.get(`${API_URL}/admin/recent-achievements`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// CRM
export const getCrmStats = async (): Promise<CrmStats> => {
  const response = await axios.get(`${API_URL}/admin/crm/stats`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

/**
 * Una página de asistentes.
 *
 * `search` lo resuelve el backend y busca en nombre, apellidos, nombre
 * completo y email, igual que el resto de listados del panel (server#14).
 *
 * El DNI queda fuera a propósito: se recoge para el control de acceso del
 * espacio anfitrión, no para localizar personas, y tiene su propio buscador.
 */
export const getCrmAttendees = async (
  page: number = 1,
  limit: number = 20,
  eventId?: string,
  dateFrom?: string,
  dateTo?: string,
  search?: string
): Promise<CrmAttendeePaginated> => {
  const response = await axios.get(`${API_URL}/admin/crm/attendees`, {
    headers: getAuthHeaders(),
    params: {
      page,
      limit,
      eventId,
      dateFrom,
      dateTo,
      search: search || undefined,
    },
  });
  return response.data;
};

export const getCrmAttendeeDetail = async (
  email: string,
  eventsPage: number = 1,
  eventsLimit: number = 5
): Promise<CrmAttendeeDetail> => {
  const response = await axios.get(`${API_URL}/admin/crm/attendees/${encodeURIComponent(email)}`, {
    headers: getAuthHeaders(),
    params: { eventsPage, eventsLimit },
  });
  return response.data;
};

/**
 * Descarga el export de asistentes (CSV/PDF) enviando el token en el header
 * Authorization (no en la query string). Necesario desde que /admin/* exige
 * Bearer token (guard de seguridad #2): una navegación directa daría 401.
 */
export const downloadCrmExport = async (
  format: "csv" | "pdf" = "csv"
): Promise<void> => {
  const response = await fetch(
    `${API_URL}/admin/crm/attendees/export?format=${format}`,
    { headers: getAuthHeaders() }
  );
  if (!response.ok) {
    throw new Error(`Error al exportar (${response.status})`);
  }
  const blob = await response.blob();
  const date = new Date().toISOString().substring(0, 10);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `femcoders-asistentes-${date}.${format}`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

export const getCrmEventAttendees = async (
  eventId: string,
  page = 1,
  limit = 20
): Promise<CrmEventAttendeesResponse> => {
  const response = await axios.get(
    `${API_URL}/admin/crm/events/${eventId}/attendees`,
    { headers: getAuthHeaders(), params: { page, limit } }
  );
  return response.data;
};

export const getCrmAttendeeByDni = async (
  dni: string,
  eventsPage: number = 1,
  eventsLimit: number = 5
): Promise<CrmAttendeeDetail> => {
  const response = await axios.get(`${API_URL}/admin/crm/attendees/by-dni/${encodeURIComponent(dni)}`, {
    headers: getAuthHeaders(),
    params: { eventsPage, eventsLimit },
  });
  return response.data;
};

export const getCrmUsersCrosscheck = async (
  page: number = 1,
  limit: number = 15,
  search?: string
): Promise<CrmUsersCrosscheck> => {
  const response = await axios.get(`${API_URL}/admin/crm/users-crosscheck`, {
    headers: getAuthHeaders(),
    params: { page, limit, search: search || undefined },
  });
  return response.data;
};

// -------------------------------
// Gestión de usuarias
// -------------------------------

export interface AdminUser {
  idUser: number;
  userName: string;
  userLastName: string;
  userEmail: string;
  userRole: string;
  userGender: string;
  userTelephone: string | null;
}

/**
 * Una página de usuarias registradas.
 *
 * `search` lo resuelve el backend (server#14). Filtrar en el navegador miraría
 * solo la página cargada: buscar a una usuaria concreta entre 106 diría que no
 * existe.
 */
export const getAdminUsers = async (
  page: number = 1,
  limit: number = 10,
  search?: string
): Promise<PaginatedResponse<AdminUser>> => {
  const response = await axios.get(`${API_URL}/admin/users`, {
    headers: getAuthHeaders(),
    params: { page, limit, search: search || undefined },
  });

  // Con un backend anterior a server#27 la respuesta es un array suelto: se
  // envuelve para que quien llama reciba siempre la misma forma.
  const filas = filasDe<AdminUser>(response.data);
  const pagination = paginacionDe<AdminUser>(response.data) ?? {
    currentPage: 1,
    itemsPerPage: filas.length,
    totalItems: filas.length,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
  };

  return { data: filas, pagination };
};

export const updateAdminUser = async (
  idUser: number,
  data: Partial<Pick<AdminUser, "userName" | "userLastName" | "userTelephone">>
): Promise<AdminUser> => {
  const response = await axios.put(`${API_URL}/admin/users/${idUser}`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const deleteAdminUser = async (idUser: number): Promise<void> => {
  await axios.delete(`${API_URL}/admin/users/${idUser}`, {
    headers: getAuthHeaders(),
  });
};

// -------------------------------
// Bajas de email
// -------------------------------

/**
 * Una página de la lista de bajas.
 *
 * La búsqueda va al backend por la misma razón que en el resto del panel, y
 * aquí además importa más: en una lista de bajas, «no aparece» se lee como «no
 * está dada de baja», que es justo lo que se viene a comprobar.
 */
export const getUnsubscribed = async (
  page: number = 1,
  limit: number = 20,
  search?: string
): Promise<PaginatedResponse<UnsubscribedEmailRecord>> => {
  const response = await axios.get(`${API_URL}/admin/unsubscribed`, {
    headers: getAuthHeaders(),
    params: { page, limit, search: search || undefined },
  });

  const filas = filasDe<UnsubscribedEmailRecord>(response.data);
  const pagination = paginacionDe<UnsubscribedEmailRecord>(response.data) ?? {
    currentPage: 1,
    itemsPerPage: filas.length,
    totalItems: filas.length,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
  };

  return { data: filas, pagination };
};

/**
 * Solicitudes de baja que no se pudieron completar.
 *
 * No se pagina a propósito: es una cola de incumplimiento —gente que pidió la
 * baja y sigue recibiendo correos— y esconder la mitad detrás de una segunda
 * página es justo lo contrario de lo que hace falta.
 */
export const getPendingUnsubscribes = async (): Promise<
  PendingUnsubscribeRecord[]
> => {
  const response = await axios.get(`${API_URL}/admin/unsubscribed/pending`, {
    headers: getAuthHeaders(),
  });
  return filasDe<PendingUnsubscribeRecord>(response.data);
};

// -------------------------------
// Sincronización con Eventbrite
// -------------------------------

export const forceEventbriteSync = async (): Promise<{
  ok: boolean;
  message: string;
}> => {
  const response = await axios.post(
    `${API_URL}/admin/crm/sync`,
    {},
    { headers: getAuthHeaders() }
  );
  return response.data;
};
