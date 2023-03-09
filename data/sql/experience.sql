-- experience definition

DROP TABLE IF EXISTS experiences

CREATE TABLE experiences (
  id TEXT(5) NOT NULL,
  "url" TEXT(65),
  image TEXT,
  created_at TEXT(10) NOT NULL,
  updated_at TEXT(10) NOT NULL,
  isActive TEXT(1) DEFAULT (0) NOT NULL
);

DROP TABLE IF EXISTS experiences_translations

CREATE TABLE experiences_translations (
    id TEXT(5) NOT NULL,
	experienceId TEXT(5) NOT NULL,
    "language" TEXT(5) NOT NULL,
	"name" TEXT(28) NOT NULL,
    "description" TEXT,
    employmentType TEXT(10) NOT NULL,
    companyName TEXT(34) NOT NULL,
    "location" TEXT(28),
    locationType TEXT(5),
    startDate TEXT(10) NOT NULL,
    endDate TEXT(10) NOT NULL,
    industry TEXT(34) NOT NULL,
	createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
	FOREIGN KEY (experienceId) REFERENCES experiences(id)
);