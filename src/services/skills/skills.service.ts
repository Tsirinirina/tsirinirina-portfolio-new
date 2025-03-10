import apiClient from "@/utils/api.clients";
import { Skill, SkillDTO } from "./skills";

export const GetAllSkill = async (): Promise<Skill | any> => {
  try {
    const { data } = await apiClient.get("/skill");
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const GetSkillById = async (id: string): Promise<Skill | any> => {
  try {
    const data = await apiClient.get(`/skill/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const CreatSkill = async (newData: SkillDTO) => {
  try {
    const data = await apiClient.post("/skill", newData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de l'envoi des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const UpdateSkillData = async (id: string, updatedData: SkillDTO) => {
  try {
    const data = await apiClient.patch(`/skill/${id}`, updatedData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la mise à jour des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const DeleteSkillData = async (id: string) => {
  try {
    const data = await apiClient.delete(`/skill/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la suppression des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};
