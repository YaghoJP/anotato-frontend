import api from "./api";

export async function registerRequest(email, password) {
    const response = await api.post("/users", {
        email,
        password
    });

    return response.data;
}

export async function loginRequest(email, password) {

    console.log(email, password);

    const response = await api.post("/users/login", {
        email,
        password
    });

    localStorage.setItem("token", response.data.token);

    return response.data;
}

export function logout(){
    localStorage.removeItem("token");
}

export function getToken(){
    return localStorage.getItem("token");
}