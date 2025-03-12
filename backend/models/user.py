from config.config import db
import secrets
import string

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=False, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    date_created = db.Column(db.DateTime(6), default=db.func.current_timestamp(), nullable=False)
    recovery_code = db.Column(db.String(200), nullable=True)
    active = db.Column(db.Boolean, default=True, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "password": self.password,
            "date_created": self.date_created,
            "active": self.active,
        }
    
    @classmethod
    def find_by_email(cls, email):
        """Busca um usuário pelo email."""
        return cls.query.filter_by(email=email).first()



    #TODO Gerar o codigo aleatorio para recuperar senha
    # @staticmethod
    # def generate_recovery_code(length=6):
    #     characters = string.ascii_letters + string.digits
    #     return ''.join(secrets.choice(characters) for _ in range(length))
