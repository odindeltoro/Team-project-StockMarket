import pandas as pd
from sqlalchemy import create_engine
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def main():
    #  return "HolaMundoFlask"
    return render_template("index.html")



@app.route("/api/graph/<industry>")
def graph(industry):
    if industry =='sector':
        query=f"select sector, count(sector) from financials group by sector"
        engine=create_engine("postgresql+psycopg2://postgres:jaramillo35@/StockPrices")
        datos = pd.read_sql(query, engine)
        engine.dispose()
    else:
        query=f"select sector,industry ,count(industry) from financials group by industry,sector"
        engine=create_engine("postgresql+psycopg2://postgres:jaramillo35@/StockPrices")
        datos = pd.read_sql(query, engine)
        engine.dispose() 

    return datos.to_json()



if __name__ == "__main__":
    app.run()