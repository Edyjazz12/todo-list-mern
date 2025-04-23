import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({ title });
      setTitle("");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-success">Agregar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Título</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Escribe una tarea"
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Agregar</button>
      </form>
    </div>
  );
};

export default TaskForm;
