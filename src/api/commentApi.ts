import axios from 'axios';
import { Comment } from '../types/types';

export const getApprovedComments = async (): Promise<Comment[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/comments/approved`);
  return response.data;
};

export const getPendingComments = async (): Promise<Comment[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/comments/pending`);
  return response.data;
};

export const approveComment = async (id: number): Promise<Comment> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/comments/approve/${id}`);
  return response.data;
};

export const rejectComment = async (id: number): Promise<void> => {
  await axios.delete(`${import.meta.env.VITE_API_URL}/comments/reject/${id}`);
};


