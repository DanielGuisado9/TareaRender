import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path"; // ✅ Importado correctamente
import { fileURLToPath } from "url";
import tareasRoutes from "./routes/tareas.routes.js";

// Convertir __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Verificar la ruta donde se busca el modelo
console.log("Intentando cargar el modelo desde:", path.resolve(__dirname, "models/tarea.model.js"));

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("✅ Conectado a MongoDB Atlas");
  
    // Verificar si la base de datos tiene datos
    const tareas = await mongoose.connection.db.collection("tareas").find().toArray();
    console.log("Tareas encontradas en la base de datos:", tareas);

    if (tareas.length === 0) {
        console.warn("⚠️ La base de datos está vacía, inserta datos manualmente.");
      }
  })
  .catch((error) => {
    console.error("❌ Error conectando a MongoDB:", error);
    process.exit(1);
  });
  

// Usar rutas de tareas
app.use("/tareas", tareasRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
