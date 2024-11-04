import axios from 'axios';
import { UnconnectedComment } from '../types/types'; 

export const getApprovedUnconnectedComments = async (): Promise<UnconnectedComment[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/unconnected-comments/approved`);
  return response.data;
};

export const getPendingUnconnectedComments = async (): Promise<UnconnectedComment[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/unconnected-comments/pending`);
  return response.data;
};

export const approveUnconnectedComment = async (id: number): Promise<UnconnectedComment> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/unconnected-comments/approve/${id}`);
  return response.data;
};

export const rejectUnconnectedComment = async (id: number): Promise<void> => {
  await axios.delete(`${import.meta.env.VITE_API_URL}/unconnected-comments/reject/${id}`);
};

export const createUnconnectedComment = async (commentData: Partial<UnconnectedComment>): Promise<UnconnectedComment> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/unconnected-comments`, commentData);
  return response.data;
};
