-- social_media definition

DROP TABLE IF EXISTS social_media

CREATE TABLE social_media (
	id TEXT(5) NOT NULL, 
    "username" TEXT(32) NOT NULL,
    "name" TEXT(10) NOT NULL,
    "url" TEXT(65),
    "image" TEXT(48) NOT NULL,
	createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
    isActive TEXT(1) DEFAULT (0) NOT NULL
);
