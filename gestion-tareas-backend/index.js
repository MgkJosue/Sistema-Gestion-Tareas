const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/gestion-tareas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Middleware para procesar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Rutas
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
