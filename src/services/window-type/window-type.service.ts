// import { FilterKeywords } from "@/components/shared/filter/filter.constant";
// import { api } from "@/cores/constant/constant.resource.api";
// import { ExtractFilterKeywords } from "@/utils/extract.filterKeywords";
// import { getLocalStorageItem } from "@/utils/localStorage.utils";
// import axios from "axios";
// import { UpdateOrCreateWindowType } from "./window-type.model";
// import {
//   CreateDtoWithHistory,
//   UpdateDtoWithHistory,
// } from "../history/history.models";

// export async function getAllWindowType(): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.get(`${api.windowType.index}/all`, {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response;
//   } catch (error: any) {
//     return error.response;
//   }
// }

// export async function getPaginatedWindowType(
//   page: number,
//   pageSize: number,
//   filterKeywords: FilterKeywords[],
//   searchKeywords: string
// ): Promise<Window[] | any> {
//   const keywords = ExtractFilterKeywords(filterKeywords);
//   const search = `&search=${searchKeywords}`;
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const sorting = `&sortBy=createdAt&sortOrder=-1`;

//     const response = await axios.get(
//       `${
//         api.windowType.index
//       }?page=${page.toString()}&pageSize=${pageSize.toString()}${search}${keywords.toString()}`,

//       {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return response;
//   } catch (error: any) {
//     return error.response;
//   }
// }

// export async function createWindowType(
//   windowTypeDtoWithHistory: CreateDtoWithHistory<UpdateOrCreateWindowType>
// ): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.post(
//       `${api.windowType.index}`,
//       JSON.stringify(windowTypeDtoWithHistory),
//       {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return response;
//   } catch (error: any) {
//     return error.response;
//   }
// }

// export async function updateWindowType(
//   id: string,
//   windowTypeDtoWithHistory: UpdateDtoWithHistory<UpdateOrCreateWindowType>
// ): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.patch(
//       `${api.windowType.index}/${id}`,
//       JSON.stringify(windowTypeDtoWithHistory),
//       {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return response;
//   } catch (error: any) {
//     return error.response;
//   }
// }

// export async function getWindowTypeById(id: string): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.get(`${api.windowType.index}/${id}`, {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response;
//   } catch (error: any) {
//     return error.response;
//   }
// }

// export async function deleteWindowType(id: string): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.delete(`${api.windowType.index}/${id}`, {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response;
//   } catch (error: any) {
//     return error.response;
//   }
// }
