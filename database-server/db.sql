-- Creating a table 
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT, 
    price DECIMAL,
    image_url TEXT
);

--- Make database in Heroku and Connect to it with SQLtabs
-- Create 
INSERT INTO products -- Table Name 
(name, description, price, image_url) 
VALUES 
($1, $2, $3, $4);

-- Read 
SELECT * FROM products;

-- Read (1)
SELECT * FROM products 
WHERE product_id = $1;

-- Update
UPDATE products 
SET description = ${description} 
WHERE product_id = $1;

-- Delete
DELETE FROM products 
WHERE product_id = $1;