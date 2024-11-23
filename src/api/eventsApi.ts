// import axios, { AxiosResponse } from "axios";
// import { Event } from "../types/types";

// const API_URL = import.meta.env.VITE_API_URL;

// const retryRequest = async (
//   requestFunc: () => Promise<AxiosResponse>,
//   retries: number = 3,
//   delay: number = 10000
// ): Promise<AxiosResponse> => {
//   try {
//     return await requestFunc();
//   } catch (error: unknown) {
//     if (
//       retries > 0 &&
//       axios.isAxiosError(error) &&
//       error.response?.status === 429
//     ) {
//       console.warn(
//         `Rate limit exceeded. Retrying in ${delay / 1000} seconds...`
//       );
//       await new Promise((resolve) => setTimeout(resolve, delay));
//       return retryRequest(requestFunc, retries - 1, delay);
//     }
//     throw error;
//   }
// };

// export const getPastEvents = async (): Promise<Event[]> => {
//   console.log(`Fetching past events from: ${API_URL}/events/api/list/past`);
//   const requestFunc = () => axios.get(`${API_URL}/events/api/list/past`);
//   const response = await retryRequest(requestFunc);
//   return response.data as Event[];
// };

// export const getUpcomingEvents = async (): Promise<Event[]> => {
//   console.log(
//     `Fetching upcoming events from: ${API_URL}/events/api/list/upcoming`
//   );
//   const requestFunc = () => axios.get(`${API_URL}/events/api/list/upcoming`);
//   const response = await retryRequest(requestFunc);
//   return response.data as Event[];
// };

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
