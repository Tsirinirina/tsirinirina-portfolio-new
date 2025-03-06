import apiClient from "@/utils/api.clients";
import { Certificate, CertificateDTO } from "./certificat";

export const GetAllCertificate = async (): Promise<Certificate | any> => {
  try {
    const data = await apiClient.get("/certificate");
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const GetCertificateById = async (
  id: string
): Promise<Certificate | any> => {
  try {
    const data = await apiClient.get(`/certificate/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const CreatCertificate = async (newData: CertificateDTO) => {
  try {
    const data = await apiClient.post("/certificate", newData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de l'envoi des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const UpdateCertificateData = async (
  id: string,
  updatedData: CertificateDTO
) => {
  try {
    const data = await apiClient.patch(`/certificate/${id}`, updatedData);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la mise à jour des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};

export const DeleteCertificateData = async (id: string) => {
  try {
    const data = await apiClient.delete(`/certificate/${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "Erreur lors de la suppression des données :",
      error?.response?.data || error
    );
    return { title: "Erreur de chargement" };
  }
};
