// import { FilterKeywords } from "@/components/shared/filter/filter.constant";
// import { api } from "@/cores/constant/constant.resource.api";
// import { ExtractFilterKeywords } from "@/utils/extract.filterKeywords";
// import { getLocalStorageItem } from "@/utils/localStorage.utils";
// import axios from "axios";
// import { CreateServiceDto, Service, UpdateServiceDto } from "./service.model";
// import {
//   CreateDtoWithHistory,
//   UpdateDtoWithHistory,
// } from "../history/history.models";

// export async function getAllService(): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.get(`${api.service.index}/all`, {
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

// export async function getPaginatedService(
//   page: number,
//   pageSize: number,
//   filterKeywords: FilterKeywords[],
//   searchKeywords: string
// ): Promise<Service[] | any> {
//   const keywords = ExtractFilterKeywords(filterKeywords);
//   const search = `&search=${searchKeywords}`;
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const sorting = `&sortBy=createdAt&sortOrder=-1`;

//     return await axios.get(
//       `${
//         api.service.index
//       }?page=${page.toString()}&pageSize=${pageSize.toString()}${sorting}${search}${keywords.toString()}`,

//       {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   } catch (error: any) {
//     return error.response;
//   }
// }

// export async function createService(
//   createServiceDtoWithHistory: CreateDtoWithHistory<CreateServiceDto>
// ): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");
//     const response = await axios.post(
//       `${api.service.index}`,
//       JSON.stringify(createServiceDtoWithHistory),
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

// export async function getServiceById(id: string): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.get(`${api.service.index}/${id}`, {
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

// export async function updateService(
//   id: string,
//   updateServiceDtoWithHistory: UpdateDtoWithHistory<UpdateServiceDto>
// ): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.patch(
//       `${api.service.index}/${id}`,
//       JSON.stringify(updateServiceDtoWithHistory),
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

// export async function deleteService(id: string): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.delete(`${api.service.index}/${id}`, {
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
