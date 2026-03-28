import api from "./api";

export async function getTasks(){
    const response = await api.get("/tasks/user");
    return response.data;
}