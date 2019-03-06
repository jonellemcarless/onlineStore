-- SCHEMA

CREATE DATABASE onlineStore;
USE onlineStore;

CREATE TABLE products (
itemid INTEGER(10) NOT NULL,
productname VARCHAR(50) NOT NULL,
-- departmentname VARCHAR(20) NOT NULL,
price INTEGER(10) NOT NULL,
stock INTEGER(10) NOT NULL
);

INSERT INTO products (itemid, productname, price, stock)
VALUES (1001, "Sunglasses", 200, 10);

INSERT INTO products (itemid, productname, price, stock)
VALUES (1002, "Earrings", 50, 10);

INSERT INTO products (itemid, productname, price, stock)
VALUES (1003, "Ring", 100, 10);

INSERT INTO products (itemid, productname, price, stock)
VALUES (1004, "Necklace", 100, 10);

INSERT INTO products (itemid, productname, price, stock)
VALUES (1005, "Bracelet", 50, 10);

INSERT INTO products (itemid, productname, price, stock)
VALUES (1006, "Purse", 500, 10);

INSERT INTO products (itemid, productname, price, stock)
VALUES (1007, "Brooch", 150, 10);

INSERT INTO products (itemid, productname, price, stock)
VALUES (1008, "Hat", 50, 10);

INSERT INTO products (itemid, productname, price, stock)
VALUES (1009, "Lipstick", 25, 10);

INSERT INTO products (itemid, productname, price, stock)
VALUES (1010, "Mascara", 10, 10);