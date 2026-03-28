import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import "./Dashboard.css";
import { getTasks } from "../../services/tasksService";

export default function Dashboard() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const data = await getTasks();
            setTasks(data);
        }

        fetchData();
    }, []);

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendentes = totalTasks - completedTasks;

    return (
    <div className="dashboard">
        
        <Header 
            title="Dashboard"
        />

        <main className="dashboard-main">

            <section className="cards">
                <Card title="Total" value={totalTasks}/>
                <Card title="Concluídas" value={completedTasks}/>
                <Card title="Pendentes" value={pendentes}/>
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