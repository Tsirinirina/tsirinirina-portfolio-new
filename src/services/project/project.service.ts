import apiClient from "@/utils/api.clients";
import { Project, ProjectDTO } from "./project";

export const GetAllProjectData = async (): Promise<Project[] | any> => {
  try {
    const { data } = await apiClient.get("/project");
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const PostProjectData = async (newData: ProjectDTO) => {
  try {
    const { data } = await apiClient.post("/project", newData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de l'envoi des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const UpdateProjectData = async (updatedData: ProjectDTO) => {
  try {
    const { data } = await apiClient.patch("/project", updatedData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la mise à jour des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const DeleteProjectData = async (name: string) => {
  try {
    const { data } = await apiClient.delete("/project", {
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
