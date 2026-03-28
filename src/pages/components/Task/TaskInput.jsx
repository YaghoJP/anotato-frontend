import './TaskInput.css'
import { useState } from "react";

function TaskInput({ onAdd }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;

    onAdd(value);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="task-create">
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
}

export default TaskInput;