import { SocialType, SocialTypeDTO } from "./social";

export const GetSocialData = async (): Promise<SocialType | any> => {
  try {
    const res = await fetch(`/api/social`, {
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

export const PostSocialData = async (updatedData: SocialTypeDTO) => {
  try {
    const res = await fetch(`/api/social`, {
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

export const UpdateSocialData = async (updatedData: SocialTypeDTO) => {
  try {
    const res = await fetch(`/api/social`, {
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
