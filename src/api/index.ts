import { showError } from '../services/ShowToast';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://accenture-java-desafio.herokuapp.com/',
});

api.interceptors.request.use(async (request: AxiosRequestConfig) => {
  const token = localStorage.getItem('@tokenApp');
  if (
    request.url !== 'login' &&
    request.url !== 'nova-senha' &&
    request.url !== 'usuarios' &&
    !request.url?.includes('altera-senha')
  ) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    showError(error.response?.data.error);
    throw error;
  },
);
export default api;
