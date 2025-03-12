from backend.config.config import db

class Product(db.Model):

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String, nullable=False)
    sku_id = db.Column(db.String(50), unique=True, nullable=True)
    qtd = db.Column(db.Integer, default=0)
    location = db.Column(db.String(100), nullable=True)
    image_url = db.Column(db.String(255), nullable=True)
    weight = db.Column(db.Float, nullable=True)
    dimensions = db.Column(db.String(50), nullable=True)
    status = db.Column(db.String(20), default=True)
    date_created = db.Column(db.DateTime(6), default=db.func.current_timestamp(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())
