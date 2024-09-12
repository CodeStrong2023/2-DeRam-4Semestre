package UTN.datos;

import UTN.dominio.Estudiane;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import static UTN.conexion.Conexion.getConnection;

public class EstudianteDAO {

    public List<Estudiane> listarEstudiantes() {
        List<Estudiane> estudianes = new ArrayList<>();

        // Objetos necesarios para comunicarnos con la base de datos
        PreparedStatement ps; // Envía la sentencia a la base de datos
        ResultSet rs; // Obtenemos el resultado de la base de datos

        // Creamos un objeto de tipo conexion
        Connection con = getConnection();

        String sql = "SELECT * FROM estudiantes2023 ORDER BY idestudiante";
        try {
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                var estudiante = new Estudiane();
                estudiante.setIdestudiante(rs.getInt("idestudiante"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                estudianes.add(estudiante);
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
        return estudianes;
    }

    public static void main(String[] args) {
        // Listar los estudiantes
        var estudianteDao = new  EstudianteDAO();
        System.out.println("Listado de estudiantes");
        List<Estudiane> estudianes = estudianteDao.listarEstudiantes();
        estudianes.forEach(System.out::println);

    }
}
