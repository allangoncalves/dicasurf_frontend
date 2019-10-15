import axios from "axios";
export const EXTERNAL_API = axios.create({
  baseURL: process.env.VUE_APP_EXTERNAL_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
