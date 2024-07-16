import axios from "axios";
import { User } from "../types/types";

export const updateUser = async (idUser: string, updatedUser:{userName:string, userLastName:string, userEmail:string, userGender:string, userTelephone:string}): Promise<User> => {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/user/${idUser}`, updatedUser);
    return response.data;
};