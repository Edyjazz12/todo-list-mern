const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-info">Lista de Tareas</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center bg-light mb-2">
            {task.title}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(task.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
