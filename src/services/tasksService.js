import api from "./api";

export async function getTasks(){
    const response = await api.get("/tasks/user");
    return response.data;
}

export async function createTask(title){
    const response = await api.post("/tasks",{
        title
    });

    return response.data;
}

export async function completeTask(id) {
    const response = await api.put(`/tasks/complete/${id}`);
    return response.data;
}