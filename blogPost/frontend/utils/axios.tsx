import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8888",
  headers: {
    Authorization:
      typeof window !== "undefined" ? localStorage.getItem("token") : null,
    // "Content-Type": "application/json",
  },
});
