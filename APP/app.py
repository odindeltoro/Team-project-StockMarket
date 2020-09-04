import pandas as pd
from sqlalchemy import create_engine
from flask import Flask, render_template, request
from postgresql_key import password
import os

app = Flask(__name__)

# engine_string = os.environ.get("DATABASE_URL","")

@app.route("/")
def main():

    return render_template("index.html")

@app.route("/api/graph/<industry>")
def graph(industry):
    if industry =='sector':
        query=f"SELECT sector, COUNT(sector) FROM financials GROUP BY sector"
        engine=create_engine(f"postgresql+psycopg2://postgres:{password}@/StockPrices")
        data = pd.read_sql(query, engine)
        engine.dispose()
    else:
        query=f"SELECT industry ,COUNT(industry) FROM financials GROUP BY industry"
        engine=create_engine(f"")
        data = pd.read_sql(query,f"postgresql+psycopg2://postgres:{password}@/StockPrices")
        engine.dispose() 
    # print("connection succesful")
    return data.to_json()

if __name__ == "__main__":
    app.run()