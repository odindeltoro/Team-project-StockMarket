import pandas as pd
from sqlalchemy import create_engine
from flask import Flask, render_template, request
from postgresql_key import password

app = Flask(__name__)


@app.route("/")
def main():
    #  return "HolaMundoFlask"
    return render_template("index.html")



@app.route("/api/graph/<industry>")
def graph(industry):
    if industry =='sector':
        query=f"SELECT sector, COUNT(sector) FROM financials GROUP BY sector"
        engine=create_engine(f"postgresql+psycopg2://postgres:{password}@/StockPrices")
        datos = pd.read_sql(query, engine)
        engine.dispose()
    else:
        query=f"SELECT sector,industry ,COUNT(industry) FROM financials GROUP BY industry,sector"
        engine=create_engine(f"postgresql+psycopg2://postgres:{password}@/StockPrices")
        datos = pd.read_sql(query, engine)
        engine.dispose() 
    # print("connection succesful")
    return datos.to_json()



if __name__ == "__main__":
    app.run()