from database.db import db

class Marca(db.Model):
    def to_dict(self):
        return {
            'codigo': self.codigo,
            'nome': self.nome
        }
    
    codigo = db.Column(db.Integer, primary_key = True, unique= True, nullable = False) 
    nome = db.Column(db.String(100), nullable = False)

    def __init__(self,codigo, nome):
        self.codigo = codigo
        self.nome = nome