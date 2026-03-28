import './TaskItem.css'

function TaskItem({ task, onFinish }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      
      <span className="task-title">
        {task.title}
      </span>

      <button
        className="btn-finish"
        onClick={() => onFinish(task.id)}
      >
        {task.completed ? "Desfazer" : "Finalizar"}
      </button>

    </li>
  );
}

export default TaskItem;