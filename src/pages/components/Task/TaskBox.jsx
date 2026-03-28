import './TaskBox.css'
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function TaskBox({ tasks, onAdd, onFinish }) {

  const pendingTasks = tasks.filter(t => !t.completed);

  return (
    <section className="task-box">

      <div className="task-header">
        <h2>Tarefas</h2>
      </div>

      <TaskInput onAdd={onAdd} />

      <TaskList 
        tasks={pendingTasks}
        onFinish={onFinish}
      />

    </section>
  );
}

export default TaskBox;