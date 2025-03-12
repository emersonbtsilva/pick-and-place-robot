from backend.config.config import app, db
from backend.modules.auth.request_login import user_bp


app.register_blueprint(user_bp, url_prefix='/users')
 
if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(host='0.0.0.0', port=5000, debug=True)
