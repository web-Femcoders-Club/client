import axios from "axios";
import { Comment } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

export const getApprovedComments = async (
  postId?: number
): Promise<Comment[]> => {
  const response = await axios.get(`${API_URL}/comments/approved`, {
    params: { postId },
  });
  return response.data;
};

export const getPendingComments = async (
  postId?: number
): Promise<Comment[]> => {
  const response = await axios.get(`${API_URL}/comments/pending`, {
    params: { postId },
  });
  return response.data;
};

export const addComment = async (
  commentData: Partial<Comment>
): Promise<Comment> => {
  const response = await axios.post(`${API_URL}/comments`, commentData);
  return response.data;
};

export const approveComment = async (id: number): Promise<Comment> => {
  const response = await axios.get(`${API_URL}/comments/approve/${id}`);
  return response.data;
};

export const rejectComment = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/comments/reject/${id}`);
};
