import apiClient from "@/utils/api.clients";
import { UrlType, UrlTypeDTO } from "./url";

export const GetAllUrl = async (): Promise<UrlType | any> => {
  try {
    const data = await apiClient.get("/url");
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const GetUrlById = async (id: string): Promise<UrlType | any> => {
  try {
    const data = await apiClient.get(`/url/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const CreatUrl = async (newData: UrlTypeDTO) => {
  try {
    const data = await apiClient.post("/url", newData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de l'envoi des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const UpdateUrlData = async (id: string, updatedData: UrlTypeDTO) => {
  try {
    const data = await apiClient.patch(`/url/${id}`, updatedData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la mise à jour des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const DeleteUrlData = async (id: string) => {
  try {
    const data = await apiClient.delete(`/url/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la suppression des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};
