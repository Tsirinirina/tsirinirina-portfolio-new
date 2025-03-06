import apiClient from "@/utils/api.clients";
import { SocialType, SocialTypeDTO } from "./social";

export const GetSocialData = async (): Promise<SocialType | any> => {
  try {
    const { data } = await apiClient.get("/social");
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const PostSocialData = async (newData: SocialTypeDTO) => {
  try {
    const { data } = await apiClient.post("/social", newData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de l'envoi des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const UpdateSocialData = async (updatedData: SocialTypeDTO) => {
  try {
    const { data } = await apiClient.patch("/social", updatedData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la mise à jour des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const DeleteSocialData = async (name: string) => {
  try {
    const { data } = await apiClient.delete("/social", {
      data: { name },
    });
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la suppression des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};
