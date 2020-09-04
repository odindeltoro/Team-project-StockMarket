import pandas as pd
from sqlalchemy import create_engine
from flask import Flask, render_template, request
import os

app = Flask(__name__)

engine_string = os.environ.get("DATABASE_URL","")

@app.route("/")
def main():

    return render_template("index.html")

@app.route("/api/graph/<industry>")
def graph(industry):
    if industry =='sector':
        query=f"SELECT sector, COUNT(sector) FROM financials GROUP BY sector"
        engine=create_engine(engine_string)
        data = pd.read_sql(query, engine)
        engine.dispose()
    else:
        query=f"SELECT sector,industry ,COUNT(industry) FROM financials GROUP BY industry,sector"
        engine=create_engine(engine_string)
        data = pd.read_sql(query, engine)
        engine.dispose() 
    # print("connection succesful")
    return data.to_json(orient="records")

if __name__ == "__main__":
    app.run()