import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../services/authService";

export default function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const completedCount = useMemo(
    () => tasks.filter((t) => Boolean(t.completed)).length,
    [tasks],
  );

  async function loadTasks() {
    setIsLoading(true);
    try {
      const data = await getTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (error) {
      const message = error.response?.data?.error || "Erro ao carregar tarefas";
      toast.error(message);
      setTasks([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/", { replace: true });
      return;
    }
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleCreateTask() {
    const title = newTitle.trim();
    if (!title) return;

    setIsCreating(true);
    try {
      await createTask(title);
      setNewTitle("");
      await loadTasks();
      toast.success("Tarefa criada!");
    } catch (error) {
      const message = error.response?.data?.error || "Erro ao criar tarefa";
      toast.error(message);
    } finally {
      setIsCreating(false);
    }
  }

  async function handleToggleTask(task) {
    try {
      await updateTask(task.id, !task.completed);
      setTasks((prev) =>
        prev.map((t) =>
          t.id === task.id ? { ...t, completed: !t.completed } : t,
        ),
      );
    } catch (error) {
      const message = error.response?.data?.error || "Erro ao atualizar tarefa";
      toast.error(message);
    }
  }

  async function handleDeleteTask(task) {
    try {
      await deleteTask(task.id);
      setTasks((prev) => prev.filter((t) => t.id !== task.id));
      toast.success("Tarefa removida!");
    } catch (error) {
      const message = error.response?.data?.error || "Erro ao remover tarefa";
      toast.error(message);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    toast.success("Você saiu.");
    navigate("/", { replace: true });
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">
              {completedCount}/{tasks.length} concluídas
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Sair
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-8">
        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">Total de tarefas</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {tasks.length}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">Concluídas</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {completedCount}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">Pendentes</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {Math.max(tasks.length - completedCount, 0)}
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-bold text-gray-900">Tarefas</h2>
            <button
              onClick={loadTasks}
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Atualizar
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCreateTask();
              }}
              className="w-full rounded-lg border p-3"
              placeholder="Nova tarefa..."
            />
            <button
              onClick={handleCreateTask}
              disabled={isCreating}
              className="w-full rounded-lg bg-blue-500 p-3 font-medium text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-44"
            >
              {isCreating ? "Criando..." : "Adicionar"}
            </button>
          </div>

          <div className="mt-6">
            {isLoading ? (
              <p className="text-sm text-gray-500">Carregando...</p>
            ) : tasks.length === 0 ? (
              <div className="rounded-xl border border-dashed p-6 text-center">
                <p className="font-medium text-gray-800">
                  Nenhuma tarefa ainda
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Crie a primeira tarefa para começar.
                </p>
              </div>
            ) : (
              <ul className="divide-y">
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex items-center justify-between gap-4 py-3"
                  >
                    <label className="flex min-w-0 items-center gap-3">
                      <input
                        type="checkbox"
                        checked={Boolean(task.completed)}
                        onChange={() => handleToggleTask(task)}
                        className="h-4 w-4 accent-blue-600"
                      />
                      <span
                        className={[
                          "truncate text-sm",
                          task.completed
                            ? "text-gray-400 line-through"
                            : "text-gray-900",
                        ].join(" ")}
                      >
                        {task.title}
                      </span>
                    </label>

                    <button
                      onClick={() => handleDeleteTask(task)}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
