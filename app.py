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
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://username:password@server/db" #"sqlite:///db/bellybutton.sqlite" 

# Init db
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save reference to the table
Pizza = Base.classes.pizza 

# Flask Routes
@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")




# Run Server
if __name__ == "__main__":
    app.run(debug=True)