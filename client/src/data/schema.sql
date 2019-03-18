-- SCHEMA

CREATE DATABASE store_db;
USE store_db;

CREATE TABLE products (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	price int(10) NOT NULL,
	quantity int(10) NOT NULL,
	PRIMARY KEY (id)
);