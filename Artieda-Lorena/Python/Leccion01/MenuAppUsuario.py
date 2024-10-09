from Usuario import Usuario
from UsuarioDao import UsuarioDao


class MenuAppUsuario:
    @staticmethod
    def mostrar_menu():
        print("\nMenú de Usuario:")
        print("1) Listar usuarios")
        print("2) Agregar usuario")
        print("3) Actualizar usuario")
        print("4) Eliminar usuario")
        print("5) Salir")

    @staticmethod
    def ejecutar():
        while True:
            MenuAppUsuario.mostrar_menu()
            opcion = input("Selecciona una opción: ")

            if opcion == '1':
                usuarios = UsuarioDao.seleccionar()
                for usuario in usuarios:
                    print(usuario)

            elif opcion == '2':
                username = input("Introduce el nombre de usuario: ")
                password = input("Introduce la contraseña: ")
                nuevo_usuario = Usuario(username=username, password=password)
                UsuarioDao.insertar(nuevo_usuario)

            elif opcion == '3':
                id_usuario = int(input("Introduce el ID del usuario a actualizar: "))
                username = input("Introduce el nuevo nombre de usuario: ")
                password = input("Introduce la nueva contraseña: ")
                usuario_actualizado = Usuario(id_usuario=id_usuario, username=username, password=password)
                UsuarioDao.actualizar(usuario_actualizado)

            elif opcion == '4':
                id_usuario = int(input("Introduce el ID del usuario a eliminar: "))
                usuario_a_eliminar = Usuario(id_usuario=id_usuario)
                UsuarioDao.eliminar(usuario_a_eliminar)

            elif opcion == '5':
                print("Saliendo del programa...")
                break

            else:
                print("Opción no válida. Inténtalo de nuevo.")

if __name__ == "__main__":
    MenuAppUsuario.ejecutar()
