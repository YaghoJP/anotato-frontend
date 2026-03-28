import Header from "../components/Header/Header";
import "./Dashboard.css";

export default function Dashboard() {

    function handleLogout(){

    }

    return (
    <div className="dashboard">
        
        <Header 
            title="Dashboard"
            onLogout={handleLogout}  
            activeTab="pending"  
        />

        {/* MAIN */}
        <main className="dashboard-main">

        {/* CARDS */}
        <section className="cards">
            <div className="card">
            <p>Total</p>
            <h2>5</h2>
            </div>

            <div className="card">
            <p>Concluídas</p>
            <h2>2</h2>
            </div>

            <div className="card">
            <p>Pendentes</p>
            <h2>3</h2>
            </div>
        </section>

        {/* TASK BOX */}
        <section className="task-box">
            <div className="task-header">
            <h2>Tarefas</h2>
            </div>

            {/* INPUT */}
            <div className="task-create">
            <input placeholder="Nova tarefa..." />
            <button>Adicionar</button>
            </div>

            {/* LISTA (somente pendentes) */}
            <div className="task-list">
            <ul>

                <li>
                <span>Estudar React</span>
                <button className="btn-finish">Finalizar</button>
                </li>

                <li>
                <span>Fazer projeto</span>
                <button className="btn-finish">Finalizar</button>
                </li>

                <li>
                <span>Estudar backend</span>
                <button className="btn-finish">Finalizar</button>
                </li>

            </ul>
            </div>

        </section>
        </main>
    </div>
    );
}