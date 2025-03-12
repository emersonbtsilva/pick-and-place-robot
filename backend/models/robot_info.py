from backend.config.config import db

class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=False, nullable=False)
    numero_serie = db.Column(db.Text(),  nullable=False)
    description = db.Column(db.Text(), nullable=False)
  
 
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "numero_serie": self.numero_serie,
            "description": self.description,        
        }