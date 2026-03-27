import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { loginRequest } from '../../services/authService';

function Login(){

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleLogin(e){
        e.preventDefault();

        try {
            console.log(email, password)

            await loginRequest(email, password);

            toast.success();

            navigate('/')

        } catch (error) {
            const message = error.response?.data?.error || "Erro ao cadastrar."
            toast.error(message);
        }
    }

    return(
        <div className='login-container'>
            <form className='login-form' onSubmit={handleLogin}>
                <h1 className='login-title'>Entrar</h1>

                <input 
                    className='login-input'
                    type='email' 
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    className='login-input password'
                    type='password'     
                    placeholder='Senha'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button 
                    type='submit'
                    className='login-button'
                >
                    Entrar
                </button>

                <p className='login-footer'>
                    Não tem conta?{" "}
                    <Link to="/register" className='login-link'>
                        Criar
                    </Link>
                </p>

            </form>
        </div>
    )
}

export default Login;