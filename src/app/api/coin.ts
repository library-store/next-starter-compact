import axios from "axios";
import { fetchApi } from "./fetchApi";
import { transformObjToUrlQuery } from "./utils";

export const listSavingsPackages = async (params = {}) => {
  return fetchApi.get(`/public/v1/savings${transformObjToUrlQuery(params)}`);
};

export const listTokens = async () => {
  return fetchApi.get(`/public/v1/tokens`);
};

export const uploadPresigned = async (filename: string) => {
  return fetchApi.post(`/public/v1/upload/presigned`, {
    filename
  });
};

export const putPresignedUrl = async (presignedUrl: string, binary: any) => {
  return axios.put(presignedUrl, binary)
};