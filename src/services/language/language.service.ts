import apiClient from "@/utils/api.clients";
import { Language, LanguageDTO } from "./language";

export const GetAllLanguage = async (): Promise<Language | any> => {
  try {
    const { data } = await apiClient.get("/language");
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const GetLanguageById = async (id: string): Promise<Language | any> => {
  try {
    const data = await apiClient.get(`/language/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const CreatLanguage = async (newData: LanguageDTO) => {
  try {
    const data = await apiClient.post("/language", newData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de l'envoi des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const UpdateLanguageData = async (
  id: string,
  updatedData: LanguageDTO
) => {
  try {
    const data = await apiClient.patch(`/language/${id}`, updatedData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la mise à jour des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const DeleteLanguageData = async (id: string) => {
  try {
    const data = await apiClient.delete(`/language/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la suppression des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};
