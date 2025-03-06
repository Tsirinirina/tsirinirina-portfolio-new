import { Personal, PersonalDTO } from "./personal";

export const GetPersonalData = async (): Promise<Personal | any> => {
  try {
    const res = await fetch(`/api/personal`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Erreur API : ${res.statusText}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return { title: "Erreur de chargement" };
  }
};

export const UpdatePersonalData = async (updatedData: PersonalDTO) => {
  try {
    const res = await fetch(`/api/personal`, {
      method: "PATCH",
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Erreur API : ${res.statusText}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return { title: "Erreur de chargement" };
  }
};
