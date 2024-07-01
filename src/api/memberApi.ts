import axios from 'axios';
import { Member, UpdateMemberDto } from '../types/types';

axios.defaults.withCredentials = true;

const API_URL = '/api';

export const getMember = async (): Promise<Member[]> => {
  const response = await axios.get(`${API_URL}/member`);
  return response.data;
};

export const addMember = async (memberName: string, memberLastName: string, memberDescription: string, memberRole: string, memberImage: string, memberLinkedin: string): Promise<Member> => {
  const result = await axios.post(`${API_URL}/member`, { memberName, memberLastName, memberDescription, memberRole, memberImage, memberLinkedin });
  return result.data;
};

export const updateMember = async (idMember: number, updateMemberDto: UpdateMemberDto): Promise<void> => {
  const url = `${API_URL}/member/${idMember}`;
  try {
    const response = await axios.put(url, updateMemberDto);
    return response.data;
  } catch (error) {
    throw new Error('Error updating member');
  }
}

export const deleteMember = async (idMember: number): Promise<Member> => {
  const response = await axios.delete(`${API_URL}/member/${idMember}`);
  return response.data;
};

