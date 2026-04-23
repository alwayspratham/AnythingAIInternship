import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask, updateTask } from "../api";

export default function Dashboard({ setPage }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Load tasks
  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // Create task
  const addTask = async () => {
    if (!title.trim()) return;

    await createTask({ title, description });

    setTitle("");
    setDescription("");
    loadTasks();
  };

  // Delete task
  const removeTask = async (id) => {
    await deleteTask(id);

    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Toggle checkbox (mark complete/incomplete)
  const toggleTask = async (task) => {
  const updatedValue = !task.is_completed;

  await updateTask(task.id, {
    is_completed: updatedValue,
  });

  setTasks((prev) =>
    prev.map((t) =>
      t.id === task.id ? { ...t, is_completed: updatedValue } : t
    )
  );
};

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    setPage("auth");
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={logout}>Logout</button>

      <h3>Create Task</h3>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
      />

      <button onClick={addTask}>Add</button>

      <h3>Tasks</h3>

      {tasks.length === 0 && <p>No tasks found</p>}

      {tasks.map((t) => (
        <div
          key={t.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "8px",
          }}
        >
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={t.is_completed  || false}
            onChange={() => toggleTask(t)}
          />

          {/* Title */}
          <span
            style={{
              textDecoration: t.completed ? "line-through" : "none",
            }}
          >
            {t.title}
          </span>

          {/* Delete */}
          <button onClick={() => removeTask(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}