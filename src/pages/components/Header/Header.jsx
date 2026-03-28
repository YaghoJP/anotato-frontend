import { useNavigate } from 'react-router-dom';
import { logout } from '../../../services/authService';
import './Header.css'

function Header({
    title
}) {

    const navigate = useNavigate();
    function handleLogout(){
        
        logout();

        navigate("/login");
    }

    return(
        <header className='header-container'>
            <div className='header-content'>
                <div>
                    <h1>{title}</h1>
                </div>
            

                <div className='header-actions'>
                    <button 
                        className="tab active">
                        Pendentes
                    </button>

                    <button
                        className="tab completed">
                        Finalizadas
                    </button>

                    <button onClick={handleLogout} className='btn-logout'>Sair</button>
                </div>
            </div>
        </header>
    )
}

export default Header;