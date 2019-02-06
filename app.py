import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

# Init app
app = Flask(__name__)

# Database Setup
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:password<32j4l0s@localhost:3306/pizza_db"  

# Init db
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save reference to the table
Pizza = Base.classes.keys()

# Flask Routes
@app.route("/")
def index():
    """Home page of site"""
    return render_template("index.html")

@app.route("/Locations")
def Maps(): 
    """ Location Maps"""
    return render_template("Maps.html")

@app.route("/data")
def data(): 
    """ data page"""
    return render_template("data.html")


# Run Server
if __name__ == "__main__":
    app.run(debug=True)