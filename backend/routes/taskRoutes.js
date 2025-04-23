const express = require('express');
const router = express.Router();

// Controlador (puede estar en otro archivo, pero para ahora hagámoslo aquí)
const tareas = [];

router.get('/', (req, res) => {
  res.json(tareas);
});

router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Título requerido' });
  }

  const nuevaTarea = { id: tareas.length + 1, title };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = tareas.findIndex(t => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  tareas.splice(index, 1);
  res.status(204).send();
});


module.exports = router;
