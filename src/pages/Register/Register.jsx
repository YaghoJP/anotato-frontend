import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useState } from 'react';
import { registerRequest } from '../../services/authService';
import toast from 'react-hot-toast';

function Register(){

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e){
    e.preventDefault();

    try{
  
      await registerRequest(email, password);
      
      toast.success("Conta criada com sucesso!");

      navigate('/login');

    }catch(error){
      const message = error.response?.data?.error || "Erro ao cadastrar."
      toast.error(message);
    }

  }

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleRegister}>

        <h1 className="register-title">Criar conta</h1>

        <input
          className="register-input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="register-input password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="register-button">
          Criar conta
        </button>

        <p className="register-footer">
          Já tem conta?{" "}
          <Link to="/login" className="register-link">
            Entrar
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Register;