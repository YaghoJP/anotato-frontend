import './TaskCompletedModal.css'
import TaskList from '../Task/TaskList';

function TaskCompletedModal({ isOpen, onClose, tasks}) {
  if (!isOpen) return null;

  
  const completedTasks = tasks.filter(task => task.completed);
  console.log(completedTasks);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <h2>Tarefas Concluídas</h2>
          <button onClick={onClose}>X</button>
        </div>

        {completedTasks.length === 0 ? (
          <p className="empty-message">
            Nenhuma tarefa concluída ainda.
          </p>
        ) : (
          <TaskList 
            tasks={tasks}
          />
        )}

      </div>
    </div>
  );
}

export default TaskCompletedModal;