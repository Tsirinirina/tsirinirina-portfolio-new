import { APIResponse } from "@/core/api.response";
import axiosInstance from "@/core/api.client";

/**
 * Test API
 * @returns
 */
export const testApi = async () => {
  try {
    const response: APIResponse<{}> = await axiosInstance.get(`/status`);
    return response;
  } catch (error) {
    console.error("Error on login Auth:", error);
    throw error;
  }
};
