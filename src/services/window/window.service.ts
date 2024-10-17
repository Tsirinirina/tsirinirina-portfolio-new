import axiosInstance from "@/core/api.client";
import { APIResponse } from "@/core/api.response";
import { UpdateDtoWithHistory } from "../history/history.models";
import { UpdateWindowDto, Window } from "./window.model";

export async function getAllWindow() {
  try {
    const response: APIResponse<Window[]> = await axiosInstance.get(
      `/window/all`
    );

    return response;
  } catch (error) {
    console.error("Error on Get All Window:", error);
    throw error;
  }
}

export async function getWindowById(id: string) {
  try {
    const response: APIResponse<Window[]> = await axiosInstance.get(
      `/window/${id}`
    );

    return response;
  } catch (error) {
    console.error("Error on Get All Window:", error);
    throw error;
  }
}

export async function updateWindowWithHistory(
  id: string,
  updateWindowDtoWithHistory: UpdateDtoWithHistory<UpdateWindowDto>
): Promise<any> {
  try {
    const response: APIResponse<Window> = await axiosInstance.patch(
      `/window/${id}`,
      JSON.stringify(updateWindowDtoWithHistory)
    );
    return response;
  } catch (error) {
    console.error("Error on login Auth:", error);
    throw error;
  }
}

export async function updateWindow(
  id: string,
  updateWindowDto: UpdateWindowDto
): Promise<any> {
  try {
    const response: APIResponse<Window> = await axiosInstance.patch(
      `/window/${id}`,
      JSON.stringify(updateWindowDto)
    );
    return response;
  } catch (error) {
    console.error("Error on login Auth:", error);
    throw error;
  }
}

export async function setUserInWindow(updateWindowDto: {
  windowId: string;
  windowData: UpdateWindowDto;
}) {
  try {
    const response: APIResponse<Window> = await axiosInstance.patch(
      `/window`,
      JSON.stringify(updateWindowDto)
    );
    return response;
  } catch (error) {
    console.error("Error on updating agent in window:", error);
    throw error;
  }
}

export async function removeUserInWindow(updateWindowDto: {
  windowId: string;
  windowData: UpdateWindowDto;
}) {
  try {
    const response: APIResponse<Window> = await axiosInstance.patch(
      `/window`,
      JSON.stringify(updateWindowDto)
    );
    return response;
  } catch (error) {
    console.error("Error on updating agent in window:", error);
    throw error;
  }
}
