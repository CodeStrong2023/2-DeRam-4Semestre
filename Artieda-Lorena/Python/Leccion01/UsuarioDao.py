from CursorDelPool import CursorDelPool
from Usuario import Usuario


class UsuarioDao:
    SELECCIONAR = "SELECT * FROM usuarios"
    INSERTAR = "INSERT INTO usuarios(username, password) VALUES (%s, %s)"
    ACTUALIZAR = "UPDATE usuarios SET username=%s, password=%s WHERE id_usuario=%s"
    ELIMINAR = "DELETE FROM usuarios WHERE id_usuario=%s"

    @classmethod
    def seleccionar(cls):
        usuarios = []
        try:
            with CursorDelPool() as cursor:
                cursor.execute(cls.SELECCIONAR)
                registros = cursor.fetchall()
                for registro in registros:
                    usuario = Usuario(id_usuario=registro[0], username=registro[1], password=registro[2])
                    usuarios.append(usuario)
        except Exception as e:
            print(f"Error al seleccionar usuarios: {e}")
        return usuarios

    @classmethod
    def insertar(cls, usuario):
        try:
            with CursorDelPool() as cursor:
                valores = (usuario.username, usuario.password)
                cursor.execute(cls.INSERTAR, valores)
                print("Usuario insertado exitosamente.")
        except Exception as e:
            print(f"Error al insertar usuario: {e}")

    @classmethod
    def actualizar(cls, usuario):
        try:
            with CursorDelPool() as cursor:
                valores = (usuario.username, usuario.password, usuario.id_usuario)
                cursor.execute(cls.ACTUALIZAR, valores)
                print("Usuario actualizado exitosamente.")
        except Exception as e:
            print(f"Error al actualizar usuario: {e}")

    @classmethod
    def eliminar(cls, usuario):
        try:
            with CursorDelPool() as cursor:
                valores = (usuario.id_usuario,)
                cursor.execute(cls.ELIMINAR, valores)
                print("Usuario eliminado exitosamente.")
        except Exception as e:
            print(f"Error al eliminar usuario: {e}")
