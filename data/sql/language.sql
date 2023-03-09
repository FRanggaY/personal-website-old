-- languages definition

DROP TABLE IF EXISTS languages

CREATE TABLE languages (
	id TEXT(5) NOT NULL, 
    title TEXT(10) NOT NULL,
    "name" TEXT(10) NOT NULL,
    proficieny TEXT(10) NOT NULL,
    "image" TEXT(65),
	createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
    isActive TEXT(1) DEFAULT (0) NOT NULL
);