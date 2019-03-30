CREATE DATABASE arr_db;

USE arr_db;

CREATE TABLE array (numbers int(13));

INSERT INTO array (numbers) VALUES (4),(8),(13),(3),(2),(5),(7);

SELECT * FROM array;

SELECT * FROM array WHERE numbers=2;

DROP TABLE array;

DROP DATABASE arr_db;
