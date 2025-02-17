const Tarea = require("../models/tarea.model");

// Obtener todas las tareas
exports.obtenerTareas = async (req, res) => {
  const tareas = await Tarea.find();
  res.json(tareas);
};

// Crear una nueva tarea
exports.crearTarea = async (req, res) => {
  const { titulo, descripcion } = req.body;
  const nuevaTarea = new Tarea({ titulo, descripcion });
  await nuevaTarea.save();
  res.status(201).json(nuevaTarea);
};

// Eliminar una tarea por ID
exports.eliminarTarea = async (req, res) => {
  const { id } = req.params;
  await Tarea.findByIdAndDelete(id);
  res.status(204).send();
};
