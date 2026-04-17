import axios from "axios";
import { getToken } from "@/lib/session";

export const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000";

export const http = axios.create({
  baseURL: apiBaseUrl,
});

http.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


export function normalizeApiError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message ??
      error.response?.data?.error ??
      error.message;
    return typeof message === "string" ? message : "Something went wrong.";
  }

  return "Something went wrong.";
}
