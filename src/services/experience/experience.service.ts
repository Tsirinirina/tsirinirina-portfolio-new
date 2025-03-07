import apiClient from "@/utils/api.clients";
import { Experience, ExperienceDTO } from "./experience";

export const GetAllExperience = async (): Promise<Experience | any> => {
  try {
    const data = await apiClient.get("/experience");
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const GetExperienceById = async (
  id: string
): Promise<Experience | any> => {
  try {
    const data = await apiClient.get(`/experience/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const CreatExperience = async (newData: ExperienceDTO) => {
  try {
    const data = await apiClient.post("/experience", newData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de l'envoi des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const UpdateExperienceData = async (
  id: string,
  updatedData: ExperienceDTO
) => {
  try {
    const data = await apiClient.patch(`/experience/${id}`, updatedData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la mise à jour des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const DeleteExperienceData = async (id: string) => {
  try {
    const data = await apiClient.delete(`/experience/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la suppression des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};
