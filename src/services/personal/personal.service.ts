import apiClient from "@/utils/api.clients";
import { Personal, PersonalDTO } from "./personal";

export const GetPersonalData = async (): Promise<Personal | any> => {
  try {
    const res = await fetch(`/api/personal`, {
      cache: "no-store",
    });

    const { data } = await apiClient.get("/personal");
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const UpdatePersonalData = async (updatedData: PersonalDTO) => {
  try {
    const { data } = await apiClient.patch("/personal", updatedData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la mise à jour des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};
