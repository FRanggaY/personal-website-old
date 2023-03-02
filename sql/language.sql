-- languages definition

DROP TABLE IF EXISTS languages

CREATE TABLE languages (
	id TEXT(5) NOT NULL, 
    title TEXT(10) NOT NULL,
	createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
    isActive TEXT(1) DEFAULT (0) NOT NULL
);

INSERT INTO languages (id, title, createdAt, updatedAt, isActive) VALUES ('l0001', 'in_ID', '3/2/2023', '3/2/2023', '1');

INSERT INTO languages (id, title, createdAt, updatedAt, isActive) VALUES ('l0002', 'en_US', '3/2/2023', '3/2/2023', '1');