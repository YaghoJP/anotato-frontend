import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Register from "../pages/Register/Register";
import { getToken } from "../services/authService";

export default function AppRoutes(){

    const token = getToken();

    console.log(token)

    return(
        <BrowserRouter>
            <Routes>
                <Route 
                path="/" 
                element={
                    token 
                        ? <Navigate to="/dashboard"/>
                        : <Navigate to="/login"/>
                    }/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
}