import './TaskList.css'
import TaskItem from "./TaskItem";

function TaskList({ tasks, onFinish }) {
  return (
    <div className="task-list">
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onFinish={onFinish}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;