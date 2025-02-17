const express = require("express");
const router = express.Router();
const tareasController = require("../controllers/tareas.controller");

// Datos mockeados de tareas
const tareasMockeadas = [
  { id: 1, titulo: "Hacer la compra", descripcion: "Comprar leche, pan y huevos" },
  { id: 2, titulo: "Estudiar Express", descripcion: "Revisar la documentación oficial de Express.js" },
  { id: 3, titulo: "Ir al gimnasio", descripcion: "Entrenar una hora de cardio y pesas" }
];

// Ruta para obtener las tareas mockeadas
router.get("/", (req, res) => {
  res.json(tareasMockeadas);
});

// Rutas normales (sin MongoDB aún)
router.get("/", tareasController.obtenerTareas);
router.post("/", tareasController.crearTarea);
router.delete("/:id", tareasController.eliminarTarea);

module.exports = router;
