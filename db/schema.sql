DROP DATABASE IF EXISTS cars_dev;

CREATE DATABASE cars_dev;

\c cars_dev;

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image_url TEXT,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    model TEXT,
    make TEXT,
    is_new BOOLEAN DEFAULT true
);