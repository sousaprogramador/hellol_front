import axios from "axios";
const apiURLEnv = "http://localhost:3333";
const api = axios.create({
  baseURL: apiURLEnv,
  headers: {
    Accept: 'application/json',
  }
});

export default api;
