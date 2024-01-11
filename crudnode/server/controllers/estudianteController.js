const EstudianteModel = require('../model/estudianteModel');

const obtenerEstudiantes = async (req, res)=> {
  try {
    const resultado = await EstudianteModel.obtenerEstudiantes()
    res.status(200).json(resultado)

  } catch (error) {
    res.status(500).json({ Error: 'Error al obtener los estudiantes', ErrorMessage: error.message});
  }
}

const obtenerEstudiantePorId = async (req, res)=> {
  try {
    const estudianteId = parseInt(req.params.id,10)
    const resultado = await EstudianteModel.obtenerEstudiantePorId(estudianteId)
    res.status(200).json(resultado)

  } catch (error) {
    if (error.message === 'Estudiante no encontrado') {
      return res.status(400).json({ Error: 'Estudiante no encontrado' });
    }
    return res.status(500).json({ Error: `Error al obtener el estudiante ${req.params.id}`, ErrorMessage: error.message });
  }
}

const crearEstudiante = async (req, res)=> {
  try {
    const {estudiante} = req.body;

    if (!estudiante || !estudiante.nombre || !estudiante.apellido || !estudiante.email) {
      return res.status(400).json({ Error: 'Datos de estudiante incompletos o inválidos' });
    }

    const estudianteNuevo = await EstudianteModel.crearEstudiante(estudiante)
    res.status(200).json(estudianteNuevo)

  } catch (error) {
      res.status(500).json({ Error: `Error al crear el estudiante`, ErrorMessage: error.message })
  }
}

const borrarEstudiante = async (req, res)=> {

  try {
    const estudianteId = req.params.id;
    const estudianteBorrado = await EstudianteModel.borrarEstudiante(estudianteId)
    return res.status(200).json(estudianteBorrado);
    
  } catch (error) {
      if (error.message === 'Estudiante no encontrado') {
        return res.status(400).json({ Error: `Estudiante no encontrado: ${req.params.id}` })
      }
      return res.status(500).json({ Error: `Error al borrar el estudiante ${req.params.id}`, ErrorMessage: error.message }) 
  }
}

const actualizarEstudiante = async (req, res)=> {
  try {
    const estudianteId = req.params.id;
    const datosActualizados = req.body;
    const estudianteActualizado = await EstudianteModel.actualizarEstudiante(estudianteId, datosActualizados)
    res.status(200).json(estudianteActualizado)

  } catch (error) {
    if (error.message === 'Estudiante no encontrado') {
      return res.status(400).json({ Error: `Estudiante no encontrado: ${req.params.id}` });
    }
    return res.status(500).json({ Error: `Error al actualizar el estudiante ${req.params.id}`, ErrorMessage: error.message });
  }

}

module.exports = {
    obtenerEstudiantes,
    obtenerEstudiantePorId,
    crearEstudiante,
    borrarEstudiante,
    actualizarEstudiante
};