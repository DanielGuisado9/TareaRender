require("dotenv").config();
const express = require("express");
const cors = require("cors");
const tareasRoutes = require("./routes/tareas.routes"); // Importar las rutas de tareas

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de bienvenida para verificar el despliegue
app.get("/", (req, res) => {
  res.send("API de gestión de tareas funcionando correctamente con datos mockeados");
});

// Usar las rutas definidas en `tareas.routes.js`
app.use("/tareas", tareasRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
