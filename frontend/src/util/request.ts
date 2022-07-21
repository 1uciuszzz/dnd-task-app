import axios from "axios";
import { getToken } from "./token";

export const request = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 6000,
});

request.interceptors.request.use((config) => {
  config.headers = {
    Authorization: getToken() as string,
  };
  return config;
});
