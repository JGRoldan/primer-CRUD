const express = require('express')
const router = express.Router()
const EstudianteController = require('../controllers/estudianteController.js')

router
    .get('/api/estudiantes', EstudianteController.obtenerEstudiantes)
    .get('/api/estudiantes/:id', EstudianteController.obtenerEstudiantePorId)
    .post('/api/estudiantes', EstudianteController.crearEstudiante)
    .put('/api/estudiantes/:id', EstudianteController.actualizarEstudiante)
    .delete('/api/estudiantes/:id', EstudianteController.borrarEstudiante)

module.exports = router