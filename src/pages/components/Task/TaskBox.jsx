import './TaskBox.css'
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import toast from "react-hot-toast";
import { completeTask, createTask } from "../../../services/tasksService";

function TaskBox({ tasks, setTasks }) {

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

  return (
    <section className="task-box">

      <div className="task-header">
        <h2>Tarefas</h2>
      </div>

      <TaskInput onAdd={handleAddTask} />

      <TaskList 
        tasks={tasks}
        onFinish={handleToggleTask}
      />

    </section>
  );
}

export default TaskBox;