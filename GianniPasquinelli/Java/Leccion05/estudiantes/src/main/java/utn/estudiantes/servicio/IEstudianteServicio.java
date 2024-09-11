package utn.estudiantes.servicio;

import utn.estudiantes.modelo.Estudiantes;

import java.util.List;

public interface IEstudianteServicio {  // Definimos metodos de la interface, que luego implementaremos desde la clase EstudianteServicio
    public List<Estudiantes> listarEstudiantes();
    public Estudiantes buscarEstudiantePorId(Integer idEstudiantes);
    public void guardarEstudiante(Estudiantes estudiantes);  //objeto estudiante de tipo Estudiante
    public void eliminarEstudiante(Estudiantes estudiante);


}
