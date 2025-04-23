const Task = require('../models/Task');

// Obtener todas las tareas
const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Task.find();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener tareas' });
  }
};

// Crear una nueva tarea
const crearTarea = async (req, res) => {
  try {
    const { title } = req.body;
    const nuevaTarea = new Task({ title });
    const tareaGuardada = await nuevaTarea.save();
    res.status(201).json(tareaGuardada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear tarea' });
  }
};

// Actualizar una tarea
const actualizarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tareaActualizada = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.json(tareaActualizada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar tarea' });
  }
};

// Eliminar una tarea
const eliminarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ mensaje: 'Tarea eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar tarea' });
  }
};

module.exports = {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea
};
