# Project-2 Data Visualizations

# Usage

- In order to run this website with its full capabilities, there's a few simple steps that need to be done. 

# Step 1: Clone repository

- Git Clone the repository onto your local disk/computer.

# Step 2: SQL Database

- Using localhost:3306 in MySQL, run this line "CREATE DATABASE pizza_db;" in a query.
- Import the Csv Data into MySQL using the table import wizard naming the table "pizza".
- Once table is created, The database will be able to be accessed when you call for it. 

# Step 3: Changing config.py

- The password is left out of config.py file for the repository so you will need to add your password for "localhost:3306". If you didn't put your database in your localhost:3306, you will need to change your config.py so that your computer can access the Database. 

# Step 4: Running app.py

- To launch the website, you will need to run the command "python app.py" while you are in the directory of the repository. I have folium on my environment which is under "source activate 'myenv'". You may need to install the current version of folium in order to get the site to run. "pip install folium" while in your environment should be all that needs to be done to run this website on "http://127.0.0.1:5000/"
