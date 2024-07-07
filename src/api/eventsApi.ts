import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getPastEvents = async () => {
  const response = await axios.get(`${API_URL}/events/api/list/past`);
  return response.data;
};

export const getUpcomingEvents = async () => {
  const response = await axios.get(`${API_URL}/events/api/list/upcoming`);
  return response.data;
};


