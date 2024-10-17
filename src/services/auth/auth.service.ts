import axiosInstance from "@/core/api.client";
import { Auth, AuthDTO, AuthResponse } from "./auth.model";
import { APIResponse } from "@/core/api.response";

/**
 * Authenticate User
 * @param auth
 * @returns
 */
export const authentication = async (auth: AuthDTO) => {
  try {
    const response: APIResponse<AuthResponse> = await axiosInstance.post(
      "/authentication/login",
      JSON.stringify(auth)
    );

    return response;
  } catch (error) {
    console.error("Error on login Auth:", error);
    throw error;
  }
};
