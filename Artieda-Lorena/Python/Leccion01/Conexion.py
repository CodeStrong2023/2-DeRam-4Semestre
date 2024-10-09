import psycopg2
from psycopg2 import pool

class Conexion:
    DATABASE = "usuarios_db"
    USERNAME = "postgres"
    PASSWORD = "admin"
    DB_PORT = "5432"  # o el puerto que utilices
    HOST = "localhost"  # o la IP de tu servidor
    MIN_CON = 1
    MAX_CON = 10
    pool = None

    @classmethod
    def obtenerPool(cls):
        if cls.pool is None:
            try:
                cls.pool = pool.SimpleConnectionPool(
                    cls.MIN_CON,
                    cls.MAX_CON,
                    user=cls.USERNAME,
                    password=cls.PASSWORD,
                    host=cls.HOST,
                    port=cls.DB_PORT,
                    database=cls.DATABASE
                )
                print("Pool creado exitosamente.")
            except Exception as e:
                print(f"Error creando el pool de conexiones: {e}")
        return cls.pool

    @classmethod
    def obtenerConexion(cls):
        conexion = None
        try:
            if cls.pool is None:
                cls.obtenerPool()
            conexion = cls.pool.getconn()
            print("Conexion obtenida exitosamente.")
        except Exception as e:
            print(f"Error obteniendo la conexión: {e}")
        return conexion

    @classmethod
    def liberarConexion(cls, conexion):
        try:
            cls.pool.putconn(conexion)
            print("Conexion liberada exitosamente.")
        except Exception as e:
            print(f"Error liberando la conexión: {e}")

    @classmethod
    def cerrarConexiones(cls):
        try:
            if cls.pool:
                cls.pool.closeall()
                print("Todas las conexiones han sido cerradas.")
        except Exception as e:
            print(f"Error cerrando las conexiones: {e}")
