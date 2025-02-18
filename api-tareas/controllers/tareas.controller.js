import Tarea from "../models/tarea.model.js"; // Asegurar que se importa correctamente

// Obtener todas las tareas desde MongoDB
const obtenerTareas = async (req, res) => {
  try {
    console.log("📢 Buscando tareas en MongoDB...");
    
    const tareas = await Tarea.find({}); // 🔍 Obtener todas las tareas de MongoDB
    console.log("📌 Tareas encontradas:", tareas);

    if (tareas.length === 0) {
      console.warn("⚠️ No se encontraron tareas en la base de datos.");
    }

    res.json(tareas);
  } catch (error) {
    console.error("❌ Error al obtener tareas:", error);
    res.status(500).json({ message: "Error al obtener tareas" });
  }
};


// Crear una nueva tarea en MongoDB
const crearTarea = async (req, res) => {
    try {
      // 🛑 Validación: Comprobar que el cuerpo de la petición tiene los datos correctos
      const { titulo, descripcion } = req.body;
      
      if (!titulo || !descripcion) {
        return res.status(400).json({ message: "Título y descripción son obligatorios" });
      }
  
      console.log("📌 Recibido en el body:", req.body);
  
      // 📌 Crear tarea en MongoDB
      const nuevaTarea = new Tarea({ titulo, descripcion });
      await nuevaTarea.save();
  
      console.log("✅ Tarea guardada correctamente:", nuevaTarea);
      res.status(201).json(nuevaTarea);
    } catch (error) {
      console.error("❌ Error al crear tarea:", error);
      res.status(500).json({ message: "Error al crear tarea", error: error.message });
    }
  };

// Eliminar una tarea por ID en MongoDB
const eliminarTarea = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Validar si el ID es un ObjectId válido de MongoDB
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "ID de tarea inválido" });
      }
  
      const tareaEliminada = await Tarea.findByIdAndDelete(id);
  
      // Verificar si la tarea existía antes de eliminarla
      if (!tareaEliminada) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }
  
      res.json({ message: "✅ Tarea eliminada correctamente", tarea: tareaEliminada });
    } catch (error) {
      console.error("❌ Error al eliminar tarea:", error);
      res.status(500).json({ message: "Error al eliminar tarea", error: error.message });
    }
  };

// ✅ Exportar todas las funciones como un objeto default
const tareasController = {
  obtenerTareas,
  crearTarea,
  eliminarTarea
};

export default tareasController;
