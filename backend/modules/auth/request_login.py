from flask import Blueprint, request, jsonify
from backend.models import User
from sqlalchemy.exc import IntegrityError
from backend.config.config import db
from backend.utils.exceptions import UserCreationException 

user_bp = Blueprint('users', __name__)

@user_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')


    if not email or not password:
        return jsonify({'success': False, 'message': 'Email e senha são obrigatórios.'}), 400


    if '@' not in email:
        return jsonify({'success': False, 'message': 'Email inválido. O email deve conter "@".'}), 400

    user = User.query.filter_by(email=email, password=password).first()

    if user:
        return jsonify({'success': True, 'message': 'Login realizado com sucesso!'})
    else:
        raise UserCreationException('Email ou senha incorretos.')

@user_bp.route("/create", methods=["POST"])
def create_user():
    username = request.json.get("username")
    email = request.json.get("email")
    password = request.json.get("password")

    if not username or not email or not password:
        return jsonify({"message": "Preencha as informações acima!"}), 400

    new_user = User(username=username, email=email, password=password)

    try:
        db.session.add(new_user)
        db.session.commit()
    except IntegrityError:
        db.session.rollback()
        raise UserCreationException("Usuário já existe!")  
    except Exception as e:
        db.session.rollback()
        raise UserCreationException("Erro desconhecido ao criar o usuário.") from e  

    return jsonify({"message": "Usuário criado com sucesso!"}), 201
