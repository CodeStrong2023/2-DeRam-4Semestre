package utn.estudiantes;

import java.util.List;
import java.util.Scanner;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import utn.estudiantes.modelo.Estudiantes2023;
import utn.estudiantes.servicio.EstudianteServicio;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner{

	@Autowired
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);

	String nl = System.lineSeparator();

	public static void main(String[] args) {
		logger.info("Iniciando la aplicación...");
		SpringApplication.run(EstudiantesApplication.class, args);
		logger.info("Aplicación finalizada");
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info(nl+ "Ejecutando el metodo run en Spring" + nl);
		var salir = false;
		var consola = new Scanner(System.in);
		while(!salir){
			mostrarMenu();
			salir = ejecutarOpciones(consola);
			logger.info(nl);
		}
	}

	private void mostrarMenu(){
		logger.info(nl);
		logger.info("""
					******* Sistema de Estudiantes *******
					1.Listar estudiante
					2.Buscar estudiante
					3.Agregar estudiante
					4. Modificar estudiante
					5. Eliminar estudiante
					6. Salir
					Elija una opcion>""");
	}

	private boolean ejecutarOpciones(Scanner consola){
		var opcion = Integer.parseInt(consola.nextLine());
		var salir = false;
		switch (opcion) {
			case 1: // Listar
				logger.info(nl+"Listado de Estudiantes: " + nl);
				List<Estudiantes2023> estudiantes = estudianteServicio.listarEstudiantes();
				estudiantes.forEach((estudiante -> logger.info(estudiante.toString()+nl)));
				break;
			case 2: //buscar
				logger.info("Digite el id estudiante a buscar: ");
				var idEstudiante = Integer.parseInt(consola.nextLine());
				Estudiantes2023 estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
				if(estudiante != null){
					logger.info("Estudiante encontrado: " + estudiante + nl);
				}else{
					logger.info("Estudiante no encontrado: " + estudiante + nl);
				}
				break;
			case 3: //agregar 
				logger.info("Agregar estudiante: " + nl);
				logger.info("Nombre: ");
				var nombre = consola.nextLine();
				logger.info("Apellido: ");
				var apellido = consola.nextLine();
				logger.info("Telefono: ");
				var telefono = consola.nextLine();
				logger.info("Email: ");
				var email = consola.nextLine();
				// Crear el objeto estudiante sin el id
				var estudiante1 = new Estudiantes2023();
				estudiante1.setNombre(nombre);
				estudiante1.setApellido(apellido);
				estudiante1.setTelefono(telefono);
				estudiante1.setEmail(email);
				estudianteServicio.guardarEstudiante(estudiante1);
				logger.info("Estudiante agregado: " + estudiante1 + nl);
				break;
			case 4: //modificar
				logger.info("Modificar estudiante: " + nl);
				logger.info("Ingrese el id estudiante: ");
				var idEstudiante1 = Integer.parseInt(consola.nextLine());
				// buscar estudiante a modificar
				Estudiantes2023 estudiante2 = estudianteServicio.buscarEstudiantePorId(idEstudiante1);
				if(estudiante2 != null){
					logger.info("Nombre: ");
					var nombre1 = consola.nextLine();
					logger.info("Apellido: ");
					var apellido1 = consola.nextLine();
					logger.info("Telefono: ");
					var telefono1 = consola.nextLine();
					logger.info("Email: ");
					var email1 = consola.nextLine();
					estudiante2.setNombre(nombre1);
					estudiante2.setApellido(apellido1);
					estudiante2.setTelefono(telefono1);
					estudiante2.setEmail(email1);
					estudianteServicio.guardarEstudiante(estudiante2);
					logger.info("Estudiante modificado: " + estudiante2 + nl);
				}else{
					logger.info("Estudiante no encontrado: " + estudiante2 + nl);
				}
				break;
			case 5: // eliminar
				logger.info("Eliminar estudiante: " + nl);
				logger.info("Digite el id del estudiante: ");
				var idEstudiante2 = Integer.parseInt(consola.nextLine());
				var estudiante3 = estudianteServicio.buscarEstudiantePorId(idEstudiante2);
				if(estudiante3 != null){
					estudianteServicio.eliminarEstudiante(estudiante3);
					logger.info("Estudiante eliminado: " + estudiante3 + nl);
				} else {
					logger.info("Estudiante no encontrado: " + estudiante3 + nl);
				}
				break;
			case 6: //salir
				logger.info("Hasta pronto..." +nl+nl);
				salir=true;
				break;
			default:
				logger.info("Opción no encontrada: " + opcion + nl);
				break;
		}
		return salir;
	}

}
