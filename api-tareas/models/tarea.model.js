const mongoose = require("mongoose");

const TareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
}, {
  timestamps: true // Agrega `createdAt` y `updatedAt`
});

module.exports = mongoose.model("Tarea", TareaSchema);
