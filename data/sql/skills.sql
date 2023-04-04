-- skills definition

DROP TABLE IF EXISTS skills

CREATE TABLE skills (
	id TEXT(5) NOT NULL, 
    "url" TEXT(65),
    "image" TEXT(65),
	createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
    isActive TEXT(1) DEFAULT (0) NOT NULL
);

DROP TABLE IF EXISTS skills_translations

CREATE TABLE skills_translations (
    id TEXT(5) NOT NULL,
	skillId TEXT(5) NOT NULL,
    "language" TEXT(5) NOT NULL,
	"name" TEXT(10) NOT NULL,
    "description" TEXT(24) NOT NULL,
    "category" TEXT(10) NOT NULL,
    createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
	FOREIGN KEY (skillId) REFERENCES skills(id)
);