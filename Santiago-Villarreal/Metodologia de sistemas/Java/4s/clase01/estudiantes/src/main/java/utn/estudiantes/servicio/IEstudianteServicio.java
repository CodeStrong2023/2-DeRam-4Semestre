package utn.estudiantes.servicio;

import java.util.List;

import utn.estudiantes.modelo.Estudiantes2023;

public interface IEstudianteServicio {
    public List<Estudiantes2023> listarEstudiantes();
    public Estudiantes2023 buscarEstudiantePorId(Integer idestudiantes2023);
    public void guardarEstudiante(Estudiantes2023 estudiante);
    public void eliminarEstudiante(Estudiantes2023 estudiante);
}
