import axios from 'axios';
import { Member, UpdateMemberDto } from '../types/types';

axios.defaults.withCredentials = true;

export const getMember = async (): Promise<Member[]> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/member`);
    return response.data;
};

export const addMember = async (
    memberName: string, 
    memberLastName: string, 
    memberDescription: string, 
    memberRole: string, 
    memberImage: string, 
    memberLinkedin: string
): Promise<Member> => {
    const result = await axios.post(`${import.meta.env.VITE_API_URL}/member`, { 
        memberName, 
        memberLastName, 
        memberDescription, 
        memberRole, 
        memberImage, 
        memberLinkedin 
    });
    return result.data;
};

export const updateMember = async (idMember: number, updateMemberDto: UpdateMemberDto): Promise<void> => {
    const url = `${import.meta.env.VITE_API_URL}/member/${idMember}`; 
    try {
        const response = await axios.put(url, updateMemberDto);
        return response.data; 
    } catch (error) {
        throw new Error('Error updating member');
    }
};

export const deleteMember = async (idMember: number): Promise<Member> => {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/member/${idMember}`);
    return response.data;
};

