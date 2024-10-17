// import axios from "axios";
// import {
//   AccessLevel,
//   CreateAccessLevelDto,
//   UpdateAccessLevelDto,
// } from "./access-level.model";
// import {
//   CreateDtoWithHistory,
//   UpdateDtoWithHistory,
// } from "../history/history.models";

// export async function getAllAccessLevel(): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.get(`${api.accessLevel.index}/all`, {
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

// export async function getPaginatedAccessLevel(
//   page: number,
//   pageSize: number,
//   filterKeywords: FilterKeywords[],
//   searchKeywords: string
// ): Promise<AccessLevel[] | any> {
//   const keywords = ExtractFilterKeywords(filterKeywords);
//   const search = `&search=${searchKeywords}`;
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const sorting = `&sortBy=createdAt&sortOrder=-1`;

//     const response = await axios.get(
//       `${
//         api.accessLevel.index
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

// export async function createAccessLevel(
//   createAccessLevelDtoWithHistory: CreateDtoWithHistory<CreateAccessLevelDto>
// ): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.post(
//       `${api.accessLevel.index}`,
//       JSON.stringify(createAccessLevelDtoWithHistory),
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

// export async function updateAccessLevel(
//   id: string,
//   updateAccessLevelDtoWithHistory: UpdateDtoWithHistory<UpdateAccessLevelDto>
// ): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.patch(
//       `${api.accessLevel.index}/${id}`,
//       JSON.stringify(updateAccessLevelDtoWithHistory),
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

// export async function getAccessLevelById(id: string): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.get(`${api.accessLevel.index}/${id}`, {
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

// export async function deleteAccessLevel(id: string): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");

//     const response = await axios.delete(`${api.accessLevel.index}/${id}`, {
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
