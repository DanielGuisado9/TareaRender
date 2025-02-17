require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de bienvenida para verificar el despliegue
app.get("/", (req, res) => {
  res.send("API de gestión de tareas funcionando correctamente");
});

// Almacén temporal de tareas (en memoria)
let tareas = [];

// Obtener todas las tareas
app.get("/tareas", (req, res) => {
  res.json(tareas);
});

// Crear una nueva tarea
app.post("/tareas", (req, res) => {
  const { titulo, descripcion } = req.body;
  if (!titulo || !descripcion) {
    return res.status(400).json({ error: "Título y descripción son requeridos" });
  }
  const nuevaTarea = { id: tareas.length + 1, titulo, descripcion };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// Eliminar una tarea por ID
app.delete("/tareas/:id", (req, res) => {
  const { id } = req.params;
  const tareaIndex = tareas.findIndex(t => t.id === parseInt(id));
  if (tareaIndex === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }
  tareas.splice(tareaIndex, 1);
  res.status(204).send();
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
