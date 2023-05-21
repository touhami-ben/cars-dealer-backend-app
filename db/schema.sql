DROP DATABASE IF EXISTS cars_dev;

CREATE DATABASE cars_dev;

\c cars_dev;

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image_url TEXT,
    price  INT NOT NULL DEFAULT 0,
    make TEXT,
    condition TEXT,
    is_available BOOLEAN DEFAULT true,
    color TEXT

);