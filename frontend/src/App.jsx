import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API_URL = "http://localhost:5000/api/tareas";

function App() {
  const [tasks, setTasks] = useState([]);

  // Obtener tareas
  const fetchTasks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Agregar tarea
  const addTask = async (task) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  };

  // Eliminar tarea
  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mt-4 text-primary">Mi Aplicación de Tareas</h1>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
