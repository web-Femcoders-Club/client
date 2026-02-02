import axios from "axios";
import {
  UserStats,
  AchievementStats,
  UserWithAchievements,
  RecentAchievement,
  PaginatedResponse,
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
