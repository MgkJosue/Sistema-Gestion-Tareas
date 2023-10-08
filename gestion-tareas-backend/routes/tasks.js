const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/tasks');

// Ruta para obtener todas las tareas
router.get('/', TaskController.getAllTasks);

// Ruta para obtener una tarea por ID
router.get('/:taskId', TaskController.getTaskById);

// Ruta para crear una nueva tarea
router.post('/', TaskController.createTask);

// Ruta para actualizar una tarea por ID
router.put('/:taskId', TaskController.updateTask);

// Ruta para eliminar una tarea por ID
router.delete('/:taskId', TaskController.deleteTask);

module.exports = router;
