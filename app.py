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

import folium
from folium import plugins
from folium.plugins import HeatMap

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

@app.route("/newyork")
def NewYork(): 
    """ New York Map"""
    return render_template("newyork.html")

@app.route("/chicago")
def Chicago(): 
    """ Chicago Map"""
    return render_template("chicago.html")

@app.route("/income")
def Income(): 
    """ Income Map"""
    return render_template("income.html")

@app.route("/api/v1.0/Locations")
def locations():
    """json of all lat/long in dataset"""
    location = pizza_df.iloc[:,:].to_json(orient="split")
    return (location)

@app.route("/api/v1.0/data")
def Data():
    """json of all data in dataset"""
    data = pizza_df.to_json(orient='columns')
    return data

@app.route("/HeatMap")
def heat():
    mapp = folium.Map(location=[40.730610, -73.935242],zoom_start = 5) 

    # Ensure you're handing it floats
    pizza_df["latitude"] = pizza_df["latitude"].astype(float)
    pizza_df["longitude"] = pizza_df["longitude"].astype(float)

    # Filter the DF for rows, then columns, then remove NaNs
    heat_df = pizza_df
    heat_df = heat_df[["latitude", "longitude"]]
    heat_df = heat_df.dropna(axis=0, subset=["latitude","longitude"])

    # List comprehension to make out list of lists
    heat_data = [[row["latitude"],row["longitude"]] for index, row in heat_df.iterrows()]

    # Plot it on the map
    HeatMap(heat_data).add_to(mapp)

    # Display the map
    mapp
    
    return render_template("heat.html")

# Run Server
if __name__ == "__main__":
    app.run(debug=True)