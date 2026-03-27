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

    return response.data;
}