-- SQLite
-- Create tables
CREATE TABLE IF NOT EXISTS seller (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS house (
    id INT PRIMARY KEY,

    price DECIMAL(12, 2) NOT NULL,
    area DECIMAL(10, 2) NOT NULL,
    bedrooms INT NOT NULL,
    bathrooms INT NOT NULL,
    stories INT NOT NULL,
    parking INT NOT NULL,
    furnishingstatus VARCHAR(50) NOT NULL,
    mainroad BOOLEAN NOT NULL,
    guestroom BOOLEAN NOT NULL,
    basement BOOLEAN NOT NULL,
    hotwaterheating BOOLEAN NOT NULL,
    airconditioning BOOLEAN NOT NULL,
    prefarea BOOLEAN NOT NULL,
    
    description TEXT,
    picture_id INT NULL,
    seller_id INT NOT NULL,CONSTRAINT fk_house_seller 
        FOREIGN KEY (seller_id) 
        REFERENCES seller(id)
);

DELETE from seller;

SELECT * from seller;