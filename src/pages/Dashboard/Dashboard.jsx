import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import "./Dashboard.css";
import { getTasks } from "../../services/tasksService";
import TaskBox from "../components/Task/TaskBox";

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

            <TaskBox 
            tasks={tasks}
            setTasks={setTasks}
            />
        </main>
    </div>
    );
}