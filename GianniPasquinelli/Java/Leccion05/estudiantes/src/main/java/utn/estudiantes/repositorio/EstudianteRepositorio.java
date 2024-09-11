package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiantes;

public interface EstudianteRepositorio extends JpaRepository<Estudiantes, Integer> {

}
