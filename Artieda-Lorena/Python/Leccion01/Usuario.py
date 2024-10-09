class Usuario:
    def __init__(self, id_usuario=None, username="", password=""):
        self.id_usuario = id_usuario
        self.username = username
        self.password = password

    def __str__(self):
        return f"Usuario(id_usuario={self.id_usuario}, username={self.username}, password={self.password})"

    # Getters y setters
    @property
    def id_usuario(self):
        return self._id_usuario

    @id_usuario.setter
    def id_usuario(self, value):
        self._id_usuario = value

    @property
    def username(self):
        return self._username

    @username.setter
    def username(self, value):
        self._username = value

    @property
    def password(self):
        return self._password

    @password.setter
    def password(self, value):
        self._password = value
