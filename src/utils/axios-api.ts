import axios, { AxiosInstance  } from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL || 'http://localhost:8080'

const api: AxiosInstance  = axios.create({
    baseURL: `${baseURL}/api`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
    }
})

export default api