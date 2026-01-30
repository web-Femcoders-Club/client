import axios from "axios";
import { UserStats } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

export const getUserStats = async (): Promise<UserStats> => {
  const token = sessionStorage.getItem("authToken");
  const response = await axios.get(`${API_URL}/admin/stats`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
