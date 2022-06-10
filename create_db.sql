DROP SCHEMA IF EXISTS dg_api;
CREATE SCHEMA dg_api;
USE dg_api;

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    birth DATE NOT NULL,
    PRIMARY KEY(id)
);

-- INSERT INTO users (username, birth)
-- VALUES ('José Augusto', '1960-05-21'),
-- 	('João Almeida', '1985-03-27'),
-- 	('Maria Santana', '1971-11-02');
