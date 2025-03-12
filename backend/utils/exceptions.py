

class UserCreationException(Exception):
    def __init__(self, message="Ocorreu um erro ao criar o seu usuário!"):
        self.message = message
        super().__init__(self.message)

class UserNotFoundException(Exception):
    def __init__(self, message="Usuário não encontrado."):
        self.message = message
        super().__init__(self.message)
