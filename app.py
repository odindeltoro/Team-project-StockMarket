import os
import pandas as pd
from flask import Flask, render_template, request,jsonify,redirect

app = Flask(__name__)

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from .models import StockPrice

@app.route("/")
def main():

    return render_template("index.html")

@app.route("/api/graph/<industry>")
def graph(industry):
    results = db.session.query(StockPrice.name, StockPrice.sector, StockPrice.industry).all()

    return jsonify(results)

if __name__ == "__main__":
    app.run()


# from sqlalchemy import create_engine

# engine_string = os.environ.get("DATABASE_URL","")

# @app.route("/send", methods=["GET", "POST"])
# def send():
#     if request.method == "POST":
#         name = request.form["stockName"]
#         sector = request.form["stockSector"]
#         industry = request.form["stockIndustry"]

#         stockprice = StockPrice(name=name, sector=sector, industry=industry)
#         db.session.add(stockprice)
#         db.session.commit()
#         return redirect("/", code=302)

#     return render_template("index.html")

# @app.route("/api/graph/<industry>")
# def graph(industry):
#     if industry == "sector":
#         query = f"SELECT sector, COUNT(sector) FROM financials GROUP BY sector"
#         engine = create_engine(engine_string)
#         data = pd.read_sql(query, engine)
#         engine.dispose()
#     else:
#         query = f"SELECT industry, COUNT(industry) FROM financials GROUP BY industry"
#         engine = create_engine(engine_string)
#         data = pd.read_sql(query, engine)
#         engine.dispose() 

#     return data.to_json() 