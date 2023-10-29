package com.crud.crudjava.dao;

import com.crud.crudjava.models.Estudiante;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class EstudianteDaoImplementacion implements EstudianteDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Estudiante> obtenerEstudiantes() {
        String query = "FROM Estudiante";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Estudiante obtenerEstudiantePorId(int id) {
        return entityManager.find(Estudiante.class, id);
    }

    @Override
    public void eliminarEstudiante(int id) {
        Estudiante estudiante = entityManager.find(Estudiante.class, id);
        entityManager.remove(estudiante);
    }

    @Override
    public void registrarEstudiante(Estudiante estudiante) {
        entityManager.merge(estudiante);
    }

    @Override
    public void editarEstudiante(int id, Estudiante estudiante) {
        Estudiante estudianteExistente = entityManager.find(Estudiante.class, id);
        if(estudianteExistente != null){
            estudianteExistente.setNombre(estudiante.getNombre());
            estudianteExistente.setApellido(estudiante.getApellido());
            estudianteExistente.setEmail(estudiante.getEmail());
            entityManager.merge(estudianteExistente);
        }
    }
}
