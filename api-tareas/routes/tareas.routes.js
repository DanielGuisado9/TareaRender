import express from "express";
import tareasController from "../controllers/tareas.controller.js";

const router = express.Router(); // ✅ Se define `router`

// Verificar si el controlador se está importando correctamente
console.log("Tareas Controller:", tareasController);

// Obtener todas las tareas desde MongoDB
router.get("/", tareasController.obtenerTareas);

// Crear una nueva tarea en MongoDB
router.post("/", tareasController.crearTarea);

// Eliminar una tarea por ID en MongoDB
router.delete("/:id", tareasController.eliminarTarea);

export default router;
