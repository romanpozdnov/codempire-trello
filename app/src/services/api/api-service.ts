import axios from "axios";

import { BASE_URL } from "./api-service.constants";

const getInstance = () => {
  const instance = axios.create({
    baseURL: `${BASE_URL}`,
  });
  return instance;
}

export const fetchData = (requestUrl: string, params?: {}): any => {
  return getInstance().get(`${requestUrl}`, { params });
};

export const postData = (requestUrl: string, payload: any): any => {
  return getInstance().post(`${requestUrl}`, payload);
};

export const changeData = (requestUrl: string, payload: any): any => {
  return getInstance().patch(`${requestUrl}`, payload);
};

export const deleteData = (requestUrl: string, params?: any): any => {
  return getInstance().delete(`${requestUrl}`, params);
};
