// import { FilterKeywords } from "@/components/shared/filter/filter.constant";
// import { api } from "@/cores/constant/constant.resource.api";
// import { ExtractFilterKeywords } from "@/utils/extract.filterKeywords";
// import { getLocalStorageItem } from "@/utils/localStorage.utils";
// import axios from "axios";
// import { CreateDisplayDto, Display, UpdateDisplayDto } from "./display.model";
// import {
//   CreateDtoWithHistory,
//   UpdateDtoWithHistory,
// } from "../history/history.models";

// export async function getAllDisplay(): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.get(`${api.display.index}/all`, {
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

// export async function getPaginatedDisplay(
//   page: number,
//   pageSize: number,
//   filterKeywords: FilterKeywords[],
//   searchKeywords: string
// ): Promise<Display[] | any> {
//   const keywords = ExtractFilterKeywords(filterKeywords);
//   const search = `&search=${searchKeywords}`;
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const sorting = `&sortBy=createdAt&sortOrder=-1`;

//     const response = await axios.get(
//       `${
//         api.display.index
//       }?page=${page.toString()}&pageSize=${pageSize.toString()}${sorting}${search}${keywords.toString()}`,

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

// export async function createDisplay(
//   createDisplayDtoWithHistory: CreateDtoWithHistory<CreateDisplayDto>
// ): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.post(
//       `${api.display.index}`,
//       JSON.stringify(createDisplayDtoWithHistory),
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

// export async function updateDisplay(
//   id: string,
//   updateDisplayDtoWithHistory: UpdateDtoWithHistory<UpdateDisplayDto>
// ): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.patch(
//       `${api.display.index}/${id}`,
//       JSON.stringify(updateDisplayDtoWithHistory),
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

// export async function getDisplayById(id: string): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.get(`${api.display.index}/${id}`, {
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

// export async function deleteDisplay(id: string): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.delete(`${api.display.index}/${id}`, {
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
