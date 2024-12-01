import axios from 'axios';
import { EmailDto, EmailResponse } from '../types/types';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const getAuthHeader = (token: string) => {
  if (!token) {
    throw new Error('Token no proporcionado');
  }
  return { Authorization: `Bearer ${token}` };
};

export const sendMentorshipEmail = async (emailData: EmailDto, token: string): Promise<EmailResponse> => {
  if (!token) {
    throw new Error('Token no proporcionado');
  }

  try {
    const response = await axios.post<EmailResponse>(
      `${BASE_URL}/emails/mentorship`,
      emailData,
      { headers: getAuthHeader(token) }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error enviando solicitud de mentoría: ${error.response?.data?.message || error.message}`);
    } else {
      throw new Error(`Error enviando solicitud de mentoría: ${error}`);
    }
  }
};





