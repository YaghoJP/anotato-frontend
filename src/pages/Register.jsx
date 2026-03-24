import { useState } from "react";
import { registerRequest } from "../services/authService";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    try {
      await registerRequest(email, password);
      toast.success("Usuário criado com sucesso!");
    } catch (error) {
      const message =
        error.response?.data?.error || "Erro ao cadastrar";

      toast.error(message);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Criar conta
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
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white p-3 rounded-lg"
        >
          Cadastrar
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Já tem conta?{" "}
          <Link to="/" className="font-medium text-blue-600 hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}