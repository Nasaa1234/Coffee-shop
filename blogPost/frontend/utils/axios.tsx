import axios from "axios";

export const instance = axios.create({
  baseURL: "https://backend-nasaa1234.vercel.app",
  headers: {
    Authorization:
      typeof window !== "undefined" ? localStorage.getItem("token") : null,
    // "Content-Type": "application/json",
  },
});
