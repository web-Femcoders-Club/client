import axios from 'axios';

const API_URL = 'http://localhost:3000/events/api';

export const getPastEvents = async () => {
  console.log('Fetching past events from:', `${API_URL}/list/past`);
  const response = await axios.get(`${API_URL}/list/past`);
  console.log('Past events response:', response.data);
  return response.data;
};

export const getUpcomingEvents = async () => {
  console.log('Fetching upcoming events from:', `${API_URL}/list/upcoming`);
  const response = await axios.get(`${API_URL}/list/upcoming`);
  console.log('Upcoming events response:', response.data);
  return response.data;
};

