import axios from "axios";
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

export const getCrmAttendees = async (
  page: number = 1,
  limit: number = 20,
  eventId?: string,
  dateFrom?: string,
  dateTo?: string
): Promise<CrmAttendeePaginated> => {
  const response = await axios.get(`${API_URL}/admin/crm/attendees`, {
    headers: getAuthHeaders(),
    params: { page, limit, eventId, dateFrom, dateTo },
  });
  return response.data;
};

export const getCrmAttendeeDetail = async (email: string): Promise<CrmAttendeeDetail> => {
  const response = await axios.get(`${API_URL}/admin/crm/attendees/${encodeURIComponent(email)}`, {
    headers: getAuthHeaders(),
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

export const getCrmAttendeeByDni = async (dni: string): Promise<CrmAttendeeDetail> => {
  const response = await axios.get(`${API_URL}/admin/crm/attendees/by-dni/${encodeURIComponent(dni)}`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const getCrmUsersCrosscheck = async (): Promise<CrmUsersCrosscheck> => {
  const response = await axios.get(`${API_URL}/admin/crm/users-crosscheck`, {
    headers: getAuthHeaders(),
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

export const getAdminUsers = async (): Promise<AdminUser[]> => {
  const response = await axios.get(`${API_URL}/admin/users`, {
    headers: getAuthHeaders(),
  });
  return response.data;
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
