import axios from "axios";
import { Event } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

export const getPastEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get(`${API_URL}/events/api/list/past`);
    return response.data as Event[];
  } catch (error) {
    console.error("Error fetching past events:", error);
    throw error;
  }
};

export const getUpcomingEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get(`${API_URL}/events/api/list/upcoming`);
    return response.data as Event[];
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    throw error;
  }
};
