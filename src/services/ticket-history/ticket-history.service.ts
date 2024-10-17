// import {FilterKeywords} from "@/components/shared/filter/filter.constant";
// import {Window} from "@/services/window/window.model";
// import {ExtractFilterKeywords} from "@/utils/extract.filterKeywords";
// import {getLocalStorageItem} from "@/utils/localStorage.utils";
// import axios from "axios";
// import {api} from "@/cores/constant/constant.resource.api";

// export async function getAllTicketsHistory(): Promise<any> {
//     const token = getLocalStorageItem("loginAccessToken");
//     try {
//         const response = await axios.get(`${api.ticketHistory.index}/all`, {
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data.data;
//     } catch (error) {
//         console.error("Error fetching tickets:", error);
//     }
// }

// export async function getPaginatedTicketHistory(
//     page: number,
//     pageSize: number,
//     filterKeywords: FilterKeywords[],
//     searchKeywords: string
// ): Promise<Window[] | any> {
//     const keywords = ExtractFilterKeywords(filterKeywords);
//     const search = `&search=${searchKeywords}`;
//     try {
//         const token = getLocalStorageItem("loginAccessToken");

//         const sorting = `&sortBy=createdAt&sortOrder=-1`;

//         const response = await axios.get(
//             `${
//                 api.ticketHistory.index
//             }?page=${page.toString()}&pageSize=${pageSize.toString()}${search}${sorting}${keywords.toString()}`,

//             {
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         return response.data;
//     } catch (error: any) {
//         return error.response;
//     }
// }
