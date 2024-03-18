import { fetchApi } from "./fetchApi";
import { transformObjToUrlQuery } from "./utils";

export const listSavingsPackages = async (params = {}) => {
  return fetchApi.get(`/public/v1/savings${transformObjToUrlQuery(params)}`);
};

export const listTokens = async () => {
  return fetchApi.get(`/public/v1/tokens`);
};