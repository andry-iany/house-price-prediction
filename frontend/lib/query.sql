-- SQLite
-- Create tables
CREATE TABLE IF NOT EXISTS seller (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS house (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

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
DELETE from house;
DROP TABLE house;

SELECT * from seller;

SELECT * from house;

select house.*, seller.name as seller_name, seller.email as seller_email
from house 
inner join seller 
on seller.id = house.seller_id
where seller_id in (
    select id from seller where email = 'jammy@gmail.com'
);


-- SEEDS
INSERT INTO house (
  price, area, bedrooms, bathrooms, stories, parking, 
  furnishingstatus, mainroad, guestroom, basement, 
  hotwaterheating, airconditioning, prefarea, description, 
  picture_id, seller_id
) VALUES
  (1300000.00, 9020.00, 8, 6, 2, 2, 'furnished', TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!', 1, 10),
  (1250000.00, 7420.00, 6, 2, 2, 2, 'furnished', TRUE, FALSE, FALSE, TRUE, TRUE, TRUE, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!', 2, 9),
  (250000.00, 7420.00, 4, 2, 2, 2, 'furnished', TRUE, FALSE, FALSE, TRUE, TRUE, TRUE, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!', 3, 10),
  (150000.00, 7420.00, 4, 2, 2, 2, 'furnished', TRUE, FALSE, FALSE, TRUE, TRUE, TRUE, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!', 4, 8),
  (3250000.00, 7420.00, 4, 2, 2, 2, 'furnished', TRUE, FALSE, FALSE, TRUE, TRUE, TRUE, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!', 5, 8),
  (120000.00, 7420.00, 4, 2, 2, 2, 'furnished', TRUE, FALSE, FALSE, TRUE, TRUE, TRUE, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!', 6, 8),
  (350000.00, 7420.00, 5, 2, 2, 2, 'furnished', TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!', 7, 8),
  (5250000.00, 7420.00, 6, 2, 2, 2, 'furnished', TRUE, TRUE, FALSE, TRUE, TRUE, TRUE, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!', 8, 8),
  (1250000.00, 7420.00, 4, 2, 2, 2, 'furnished', TRUE, FALSE, FALSE, TRUE, TRUE, TRUE, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!', 9, 9);