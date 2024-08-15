package utn.presentacion;

import java.util.Scanner;

import utn.conexion.Conexion;
import utn.datos.EstudianteDAO;
import utn.dominio.Estudiante;

public class SistemasEstudiantesApp {
    public static void main(String[] args) {
        var salir = false;
        var consola = new Scanner(System.in);
        var estudianteDao = new EstudianteDAO();
        while(!salir){
            try{
                mostrarMenu();
                salir = ejecutarOpciones(consola, estudianteDao);
            } catch(Exception e){
                System.out.println("Ocurrió un error al ejecutar la operación: " + e.getMessage());
            }
        }
    }


    private static void mostrarMenu(){
        System.out.print("""
                ***** Sistema de Estudiantes *****
                1. Listar estudiantes
                2.Buscar Estudiantes
                3.Agregar Estudiantes
                4.Modificar Estudiante
                5.Eliminar estudiante
                6.Salir
                Elige una opción:
                """);    
    }

    private static boolean ejecutarOpciones(Scanner consola, EstudianteDAO estudianteDao){
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion) {
            case 1: // listar
                System.out.println("Listado de Estudiantes...");
                var estudiantes = estudianteDao.listarEstudiantes(); // recibir listado
                estudiantes.forEach(System.out::println); // imprimir lista
            case 2: // buscar estudiante por id
                System.out.println("Introduce el id_estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var encontrado = estudianteDao.buscarEstudiantePorId(estudiante);
                if(encontrado){
                    System.out.println("Estudiante encontrado: " + estudiante);
                } else {
                    System.out.println("Estudiante no encontrado: " + estudiante);
                }
            case 3:
                System.out.println("Agregar estudiante: ");
                System.out.println("Nombre: ");
                var nombre = consola.nextLine();
                System.out.println("Apellido: ");
                var apellido = consola.nextLine();
                System.out.println("Telefono: ");
                var telefono = consola.nextLine();
                System.out.println("Email: ");
                var email = consola.nextLine();
                estudiante = new Estudiante(nombre, apellido, telefono, email);
                var agregado = estudianteDao.agregarEstudiante(estudiante);
                if(agregado){
                    System.out.println("Estudiante agregado: " + estudiante);
                } else {
                    System.out.println("Estudiante No agregado: " + estudiante);
                }
            case 4:
                System.out.println("Modificar estudiante: ");
                System.out.println("id Estudiante: ");
                idEstudiante = Integer.parseInt(consola.nextLine());
                System.out.println("Nombre: ");
                nombre = consola.nextLine();
                System.out.println("Apellido: ");
                apellido = consola.nextLine();
                System.out.println("Telefono: ");
                telefono = consola.nextLine();
                System.out.println("Email: ");
                email = consola.nextLine();
                estudiante = 
                    new Estudiante(idEstudiante, nombre, apellido, telefono, email);
                var modificado = estudianteDao.modificarEstudiantes(estudiante);
                if(modificado){
                    System.out.println("Estudiante modificado: " + estudiante);
                } else {
                    System.out.println("Estudiante no modificado: " + estudiante);
                }
            case 5:
                System.out.println("Eliminar estudiante: ");
                System.out.println("Id estudiante: ");
                idEstudiante = Integer.parseInt(consola.nextLine());
                estudiante = new Estudiante(idEstudiante);
                var eliminado = estudianteDao.eliminarEstudiante(estudiante);
                if(eliminado){
                    System.out.println("Estudiante eliminado: " + estudiante);
                } else {
                    System.out.println("Estudiante no eliminado: " + estudiante);
                }
            case 6:
                System.out.println("Hasta pronto...");
                salir = true;
            default:
                System.out.println("Opción no reconocida, ingrese otra opción");
        }
        return salir;
    }

}


