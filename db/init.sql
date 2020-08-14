CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email VARCHAR(60),
    password TEXT
);