import axios from "axios";
import { EmailDto, EmailResponse } from "../types/types";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const getAuthHeader = (token: string) => {
  if (!token) {
    throw new Error("Token no proporcionado");
  }
  return { Authorization: `Bearer ${token}` };
};

// Lógica para enviar correos relacionados con mentorías
export const sendMentorshipEmail = async (
  emailData: EmailDto,
  token: string
): Promise<EmailResponse> => {
  if (!token) {
    throw new Error("Token no proporcionado");
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
      throw new Error(
        `Error enviando solicitud de mentoría: ${
          error.response?.data?.message || error.message
        }`
      );
    } else {
      throw new Error(`Error enviando solicitud de mentoría: ${error}`);
    }
  }
};

export const sendDocumentationEmail = async (
  emailData: FormData,
  token: string
): Promise<EmailResponse> => {
  if (!token) {
    throw new Error("Token no proporcionado");
  }

  try {
    const response = await axios.post<EmailResponse>(
      `${BASE_URL}/emails/documentation`,
      emailData,
      {
        headers: {
          ...getAuthHeader(token),
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error details:", error.response?.data);
      throw new Error(
        `Error enviando documentación: ${
          error.response?.data?.message || error.message || "Error desconocido"
        }`
      );
    } else {
      console.error("Unexpected error:", error);
      throw new Error(`Error enviando documentación: ${String(error)}`);
    }
  }
};
