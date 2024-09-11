package utn.estudiantes.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.estudiantes.modelo.Estudiantes;
import utn.estudiantes.repositorio.EstudianteRepositorio;

import java.util.List;

@Service
public class EstudianteServicio implements IEstudianteServicio {

    @Autowired
    private EstudianteRepositorio estudianteRepositorio;

    @Override
    public List<Estudiantes> listarEstudiantes() {
        List<Estudiantes> estudiantes = estudianteRepositorio.findAll();
        return estudiantes;
    }

    @Override
    public Estudiantes buscarEstudiantePorId(Integer idEstudiante) {
        Estudiantes estudiantes = estudianteRepositorio.findById(idEstudiante).orElse(null);
        return estudiantes;
    }

    @Override
    public void guardarEstudiante(Estudiantes estudiantes) {
       estudianteRepositorio.save(estudiantes);
    }

    @Override
    public void eliminarEstudiante(Estudiantes estudiantes) {
       estudianteRepositorio.delete(estudiantes);
    }
}
