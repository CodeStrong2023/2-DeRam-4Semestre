package utn.estudiantes.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import utn.estudiantes.modelo.Estudiantes2023;
import utn.estudiantes.repositorio.EstudianteRepositorio;

@Service

public class EstudianteServicio implements IEstudianteServicio{
    @Autowired
    private EstudianteRepositorio estudianteRepositorio;

    @Override
    public Estudiantes2023 buscarEstudiantePorId(Integer idestudiantes2023) {
        Estudiantes2023 estudiante = estudianteRepositorio.findById(idestudiantes2023).orElse(null);
        return estudiante;
    }

    @Override
    public void eliminarEstudiante(Estudiantes2023 estudiante) {
        estudianteRepositorio.delete(estudiante);
        
    }

    @Override
    public void guardarEstudiante(Estudiantes2023 estudiante) {
        estudianteRepositorio.save(estudiante);
        
    }

    @Override
    public List<Estudiantes2023> listarEstudiantes() {
        List<Estudiantes2023> estudiantes = estudianteRepositorio.findAll();
        return estudiantes;
    }
    
}
