import axios from "axios";

const API = "http://127.0.0.1:8000/api/v1";

// Create a reusable Axios instance
const api = axios.create({
  baseURL: API,
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle responses globally
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Don’t ignore errors like your current code does
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error.response?.data || error.message);
  }
);

// API functions
export const registerUser = (data) => api.post("/auth/register", data);

export const loginUser = (data) => {
  const formData = new URLSearchParams();

  formData.append("username", data.email); // IMPORTANT mapping
  formData.append("password", data.password);

  return api.post("/auth/login", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const getTasks = () => api.get("/tasks");

export const createTask = (data) => api.post("/tasks/create", data);

export const deleteTask = (id) => api.delete(`/tasks/delete/${id}`);

export const updateTask = (id, data) =>
  api.put(`/tasks/update/${id}`, data);