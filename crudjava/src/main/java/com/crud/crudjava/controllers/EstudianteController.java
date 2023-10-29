package com.crud.crudjava.controllers;

import com.crud.crudjava.dao.EstudianteDao;
import com.crud.crudjava.models.Estudiante;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EstudianteController {
    @Autowired
    private EstudianteDao estudianteDao;

    @RequestMapping (value="api/estudiantes")
    public List<Estudiante> obtenerEstudiantes(){
        return estudianteDao.obtenerEstudiantes();
    }

    @RequestMapping (value = "api/estudiantes/{id}")
    public Estudiante obtenerEstudiantePorId(@PathVariable int id){
        return estudianteDao.obtenerEstudiantePorId(id);
    }

    @RequestMapping (value = "api/estudiantes/{id}", method = RequestMethod.DELETE)
    public void eliminarEstudiante(@PathVariable int id){
        estudianteDao.eliminarEstudiante(id);
    }

    @RequestMapping(value = "api/estudiantes", method = RequestMethod.POST)
    public void registrarUsuario(@RequestBody Estudiante estudiante){
        estudianteDao.registrarEstudiante(estudiante);
    }

    @RequestMapping (value = "api/estudiantes/{id}", method = RequestMethod.PUT)
    public void editarEstudiante(@PathVariable int id ,@RequestBody Estudiante estudiante){
        estudianteDao.editarEstudiante(id, estudiante);
    }
}
