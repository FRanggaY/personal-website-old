-- educations definition

DROP TABLE IF EXISTS educations

CREATE TABLE educations (
	id TEXT(5) NOT NULL, 
    logo TEXT NOT NULL,
	"url" TEXT(65),
	createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
    isActive TEXT(1) DEFAULT (0) NOT NULL
);

DROP TABLE IF EXISTS educations_translations

CREATE TABLE educations_translations (
	id TEXT(5) NOT NULL,
	educationId TEXT(5) NOT NULL,
	"language" TEXT(5) NOT NULL,
	title TEXT(28) NOT NULL,
	"description" TEXT(65),
	degree TEXT(28),
	fieldOfStudy TEXT(28),
	"location" TEXT(28),
	grade TEXT(10),
	startDate TEXT(10) NOT NULL,
	endDate TEXT(10) NOT NULL,
	createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
	FOREIGN KEY (educationId) REFERENCES educations(id)
);