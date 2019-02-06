# Import Dependencies
import os
import pandas as pd
import numpy as np
import sqlalchemy as sql
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
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

session = Session(sql_engine)

 # Use Pandas to perform the sql query
query = "select * from pizza"
dataFrame = pd.read_sql_query(query, sql_engine)

# Init app
app = Flask(__name__)

# Flask Routes
@app.route("/")
def index():
    """Home page of site"""
    return render_template("index.html")

@app.route("/Maps")
def Maps(): 
    """ Location Maps"""
    return render_template("Maps.html")

@app.route("/data")
def data(): 
    """ data page"""
    return render_template("data.html")

@app.route("/api/v1.0/Locations")
def locations():
    """json of all lat/long in dataset"""
    location = session.query(locations.latitude, locations.longitude).all()
    return jsonify(location)

@app.route("/api/v1.0/data")
def Data():
    """json of all data in dataset"""
    data = session.query(Data.all())
    return jsonify(data)

# Run Server
if __name__ == "__main__":
    app.run(debug=True)