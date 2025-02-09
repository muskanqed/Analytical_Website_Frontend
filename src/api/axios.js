import axios from "axios";

const api = axios.create({
    baseURL: "http://54.219.2.190",
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location = "/login";
        }
        return Promise.reject(error);
    },
);

export default api;
