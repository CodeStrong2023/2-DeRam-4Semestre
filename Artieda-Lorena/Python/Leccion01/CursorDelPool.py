from Conexion import Conexion


class CursorDelPool:
    def __init__(self):
        self.conn = None
        self.cursor = None

    def __enter__(self):
        try:
            # Obtenemos una conexión desde el pool de la clase Conexion
            self.conn = Conexion.obtenerConexion()
            # Creamos un cursor a partir de la conexión obtenida
            self.cursor = self.conn.cursor()
            print("Cursor creado exitosamente.")
            return self.cursor
        except Exception as e:
            print(f"Error al obtener el cursor: {e}")
            raise

    def __exit__(self, exc_type, exc_val, exc_tb):
        # Manejo de errores si ocurre alguno durante la ejecución del bloque con
        if exc_val:
            self.conn.rollback()  # Realiza un rollback si ocurre una excepción
            print("Transacción revertida debido a un error.")
        else:
            self.conn.commit()  # Realiza un commit si no hay errores
            print("Transacción realizada exitosamente.")

        # Cerramos el cursor
        if self.cursor:
            self.cursor.close()
            print("Cursor cerrado.")

        # Liberamos la conexión de vuelta al pool
        if self.conn:
            Conexion.liberarConexion(self.conn)
            print("Conexión liberada al pool.")

