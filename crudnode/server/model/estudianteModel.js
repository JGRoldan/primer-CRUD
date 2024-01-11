const db = require('../config/db');

const obtenerEstudiantes = () =>{
  return new Promise((resolve, reject) =>{
    db.query('SELECT * from estudiante', (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
        })
  })
}

const obtenerEstudiantePorId = (id) =>{
  return new Promise((resolve, reject) =>{
    db.query('SELECT * FROM estudiante WHERE id_est = ?',
      [id],
      (err, res) => {
          if (err) {
              reject(err);
          } else {
            if (res.length === 0) {
              reject(new Error('Estudiante no encontrado'));
            } else {
              resolve(res[0]);
            }
          }
      }
    );
  })
}

const crearEstudiante = ({ nombre, apellido, email }) =>{
  return new Promise((resolve, reject) =>{
    db.query('INSERT INTO estudiante (nombre, apellido, email) VALUES (?,?,?)',
      [nombre, apellido, email],
      (err, res) => {
          if (err) {
              reject(new Error(`${err.message}`));
          } else {
              resolve({Exito:"Estudiante creado correctamente"});
          }
      })
  })
}

const borrarEstudiante = (id) =>{
  return new Promise((resolve, reject) =>{
    db.query('DELETE FROM estudiante WHERE id_est = ?',
      [id],
      (err, res) => {
          if (err) {
              reject(err);
          } else {
            if (res.affectedRows === 0) {
              reject(new Error('Estudiante no encontrado'));
            } else {
              resolve({ Exito: 'Estudiante eliminado correctamente'});
            }
          }
      }
    );
  })
}

const actualizarEstudiante = (id, { nombre, apellido, email }) =>{

  return new Promise((resolve, reject) =>{  
      db.query(
        'UPDATE estudiante SET nombre = ?, apellido = ?, email = ? WHERE id_est = ?',
        [nombre, apellido, email, id],
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            if (res.affectedRows === 0) {
              reject(new Error('Estudiante no encontrado'));
            } else {
              resolve({ Exito: 'Estudiante actualizado correctamente' });
            }
          }
        }
      );
  })
}

module.exports = {
  obtenerEstudiantes,
  obtenerEstudiantePorId,
  crearEstudiante,
  borrarEstudiante,
  actualizarEstudiante
};