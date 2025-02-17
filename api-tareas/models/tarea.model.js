const mongoose = require("mongoose");

const TareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
});

module.exports = mongoose.model("Tarea", TareaSchema);
