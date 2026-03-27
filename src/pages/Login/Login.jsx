import { Link } from 'react-router-dom';
import './Login.css'

function Login(){

    return(
        <div className='login-container'>
            <form className='login-form'>
                <h1 className='login-title'>Entrar</h1>

                <input 
                    className='login-input'
                    type='email' 
                    placeholder='Email'
                />

                <input 
                    className='login-input password'
                    type='password'     
                    placeholder='Senha'
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