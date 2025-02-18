import mongoose from "mongoose";

const TareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
}, {
  collection: "tareas",
  timestamps: true
});

export default mongoose.model("Tarea", TareaSchema);
