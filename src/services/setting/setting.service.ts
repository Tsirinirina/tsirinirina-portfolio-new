import axiosInstance from "@/core/api.client";
import { APIResponse } from "@/core/api.response";
import { Setting } from "./setting.model";

export async function getAllSetting(): Promise<any> {
  try {
    const response: APIResponse<Setting[]> = await axiosInstance.get(
      `/setting/all`
    );
    return response;
  } catch (error) {
    console.error("Error on Get All Setting:", error);
    throw error;
  }
}

export async function getSettingById(id: string): Promise<any> {
  try {
    const response: APIResponse<Setting> = await axiosInstance.get(
      `/setting/${id}`
    );

    return response;
  } catch (error) {
    console.error("Error on Get Setting:", error);
    throw error;
  }
}
