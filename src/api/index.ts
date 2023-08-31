import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
};

export const axiosInstance: AxiosInstance = axios.create(axiosConfig);
