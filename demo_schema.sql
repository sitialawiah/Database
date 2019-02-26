CREATE DATABASE demo_schema;

CREATE TABLE articles (
id VARCHAR (20) NOT NULL,
title VARCHAR (100) NOT NULL,
body VARCHAR (100),
PRIMARY KEY (id)
);

SELECT*FROM demo_schema.articles;