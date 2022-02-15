import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export const httpClient = (): AxiosInstance => {
  const instance = axios.create();
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );
  return instance;
};
