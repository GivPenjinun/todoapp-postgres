//CREATE DATABASE todoapp-postgres


CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

//INSERT INTO todos(id, user_email, title, progress, date) VALUES('0','penjinun.watt@gmail.com', 'First todo', 10 , 'Thu Oct 21 2023 13:25:46 GMT+0700(Gulf Standard Time)')