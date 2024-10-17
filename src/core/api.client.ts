import envConf from "@/core/env.constant";
import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosInstance = axios.create({
  baseURL: envConf.apiBaseUri,
  timeout: REQUEST_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
