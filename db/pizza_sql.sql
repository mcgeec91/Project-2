#DROP DATABASE IF EXISTS pizza_db;
#CREATE DATABASE pizza_db;
#USE pizza_db;

-- create tables 
#DROP TABLE pizza;
#SELECT * FROM pizza_db.8358pizza;
#RENAME TABLE 8358pizza TO pizza;
#SELECT * FROM pizza_db.data2 where AveragePrice < 1;

-- create new table with pizza_db 
SELECT * FROM pizza_db.datapizza;
RENAME TABLE datapizza TO pizza;
SELECT * FROM pizza_db.pizza;