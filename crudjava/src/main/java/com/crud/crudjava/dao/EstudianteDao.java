package com.crud.crudjava.dao;

import com.crud.crudjava.models.Estudiante;
import java.util.List;

public interface EstudianteDao {
    List<Estudiante> obtenerEstudiantes();
    Estudiante obtenerEstudiantePorId(int id);
    void eliminarEstudiante(int id);
    void registrarEstudiante(Estudiante estudiante);
    void editarEstudiante(int id, Estudiante estudiante);
}
