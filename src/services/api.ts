import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  // TODO: Get from .env
  baseURL: 'http://35.247.207.98:3000/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async config => {
  const newConfig = config;
  const token = getToken();
  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }
  return newConfig;
});

export default api;
