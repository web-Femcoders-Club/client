import axios from 'axios';
import { Member, UpdateMemberDto } from '../types/types';

axios.defaults.withCredentials = true;

const API_URL = import.meta.env.VITE_API_URL;

export const getMember = async (): Promise<Member[]> => {
  try {
    const response = await axios.get(`${API_URL}/member`);
    console.log("API response data:", response.data);
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Response is not an array:", response.data);
      return []; 
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error al obtener los miembros:', error.response || error.message);
    } else {
      console.error('Error inesperado:', error);
    }
    throw new Error('Error al obtener los miembros');
  }
};

export const addMember = async (
  memberName: string,
  memberLastName: string,
  memberDescription: string,
  memberRole: string,
  memberImage: string,
  memberLinkedin: string
): Promise<Member> => {
  try {
    const result = await axios.post(`${API_URL}/member`, {
      memberName,
      memberLastName,
      memberDescription,
      memberRole,
      memberImage,
      memberLinkedin
    });
    return result.data;
  } catch (error) {
    throw new Error('Error al agregar el miembro');
  }
};

export const updateMember = async (idMember: number, updateMemberDto: UpdateMemberDto): Promise<void> => {
  const url = `${API_URL}/member/${idMember}`;
  try {
    const response = await axios.put(url, updateMemberDto);
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar el miembro');
  }
};

export const deleteMember = async (idMember: number): Promise<Member> => {
  try {
    const response = await axios.delete(`${API_URL}/member/${idMember}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al eliminar el miembro');
  }
};


