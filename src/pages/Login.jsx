import { useState } from "react";
import { loginRequest } from "../services/authService";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const response = await loginRequest(email, password);

      // 🔥 salvar token
      localStorage.setItem("token", response.token);

      toast.success("Login realizado!");

      navigate("/dashboard", { replace: true });

    } catch (error) {
      const message =
        error.response?.data?.error || "Erro ao logar";

      toast.error(message);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        
        <h1 className="text-2xl font-bold mb-6 text-center">
          Entrar
        </h1>

        <input
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 border rounded-lg mb-6"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
        >
          Entrar
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Não tem conta?{" "}
          <Link to="/register" className="font-medium text-blue-600 hover:underline">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}