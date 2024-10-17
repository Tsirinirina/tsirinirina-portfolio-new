// import { EntityName } from "@/cores/constant/constant.history";
// import { api } from "@/cores/constant/constant.resource.api";
// import { getLocalStorageItem } from "@/utils/localStorage.utils";
// import axios from "axios";

// export async function GetHistoryByTargetId(targetId: string): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");
//     const response = await axios.get(`${api.history.index}/all/${targetId}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response;
//   } catch (error: any) {
//     return error.response;
//   }
// }

// export async function GetHistoryByEntityName(
//   entityName: EntityName
// ): Promise<any> {
//   try {
//     const token = getLocalStorageItem("loginAccessToken");
//     const response = await axios.get(
//       `${api.history.index}/entity/${entityName}`,
//       {
//         headers: {
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
