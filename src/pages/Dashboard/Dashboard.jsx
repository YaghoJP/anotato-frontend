import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import "./Dashboard.css";
import { getTasks, completeTask, createTask } from "../../services/tasksService";
import TaskBox from "../components/Task/TaskBox";
import TaskCompletedModal from "../components/TaskCompletedModal/TaskCompletedModal";
import toast from "react-hot-toast";


export default function Dashboard() {

    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const data = await getTasks();
            setTasks(data);
        }

        fetchData();
    }, []);

    const handleAddTask = async (title) => {

        try {
            const newTask = await createTask(title);
            setTasks((prev) => [...prev, newTask]);
            toast.success("Tarefa criada com sucesso.");
        } catch (error) {
        const message = error.response?.data?.error || "Erro ao criar uma nova tarefa.";
        toast.error(message);
        }
    };

    const handleToggleTask = async (id) => {

        try {
        
        await completeTask(id);
        toast.success("Tarefa completada com sucesso.");

        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                ? { ...task, completed: !task.completed }
                : task
            )
            );

        } catch (error) {
        const message = error.response?.data?.error || "Erro ao completar a tarefa.";
        toast.error(message);
        }
    };

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendentes = totalTasks - completedTasks;

    return (
        <div className="dashboard">
            
            <Header 
                title="Dashboard"
                onOpenCompleted={() => setIsModalOpen(true)}
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
                onAdd={handleAddTask}
                onFinish={handleToggleTask}
                />
            </main>

            <TaskCompletedModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                tasks={tasks}
            />

        </div>
    );
}