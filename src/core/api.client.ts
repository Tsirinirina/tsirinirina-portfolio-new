import envConf from "@/core/env.constant";
import { CookieName } from "@/utils/cookies.utils";
import axios from "axios";
import Cookies from "js-cookie"; // Use js-cookie on the client side
import { getSession } from "next-auth/react";

const REQUEST_TIMEOUT = 10000;

const axiosInstance = axios.create({
  baseURL: envConf.apiBaseUri,
  timeout: REQUEST_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
