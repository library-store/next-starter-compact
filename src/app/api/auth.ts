import { fetchApi } from "./fetchApi";

export const register = async (data: any) => {
  return fetchApi.post("/public/v1/accounts", data);
};

export const login = async (data: any) => {
  return fetchApi.post("/auth/login", data);
};

export const logout = async (data: any) => {
  return fetchApi.post("/auth/logout", data);
};

export const refreshToken = async (data: any) => {
  return fetchApi.post("/auth/token/refresh", data);
};