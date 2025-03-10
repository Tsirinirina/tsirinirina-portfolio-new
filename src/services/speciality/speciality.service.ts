import apiClient from "@/utils/api.clients";
import { Speciality, SpecialityDTO } from "./speciality";

export const GetAllSpeciality = async (): Promise<Speciality | any> => {
  try {
    const { data } = await apiClient.get("/speciality");
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const GetSpecialityById = async (
  id: string
): Promise<Speciality | any> => {
  try {
    const data = await apiClient.get(`/speciality/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const CreatSpeciality = async (newData: SpecialityDTO) => {
  try {
    const data = await apiClient.post("/speciality", newData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de l'envoi des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const UpdateSpecialityData = async (
  id: string,
  updatedData: SpecialityDTO
) => {
  try {
    const data = await apiClient.patch(`/speciality/${id}`, updatedData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la mise à jour des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const DeleteSpecialityData = async (id: string) => {
  try {
    const data = await apiClient.delete(`/speciality/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la suppression des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};
