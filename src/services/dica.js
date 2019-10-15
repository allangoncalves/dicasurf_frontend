import axios from "axios";
export const DICA_API = axios.create({
  baseURL: process.env.VUE_APP_DICA_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
