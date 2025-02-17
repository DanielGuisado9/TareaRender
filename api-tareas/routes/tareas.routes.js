const express = require("express");
const router = express.Router();
const tareasController = require("../controllers/tareas.controller");

router.get("/", tareasController.obtenerTareas);
router.post("/", tareasController.crearTarea);
router.delete("/:id", tareasController.eliminarTarea);

module.exports = router;
