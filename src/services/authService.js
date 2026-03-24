import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function registerRequest(email, password) {
  return api.post("/users", { email, password });
}

export async function loginRequest(email, password) {
  const response = await api.post("/users/login", {
    email,
    password,
  });

  return response.data;
}

export async function getTasks() {
  const response = await api.get("/tasks");
  return response.data;
}

export async function createTask(title) {
  return api.post("/tasks", { title });
}

export async function updateTask(id, completed) {
  return api.put(`/tasks/${id}`, { completed });
}

export async function deleteTask(id) {
  return api.delete(`/tasks/${id}`);
}