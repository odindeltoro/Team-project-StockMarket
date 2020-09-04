from .app import db

class StockPrice(db.Model):
    __tablename__ = 'financials'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    sector = db.Column(db.String(64))
    industry = db.Column(db.String(64))

    def __repr__(self):
        return '<StockPrice %r>' % (self.name)