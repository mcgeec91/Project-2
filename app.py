# Import Dependencies
import os
import pandas as pd
import numpy as np
import sqlalchemy as sql
import sqlalchemy

from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from config import dbuser, dbpasswd, dburi, dbport, dbname

import sys
sys.path.append("static/js")
sys.path.append("static/css")

# Create an engine for the database
connect_string = f"mysql://{dbuser}:{dbpasswd}@{dburi}:{dbport}/{dbname}"
sql_engine = sql.create_engine(connect_string)

# session = Session(sql_engine)

 # Use Pandas to perform the sql query
query = "select * from pizza"
pizza_sql = pd.read_sql_query(query, sql_engine)

# Convert to DataFrame
pizza_df = pd.DataFrame(pizza_sql)

# Init app
app = Flask(__name__)

# Flask Routes
@app.route("/")
def index():
    """Home page of site"""
    return render_template("index.html")

@app.route("/Map")
def Maps(): 
    """ Location Maps"""
    return render_template("map.html")

@app.route("/data")
def data(): 
    """ data page"""
    return render_template("data.html")

@app.route("/api/v1.0/Locations")
def locations():
    """json of all lat/long in dataset"""
    location = pizza_df.iloc[:,6:8].to_json()
    return jsonify(location)

@app.route("/api/v1.0/data")
def Data():
    """json of all data in dataset"""
    data = pizza_df.to_json(orient='columns')
    return data

# Run Server
if __name__ == "__main__":
    app.run(debug=True)